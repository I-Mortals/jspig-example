<p align="center">
    <img src="https://img.shields.io/badge/JsPig-package?style=flat-square&link=JsPig"
        height="130" width="260">
</p>

<p align="center">
    <b>English</b> | <a href="https://github.com/I-Mortals/JsPig/blob/main/EVENTS.zh-CN.md">简体中文</a>
</p>

<p align="center">
    <a href="EVENTS.md">Events documentation</a>
</p>

# Description
JsPig provides complete access to the Bukkit API through GraalVM, enabling developers to build and manage Minecraft plugins efficiently using the flexibility and simplicity of JavaScript.

# Start

1. First, place the plugin into the `plugins` folder of a `bukkit`-family server.
2. After starting the server, you will see a plugin data folder with the same name as the plugin. Enter the command `JsPig declare` in the console to generate the declaration file `global.d.ts`.
3. Open the plugin data folder (same name as the plugin) with `VSCode`, and you can start writing `JavaScript` plugins.

## Advanced features

* Create a new folder inside the plugin data folder, name it following common naming conventions, create a `package.json` file inside it, and fill in the following code:
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
* Then create a `block.js` file in that folder to start developing plugins with advanced features.

`block.js` is an example file; any name works.

### Available options in `modules`:
* `registry` register events.
* `scripts-manager` script management.
* `console` logging.
* `timer` timing; adds support for `setTimeout`, `setInterval`, `clearTimeout`, `clearInterval` (precise timing).

# Commands
The main command is `/JsPig` (aliases `/jspig` and `/js`); its first argument is the subcommand:

* `load <path>` — load a script file or a package folder.
* `unload [path]` — unload a script/package; unload all when `path` is omitted.
* `reload [path]` — reload a script/package; reload all when `path` is omitted.
* `list` — list the currently loaded scripts.
* `show` — list the scripts registered in the plugin data folder, i.e. every folder that contains a `package.json`. Each entry is displayed as `folder/main.js`, and a green `✓` marks the ones that are already loaded.
* `declare` (aliases `declaration`, `d`) — generate the `global.d.ts` declaration file.

After the server finishes loading, the registered scripts are scanned automatically, the list is printed to the console, and the scripts are loaded.

## Permissions
* `JsPig.op` (default: `op`) — required to use `/jspig`:
    * `/jspig load <js>`
    * `/jspig unload <js>`
    * `/jspig reload`
    * `/jspig list`
    * `/jspig show`
    * `/jspig declare`
* `JsPig.JsExtend` (default: `default`) — required to use `/jse <command>`, the custom subcommands implemented by JavaScript.

# Custom commands
The `package.json` in each folder can define custom commands. Example configuration:
```json
{
  "command": {
    "command": "list",
    "description": "List all subcommands",
    "usage": "Use /<main command> list",
    "permission": "JsPig.JsExtend.List",
    "permissionMessage": "You do not have permission to use this command."
  }
}
```
```js
// JsExtend.list corresponds to "command": "list"; "JsExtend." is a fixed prefix and is case-sensitive.
registry.on("JsExtend.list", (sender, command, args) => {

})
```
**Note! A `package.json` can only have one command.**

For players to use the command correctly — for example the `list` above — you need a permission management plugin such as `LuckPerms-Bukkit`.

Then add a permission node `JsPig.JsExtend.List` (either case works), set its value to `true`, and make the server reload permissions so that players can use it.

In-game, enter: `/jsextend list` or `/jse list`

If your custom command has additional options, use `/jse <command> <command options> <options>`; they can be retrieved from `args`.

Here is the full `package.json` configuration for using custom commands:
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
    "description": "List all subcommands",
    "usage": "Use /<main command> list",
    "permission": "JsPig.JsExtend.List",
    "permissionMessage": "You do not have permission to use this command."
  }
}
```

# Example
Example plugin: [jspig-example](https://github.com/I-Mortals/jspig-example)
