<p align="center">
    <a href="EVENTS.md">English</a> | <b>简体中文</b>
</p>

# JsPig 事件

JsPig 通过 GraalVM 将 Bukkit 事件系统桥接到 JavaScript。每个具体的 Bukkit 事件都会被转发到你在 `registry` 模块中注册的 JavaScript 监听器，因此你可以完全用 JavaScript 编写 Minecraft 插件。

## 概述

- 事件通过 `registry.on(name, listener)` 注册，通过 `registry.off(name, listener)` 移除。
- 事件名为 Bukkit 事件类名去掉结尾的 `Event`，并将首字母小写（camelCase）。例如 `PlayerJoinEvent` 为 `playerJoin`，`TNTPrimeEvent` 为 `tNTPrime`。
- 监听器接收原始的 Bukkit 事件对象，因此你可以读取数据，并对可取消的事件执行取消。
- 类型声明会生成到 `global.d.ts`，因此 VS Code 等编辑器可以自动补全事件名和事件类型。

## 快速开始

在 `package.json` 中启用 `registry` 模块，并将 `main` 指向你的脚本：

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

然后在脚本中注册监听器：

```js
registry.on("playerJoin", (event) => {
  const player = event.getPlayer()
  player.sendMessage(`Welcome, ${player.getName()}!`)
})

registry.on("blockBreak", (event) => {
  // 只允许玩家破坏石头
  if (event.getBlock().getType().toString() !== "STONE") {
    event.setCancelled(true)
  }
})
```

## 事件名与类型

事件名遵循一条规则：

```
eventName = uncapitalize(去掉结尾 "Event" 的类名)
```

示例：

| Bukkit 事件类 | JsPig 事件名 |
| --- | --- |
| `org.bukkit.event.player.PlayerJoinEvent` | `playerJoin` |
| `org.bukkit.event.block.BlockBreakEvent` | `blockBreak` |
| `org.bukkit.event.entity.EntityDamageByEntityEvent` | `entityDamageByEntity` |
| `org.bukkit.event.block.TNTPrimeEvent` | `tNTPrime` |
| `org.bukkit.event.world.GenericGameEvent` | `genericGame` |

在服务端控制台运行命令 `JsPig declare` 可（重新）生成插件数据文件夹中的 `global.d.ts`。它包含每个事件的 `declare class`/`interface`，以及一个将每个事件名映射到其事件类的 `EventMapping` 接口。`registry` 对象通过该映射获得类型：

```ts
registry.on("playerJoin", (event) => {
  // event: org.bukkit.event.player.PlayerJoinEvent
  event.getPlayer()
})
```

## EventRegistry API

`registry` 对象暴露四个方法：

| 方法 | 说明 |
| --- | --- |
| `registry.on(type, listener)` | 为某事件类型注册监听器。 |
| `registry.addListener(type, listener)` | `on` 的别名。 |
| `registry.off(type, listener)` | 移除先前注册的监听器。 |
| `registry.removeListener(type, listener)` | `off` 的别名。 |

类型签名（来自生成的 `global.d.ts`）：

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

你可以为同一事件注册多个监听器；事件触发时它们都会运行。请保持监听器高效——它们在事件处理期间运行于服务端主线程。

## 取消事件

实现 `Cancellable` 的事件可以在监听器中取消：

```js
registry.on("entityDamage", (event) => {
  if (event.getEntity().getType().toString() === "ZOMBIE") {
    event.setCancelled(true)
  }
})
```

## 关于事件继承的说明

在 Spigot 26.1.2 中，许多事件子类共享其父类的处理器列表。因此，为父事件注册的监听器也会收到子类事件。例如，`entityDamage` 上的监听器也会因 `entityDamageByEntity` 和 `entityDamageByBlock` 触发。

若要只响应某个特定子类，请监听该子类名（例如 `entityDamageByEntity`）。若要在父监听器内区分，可检查运行时类型：

```js
registry.on("entityDamage", (event) => {
  if (event.getClass().getSimpleName() === "EntityDamageByEntityEvent") {
    // ...
  }
})
```

## 自定义命令事件

除 Bukkit 事件外，JsPig 还通过同一个 registry 传递自定义命令的调用。在 `package.json` 中定义为 `"command": "list"` 的命令会触发 `JsExtend.list`：

```js
registry.on("JsExtend.list", (sender, command, args) => {
  // sender: Player, command: Command, args: string[]
})
```

## 支持的事件

共支持 **264** 个事件：263 个 `org.bukkit.event.*` 事件，外加 `org.spigotmc.event.player.PlayerSpawnLocationEvent`（`playerSpawnLocation`）。

你的监听器始终只接收一个参数——事件对象。**参数** 列列出事件构造函数的参数（事件携带的数据），可通过事件的 getter 读取。括号内的数字是参数个数。

### block（45）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `bellResonate` | 当钟被敲响后产生回响并高亮附近袭击者时调用。 | `Block`, `List<LivingEntity>` (2) |
| `bellRing` | 当钟正被敲响时调用。 | `Block`, `BlockFace`, `Entity` (3) |
| `blockBreak` | 当方块被玩家破坏时调用。 | `Block`, `Player` (2) |
| `blockBrush` | 当方块被玩家刷扫（考古）时调用。 | `Block`, `BlockState`, `Player` (3) |
| `blockBurn` | 当方块因被火焰烧毁而消失时调用。 | `Block` (1) |
| `blockCanBuild` | 当尝试放置方块以判断此处能否建造时调用。 | `Block`, `BlockData`, `boolean` (3) |
| `blockCook` | 当物品在某方块中成功被烹饪时调用。 | `Block`, `ItemStack`, `ItemStack` (3) |
| `blockDamage` | 当方块被玩家损坏时调用。 | `Player`, `Block`, `ItemStack`, `boolean` (4) |
| `blockDamageAbort` | 当玩家停止损坏方块时调用。 | `Player`, `Block`, `ItemStack` (3) |
| `blockDispense` | 当物品从方块中被发射（投掷器）时调用。 | `Block`, `ItemStack`, `Vector` (3) |
| `blockDispenseArmor` | 当可装备物品从方块中发射并装备到附近实体上时调用。 | `Block`, `ItemStack`, `LivingEntity` (3) |
| `blockDispenseLoot` | 当方块从其指定的战利品表发射战利品时调用。 | `Player`, `Block`, `List<ItemStack>` (3) |
| `blockDropItem` | 当被玩家破坏的方块掉落物品时调用。 | `Block`, `BlockState`, `Player`, `List<Item>` (4) |
| `blockExp` | 当方块产出经验时调用。 | `Block`, `int` (2) |
| `blockExplode` | 当方块爆炸时调用。 | `Block`, `BlockState`, `List<Block>`, `float`, `ExplosionResult` (5) |
| `blockFade` | 当方块依据世界条件消退、融化或消失时调用（例如雪因靠近光源而融化）。 | `Block`, `BlockState` (2) |
| `blockFertilize` | 当玩家用骨粉催熟某方块并产生方块变化时调用。 | `Block`, `Player`, `List<BlockState>` (3) |
| `blockForm` | 当方块依据世界条件形成或蔓延时调用。 | `Block`, `BlockState` (2) |
| `blockFromTo` | 表示具有源方块与目标方块的事件，目前仅适用于液体（岩浆与水）以及传送的龙蛋。 | `Block`, `BlockFace` (2) |
| `blockGrow` | 当方块在世界中自然生长时调用。 | `Block`, `BlockState` (2) |
| `blockIgnite` | 当方块被点燃时调用。 | `Block`, `IgniteCause`, `Entity` (3) |
| `blockMultiPlace` | 当玩家的一次放置操作触发多个方块生成时触发（例如……）。 | `List<BlockState>`, `Block`, `ItemStack`, `Player`, `boolean` (5) |
| `blockPhysics` | 当调用方块物理检查时触发。 | `Block`, `BlockData` (2) |
| `blockPistonExtend` | 当活塞伸出时调用。 | `Block`, `int`, `BlockFace` (3) |
| `blockPistonRetract` | 当活塞收回时调用。 | `Block`, `List<Block>`, `BlockFace` (3) |
| `blockPlace` | 当方块被玩家放置时调用。 | `Block`, `BlockState`, `Block`, `ItemStack`, `Player`, `boolean` (6) |
| `blockReceiveGame` | 当幽匿感测体接收到游戏事件并因此可能激活时调用。 | `GameEvent`, `Block`, `Entity` (3) |
| `blockRedstone` | 当红石电流变化时调用。 | `Block`, `int`, `int` (3) |
| `blockShearEntity` | 当发射器剪附近羊的羊毛时触发。 | `Block`, `Entity`, `ItemStack` (3) |
| `blockSpread` | 当方块依据世界条件蔓延时调用。 | `Block`, `Block`, `BlockState` (3) |
| `brewingStart` | 当酿造台开始酿造时调用。 | `Block`, `ItemStack`, `int` (3) |
| `campfireStart` | 当营火开始烹饪时调用。 | `Block`, `ItemStack`, `CampfireRecipe` (3) |
| `cauldronLevelChange` | 当炼药锅的流体液位变化时调用。 | `Block`, `Entity`, `ChangeReason`, `BlockState` (4) |
| `crafterCraft` | 当合成器即将合成物品时调用。 | `Block`, `CraftingRecipe`, `ItemStack` (3) |
| `entityBlockForm` | 当方块由实体形成时调用。 | `Entity`, `Block`, `BlockState` (3) |
| `fluidLevelChange` | 当方块的流体液位因相邻方块变化而改变时调用。 | `Block`, `BlockData` (2) |
| `inventoryBlockStart` | 用于：熔炉开始熔炼（FurnaceStartSmeltEvent）、酿造台开始酿造（BrewingStartEvent）、营火开始烹饪（CampfireStartEvent）。 | `Block`, `ItemStack` (2) |
| `leavesDecay` | 当树叶自然腐烂时调用。 | `Block` (1) |
| `moistureChange` | 当土壤方块的湿润度变化时调用。 | `Block`, `BlockState` (2) |
| `notePlay` | 当音符盒因玩家交互或红石电流而发声时调用。 | `Block`, `Instrument`, `Note` (3) |
| `sculkBloom` | 当幽匿催发体生成新的光标时触发的事件。 | `Block`, `int` (2) |
| `signChange` | 当告示牌被玩家修改时调用。 | `Block`, `Player`, `String[]` (3) |
| `spongeAbsorb` | 当海绵吸收世界中的水时调用。 | `Block`, `List<BlockState>` (2) |
| `tNTPrime` | 当世界中的 TNT 方块被点燃（激活）时调用。 | `Block`, `PrimeCause`, `Entity`, `Block` (4) |
| `vaultDisplayItem` | 当试炼密室中的宝库即将展示物品时调用。 | `Block`, `ItemStack` (2) |

### enchantment（2）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `enchantItem` | 当物品成功被附魔时调用（目前在附魔台）。 | `Player`, `InventoryView`, `Block`, `ItemStack`, `int`, `Map<Enchantment, Integer>`, `Enchantment`, `int`, `int` (9) |
| `prepareItemEnchant` | 当物品被放入附魔台时调用——可能被多次调用。 | `Player`, `EnchantmentView`, `Block`, `ItemStack`, `EnchantmentOffer[]`, `int` (6) |

### entity（77）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `areaEffectCloudApply` | 当滞留药水施加其效果时调用。 | `AreaEffectCloud`, `List<LivingEntity>` (2) |
| `arrowBodyCountChange` | 当箭进入或存在于实体体内时调用。 | `LivingEntity`, `int`, `int`, `boolean` (4) |
| `batToggleSleep` | 当蝙蝠尝试入睡或从沉睡中醒来时调用。 | `Bat`, `boolean` (2) |
| `creatureSpawn` | 当生物被生成到世界中时调用。 | `LivingEntity`, `SpawnReason` (2) |
| `creeperPower` | 当苦力怕被闪电击中时调用。 | `Creeper`, `LightningStrike`, `PowerCause` (3) |
| `enderDragonChangePhase` | 当末影龙切换控制阶段时调用。 | `EnderDragon`, `EnderDragon.Phase`, `EnderDragon.Phase` (3) |
| `entityAirChange` | 当实体剩余氧气量变化时调用。 | `Entity`, `int` (2) |
| `entityBreakDoor` | 当实体破坏门时调用；取消该事件会使其被延迟。 | `LivingEntity`, `Block` (2) |
| `entityBreed` | 当一个实体与另一个实体繁殖时调用。 | `LivingEntity`, `LivingEntity`, `LivingEntity`, `LivingEntity`, `ItemStack`, `int` (6) |
| `entityChangeBlock` | 当任意实体改变方块且无更具体的事件时调用。 | `Entity`, `Block`, `BlockData` (3) |
| `entityCombust` | 当实体自燃时调用。 | `Entity`, `int` (2) |
| `entityCombustByBlock` | 当方块导致实体自燃时调用。 | `Block`, `Entity`, `int` (3) |
| `entityCombustByEntity` | 当实体导致另一实体自燃时调用。 | `Entity`, `Entity`, `int` (3) |
| `entityDamage` | 存储伤害事件的数据。 | `Entity`, `DamageCause`, `double` (3) |
| `entityDamageByBlock` | 当实体被方块伤害时调用。 | `Block`, `Entity`, `DamageCause`, `double` (4) |
| `entityDamageByEntity` | 当实体被实体伤害时调用。 | `Entity`, `Entity`, `DamageCause`, `double` (4) |
| `entityDeath` | 当生物死亡时触发。 | `LivingEntity`, `DamageSource`, `List<ItemStack>` (3) |
| `entityDismount` | 当实体停止骑乘另一实体时调用。 | `Entity`, `Entity` (2) |
| `entityDropItem` | 当实体产生物品掉落时触发。 | `Entity`, `Item` (2) |
| `entityEnterBlock` | 当实体进入某方块并被存入该方块时调用。 | `Entity`, `Block` (2) |
| `entityEnterLoveMode` | 当实体进入求偶模式时调用。 | `Animals`, `HumanEntity`, `int` (3) |
| `entityExhaustion` | 当人类实体感到力竭时调用。 | `HumanEntity`, `ExhaustionReason`, `float` (3) |
| `entityExplode` | 当实体爆炸时调用。 | `Entity`, `Location`, `List<Block>`, `float`, `ExplosionResult` (5) |
| `entityInteract` | 当实体与物体交互时调用。 | `Entity`, `Block` (2) |
| `entityKnockback` | 当生物受到击退时调用。 | `LivingEntity`, `KnockbackCause`, `double`, `Vector`, `Vector` (5) |
| `entityKnockbackByEntity` | 当实体受到来自另一实体的击退时调用。 | `LivingEntity`, `Entity`, `KnockbackCause`, `double`, `Vector`, `Vector` (6) |
| `entityMount` | 当实体尝试骑乘另一实体时调用。 | `Entity`, `Entity` (2) |
| `entityPickupItem` | 当实体从地面拾起物品时触发。 | `LivingEntity`, `Item`, `int` (3) |
| `entityPlace` | 当玩家通过将物品“放置”在方块上而在世界中生成实体时触发。 | `Entity`, `Player`, `Block`, `BlockFace`, `EquipmentSlot` (5) |
| `entityPortal` | 当非玩家实体因接触传送门而即将传送时调用。 | `Entity`, `Location`, `Location` (3) |
| `entityPortalEnter` | 当实体接触传送门时调用。 | `Entity`, `Location` (2) |
| `entityPortalExit` | 在实体离开传送门之前调用。 | `Entity`, `Location`, `Location`, `Vector`, `Vector` (5) |
| `entityPoseChange` | 当实体改变其姿势时调用。 | `Entity`, `Pose` (2) |
| `entityPotionEffect` | 当实体身上的药水效果被修改时调用。 | `LivingEntity`, `PotionEffect`, `PotionEffect`, `Cause`, `Action`, `boolean` (6) |
| `entityRegainHealth` | 存储生命恢复事件的数据。 | `Entity`, `double`, `RegainReason` (3) |
| `entityRemove` | 当实体被移除时调用。 | `Entity`, `Cause` (2) |
| `entityResurrect` | 当实体死亡并可能有机会复活时调用。 | `LivingEntity`, `EquipmentSlot` (2) |
| `entityShootBow` | 当生物射弓发射箭时调用。 | `LivingEntity`, `ItemStack`, `ItemStack`, `Entity`, `EquipmentSlot`, `float`, `boolean` (7) |
| `entitySpawn` | 当实体被生成到世界中时调用。 | `Entity` (1) |
| `entitySpellCast` | 当施法者施放法术时调用。 | `Spellcaster`, `Spellcaster.Spell` (2) |
| `entityTame` | 当生物被驯服时触发。 | `LivingEntity`, `AnimalTamer` (2) |
| `entityTarget` | 当生物选定或取消选定另一实体为目标时调用。 | `Entity`, `Entity`, `TargetReason` (3) |
| `entityTargetBlock` | 当生物选定或取消选定某方块为目标时调用，例如铜傀儡决定是否走向某个箱子。 | `Entity`, `Block` (2) |
| `entityTargetLivingEntity` | 当实体选定生物为目标且只能以生物为目标时调用。 | `Entity`, `LivingEntity`, `TargetReason` (3) |
| `entityTeleport` | 当非玩家实体从一个位置传送到另一个位置时触发。 | `Entity`, `Location`, `Location` (3) |
| `entityToggleGlide` | 当实体使用鞘翅切换滑翔状态时发送。 | `LivingEntity`, `boolean` (2) |
| `entityToggleSwim` | 当实体切换游泳状态时发送。 | `LivingEntity`, `boolean` (2) |
| `entityTransform` | 当实体即将被另一实体替换时调用。 | `Entity`, `List<Entity>`, `TransformReason` (3) |
| `entityUnleash` | 在实体被解开拴绳之前立即调用。 | `Entity`, `UnleashReason` (2) |
| `expBottle` | 当投掷的经验瓶命中并释放经验时调用。 | `ThrownExpBottle`, `int` (2) |
| `explosionPrime` | 当实体决定爆炸时调用。 | `Entity`, `float`, `boolean` (3) |
| `fireworkExplode` | 当烟花爆炸时调用。 | `Firework` (1) |
| `foodLevelChange` | 当人类实体的饥饿值变化时调用。 | `HumanEntity`, `int` (2) |
| `horseJump` | 当马跳跃时调用。 | `AbstractHorse`, `float` (2) |
| `itemDespawn` | 当掉落的物品因存在满 5 分钟而被移出世界时调用。 | `Item`, `Location` (2) |
| `itemMerge` | 当掉落的物品合并到另一物品时调用。 | `Item`, `Item` (2) |
| `itemSpawn` | 当物品被生成到世界中时调用。 | `Item`, `Location` (2) |
| `lingeringPotionSplash` | 当喷溅药水命中区域时调用。 | `ThrownPotion`, `AreaEffectCloud` (2) |
| `pigZap` | 存储猪被闪电劈中（变为僵尸猪灵）的数据。 | `Pig`, `LightningStrike`, `PigZombie` (3) |
| `pigZombieAnger` | 当僵尸猪灵被另一实体激怒时调用。 | `PigZombie`, `Entity`, `int` (3) |
| `piglinBarter` | 存储与猪灵以物易物交互相关的所有数据。 | `Piglin`, `ItemStack`, `List<ItemStack>` (3) |
| `playerDeath` | 当玩家死亡时触发。 | `Player`, `DamageSource`, `List<ItemStack>`, `int`, `String` (5) |
| `playerLeashEntity` | 在生物被玩家拴绳之前立即调用。 | `Entity`, `Entity`, `Player`, `EquipmentSlot` (4) |
| `potionSplash` | 当喷溅药水命中区域时调用。 | `ThrownPotion`, `Map<LivingEntity, Double>` (2) |
| `projectileHit` | 当投掷物命中物体时调用。 | `Projectile` (1) |
| `projectileLaunch` | 当投掷物被发射时调用。 | `Entity` (1) |
| `sheepDyeWool` | 当羊的羊毛被染色时调用。 | `Sheep`, `DyeColor` (2) |
| `sheepRegrowWool` | 当羊重新长出羊毛时调用。 | `Sheep` (1) |
| `slimeSplit` | 当史莱姆死亡时分裂成更小的史莱姆时调用。 | `Slime`, `int` (2) |
| `spawnerSpawn` | 当实体由刷怪笼生成到世界中时调用。 | `Entity`, `CreatureSpawner` (2) |
| `striderTemperatureChange` | 当炽足兽因进入或离开其认为温暖的方块而温度变化时调用。 | `Strider`, `boolean` (2) |
| `trialSpawnerSpawn` | 当实体由试炼刷怪笼生成到世界中时调用。 | `Entity`, `TrialSpawner` (2) |
| `villagerAcquireTrade` | 当村民获得新交易时调用。 | `AbstractVillager`, `MerchantRecipe` (2) |
| `villagerCareerChange` | 当村民改变职业时调用。 | `Villager`, `Profession`, `ChangeReason` (3) |
| `villagerReplenishTrade` | 当村民即将补充其某项交易时调用。 | `AbstractVillager`, `MerchantRecipe` (2) |
| `villagerReputationChange` | 当实体与某村民的声望变化时调用。 | `Villager`, `UUID`, `Villager.ReputationEvent`, `Villager.ReputationType`, `int`, `int`, `int` (7) |

### hanging（3）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `hangingBreak` | 当悬挂实体被移除时触发。 | `Hanging`, `HangingBreakEvent.RemoveCause` (2) |
| `hangingBreakByEntity` | 当悬挂实体被实体移除时触发。 | `Hanging`, `Entity` (2) |
| `hangingPlace` | 当悬挂实体在世界中生成时触发。 | `Hanging`, `Player`, `Block`, `BlockFace`, `EquipmentSlot` (5) |

### inventory（23）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `brew` | 当酿造台内内容物酿造完成时调用。 | `Block`, `BrewerInventory`, `List<ItemStack>`, `int` (4) |
| `brewingStandFuel` | 当物品即将提升酿造台的燃料等级时调用。 | `Block`, `ItemStack`, `int` (3) |
| `craftItem` | 当物品的配方在合成格内完成时调用。 | `Recipe`, `InventoryView`, `SlotType`, `int`, `ClickType`, `InventoryAction` (6) |
| `furnaceBurn` | 当物品在熔炉中作为燃料成功燃烧时调用。 | `Block`, `ItemStack`, `int` (3) |
| `furnaceExtract` | 当玩家从熔炉中取出物品时调用。 | `Player`, `Block`, `Material`, `int`, `int` (5) |
| `furnaceSmelt` | 当物品在熔炉中成功熔炼时调用。 | `Block`, `ItemStack`, `ItemStack` (3) |
| `furnaceStartSmelt` | 当熔炉开始熔炼时调用。 | `Block`, `ItemStack`, `CookingRecipe<?>` (3) |
| `hopperInventorySearch` | 每当漏斗尝试寻找其来源/相连容器时调用。 | `Inventory`, `ContainerType`, `Block`, `Block` (4) |
| `inventory` | 表示与玩家相关的物品栏事件。 | `InventoryView` (1) |
| `inventoryClick` | 当玩家在物品栏中点击时调用。 | `InventoryView`, `SlotType`, `int`, `ClickType`, `InventoryAction` (5) |
| `inventoryClose` | 表示与玩家相关的物品栏事件。 | `InventoryView` (1) |
| `inventoryCreative` | 当创造模式玩家在物品栏/快捷栏放下或拿起物品，或在创造模式下从物品栏丢出物品时调用。 | `InventoryView`, `SlotType`, `int`, `ItemStack` (4) |
| `inventoryDrag` | 当玩家用光标在物品栏上拖动物品时调用。 | `InventoryView`, `ItemStack`, `ItemStack`, `boolean`, `Map<Integer, ItemStack>` (5) |
| `inventoryMoveItem` | 当某实体或方块（例如……）移动物品时调用。 | `Inventory`, `ItemStack`, `Inventory`, `boolean` (4) |
| `inventoryOpen` | 表示与玩家相关的物品栏事件。 | `InventoryView` (1) |
| `inventoryPickupItem` | 当漏斗或漏斗矿车拾起掉落物时调用。 | `Inventory`, `Item` (2) |
| `prepareAnvil` | 当物品被放入槽位以便铁砧修复时调用。 | `AnvilView`, `ItemStack` (2) |
| `prepareGrindstone` | 当物品被放入槽位以便砂轮修复或祛魔时调用。 | `InventoryView`, `ItemStack` (2) |
| `prepareInventoryResult` | 当物品被放入槽位并计算出结果时调用。 | `InventoryView`, `ItemStack` (2) |
| `prepareItemCraft` | 当玩家正在准备合成配方产物时调用。 | `CraftingInventory`, `InventoryView`, `boolean` (3) |
| `prepareSmithing` | 当物品被放入槽位以便锻造台升级时调用。 | `InventoryView`, `ItemStack` (2) |
| `smithItem` | 当物品的配方在锻造台内完成时调用。 | `InventoryView`, `InventoryType.SlotType`, `int`, `ClickType`, `InventoryAction` (5) |
| `tradeSelect` | 当玩家在交易侧栏中点击新交易时调用。 | `MerchantView`, `int` (2) |

### player（71）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `asyncPlayerChat` | 该事件有时会同步触发，取决于其触发方式。 | `boolean`, `Player`, `String`, `Set<Player>` (4) |
| `asyncPlayerChatPreview` | 用于为聊天预览格式化聊天内容。 | `boolean`, `Player`, `String`, `Set<Player>` (4) |
| `asyncPlayerPreLogin` | 存储尝试登录的玩家详情。 | `String`, `InetAddress` (2) |
| `playerAdvancementDone` | 当玩家完成某进度的所有准则时调用。 | `Player`, `Advancement` (2) |
| `playerAnimation` | 表示玩家动画事件。 | `Player` (1) |
| `playerArmorStandManipulate` | 当玩家与盔甲架交互并交换、取回或放置物品时调用。 | `Player`, `ArmorStand`, `ItemStack`, `ItemStack`, `EquipmentSlot`, `EquipmentSlot` (6) |
| `playerBedEnter` | 当玩家即将进入床时触发。 | `Player`, `Block`, `BedEnterResult` (3) |
| `playerBedLeave` | 当玩家离开床时触发。 | `Player`, `Block`, `boolean` (3) |
| `playerBucketEmpty` | 当玩家倒空桶时调用。 | `Player`, `Block`, `BlockFace`, `Material`, `ItemStack` (5) |
| `playerBucketEntity` | 当玩家用桶捕获实体时调用。 | `Player`, `Entity`, `ItemStack`, `ItemStack`, `EquipmentSlot` (5) |
| `playerBucketFill` | 当玩家装满桶时调用。 | `Player`, `Block`, `BlockFace`, `Material`, `ItemStack` (5) |
| `playerBucketFish` | 当玩家尝试把鱼放入桶时调用。 | `Player`, `Fish`, `ItemStack`, `ItemStack`, `EquipmentSlot` (5) |
| `playerChangedMainHand` | 当玩家在客户端设置中更改主手时调用。 | `Player`, `MainHand` (2) |
| `playerChangedWorld` | 当玩家切换到另一个世界时调用。 | `Player`, `World` (2) |
| `playerChat` | 保存玩家聊天与命令的信息。 | `Player`, `String` (2) |
| `playerChatTabComplete` | 当玩家尝试对聊天消息进行 Tab 补全时调用。 | `Player`, `String`, `Collection<String>` (3) |
| `playerCommandPreprocess` | 当玩家执行命令（在消息开头加上斜杠）时调用。 | `Player`, `String` (2) |
| `playerCommandSend` | 当可用服务端命令列表被发送给玩家时调用。 | `Player`, `Collection<String>` (2) |
| `playerCustomClick` | 当玩家通过聊天事件或表单提交执行自定义操作后调用。 | `Player`, `NamespacedKey`, `JsonElement` (3) |
| `playerDropItem` | 当玩家从物品栏丢出物品时触发。 | `Player`, `Item` (2) |
| `playerEditBook` | 当玩家编辑或签署书与笔物品时调用。 | `Player`, `int`, `BookMeta`, `BookMeta`, `boolean` (5) |
| `playerEggThrow` | 当玩家投掷鸡蛋且其可能孵化时调用。 | `Player`, `Egg`, `boolean`, `byte`, `EntityType` (5) |
| `playerExpChange` | 当玩家经验自然变化时调用。 | `Player`, `int` (2) |
| `playerExpCooldownChange` | 当玩家的经验冷却变化时调用。 | `Player`, `int`, `ChangeReason` (3) |
| `playerFish` | 当玩家钓鱼时触发。 | `Player`, `Entity`, `FishHook`, `EquipmentSlot`, `State` (5) |
| `playerGameModeChange` | 当玩家的游戏模式改变时调用。 | `Player`, `GameMode` (2) |
| `playerHarvestBlock` | 当玩家收获方块时调用。 | `Player`, `Block`, `EquipmentSlot`, `List<ItemStack>` (4) |
| `playerHideEntity` | 当可见实体对玩家隐藏时调用。 | `Player`, `Entity` (2) |
| `playerInput` | 当玩家向服务端发送更新的输入时调用。 | `Player`, `Input` (2) |
| `playerInteract` | 当玩家与物体或空气交互时调用，可能每只手各触发一次。 | `Player`, `Action`, `ItemStack`, `Block`, `BlockFace` (5) |
| `playerInteractAtEntity` | 当玩家右键点击实体且事件包含点击位置时调用。 | `Player`, `Entity`, `Vector` (3) |
| `playerInteractEntity` | 当玩家右键点击实体时调用。 | `Player`, `Entity` (2) |
| `playerItemBreak` | 当玩家的物品损坏时触发（例如锹或打火石）。 | `Player`, `ItemStack` (2) |
| `playerItemConsume` | 当玩家完成消耗物品时触发（食物、药水、奶桶）。 | `Player`, `ItemStack`, `EquipmentSlot` (3) |
| `playerItemDamage` | 当玩家使用的物品因使用而损失耐久时调用。 | `Player`, `ItemStack`, `int` (3) |
| `playerItemHeld` | 当玩家更改当前手持物品时触发。 | `Player`, `int`, `int` (3) |
| `playerItemMend` | 表示玩家通过经验修补附魔修复物品时。 | `Player`, `ItemStack`, `EquipmentSlot`, `ExperienceOrb`, `int` (5) |
| `playerJoin` | 当玩家加入服务器时调用。 | `Player`, `String` (2) |
| `playerKick` | 当玩家被服务器踢出时调用。 | `Player`, `String`, `String` (3) |
| `playerLevelChange` | 当玩家等级变化时调用。 | `Player`, `int`, `int` (3) |
| `playerLinksSend` | 当链接列表被发送给玩家时调用。 | `Player`, `ServerLinks` (2) |
| `playerLocaleChange` | 当玩家在客户端设置中更改区域语言时调用。 | `Player`, `String` (2) |
| `playerLogin` | 存储尝试登录的玩家详情。 | `Player`, `String`, `InetAddress`, `InetAddress` (4) |
| `playerMove` | 保存玩家移动事件的信息。 | `Player`, `Location`, `Location` (3) |
| `playerPickupArrow` | 当玩家从地面拾起箭时触发。 | `Player`, `Item`, `AbstractArrow` (3) |
| `playerPickupItem` | 当玩家从地面拾起物品时触发。 | `Player`, `Item`, `int` (3) |
| `playerPortal` | 当玩家因接触将生成出口传送门的传送门而即将传送时调用。 | `Player`, `Location`, `Location` (3) |
| `playerPreLogin` | 存储尝试登录的玩家详情。 | `String`, `InetAddress` (2) |
| `playerQuit` | 当玩家离开服务器时调用。 | `Player`, `String` (2) |
| `playerRecipeBookClick` | 当玩家点击配方书中的配方时调用。 | `Player`, `Recipe`, `boolean` (3) |
| `playerRecipeBookSettingsChange` | 当玩家更改配方书设置时调用。 | `Player`, `RecipeBookType`, `boolean`, `boolean` (4) |
| `playerRecipeDiscover` | 当玩家在配方书中发现新配方时调用。 | `Player`, `NamespacedKey` (2) |
| `playerRegisterChannel` | 在玩家注册插件通道后立即调用。 | `Player`, `String` (2) |
| `playerResourcePackStatus` | 当玩家对通过 Player#setResourcePack(java.lang.String) 发送的资源包请求做出操作时调用。 | `Player`, `UUID`, `Status` (3) |
| `playerRespawn` | 当玩家重生时调用。 | `Player`, `Location`, `boolean` (3) |
| `playerRiptide` | 当玩家激活激流附魔、用三叉戟在空中推进时触发。 | `Player`, `ItemStack`, `Vector` (3) |
| `playerShearEntity` | 当玩家剪实体（如羊）时调用。 | `Player`, `Entity`, `ItemStack`, `EquipmentSlot` (4) |
| `playerShowEntity` | 当隐藏实体对玩家显示时调用。 | `Player`, `Entity` (2) |
| `playerSignOpen` | 当告示牌被玩家打开时触发。 | `Player`, `Sign`, `Side`, `Cause` (4) |
| `playerSpawnChange` | 当玩家的出生点改变时触发。 | `Player`, `Location`, `boolean`, `Cause` (4) |
| `playerSpawnLocation` | 当玩家加入服务器后即将在世界中出生时调用。 | `Player`, `Location` (2) |
| `playerStatisticIncrement` | 当玩家统计数值增加时调用。 | `Player`, `Statistic`, `int`, `int` (4) |
| `playerSwapHandItems` | 当玩家使用快捷键在主手与副手之间交换物品时调用。 | `Player`, `ItemStack`, `ItemStack` (3) |
| `playerTakeLecternBook` | 当玩家点击按钮取走讲台上的书时调用。 | `Player`, `Lectern` (2) |
| `playerTeleport` | 保存玩家传送事件的信息。 | `Player`, `Location`, `Location` (3) |
| `playerToggleFlight` | 当玩家切换飞行状态时调用。 | `Player`, `boolean` (2) |
| `playerToggleSneak` | 当玩家切换潜行状态时调用。 | `Player`, `boolean` (2) |
| `playerToggleSprint` | 当玩家切换疾跑状态时调用。 | `Player`, `boolean` (2) |
| `playerUnleashEntity` | 在实体因玩家操作而被解开拴绳之前调用。 | `Entity`, `Player`, `EquipmentSlot` (3) |
| `playerUnregisterChannel` | 在玩家注销插件通道后立即调用。 | `Player`, `String` (2) |
| `playerVelocity` | 当玩家的速度变化时调用。 | `Player`, `Vector` (2) |

### raid（4）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `raidFinish` | 当袭击以明确结果完成时调用。 | `Raid`, `World`, `List<Player>` (3) |
| `raidSpawnWave` | 当袭击波次生成时调用。 | `Raid`, `World`, `Raider`, `List<Raider>` (4) |
| `raidStop` | 当袭击被停止时调用。 | `Raid`, `World`, `Reason` (3) |
| `raidTrigger` | 当袭击被触发时调用（例如带有不祥之兆效果的玩家进入村庄）。 | `Raid`, `World`, `Player` (3) |

### server（11）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `broadcastMessage` | 用于服务端广播消息的事件（例如来自……）。 | `String`, `Set<CommandSender>` (2) |
| `mapInitialize` | 当地图被初始化时调用。 | `MapView` (1) |
| `pluginDisable` | 当插件被禁用时调用。 | `Plugin` (1) |
| `pluginEnable` | 当插件被启用时调用。 | `Plugin` (1) |
| `remoteServerCommand` | 当通过 RCON 接收到命令时调用。 | `CommandSender`, `String` (2) |
| `serverCommand` | 当非玩家执行命令时调用。 | `CommandSender`, `String` (2) |
| `serverListPing` | 当收到服务器列表 Ping 时调用。 | `String`, `InetAddress`, `String`, `int`, `int` (5) |
| `serverLoad` | 当服务端启动或重载完成时调用。 | `LoadType` (1) |
| `serviceRegister` | 当服务被注册时调用。 | `RegisteredServiceProvider<?>` (1) |
| `serviceUnregister` | 当服务被注销时调用。 | `RegisteredServiceProvider<?>` (1) |
| `tabComplete` | 当任意 CommandSender（如玩家或控制台）尝试 Tab 补全时调用。 | `CommandSender`, `String`, `List<String>` (3) |

### vehicle（9）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `vehicleBlockCollision` | 当载具与方块碰撞时触发。 | `Vehicle`, `Block` (2) |
| `vehicleCreate` | 当载具被创建时触发。 | `Vehicle` (1) |
| `vehicleDamage` | 当载具受到伤害时触发。 | `Vehicle`, `Entity`, `double` (3) |
| `vehicleDestroy` | 当载具被摧毁时触发，可能由玩家或环境造成。 | `Vehicle`, `Entity` (2) |
| `vehicleEnter` | 当实体进入载具时触发。 | `Vehicle`, `Entity` (2) |
| `vehicleEntityCollision` | 当载具与实体碰撞时触发。 | `Vehicle`, `Entity` (2) |
| `vehicleExit` | 当生物离开载具时触发。 | `Vehicle`, `LivingEntity` (2) |
| `vehicleMove` | 当载具移动时触发。 | `Vehicle`, `Location`, `Location` (3) |
| `vehicleUpdate` | 当载具更新时调用。 | `Vehicle` (1) |

### weather（3）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `lightningStrike` | 存储闪电劈击的数据。 | `World`, `LightningStrike` (2) |
| `thunderChange` | 存储世界中雷暴状态变化的数据。 | `World`, `boolean` (2) |
| `weatherChange` | 存储世界中天气变化的数据。 | `World`, `boolean` (2) |

### world（17）

| 事件 | 触发时机 | 参数 |
| --- | --- | --- |
| `asyncStructureGenerate` | 该事件有时会同步触发，取决于其触发方式。 | `World`, `boolean`, `Cause`, `Structure`, `BoundingBox`, `int`, `int` (7) |
| `asyncStructureSpawn` | 当结构在世界中自然生成时调用。 | `World`, `Structure`, `BoundingBox`, `int`, `int` (5) |
| `chunkLoad` | 当区块被加载时调用。 | `Chunk`, `boolean` (2) |
| `chunkPopulate` | 当新生成的区块完成填充时触发。 | `Chunk` (1) |
| `chunkUnload` | 当区块被卸载时调用。 | `Chunk` (1) |
| `entitiesLoad` | 当实体被加载时调用。 | `Chunk`, `List<Entity>` (2) |
| `entitiesUnload` | 当实体被卸载时调用。 | `Chunk`, `List<Entity>` (2) |
| `genericGame` | 表示一个通用的 Mojang 游戏事件。 | `GameEvent`, `Location`, `Entity`, `int`, `boolean` (5) |
| `lootGenerate` | 当为 InventoryHolder 在世界中生成战利品表时调用。 | `World`, `Entity`, `InventoryHolder`, `LootTable`, `LootContext`, `List<ItemStack>`, `boolean` (7) |
| `portalCreate` | 当传送门被创建时调用。 | `List<BlockState>`, `World`, `CreateReason` (3) |
| `spawnChange` | 当世界的出生点改变时调用。 | `World`, `Location` (2) |
| `structureGrow` | 当有机结构（树苗→树、蘑菇→巨型蘑菇）自然生长或使用骨粉催熟时调用。 | `Location`, `TreeType`, `boolean`, `Player`, `List<BlockState>` (5) |
| `timeSkip` | 当世界时间跳变时调用。 | `World`, `SkipReason`, `long` (3) |
| `worldInit` | 当世界正在初始化时调用。 | `World` (1) |
| `worldLoad` | 当世界被加载时调用。 | `World` (1) |
| `worldSave` | 当世界被保存时调用。 | `World` (1) |
| `worldUnload` | 当世界被卸载时调用。 | `World` (1) |
