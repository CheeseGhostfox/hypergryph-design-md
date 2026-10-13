# 讲鹰语.md

> 让您的 agent 交付物充斥鹰角叔叔的香甜舟味

鹰角网络（Hypergryph）旗下游戏界面的 `DESIGN.md` 设计系统分析 —— 一个风格，一份文件。

仓库 slug 是 `hypergryph-design-md`。GitHub 的仓库名只接受 ASCII 字母、数字与 `.-_`，所以「讲鹰语.md」作为中文名展示在标题与仓库简介里，链接地址仍用 slug。

## English summary

**讲鹰语.md** — "Hypergryph-speak". Unofficial `DESIGN.md` design-system analyses for Hypergryph
titles: **Arknights** and **Arknights: Endfield**. Tagline: *let your agent's deliverables brim with
Uncle Hypergryph's sweet Arknights flavour.*

Each file is a complete, self-contained `DESIGN.md` following the format defined by
[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — one style, one file,
flat: no index, no registry, no per-style subdirectories, and no cross-references between files.
Copy the one you want into your project root as `DESIGN.md` and let your AI coding agent build UI
against it. These analyses are unofficial and are not affiliated with or endorsed by Hypergryph.

## 这是什么

- **一个风格一份 `.md`**。仓库是平的：没有家族索引、没有注册表、没有检索机制，也没有按风格分的子目录。
- 每一份文件都是**自包含**的设计系统文档，遵循 Google Stitch 的 `DESIGN.md` 格式 —— YAML frontmatter 声明颜色、字体、间距、圆角等 token，正文说明这套界面为什么长这样、什么时候该用哪一条。
- 两份文件**互不引用**。你可以单独拿走任意一份，不需要另一份在场，也不会有任何链接失效。

## 怎么用

1. 把你想用的那一份 `.md` 复制到你项目的根目录，并重命名为 `DESIGN.md`：

   ```bash
   cp arknights.md your-project/DESIGN.md
   ```

2. 然后在任意 AI coding agent（Claude Code、Cursor、Antigravity、DeepSeek Harness 等）里说一句：

   > 按项目根目录的 DESIGN.md 做界面

3. 想换风格就换文件，**不要同时放两份** —— 一次只让一份 `DESIGN.md` 生效，否则 agent 会收到互相冲突的指令。
4. 也可以直接把文件内容整段贴进对话或系统提示。它就是纯文本，没有依赖、没有构建步骤、没有外部资源。

## 收录内容

| 文件名 | 风格 | 一句话描述 | 证据来源 |
| --- | --- | --- | --- |
| `arknights.md` | 《明日方舟》 | 硬工业近黑界面，纯 `#000000` 画布 + 单一电光青 `#18d1ff`，直角、发丝线分隔、`#242424` 巨大幽灵字；四声部字体（Novecento Sans Wide / Oswald / Bender / 思源黑体） | 依据 `ak.hypergryph.com` 官方样式表（约 152 KB CSS）与官方页面截图，并与本机官方 PC 客户端交叉核对 |
| `endfield.md` | 《明日方舟：终末地》 | 信号黄工业科技界面，近黑 `#191919` 与近白双地色 + 单一高压黄 `#fffa00`，圆形/胶囊控件与 4px 卡片、环境阴影、斜纹警示渐层；元素有专属色相、职业只用单色字形 | 依据 `endfield.hypergryph.com` 官方样式表（370,417 字节 / 9 个 CSS）与官方页面截图，元素色取自官方 CDN 的 `ele-*.jpg` 图标量化取样 |

## 演示 / Demo

[![demo preview](demo/arknights-eb07/verify-out/landscape-1440x900.hero.png)](https://cheeseghostfox.github.io/hypergryph-design-md/demo/arknights-eb07/)

一份**只照着 `arknights.md` 做出来**的示例页面：**《未播出的第七段》// THE UNSENT SEVENTH** —— 虚构城市「白屿市」民防广播站 EB-07 的回收卷宗，七段记录，一个完整叙事弧线。

- **在线预览**：<https://cheeseghostfox.github.io/hypergryph-design-md/demo/arknights-eb07/>
- **源码**：`demo/arknights-eb07/index.html` —— 自包含单文件，约 66 KB，零依赖、无构建步骤，双击就能开
- **构建分片**：`demo/arknights-eb07/parts/` —— 其中 `05-style-tokens.css` 就是把 frontmatter 里的 token 落成 CSS 变量的那一层，可以直接对照着看规范怎么变成代码
- **验收输出**：`demo/arknights-eb07/verify-out/` —— 横竖两版截图与 `audit.json`（`ok: true`、`errors: []`）

这是一段**演示，不是规范的一部分**：它回答的是「照着 `arknights.md` 能长出什么」，而不是「必须这样写」。它只用到了 `arknights.md` 这一份文件，没有引用 `endfield.md`。

> **字体说明**：示例页用的是公开替身字体（Archivo / Barlow / Oswald / Noto Sans SC，从 Google Fonts 加载），因为 `arknights.md` 里记录的原版字体 Novecento Sans Wide 与 Bender 并不公开分发 —— 这正是该文件「Note on Font Substitutes」一节建议的做法。

**Demo (English).** A sample page built strictly from `arknights.md` — *THE UNSENT SEVENTH*, a seven-chapter fictional archive of a civil-defence broadcast station. Self-contained single HTML file, no build step, no dependencies beyond web fonts. It demonstrates the specification; it is not part of it.

## 友情链接 / Credits

- 格式与撰写规范来自 **[VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)**。本仓库沿用该项目定义的 `DESIGN.md` 格式与撰写规范。
- 上游那 84 份网站设计文件**没有**被复制到这里，请直接去上游获取。
- 本仓库只收录上游没有的、自行分析撰写的内容。
- 因为这些就是普通的 `DESIGN.md` 文件，所以可以直接放进上游项目的同一套 skill / 工具链里使用。

## 免责声明

- 本仓库是**非官方**的个人分析，与鹰角网络（Hypergryph）**无任何隶属或背书关系**。
- 所有游戏名称、商标与美术资源归各自权利人所有。
- 仓库内**不包含任何受版权保护的素材**：只有对公开可见的 CSS 取值、公开发布的图标与渲染页面所作的分析，以及取样得到的颜色值。
- 这些分析是对证据的一种读法，不是官方文档，也不代表官方设计规范。

## 许可 / Licence

本项目采用 **MIT** 许可，详见 [LICENSE](LICENSE)。

`Copyright (c) 2026 CheeseGhostfox`

`DESIGN.md` 格式本身来源于上方友情链接的 [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 项目。
