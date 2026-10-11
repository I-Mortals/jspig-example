# JsPig Events

<p align="center">
    <b>English</b> | <a href="EVENTS.zh-CN.md">简体中文</a>
</p>

JsPig bridges the Bukkit event system to JavaScript through GraalVM. Every concrete Bukkit event is forwarded to JavaScript listeners you register through the `registry` module, so you can build Minecraft plugins entirely in JavaScript.

## Overview

- Events are registered with `registry.on(name, listener)` and removed with `registry.off(name, listener)`.
- The event name is the Bukkit event class name without the trailing `Event`, with the first letter lowercased (camelCase). For example, `PlayerJoinEvent` is `playerJoin`, and `TNTPrimeEvent` is `tNTPrime`.
- The listener receives the original Bukkit event object, so you can read data and, for cancellable events, cancel them.
- Type declarations are generated into `global.d.ts` so editors such as VS Code can autocomplete event names and event types.

## Quick start

Enable the `registry` module and point `main` at your script in `package.json`:

```json
{
  "main": "./index.js",
  "modules": [
    "registry",
    "console",
    "timer"
  ]
}
```

Then register listeners in your script:

```js
registry.on("playerJoin", (event) => {
  const player = event.getPlayer()
  player.sendMessage(`Welcome, ${player.getName()}!`)
})

registry.on("blockBreak", (event) => {
  // Only let players break stone
  if (event.getBlock().getType().toString() !== "STONE") {
    event.setCancelled(true)
  }
})
```

## Event names and typings

Event names follow one rule:

```
eventName = uncapitalize(ClassName without the trailing "Event")
```

Examples:

| Bukkit event class | JsPig event name |
| --- | --- |
| `org.bukkit.event.player.PlayerJoinEvent` | `playerJoin` |
| `org.bukkit.event.block.BlockBreakEvent` | `blockBreak` |
| `org.bukkit.event.entity.EntityDamageByEntityEvent` | `entityDamageByEntity` |
| `org.bukkit.event.block.TNTPrimeEvent` | `tNTPrime` |
| `org.bukkit.event.world.GenericGameEvent` | `genericGame` |

Run the command `JsPig declare` in the server console to (re)generate `global.d.ts` in the plugin data folder. It contains a `declare class`/`interface` for every event plus an `EventMapping` interface that maps each event name to its event class. The `registry` object is typed through this mapping:

```ts
registry.on("playerJoin", (event) => {
  // event: org.bukkit.event.player.PlayerJoinEvent
  event.getPlayer()
})
```

## EventRegistry API

The `registry` object exposes four methods:

| Method | Description |
| --- | --- |
| `registry.on(type, listener)` | Register a listener for an event type. |
| `registry.addListener(type, listener)` | Alias of `on`. |
| `registry.off(type, listener)` | Remove a previously registered listener. |
| `registry.removeListener(type, listener)` | Alias of `off`. |

Typed signature (from the generated `global.d.ts`):

```ts
type EventTypes = keyof EventMapping

interface EventRegistry {
  addListener<T extends EventTypes>(type: T, listener: (e: EventMapping[T]) => void): void
  removeListener<T extends EventTypes>(type: T, listener: (e: EventMapping[T]) => void): void
  on<T extends EventTypes>(type: T, listener: (e: EventMapping[T]) => void): void
  off<T extends EventTypes>(type: T, listener: (e: EventMapping[T]) => void): void
}

declare namespace globalThis {
  const registry: EventRegistry
}
```

You can register multiple listeners for the same event; all of them run when the event fires. Keep listeners fast — they run on the server thread while the event is being processed.

## Cancelling events

Events that implement `Cancellable` can be cancelled from your listener:

```js
registry.on("entityDamage", (event) => {
  if (event.getEntity().getType().toString() === "ZOMBIE") {
    event.setCancelled(true)
  }
})
```

## A note on event inheritance

In Spigot 26.1.2 many event subclasses share their parent's handler list. As a result, registering a listener for a parent event also receives subclass events. For example, a listener on `entityDamage` also fires for `entityDamageByEntity` and `entityDamageByBlock`.

To react to a specific subclass only, listen to that subclass name (for example `entityDamageByEntity`). To distinguish inside a parent listener, check the runtime type:

```js
registry.on("entityDamage", (event) => {
  if (event.getClass().getSimpleName() === "EntityDamageByEntityEvent") {
    // ...
  }
})
```

## Custom command events

Besides Bukkit events, JsPig delivers custom-command invocations through the same registry. A command defined in `package.json` as `"command": "list"` fires `JsExtend.list`:

```js
registry.on("JsExtend.list", (sender, command, args) => {
  // sender: Player, command: Command, args: string[]
})
```

## Supported events

All **264** events are supported: 263 `org.bukkit.event.*` events plus `org.spigotmc.event.player.PlayerSpawnLocationEvent` (`playerSpawnLocation`).

Your listener always receives a single argument — the event object. The **Parameters** column lists the event's constructor parameters (the data the event carries), which you read through the event's getters. The number in parentheses is the parameter count.

### block (45)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `bellResonate` | Called when a bell resonated after being rung and highlights nearby raiders. | `Block`, `List<LivingEntity>` (2) |
| `bellRing` | Called when a bell is being rung. | `Block`, `BlockFace`, `Entity` (3) |
| `blockBreak` | Called when a block is broken by a player. | `Block`, `Player` (2) |
| `blockBrush` | Called when a block is brushed by a player. | `Block`, `BlockState`, `Player` (3) |
| `blockBurn` | Called when a block is destroyed as a result of being burnt by fire. | `Block` (1) |
| `blockCanBuild` | Called when we try to place a block, to see if we can build it here or not. | `Block`, `BlockData`, `boolean` (3) |
| `blockCook` | Called when an ItemStack is successfully cooked in a block. | `Block`, `ItemStack`, `ItemStack` (3) |
| `blockDamage` | Called when a block is damaged by a player. | `Player`, `Block`, `ItemStack`, `boolean` (4) |
| `blockDamageAbort` | Called when a player stops damaging a Block. | `Player`, `Block`, `ItemStack` (3) |
| `blockDispense` | Called when an item is dispensed from a block. | `Block`, `ItemStack`, `Vector` (3) |
| `blockDispenseArmor` | Called when an equippable item is dispensed from a block and equipped on a nearby entity. | `Block`, `ItemStack`, `LivingEntity` (3) |
| `blockDispenseLoot` | Called when a block dispenses loot from its designated LootTable. | `Player`, `Block`, `List<ItemStack>` (3) |
| `blockDropItem` | Called if a block broken by a player drops an item. | `Block`, `BlockState`, `Player`, `List<Item>` (4) |
| `blockExp` | An event that's called when a block yields experience. | `Block`, `int` (2) |
| `blockExplode` | Called when a block explodes. | `Block`, `BlockState`, `List<Block>`, `float`, `ExplosionResult` (5) |
| `blockFade` | Called when a block fades, melts or disappears based on world conditions Examples: Snow melting due to being near a light source. | `Block`, `BlockState` (2) |
| `blockFertilize` | Called with the block changes resulting from a player fertilizing a given block with bonemeal. | `Block`, `Player`, `List<BlockState>` (3) |
| `blockForm` | Called when a block is formed or spreads based on world conditions. | `Block`, `BlockState` (2) |
| `blockFromTo` | Represents events with a source block and a destination block, currently only applies to liquid (lava and water) and teleporting dragon eggs. | `Block`, `BlockFace` (2) |
| `blockGrow` | Called when a block grows naturally in the world. | `Block`, `BlockState` (2) |
| `blockIgnite` | Called when a block is ignited. | `Block`, `IgniteCause`, `Entity` (3) |
| `blockMultiPlace` | Fired when a single block placement action of a player triggers the creation of multiple blocks(e.g. | `List<BlockState>`, `Block`, `ItemStack`, `Player`, `boolean` (5) |
| `blockPhysics` | Thrown when a block physics check is called. | `Block`, `BlockData` (2) |
| `blockPistonExtend` | Called when a piston extends | `Block`, `int`, `BlockFace` (3) |
| `blockPistonRetract` | Called when a piston retracts | `Block`, `List<Block>`, `BlockFace` (3) |
| `blockPlace` | Called when a block is placed by a player. | `Block`, `BlockState`, `Block`, `ItemStack`, `Player`, `boolean` (6) |
| `blockReceiveGame` | Called when a Sculk sensor receives a game event and hence might activate. | `GameEvent`, `Block`, `Entity` (3) |
| `blockRedstone` | Called when a redstone current changes | `Block`, `int`, `int` (3) |
| `blockShearEntity` | Event fired when a dispenser shears a nearby sheep. | `Block`, `Entity`, `ItemStack` (3) |
| `blockSpread` | Called when a block spreads based on world conditions. | `Block`, `Block`, `BlockState` (3) |
| `brewingStart` | Called when a brewing stand starts to brew. | `Block`, `ItemStack`, `int` (3) |
| `campfireStart` | Called when a Campfire starts to cook. | `Block`, `ItemStack`, `CampfireRecipe` (3) |
| `cauldronLevelChange` | Called when a cauldron's fluid level changes. | `Block`, `Entity`, `ChangeReason`, `BlockState` (4) |
| `crafterCraft` | Event called when a Crafter is about to craft an item. | `Block`, `CraftingRecipe`, `ItemStack` (3) |
| `entityBlockForm` | Called when a block is formed by entities. | `Entity`, `Block`, `BlockState` (3) |
| `fluidLevelChange` | Called when the fluid level of a block changes due to changes in adjacent blocks. | `Block`, `BlockData` (2) |
| `inventoryBlockStart` | Used when: A Furnace starts smelting FurnaceStartSmeltEvent A Brewing-Stand starts brewing BrewingStartEvent A Campfire starts cooking CampfireStartEvent | `Block`, `ItemStack` (2) |
| `leavesDecay` | Called when leaves are decaying naturally. | `Block` (1) |
| `moistureChange` | Called when the moisture level of a soil block changes. | `Block`, `BlockState` (2) |
| `notePlay` | Called when a note block is being played through player interaction or a redstone current. | `Block`, `Instrument`, `Note` (3) |
| `sculkBloom` | Represents an event triggered when a new cursor is created by a SculkCatalyst. | `Block`, `int` (2) |
| `signChange` | Called when a sign is changed by a player. | `Block`, `Player`, `String[]` (3) |
| `spongeAbsorb` | Called when a sponge absorbs water from the world. | `Block`, `List<BlockState>` (2) |
| `tNTPrime` | Called when a block of TNT in the world become primed. | `Block`, `PrimeCause`, `Entity`, `Block` (4) |
| `vaultDisplayItem` | Called when a vault in a trial chamber is about to display an item. | `Block`, `ItemStack` (2) |

### enchantment (2)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `enchantItem` | Called when an ItemStack is successfully enchanted (currently at enchantment table) | `Player`, `InventoryView`, `Block`, `ItemStack`, `int`, `Map<Enchantment, Integer>`, `Enchantment`, `int`, `int` (9) |
| `prepareItemEnchant` | Called when an ItemStack is inserted in an enchantment table - can be called multiple times | `Player`, `EnchantmentView`, `Block`, `ItemStack`, `EnchantmentOffer[]`, `int` (6) |

### entity (77)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `areaEffectCloudApply` | Called when a lingering potion applies it's effects. | `AreaEffectCloud`, `List<LivingEntity>` (2) |
| `arrowBodyCountChange` | Called when an arrow enters or exists an entity's body. | `LivingEntity`, `int`, `int`, `boolean` (4) |
| `batToggleSleep` | Called when a bat attempts to sleep or wake up from its slumber. | `Bat`, `boolean` (2) |
| `creatureSpawn` | Called when a creature is spawned into a world. | `LivingEntity`, `SpawnReason` (2) |
| `creeperPower` | Called when a Creeper is struck by lightning. | `Creeper`, `LightningStrike`, `PowerCause` (3) |
| `enderDragonChangePhase` | Called when an EnderDragon switches controller phase. | `EnderDragon`, `EnderDragon.Phase`, `EnderDragon.Phase` (3) |
| `entityAirChange` | Called when the amount of air an entity has remaining changes. | `Entity`, `int` (2) |
| `entityBreakDoor` | Called when an Entity breaks a door Cancelling the event will cause the event to be delayed | `LivingEntity`, `Block` (2) |
| `entityBreed` | Called when one Entity breeds with another Entity. | `LivingEntity`, `LivingEntity`, `LivingEntity`, `LivingEntity`, `ItemStack`, `int` (6) |
| `entityChangeBlock` | Called when any Entity changes a block and a more specific event is not available. | `Entity`, `Block`, `BlockData` (3) |
| `entityCombust` | Called when an entity combusts. | `Entity`, `int` (2) |
| `entityCombustByBlock` | Called when a block causes an entity to combust. | `Block`, `Entity`, `int` (3) |
| `entityCombustByEntity` | Called when an entity causes another entity to combust. | `Entity`, `Entity`, `int` (3) |
| `entityDamage` | Stores data for damage events | `Entity`, `DamageCause`, `double` (3) |
| `entityDamageByBlock` | Called when an entity is damaged by a block | `Block`, `Entity`, `DamageCause`, `double` (4) |
| `entityDamageByEntity` | Called when an entity is damaged by an entity | `Entity`, `Entity`, `DamageCause`, `double` (4) |
| `entityDeath` | Thrown whenever a LivingEntity dies | `LivingEntity`, `DamageSource`, `List<ItemStack>` (3) |
| `entityDismount` | Called when an entity stops riding another entity. | `Entity`, `Entity` (2) |
| `entityDropItem` | Thrown when an entity creates an item drop. | `Entity`, `Item` (2) |
| `entityEnterBlock` | Called when an Entity enters a block and is stored in that block. | `Entity`, `Block` (2) |
| `entityEnterLoveMode` | Called when an entity enters love mode. | `Animals`, `HumanEntity`, `int` (3) |
| `entityExhaustion` | Called when a human entity experiences exhaustion. | `HumanEntity`, `ExhaustionReason`, `float` (3) |
| `entityExplode` | Called when an entity explodes | `Entity`, `Location`, `List<Block>`, `float`, `ExplosionResult` (5) |
| `entityInteract` | Called when an entity interacts with an object | `Entity`, `Block` (2) |
| `entityKnockback` | Called when a living entity receives knockback. | `LivingEntity`, `KnockbackCause`, `double`, `Vector`, `Vector` (5) |
| `entityKnockbackByEntity` | Called when an entity receives knockback from another entity. | `LivingEntity`, `Entity`, `KnockbackCause`, `double`, `Vector`, `Vector` (6) |
| `entityMount` | Called when an entity attempts to ride another entity. | `Entity`, `Entity` (2) |
| `entityPickupItem` | Thrown when a entity picks an item up from the ground | `LivingEntity`, `Item`, `int` (3) |
| `entityPlace` | Triggered when a entity is created in the world by a player "placing" an item on a block. | `Entity`, `Player`, `Block`, `BlockFace`, `EquipmentSlot` (5) |
| `entityPortal` | Called when a non-player entity is about to teleport because it is in contact with a portal. | `Entity`, `Location`, `Location` (3) |
| `entityPortalEnter` | Called when an entity comes into contact with a portal | `Entity`, `Location` (2) |
| `entityPortalExit` | Called before an entity exits a portal. | `Entity`, `Location`, `Location`, `Vector`, `Vector` (5) |
| `entityPoseChange` | Called when an entity changes its pose. | `Entity`, `Pose` (2) |
| `entityPotionEffect` | Called when a potion effect is modified on an entity. | `LivingEntity`, `PotionEffect`, `PotionEffect`, `Cause`, `Action`, `boolean` (6) |
| `entityRegainHealth` | Stores data for health-regain events | `Entity`, `double`, `RegainReason` (3) |
| `entityRemove` | Called when an Entity is removed. | `Entity`, `Cause` (2) |
| `entityResurrect` | Called when an entity dies and may have the opportunity to be resurrected. | `LivingEntity`, `EquipmentSlot` (2) |
| `entityShootBow` | Called when a LivingEntity shoots a bow firing an arrow | `LivingEntity`, `ItemStack`, `ItemStack`, `Entity`, `EquipmentSlot`, `float`, `boolean` (7) |
| `entitySpawn` | Called when an entity is spawned into a world. | `Entity` (1) |
| `entitySpellCast` | Called when a Spellcaster casts a spell. | `Spellcaster`, `Spellcaster.Spell` (2) |
| `entityTame` | Thrown when a LivingEntity is tamed | `LivingEntity`, `AnimalTamer` (2) |
| `entityTarget` | Called when a creature targets or untargets another entity | `Entity`, `Entity`, `TargetReason` (3) |
| `entityTargetBlock` | Called when a creature targets or untargets a block, for example when a copper golem decides whether to walk to a given chest. | `Entity`, `Block` (2) |
| `entityTargetLivingEntity` | Called when an Entity targets a LivingEntity and can only target LivingEntity's. | `Entity`, `LivingEntity`, `TargetReason` (3) |
| `entityTeleport` | Thrown when a non-player entity is teleported from one location to another. | `Entity`, `Location`, `Location` (3) |
| `entityToggleGlide` | Sent when an entity's gliding status is toggled with an Elytra. | `LivingEntity`, `boolean` (2) |
| `entityToggleSwim` | Sent when an entity's swimming status is toggled. | `LivingEntity`, `boolean` (2) |
| `entityTransform` | Called when an entity is about to be replaced by another entity. | `Entity`, `List<Entity>`, `TransformReason` (3) |
| `entityUnleash` | Called immediately prior to an entity being unleashed. | `Entity`, `UnleashReason` (2) |
| `expBottle` | Called when a ThrownExpBottle hits and releases experience. | `ThrownExpBottle`, `int` (2) |
| `explosionPrime` | Called when an entity has made a decision to explode. | `Entity`, `float`, `boolean` (3) |
| `fireworkExplode` | Called when a firework explodes. | `Firework` (1) |
| `foodLevelChange` | Called when a human entity's food level changes | `HumanEntity`, `int` (2) |
| `horseJump` | Called when a horse jumps. | `AbstractHorse`, `float` (2) |
| `itemDespawn` | This event is called when a org.bukkit.entity.Item is removed from the world because it has existed for 5 minutes. | `Item`, `Location` (2) |
| `itemMerge` | Called when a dropped Item is merged into another Item. | `Item`, `Item` (2) |
| `itemSpawn` | Called when an item is spawned into a world | `Item`, `Location` (2) |
| `lingeringPotionSplash` | Called when a splash potion hits an area | `ThrownPotion`, `AreaEffectCloud` (2) |
| `pigZap` | Stores data for pigs being zapped | `Pig`, `LightningStrike`, `PigZombie` (3) |
| `pigZombieAnger` | Called when a Pig Zombie is angered by another entity. | `PigZombie`, `Entity`, `int` (3) |
| `piglinBarter` | Stores all data related to the bartering interaction with a piglin. | `Piglin`, `ItemStack`, `List<ItemStack>` (3) |
| `playerDeath` | Thrown whenever a Player dies | `Player`, `DamageSource`, `List<ItemStack>`, `int`, `String` (5) |
| `playerLeashEntity` | Called immediately prior to a creature being leashed by a player. | `Entity`, `Entity`, `Player`, `EquipmentSlot` (4) |
| `potionSplash` | Called when a splash potion hits an area | `ThrownPotion`, `Map<LivingEntity, Double>` (2) |
| `projectileHit` | Called when a projectile hits an object | `Projectile` (1) |
| `projectileLaunch` | Called when a projectile is launched. | `Entity` (1) |
| `sheepDyeWool` | Called when a sheep's wool is dyed | `Sheep`, `DyeColor` (2) |
| `sheepRegrowWool` | Called when a sheep regrows its wool | `Sheep` (1) |
| `slimeSplit` | Called when a Slime splits into smaller Slimes upon death | `Slime`, `int` (2) |
| `spawnerSpawn` | Called when an entity is spawned into a world by a spawner. | `Entity`, `CreatureSpawner` (2) |
| `striderTemperatureChange` | Called when a Strider's temperature has changed as a result of entering or exiting blocks it considers warm. | `Strider`, `boolean` (2) |
| `trialSpawnerSpawn` | Called when an entity is spawned into a world by a trial spawner. | `Entity`, `TrialSpawner` (2) |
| `villagerAcquireTrade` | Called whenever a villager acquires a new trade. | `AbstractVillager`, `MerchantRecipe` (2) |
| `villagerCareerChange` | Called when a villager changes its profession. | `Villager`, `Profession`, `ChangeReason` (3) |
| `villagerReplenishTrade` | Called when a Villager is about to restock one of its trades. | `AbstractVillager`, `MerchantRecipe` (2) |
| `villagerReputationChange` | Called whenever an entity's reputation with a villager changes. | `Villager`, `UUID`, `Villager.ReputationEvent`, `Villager.ReputationType`, `int`, `int`, `int` (7) |

### hanging (3)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `hangingBreak` | Triggered when a hanging entity is removed | `Hanging`, `HangingBreakEvent.RemoveCause` (2) |
| `hangingBreakByEntity` | Triggered when a hanging entity is removed by an entity | `Hanging`, `Entity` (2) |
| `hangingPlace` | Triggered when a hanging entity is created in the world | `Hanging`, `Player`, `Block`, `BlockFace`, `EquipmentSlot` (5) |

### inventory (23)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `brew` | Called when the brewing of the contents inside the Brewing Stand is complete. | `Block`, `BrewerInventory`, `List<ItemStack>`, `int` (4) |
| `brewingStandFuel` | Called when an ItemStack is about to increase the fuel level of a brewing stand. | `Block`, `ItemStack`, `int` (3) |
| `craftItem` | Called when the recipe of an Item is completed inside a crafting matrix. | `Recipe`, `InventoryView`, `SlotType`, `int`, `ClickType`, `InventoryAction` (6) |
| `furnaceBurn` | Called when an ItemStack is successfully burned as fuel in a furnace. | `Block`, `ItemStack`, `int` (3) |
| `furnaceExtract` | This event is called when a player takes items out of the furnace | `Player`, `Block`, `Material`, `int`, `int` (5) |
| `furnaceSmelt` | Called when an ItemStack is successfully smelted in a furnace. | `Block`, `ItemStack`, `ItemStack` (3) |
| `furnaceStartSmelt` | Called when a Furnace starts smelting. | `Block`, `ItemStack`, `CookingRecipe<?>` (3) |
| `hopperInventorySearch` | Event that gets called each time a Hopper attempts to find its source/attached containers. | `Inventory`, `ContainerType`, `Block`, `Block` (4) |
| `inventory` | Represents a player related inventory event | `InventoryView` (1) |
| `inventoryClick` | This event is called when a player clicks in an inventory. | `InventoryView`, `SlotType`, `int`, `ClickType`, `InventoryAction` (5) |
| `inventoryClose` | Represents a player related inventory event | `InventoryView` (1) |
| `inventoryCreative` | This event is called when a player in creative mode puts down or picks up an item in their inventory / hotbar and when they drop items from their Inventory while in creative mode. | `InventoryView`, `SlotType`, `int`, `ItemStack` (4) |
| `inventoryDrag` | This event is called when the player drags an item in their cursor across the inventory. | `InventoryView`, `ItemStack`, `ItemStack`, `boolean`, `Map<Integer, ItemStack>` (5) |
| `inventoryMoveItem` | Called when some entity or block (e.g. | `Inventory`, `ItemStack`, `Inventory`, `boolean` (4) |
| `inventoryOpen` | Represents a player related inventory event | `InventoryView` (1) |
| `inventoryPickupItem` | Called when a hopper or hopper minecart picks up a dropped item. | `Inventory`, `Item` (2) |
| `prepareAnvil` | Called when an item is put in a slot for repair by an anvil. | `AnvilView`, `ItemStack` (2) |
| `prepareGrindstone` | Called when an item is put in a slot for repair or unenchanting in a grindstone. | `InventoryView`, `ItemStack` (2) |
| `prepareInventoryResult` | Called when an item is put in a slot and the result is calculated. | `InventoryView`, `ItemStack` (2) |
| `prepareItemCraft` | Called when a player is preparing the result of a crafting recipe. | `CraftingInventory`, `InventoryView`, `boolean` (3) |
| `prepareSmithing` | Called when an item is put in a slot for upgrade by a Smithing Table. | `InventoryView`, `ItemStack` (2) |
| `smithItem` | Called when the recipe of an Item is completed inside a smithing table. | `InventoryView`, `InventoryType.SlotType`, `int`, `ClickType`, `InventoryAction` (5) |
| `tradeSelect` | This event is called whenever a player clicks a new trade on the trades sidebar. | `MerchantView`, `int` (2) |

### player (71)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `asyncPlayerChat` | This event will sometimes fire synchronously, depending on how it was triggered. | `boolean`, `Player`, `String`, `Set<Player>` (4) |
| `asyncPlayerChatPreview` | Used to format chat for chat preview. | `boolean`, `Player`, `String`, `Set<Player>` (4) |
| `asyncPlayerPreLogin` | Stores details for players attempting to log in. | `String`, `InetAddress` (2) |
| `playerAdvancementDone` | Called when a player has completed all criteria in an advancement. | `Player`, `Advancement` (2) |
| `playerAnimation` | Represents a player animation event | `Player` (1) |
| `playerArmorStandManipulate` | Called when a player interacts with an armor stand and will either swap, retrieve or place an item. | `Player`, `ArmorStand`, `ItemStack`, `ItemStack`, `EquipmentSlot`, `EquipmentSlot` (6) |
| `playerBedEnter` | This event is fired when the player is almost about to enter the bed. | `Player`, `Block`, `BedEnterResult` (3) |
| `playerBedLeave` | This event is fired when the player is leaving a bed. | `Player`, `Block`, `boolean` (3) |
| `playerBucketEmpty` | Called when a player empties a bucket | `Player`, `Block`, `BlockFace`, `Material`, `ItemStack` (5) |
| `playerBucketEntity` | This event is called whenever a player captures an entity in a bucket. | `Player`, `Entity`, `ItemStack`, `ItemStack`, `EquipmentSlot` (5) |
| `playerBucketFill` | Called when a player fills a bucket | `Player`, `Block`, `BlockFace`, `Material`, `ItemStack` (5) |
| `playerBucketFish` | This event is called whenever a player attempts to put a fish in a bucket. | `Player`, `Fish`, `ItemStack`, `ItemStack`, `EquipmentSlot` (5) |
| `playerChangedMainHand` | Called when a player changes their main hand in the client settings. | `Player`, `MainHand` (2) |
| `playerChangedWorld` | Called when a player switches to another world. | `Player`, `World` (2) |
| `playerChat` | Holds information for player chat and commands | `Player`, `String` (2) |
| `playerChatTabComplete` | Called when a player attempts to tab-complete a chat message. | `Player`, `String`, `Collection<String>` (3) |
| `playerCommandPreprocess` | This event is called whenever a player runs a command (by placing a slash at the start of their message). | `Player`, `String` (2) |
| `playerCommandSend` | This event is called when the list of available server commands is sent to the player. | `Player`, `Collection<String>` (2) |
| `playerCustomClick` | Called after a player runs a custom action from a chat event or form submission. | `Player`, `NamespacedKey`, `JsonElement` (3) |
| `playerDropItem` | Thrown when a player drops an item from their inventory | `Player`, `Item` (2) |
| `playerEditBook` | Called when a player edits or signs a book and quill item. | `Player`, `int`, `BookMeta`, `BookMeta`, `boolean` (5) |
| `playerEggThrow` | Called when a player throws an egg and it might hatch | `Player`, `Egg`, `boolean`, `byte`, `EntityType` (5) |
| `playerExpChange` | Called when a players experience changes naturally | `Player`, `int` (2) |
| `playerExpCooldownChange` | Called when a player's experience cooldown changes. | `Player`, `int`, `ChangeReason` (3) |
| `playerFish` | Thrown when a player is fishing | `Player`, `Entity`, `FishHook`, `EquipmentSlot`, `State` (5) |
| `playerGameModeChange` | Called when the GameMode of the player is changed. | `Player`, `GameMode` (2) |
| `playerHarvestBlock` | This event is called whenever a player harvests a block. | `Player`, `Block`, `EquipmentSlot`, `List<ItemStack>` (4) |
| `playerHideEntity` | Called when a visible entity is hidden from a player. | `Player`, `Entity` (2) |
| `playerInput` | This event is called when a player sends updated input to the server. | `Player`, `Input` (2) |
| `playerInteract` | Represents an event that is called when a player interacts with an object or air, potentially fired once for each hand. | `Player`, `Action`, `ItemStack`, `Block`, `BlockFace` (5) |
| `playerInteractAtEntity` | Represents an event that is called when a player right clicks an entity that also contains the location where the entity was clicked. | `Player`, `Entity`, `Vector` (3) |
| `playerInteractEntity` | Represents an event that is called when a player right clicks an entity. | `Player`, `Entity` (2) |
| `playerItemBreak` | Fired when a player's item breaks (such as a shovel or flint and steel). | `Player`, `ItemStack` (2) |
| `playerItemConsume` | This event will fire when a player is finishing consuming an item (food, potion, milk bucket). | `Player`, `ItemStack`, `EquipmentSlot` (3) |
| `playerItemDamage` | Called when an item used by the player takes durability damage as a result of being used. | `Player`, `ItemStack`, `int` (3) |
| `playerItemHeld` | Fired when a player changes their currently held item | `Player`, `int`, `int` (3) |
| `playerItemMend` | Represents when a player has an item repaired via the Mending enchantment. | `Player`, `ItemStack`, `EquipmentSlot`, `ExperienceOrb`, `int` (5) |
| `playerJoin` | Called when a player joins a server | `Player`, `String` (2) |
| `playerKick` | Called when a player gets kicked from the server | `Player`, `String`, `String` (3) |
| `playerLevelChange` | Called when a players level changes | `Player`, `int`, `int` (3) |
| `playerLinksSend` | This event is called when the list of links is sent to the player. | `Player`, `ServerLinks` (2) |
| `playerLocaleChange` | Called when a player changes their locale in the client settings. | `Player`, `String` (2) |
| `playerLogin` | Stores details for players attempting to log in. | `Player`, `String`, `InetAddress`, `InetAddress` (4) |
| `playerMove` | Holds information for player movement events | `Player`, `Location`, `Location` (3) |
| `playerPickupArrow` | Thrown when a player picks up an arrow from the ground. | `Player`, `Item`, `AbstractArrow` (3) |
| `playerPickupItem` | Thrown when a player picks an item up from the ground | `Player`, `Item`, `int` (3) |
| `playerPortal` | Called when a player is about to teleport because it is in contact with a portal which will generate an exit portal. | `Player`, `Location`, `Location` (3) |
| `playerPreLogin` | Stores details for players attempting to log in | `String`, `InetAddress` (2) |
| `playerQuit` | Called when a player leaves a server | `Player`, `String` (2) |
| `playerRecipeBookClick` | Called when a player clicks a recipe in the recipe book. | `Player`, `Recipe`, `boolean` (3) |
| `playerRecipeBookSettingsChange` | Called when a player changes recipe book settings. | `Player`, `RecipeBookType`, `boolean`, `boolean` (4) |
| `playerRecipeDiscover` | Called when a player discovers a new recipe in the recipe book. | `Player`, `NamespacedKey` (2) |
| `playerRegisterChannel` | This is called immediately after a player registers for a plugin channel. | `Player`, `String` (2) |
| `playerResourcePackStatus` | Called when a player takes action on a resource pack request sent via Player#setResourcePack(java.lang.String). | `Player`, `UUID`, `Status` (3) |
| `playerRespawn` | Called when a player respawns. | `Player`, `Location`, `boolean` (3) |
| `playerRiptide` | This event is fired when the player activates the riptide enchantment, using their trident to propel them through the air. | `Player`, `ItemStack`, `Vector` (3) |
| `playerShearEntity` | Called when a player shears an entity | `Player`, `Entity`, `ItemStack`, `EquipmentSlot` (4) |
| `playerShowEntity` | Called when a hidden entity is shown to a player. | `Player`, `Entity` (2) |
| `playerSignOpen` | This event is fired when a sign is opened by the player. | `Player`, `Sign`, `Side`, `Cause` (4) |
| `playerSpawnChange` | This event is fired when the spawn point of the player is changed. | `Player`, `Location`, `boolean`, `Cause` (4) |
| `playerSpawnLocation` | Called when player is about to spawn in a world after joining the server. | `Player`, `Location` (2) |
| `playerStatisticIncrement` | Called when a player statistic is incremented. | `Player`, `Statistic`, `int`, `int` (4) |
| `playerSwapHandItems` | Called when a player swap items between main hand and off hand using the hotkey. | `Player`, `ItemStack`, `ItemStack` (3) |
| `playerTakeLecternBook` | This event is called when a player clicks the button to take a book of a Lectern. | `Player`, `Lectern` (2) |
| `playerTeleport` | Holds information for player teleport events | `Player`, `Location`, `Location` (3) |
| `playerToggleFlight` | Called when a player toggles their flying state | `Player`, `boolean` (2) |
| `playerToggleSneak` | Called when a player toggles their sneaking state | `Player`, `boolean` (2) |
| `playerToggleSprint` | Called when a player toggles their sprinting state | `Player`, `boolean` (2) |
| `playerUnleashEntity` | Called prior to an entity being unleashed due to a player's action. | `Entity`, `Player`, `EquipmentSlot` (3) |
| `playerUnregisterChannel` | This is called immediately after a player unregisters for a plugin channel. | `Player`, `String` (2) |
| `playerVelocity` | Called when the velocity of a player changes. | `Player`, `Vector` (2) |

### raid (4)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `raidFinish` | This event is called when a Raid was complete with a clear result. | `Raid`, `World`, `List<Player>` (3) |
| `raidSpawnWave` | Called when a raid wave spawns. | `Raid`, `World`, `Raider`, `List<Raider>` (4) |
| `raidStop` | Called when a Raid is stopped. | `Raid`, `World`, `Reason` (3) |
| `raidTrigger` | Called when a Raid is triggered (e.g: a player with Bad Omen effect enters a village). | `Raid`, `World`, `Player` (3) |

### server (11)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `broadcastMessage` | Event triggered for server broadcast messages such as from String). | `String`, `Set<CommandSender>` (2) |
| `mapInitialize` | Called when a map is initialized. | `MapView` (1) |
| `pluginDisable` | Called when a plugin is disabled. | `Plugin` (1) |
| `pluginEnable` | Called when a plugin is enabled. | `Plugin` (1) |
| `remoteServerCommand` | This event is called when a command is received over RCON. | `CommandSender`, `String` (2) |
| `serverCommand` | This event is called when a command is run by a non-player. | `CommandSender`, `String` (2) |
| `serverListPing` | Called when a server list ping is coming in. | `String`, `InetAddress`, `String`, `int`, `int` (5) |
| `serverLoad` | This event is called when either the server startup or reload has completed. | `LoadType` (1) |
| `serviceRegister` | This event is called when a service is registered. | `RegisteredServiceProvider<?>` (1) |
| `serviceUnregister` | This event is called when a service is unregistered. | `RegisteredServiceProvider<?>` (1) |
| `tabComplete` | Called when a CommandSender of any description (ie: player or console) attempts to tab complete. | `CommandSender`, `String`, `List<String>` (3) |

### vehicle (9)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `vehicleBlockCollision` | Raised when a vehicle collides with a block. | `Vehicle`, `Block` (2) |
| `vehicleCreate` | Raised when a vehicle is created. | `Vehicle` (1) |
| `vehicleDamage` | Raised when a vehicle receives damage. | `Vehicle`, `Entity`, `double` (3) |
| `vehicleDestroy` | Raised when a vehicle is destroyed, which could be caused by either a player or the environment. | `Vehicle`, `Entity` (2) |
| `vehicleEnter` | Raised when an entity enters a vehicle. | `Vehicle`, `Entity` (2) |
| `vehicleEntityCollision` | Raised when a vehicle collides with an entity. | `Vehicle`, `Entity` (2) |
| `vehicleExit` | Raised when a living entity exits a vehicle. | `Vehicle`, `LivingEntity` (2) |
| `vehicleMove` | Raised when a vehicle moves. | `Vehicle`, `Location`, `Location` (3) |
| `vehicleUpdate` | Called when a vehicle updates | `Vehicle` (1) |

### weather (3)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `lightningStrike` | Stores data for lightning striking | `World`, `LightningStrike` (2) |
| `thunderChange` | Stores data for thunder state changing in a world | `World`, `boolean` (2) |
| `weatherChange` | Stores data for weather changing in a world | `World`, `boolean` (2) |

### world (17)

| Event | Fired when | Parameters |
| --- | --- | --- |
| `asyncStructureGenerate` | This event will sometimes fire synchronously, depending on how it was triggered. | `World`, `boolean`, `Cause`, `Structure`, `BoundingBox`, `int`, `int` (7) |
| `asyncStructureSpawn` | Called when a Structure is naturally generated in the world. | `World`, `Structure`, `BoundingBox`, `int`, `int` (5) |
| `chunkLoad` | Called when a chunk is loaded | `Chunk`, `boolean` (2) |
| `chunkPopulate` | Thrown when a newly generated chunk has finished being populated. | `Chunk` (1) |
| `chunkUnload` | Called when a chunk is unloaded | `Chunk` (1) |
| `entitiesLoad` | Called when entities are loaded. | `Chunk`, `List<Entity>` (2) |
| `entitiesUnload` | Called when entities are unloaded. | `Chunk`, `List<Entity>` (2) |
| `genericGame` | Represents a generic Mojang game event. | `GameEvent`, `Location`, `Entity`, `int`, `boolean` (5) |
| `lootGenerate` | Called when a LootTable is generated in the world for an InventoryHolder. | `World`, `Entity`, `InventoryHolder`, `LootTable`, `LootContext`, `List<ItemStack>`, `boolean` (7) |
| `portalCreate` | Called when a portal is created | `List<BlockState>`, `World`, `CreateReason` (3) |
| `spawnChange` | An event that is called when a world's spawn changes. | `World`, `Location` (2) |
| `structureGrow` | Event that is called when an organic structure attempts to grow (Sapling {@literal ->} Tree), (Mushroom {@literal ->} Huge Mushroom), naturally or using bonemeal. | `Location`, `TreeType`, `boolean`, `Player`, `List<BlockState>` (5) |
| `timeSkip` | Called when the time skips in a world. | `World`, `SkipReason`, `long` (3) |
| `worldInit` | Called when a World is initializing. | `World` (1) |
| `worldLoad` | Called when a World is loaded | `World` (1) |
| `worldSave` | Called when a World is saved. | `World` (1) |
| `worldUnload` | Called when a World is unloaded | `World` (1) |

