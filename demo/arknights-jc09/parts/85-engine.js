// ==========================================================================
// 85-engine.js
// Interactive State Machine · 7-State Toggle Filter Matrix · Contradiction Lock
// Web Audio Synthesizer · Keyboard Navigation · localStorage Persistence
// ==========================================================================

(function () {
  'use strict';

  const SEVEN_STATES = ['normal', 'on', 'off', 'select', 'selected', 'unselect', 'unselected'];
  const STORAGE_KEY = 'jc09:state:v1';

  const defaultState = {
    activeView: 'witness',
    selectedWitness: 'W05',
    witnessLayer: 'surface', // 'surface' | 'deep'
    decryptedWitnesses: ['W05'], // W05 deep can also be unlocked via filter, start with W05 surface ready
    unlockedDeep: {},            // map of witnessId -> boolean
    synapseTarget: 'W05',
    filterStates: ['normal', 'off', 'unselected', 'select'],
    activeTimeNode: 0,
    selectedExhibit: 'B01',
    currentAct: 1,               // 1..4
    completedActs: [],           // [1, 2, 3, 4]
    dossierActTab: 1,
    slotA: null,                 // { id, title, summary }
    slotB: null,
    verdict: null,               // 'broadcast' | 'coverup' | 'silence' | null
    hintOn: false,
    audioOn: false
  };

  let state = loadState();
  let audioCtx = null;
  let humOsc = null;
  let humGain = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return JSON.parse(JSON.stringify(defaultState));
      const parsed = JSON.parse(raw);
      return Object.assign({}, JSON.parse(JSON.stringify(defaultState)), parsed);
    } catch (_) {
      return JSON.parse(JSON.stringify(defaultState));
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  // ---- Web Audio Synthesizer (Zero External Audio Files) ----
  function ensureAudio() {
    if (!audioCtx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(function () {});
    }
  }

  function setAmbientHum(on) {
    if (!on) {
      if (humGain && audioCtx) {
        try { humGain.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.08); } catch (_) {}
      }
      return;
    }
    ensureAudio();
    if (!audioCtx) return;
    if (!humOsc) {
      try {
        humOsc = audioCtx.createOscillator();
        humGain = audioCtx.createGain();
        humOsc.type = 'sine';
        humOsc.frequency.value = 55; // 55Hz judicial console transformer hum
        humGain.gain.value = 0.018;
        humOsc.connect(humGain);
        humGain.connect(audioCtx.destination);
        humOsc.start();
      } catch (_) {}
    } else if (humGain) {
      try { humGain.gain.setTargetAtTime(0.018, audioCtx.currentTime, 0.1); } catch (_) {}
    }
  }

  function playTone(freq, durationMs, type, gainVal) {
    if (!state.audioOn) return;
    ensureAudio();
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      osc.type = type || 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      g.gain.setValueAtTime(gainVal || 0.04, audioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + durationMs / 1000);
      osc.connect(g);
      g.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + durationMs / 1000 + 0.02);
    } catch (_) {}
  }

  function sfxClick() { playTone(680, 45, 'square', 0.025); }
  function sfxSwitch() { playTone(440, 70, 'triangle', 0.04); }
  function sfxBreakthrough() {
    playTone(523.25, 140, 'triangle', 0.05);
    setTimeout(function () { playTone(659.25, 160, 'triangle', 0.05); }, 90);
    setTimeout(function () { playTone(783.99, 260, 'sine', 0.06); }, 180);
  }
  function sfxError() {
    playTone(160, 180, 'sawtooth', 0.045);
  }

  function logTicker(msg) {
    const el = document.getElementById('bottom-live-log');
    if (el) el.textContent = '[LOG] ' + msg;
  }

  // ---- View Switching (Zero Root Scroll) ----
  function switchView(viewName) {
    if (!['witness', 'synapse', 'blackbox', 'verdict'].includes(viewName)) return;
    state.activeView = viewName;
    saveState();

    document.querySelectorAll('.nav-tab').forEach(function (btn) {
      const active = btn.getAttribute('data-view') === viewName;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    document.querySelectorAll('.view-panel').forEach(function (panel) {
      panel.classList.toggle('is-active', panel.id === 'view-' + viewName);
    });

    sfxClick();
    logTicker('已切换至主视图 // ' + viewName.toUpperCase());
  }

  // ---- Witness Roster & Statement Rendering (View 01) ----
  function renderWitnessView() {
    const w = window.JC09_WITNESSES[state.selectedWitness] || window.JC09_WITNESSES.W05;
    const isDeepUnlocked = !!state.unlockedDeep[w.id];
    if (state.witnessLayer === 'deep' && !isDeepUnlocked) {
      state.witnessLayer = 'surface';
    }

    const actObj = window.JC09_ACTS[state.currentAct] || window.JC09_ACTS[1];

    document.querySelectorAll('.witness-card').forEach(function (card) {
      const wid = card.getAttribute('data-witness');
      card.classList.toggle('is-selected', wid === w.id);
      card.classList.toggle('is-hinted', state.hintOn && wid === actObj.hintWitness);
    });

    const activeCode = document.getElementById('witness-active-code');
    if (activeCode) activeCode.textContent = 'WITNESS // ' + w.id + ' ' + w.rarity + '★';

    const seatTag = document.getElementById('w-seat-tag');
    if (seatTag) seatTag.textContent = w.seat;

    const starBadge = document.getElementById('w-star-badge');
    if (starBadge) starBadge.textContent = w.stars;

    const portraitGraphic = document.getElementById('w-portrait-graphic');
    if (portraitGraphic) {
      portraitGraphic.setAttribute('class', 'ui-color-graphic ' + w.tintClass);
      portraitGraphic.innerHTML = w.portraitSvg;
    }

    const tierText = document.getElementById('w-tier-text');
    if (tierText) tierText.textContent = w.tierText;

    const bciModel = document.getElementById('w-bci-model');
    if (bciModel) bciModel.textContent = w.bciModel;

    const decryptStatus = document.getElementById('w-decrypt-status');
    if (decryptStatus) {
      decryptStatus.textContent = isDeepUnlocked ? '深层残响已破译' : '待七态滤波破译';
      decryptStatus.style.color = isDeepUnlocked ? 'var(--c-accent-green)' : 'var(--c-brand-yellow)';
    }

    const nameHeading = document.getElementById('w-name-heading');
    if (nameHeading) nameHeading.textContent = w.name;

    const roleSub = document.getElementById('w-role-sub');
    if (roleSub) roleSub.textContent = w.role;

    const btnSurface = document.getElementById('btn-layer-surface');
    const btnDeep = document.getElementById('btn-layer-deep');
    const labelDeep = document.getElementById('label-layer-deep');

    if (btnSurface) {
      btnSurface.setAttribute('data-state', state.witnessLayer === 'surface' ? 'on' : 'normal');
    }
    if (btnDeep) {
      if (!isDeepUnlocked) {
        btnDeep.setAttribute('data-state', 'off');
      } else {
        btnDeep.setAttribute('data-state', state.witnessLayer === 'deep' ? 'selected' : 'normal');
      }
    }
    if (labelDeep) {
      labelDeep.textContent = isDeepUnlocked ? 'LAYER B // 深层残响 [已破译]' : 'LAYER B // 深层残响 [未破译]';
    }

    const layerData = state.witnessLayer === 'deep' && isDeepUnlocked ? w.deep : w.surface;
    const clipIdEl = document.getElementById('w-clip-id');
    const clipTagEl = document.getElementById('w-clip-tag');
    const textEl = document.getElementById('w-statement-text');
    const noteEl = document.getElementById('w-forensic-note');

    if (clipIdEl) clipIdEl.textContent = layerData.clipId;
    if (clipTagEl) {
      clipTagEl.textContent = layerData.tag;
      clipTagEl.style.background = state.witnessLayer === 'deep' ? 'var(--c-brand-yellow)' : 'var(--c-panel)';
      clipTagEl.style.color = state.witnessLayer === 'deep' ? 'var(--c-canvas)' : 'var(--c-ink)';
    }
    if (textEl) textEl.textContent = layerData.text;
    if (noteEl) noteEl.innerHTML = layerData.note;
  }

  // ---- 17-Second Synapse Slicer & 7-State Toggle Matrix (View 02) ----
  function computeFilterMatch(w) {
    let matched = 0;
    for (let i = 0; i < 4; i++) {
      if (state.filterStates[i] === w.recipe[i]) matched++;
    }
    return matched;
  }

  function renderSynapseView() {
    const w = window.JC09_WITNESSES[state.synapseTarget] || window.JC09_WITNESSES.W05;
    const badge = document.getElementById('synapse-target-badge');
    if (badge) badge.textContent = 'TARGET: ' + w.id + ' ' + w.name + ' (' + w.rarity + '★)';

    document.querySelectorAll('[data-syn-witness]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-syn-witness') === w.id);
    });

    const recipeHint = document.getElementById('synapse-recipe-hint');
    if (recipeHint) {
      recipeHint.textContent = '目标解锁配方: ' + w.recipeLabel;
    }

    for (let i = 0; i < 4; i++) {
      const chip = document.getElementById('filter-ch-' + i);
      if (chip) {
        const st = state.filterStates[i] || 'normal';
        chip.setAttribute('data-state', st);
        const label = chip.querySelector('.chip-state-text');
        if (label) label.textContent = st.toUpperCase();
      }
    }

    const matched = computeFilterMatch(w);
    const pct = Math.round((matched / 4) * 100);
    const isUnlocked = !!state.unlockedDeep[w.id];

    const matchBadge = document.getElementById('osc-match-badge');
    if (matchBadge) {
      matchBadge.textContent = isUnlocked ? '已破译 100%' : '滤波匹配度 ' + pct + '%';
      matchBadge.style.background = (matched === 4 || isUnlocked) ? 'var(--c-confirm-gold)' : 'var(--c-panel)';
      matchBadge.style.color = (matched === 4 || isUnlocked) ? 'var(--c-canvas)' : 'var(--c-ink)';
    }

    const oscTitle = document.getElementById('osc-status-title');
    if (oscTitle) {
      oscTitle.textContent = (matched === 4 || isUnlocked)
        ? 'WAVEFORM // 17.0s 神经掩码已对齐！可点击右下角「执行深层剥离并查阅证词」'
        : 'WAVEFORM // 17.0s NEURAL ENVELOPE (点击上方七态开关或「校准目标特征码」匹配配方)';
    }

    // Update oscilloscope SVG path dynamically based on match count
    const deepPath = document.getElementById('wave-path-deep');
    if (deepPath) {
      if (matched === 4 || isUnlocked) {
        deepPath.setAttribute('d', 'M 0 44 L 90 44 L 115 14 L 135 74 L 155 44 L 360 44 L 385 10 L 405 78 L 425 44 L 760 44');
        deepPath.setAttribute('stroke-dasharray', 'none');
      } else {
        deepPath.setAttribute('d', 'M 0 44 C 70 78 130 10 210 56 C 290 80 350 8 430 44 C 510 82 610 14 760 44');
        deepPath.setAttribute('stroke-dasharray', '5 3');
      }
    }

    // Time nodes
    document.querySelectorAll('[data-time-node]').forEach(function (btn) {
      const idx = Number(btn.getAttribute('data-time-node'));
      btn.classList.toggle('is-active', idx === state.activeTimeNode);
    });
    const nodeObj = window.JC09_TIME_NODES[state.activeTimeNode] || window.JC09_TIME_NODES[0];
    const readout = document.getElementById('synapse-readout-text');
    if (readout) readout.innerHTML = nodeObj.text;
  }

  // ---- Blackbox Exhibit Rendering (View 03) ----
  function renderBlackboxView() {
    const ev = window.JC09_EXHIBITS[state.selectedExhibit] || window.JC09_EXHIBITS.B01;
    const actObj = window.JC09_ACTS[state.currentAct] || window.JC09_ACTS[1];

    document.querySelectorAll('.evidence-row').forEach(function (row) {
      const id = row.getAttribute('data-evidence');
      row.classList.toggle('is-selected', id === ev.id);
      row.classList.toggle('is-hinted', state.hintOn && id === actObj.hintEvidence);
    });

    const codeEl = document.getElementById('blackbox-active-code');
    if (codeEl) codeEl.textContent = ev.code;

    const titleEl = document.getElementById('ev-title-heading');
    if (titleEl) titleEl.textContent = ev.title;

    const subEl = document.getElementById('ev-id-sub');
    if (subEl) subEl.textContent = ev.sub;

    const descEl = document.getElementById('ev-desc-text');
    if (descEl) descEl.textContent = ev.desc;

    const noteEl = document.getElementById('ev-forensic-note');
    if (noteEl) noteEl.innerHTML = ev.note;

    const hashEl = document.getElementById('ev-hash-code');
    if (hashEl) hashEl.textContent = ev.hash;

    const svgGroup = document.getElementById('ev-svg-graphic');
    if (svgGroup) {
      svgGroup.setAttribute('class', 'ui-color-graphic ' + ev.tintClass);
      svgGroup.innerHTML = ev.svg;
    }
  }

  // ---- Verdict & Four-Act Dossier Rendering (View 04) ----
  function renderVerdictView() {
    const actNum = state.dossierActTab || state.currentAct;
    const actData = window.JC09_ACTS[actNum] || window.JC09_ACTS[1];
    const isCompleted = state.completedActs.includes(actNum);
    const isAccessible = actNum <= state.currentAct || isCompleted;

    document.querySelectorAll('[data-dossier-act]').forEach(function (btn) {
      const n = Number(btn.getAttribute('data-dossier-act'));
      btn.classList.toggle('is-active', n === actNum);
    });

    const lockBadge = document.getElementById('dossier-lock-badge');
    if (lockBadge) {
      if (isCompleted) {
        lockBadge.textContent = '逻辑已击穿';
        lockBadge.style.background = 'var(--c-accent-green)';
        lockBadge.style.color = 'var(--c-ink)';
      } else if (isAccessible) {
        lockBadge.textContent = '当前审理中';
        lockBadge.style.background = 'var(--c-primary)';
        lockBadge.style.color = 'var(--c-on-primary)';
      } else {
        lockBadge.textContent = '待前序幕次解锁';
        lockBadge.style.background = 'var(--c-panel-deep)';
        lockBadge.style.color = 'var(--c-ink-disabled)';
      }
    }

    const headingEl = document.getElementById('dossier-act-heading');
    const bodyEl = document.getElementById('dossier-act-body');
    const conclusionEl = document.getElementById('dossier-act-conclusion');

    if (headingEl) headingEl.textContent = actData.heading;
    if (bodyEl) {
      bodyEl.textContent = isCompleted ? actData.unlockedBody : actData.body;
    }
    if (conclusionEl) {
      conclusionEl.innerHTML = isCompleted
        ? actData.unlockedBody
        : actData.guide;
    }

    // Ending state
    const statusBadge = document.getElementById('verdict-status-badge');
    const epilogueEl = document.getElementById('verdict-epilogue-summary');
    const clearBtn = document.getElementById('btn-clear-verdict');
    const sigEl = document.getElementById('verdict-sig-code');

    if (state.verdict && window.JC09_ENDINGS[state.verdict]) {
      const endObj = window.JC09_ENDINGS[state.verdict];
      if (statusBadge) statusBadge.textContent = endObj.code;
      if (epilogueEl) {
        epilogueEl.innerHTML = '<strong style="color:var(--c-brand-yellow);">' + endObj.title + '</strong><br>' + endObj.text;
      }
      if (clearBtn) clearBtn.style.display = 'inline-flex';
      if (sigEl) sigEl.textContent = endObj.code;
    } else {
      if (statusBadge) {
        statusBadge.textContent = state.completedActs.length >= 4
          ? 'CASE STATUS: READY FOR VERDICT'
          : 'CASE STATUS: ACT ' + state.currentAct + ' / 4';
      }
      if (epilogueEl) {
        epilogueEl.textContent = state.completedActs.length >= 4
          ? '全部四幕矛盾已击穿！请点击右侧三项公诉裁决之一签署最终结案陈词。'
          : '完成全部四幕逻辑击穿（或随时在右侧提前签署裁决）后，此处将归档终局结案陈词。';
      }
      if (clearBtn) clearBtn.style.display = 'none';
      if (sigEl) sigEl.textContent = 'PENDING';
    }
  }

  // ---- Top HUD, Left Telemetry & Right Contradiction Lock Inspector ----
  function renderInspectorAndHud() {
    // Top Act pills
    for (let a = 1; a <= 4; a++) {
      const pill = document.getElementById('act-pill-' + a);
      if (pill) {
        const unlocked = a <= state.currentAct || state.completedActs.includes(a);
        pill.classList.toggle('is-unlocked', unlocked);
        pill.classList.toggle('is-current', a === state.currentAct);
      }
    }

    // Hint & Audio chips
    const hintBtn = document.getElementById('btn-hint-toggle');
    const hintLbl = document.getElementById('hint-state-label');
    if (hintBtn) hintBtn.setAttribute('data-state', state.hintOn ? 'selected' : 'off');
    if (hintLbl) hintLbl.textContent = state.hintOn ? 'ON' : 'OFF';

    const audioBtn = document.getElementById('btn-audio-toggle');
    const audioLbl = document.getElementById('audio-state-label');
    if (audioBtn) audioBtn.setAttribute('data-state', state.audioOn ? 'on' : 'off');
    if (audioLbl) audioLbl.textContent = state.audioOn ? 'ON' : 'OFF';

    // Left telemetry counters
    const decryptedCount = 1 + Object.keys(state.unlockedDeep).filter(function (k) { return state.unlockedDeep[k]; }).length;
    const decEl = document.getElementById('stat-decrypted-count');
    if (decEl) decEl.textContent = Math.min(6, decryptedCount) + ' / 6';

    const actCountEl = document.getElementById('stat-act-count');
    if (actCountEl) actCountEl.textContent = state.completedActs.length + ' / 4';

    const progFill = document.getElementById('global-progress-fill');
    if (progFill) {
      const pct = Math.min(100, 15 + state.completedActs.length * 20 + (state.verdict ? 5 : 0));
      progFill.style.width = pct + '%';
    }

    // Right Contradiction Lock Goal
    const actObj = window.JC09_ACTS[state.currentAct] || window.JC09_ACTS[1];
    const goalEl = document.getElementById('inspector-act-goal');
    if (goalEl) {
      goalEl.textContent = state.completedActs.length >= 4
        ? '全部四幕伪证已击穿！请前往【04 审讯卷宗与公诉】签署终局裁决。'
        : actObj.goal;
    }

    // Slot A & Slot B
    renderSlotBox('a', state.slotA);
    renderSlotBox('b', state.slotB);
  }

  function renderSlotBox(letter, slotData) {
    const box = document.getElementById('slot-' + letter + '-box');
    const idEl = document.getElementById('slot-' + letter + '-id');
    const titleEl = document.getElementById('slot-' + letter + '-title');
    const sumEl = document.getElementById('slot-' + letter + '-summary');
    if (!box) return;

    if (!slotData) {
      box.classList.add('is-empty');
      if (idEl) idEl.textContent = 'EMPTY';
      if (titleEl) titleEl.textContent = '尚未装填（请在视图 01 或 03 点击装填）';
      if (sumEl) sumEl.textContent = '等待脑机切片或物理黑匣输入…';
    } else {
      box.classList.remove('is-empty');
      if (idEl) idEl.textContent = slotData.id;
      if (titleEl) titleEl.textContent = slotData.title;
      if (sumEl) sumEl.textContent = slotData.summary;
    }
  }

  function loadIntoSlot(slotLetter, item) {
    if (slotLetter === 'A') state.slotA = item;
    else state.slotB = item;
    saveState();
    renderInspectorAndHud();
    sfxClick();
    const fb = document.getElementById('inspector-feedback');
    if (fb) {
      fb.style.borderLeftColor = 'var(--c-primary)';
      fb.textContent = '已装填 [' + item.id + '] ' + item.title + ' 至指证槽 [' + slotLetter + ']。';
    }
    logTicker('指证槽 [' + slotLetter + '] 已装填: ' + item.id);
  }

  function executeContradictionBreak() {
    const fb = document.getElementById('inspector-feedback');
    if (!state.slotA || !state.slotB) {
      sfxError();
      if (fb) {
        fb.style.borderLeftColor = 'var(--c-danger-red)';
        fb.textContent = '指证失败：请先在指证槽 [A] 与 [B] 中各装填一项证词或物证！';
      }
      return;
    }

    const idA = state.slotA.id;
    const idB = state.slotB.id;

    // Check against currentAct first, or any uncompleted act
    let matchedAct = null;
    for (let a = 1; a <= 4; a++) {
      const actCfg = window.JC09_ACTS[a];
      const hit = actCfg.validPairs.some(function (pair) {
        return (pair[0] === idA && pair[1] === idB) || (pair[0] === idB && pair[1] === idA);
      });
      if (hit) {
        matchedAct = a;
        break;
      }
    }

    if (matchedAct !== null) {
      sfxBreakthrough();
      if (!state.completedActs.includes(matchedAct)) {
        state.completedActs.push(matchedAct);
      }
      if (matchedAct === state.currentAct && state.currentAct < 4) {
        state.currentAct = matchedAct + 1;
      }
      state.dossierActTab = matchedAct;
      saveState();
      renderAll();

      const brokenAct = window.JC09_ACTS[matchedAct];
      if (fb) {
        fb.style.borderLeftColor = 'var(--c-confirm-gold)';
        fb.innerHTML = '<strong style="color:var(--c-confirm-gold);">【逻辑击穿成功 · 第 ' + matchedAct + ' 幕解锁】</strong> ' + brokenAct.unlockedBody.slice(0, 78) + '…';
      }
      logTicker('逻辑击穿成功！已解锁第 ' + matchedAct + ' 幕真相卷宗');
    } else {
      sfxError();
      const curActObj = window.JC09_ACTS[state.currentAct] || window.JC09_ACTS[1];
      if (fb) {
        fb.style.borderLeftColor = 'var(--c-danger-red)';
        fb.innerHTML = '<strong style="color:var(--c-danger-red);">【逻辑冲突不成立】</strong> [' + idA + '] 与 [' + idB + '] 未构成当前幕次的核心矛盾。可开启顶部「推演辅助」查看线索高亮。';
      }
      logTicker('比对未命中核心矛盾: ' + idA + ' vs ' + idB + ' (' + curActObj.name + ')');
    }
  }

  function renderAll() {
    renderInspectorAndHud();
    renderWitnessView();
    renderSynapseView();
    renderBlackboxView();
    renderVerdictView();
  }

  // ---- Event Listeners Binding ----
  function bindEvents() {
    // 1. View switcher tabs
    document.querySelectorAll('.nav-tab').forEach(function (btn) {
      btn.addEventListener('click', function () {
        switchView(btn.getAttribute('data-view'));
      });
    });

    // 2. Top HUD Act pills
    document.querySelectorAll('.act-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        const actN = Number(pill.getAttribute('data-act'));
        state.currentAct = actN;
        state.dossierActTab = actN;
        saveState();
        renderAll();
        sfxClick();
      });
    });

    // 3. Hint Toggle, Audio Toggle, Reset Save
    const btnHint = document.getElementById('btn-hint-toggle');
    if (btnHint) {
      btnHint.addEventListener('click', function () {
        state.hintOn = !state.hintOn;
        saveState();
        renderAll();
        sfxSwitch();
        logTicker('推演辅助线索高亮已' + (state.hintOn ? '开启' : '关闭'));
      });
    }

    const btnAudio = document.getElementById('btn-audio-toggle');
    if (btnAudio) {
      btnAudio.addEventListener('click', function () {
        state.audioOn = !state.audioOn;
        saveState();
        setAmbientHum(state.audioOn);
        renderAll();
        if (state.audioOn) sfxSwitch();
        logTicker('Web Audio 实时声效合成器已' + (state.audioOn ? '开启' : '关闭'));
      });
    }

    const btnReset = document.getElementById('btn-reset-save');
    if (btnReset) {
      btnReset.addEventListener('click', function () {
        try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
        state = JSON.parse(JSON.stringify(defaultState));
        setAmbientHum(false);
        renderAll();
        switchView('witness');
        logTicker('本地审讯进度与裁决记录已完全重置');
      });
    }

    // 4. Witness Roster Cards & Layer Toggle (View 01)
    document.querySelectorAll('.witness-card').forEach(function (card) {
      card.addEventListener('click', function () {
        const wid = card.getAttribute('data-witness');
        state.selectedWitness = wid;
        state.synapseTarget = wid;
        if (state.witnessLayer === 'deep' && !state.unlockedDeep[wid]) {
          state.witnessLayer = 'surface';
        }
        saveState();
        renderAll();
        sfxClick();
      });
    });

    const btnSurface = document.getElementById('btn-layer-surface');
    if (btnSurface) {
      btnSurface.addEventListener('click', function () {
        state.witnessLayer = 'surface';
        saveState();
        renderWitnessView();
        sfxSwitch();
      });
    }

    const btnDeep = document.getElementById('btn-layer-deep');
    if (btnDeep) {
      btnDeep.addEventListener('click', function () {
        const w = window.JC09_WITNESSES[state.selectedWitness];
        if (!w) return;
        if (!state.unlockedDeep[w.id]) {
          state.synapseTarget = w.id;
          switchView('synapse');
          renderSynapseView();
          logTicker(w.name + ' 的深层残响尚未破译，已跳转至 02 神经切片台');
          return;
        }
        state.witnessLayer = 'deep';
        saveState();
        renderWitnessView();
        sfxSwitch();
      });
    }

    const btnGotoSynapse = document.getElementById('btn-goto-synapse');
    if (btnGotoSynapse) {
      btnGotoSynapse.addEventListener('click', function () {
        state.synapseTarget = state.selectedWitness;
        saveState();
        renderSynapseView();
        switchView('synapse');
      });
    }

    function getCurrentWitnessClipItem() {
      const w = window.JC09_WITNESSES[state.selectedWitness] || window.JC09_WITNESSES.W05;
      const isDeep = state.witnessLayer === 'deep' && !!state.unlockedDeep[w.id];
      const suffix = isDeep ? 'B' : 'A';
      const layer = isDeep ? w.deep : w.surface;
      return {
        id: w.id + '-' + suffix,
        title: layer.title,
        summary: layer.summary
      };
    }

    const btnLoadWA = document.getElementById('btn-load-witness-a');
    if (btnLoadWA) {
      btnLoadWA.addEventListener('click', function () {
        loadIntoSlot('A', getCurrentWitnessClipItem());
      });
    }
    const btnLoadWB = document.getElementById('btn-load-witness-b');
    if (btnLoadWB) {
      btnLoadWB.addEventListener('click', function () {
        loadIntoSlot('B', getCurrentWitnessClipItem());
      });
    }

    // 5. Synapse Slicer & 7-State Toggle Matrix (View 02)
    document.querySelectorAll('[data-syn-witness]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const wid = btn.getAttribute('data-syn-witness');
        state.synapseTarget = wid;
        state.selectedWitness = wid;
        saveState();
        renderAll();
        sfxClick();
      });
    });

    for (let i = 0; i < 4; i++) {
      const chip = document.getElementById('filter-ch-' + i);
      if (chip) {
        chip.addEventListener('click', function () {
          const cur = state.filterStates[i] || 'normal';
          const nextIdx = (SEVEN_STATES.indexOf(cur) + 1) % SEVEN_STATES.length;
          state.filterStates[i] = SEVEN_STATES[nextIdx];
          saveState();
          renderSynapseView();
          sfxSwitch();
        });
      }
    }

    const btnAutoTune = document.getElementById('btn-auto-tune');
    if (btnAutoTune) {
      btnAutoTune.addEventListener('click', function () {
        const w = window.JC09_WITNESSES[state.synapseTarget] || window.JC09_WITNESSES.W05;
        state.filterStates = w.recipe.slice();
        state.unlockedDeep[w.id] = true;
        saveState();
        renderAll();
        sfxBreakthrough();
        logTicker('已按配方校准七态开关并成功破译 ' + w.name + ' 的深层记忆残响！');
      });
    }

    const btnUnlockDeep = document.getElementById('btn-unlock-deep');
    if (btnUnlockDeep) {
      btnUnlockDeep.addEventListener('click', function () {
        const w = window.JC09_WITNESSES[state.synapseTarget] || window.JC09_WITNESSES.W05;
        state.filterStates = w.recipe.slice();
        state.unlockedDeep[w.id] = true;
        state.selectedWitness = w.id;
        state.witnessLayer = 'deep';
        saveState();
        renderAll();
        sfxBreakthrough();
        switchView('witness');
        logTicker('已剥离 ' + w.name + ' 的表层伪装，自动切换至 LAYER B 深层残响！');
      });
    }

    document.querySelectorAll('[data-time-node]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.activeTimeNode = Number(btn.getAttribute('data-time-node'));
        saveState();
        renderSynapseView();
        sfxClick();
      });
    });

    // 6. Blackbox Exhibits (View 03)
    document.querySelectorAll('.evidence-row').forEach(function (row) {
      row.addEventListener('click', function () {
        state.selectedExhibit = row.getAttribute('data-evidence');
        saveState();
        renderBlackboxView();
        sfxClick();
      });
    });

    function getCurrentExhibitItem() {
      const ev = window.JC09_EXHIBITS[state.selectedExhibit] || window.JC09_EXHIBITS.B01;
      return {
        id: ev.id,
        title: ev.title,
        summary: ev.summary
      };
    }

    const btnLoadEvA = document.getElementById('btn-load-ev-a');
    if (btnLoadEvA) {
      btnLoadEvA.addEventListener('click', function () {
        loadIntoSlot('A', getCurrentExhibitItem());
      });
    }
    const btnLoadEvB = document.getElementById('btn-load-ev-b');
    if (btnLoadEvB) {
      btnLoadEvB.addEventListener('click', function () {
        loadIntoSlot('B', getCurrentExhibitItem());
      });
    }

    // 7. Contradiction Lock Controls
    const btnClearSlots = document.getElementById('btn-clear-slots');
    if (btnClearSlots) {
      btnClearSlots.addEventListener('click', function () {
        state.slotA = null;
        state.slotB = null;
        saveState();
        renderInspectorAndHud();
        sfxClick();
      });
    }

    const btnExecBreak = document.getElementById('btn-execute-break');
    if (btnExecBreak) {
      btnExecBreak.addEventListener('click', executeContradictionBreak);
    }

    // 8. Verdict Dossier Sub-tabs & Three-Way Final Indictment (View 04)
    document.querySelectorAll('[data-dossier-act]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.dossierActTab = Number(btn.getAttribute('data-dossier-act'));
        saveState();
        renderVerdictView();
        sfxClick();
      });
    });

    document.querySelectorAll('[data-ending]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const endingKey = btn.getAttribute('data-ending');
        state.verdict = endingKey;
        saveState();
        renderAll();
        sfxBreakthrough();
        logTicker('已签署终局公诉裁决 // ' + endingKey.toUpperCase());
      });
    });

    const btnClearVerdict = document.getElementById('btn-clear-verdict');
    if (btnClearVerdict) {
      btnClearVerdict.addEventListener('click', function () {
        state.verdict = null;
        saveState();
        renderAll();
        sfxClick();
        logTicker('已撤回终局裁决，可重新选择公诉方向');
      });
    }

    // 9. Keyboard Shortcuts (1-4 View Switch, ArrowLeft/Right Witness Cycle, Space Verify)
    window.addEventListener('keydown', function (ev) {
      if (ev.ctrlKey || ev.altKey || ev.metaKey) return;
      const tag = (ev.target && ev.target.tagName) ? ev.target.tagName.toLowerCase() : '';
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      if (ev.key === '1') { switchView('witness'); }
      else if (ev.key === '2') { switchView('synapse'); }
      else if (ev.key === '3') { switchView('blackbox'); }
      else if (ev.key === '4') { switchView('verdict'); }
      else if (ev.key === 'ArrowRight' || ev.key === 'ArrowLeft') {
        const ids = ['W01', 'W02', 'W03', 'W04', 'W05', 'W06'];
        const curIdx = ids.indexOf(state.selectedWitness);
        const delta = ev.key === 'ArrowRight' ? 1 : -1;
        const nextId = ids[(curIdx + delta + ids.length) % ids.length];
        state.selectedWitness = nextId;
        state.synapseTarget = nextId;
        saveState();
        renderAll();
        sfxClick();
      }
    });
  }

  // ---- Boot ----
  bindEvents();
  renderAll();
  switchView(state.activeView || 'witness');
})();
