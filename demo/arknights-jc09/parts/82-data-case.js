// ==========================================================================
// 82-data-case.js
// Narrative Dataset Part 2: 6 Physical Exhibits · 5 Time Nodes · 4 Acts · 3 Endings
// ==========================================================================

window.JC09_TIME_NODES = [
  {
    idx: 0,
    time: 'T-17.0s',
    label: '制动抱死',
    text: '<strong>[T-17.0s 切片摘要]</strong> 列车主转向架机械液压卡钳在断桥缺口前 4.2 米处彻底抱死，车速归零。此后整整 17 秒内，03 车厢在桥面上处于绝对静止状态。'
  },
  {
    idx: 1,
    time: 'T-12.4s',
    label: '车门落锁',
    text: '<strong>[T-12.4s 切片摘要]</strong> 实习乘务员周野在安全员陆峥的防暴脉冲枪胁迫下，用乘务员机械钥匙反锁了 03 车厢前后端气密门，将车厢隔离为封闭手术舱。'
  },
  {
    idx: 2,
    time: 'T-08.8s',
    label: '440Hz磁脉冲',
    text: '<strong>[T-08.8s 切片摘要]</strong> 神经外科医师温莎·林在获得 03-F 座最高督察的 0x7F-YAN 硬件密钥豁免签名后，对倒地的盲眼调音师沈听澜发射了高能经颅磁脉冲。'
  },
  {
    idx: 3,
    time: 'T-04.2s',
    label: '覆写广播',
    text: '<strong>[T-04.2s 切片摘要]</strong> 智驾架构师顾言通过车载局域网向全车厢脑机广播了时长 17 秒的合成脱轨记忆包，并在自己的表层记忆区写入了“主动认罪脚本”。'
  },
  {
    idx: 4,
    time: 'T-00.0s',
    label: '爆炸脱钩',
    text: '<strong>[T-00.0s 切片摘要]</strong> 为销毁无法被脑机覆写的现场痕迹，安全员陆峥引爆了 02 与 03 车厢连接处的分离式爆炸螺栓，静止的 03 车厢顺着坍塌引桥滑入深水航道。'
  }
];

window.JC09_EXHIBITS = {
  B01: {
    id: 'B01',
    code: 'EXHIBIT // B01 HYDRAULIC',
    sub: '[EXHIBIT B-01 // BOGIE-HYD-LOG]',
    title: '转向架液压抱死曲线',
    tag: '物理不可篡改',
    hash: 'SHA-256: 9F4A...7C1E // BOGIE HARD LOCK',
    tintClass: 'tint-cyan',
    summary: '物理记录显示列车在 T-17.0s 已彻底刹停（车速 0 km/h），未发生全速冲出断桥。',
    desc: '打捞自江底的 03 车厢主转向架机械制动盘磨损拓片与液压黑匣记录：早在 T-17.0 秒，机械急停卡钳即已完全锁死车轮，列车在断桥缺口前 4.2 米处彻底刹停（速度归零）。所谓“T-15 秒软件解除制动并全速冲出桥面”在物理上根本没有发生。',
    note: '取证交叉点：列车在 T-17.0s 已彻底停稳，至 T-00.0s 车厢坠江的 17 秒内处于绝对静止状态。',
    svg: '<polyline fill="none" stroke-width="2.5" points="10,20 70,22 120,85 500,85"/><circle cx="120" cy="85" r="5"/><text x="130" y="76" font-family="Barlow, monospace" font-size="11" stroke="none">T-17.0s VELOCITY = 0.0 km/h (MECHANICAL LOCK)</text>'
  },
  B02: {
    id: 'B02',
    code: 'EXHIBIT // B02 BULKHEAD',
    sub: '[EXHIBIT B-02 // DOOR-LATCH-ROM]',
    title: '03车厢气密门电磁反锁日志',
    tag: '机械插销只读记录',
    hash: 'SHA-256: 3D82...11B0 // SEALED FROM INSIDE',
    tintClass: 'tint-green',
    summary: 'T-12.4s 气密门被乘务员钥匙从内部手动反锁，而非撞击变形卡死。',
    desc: '03 与 02 车厢连接处气密门的独立机械黑匣日志：在 T-12.4 秒，车门并未受到任何外部结构挤压，而是由编号 CW-02 的乘务员物理钥匙从 03 车厢内部逆时针旋转 180 度，主动落下了最高级别的防暴死锁插销。',
    note: '取证交叉点：气密门系从 03 车厢内部由乘务员钥匙手动锁死，排除外部撞击变形卡死的可能。',
    svg: '<rect x="60" y="18" width="160" height="70" fill="none" stroke-width="2"/><rect x="260" y="18" width="160" height="70" fill="none" stroke-width="2"/><line x1="220" y1="53" x2="260" y2="53" stroke-width="4"/><circle cx="240" cy="53" r="9" fill="none" stroke-width="2"/><text x="75" y="48" font-family="Barlow, monospace" font-size="11" stroke="none">T-12.4s MANUAL DEADBOLT: LOCKED</text>'
  },
  B03: {
    id: 'B03',
    code: 'EXHIBIT // B03 TUNING-FORK',
    sub: '[EXHIBIT B-03 // ACOUSTIC-MEM-CHIP]',
    title: '盲眼调音师骨传导助听器残片',
    tag: '纯模拟硬件采样',
    hash: 'SHA-256: 7A19...E04D // 440HZ TMS PULSE',
    tintClass: 'tint-yellow',
    summary: '无联网模组的骨传导闪存，记录到静止车厢内 440Hz 经颅磁脉冲充能声。',
    desc: '从 03 车厢座椅导轨缝隙中起获的左耳骨传导助听器。因该设备仅供视障调音师辅助辨音，内部无任何无线网络或商用脑机接口协议，故逃过了全车厢无线记忆覆写。其压电陶瓷传感器记录下了 T-11.5s 车厢完全静止时的锁门声与 440Hz 医用磁脉冲充能声。',
    note: '取证交叉点：纯硬件压电采样证实，车厢在静止的 17 秒内曾启动高能医用磁脉冲设备。',
    svg: '<path d="M 20 55 C 80 55 110 15 170 55 C 230 95 270 15 330 55 C 390 95 430 55 500 55" fill="none" stroke-width="2"/><line x1="250" y1="12" x2="250" y2="96" stroke-width="1.5" stroke-dasharray="3 2"/><text x="260" y="28" font-family="Barlow, monospace" font-size="11" stroke="none">440Hz TMS CAPACITOR CHARGE</text>'
  },
  B04: {
    id: 'B04',
    code: 'EXHIBIT // B04 TMS-MAC',
    sub: '[EXHIBIT B-04 // MED-OVERRIDE-AUTH]',
    title: '便携式经颅覆写仪 MAC 签名',
    tag: '加密硬件握手包',
    hash: 'SHA-256: 0x7F-YAN // JUDICIAL OVERRIDE',
    tintClass: 'tint-violet',
    summary: '温莎医师的医疗箱覆写仪在 T-09.2s 接收了 0x7F-YAN 最高司法督察密钥的当场物理插卡授权。',
    desc: '圣卢克医院配发给温莎·林医师的便携式经颅磁刺激仪底层安全日志：该设备在 T-09.2 秒解除了临床安全功率限制（提升至记忆擦除级 3.2 Tesla）。解除安全锁的方式并非远程网络指令，而是通过 USB-C 物理接口直接插入了一枚签名号为【0x7F-YAN】的司法部最高督察硬件密钥。',
    note: '取证交叉点：USB-C 物理插卡日志证明，持有【0x7F-YAN】硬件密钥的最高督察案发时身处 03 车厢内。',
    svg: '<rect x="30" y="25" width="180" height="55" fill="none" stroke-width="2"/><rect x="300" y="25" width="180" height="55" fill="none" stroke-width="2"/><line x1="210" y1="52" x2="300" y2="52" stroke-width="2.5" stroke-dasharray="6 3"/><circle cx="255" cy="52" r="6"/><text x="45" y="57" font-family="Barlow, monospace" font-size="11" stroke="none">MED-TMS UNIT</text><text x="315" y="57" font-family="Barlow, monospace" font-size="11" stroke="none">KEY: 0x7F-YAN (IN CAR)</text>'
  },
  B05: {
    id: 'B05',
    code: 'EXHIBIT // B05 COUPLER-BOLT',
    sub: '[EXHIBIT B-05 // PYRO-COUPLER-DET]',
    title: '车钩爆炸螺栓起爆电雷管残骸',
    tag: '军工级分离装置',
    hash: 'SHA-256: 5C08...88FA // DETONATED T-00.0S',
    tintClass: 'tint-gold',
    summary: '02 与 03 车厢之间的车钩并非拉断，而是在 T-00.0s 被安全员手动引爆分离。',
    desc: '车厢连接处打捞出的特种合金断口金相分析报告：断口呈现典型的聚能切割光滑切面，残留叠氮化铅起爆药微粒。起爆信号来自 03 车厢安全员陆峥佩戴的战术手环，激发时刻恰为 T-00.0 秒——即全车记忆清洗与假记忆刷写完成的那一瞬间。',
    note: '取证交叉点：车钩系在记忆覆写完成瞬间由安全员手环激发聚能雷管主动切断。',
    svg: '<line x1="40" y1="52" x2="220" y2="52" stroke-width="5"/><line x1="290" y1="52" x2="470" y2="52" stroke-width="5"/><polygon points="255,18 270,42 295,48 270,60 255,88 240,60 215,48 240,42" fill="none" stroke-width="2"/><text x="170" y="100" font-family="Barlow, monospace" font-size="11" stroke="none">T-00.0s PYROTECHNIC SEPARATION</text>'
  },
  B06: {
    id: 'B06',
    code: 'EXHIBIT // B06 JACKDAW-KEY',
    sub: '[EXHIBIT B-06 // CONSOLE-09-ROOT-KEY]',
    title: '寒鸦09号台最高督察硬件密钥',
    tag: '本机底层根证书',
    hash: 'ROOT-CERT: 0x7F-YAN // TERMINAL OWNER',
    tintClass: 'tint-danger',
    summary: '当前这台“寒鸦 09 号取证台”的最高硬件授权密钥正是 0x7F-YAN（严律督察本人）。',
    desc: '调取你正在操作的这台【寒鸦审讯室：第 09 号记忆取证台】主板 TPM 安全芯片的根证书日志：本终端的最高督察硬件密钥序列号正是【0x7F-YAN】，持有人为司法部特别调查委员会最高督察严律——且该物理密钥在今早 06:15 刚刚插入本机签署了《03 车厢速裁督办令》，外壳残留有江水氯离子腐蚀痕迹。',
    note: '取证交叉点：在 03 车厢内解锁经颅覆写仪的硬件密钥【0x7F-YAN】，与本机最高督察根证书完全同源。',
    svg: '<rect x="140" y="20" width="240" height="65" fill="none" stroke-width="2"/><circle cx="180" cy="52" r="14" fill="none" stroke-width="2"/><line x1="210" y1="42" x2="350" y2="42" stroke-width="2"/><line x1="210" y1="62" x2="310" y2="62" stroke-width="2"/><text x="210" y="34" font-family="Barlow, monospace" font-size="11" stroke="none">ROOT KEY: 0x7F-YAN // JC-09</text>'
  }
};

window.JC09_ACTS = {
  1: {
    act: 1,
    name: '完美背锅者',
    goal: 'ACT I // 核验“T-15s 软件解除制动冲出断桥”供词真伪',
    heading: '第一幕：完美背锅者与静止的列车',
    body: '跨江大桥坍塌当晚，03 车厢坠入深水航道，车内六人全数生还，但所有植入商用脑机接口的乘员均缺失了坠桥前 T-17.0s 至 T-00.0s 的原始记忆，仅剩高度一致的“列车全速冲出断桥”表层供词。智驾系统总架构师顾言主动认罪，声称自己在 T-15 秒误发了紧急制动解除指令。然而，机械转向架的物理磨损不会说谎。',
    guide: '<strong>核心争点：</strong>顾言的表层认罪供述与 03 车厢主转向架机械制动盘的物理抱死时间轴是否存在根本矛盾。',
    conclusion: '<strong>归档结论：</strong>03 车厢在 T-17.0s 已彻底刹停于桥面，所谓“全速冲出断桥”系植入的合成伪证。',
    unlockedBody: '【第一幕已击穿】物理液压曲线证明列车早在 T-17.0 秒就已在断桥前 4.2 米处完全刹停！顾言所谓的“T-15 秒软件解除制动冲出桥面”是彻头彻尾的伪证。这说明在坠桥前那消失的 17 秒里，03 车厢实际上稳稳地停在桥面上。既然车是静止的，车厢里究竟发生了什么？',
    validPairs: [
      ['W05-A', 'B01'],
      ['W05-B', 'B01']
    ],
    hintWitness: 'W05',
    hintEvidence: 'B01'
  },
  2: {
    act: 2,
    name: '静止的十七秒',
    goal: 'ACT II // 核验静止的 17 秒内 03 车厢气密门封锁真相',
    heading: '第二幕：静止车厢里的落锁声与 440Hz 充能',
    body: '列车明明停稳了整整 17 秒，为什么 2★ 实习乘务员周野仍一口咬定“车厢剧烈颠簸、自己一直在试图拉开气密门疏散乘客”？全车唯一没有脑机接口的 1★ 盲眼调音师沈听澜，其骨传导助听器里记录下了被高频啸叫掩盖的真实车厢底噪。',
    guide: '<strong>核心争点：</strong>03 车厢前后气密门究竟是因撞击变形卡死，还是在静止状态下被人为从内部反锁。',
    conclusion: '<strong>归档结论：</strong>03 车厢在刹停后被从内部手动锁死隔离，车内曾启动 440Hz 经颅磁脉冲设备。',
    unlockedBody: '【第二幕已击穿】沈听澜的骨传导录音与气密门日志共同证实：03 车厢在刹停后立刻被周野从内部用机械钥匙死锁！在静止的 17 秒里，03 车厢被人为隔离成了一间密室，而 4★ 神经外科医师温莎·林正在启动 440Hz 经颅磁脉冲仪，企图抹除沈听澜无意中听见的某段对话！',
    validPairs: [
      ['W01-B', 'W02-A'],
      ['W01-B', 'B02'],
      ['W02-A', 'B02'],
      ['W02-B', 'B02']
    ],
    hintWitness: 'W01',
    hintEvidence: 'B02'
  },
  3: {
    act: 3,
    name: '共谋手术刀',
    goal: 'ACT III // 追查解除经颅磁脉冲功率锁的现场最高授权人',
    heading: '第三幕：共谋手术刀与 03-F 座的幽灵授权',
    body: '为什么要冒着全车陪葬的风险，在 17 秒内对一名盲眼调音师进行现场记忆清洗？温莎·林医师表层声称自己只是在使用急救除颤仪，但医疗器械底层安全日志显示，有人在 T-09.2 秒将一枚最高级别的硬件密钥物理插进了她的设备，强行解除了临床功率限制。',
    guide: '<strong>核心争点：</strong>温莎·林的医疗器械安全锁系由何人在 03 车厢现场通过物理插卡解除。',
    conclusion: '<strong>归档结论：</strong>持有【0x7F-YAN】硬件密钥的司法部最高督察严律当晚就在 03-F 座现场指挥清洗。',
    unlockedBody: '【第三幕已击穿】温莎·林的深层记忆与 B-04 硬件握手包彻底撕开了共谋网：坐在 03-F 座的正是持有司法部最高督察密钥（0x7F-YAN）的严律！她与陆峥、温莎、顾言在车厢内密谋向城市脑机固件植入非法监控后门“寒鸦棱镜”，因急停时被盲眼调音师的骨传导器录下全程，严律当场下令洗脑、刷写假记忆并炸断车钩沉江！',
    validPairs: [
      ['W04-B', 'B04'],
      ['W04-A', 'B04'],
      ['W03-B', 'B05'],
      ['W05-B', 'B04']
    ],
    hintWitness: 'W04',
    hintEvidence: 'B04'
  },
  4: {
    act: 4,
    name: '寒鸦照影',
    goal: 'ACT IV // 比对 03-F 座督察密钥与第 09 号取证台本机根证书',
    heading: '第四幕：寒鸦照影 —— 审判者即同谋',
    body: '严律督察在案发后以特别调查委员会最高督察的身份向你下达了《速裁督办令》，谎称自己当晚坐镇司法部大楼。然而，你正在操作的这台「寒鸦 09 号记忆取证台」主板根证书上，赫然烙印着同一枚刚刚从江水里捞出来的硬件密钥序列号。',
    guide: '<strong>核心争点：</strong>签发《速裁督办令》的最高督察严律，与 03-F 座现场下令炸钩灭口的密钥持有人是否为同一人。',
    conclusion: '<strong>归档结论：</strong>全部四幕伪证链已瓦解，主审官严律即 03-F 座主谋。',
    unlockedBody: '【第四幕终极击穿完成】所有的逻辑锁均已瓦解！严律不仅在 03-F 座亲自指挥了那 17 秒的记忆清洗与炸钩沉江，而且特意将打捞出的黑匣指派给她麾下的第 09 号取证台——因为她笃定你不敢背叛自己的最高长官。现在，终端的最后一次公诉签名权握在你的手中。',
    validPairs: [
      ['W06-B', 'B06'],
      ['W06-A', 'B06'],
      ['W06-B', 'W06-A']
    ],
    hintWitness: 'W06',
    hintEvidence: 'B06'
  }
};

window.JC09_ENDINGS = {
  broadcast: {
    code: 'VERDICT-A // FULL-NET BROADCAST',
    title: '终局裁决 [A]：破晓骨传导 · 全网强制公诉',
    text: '你用第 09 号取证台的底层根权限将沈听澜助听器里的 17 秒原始反相音频与 0x7F-YAN 密钥握手包同步广播至全城司法内网与公共媒体节点。三分钟后，寒鸦审讯室的备用电源被外部强行切断，防暴靴的脚步声在走廊尽头响起——但你的屏幕在熄灭前已收到 1,420 个公诉节点的镜像回执。“寒鸦棱镜”后门法案当夜流产，盲眼调音师在听证席上举起了那枚 440Hz 的标准音叉。'
  },
  coverup: {
    code: 'VERDICT-B // PROTOCOL OVERRIDE',
    title: '终局裁决 [B]：深水铁案 · 顺应最高督察协议',
    text: '你执行了严律督察预设的格式化指令。骨传导反相声轨与 0x7F-YAN 签名在高温覆写扇区中化为乱码，结案报告定格为“智驾系统总架构师顾言操作失误导致单节车厢脱钩坠江”。次日清晨，你的工牌权限升格为特别调查委员会一级审查官，而沈听澜收到了圣卢克医院寄来的“创伤性听觉幻觉”诊断书。第 09 号取证台依旧安静运转，像一只从未开口的寒鸦。'
  },
  silence: {
    code: 'VERDICT-C // PHANTOM ARCHIVE',
    title: '终局裁决 [C]：空白音叉 · 证据链永久静默',
    text: '你没有触发全网警报，也没有签署顾言的顶罪书，而是利用 09 号台的硬件漏洞将本案状态永久锁定为“黑匣扇区物理损毁 · 无法结案”。在销毁主机的最后一秒，你将那段未受污染的 440Hz 琴音与严律的原声切片拷入一枚离线骨传导芯片，匿名寄往了沈听澜的调音工作室。真正的审判不在受控的终端里，而在走出这间审讯室之后。'
  }
};
