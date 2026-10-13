// ==================== 交互控制与音频模拟 (零外部依赖) ====================
document.addEventListener('DOMContentLoaded', () => {
  const sections = [
    { id: 'sec-index', num: '00' },
    { id: 'sec-01', num: '01' },
    { id: 'sec-02', num: '02' },
    { id: 'sec-03', num: '03' },
    { id: 'sec-04', num: '04' },
    { id: 'sec-05', num: '05' },
    { id: 'sec-06', num: '06' },
    { id: 'sec-07', num: '07' },
  ];

  const counterCurrent = document.getElementById('counter-current');
  const progressFill = document.getElementById('reading-progress-fill');
  const progressText = document.getElementById('reading-progress-text');
  const navLinks = document.querySelectorAll('.nav-link');
  const listRows = document.querySelectorAll('.list-row');
  const prevBtn = document.getElementById('btn-prev-section');
  const nextBtn = document.getElementById('btn-next-section');

  let currentSectionIndex = 1; // 默认停留在第 1 章节

  // ---------- 本地存储封装: 隐私模式下 localStorage 会直接抛错，全部读写都由此处兜住 ----------
  const STORE_PREFIX = 'eb07:';
  const KEY_AUDIO = STORE_PREFIX + 'audio';
  const KEY_PROGRESS = STORE_PREFIX + 'progress';
  const KEY_ENDING = STORE_PREFIX + 'ending';

  function storeGet(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null; // 存储不可用：按「无记录」处理，页面继续工作
    }
  }

  function storeSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
      return true;
    } catch (e) {
      return false; // 存储不可用：放弃写入，不影响任何交互
    }
  }

  function storeRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      /* 无存储可清 */
    }
  }

  function gotoSection(index) {
    const target = sections[index];
    if (!target) return;
    const el = document.getElementById(target.id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // ---------- 0. 左栏「卷宗摘要」: 原生 details 展开 + 磁带扫描读数 ----------
  const railEntries = Array.prototype.slice.call(document.querySelectorAll('.rail-entry'));
  const reduceMotion = window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)')
    : null;

  function scanRow(row) {
    if (!row || !row.classList) return;
    const quiet = reduceMotion && reduceMotion.matches;
    row.classList.remove('is-scanning');
    void row.offsetWidth; // 强制重排，保证连续点击都能重新起振
    // 减少动效偏好下 CSS 已把 .is-scanning 的动画置为 none 并给出稳定态底色，
    // 所以这里仍然加类 —— 否则那条规则永远不会生效，点击也就没有任何反馈。
    row.classList.add('is-scanning');
    window.setTimeout(() => row.classList.remove('is-scanning'), quiet ? 180 : 520);
  }

  // 索引行点击 = 调阅该章节。整行 (summary) 都算调阅动作:
  //   · 点在内层 <a> 上 —— summary 属于「交互内容」，浏览器不替它执行默认跳转，必须显式接管;
  //   · 点在行内空白处 —— 浏览器只会切换 details，会留下「面板开了、页面没动」的错位;
  // 两种情况统一为「跳转 + 展开本行摘要」，并阻断冒泡让 details 状态由脚本独占。
  // (details 原生的切换在键盘激活时仍会触发，届时是「已展开 -> 收起」的二次切换，
  //  由下面的 open 赋值收敛回 true，不产生可见抖动。)
  function closestLink(node) {
    let el = node;
    while (el && el !== document) {
      if (el.nodeType === 1 && el.classList && (el.classList.contains('list-row-link') || el.classList.contains('list-row'))) return el;
      el = el.parentNode;
    }
    return null;
  }

  document.addEventListener('click', (event) => {
    const hit = closestLink(event.target);
    if (!hit) return;
    event.preventDefault();
    event.stopPropagation();
    const entry = hit.closest ? hit.closest('.rail-entry') : null;
    if (entry) entry.open = true;
    const target = hit.getAttribute('data-target') || (hit.getAttribute('href') || '').slice(1);
    const idx = sections.findIndex((sec) => sec.id === target);
    if (idx > 0) gotoSection(idx);
  });

  listRows.forEach((row) => {
    row.addEventListener('click', () => {
      scanRow(row); // 磁带扫描读数
      // 索引轨同时只保持一条摘要展开，避免整轨高度失控
      const own = row.closest ? row.closest('.rail-entry') : null;
      railEntries.forEach((entry) => {
        if (entry !== own) entry.open = false;
      });
    });
  });

  // ---------- 0.1 已读行标记 (来自 eb07:progress，跨会话保留) ----------
  // visitedUpTo 记录「读到过的最远章节序号」，与当前视口位置解耦，
  // 否则刷新后视口停在首屏，刚标记的已读会立刻被抹掉。
  let visitedUpTo = 0;
  (function seedVisited() {
    const stored = storeGet(KEY_PROGRESS);
    const idx = sections.findIndex((sec) => sec.id === stored);
    if (idx > visitedUpTo) visitedUpTo = idx;
  })();

  function syncVisitedState() {
    if (currentSectionIndex > visitedUpTo) visitedUpTo = currentSectionIndex;
    railEntries.forEach((entry) => {
      const row = entry.querySelector('.list-row');
      const target = row ? row.getAttribute('data-target') : null;
      const idx = sections.findIndex((sec) => sec.id === target);
      if (idx > 0 && idx <= visitedUpTo) {
        entry.classList.add('visited');
      } else {
        entry.classList.remove('visited');
      }
    });
  }

  // ---------- 0.2 「回到上次读到」控件 ----------
  const resumeBtn = document.getElementById('btn-resume');
  const resumeNum = document.getElementById('resume-num');

  function sectionNumById(id) {
    const hit = sections.find((sec) => sec.id === id);
    return hit ? hit.num : '01';
  }

  function syncResumeControl() {
    if (!resumeBtn) return;
    const stored = storeGet(KEY_PROGRESS);
    if (!stored) {
      resumeBtn.hidden = true;
      return;
    }
    const idx = sections.findIndex((sec) => sec.id === stored);
    if (idx <= 1) {
      // 首屏与第一章视为「未读进去」，不显示回跳控件
      resumeBtn.hidden = true;
      return;
    }
    if (resumeNum) resumeNum.textContent = '// ' + sectionNumById(stored);
    resumeBtn.hidden = false;
  }

  if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
      const stored = storeGet(KEY_PROGRESS);
      const idx = sections.findIndex((sec) => sec.id === stored);
      if (idx > 0) gotoSection(idx);
    });
  }

  // ---------- 1. 滚动进度与章节感知 ----------
  function updateScrollState() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(100, Math.max(0, (scrollY / docHeight) * 100)) : 0;

    if (progressFill) {
      progressFill.style.width = `${progress.toFixed(1)}%`;
    }
    if (progressText) {
      progressText.textContent = `${Math.round(progress)}%`;
    }

    // 检测当前视口中心落在哪个章节
    const midPoint = scrollY + window.innerHeight * 0.4;
    let activeIdx = 0;

    sections.forEach((sec, idx) => {
      const el = document.getElementById(sec.id);
      if (el) {
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (midPoint >= top && midPoint < top + height) {
          activeIdx = idx;
        }
      }
    });

    currentSectionIndex = activeIdx;

    // 更新计数器 (01 // 07，首屏为 01)
    if (counterCurrent) {
      const displayNum = activeIdx === 0 ? '01' : sections[activeIdx].num;
      counterCurrent.textContent = displayNum;
    }

    // 更新顶栏激活态
    navLinks.forEach((link) => {
      const target = link.getAttribute('data-target');
      if (target === sections[activeIdx].id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // 更新左侧栏激活态 (磁带扫描只做一次性叠加，不参与这里的常驻态)
    listRows.forEach((row) => {
      const target = row.getAttribute('data-target');
      if (target === sections[activeIdx].id) {
        row.classList.add('active');
      } else {
        row.classList.remove('active');
      }
    });

    // 记录已读到的最远章节 (只前进，不回退)，并同步已读标记
    if (activeIdx > 0) {
      markProgress(sections[activeIdx].id);
    }
    syncVisitedState();
  }

  function markProgress(id) {
    const stored = storeGet(KEY_PROGRESS);
    const prevIdx = sections.findIndex((sec) => sec.id === stored);
    if (sections.findIndex((sec) => sec.id === id) > prevIdx) {
      storeSet(KEY_PROGRESS, id);
      syncResumeControl();
    }
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();
  syncResumeControl();

  // ---------- 2. 上一段 / 下一段按钮导航 ----------
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      gotoSection(Math.max(1, currentSectionIndex - 1));
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      gotoSection(Math.min(sections.length - 1, currentSectionIndex + 1));
    });
  }

  // ---------- 3. 左右方向键翻段 (修饰键按下或在输入控件内时不接管) ----------
  function isTypingTarget(el) {
    if (!el || el.nodeType !== 1) return false;
    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
    if (el.isContentEditable) return true;
    if (el.closest && el.closest('[contenteditable="true"]')) return true;
    return false;
  }

  document.addEventListener('keydown', (event) => {
    if (event.ctrlKey || event.metaKey || event.altKey) return; // 组合键一律让给浏览器
    if (isTypingTarget(event.target)) return;                    // 输入控件内不抢方向键
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    const delta = event.key === 'ArrowRight' ? 1 : -1;
    // 下限必须允许 0 —— sections[0] 是「卷宗总览」(sec-index)，
    // 顶栏里 INDEX 是可点选项，方向键不该在第 1 章留下一个回不去的死键。
    const target = Math.min(sections.length - 1, Math.max(0, currentSectionIndex + delta));
    gotoSection(target);
  });

  // ---------- 4. 终局抉择 (二选一分支，记录于 eb07:ending) ----------
  const endingButtons = Array.prototype.slice.call(document.querySelectorAll('.ending-option'));
  const endingBlock = document.getElementById('ending-block');
  const endingChoice = document.getElementById('ending-choice');
  const endingNote = document.getElementById('ending-note');
  const endingReset = document.getElementById('ending-reset');
  const endingKeys = ['air', 'seal'];

  function renderEnding(choice) {
    const active = endingKeys.indexOf(choice) >= 0 ? choice : null;
    endingButtons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-ending') === active ? 'true' : 'false');
    });
    endingKeys.forEach((key) => {
      const passage = document.getElementById('ending-' + key);
      if (passage) passage.hidden = key !== active;
    });
    if (endingBlock) endingBlock.setAttribute('data-ending', active || 'none');
    // 已作出处置后隐藏选项组，只留结局正文与「重新选择」
    if (endingChoice) endingChoice.hidden = !!active;
    if (endingNote) endingNote.hidden = !active;
  }

  endingButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-ending');
      storeSet(KEY_ENDING, choice); // 存储不可用时仅本次会话生效，不报错
      renderEnding(choice);
    });
  });

  if (endingReset) {
    endingReset.addEventListener('click', () => {
      storeRemove(KEY_ENDING);
      renderEnding(null);
    });
  }

  // 载入即恢复既有处置
  renderEnding(storeGet(KEY_ENDING));

  // ---------- 5. Web Audio API 程序化环境底噪模拟 (纯代码合成，无任何音频文件) ----------
  let audioCtx = null;
  let noiseNode = null;
  let humNode = null;
  let gainNode = null;
  let isAudioPlaying = false;
  const audioBtn = document.getElementById('audio-toggle-btn');
  // 存储中的开关只是「读者意图」：载入时仅还原按钮外观，绝不自动起振。
  // 只有显式存过 'on' 才算开启；无记录 (首次到访 / 存储不可用) 一律按静音呈现。
  const storedAudio = storeGet(KEY_AUDIO);
  let audioToggleOn = storedAudio === 'on';
  let audioHintShown = false;

  function fadeAudio(target, seconds) {
    const now = audioCtx.currentTime;
    gainNode.gain.cancelScheduledValues(now);
    gainNode.gain.setValueAtTime(gainNode.gain.value, now);
    gainNode.gain.linearRampToValueAtTime(target, now + seconds);
  }

  function paintAudioButton() {
    if (!audioBtn) return;
    // 已表态时以读者意图为准，尚未表态时才跟随实际出声状态
    const on = audioToggleOn || isAudioPlaying;
    audioBtn.style.color = on ? '#18d1ff' : '#ffffff';
    audioBtn.style.borderColor = on ? '#18d1ff' : '#4d4d4d';
    audioBtn.title = on ? '环境底噪：已开启' : '环境底噪：已静音';
    audioBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function initProceduralAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return false;
    audioCtx = new AudioContext();

    // 变压器 50Hz 工频交流电声
    humNode = audioCtx.createOscillator();
    humNode.type = 'sine';
    humNode.frequency.setValueAtTime(50, audioCtx.currentTime);

    // 短波电台与磁带白噪声生成器
    const bufferSize = 2 * audioCtx.sampleRate;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    noiseNode = audioCtx.createBufferSource();
    noiseNode.buffer = noiseBuffer;
    noiseNode.loop = true;

    // 低通滤波器模拟老旧收音机受限频响 (800Hz 截止)
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, audioCtx.currentTime);

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(audioToggleOn ? 0 : 0.04, audioCtx.currentTime); // 开启时由 0 渐入，避免爆音

    // 节点连接
    noiseNode.connect(filter);
    filter.connect(gainNode);
    humNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    humNode.start();
    return true;
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      // 首次交互: AudioContext 必须由用户手势创建。先建上下文，再走同一套切换逻辑 ——
      // 早前把「建上下文」和「落实存储意图」合成一条分支，导致没有存储记录时首击成为
      // 空操作；而以 isAudioPlaying 决定方向又会让「重载后存储为 on」的首击错误地打开。
      // 唯一真值是 audioToggleOn（逻辑意图），每次点击只是把它翻转。
      if (!audioCtx && !initProceduralAudio()) return; // 无 Web Audio: 按钮保持外观，不报错

      audioToggleOn = !audioToggleOn;

      if (audioToggleOn) {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        fadeAudio(0.04, 0.3);
        isAudioPlaying = true;
        storeSet(KEY_AUDIO, 'on');
      } else {
        fadeAudio(0, 0.2);
        const ctx = audioCtx;
        window.setTimeout(() => {
          if (!audioToggleOn && ctx.state === 'running') ctx.suspend();
        }, 260);
        isAudioPlaying = false;
        storeSet(KEY_AUDIO, 'off');
      }
      paintAudioButton();
    });
  }

  // 还原按钮外观与存储记录一致 (此处不会启动任何音频)
  paintAudioButton();
  if (audioToggleOn && audioBtn) {
    audioBtn.addEventListener(
      'pointerenter',
      () => {
        if (audioHintShown) return;
        audioHintShown = true;
        audioBtn.title = '环境底噪：待机中（点击开始）';
      },
      { passive: true }
    );
  }
});
