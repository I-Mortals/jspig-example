import { TimeChecker } from "./tools.js"

/**
* @type {Server}
*/
const Bukkit = Java.type('org.bukkit.Bukkit')
/**
 * @type {ItemStack}
 */
const ItemStack = Java.type('org.bukkit.inventory.ItemStack')
/**
 * @type {Material}
 */
const Material = Java.type('org.bukkit.Material')
/**
 * @type {Player}
 */
const Player = Java.type('org.bukkit.entity.Player')

const timeChecker = new TimeChecker();
const wrolds = Bukkit.getWorlds()
const world = Bukkit.getWorld("world")

/** @type {Collection} */
const onlinePlayers = null;

if (typeof Graal != 'undefined') {
    console.log(Graal);
}

registry.on("playerJoin", (event) => {
    const player = event.getPlayer();
    // player.setResourcePack("http://localhost:3000/myResource.zip");

    const onlinePlayers = Bukkit.getOnlinePlayers();
    const playerSize = onlinePlayers.size();

    if (timeChecker.isDay(world)) {
        player.chat("It is day, playerSize: " + playerSize)
    } else if (timeChecker.isNight(world)) {
        player.chat("It is night, playerSize: " + playerSize)
    }
})

registry.on("blockBreak", (event) => {

    const block = event.getBlock();
    const player = event.getPlayer();

    // Set dropped items to stone
    event.setDropItems(false);
    block.getWorld().dropItemNaturally(block.getLocation(), new ItemStack(Material.STONE, 1));
})

// The player uses command Blocks
registry.on("JsExtend.blocks", (sender, command, args) => {

    if (Player.class.isInstance(sender)) {
        /** @type {Player} */
        const player = sender
        player.sendMessage("Hello World")

        /** @type {Location} */
        const location = player.getLocation();
        location.setY(location.getY() - 1)
        const block = location.getBlock();
        block.setType(Material.STONE);
    }
})