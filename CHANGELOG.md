# 更新日志 / Changelog

本文件记录 `hypergryph-design-md`（讲鹰语.md）仓库各版本的完整更新内容。

---

## [2026-10-22] 新增 `arknights.md` 游戏本体交互演示《寒鸦审讯室：第 09 号记忆取证台》与三份 `DESIGN.md` 审美校准

### 0. 新增非滚动交互式推理解谜演示 [`demo/arknights-jc09/`](demo/arknights-jc09/)（基于 [`arknights.md`](arknights.md)）
- **100% 独立原创悬疑叙事《寒鸦审讯室：第 09 号记忆取证台》**：围绕自动驾驶列车断桥坠江前消失的 17 秒，构建了包含 6 名幸存少女（1★–6★ 神经覆写阶位，双层记忆切片）、5 个时间轴节点、6 件物理黑匣物证、四幕递进「逻辑击穿」、交互式四步游玩指引弹窗与三向终局公诉裁决的完整悬疑故事（全案卷约 9,500 汉字，交互体验约 18–20 分钟）。
- **六位幸存角色差异化无描边构成主义几何矢量立绘**：
  - 6 位角色（`1★ 沈听澜`、`2★ 周野`、`3★ 陆峥`、`4★ 温莎·林`、`5★ 顾言`、`6★ 严律`）均拥有独立设计的服饰、动作、面部神态与专属俄式构成主义几何背景（音叉声波、列车运行时刻折线、战术准星、心电脉冲、斜拉索桥与全息列车蓝图、司法天平）；
  - 采用同色层 `fill-rule="evenodd"` 拓扑归并 + 面部/眼部 ROI 采样保护与拐点感知二次贝塞尔样条精修，生成纯内联 SVG 矢量立绘，同时实装于顶部六阶卡池缩略头像、主视图大幅半身立绘、02 神经切片台实时立绘视窗以及游玩指引角色图鉴条带。
- **严格落地 `arknights.md` 游戏本体设计语言**：
  - **非滚动锁屏舞台**：横竖双朝向根容器均严格 `overflow: hidden` 零滚动条，依靠四视图主控台（`01 // WITNESS`、`02 // SYNAPSE`、`03 // BLACKBOX`、`04 // VERDICT`）与卡片/抽屉交互驱动；
  - **40 色严选令牌与白模动态染色（`UIColorGraphic`）**：面板体 `#313131` + 内嵌槽 `#1B1B1B` 错位背板与 `1.2°` Y 轴微倾透视；物证工程图纸采用 `#FEFEFE` 纯白遮罩 + 运行时语义染色；
  - **六阶光晕 + 恒黄星标（`#FEDC01`）**：6 张证人卡底边对应 `#FEFEFE` → `#FE7200` 六阶光晕，星标恒为 `#FEDC01`；
  - **七态开关家族**：在 17 秒神经切片台中完整实现 `normal / on / off / select / selected / unselect / unselected` 七态滤波开关；
  - **自动化验收**：通过 `scripts/verify/tokens-jc09.mjs`（`FAIL 0 · REVIEW 0 · WARN 0`）与 `scripts/verify/interact-jc09.mjs`（Chrome CDP `16/16` 全链路断言通过，0 报错）。

---

### 1. 视觉尺度与物理/画布尺度解耦（Optical vs. Physical Scale Decoupling）
- **`arknights.md`（明日方舟 · 游戏本体）**
  - **解耦 Unity `RectTransform` 外框高度与真实字号**：此前 YAML `typography` 直接填写了 Unity 文本框的物理容器高度（如 `body: 25px`、`label: 20px`、`headline: 50px`、`display: 100px`），导致 Web 端按 `font-size` 渲染时文字整体膨胀约 40%–50%，丧失了鹰角标志性的“宽容器、小字号、高呼吸感”精密机能气质。
  - **更新 YAML 字阶为视觉字号（Optical Size）**：校准为 `display: 72px`、`headline: 32px`、`card-title: 24px`、`title-cjk: 24px`、`row-title: 18px`、`body: 16px`、`numeric: 20px`、`bitmap: 14px`、`body-sm: 13px`、`label: 13px`、`caption: 11px`、`cjk-display: 32px`、`cjk-serif: 22px`。
  - **新增双列字阶对照表**：在 `Typography -> Hierarchy` 中同时列出 **Optical Size** 与 **Container Box Height**，提炼出“字号约为容器高度 `0.55–0.65×`、预留 `35%–45%` 垂直呼吸暗空间”的核心排版定律，并在 `spacing` 中补充最高频控件步进 `row: 30px`。
- **`endfield-website.md`（明日方舟：终末地 · 官网）**
  - **新增标准桌面视口光学归一化表（`×0.65` Desktop Factor）**：原站基于 `1080×1920` 基准画布动态重算根字号（在常规 1366×768 至 1440×900 桌面视口下实际 `1rem ≈ 10.4px–12px`）。为防止在标准 `1rem = 16px` 静态网页中按原始像素 1:1 渲染出 `100px` 巨型按钮或 `506px` 顶栏，在 `Layout` 章节新增 `×0.65` 光学尺度转换表：
    - `button-primary`：`100px` → **`64px`**（左内边距 `140px` → `88px`）
    - `button-secondary`：`67px` → **`48px`**
    - `subpage-tab`：`168px` → **`108px`**
    - `subpage-header`：`506px` → **`320px`**（白底分割线 `249px` → `160px`）
    - `section-marker`：`132px` → **`88px`**
    - `progress-bar`：明确区分 **`100px` 全屏转场加载带** 与 **`8px–12px` 行内进度条**
    - `{typography.body}`：`20px` → **`15px–16px`**

### 2. 空间构成、材质层次与微图形语法（Compositional & Micro-Graphic Grammar）
- **留白虚空与高密度遥测簇的强反差（Void-to-Cluster Contrast）**
  - 在三份规范的 `Whitespace Philosophy` 中明确了鹰角工业美学的疏密张力：全局必须保留 **`45%–60%+` 的开放底色或立绘呼吸场**，使 `#242424`（明日方舟）或 `#d9d9d9`（终末地）幽灵巨字与结构色块承担建筑骨架功能；同时，局部元数据、标签与列表行必须采用 **`0px–4px` 零松弛高密度簇（Zero-Slack Telemetry Clusters）** 紧密咬合，杜绝平庸的“等距卡片网格”。
- **错位背板与相机微倾透视（`arknights.md`）**
  - 在 `Elevation & Depth -> Decorative Depth` 中补全了零阴影体系下的物理厚度手法：在主面板（`#1B1B1B`）右下方错位 `4px–8px` 叠放一层浅灰背板（`#313131`）或 `1px` 线框（Offset Backing Plates），以及主界面功能模块在相机空间中的 `1°–3°` 轻微透视倾斜。
- **工程测绘靶标与蓝图微图形（`endfield-website.md`）**
  - 在 `Shapes -> Decorative Geometry` 与 `Elevation & Depth` 中将网格交点处的 `1px` `+` 十字准星（Fiducial Crosshairs，`6px–10px` 臂长）、`//` 双斜杠分类前缀（`// OPERATORS`、`// SYSTEM`）以及非混合模式的平面点阵/波形底板（`points-bg`、`tape-wave-bg`）列为关键结构元素，赋予纯白底色（`#FFFFFF`）冷峻的“工业测绘蓝图”质感。

### 3. YAML 与正文审美自洽性修复（Self-Consistency & Luminance Discipline）
- **`arknights-website.md`（明日方舟 · 官网）**
  - **修复 `news-card` 自洽性**：将 `components.news-card` 的 `typography` 从 `{typography.body-sm}` 修正为 **`{typography.card-title}`（32px 展示级大字）** 并补充 `padding: 24px 32px`，彻底消除 YAML 与正文中“电光青 `#18d1ff` 底色严禁承载正文小字、仅限展示级大字（1.81:1 豁免）”的冲突。
  - **校准 `filter-tab-active` / `filter-tab-default`**：将高度与字阶统一校准为 `height: 24px`、`padding: 0 10px 0 6px`、`typography: "{typography.body-sm}"`（12px）。
  - **区域主题色明度与暗角约束**：针对明度偏高的暖灰褐底色 `region-surface-taupe`（`#898175`），在 `Colors -> Region Theming` 中规定必须配合底部/边缘暗角渐晕（`rgba(0,0,0,0.45–0.65)`）或局部深色衬底，避免 `#eeb763` 金色文字发灰眩光或破坏 `#000000` 全局暗场重心。
  - **客户端字体交叉核验同步**：在保持单文件完全自包含（零跨文件引用）的前提下，将客户端实测的四声部字体结论同步至 `Which Voices Are Shared With the Client`。
- **纯几何组件冗余属性清理**
  - 移除了三份规范中纯几何组件（`arknights.md` 的 `progress-track` / `progress-fill` / `mask-white` / `divider` / `highlight-bar`；`arknights-website.md` 的 `progress-bar` / `divider-soft`；`endfield-website.md` 的 `card-accent-strip` / `progress-bar` / `progress-bar-fill` / `divider-light` / `rule-soft`）上无意义的 `typography` 与 `textColor` 声明。
- **元数据命名归位**
  - 统一了三份规范 YAML 顶部的 `name` 标识：`Arknights-design-analysis`（游戏本体）、`Arknights-website-design-analysis`（明日方舟官网）、`Endfield-website-design-analysis`（终末地官网）。

---

## [2026-10-14] 演示工程《未播出的第七段》v2 交互升级与 `arknights.md` 游戏本体规范发布

- **新增 [`arknights.md`](arknights.md)**：首份基于《明日方舟》客户端出厂内嵌 UI（未加密 Unity 序列化资源：6,807 GameObject / 6,417 RectTransform / 1,231 Texture2D / 20 Font）实测逆向的设计系统规范。
- **演示工程 [`demo/arknights-eb07/`](demo/arknights-eb07/) v2 升级**：新增 14 处原生 `<details>` 可展开档案与解密附件、章末二选一终局抉择（`localStorage` 持久化）、`ArrowLeft` / `ArrowRight` 键盘切章与跨会话阅读进度恢复、0.3–0.5s 磁带扫描读数动效（支持 `prefers-reduced-motion`）以及 Web Audio 实时合成环境底噪。

---

## [2026-10-13] 初始版本发布

- 发布 [`arknights-website.md`](arknights-website.md)（《明日方舟》官网设计系统分析）与 [`endfield-website.md`](endfield-website.md)（《明日方舟：终末地》官网设计系统分析）。
- 发布单文件零依赖演示页面《未播出的第七段》（`demo/arknights-eb07/index.html`）。
