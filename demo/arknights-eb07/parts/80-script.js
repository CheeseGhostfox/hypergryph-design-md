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

  // 1. 滚动进度与章节感知
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

    // 更新左侧栏激活态
    listRows.forEach((row) => {
      const target = row.getAttribute('data-target');
      if (target === sections[activeIdx].id) {
        row.classList.add('active');
      } else {
        row.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  // 2. 上一段 / 下一段按钮导航
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const targetIdx = Math.max(1, currentSectionIndex - 1);
      const targetEl = document.getElementById(sections[targetIdx].id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const targetIdx = Math.min(sections.length - 1, currentSectionIndex + 1);
      const targetEl = document.getElementById(sections[targetIdx].id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 3. Web Audio API 程序化环境底噪模拟 (纯代码合成，无任何音频文件)
  let audioCtx = null;
  let noiseNode = null;
  let humNode = null;
  let gainNode = null;
  let isAudioPlaying = false;
  const audioBtn = document.getElementById('audio-toggle-btn');

  function initProceduralAudio() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
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
    gainNode.gain.setValueAtTime(0.04, audioCtx.currentTime); // 保持微弱背景底噪

    // 节点连接
    noiseNode.connect(filter);
    filter.connect(gainNode);
    humNode.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    noiseNode.start();
    humNode.start();
  }

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (!audioCtx) {
        initProceduralAudio();
        isAudioPlaying = true;
        audioBtn.style.color = '#18d1ff';
        audioBtn.style.borderColor = '#18d1ff';
        audioBtn.title = '环境底噪：已开启';
      } else {
        if (isAudioPlaying) {
          audioCtx.suspend();
          isAudioPlaying = false;
          audioBtn.style.color = '#ffffff';
          audioBtn.style.borderColor = '#4d4d4d';
          audioBtn.title = '环境底噪：已静音';
        } else {
          audioCtx.resume();
          isAudioPlaying = true;
          audioBtn.style.color = '#18d1ff';
          audioBtn.style.borderColor = '#18d1ff';
          audioBtn.title = '环境底噪：已开启';
        }
      }
    });
  }
});
