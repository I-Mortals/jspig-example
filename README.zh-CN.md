<p align="center">
    <img src="https://img.shields.io/badge/JsPig-package?style=flat-square&link=JsPig"
        height="130" width="260">
</p>

<p align="center">
    <a href="README.md">English</a> | <b>简体中文</b>
</p>

<p align="center">
    <a href="EVENTS.zh-CN.md">事件文档</a>
</p>

# Description
JsPig 通过 GraalVM 提供对 Bukkit API 的完整访问，让开发者能够利用 JavaScript 的灵活性和简洁性，高效地创建和管理 Minecraft 插件。

# Start

1. 先将插件放入`bukkit`系列的服务端的插件文件夹 `plugins` 。
2. 启动服务端之后即可看到插件生成的同名插件数据文件夹，在控制台输入命令`JsPig declare`可生成声明文件`global.d.ts`。
3. 用`VSCode`打开与插件同名的插件数据文件夹，即可开始编写`JavaScript`插件。

## 高级功能

* 在插件数据文件夹新建一个文件夹，按照通用命名规范命名文件夹，在该文件夹内新建文件 `package.json`,填写如下代码：
```json
{
  "main": "./block.js",
  "modules": [
    "registry",
    "scripts-manager",
    "console",
    "timer"
  ]
}
```
* 然后在该文件夹下新建文件`block.js`，即可启用高级功能开发插件。

`block.js` 是示范文件，填写任何名称皆可。

### `modules` 中可配置的选项：
* `registry` 注册事件。
* `scripts-manager` 脚本管理。
* `console` 日志。
* `timer` 计时， 添加对于`setTimeout`, `setInterval`, `clearTimeout`, `clearInterval` 的支持（精确计时）。

# 命令
主命令为 `/JsPig`（别名 `/jspig`、`/js`），第一个参数为子命令：

* `load <路径>` — 加载脚本文件或包文件夹。
* `unload [路径]` — 卸载脚本/包；省略路径时卸载全部。
* `reload [路径]` — 重载脚本/包；省略路径时重载全部。
* `list` — 列出当前已加载的脚本。
* `show` — 列出插件数据文件夹中已注册的脚本，即所有包含 `package.json` 的文件夹。每条以 `folder/main.js` 形式显示，已加载的条目后面带绿色 `✓`。
* `declare`（别名 `declaration`、`d`）— 生成声明文件 `global.d.ts`。

服务端加载完成后会自动扫描已注册的脚本，将列表输出到控制台并加载它们。

## 权限
* `JsPig.op`（默认：`op`）——使用 `/jspig` 所需：
    * `/jspig load <js>`
    * `/jspig unload <js>`
    * `/jspig reload`
    * `/jspig list`
    * `/jspig show`
    * `/jspig declare`
* `JsPig.JsExtend`（默认：`default`）——使用 `/jse <命令>`（由 JavaScript 实现的自定义子命令）所需。

# 自定义命令
每一个文件夹内的`package.json`可以定义自定义指令,示例配置如下：
```json
{
  "command": {
    "command": "list",
    "description": "列出所有子命令",
    "usage": "使用/<主命令> list",
    "permission": "JsPig.JsExtend.List",
    "permissionMessage": "您没有使用此命令的权限。"
  }
}
```
```js
// JsExtend.list 对应的是 "command": "list"，JsExtend.为固定前缀，区分大小写。
registry.on("JsExtend.list", (sender, command, args) => {

})
```
**注意！一个`package.json`只能有一个命令。**

如果要玩家能正确的使用命令，例如上面的`list`,则需使用权限管理插件例如`LuckPerms-Bukkit`之类的插件。

然后添加权限节点为`JsPig.JsExtend.List`(大小写都可以),权限节点的值为`true`,正确的配置权限之后让服务端重新读取权限，即可让玩家使用。

在游戏内输入指令：`/jsextend list` 或者 `/jse list`

如果自定义的命令还有其他选项可使用 `/jse <命令> <命令的选项> <选项>`，可在`args`中获取。

以下是使用自定义命令的`package.json`全部配置：
```json
{
  "main": "./block.js",
  "modules": [
    "registry",
    "scripts-manager",
    "console",
    "timer"
  ],
  "command": {
    "command": "list",
    "description": "列出所有子命令",
    "usage": "使用/<主命令> list",
    "permission": "JsPig.JsExtend.List",
    "permissionMessage": "您没有使用此命令的权限。"
  }
}
```

# 示例
示例插件：[jspig-example](https://github.com/I-Mortals/jspig-example)
