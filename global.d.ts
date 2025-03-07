
declare class Color implements Paint, Serializable {
    readonly white: Color
    readonly WHITE: Color
    readonly lightGray: Color
    readonly LIGHT_GRAY: Color
    readonly gray: Color
    readonly GRAY: Color
    readonly darkGray: Color
    readonly DARK_GRAY: Color
    readonly black: Color
    readonly BLACK: Color
    readonly red: Color
    readonly RED: Color
    readonly pink: Color
    readonly PINK: Color
    readonly orange: Color
    readonly ORANGE: Color
    readonly yellow: Color
    readonly YELLOW: Color
    readonly green: Color
    readonly GREEN: Color
    readonly magenta: Color
    readonly MAGENTA: Color
    readonly cyan: Color
    readonly CYAN: Color
    readonly blue: Color
    readonly BLUE: Color
    readonly OPAQUE: number
    readonly BITMASK: number
    readonly TRANSLUCENT: number
    getColor(arg0: string, arg1: Color): Color
    getColor(arg0: string): Color
    getColor(arg0: string, arg1: number): Color
    createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: RenderingHints): PaintContext
    getGreen(): number
    getAlpha(): number
    getRed(): number
    getBlue(): number
    HSBtoRGB(arg0: number, arg1: number, arg2: number): number
    getRGBComponents(arg0: number[]): number[]
    getRGBColorComponents(arg0: number[]): number[]
    brighter(): Color
    darker(): Color
    RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[]
    getHSBColor(arg0: number, arg1: number, arg2: number): Color
    getComponents(arg0: number[]): number[]
    getComponents(arg0: ColorSpace, arg1: number[]): number[]
    getColorComponents(arg0: number[]): number[]
    getColorComponents(arg0: ColorSpace, arg1: number[]): number[]
    getColorSpace(): ColorSpace
    getTransparency(): number
    getRGB(): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    decode(arg0: string): Color
}

declare class PlayerStatisticIncrementEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getEntityType(): EntityType
    getMaterial(): Material
    getStatistic(): Statistic
    getPreviousValue(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
    getNewValue(): number
}

declare class MinecraftEvent {
    getEventName(): string
    isAsynchronous(): boolean
    getHandlers(): HandlerList
}

declare class EntitySpawnEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLocation(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class TNTPrimeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPrimingEntity(): Entity
    getPrimingBlock(): Block
    getCause(): TNTPrimeEventPrimeCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityTameEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getOwner(): AnimalTamer
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): LivingEntity
    getEntity(): Entity
}

declare class FurnaceBurnEvent extends BlockEvent implements Cancellable {
    setBurnTime(arg0: number): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBurnTime(): number
    isBurning(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
    getFuel(): ItemStack
    setBurning(arg0: boolean): void
}

declare class SampleModel {
    getHeight(): number
    getDataType(): number
    createCompatibleSampleModel(arg0: number, arg1: number): SampleModel
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[]
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[]
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): number[]
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: DataBuffer): void
    getNumBands(): number
    getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object, arg5: DataBuffer): Object
    getDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): Object
    setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object, arg5: DataBuffer): void
    setDataElements(arg0: number, arg1: number, arg2: Object, arg3: DataBuffer): void
    getSampleSize(): number[]
    getSampleSize(arg0: number): number
    createDataBuffer(): DataBuffer
    getNumDataElements(): number
    createSubsetSampleModel(arg0: number[]): SampleModel
    getTransferType(): number
    getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[]
    getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[]
    getPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): number[]
    getSample(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number
    getSampleFloat(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number
    getSampleDouble(arg0: number, arg1: number, arg2: number, arg3: DataBuffer): number
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[]
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[]
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): number[]
    setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void
    setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void
    setPixel(arg0: number, arg1: number, arg2: number[], arg3: DataBuffer): void
    setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void
    setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void
    setSample(arg0: number, arg1: number, arg2: number, arg3: number, arg4: DataBuffer): void
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: DataBuffer): void
    getWidth(): number
}

declare class ServerCommandEvent extends ServerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getCommand(): string
    getSender(): CommandSender
    setCommand(arg0: string): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class Vector extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, Serializable {
    remove(arg0: number): E
    remove(arg0: Object): boolean
    size(): number
    get(arg0: number): E
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    clone(): Object
    indexOf(arg0: Object, arg1: number): number
    indexOf(arg0: Object): number
    clear(): void
    lastIndexOf(arg0: Object, arg1: number): number
    lastIndexOf(arg0: Object): number
    isEmpty(): boolean
    replaceAll(arg0: UnaryOperator<E>): void
    add(arg0: E): boolean
    add(arg0: number, arg1: E): void
    subList(arg0: number, arg1: number): List<E>
    toArray(): Object[]
    toArray(arg0: T[]): T[]
    iterator(): Iterator<E>
    contains(arg0: Object): boolean
    elements(): Enumeration<E>
    spliterator(): Spliterator<E>
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: number, arg1: Collection<E>): boolean
    set(arg0: number, arg1: E): E
    forEach(arg0: Consumer<E>): void
    sort(arg0: Comparator<E>): void
    capacity(): number
    ensureCapacity(arg0: number): void
    trimToSize(): void
    elementAt(arg0: number): E
    removeIf(arg0: Predicate<E>): boolean
    removeAll(arg0: Collection<any>): boolean
    retainAll(arg0: Collection<any>): boolean
    listIterator(): ListIterator<E>
    listIterator(arg0: number): ListIterator<E>
    containsAll(arg0: Collection<any>): boolean
    copyInto(arg0: Object[]): void
    setSize(arg0: number): void
    removeElementAt(arg0: number): void
    removeElement(arg0: Object): boolean
    insertElementAt(arg0: E, arg1: number): void
    removeAllElements(): void
    firstElement(): E
    lastElement(): E
    setElementAt(arg0: E, arg1: number): void
    addElement(arg0: E): void
}

declare class Location implements Cloneable, ConfigurationSerializable {
    serialize(): Map<string, Object>
    lengthSquared(): number
    distanceSquared(arg0: Location): number
    getPitch(): number
    getYaw(): number
    setYaw(arg0: number): void
    setPitch(arg0: number): void
    getY(): number
    getZ(): number
    getX(): number
    getChunk(): Chunk
    getBlock(): Block
    setWorld(arg0: World): void
    setDirection(arg0: Vector): Location
    getWorld(): World
    getDirection(): Vector
    checkFinite(): void
    normalizePitch(arg0: number): number
    normalizeYaw(arg0: number): number
    setX(arg0: number): void
    setZ(arg0: number): void
    setY(arg0: number): void
    locToBlock(arg0: number): number
    toVector(): Vector
    isWorldLoaded(): boolean
    getBlockZ(): number
    getBlockX(): number
    getBlockY(): number
    equals(arg0: Object): boolean
    length(): number
    toString(): string
    hashCode(): number
    clone(): Location
    clone(): Object
    add(arg0: number, arg1: number, arg2: number): Location
    add(arg0: Vector): Location
    add(arg0: Location): Location
    zero(): Location
    distance(arg0: Location): number
    multiply(arg0: number): Location
    subtract(arg0: Location): Location
    subtract(arg0: Vector): Location
    subtract(arg0: number, arg1: number, arg2: number): Location
    deserialize(arg0: Map<string, Object>): Location
}

declare class CommandSenderSpigot {
    sendMessage(arg0: UUID, arg1: BaseComponent): void
    sendMessage(arg0: UUID, arg1: BaseComponent[]): void
    sendMessage(arg0: BaseComponent): void
    sendMessage(arg0: BaseComponent[]): void
}

declare class BarColor extends Enum<BarColor> {
    readonly PINK: BarColor
    readonly BLUE: BarColor
    readonly RED: BarColor
    readonly GREEN: BarColor
    readonly YELLOW: BarColor
    readonly PURPLE: BarColor
    readonly WHITE: BarColor
    values(): BarColor[]
    valueOf(arg0: string): BarColor
}

declare class Proxy {
    readonly NO_PROXY: Proxy
    type(): ProxyType
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    address(): SocketAddress
}

interface HelpTopicFactory {
    createTopic(arg0: TCommand): HelpTopic
}

declare class Vector3i implements Externalizable, Cloneable, Vector3ic {
    x: number
    y: number
    z: number
    setComponent(arg0: number, arg1: number): Vector3i
    getToAddress(arg0: number): Vector3ic
    lengthSquared(arg0: number, arg1: number, arg2: number): number
    lengthSquared(): number
    setFromAddress(arg0: number): Vector3i
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    distanceSquared(arg0: Vector3ic): number
    distanceSquared(arg0: number, arg1: number, arg2: number): number
    maxComponent(): number
    minComponent(): number
    gridDistance(arg0: Vector3ic): number
    gridDistance(arg0: number, arg1: number, arg2: number): number
    get(arg0: number): number
    get(arg0: IntBuffer): IntBuffer
    get(arg0: ByteBuffer): ByteBuffer
    get(arg0: number, arg1: ByteBuffer): ByteBuffer
    get(arg0: number, arg1: IntBuffer): IntBuffer
    equals(arg0: number, arg1: number, arg2: number): boolean
    equals(arg0: Object): boolean
    length(): number
    length(arg0: number, arg1: number, arg2: number): number
    toString(arg0: NumberFormat): string
    toString(): string
    hashCode(): number
    clone(): Object
    min(arg0: Vector3ic, arg1: Vector3i): Vector3i
    min(arg0: Vector3ic): Vector3i
    max(arg0: Vector3ic): Vector3i
    max(arg0: Vector3ic, arg1: Vector3i): Vector3i
    add(arg0: Vector3ic, arg1: Vector3i): Vector3i
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i
    add(arg0: Vector3ic): Vector3i
    add(arg0: number, arg1: number, arg2: number): Vector3i
    x(): number
    set(arg0: number): Vector3i
    set(arg0: number, arg1: number, arg2: number): Vector3i
    set(arg0: number[]): Vector3i
    set(arg0: number, arg1: ByteBuffer): Vector3i
    set(arg0: ByteBuffer): Vector3i
    set(arg0: Vector3dc): Vector3i
    set(arg0: Vector3ic): Vector3i
    set(arg0: Vector3dc, arg1: number): Vector3i
    set(arg0: Vector3fc, arg1: number): Vector3i
    set(arg0: Vector2ic, arg1: number): Vector3i
    set(arg0: IntBuffer): Vector3i
    set(arg0: number, arg1: IntBuffer): Vector3i
    z(): number
    zero(): Vector3i
    y(): number
    distance(arg0: number, arg1: number, arg2: number): number
    distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    distance(arg0: Vector3ic): number
    absolute(): Vector3i
    absolute(arg0: Vector3i): Vector3i
    sub(arg0: number, arg1: number, arg2: number): Vector3i
    sub(arg0: Vector3ic, arg1: Vector3i): Vector3i
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i
    sub(arg0: Vector3ic): Vector3i
    negate(arg0: Vector3i): Vector3i
    negate(): Vector3i
    writeExternal(arg0: ObjectOutput): void
    readExternal(arg0: ObjectInput): void
    div(arg0: number): Vector3i
    div(arg0: number): Vector3i
    div(arg0: number, arg1: Vector3i): Vector3i
    div(arg0: number, arg1: Vector3i): Vector3i
    mul(arg0: number): Vector3i
    mul(arg0: number, arg1: number, arg2: number): Vector3i
    mul(arg0: number, arg1: Vector3i): Vector3i
    mul(arg0: Vector3ic, arg1: Vector3i): Vector3i
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3i): Vector3i
    mul(arg0: Vector3ic): Vector3i
}

declare class Thread implements Runnable {
    readonly MIN_PRIORITY: number
    readonly NORM_PRIORITY: number
    readonly MAX_PRIORITY: number
    getName(): string
    getStackTrace(): StackTraceElement[]
    run(): void
    interrupt(): void
    toString(): string
    currentThread(): Thread
    onSpinWait(): void
    isVirtual(): boolean
    join(arg0: number): void
    join(arg0: number, arg1: number): void
    join(): void
    join(arg0: Duration): boolean
    setContextClassLoader(arg0: ClassLoader): void
    getThreadGroup(): ThreadGroup
    checkAccess(): void
    dumpStack(): void
    setPriority(arg0: number): void
    setDaemon(arg0: boolean): void
    start(): void
    getContextClassLoader(): ClassLoader
    getPriority(): number
    isDaemon(): boolean
    interrupted(): boolean
    activeCount(): number
    enumerate(arg0: Thread[]): number
    isAlive(): boolean
    threadId(): number
    setDefaultUncaughtExceptionHandler(arg0: ThreadUncaughtExceptionHandler): void
    getUncaughtExceptionHandler(): ThreadUncaughtExceptionHandler
    yield(): void
    sleep(arg0: number, arg1: number): void
    sleep(arg0: Duration): void
    sleep(arg0: number): void
    ofPlatform(): ThreadBuilderOfPlatform
    ofVirtual(): ThreadBuilderOfVirtual
    startVirtualThread(arg0: Runnable): Thread
    stop(): void
    isInterrupted(): boolean
    suspend(): void
    resume(): void
    setName(arg0: string): void
    countStackFrames(): number
    holdsLock(arg0: Object): boolean
    getAllStackTraces(): Map<Thread, StackTraceElement[]>
    getId(): number
    getState(): ThreadState
    getDefaultUncaughtExceptionHandler(): ThreadUncaughtExceptionHandler
    setUncaughtExceptionHandler(arg0: ThreadUncaughtExceptionHandler): void
}

declare class Vector3f implements Externalizable, Cloneable, Vector3fc {
    x: number
    y: number
    z: number
    mulTransposePosition(arg0: Matrix4fc, arg1: Vector3f): Vector3f
    mulTransposePosition(arg0: Matrix4fc): Vector3f
    mulTransposeDirection(arg0: Matrix4fc, arg1: Vector3f): Vector3f
    mulTransposeDirection(arg0: Matrix4fc): Vector3f
    angle(arg0: Vector3fc): number
    rotateZ(arg0: number): Vector3f
    rotateZ(arg0: number, arg1: Vector3f): Vector3f
    mulProject(arg0: Matrix4fc): Vector3f
    mulProject(arg0: Matrix4fc, arg1: number, arg2: Vector3f): Vector3f
    mulProject(arg0: Matrix4fc, arg1: Vector3f): Vector3f
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3f): Vector3f
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Vector3f
    cross(arg0: Vector3fc): Vector3f
    cross(arg0: Vector3fc, arg1: Vector3f): Vector3f
    cross(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    cross(arg0: number, arg1: number, arg2: number): Vector3f
    hermite(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3fc, arg3: number, arg4: Vector3f): Vector3f
    rotateY(arg0: number): Vector3f
    rotateY(arg0: number, arg1: Vector3f): Vector3f
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaternionf): Quaternionf
    rotationTo(arg0: Vector3fc, arg1: Quaternionf): Quaternionf
    angleCos(arg0: Vector3fc): number
    reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    reflect(arg0: Vector3fc, arg1: Vector3f): Vector3f
    reflect(arg0: number, arg1: number, arg2: number): Vector3f
    reflect(arg0: Vector3fc): Vector3f
    smoothStep(arg0: Vector3fc, arg1: number, arg2: Vector3f): Vector3f
    rotateX(arg0: number): Vector3f
    rotateX(arg0: number, arg1: Vector3f): Vector3f
    lerp(arg0: Vector3fc, arg1: number, arg2: Vector3f): Vector3f
    lerp(arg0: Vector3fc, arg1: number): Vector3f
    setComponent(arg0: number, arg1: number): Vector3f
    mulTranspose(arg0: Matrix3fc): Vector3f
    mulTranspose(arg0: Matrix3fc, arg1: Vector3f): Vector3f
    getToAddress(arg0: number): Vector3fc
    mulPosition(arg0: Matrix4fc): Vector3f
    mulPosition(arg0: Matrix4x3fc): Vector3f
    mulPosition(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f
    mulPosition(arg0: Matrix4fc, arg1: Vector3f): Vector3f
    mulDirection(arg0: Matrix4x3fc): Vector3f
    mulDirection(arg0: Matrix4dc, arg1: Vector3f): Vector3f
    mulDirection(arg0: Matrix4fc): Vector3f
    mulDirection(arg0: Matrix4fc, arg1: Vector3f): Vector3f
    mulDirection(arg0: Matrix4x3fc, arg1: Vector3f): Vector3f
    mulDirection(arg0: Matrix4dc): Vector3f
    mulPositionW(arg0: Matrix4fc): number
    mulPositionW(arg0: Matrix4fc, arg1: Vector3f): number
    lengthSquared(arg0: number, arg1: number, arg2: number): number
    lengthSquared(): number
    setFromAddress(arg0: number): Vector3f
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    distanceSquared(arg0: Vector3fc): number
    distanceSquared(arg0: number, arg1: number, arg2: number): number
    angleSigned(arg0: Vector3fc, arg1: Vector3fc): number
    angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    maxComponent(): number
    orthogonalizeUnit(arg0: Vector3fc, arg1: Vector3f): Vector3f
    orthogonalizeUnit(arg0: Vector3fc): Vector3f
    minComponent(): number
    orthogonalize(arg0: Vector3fc, arg1: Vector3f): Vector3f
    orthogonalize(arg0: Vector3fc): Vector3f
    get(arg0: FloatBuffer): FloatBuffer
    get(arg0: number, arg1: FloatBuffer): FloatBuffer
    get(arg0: ByteBuffer): ByteBuffer
    get(arg0: number, arg1: ByteBuffer): ByteBuffer
    get(arg0: number): number
    get(arg0: number, arg1: Vector3i): Vector3i
    get(arg0: Vector3d): Vector3d
    get(arg0: Vector3f): Vector3f
    equals(arg0: number, arg1: number, arg2: number): boolean
    equals(arg0: Vector3fc, arg1: number): boolean
    equals(arg0: Object): boolean
    length(): number
    length(arg0: number, arg1: number, arg2: number): number
    toString(): string
    toString(arg0: NumberFormat): string
    hashCode(): number
    clone(): Object
    min(arg0: Vector3fc, arg1: Vector3f): Vector3f
    min(arg0: Vector3fc): Vector3f
    max(arg0: Vector3fc, arg1: Vector3f): Vector3f
    max(arg0: Vector3fc): Vector3f
    floor(): Vector3f
    floor(arg0: Vector3f): Vector3f
    ceil(arg0: Vector3f): Vector3f
    ceil(): Vector3f
    round(arg0: Vector3f): Vector3f
    round(): Vector3f
    fma(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3f): Vector3f
    fma(arg0: number, arg1: Vector3fc): Vector3f
    fma(arg0: number, arg1: Vector3fc, arg2: Vector3f): Vector3f
    fma(arg0: Vector3fc, arg1: Vector3fc): Vector3f
    isFinite(): boolean
    add(arg0: Vector3fc): Vector3f
    add(arg0: Vector3fc, arg1: Vector3f): Vector3f
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    add(arg0: number, arg1: number, arg2: number): Vector3f
    x(): number
    dot(arg0: Vector3fc): number
    dot(arg0: number, arg1: number, arg2: number): number
    set(arg0: number): Vector3f
    set(arg0: number, arg1: number, arg2: number): Vector3f
    set(arg0: number): Vector3f
    set(arg0: number, arg1: number, arg2: number): Vector3f
    set(arg0: FloatBuffer): Vector3f
    set(arg0: Vector2ic, arg1: number): Vector3f
    set(arg0: number, arg1: FloatBuffer): Vector3f
    set(arg0: number, arg1: ByteBuffer): Vector3f
    set(arg0: ByteBuffer): Vector3f
    set(arg0: number[]): Vector3f
    set(arg0: Vector3fc): Vector3f
    set(arg0: Vector2fc, arg1: number): Vector3f
    set(arg0: Vector3ic): Vector3f
    set(arg0: Vector2dc, arg1: number): Vector3f
    set(arg0: Vector3dc): Vector3f
    z(): number
    zero(): Vector3f
    y(): number
    distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    distance(arg0: number, arg1: number, arg2: number): number
    distance(arg0: Vector3fc): number
    rotate(arg0: Quaternionfc, arg1: Vector3f): Vector3f
    rotate(arg0: Quaternionfc): Vector3f
    normalize(arg0: number): Vector3f
    normalize(arg0: Vector3f): Vector3f
    normalize(): Vector3f
    normalize(arg0: number, arg1: Vector3f): Vector3f
    absolute(arg0: Vector3f): Vector3f
    absolute(): Vector3f
    sub(arg0: Vector3fc): Vector3f
    sub(arg0: Vector3fc, arg1: Vector3f): Vector3f
    sub(arg0: number, arg1: number, arg2: number): Vector3f
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    negate(): Vector3f
    negate(arg0: Vector3f): Vector3f
    mulAdd(arg0: Vector3fc, arg1: Vector3fc): Vector3f
    mulAdd(arg0: number, arg1: Vector3fc, arg2: Vector3f): Vector3f
    mulAdd(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3f): Vector3f
    mulAdd(arg0: number, arg1: Vector3fc): Vector3f
    half(arg0: Vector3fc): Vector3f
    half(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    half(arg0: Vector3fc, arg1: Vector3f): Vector3f
    half(arg0: number, arg1: number, arg2: number): Vector3f
    writeExternal(arg0: ObjectOutput): void
    readExternal(arg0: ObjectInput): void
    div(arg0: number): Vector3f
    div(arg0: Vector3fc): Vector3f
    div(arg0: Vector3fc, arg1: Vector3f): Vector3f
    div(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    div(arg0: number, arg1: Vector3f): Vector3f
    div(arg0: number, arg1: number, arg2: number): Vector3f
    mul(arg0: number, arg1: Vector3f): Vector3f
    mul(arg0: number): Vector3f
    mul(arg0: Matrix3x2fc, arg1: Vector3f): Vector3f
    mul(arg0: number, arg1: number, arg2: number): Vector3f
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3f): Vector3f
    mul(arg0: Matrix3dc, arg1: Vector3f): Vector3f
    mul(arg0: Vector3fc, arg1: Vector3f): Vector3f
    mul(arg0: Matrix3fc): Vector3f
    mul(arg0: Matrix3fc, arg1: Vector3f): Vector3f
    mul(arg0: Matrix3dc): Vector3f
    mul(arg0: Vector3fc): Vector3f
    mul(arg0: Matrix3x2fc): Vector3f
}

declare class CauldronLevelChangeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewState(): BlockState
    getOldLevel(): number
    getNewLevel(): number
    setNewLevel(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getReason(): CauldronLevelChangeEventChangeReason
    getEntity(): Entity
}

declare class Vector3d implements Externalizable, Cloneable, Vector3dc {
    x: number
    y: number
    z: number
    mulTransposePosition(arg0: Matrix4dc): Vector3d
    mulTransposePosition(arg0: Matrix4dc, arg1: Vector3d): Vector3d
    mulTransposePosition(arg0: Matrix4fc): Vector3d
    mulTransposePosition(arg0: Matrix4fc, arg1: Vector3d): Vector3d
    mulTransposeDirection(arg0: Matrix4dc): Vector3d
    mulTransposeDirection(arg0: Matrix4fc, arg1: Vector3d): Vector3d
    mulTransposeDirection(arg0: Matrix4fc): Vector3d
    mulTransposeDirection(arg0: Matrix4dc, arg1: Vector3d): Vector3d
    angle(arg0: Vector3dc): number
    rotateZ(arg0: number, arg1: Vector3d): Vector3d
    rotateZ(arg0: number): Vector3d
    mulProject(arg0: Matrix4dc): Vector3d
    mulProject(arg0: Matrix4fc, arg1: Vector3d): Vector3d
    mulProject(arg0: Matrix4fc): Vector3d
    mulProject(arg0: Matrix4dc, arg1: number, arg2: Vector3d): Vector3d
    mulProject(arg0: Matrix4dc, arg1: Vector3d): Vector3d
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Vector3d): Vector3d
    rotateAxis(arg0: number, arg1: number, arg2: number, arg3: number): Vector3d
    cross(arg0: Vector3dc, arg1: Vector3d): Vector3d
    cross(arg0: number, arg1: number, arg2: number): Vector3d
    cross(arg0: Vector3dc): Vector3d
    cross(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    hermite(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3dc, arg3: number, arg4: Vector3d): Vector3d
    rotateY(arg0: number, arg1: Vector3d): Vector3d
    rotateY(arg0: number): Vector3d
    rotationTo(arg0: Vector3dc, arg1: Quaterniond): Quaterniond
    rotationTo(arg0: number, arg1: number, arg2: number, arg3: Quaterniond): Quaterniond
    angleCos(arg0: Vector3dc): number
    reflect(arg0: Vector3dc): Vector3d
    reflect(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    reflect(arg0: Vector3dc, arg1: Vector3d): Vector3d
    reflect(arg0: number, arg1: number, arg2: number): Vector3d
    smoothStep(arg0: Vector3dc, arg1: number, arg2: Vector3d): Vector3d
    rotateX(arg0: number): Vector3d
    rotateX(arg0: number, arg1: Vector3d): Vector3d
    lerp(arg0: Vector3dc, arg1: number): Vector3d
    lerp(arg0: Vector3dc, arg1: number, arg2: Vector3d): Vector3d
    setComponent(arg0: number, arg1: number): Vector3d
    mulTranspose(arg0: Matrix3dc): Vector3d
    mulTranspose(arg0: Matrix3dc, arg1: Vector3d): Vector3d
    mulTranspose(arg0: Matrix3fc): Vector3d
    mulTranspose(arg0: Matrix3fc, arg1: Vector3d): Vector3d
    getToAddress(arg0: number): Vector3dc
    mulPosition(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d
    mulPosition(arg0: Matrix4x3fc): Vector3d
    mulPosition(arg0: Matrix4x3dc): Vector3d
    mulPosition(arg0: Matrix4dc): Vector3d
    mulPosition(arg0: Matrix4fc): Vector3d
    mulPosition(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d
    mulPosition(arg0: Matrix4fc, arg1: Vector3d): Vector3d
    mulPosition(arg0: Matrix4dc, arg1: Vector3d): Vector3d
    mulDirection(arg0: Matrix4x3dc): Vector3d
    mulDirection(arg0: Matrix4dc): Vector3d
    mulDirection(arg0: Matrix4fc): Vector3d
    mulDirection(arg0: Matrix4fc, arg1: Vector3d): Vector3d
    mulDirection(arg0: Matrix4x3dc, arg1: Vector3d): Vector3d
    mulDirection(arg0: Matrix4x3fc, arg1: Vector3d): Vector3d
    mulDirection(arg0: Matrix4dc, arg1: Vector3d): Vector3d
    mulDirection(arg0: Matrix4x3fc): Vector3d
    mulPositionW(arg0: Matrix4dc): number
    mulPositionW(arg0: Matrix4dc, arg1: Vector3d): number
    mulPositionW(arg0: Matrix4fc, arg1: Vector3d): number
    mulPositionW(arg0: Matrix4fc): number
    lengthSquared(arg0: number, arg1: number, arg2: number): number
    lengthSquared(): number
    setFromAddress(arg0: number): Vector3d
    distanceSquared(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    distanceSquared(arg0: number, arg1: number, arg2: number): number
    distanceSquared(arg0: Vector3dc): number
    angleSigned(arg0: Vector3dc, arg1: Vector3dc): number
    angleSigned(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    maxComponent(): number
    orthogonalizeUnit(arg0: Vector3dc): Vector3d
    orthogonalizeUnit(arg0: Vector3dc, arg1: Vector3d): Vector3d
    minComponent(): number
    orthogonalize(arg0: Vector3dc): Vector3d
    orthogonalize(arg0: Vector3dc, arg1: Vector3d): Vector3d
    getf(arg0: ByteBuffer): ByteBuffer
    getf(arg0: number, arg1: ByteBuffer): ByteBuffer
    get(arg0: number): number
    get(arg0: number, arg1: Vector3i): Vector3i
    get(arg0: number, arg1: FloatBuffer): FloatBuffer
    get(arg0: number, arg1: DoubleBuffer): DoubleBuffer
    get(arg0: DoubleBuffer): DoubleBuffer
    get(arg0: number, arg1: ByteBuffer): ByteBuffer
    get(arg0: ByteBuffer): ByteBuffer
    get(arg0: Vector3f): Vector3f
    get(arg0: Vector3d): Vector3d
    get(arg0: FloatBuffer): FloatBuffer
    equals(arg0: number, arg1: number, arg2: number): boolean
    equals(arg0: Object): boolean
    equals(arg0: Vector3dc, arg1: number): boolean
    length(): number
    length(arg0: number, arg1: number, arg2: number): number
    toString(): string
    toString(arg0: NumberFormat): string
    hashCode(): number
    clone(): Object
    min(arg0: Vector3dc, arg1: Vector3d): Vector3d
    min(arg0: Vector3dc): Vector3d
    max(arg0: Vector3dc): Vector3d
    max(arg0: Vector3dc, arg1: Vector3d): Vector3d
    floor(arg0: Vector3d): Vector3d
    floor(): Vector3d
    ceil(arg0: Vector3d): Vector3d
    ceil(): Vector3d
    round(arg0: Vector3d): Vector3d
    round(): Vector3d
    fma(arg0: Vector3fc, arg1: Vector3fc): Vector3d
    fma(arg0: Vector3dc, arg1: Vector3fc, arg2: Vector3d): Vector3d
    fma(arg0: number, arg1: Vector3fc, arg2: Vector3d): Vector3d
    fma(arg0: number, arg1: Vector3fc): Vector3d
    fma(arg0: Vector3fc, arg1: Vector3fc, arg2: Vector3d): Vector3d
    fma(arg0: number, arg1: Vector3dc): Vector3d
    fma(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3d): Vector3d
    fma(arg0: number, arg1: Vector3dc, arg2: Vector3d): Vector3d
    fma(arg0: Vector3dc, arg1: Vector3dc): Vector3d
    isFinite(): boolean
    add(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    add(arg0: number, arg1: number, arg2: number): Vector3d
    add(arg0: Vector3dc): Vector3d
    add(arg0: Vector3dc, arg1: Vector3d): Vector3d
    add(arg0: Vector3fc): Vector3d
    add(arg0: Vector3fc, arg1: Vector3d): Vector3d
    x(): number
    dot(arg0: Vector3dc): number
    dot(arg0: number, arg1: number, arg2: number): number
    set(arg0: number): Vector3d
    set(arg0: number, arg1: number, arg2: number): Vector3d
    set(arg0: Vector2ic, arg1: number): Vector3d
    set(arg0: Vector3fc): Vector3d
    set(arg0: Vector3dc): Vector3d
    set(arg0: Vector2dc, arg1: number): Vector3d
    set(arg0: Vector3ic): Vector3d
    set(arg0: Vector2fc, arg1: number): Vector3d
    set(arg0: number, arg1: ByteBuffer): Vector3d
    set(arg0: DoubleBuffer): Vector3d
    set(arg0: number[]): Vector3d
    set(arg0: ByteBuffer): Vector3d
    set(arg0: number, arg1: DoubleBuffer): Vector3d
    set(arg0: number[]): Vector3d
    z(): number
    zero(): Vector3d
    y(): number
    distance(arg0: number, arg1: number, arg2: number): number
    distance(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    distance(arg0: Vector3dc): number
    rotate(arg0: Quaterniondc): Vector3d
    rotate(arg0: Quaterniondc, arg1: Vector3d): Vector3d
    normalize(): Vector3d
    normalize(arg0: Vector3d): Vector3d
    normalize(arg0: number): Vector3d
    normalize(arg0: number, arg1: Vector3d): Vector3d
    absolute(): Vector3d
    absolute(arg0: Vector3d): Vector3d
    sub(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    sub(arg0: number, arg1: number, arg2: number): Vector3d
    sub(arg0: Vector3dc, arg1: Vector3d): Vector3d
    sub(arg0: Vector3fc): Vector3d
    sub(arg0: Vector3fc, arg1: Vector3d): Vector3d
    sub(arg0: Vector3dc): Vector3d
    negate(arg0: Vector3d): Vector3d
    negate(): Vector3d
    mulAdd(arg0: Vector3fc, arg1: Vector3dc, arg2: Vector3d): Vector3d
    mulAdd(arg0: number, arg1: Vector3dc, arg2: Vector3d): Vector3d
    mulAdd(arg0: number, arg1: Vector3dc): Vector3d
    mulAdd(arg0: Vector3dc, arg1: Vector3dc, arg2: Vector3d): Vector3d
    mulAdd(arg0: Vector3dc, arg1: Vector3dc): Vector3d
    half(arg0: Vector3dc, arg1: Vector3d): Vector3d
    half(arg0: Vector3dc): Vector3d
    half(arg0: number, arg1: number, arg2: number): Vector3d
    half(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    writeExternal(arg0: ObjectOutput): void
    readExternal(arg0: ObjectInput): void
    div(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    div(arg0: number, arg1: number, arg2: number): Vector3d
    div(arg0: number, arg1: Vector3d): Vector3d
    div(arg0: Vector3fc, arg1: Vector3d): Vector3d
    div(arg0: Vector3d): Vector3d
    div(arg0: Vector3fc): Vector3d
    div(arg0: Vector3dc, arg1: Vector3d): Vector3d
    div(arg0: number): Vector3d
    mul(arg0: Matrix3fc): Vector3d
    mul(arg0: number): Vector3d
    mul(arg0: Matrix3x2fc): Vector3d
    mul(arg0: Matrix3x2dc, arg1: Vector3d): Vector3d
    mul(arg0: Matrix3dc): Vector3d
    mul(arg0: Matrix3dc, arg1: Vector3d): Vector3d
    mul(arg0: Matrix3dc, arg1: Vector3f): Vector3f
    mul(arg0: Matrix3fc, arg1: Vector3d): Vector3d
    mul(arg0: Matrix3x2dc): Vector3d
    mul(arg0: Vector3dc): Vector3d
    mul(arg0: number, arg1: number, arg2: number, arg3: Vector3d): Vector3d
    mul(arg0: number, arg1: number, arg2: number): Vector3d
    mul(arg0: number, arg1: Vector3d): Vector3d
    mul(arg0: Matrix3x2fc, arg1: Vector3d): Vector3d
    mul(arg0: Vector3dc, arg1: Vector3d): Vector3d
    mul(arg0: Vector3fc, arg1: Vector3d): Vector3d
    mul(arg0: Vector3fc): Vector3d
}

interface Path implements Comparable<Path>, Iterable<Path>, Watchable {
    getName(arg0: number): Path
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: Path): number
    compareTo(arg0: Object): number
    startsWith(arg0: string): boolean
    startsWith(arg0: Path): boolean
    iterator(): Iterator<Path>
    of(arg0: string, arg1: string[]): Path
    of(arg0: URI): Path
    endsWith(arg0: Path): boolean
    endsWith(arg0: string): boolean
    register(arg0: WatchService, arg1: WatchEventKind[]): WatchKey
    register(arg0: WatchService, arg1: WatchEventKind[], arg2: WatchEventModifier[]): WatchKey
    isAbsolute(): boolean
    resolve(arg0: string): Path
    resolve(arg0: Path): Path
    getParent(): Path
    getRoot(): Path
    toRealPath(arg0: LinkOption[]): Path
    toFile(): File
    getFileName(): Path
    normalize(): Path
    getFileSystem(): FileSystem
    relativize(arg0: Path): Path
    resolveSibling(arg0: Path): Path
    resolveSibling(arg0: string): Path
    getNameCount(): number
    subpath(arg0: number, arg1: number): Path
    toUri(): URI
    toAbsolutePath(): Path
}

declare class EntityRegainHealthEventRegainReason extends Enum<EntityRegainHealthEventRegainReason> {
    readonly REGEN: EntityRegainHealthEventRegainReason
    readonly SATIATED: EntityRegainHealthEventRegainReason
    readonly EATING: EntityRegainHealthEventRegainReason
    readonly ENDER_CRYSTAL: EntityRegainHealthEventRegainReason
    readonly MAGIC: EntityRegainHealthEventRegainReason
    readonly MAGIC_REGEN: EntityRegainHealthEventRegainReason
    readonly WITHER_SPAWN: EntityRegainHealthEventRegainReason
    readonly WITHER: EntityRegainHealthEventRegainReason
    readonly CUSTOM: EntityRegainHealthEventRegainReason
    values(): EntityRegainHealthEventRegainReason[]
    valueOf(arg0: string): EntityRegainHealthEventRegainReason
}

interface Sign implements TileState, Colorable {
    getColor(): DyeColor
    getLines(): string[]
    getLine(arg0: number): string
    setEditable(arg0: boolean): void
    isGlowingText(): boolean
    setGlowingText(arg0: boolean): void
    setWaxed(arg0: boolean): void
    isWaxed(): boolean
    isEditable(): boolean
    setColor(arg0: DyeColor): void
    getSide(arg0: Side): SignSide
    setLine(arg0: number, arg1: string): void
}

declare class HoverEvent {
    isLegacy(): boolean
    getAction(): HoverEventAction
    addContent(arg0: Content): void
    setLegacy(arg0: boolean): void
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getClass(arg0: HoverEventAction, arg1: boolean): Class<any>
    getValue(): BaseComponent[]
    getContents(): List<Content>
}

declare class LightningStrikeEvent extends WeatherEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLightning(): LightningStrike
    getCause(): LightningStrikeEventCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface CharSequence {
    length(): number
    toString(): string
    compare(arg0: CharSequence, arg1: CharSequence): number
    charAt(arg0: number): char
    isEmpty(): boolean
    codePoints(): IntStream
    subSequence(arg0: number, arg1: number): CharSequence
    chars(): IntStream
}

interface TemporalField {
    toString(): string
    resolve(arg0: Map<TemporalField, Long>, arg1: TemporalAccessor, arg2: ResolverStyle): TemporalAccessor
    range(): ValueRange
    getDisplayName(arg0: Locale): string
    isSupportedBy(arg0: TemporalAccessor): boolean
    isTimeBased(): boolean
    getFrom(arg0: TemporalAccessor): number
    adjustInto(arg0: R, arg1: number): R
    rangeRefinedBy(arg0: TemporalAccessor): ValueRange
    isDateBased(): boolean
    getBaseUnit(): TemporalUnit
    getRangeUnit(): TemporalUnit
}

declare class EntityEvent extends MinecraftEvent {
    getEntityType(): EntityType
    getEntity(): Entity
}

declare class PlayerBucketEntityEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getEntityBucket(): ItemStack
    getOriginalBucket(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
}

declare class ErrorManager {
    readonly GENERIC_FAILURE: number
    readonly WRITE_FAILURE: number
    readonly FLUSH_FAILURE: number
    readonly CLOSE_FAILURE: number
    readonly OPEN_FAILURE: number
    readonly FORMAT_FAILURE: number
    error(arg0: string, arg1: Exception, arg2: number): void
}

interface Advancement implements Keyed {
    getCriteria(): Collection<string>
    getDisplay(): AdvancementDisplay
}

declare class EntityResurrectEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): LivingEntity
}

declare class AsyncStructureSpawnEvent extends WorldEvent implements Cancellable {
    getBoundingBox(): BoundingBox
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getStructure(): Structure
    getChunkX(): number
    getChunkZ(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class InventoryOpenEvent extends InventoryEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPlayer(): HumanEntity
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerItemMendEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRepairAmount(): number
    getExperienceOrb(): ExperienceOrb
    setRepairAmount(arg0: number): void
    getSlot(): EquipmentSlot
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerChatTabCompleteEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getLastToken(): string
    getTabCompletions(): Collection<string>
    getChatMessage(): string
    getHandlers(): HandlerList
}

interface ToDoubleFunction {
    applyAsDouble(arg0: T): number
}

declare class PlayerQuitEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    setQuitMessage(arg0: string): void
    getQuitMessage(): string
    getHandlers(): HandlerList
}

interface Lectern implements TileState, BlockInventoryHolder {
    getInventory(): Inventory
    setPage(arg0: number): void
    getPage(): number
    getSnapshotInventory(): Inventory
}

declare class RenderType extends Enum<RenderType> {
    readonly INTEGER: RenderType
    readonly HEARTS: RenderType
    values(): RenderType[]
    valueOf(arg0: string): RenderType
}

declare class BlockGrowEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewState(): BlockState
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ExplosionPrimeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRadius(): number
    getFire(): boolean
    setRadius(arg0: number): void
    setFire(arg0: boolean): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class BoundingBox implements Cloneable, ConfigurationSerializable {
    serialize(): Map<string, Object>
    intersection(arg0: BoundingBox): BoundingBox
    getHeight(): number
    rayTrace(arg0: Vector, arg1: Vector, arg2: number): RayTraceResult
    getCenterX(): number
    getCenterZ(): number
    getCenter(): Vector
    getVolume(): number
    getMaxX(): number
    getWidthX(): number
    getMaxY(): number
    getMaxZ(): number
    getCenterY(): number
    getMinZ(): number
    getWidthZ(): number
    expandDirectional(arg0: Vector): BoundingBox
    expandDirectional(arg0: number, arg1: number, arg2: number): BoundingBox
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    clone(): BoundingBox
    clone(): Object
    expand(arg0: number): BoundingBox
    expand(arg0: number, arg1: number, arg2: number, arg3: number): BoundingBox
    expand(arg0: Vector): BoundingBox
    expand(arg0: Vector, arg1: number): BoundingBox
    expand(arg0: BlockFace, arg1: number): BoundingBox
    expand(arg0: number, arg1: number, arg2: number): BoundingBox
    expand(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox
    of(arg0: Location, arg1: number, arg2: number, arg3: number): BoundingBox
    of(arg0: Vector, arg1: number, arg2: number, arg3: number): BoundingBox
    of(arg0: Vector, arg1: Vector): BoundingBox
    of(arg0: Block): BoundingBox
    of(arg0: Block, arg1: Block): BoundingBox
    of(arg0: Location, arg1: Location): BoundingBox
    contains(arg0: Vector, arg1: Vector): boolean
    contains(arg0: number, arg1: number, arg2: number): boolean
    contains(arg0: BoundingBox): boolean
    contains(arg0: Vector): boolean
    copy(arg0: BoundingBox): BoundingBox
    shift(arg0: Vector): BoundingBox
    shift(arg0: number, arg1: number, arg2: number): BoundingBox
    shift(arg0: Location): BoundingBox
    resize(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): BoundingBox
    union(arg0: number, arg1: number, arg2: number): BoundingBox
    union(arg0: Location): BoundingBox
    union(arg0: BoundingBox): BoundingBox
    union(arg0: Vector): BoundingBox
    getMin(): Vector
    getMax(): Vector
    deserialize(arg0: Map<string, Object>): BoundingBox
    getMinX(): number
    getMinY(): number
    overlaps(arg0: BoundingBox): boolean
    overlaps(arg0: Vector, arg1: Vector): boolean
}

declare class PortalCreateEvent extends WorldEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBlocks(): List<BlockState>
    isCancelled(): boolean
    getHandlers(): HandlerList
    getReason(): PortalCreateEventCreateReason
    getEntity(): Entity
}

declare class LocalDateTime implements Temporal, TemporalAdjuster, ChronoLocalDateTime<LocalDate>, Serializable {
    readonly MIN: LocalDateTime
    readonly MAX: LocalDateTime
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: ChronoLocalDateTime<any>): number
    compareTo(arg0: Object): number
    getLong(arg0: TemporalField): number
    format(arg0: DateTimeFormatter): string
    of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): LocalDateTime
    of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): LocalDateTime
    of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime
    of(arg0: number, arg1: Month, arg2: number, arg3: number, arg4: number): LocalDateTime
    of(arg0: LocalDate, arg1: LocalTime): LocalDateTime
    of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): LocalDateTime
    of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): LocalDateTime
    from(arg0: TemporalAccessor): LocalDateTime
    isSupported(arg0: TemporalUnit): boolean
    isSupported(arg0: TemporalField): boolean
    parse(arg0: CharSequence): LocalDateTime
    parse(arg0: CharSequence, arg1: DateTimeFormatter): LocalDateTime
    with(arg0: TemporalField, arg1: number): LocalDateTime
    with(arg0: TemporalAdjuster): ChronoLocalDateTime
    with(arg0: TemporalAdjuster): LocalDateTime
    with(arg0: TemporalField, arg1: number): ChronoLocalDateTime
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): Temporal
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
    isEqual(arg0: ChronoLocalDateTime<any>): boolean
    now(): LocalDateTime
    now(arg0: Clock): LocalDateTime
    now(arg0: ZoneId): LocalDateTime
    getNano(): number
    ofEpochSecond(arg0: number, arg1: number, arg2: ZoneOffset): LocalDateTime
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(arg0: number, arg1: TemporalUnit): LocalDateTime
    minus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime
    minus(arg0: TemporalAmount): LocalDateTime
    minus(arg0: TemporalAmount): ChronoLocalDateTime
    minus(arg0: number, arg1: TemporalUnit): Temporal
    minus(arg0: TemporalAmount): Temporal
    plus(arg0: TemporalAmount): ChronoLocalDateTime
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: TemporalAmount): LocalDateTime
    plus(arg0: TemporalAmount): Temporal
    plus(arg0: number, arg1: TemporalUnit): ChronoLocalDateTime
    plus(arg0: number, arg1: TemporalUnit): LocalDateTime
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusNanos(arg0: number): LocalDateTime
    plusSeconds(arg0: number): LocalDateTime
    plusDays(arg0: number): LocalDateTime
    plusHours(arg0: number): LocalDateTime
    plusMinutes(arg0: number): LocalDateTime
    minusDays(arg0: number): LocalDateTime
    minusHours(arg0: number): LocalDateTime
    minusMinutes(arg0: number): LocalDateTime
    minusSeconds(arg0: number): LocalDateTime
    minusNanos(arg0: number): LocalDateTime
    truncatedTo(arg0: TemporalUnit): LocalDateTime
    adjustInto(arg0: Temporal): Temporal
    ofInstant(arg0: Instant, arg1: ZoneId): LocalDateTime
    atOffset(arg0: ZoneOffset): OffsetDateTime
    atZone(arg0: ZoneId): ZonedDateTime
    atZone(arg0: ZoneId): ChronoZonedDateTime
    isAfter(arg0: ChronoLocalDateTime<any>): boolean
    isBefore(arg0: ChronoLocalDateTime<any>): boolean
    getMonth(): Month
    getDayOfWeek(): DayOfWeek
    getDayOfYear(): number
    withDayOfMonth(arg0: number): LocalDateTime
    withDayOfYear(arg0: number): LocalDateTime
    plusWeeks(arg0: number): LocalDateTime
    withMonth(arg0: number): LocalDateTime
    plusMonths(arg0: number): LocalDateTime
    withYear(arg0: number): LocalDateTime
    plusYears(arg0: number): LocalDateTime
    minusMonths(arg0: number): LocalDateTime
    toLocalTime(): LocalTime
    minusYears(arg0: number): LocalDateTime
    minusWeeks(arg0: number): LocalDateTime
    withHour(arg0: number): LocalDateTime
    withMinute(arg0: number): LocalDateTime
    withSecond(arg0: number): LocalDateTime
    withNano(arg0: number): LocalDateTime
    toLocalDate(): LocalDate
    toLocalDate(): ChronoLocalDate
}

declare class AreaEffectCloudApplyEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getAffectedEntities(): List<LivingEntity>
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): AreaEffectCloud
}

declare class SheepDyeWoolEvent extends EntityEvent implements Cancellable {
    getColor(): DyeColor
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPlayer(): Player
    setColor(arg0: DyeColor): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Sheep
}

interface Supplier {
    get(): T
}

declare class LightningStrikeSpigot extends EntitySpigot {
    isSilent(): boolean
}

interface TemporalAccessor {
    get(arg0: TemporalField): number
    getLong(arg0: TemporalField): number
    isSupported(arg0: TemporalField): boolean
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
}

interface ImageConsumer {
    readonly RANDOMPIXELORDER: number
    readonly TOPDOWNLEFTRIGHT: number
    readonly COMPLETESCANLINES: number
    readonly SINGLEPASS: number
    readonly SINGLEFRAME: number
    readonly IMAGEERROR: number
    readonly SINGLEFRAMEDONE: number
    readonly STATICIMAGEDONE: number
    readonly IMAGEABORTED: number
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: byte[], arg6: number, arg7: number): void
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ColorModel, arg5: number[], arg6: number, arg7: number): void
    setDimensions(arg0: number, arg1: number): void
    setColorModel(arg0: ColorModel): void
    setHints(arg0: number): void
    imageComplete(arg0: number): void
    setProperties(arg0: Hashtable<any, any>): void
}

declare class InventoryCreativeEvent extends InventoryClickEvent {
    getCursor(): ItemStack
    setCursor(arg0: ItemStack): void
}

interface AbstractVillager implements Breedable, NPC, InventoryHolder, Merchant {
    getInventory(): Inventory
}

declare class EntityEnterBlockEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerLocaleChangeEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getLocale(): string
    getHandlers(): HandlerList
}

declare class PlayerLoginEventResult extends Enum<PlayerLoginEventResult> {
    readonly ALLOWED: PlayerLoginEventResult
    readonly KICK_FULL: PlayerLoginEventResult
    readonly KICK_BANNED: PlayerLoginEventResult
    readonly KICK_WHITELIST: PlayerLoginEventResult
    readonly KICK_OTHER: PlayerLoginEventResult
    values(): PlayerLoginEventResult[]
    valueOf(arg0: string): PlayerLoginEventResult
}

interface BukkitScheduler {
    getActiveWorkers(): List<BukkitWorker>
    runTaskLater(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask
    runTaskLater(arg0: Plugin, arg1: Consumer<BukkitTask>, arg2: number): void
    runTaskLater(arg0: Plugin, arg1: Runnable, arg2: number): BukkitTask
    runTaskTimer(arg0: Plugin, arg1: Consumer<BukkitTask>, arg2: number, arg3: number): void
    runTaskTimer(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask
    runTaskTimer(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): BukkitTask
    cancelTasks(arg0: Plugin): void
    getPendingTasks(): List<BukkitTask>
    isCurrentlyRunning(arg0: number): boolean
    callSyncMethod(arg0: Plugin, arg1: Callable<T>): Future<T>
    runTaskLaterAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number): BukkitTask
    runTaskLaterAsynchronously(arg0: Plugin, arg1: Runnable, arg2: number): BukkitTask
    runTaskLaterAsynchronously(arg0: Plugin, arg1: Consumer<BukkitTask>, arg2: number): void
    runTaskAsynchronously(arg0: Plugin, arg1: Runnable): BukkitTask
    runTaskAsynchronously(arg0: Plugin, arg1: Consumer<BukkitTask>): void
    runTaskAsynchronously(arg0: Plugin, arg1: BukkitRunnable): BukkitTask
    scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable): number
    scheduleSyncDelayedTask(arg0: Plugin, arg1: Runnable, arg2: number): number
    scheduleSyncDelayedTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number): number
    scheduleSyncDelayedTask(arg0: Plugin, arg1: Runnable): number
    scheduleSyncRepeatingTask(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): number
    scheduleSyncRepeatingTask(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): number
    scheduleAsyncDelayedTask(arg0: Plugin, arg1: Runnable): number
    scheduleAsyncDelayedTask(arg0: Plugin, arg1: Runnable, arg2: number): number
    scheduleAsyncRepeatingTask(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): number
    runTaskTimerAsynchronously(arg0: Plugin, arg1: Runnable, arg2: number, arg3: number): BukkitTask
    runTaskTimerAsynchronously(arg0: Plugin, arg1: Consumer<BukkitTask>, arg2: number, arg3: number): void
    runTaskTimerAsynchronously(arg0: Plugin, arg1: BukkitRunnable, arg2: number, arg3: number): BukkitTask
    cancelTask(arg0: number): void
    runTask(arg0: Plugin, arg1: Consumer<BukkitTask>): void
    runTask(arg0: Plugin, arg1: Runnable): BukkitTask
    runTask(arg0: Plugin, arg1: BukkitRunnable): BukkitTask
    isQueued(arg0: number): boolean
}

declare class SoundCategory extends Enum<SoundCategory> {
    readonly MASTER: SoundCategory
    readonly MUSIC: SoundCategory
    readonly RECORDS: SoundCategory
    readonly WEATHER: SoundCategory
    readonly BLOCKS: SoundCategory
    readonly HOSTILE: SoundCategory
    readonly NEUTRAL: SoundCategory
    readonly PLAYERS: SoundCategory
    readonly AMBIENT: SoundCategory
    readonly VOICE: SoundCategory
    values(): SoundCategory[]
    valueOf(arg0: string): SoundCategory
}

interface Spellcaster implements Illager {
    getSpell(): SpellcasterSpell
    setSpell(arg0: SpellcasterSpell): void
}

interface ToIntFunction {
    applyAsInt(arg0: T): number
}

declare class VehicleDamageEvent extends VehicleEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getDamage(): number
    getHandlerList(): HandlerList
    getAttacker(): Entity
    setDamage(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface PlayerTextures {
    getCape(): URL
    getSkin(): URL
    setCape(arg0: URL): void
    setSkin(arg0: URL, arg1: PlayerTexturesSkinModel): void
    setSkin(arg0: URL): void
    getSkinModel(): PlayerTexturesSkinModel
    clear(): void
    isEmpty(): boolean
    isSigned(): boolean
    getTimestamp(): number
}

interface BanEntry {
    setSource(arg0: string): void
    setReason(arg0: string): void
    setExpiration(arg0: Date): void
    getBanTarget(): T
    setCreated(arg0: Date): void
    getCreated(): Date
    getExpiration(): Date
    remove(): void
    save(): void
    getTarget(): string
    getSource(): string
    getReason(): string
}

interface CachedServerIcon {
}

interface AnvilInventory implements Inventory {
    setRepairCost(arg0: number): void
    getRepairCost(): number
    getRenameText(): string
    setMaximumRepairCost(arg0: number): void
    getMaximumRepairCost(): number
    setRepairCostAmount(arg0: number): void
    getRepairCostAmount(): number
}

declare class ItemMergeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getTarget(): Item
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Item
}

declare class PlayerLevelChangeEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getOldLevel(): number
    getNewLevel(): number
    getHandlers(): HandlerList
}

declare class PlayerResourcePackStatusEvent extends PlayerEvent {
    getStatus(): PlayerResourcePackStatusEventStatus
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class YamlConfiguration extends FileConfiguration {
    loadConfiguration(arg0: Reader): YamlConfiguration
    loadConfiguration(arg0: File): YamlConfiguration
    saveToString(): string
    loadFromString(arg0: string): void
    options(): MemoryConfigurationOptions
    options(): ConfigurationOptions
    options(): FileConfigurationOptions
    options(): YamlConfigurationOptions
}

declare class EntityUnleashEventUnleashReason extends Enum<EntityUnleashEventUnleashReason> {
    readonly HOLDER_GONE: EntityUnleashEventUnleashReason
    readonly PLAYER_UNLEASH: EntityUnleashEventUnleashReason
    readonly DISTANCE: EntityUnleashEventUnleashReason
    readonly UNKNOWN: EntityUnleashEventUnleashReason
    values(): EntityUnleashEventUnleashReason[]
    valueOf(arg0: string): EntityUnleashEventUnleashReason
}

interface MerchantInventory implements Inventory {
    getMerchant(): Merchant
    getSelectedRecipe(): MerchantRecipe
    getSelectedRecipeIndex(): number
}

declare class BlockDamageAbortEvent extends BlockEvent {
    getItemInHand(): ItemStack
    getHandlerList(): HandlerList
    getPlayer(): Player
    getHandlers(): HandlerList
}

declare class PlayerAnimationType extends Enum<PlayerAnimationType> {
    readonly ARM_SWING: PlayerAnimationType
    readonly OFF_ARM_SWING: PlayerAnimationType
    values(): PlayerAnimationType[]
    valueOf(arg0: string): PlayerAnimationType
}

declare class ChunkGenerator {
    getDefaultBiomeProvider(arg0: WorldInfo): BiomeProvider
    getDefaultPopulators(arg0: World): List<BlockPopulator>
    getFixedSpawnLocation(arg0: World, arg1: Random): Location
    canSpawn(arg0: World, arg1: number, arg2: number): boolean
    getBaseHeight(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number, arg4: HeightMap): number
    shouldGenerateMobs(): boolean
    shouldGenerateMobs(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number): boolean
    generateChunkData(arg0: World, arg1: Random, arg2: number, arg3: number, arg4: ChunkGeneratorBiomeGrid): ChunkGeneratorChunkData
    generateCaves(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number, arg4: ChunkGeneratorChunkData): void
    generateSurface(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number, arg4: ChunkGeneratorChunkData): void
    isParallelCapable(): boolean
    generateNoise(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number, arg4: ChunkGeneratorChunkData): void
    generateBedrock(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number, arg4: ChunkGeneratorChunkData): void
    shouldGenerateDecorations(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number): boolean
    shouldGenerateDecorations(): boolean
    shouldGenerateSurface(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number): boolean
    shouldGenerateSurface(): boolean
    shouldGenerateBedrock(): boolean
    shouldGenerateNoise(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number): boolean
    shouldGenerateNoise(): boolean
    shouldGenerateStructures(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number): boolean
    shouldGenerateStructures(): boolean
    shouldGenerateCaves(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number): boolean
    shouldGenerateCaves(): boolean
}

interface Merchant {
    getRecipeCount(): number
    getRecipe(arg0: number): MerchantRecipe
    setRecipe(arg0: number, arg1: MerchantRecipe): void
    setRecipes(arg0: List<MerchantRecipe>): void
    isTrading(): boolean
    getTrader(): HumanEntity
    getRecipes(): List<MerchantRecipe>
}

declare class PortalCreateEventCreateReason extends Enum<PortalCreateEventCreateReason> {
    readonly FIRE: PortalCreateEventCreateReason
    readonly NETHER_PAIR: PortalCreateEventCreateReason
    readonly END_PLATFORM: PortalCreateEventCreateReason
    values(): PortalCreateEventCreateReason[]
    valueOf(arg0: string): PortalCreateEventCreateReason
}

declare class TimeSkipEvent extends WorldEvent implements Cancellable {
    getSkipAmount(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getSkipReason(): TimeSkipEventSkipReason
    setSkipAmount(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface ToLongFunction {
    applyAsLong(arg0: T): number
}

declare class EntityEnterLoveModeEvent extends EntityEvent implements Cancellable {
    getTicksInLove(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setTicksInLove(arg0: number): void
    getHumanEntity(): HumanEntity
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Animals
    getEntity(): Entity
}

interface AbstractHorse implements Vehicle, InventoryHolder, Tameable {
    getInventory(): Inventory
    getInventory(): AbstractHorseInventory
    getDomestication(): number
    setEatingHaystack(arg0: boolean): void
    setDomestication(arg0: number): void
    isEatingHaystack(): boolean
    setJumpStrength(arg0: number): void
    getJumpStrength(): number
    setMaxDomestication(arg0: number): void
    getMaxDomestication(): number
    getVariant(): HorseVariant
    setVariant(arg0: HorseVariant): void
}

declare class EntityType extends Enum<EntityType> implements Keyed, Translatable {
    readonly DROPPED_ITEM: EntityType
    readonly EXPERIENCE_ORB: EntityType
    readonly AREA_EFFECT_CLOUD: EntityType
    readonly ELDER_GUARDIAN: EntityType
    readonly WITHER_SKELETON: EntityType
    readonly STRAY: EntityType
    readonly EGG: EntityType
    readonly LEASH_HITCH: EntityType
    readonly PAINTING: EntityType
    readonly ARROW: EntityType
    readonly SNOWBALL: EntityType
    readonly FIREBALL: EntityType
    readonly SMALL_FIREBALL: EntityType
    readonly ENDER_PEARL: EntityType
    readonly ENDER_SIGNAL: EntityType
    readonly SPLASH_POTION: EntityType
    readonly THROWN_EXP_BOTTLE: EntityType
    readonly ITEM_FRAME: EntityType
    readonly WITHER_SKULL: EntityType
    readonly PRIMED_TNT: EntityType
    readonly FALLING_BLOCK: EntityType
    readonly FIREWORK: EntityType
    readonly HUSK: EntityType
    readonly SPECTRAL_ARROW: EntityType
    readonly SHULKER_BULLET: EntityType
    readonly DRAGON_FIREBALL: EntityType
    readonly ZOMBIE_VILLAGER: EntityType
    readonly SKELETON_HORSE: EntityType
    readonly ZOMBIE_HORSE: EntityType
    readonly ARMOR_STAND: EntityType
    readonly DONKEY: EntityType
    readonly MULE: EntityType
    readonly EVOKER_FANGS: EntityType
    readonly EVOKER: EntityType
    readonly VEX: EntityType
    readonly VINDICATOR: EntityType
    readonly ILLUSIONER: EntityType
    readonly MINECART_COMMAND: EntityType
    readonly BOAT: EntityType
    readonly MINECART: EntityType
    readonly MINECART_CHEST: EntityType
    readonly MINECART_FURNACE: EntityType
    readonly MINECART_TNT: EntityType
    readonly MINECART_HOPPER: EntityType
    readonly MINECART_MOB_SPAWNER: EntityType
    readonly CREEPER: EntityType
    readonly SKELETON: EntityType
    readonly SPIDER: EntityType
    readonly GIANT: EntityType
    readonly ZOMBIE: EntityType
    readonly SLIME: EntityType
    readonly GHAST: EntityType
    readonly ZOMBIFIED_PIGLIN: EntityType
    readonly ENDERMAN: EntityType
    readonly CAVE_SPIDER: EntityType
    readonly SILVERFISH: EntityType
    readonly BLAZE: EntityType
    readonly MAGMA_CUBE: EntityType
    readonly ENDER_DRAGON: EntityType
    readonly WITHER: EntityType
    readonly BAT: EntityType
    readonly WITCH: EntityType
    readonly ENDERMITE: EntityType
    readonly GUARDIAN: EntityType
    readonly SHULKER: EntityType
    readonly PIG: EntityType
    readonly SHEEP: EntityType
    readonly COW: EntityType
    readonly CHICKEN: EntityType
    readonly SQUID: EntityType
    readonly WOLF: EntityType
    readonly MUSHROOM_COW: EntityType
    readonly SNOWMAN: EntityType
    readonly OCELOT: EntityType
    readonly IRON_GOLEM: EntityType
    readonly HORSE: EntityType
    readonly RABBIT: EntityType
    readonly POLAR_BEAR: EntityType
    readonly LLAMA: EntityType
    readonly LLAMA_SPIT: EntityType
    readonly PARROT: EntityType
    readonly VILLAGER: EntityType
    readonly ENDER_CRYSTAL: EntityType
    readonly TURTLE: EntityType
    readonly PHANTOM: EntityType
    readonly TRIDENT: EntityType
    readonly COD: EntityType
    readonly SALMON: EntityType
    readonly PUFFERFISH: EntityType
    readonly TROPICAL_FISH: EntityType
    readonly DROWNED: EntityType
    readonly DOLPHIN: EntityType
    readonly CAT: EntityType
    readonly PANDA: EntityType
    readonly PILLAGER: EntityType
    readonly RAVAGER: EntityType
    readonly TRADER_LLAMA: EntityType
    readonly WANDERING_TRADER: EntityType
    readonly FOX: EntityType
    readonly BEE: EntityType
    readonly HOGLIN: EntityType
    readonly PIGLIN: EntityType
    readonly STRIDER: EntityType
    readonly ZOGLIN: EntityType
    readonly PIGLIN_BRUTE: EntityType
    readonly AXOLOTL: EntityType
    readonly GLOW_ITEM_FRAME: EntityType
    readonly GLOW_SQUID: EntityType
    readonly GOAT: EntityType
    readonly MARKER: EntityType
    readonly ALLAY: EntityType
    readonly CHEST_BOAT: EntityType
    readonly FROG: EntityType
    readonly TADPOLE: EntityType
    readonly WARDEN: EntityType
    readonly CAMEL: EntityType
    readonly BLOCK_DISPLAY: EntityType
    readonly INTERACTION: EntityType
    readonly ITEM_DISPLAY: EntityType
    readonly SNIFFER: EntityType
    readonly TEXT_DISPLAY: EntityType
    readonly FISHING_HOOK: EntityType
    readonly LIGHTNING: EntityType
    readonly PLAYER: EntityType
    readonly UNKNOWN: EntityType
    getTypeId(): short
    getTranslationKey(): string
    isSpawnable(): boolean
    getEntityClass(): Class<Entity>
    fromName(arg0: string): EntityType
    fromId(arg0: number): EntityType
    isEnabledByFeature(arg0: World): boolean
    getName(): string
    values(): EntityType[]
    valueOf(arg0: string): EntityType
    getKey(): NamespacedKey
    isAlive(): boolean
}

interface URLStreamHandlerFactory {
    createURLStreamHandler(arg0: string): URLStreamHandler
}

declare class PlayerKickEvent extends PlayerEvent implements Cancellable {
    setLeaveMessage(arg0: string): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLeaveMessage(): string
    setReason(arg0: string): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getReason(): string
}

declare class LocalDate implements Temporal, TemporalAdjuster, ChronoLocalDate, Serializable {
    readonly MIN: LocalDate
    readonly MAX: LocalDate
    readonly EPOCH: LocalDate
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: Object): number
    compareTo(arg0: ChronoLocalDate): number
    getLong(arg0: TemporalField): number
    format(arg0: DateTimeFormatter): string
    of(arg0: number, arg1: number, arg2: number): LocalDate
    of(arg0: number, arg1: Month, arg2: number): LocalDate
    from(arg0: TemporalAccessor): LocalDate
    isSupported(arg0: TemporalUnit): boolean
    isSupported(arg0: TemporalField): boolean
    parse(arg0: CharSequence): LocalDate
    parse(arg0: CharSequence, arg1: DateTimeFormatter): LocalDate
    with(arg0: TemporalAdjuster): LocalDate
    with(arg0: TemporalField, arg1: number): LocalDate
    with(arg0: TemporalAdjuster): Temporal
    with(arg0: TemporalField, arg1: number): ChronoLocalDate
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): ChronoLocalDate
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
    isEqual(arg0: ChronoLocalDate): boolean
    now(): LocalDate
    now(arg0: Clock): LocalDate
    now(arg0: ZoneId): LocalDate
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    minus(arg0: number, arg1: TemporalUnit): ChronoLocalDate
    minus(arg0: TemporalAmount): ChronoLocalDate
    minus(arg0: number, arg1: TemporalUnit): LocalDate
    minus(arg0: TemporalAmount): LocalDate
    minus(arg0: TemporalAmount): Temporal
    minus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: TemporalAmount): Temporal
    plus(arg0: TemporalAmount): ChronoLocalDate
    plus(arg0: number, arg1: TemporalUnit): ChronoLocalDate
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: number, arg1: TemporalUnit): LocalDate
    plus(arg0: TemporalAmount): LocalDate
    until(arg0: ChronoLocalDate): Period
    until(arg0: ChronoLocalDate): ChronoPeriod
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusDays(arg0: number): LocalDate
    minusDays(arg0: number): LocalDate
    adjustInto(arg0: Temporal): Temporal
    ofInstant(arg0: Instant, arg1: ZoneId): LocalDate
    isAfter(arg0: ChronoLocalDate): boolean
    isBefore(arg0: ChronoLocalDate): boolean
    isLeapYear(): boolean
    ofEpochDay(arg0: number): LocalDate
    lengthOfMonth(): number
    lengthOfYear(): number
    getMonth(): Month
    toEpochDay(): number
    getDayOfWeek(): DayOfWeek
    getDayOfYear(): number
    withDayOfMonth(arg0: number): LocalDate
    withDayOfYear(arg0: number): LocalDate
    plusWeeks(arg0: number): LocalDate
    withMonth(arg0: number): LocalDate
    plusMonths(arg0: number): LocalDate
    withYear(arg0: number): LocalDate
    ofYearDay(arg0: number, arg1: number): LocalDate
    plusYears(arg0: number): LocalDate
    minusMonths(arg0: number): LocalDate
    atTime(arg0: LocalTime): ChronoLocalDateTime
    atTime(arg0: number, arg1: number, arg2: number): LocalDateTime
    atTime(arg0: number, arg1: number, arg2: number, arg3: number): LocalDateTime
    atTime(arg0: number, arg1: number): LocalDateTime
    atTime(arg0: LocalTime): LocalDateTime
    atTime(arg0: OffsetTime): OffsetDateTime
    getEra(): IsoEra
    getEra(): Era
    getChronology(): Chronology
    getChronology(): IsoChronology
    minusYears(arg0: number): LocalDate
    minusWeeks(arg0: number): LocalDate
    datesUntil(arg0: LocalDate, arg1: Period): Stream<LocalDate>
    datesUntil(arg0: LocalDate): Stream<LocalDate>
    atStartOfDay(): LocalDateTime
    atStartOfDay(arg0: ZoneId): ZonedDateTime
    toEpochSecond(arg0: LocalTime, arg1: ZoneOffset): number
}

declare class EntityBreedEvent extends EntityEvent implements Cancellable {
    getExperience(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setExperience(arg0: number): void
    getBredWith(): ItemStack
    getFather(): LivingEntity
    getMother(): LivingEntity
    getBreeder(): LivingEntity
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): LivingEntity
    getEntity(): Entity
}

declare class FluidCollisionMode extends Enum<FluidCollisionMode> {
    readonly NEVER: FluidCollisionMode
    readonly SOURCE_ONLY: FluidCollisionMode
    readonly ALWAYS: FluidCollisionMode
    values(): FluidCollisionMode[]
    valueOf(arg0: string): FluidCollisionMode
}

interface SequencedCollection implements Collection<E> {
    getFirst(): E
    getLast(): E
    addFirst(arg0: E): void
    addLast(arg0: E): void
    removeFirst(): E
    removeLast(): E
    reversed(): SequencedCollection<E>
}

declare class PlayerAdvancementDoneEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getAdvancement(): Advancement
    getHandlers(): HandlerList
}

declare class ThunderChangeEvent extends WeatherEvent implements Cancellable {
    toThunderState(): boolean
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface LimitedRegion implements RegionAccessor {
    getTileEntities(): List<BlockState>
    isInRegion(arg0: number, arg1: number, arg2: number): boolean
    isInRegion(arg0: Location): boolean
    getBuffer(): number
}

declare class InventoryPickupItemEvent extends MinecraftEvent implements Cancellable {
    getInventory(): Inventory
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getItem(): Item
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface Item implements Entity {
    getItemStack(): ItemStack
    setItemStack(arg0: ItemStack): void
    setPickupDelay(arg0: number): void
    getPickupDelay(): number
    setUnlimitedLifetime(arg0: boolean): void
    isUnlimitedLifetime(): boolean
    getThrower(): UUID
    setThrower(arg0: UUID): void
    getOwner(): UUID
    setOwner(arg0: UUID): void
}

interface AnimalTamer {
    getUniqueId(): UUID
    getName(): string
}

interface Multiset implements Collection<E> {
    setCount(arg0: E, arg1: number, arg2: number): boolean
    setCount(arg0: E, arg1: number): number
    elementSet(): Set<E>
    remove(arg0: Object, arg1: number): number
    remove(arg0: Object): boolean
    size(): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    add(arg0: E): boolean
    add(arg0: E, arg1: number): number
    iterator(): Iterator<E>
    count(arg0: Object): number
    contains(arg0: Object): boolean
    spliterator(): Spliterator<E>
    entrySet(): Set<MultisetEntry<E>>
    forEach(arg0: Consumer<E>): void
    forEachEntry(arg0: ObjIntConsumer<E>): void
    removeAll(arg0: Collection<any>): boolean
    retainAll(arg0: Collection<any>): boolean
    containsAll(arg0: Collection<any>): boolean
}

interface TemporalUnit {
    toString(): string
    between(arg0: Temporal, arg1: Temporal): number
    isDurationEstimated(): boolean
    getDuration(): Duration
    addTo(arg0: R, arg1: number): R
    isSupportedBy(arg0: Temporal): boolean
    isTimeBased(): boolean
    isDateBased(): boolean
}

declare class PlayerAnimationEvent extends PlayerEvent implements Cancellable {
    getAnimationType(): PlayerAnimationType
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface StructureSearchResult {
    getStructure(): Structure
    getLocation(): Location
}

declare class NoteTone extends Enum<NoteTone> {
    readonly G: NoteTone
    readonly A: NoteTone
    readonly B: NoteTone
    readonly C: NoteTone
    readonly D: NoteTone
    readonly E: NoteTone
    readonly F: NoteTone
    readonly TONES_COUNT: byte
    getById(arg0: byte): NoteTone
    isSharpable(): boolean
    isSharped(arg0: byte): boolean
    values(): NoteTone[]
    valueOf(arg0: string): NoteTone
    getId(): byte
    getId(arg0: boolean): byte
}

declare class WeatherChangeEvent extends WeatherEvent implements Cancellable {
    toWeatherState(): boolean
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerHideEntityEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
    getEntity(): Entity
}

interface Function {
    apply(arg0: T): R
    identity(): Function<T, T>
    compose(arg0: Function<V, T>): Function<V, R>
    andThen(arg0: Function<R, V>): Function<T, V>
}

declare class VehicleDestroyEvent extends VehicleEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getAttacker(): Entity
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ItemDespawnEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLocation(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Item
}

declare class EntitySpellCastEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getSpell(): SpellcasterSpell
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Spellcaster
}

declare class SculkBloomEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getCharge(): number
    setCharge(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface WorldBorder {
    getWorld(): World
    getMaxCenterCoordinate(): number
    isInside(arg0: Location): boolean
    setCenter(arg0: Location): void
    setCenter(arg0: number, arg1: number): void
    getCenter(): Location
    setWarningDistance(arg0: number): void
    getWarningTime(): number
    setDamageAmount(arg0: number): void
    getDamageAmount(): number
    setWarningTime(arg0: number): void
    getDamageBuffer(): number
    getWarningDistance(): number
    setDamageBuffer(arg0: number): void
    reset(): void
    getSize(): number
    setSize(arg0: number, arg1: number): void
    setSize(arg0: number): void
    setSize(arg0: number, arg1: TimeUnit, arg2: number): void
    getMaxSize(): number
}

interface Consumer {
    accept(arg0: T): void
}

declare class EntityDamageEventDamageModifier extends Enum<EntityDamageEventDamageModifier> {
    readonly BASE: EntityDamageEventDamageModifier
    readonly HARD_HAT: EntityDamageEventDamageModifier
    readonly BLOCKING: EntityDamageEventDamageModifier
    readonly ARMOR: EntityDamageEventDamageModifier
    readonly RESISTANCE: EntityDamageEventDamageModifier
    readonly MAGIC: EntityDamageEventDamageModifier
    readonly ABSORPTION: EntityDamageEventDamageModifier
    values(): EntityDamageEventDamageModifier[]
    valueOf(arg0: string): EntityDamageEventDamageModifier
}

declare class HangingBreakEvent extends HangingEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getCause(): HangingBreakEventRemoveCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class GameMode extends Enum<GameMode> {
    readonly CREATIVE: GameMode
    readonly SURVIVAL: GameMode
    readonly ADVENTURE: GameMode
    readonly SPECTATOR: GameMode
    getByValue(arg0: number): GameMode
    values(): GameMode[]
    valueOf(arg0: string): GameMode
    getValue(): number
}

declare class Graphics2D extends Graphics {
    translate(arg0: number, arg1: number): void
    translate(arg0: number, arg1: number): void
    clip(arg0: Shape): void
    shear(arg0: number, arg1: number): void
    drawImage(arg0: BufferedImage, arg1: BufferedImageOp, arg2: number, arg3: number): void
    drawImage(arg0: Image, arg1: AffineTransform, arg2: ImageObserver): boolean
    drawString(arg0: string, arg1: number, arg2: number): void
    drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void
    drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void
    drawString(arg0: string, arg1: number, arg2: number): void
    draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void
    fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void
    getPaint(): Paint
    setPaint(arg0: Paint): void
    draw(arg0: Shape): void
    drawRenderedImage(arg0: RenderedImage, arg1: AffineTransform): void
    drawRenderableImage(arg0: RenderableImage, arg1: AffineTransform): void
    drawGlyphVector(arg0: GlyphVector, arg1: number, arg2: number): void
    getDeviceConfiguration(): GraphicsConfiguration
    setComposite(arg0: Composite): void
    setStroke(arg0: Stroke): void
    setRenderingHint(arg0: RenderingHintsKey, arg1: Object): void
    getRenderingHint(arg0: RenderingHintsKey): Object
    setRenderingHints(arg0: Map<any, any>): void
    addRenderingHints(arg0: Map<any, any>): void
    getRenderingHints(): RenderingHints
    setTransform(arg0: AffineTransform): void
    getComposite(): Composite
    setBackground(arg0: Color): void
    getBackground(): Color
    getStroke(): Stroke
    getFontRenderContext(): FontRenderContext
    scale(arg0: number, arg1: number): void
    fill(arg0: Shape): void
    transform(arg0: AffineTransform): void
    rotate(arg0: number): void
    rotate(arg0: number, arg1: number, arg2: number): void
    hit(arg0: Rectangle, arg1: Shape, arg2: boolean): boolean
    getTransform(): AffineTransform
}

interface DataPackManager {
    getEnabledDataPacks(arg0: World): Collection<DataPack>
    getDisabledDataPacks(arg0: World): Collection<DataPack>
    getDataPacks(): Collection<DataPack>
    getDataPack(arg0: NamespacedKey): DataPack
    isEnabledByFeature(arg0: Material, arg1: World): boolean
    isEnabledByFeature(arg0: EntityType, arg1: World): boolean
}

interface MapView {
    getScale(): MapViewScale
    setWorld(arg0: World): void
    addRenderer(arg0: MapRenderer): void
    getRenderers(): List<MapRenderer>
    removeRenderer(arg0: MapRenderer): boolean
    isTrackingPosition(): boolean
    getWorld(): World
    setTrackingPosition(arg0: boolean): void
    setUnlimitedTracking(arg0: boolean): void
    isUnlimitedTracking(): boolean
    setLocked(arg0: boolean): void
    setCenterZ(arg0: number): void
    getCenterX(): number
    getCenterZ(): number
    setCenterX(arg0: number): void
    isVirtual(): boolean
    getId(): number
    isLocked(): boolean
    setScale(arg0: MapViewScale): void
}

declare class CraftItemEvent extends InventoryClickEvent {
    getInventory(): Inventory
    getInventory(): CraftingInventory
    getRecipe(): Recipe
}

declare class TimeSkipEventSkipReason extends Enum<TimeSkipEventSkipReason> {
    readonly COMMAND: TimeSkipEventSkipReason
    readonly CUSTOM: TimeSkipEventSkipReason
    readonly NIGHT_SKIP: TimeSkipEventSkipReason
    values(): TimeSkipEventSkipReason[]
    valueOf(arg0: string): TimeSkipEventSkipReason
}

declare class Color implements ConfigurationSerializable {
    readonly WHITE: Color
    readonly SILVER: Color
    readonly GRAY: Color
    readonly BLACK: Color
    readonly RED: Color
    readonly MAROON: Color
    readonly YELLOW: Color
    readonly OLIVE: Color
    readonly LIME: Color
    readonly GREEN: Color
    readonly AQUA: Color
    readonly TEAL: Color
    readonly BLUE: Color
    readonly NAVY: Color
    readonly FUCHSIA: Color
    readonly PURPLE: Color
    readonly ORANGE: Color
    serialize(): Map<string, Object>
    fromRGB(arg0: number): Color
    fromRGB(arg0: number, arg1: number, arg2: number): Color
    mixColors(arg0: Color[]): Color
    setGreen(arg0: number): Color
    fromBGR(arg0: number, arg1: number, arg2: number): Color
    fromBGR(arg0: number): Color
    setRed(arg0: number): Color
    fromARGB(arg0: number): Color
    fromARGB(arg0: number, arg1: number, arg2: number, arg3: number): Color
    getGreen(): number
    asRGB(): number
    setAlpha(arg0: number): Color
    mixDyes(arg0: DyeColor[]): Color
    getAlpha(): number
    asBGR(): number
    getRed(): number
    getBlue(): number
    setBlue(arg0: number): Color
    asARGB(): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    deserialize(arg0: Map<string, Object>): Color
}

declare class LeavesDecayEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PigZombieAngerEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewAnger(): number
    setNewAnger(arg0: number): void
    getTarget(): Entity
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): PigZombie
}

declare class WeatherType extends Enum<WeatherType> {
    readonly DOWNFALL: WeatherType
    readonly CLEAR: WeatherType
    values(): WeatherType[]
    valueOf(arg0: string): WeatherType
}

declare class ChatColor {
    readonly COLOR_CHAR: char
    readonly ALL_CODES: string
    readonly STRIP_COLOR_PATTERN: Pattern
    readonly BLACK: ChatColor
    readonly DARK_BLUE: ChatColor
    readonly DARK_GREEN: ChatColor
    readonly DARK_AQUA: ChatColor
    readonly DARK_RED: ChatColor
    readonly DARK_PURPLE: ChatColor
    readonly GOLD: ChatColor
    readonly GRAY: ChatColor
    readonly DARK_GRAY: ChatColor
    readonly BLUE: ChatColor
    readonly GREEN: ChatColor
    readonly AQUA: ChatColor
    readonly RED: ChatColor
    readonly LIGHT_PURPLE: ChatColor
    readonly YELLOW: ChatColor
    readonly WHITE: ChatColor
    readonly MAGIC: ChatColor
    readonly BOLD: ChatColor
    readonly STRIKETHROUGH: ChatColor
    readonly UNDERLINE: ChatColor
    readonly ITALIC: ChatColor
    readonly RESET: ChatColor
    getColor(): Color
    translateAlternateColorCodes(arg0: char, arg1: string): string
    stripColor(arg0: string): string
    getByChar(arg0: char): ChatColor
    getName(): string
    name(): string
    equals(arg0: Object): boolean
    toString(): string
    values(): ChatColor[]
    hashCode(): number
    valueOf(arg0: string): ChatColor
    of(arg0: Color): ChatColor
    of(arg0: string): ChatColor
    ordinal(): number
}

declare class HangingBreakEventRemoveCause extends Enum<HangingBreakEventRemoveCause> {
    readonly ENTITY: HangingBreakEventRemoveCause
    readonly EXPLOSION: HangingBreakEventRemoveCause
    readonly OBSTRUCTION: HangingBreakEventRemoveCause
    readonly PHYSICS: HangingBreakEventRemoveCause
    readonly DEFAULT: HangingBreakEventRemoveCause
    values(): HangingBreakEventRemoveCause[]
    valueOf(arg0: string): HangingBreakEventRemoveCause
}

declare class HorseJumpEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPower(): number
    setPower(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): AbstractHorse
}

declare class InventoryBlockStartEvent extends BlockEvent {
    getHandlerList(): HandlerList
    getSource(): ItemStack
    getHandlers(): HandlerList
}

interface ScoreboardManager {
    getMainScoreboard(): Scoreboard
    getNewScoreboard(): Scoreboard
}

declare class Month extends Enum<Month> implements TemporalAccessor, TemporalAdjuster {
    readonly JANUARY: Month
    readonly FEBRUARY: Month
    readonly MARCH: Month
    readonly APRIL: Month
    readonly MAY: Month
    readonly JUNE: Month
    readonly JULY: Month
    readonly AUGUST: Month
    readonly SEPTEMBER: Month
    readonly OCTOBER: Month
    readonly NOVEMBER: Month
    readonly DECEMBER: Month
    firstMonthOfQuarter(): Month
    get(arg0: TemporalField): number
    length(arg0: boolean): number
    values(): Month[]
    getLong(arg0: TemporalField): number
    valueOf(arg0: string): Month
    getValue(): number
    of(arg0: number): Month
    from(arg0: TemporalAccessor): Month
    isSupported(arg0: TemporalField): boolean
    query(arg0: TemporalQuery<R>): R
    minLength(): number
    range(arg0: TemporalField): ValueRange
    getDisplayName(arg0: TextStyle, arg1: Locale): string
    minus(arg0: number): Month
    plus(arg0: number): Month
    adjustInto(arg0: Temporal): Temporal
    firstDayOfYear(arg0: boolean): number
    maxLength(): number
}

declare class ServerLoadEvent extends ServerEvent {
    getHandlerList(): HandlerList
    getType(): ServerLoadEventLoadType
    getHandlers(): HandlerList
}

declare class CauldronLevelChangeEventChangeReason extends Enum<CauldronLevelChangeEventChangeReason> {
    readonly BUCKET_FILL: CauldronLevelChangeEventChangeReason
    readonly BUCKET_EMPTY: CauldronLevelChangeEventChangeReason
    readonly BOTTLE_FILL: CauldronLevelChangeEventChangeReason
    readonly BOTTLE_EMPTY: CauldronLevelChangeEventChangeReason
    readonly BANNER_WASH: CauldronLevelChangeEventChangeReason
    readonly ARMOR_WASH: CauldronLevelChangeEventChangeReason
    readonly SHULKER_WASH: CauldronLevelChangeEventChangeReason
    readonly EXTINGUISH: CauldronLevelChangeEventChangeReason
    readonly EVAPORATE: CauldronLevelChangeEventChangeReason
    readonly NATURAL_FILL: CauldronLevelChangeEventChangeReason
    readonly UNKNOWN: CauldronLevelChangeEventChangeReason
    values(): CauldronLevelChangeEventChangeReason[]
    valueOf(arg0: string): CauldronLevelChangeEventChangeReason
}

declare class WorldEvent extends MinecraftEvent {
    getWorld(): World
}

declare class BlockExpEvent extends BlockEvent {
    getHandlerList(): HandlerList
    getExpToDrop(): number
    setExpToDrop(arg0: number): void
    getHandlers(): HandlerList
}

declare class PlayerTakeLecternBookEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBook(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
    getLectern(): Lectern
}

declare class PotionData {
    isUpgraded(): boolean
    isExtended(): boolean
    equals(arg0: Object): boolean
    hashCode(): number
    getType(): PotionType
}

interface Consumer {
    accept(arg0: T): void
    andThen(arg0: Consumer<T>): Consumer<T>
}

declare class RegisteredListener {
    callEvent(arg0: MinecraftEvent): void
    isIgnoringCancelled(): boolean
    getPlugin(): Plugin
    getPriority(): EventPriority
    getListener(): Listener
}

declare class BlockExplodeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    blockList(): List<Block>
    getYield(): number
    setYield(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class FurnaceStartSmeltEvent extends InventoryBlockStartEvent {
    setTotalCookTime(arg0: number): void
    getHandlerList(): HandlerList
    getTotalCookTime(): number
    getRecipe(): CookingRecipe<any>
    getHandlers(): HandlerList
}

declare class DateTimeFormatter {
    readonly ISO_LOCAL_DATE: DateTimeFormatter
    readonly ISO_OFFSET_DATE: DateTimeFormatter
    readonly ISO_DATE: DateTimeFormatter
    readonly ISO_LOCAL_TIME: DateTimeFormatter
    readonly ISO_OFFSET_TIME: DateTimeFormatter
    readonly ISO_TIME: DateTimeFormatter
    readonly ISO_LOCAL_DATE_TIME: DateTimeFormatter
    readonly ISO_OFFSET_DATE_TIME: DateTimeFormatter
    readonly ISO_ZONED_DATE_TIME: DateTimeFormatter
    readonly ISO_DATE_TIME: DateTimeFormatter
    readonly ISO_ORDINAL_DATE: DateTimeFormatter
    readonly ISO_WEEK_DATE: DateTimeFormatter
    readonly ISO_INSTANT: DateTimeFormatter
    readonly BASIC_ISO_DATE: DateTimeFormatter
    readonly RFC_1123_DATE_TIME: DateTimeFormatter
    toString(): string
    format(arg0: TemporalAccessor): string
    parse(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor
    parse(arg0: CharSequence, arg1: TemporalQuery<T>): T
    parse(arg0: CharSequence): TemporalAccessor
    getLocale(): Locale
    getZone(): ZoneId
    withZone(arg0: ZoneId): DateTimeFormatter
    getChronology(): Chronology
    formatTo(arg0: TemporalAccessor, arg1: Appendable): void
    ofPattern(arg0: string): DateTimeFormatter
    ofPattern(arg0: string, arg1: Locale): DateTimeFormatter
    ofLocalizedDate(arg0: FormatStyle): DateTimeFormatter
    ofLocalizedTime(arg0: FormatStyle): DateTimeFormatter
    ofLocalizedDateTime(arg0: FormatStyle, arg1: FormatStyle): DateTimeFormatter
    ofLocalizedDateTime(arg0: FormatStyle): DateTimeFormatter
    ofLocalizedPattern(arg0: string): DateTimeFormatter
    parsedExcessDays(): TemporalQuery<Period>
    parsedLeapSecond(): TemporalQuery<Boolean>
    withLocale(arg0: Locale): DateTimeFormatter
    localizedBy(arg0: Locale): DateTimeFormatter
    getDecimalStyle(): DecimalStyle
    withDecimalStyle(arg0: DecimalStyle): DateTimeFormatter
    withChronology(arg0: Chronology): DateTimeFormatter
    getResolverStyle(): ResolverStyle
    withResolverStyle(arg0: ResolverStyle): DateTimeFormatter
    getResolverFields(): Set<TemporalField>
    withResolverFields(arg0: TemporalField[]): DateTimeFormatter
    withResolverFields(arg0: Set<TemporalField>): DateTimeFormatter
    parseBest(arg0: CharSequence, arg1: TemporalQuery[]): TemporalAccessor
    parseUnresolved(arg0: CharSequence, arg1: ParsePosition): TemporalAccessor
    toFormat(arg0: TemporalQuery<any>): Format
    toFormat(): Format
}

declare class PrepareGrindstoneEvent extends PrepareInventoryResultEvent {
    getInventory(): GrindstoneInventory
    getInventory(): Inventory
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class StructureRotation extends Enum<StructureRotation> {
    readonly NONE: StructureRotation
    readonly CLOCKWISE_90: StructureRotation
    readonly CLOCKWISE_180: StructureRotation
    readonly COUNTERCLOCKWISE_90: StructureRotation
    values(): StructureRotation[]
    valueOf(arg0: string): StructureRotation
}

declare class HopperInventorySearchEventContainerType extends Enum<HopperInventorySearchEventContainerType> {
    readonly SOURCE: HopperInventorySearchEventContainerType
    readonly DESTINATION: HopperInventorySearchEventContainerType
    values(): HopperInventorySearchEventContainerType[]
    valueOf(arg0: string): HopperInventorySearchEventContainerType
}

declare class BlockDispenseEvent extends BlockEvent implements Cancellable {
    getVelocity(): Vector
    setCancelled(arg0: boolean): void
    setVelocity(arg0: Vector): void
    getHandlerList(): HandlerList
    setItem(arg0: ItemStack): void
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityUnleashEvent extends EntityEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
    getReason(): EntityUnleashEventUnleashReason
}

declare class SlimeSplitEvent extends EntityEvent implements Cancellable {
    setCount(arg0: number): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getCount(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Slime
}

declare class PlayerRecipeBookClickEvent extends PlayerEvent {
    isShiftClick(): boolean
    getHandlerList(): HandlerList
    getRecipe(): Recipe
    setRecipe(arg0: Recipe): void
    getOriginalRecipe(): Recipe
    setShiftClick(arg0: boolean): void
    getHandlers(): HandlerList
}

declare class PlayerVelocityEvent extends PlayerEvent implements Cancellable {
    getVelocity(): Vector
    setCancelled(arg0: boolean): void
    setVelocity(arg0: Vector): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class AsyncPlayerPreLoginEvent extends MinecraftEvent {
    getUniqueId(): UUID
    getHandlerList(): HandlerList
    setKickMessage(arg0: string): void
    getKickMessage(): string
    setLoginResult(arg0: AsyncPlayerPreLoginEventResult): void
    getLoginResult(): AsyncPlayerPreLoginEventResult
    getName(): string
    disallow(arg0: AsyncPlayerPreLoginEventResult, arg1: string): void
    disallow(arg0: PlayerPreLoginEventResult, arg1: string): void
    allow(): void
    getAddress(): InetAddress
    getResult(): PlayerPreLoginEventResult
    setResult(arg0: PlayerPreLoginEventResult): void
    getHandlers(): HandlerList
}

declare class EnchantmentTarget extends Enum<EnchantmentTarget> {
    readonly ALL: EnchantmentTarget
    readonly ARMOR: EnchantmentTarget
    readonly ARMOR_FEET: EnchantmentTarget
    readonly ARMOR_LEGS: EnchantmentTarget
    readonly ARMOR_TORSO: EnchantmentTarget
    readonly ARMOR_HEAD: EnchantmentTarget
    readonly WEAPON: EnchantmentTarget
    readonly TOOL: EnchantmentTarget
    readonly BOW: EnchantmentTarget
    readonly FISHING_ROD: EnchantmentTarget
    readonly BREAKABLE: EnchantmentTarget
    readonly WEARABLE: EnchantmentTarget
    readonly TRIDENT: EnchantmentTarget
    readonly CROSSBOW: EnchantmentTarget
    readonly VANISHABLE: EnchantmentTarget
    includes(arg0: ItemStack): boolean
    includes(arg0: Material): boolean
    values(): EnchantmentTarget[]
    valueOf(arg0: string): EnchantmentTarget
}

declare class InventoryViewProperty extends Enum<InventoryViewProperty> {
    readonly BREW_TIME: InventoryViewProperty
    readonly FUEL_TIME: InventoryViewProperty
    readonly BURN_TIME: InventoryViewProperty
    readonly TICKS_FOR_CURRENT_FUEL: InventoryViewProperty
    readonly COOK_TIME: InventoryViewProperty
    readonly TICKS_FOR_CURRENT_SMELTING: InventoryViewProperty
    readonly ENCHANT_BUTTON1: InventoryViewProperty
    readonly ENCHANT_BUTTON2: InventoryViewProperty
    readonly ENCHANT_BUTTON3: InventoryViewProperty
    readonly ENCHANT_XP_SEED: InventoryViewProperty
    readonly ENCHANT_ID1: InventoryViewProperty
    readonly ENCHANT_ID2: InventoryViewProperty
    readonly ENCHANT_ID3: InventoryViewProperty
    readonly ENCHANT_LEVEL1: InventoryViewProperty
    readonly ENCHANT_LEVEL2: InventoryViewProperty
    readonly ENCHANT_LEVEL3: InventoryViewProperty
    readonly LEVELS: InventoryViewProperty
    readonly PRIMARY_EFFECT: InventoryViewProperty
    readonly SECONDARY_EFFECT: InventoryViewProperty
    readonly REPAIR_COST: InventoryViewProperty
    readonly BOOK_PAGE: InventoryViewProperty
    values(): InventoryViewProperty[]
    valueOf(arg0: string): InventoryViewProperty
    getId(): number
    getType(): InventoryType
}

declare class WorldSaveEvent extends WorldEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

interface Chunk implements PersistentDataHolder {
    getEntities(): Entity[]
    getTileEntities(): BlockState[]
    getZ(): number
    getX(): number
    getBlock(arg0: number, arg1: number, arg2: number): Block
    getWorld(): World
    removePluginChunkTicket(arg0: Plugin): boolean
    addPluginChunkTicket(arg0: Plugin): boolean
    isGenerated(): boolean
    isForceLoaded(): boolean
    isEntitiesLoaded(): boolean
    setInhabitedTime(arg0: number): void
    isSlimeChunk(): boolean
    getInhabitedTime(): number
    setForceLoaded(arg0: boolean): void
    getChunkSnapshot(arg0: boolean, arg1: boolean, arg2: boolean): ChunkSnapshot
    getChunkSnapshot(): ChunkSnapshot
    getLoadLevel(): ChunkLoadLevel
    load(): boolean
    load(arg0: boolean): boolean
    contains(arg0: Biome): boolean
    contains(arg0: BlockData): boolean
    isLoaded(): boolean
    unload(arg0: boolean): boolean
    unload(): boolean
    getPluginChunkTickets(): Collection<Plugin>
}

declare class BlockRedstoneEvent extends BlockEvent {
    getHandlerList(): HandlerList
    getNewCurrent(): number
    setNewCurrent(arg0: number): void
    getOldCurrent(): number
    getHandlers(): HandlerList
}

interface PersistentDataContainer {
    getAdapterContext(): PersistentDataAdapterContext
    remove(arg0: NamespacedKey): void
    get(arg0: NamespacedKey, arg1: PersistentDataType<T, Z>): Z
    isEmpty(): boolean
    set(arg0: NamespacedKey, arg1: PersistentDataType<T, Z>, arg2: Z): void
    getOrDefault(arg0: NamespacedKey, arg1: PersistentDataType<T, Z>, arg2: Z): Z
    getKeys(): Set<NamespacedKey>
    has(arg0: NamespacedKey, arg1: PersistentDataType<T, Z>): boolean
}

declare class EnchantItemEvent extends InventoryEvent implements Cancellable {
    getEnchanter(): Player
    getEnchantBlock(): Block
    getLevelHint(): number
    whichButton(): number
    setExpLevelCost(arg0: number): void
    getEnchantmentHint(): Enchantment
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getExpLevelCost(): number
    getEnchantsToAdd(): Map<Enchantment, Integer>
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface BlockData implements Cloneable {
    getAsString(arg0: boolean): string
    getAsString(): string
    mirror(arg0: Mirror): void
    isPreferredTool(arg0: ItemStack): boolean
    getMaterial(): Material
    getPlacementMaterial(): Material
    isFaceSturdy(arg0: BlockFace, arg1: BlockSupport): boolean
    isOccluding(): boolean
    getLightEmission(): number
    createBlockState(): BlockState
    getSoundGroup(): SoundGroup
    requiresCorrectToolForDrops(): boolean
    clone(): Object
    clone(): BlockData
    matches(arg0: BlockData): boolean
    merge(arg0: BlockData): BlockData
    isSupported(arg0: Block): boolean
    isSupported(arg0: Location): boolean
    rotate(arg0: StructureRotation): void
    getPistonMoveReaction(): PistonMoveReaction
}

declare class EntitySpigot extends CommandSenderSpigot {
}

declare class BlockIgniteEventIgniteCause extends Enum<BlockIgniteEventIgniteCause> {
    readonly LAVA: BlockIgniteEventIgniteCause
    readonly FLINT_AND_STEEL: BlockIgniteEventIgniteCause
    readonly SPREAD: BlockIgniteEventIgniteCause
    readonly LIGHTNING: BlockIgniteEventIgniteCause
    readonly FIREBALL: BlockIgniteEventIgniteCause
    readonly ENDER_CRYSTAL: BlockIgniteEventIgniteCause
    readonly EXPLOSION: BlockIgniteEventIgniteCause
    readonly ARROW: BlockIgniteEventIgniteCause
    values(): BlockIgniteEventIgniteCause[]
    valueOf(arg0: string): BlockIgniteEventIgniteCause
}

declare class PlayerToggleFlightEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isFlying(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ItemStack implements Cloneable, ConfigurationSerializable, Translatable {
    setData(arg0: MaterialData): void
    serialize(): Map<string, Object>
    setAmount(arg0: number): void
    isSimilar(arg0: ItemStack): boolean
    getAmount(): number
    getMaxStackSize(): number
    getTranslationKey(): string
    addUnsafeEnchantment(arg0: Enchantment, arg1: number): void
    getEnchantmentLevel(arg0: Enchantment): number
    containsEnchantment(arg0: Enchantment): boolean
    addUnsafeEnchantments(arg0: Map<Enchantment, Integer>): void
    setDurability(arg0: short): void
    getDurability(): short
    getEnchantments(): Map<Enchantment, Integer>
    hasItemMeta(): boolean
    setItemMeta(arg0: ItemMeta): boolean
    getItemMeta(): ItemMeta
    addEnchantments(arg0: Map<Enchantment, Integer>): void
    addEnchantment(arg0: Enchantment, arg1: number): void
    removeEnchantment(arg0: Enchantment): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    clone(): ItemStack
    clone(): Object
    getType(): Material
    getData(): MaterialData
    deserialize(arg0: Map<string, Object>): ItemStack
    setType(arg0: Material): void
}

declare class ServerLoadEventLoadType extends Enum<ServerLoadEventLoadType> {
    readonly STARTUP: ServerLoadEventLoadType
    readonly RELOAD: ServerLoadEventLoadType
    values(): ServerLoadEventLoadType[]
    valueOf(arg0: string): ServerLoadEventLoadType
}

interface Hanging implements Entity, Attachable {
    setFacingDirection(arg0: BlockFace, arg1: boolean): boolean
}

interface RegionAccessor {
    getEntities(): List<Entity>
    getBiome(arg0: Location): Biome
    getBiome(arg0: number, arg1: number, arg2: number): Biome
    setBiome(arg0: number, arg1: number, arg2: number, arg3: Biome): void
    setBiome(arg0: Location, arg1: Biome): void
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData
    getBlockData(arg0: Location): BlockData
    setBlockData(arg0: Location, arg1: BlockData): void
    setBlockData(arg0: number, arg1: number, arg2: number, arg3: BlockData): void
    getBlockState(arg0: Location): BlockState
    getBlockState(arg0: number, arg1: number, arg2: number): BlockState
    getEntitiesByClasses(arg0: Class[]): Collection<Entity>
    getLivingEntities(): List<LivingEntity>
    generateTree(arg0: Location, arg1: Random, arg2: TreeType, arg3: Consumer<BlockState>): boolean
    generateTree(arg0: Location, arg1: Random, arg2: TreeType, arg3: Predicate<BlockState>): boolean
    generateTree(arg0: Location, arg1: Random, arg2: TreeType): boolean
    getEntitiesByClass(arg0: Class<T>): Collection<T>
    spawnEntity(arg0: Location, arg1: EntityType, arg2: boolean): Entity
    spawnEntity(arg0: Location, arg1: EntityType): Entity
    getHighestBlockYAt(arg0: Location, arg1: HeightMap): number
    getHighestBlockYAt(arg0: number, arg1: number): number
    getHighestBlockYAt(arg0: Location): number
    getHighestBlockYAt(arg0: number, arg1: number, arg2: HeightMap): number
    getType(arg0: Location): Material
    getType(arg0: number, arg1: number, arg2: number): Material
    setType(arg0: number, arg1: number, arg2: number, arg3: Material): void
    setType(arg0: Location, arg1: Material): void
    spawn(arg0: Location, arg1: Class<T>): T
    spawn(arg0: Location, arg1: Class<T>, arg2: Consumer<T>): T
    spawn(arg0: Location, arg1: Class<T>, arg2: boolean, arg3: Consumer<T>): T
}

declare class MoistureChangeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewState(): BlockState
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PotionEffectType implements Keyed {
    readonly SPEED: PotionEffectType
    readonly SLOW: PotionEffectType
    readonly FAST_DIGGING: PotionEffectType
    readonly SLOW_DIGGING: PotionEffectType
    readonly INCREASE_DAMAGE: PotionEffectType
    readonly HEAL: PotionEffectType
    readonly HARM: PotionEffectType
    readonly JUMP: PotionEffectType
    readonly CONFUSION: PotionEffectType
    readonly REGENERATION: PotionEffectType
    readonly DAMAGE_RESISTANCE: PotionEffectType
    readonly FIRE_RESISTANCE: PotionEffectType
    readonly WATER_BREATHING: PotionEffectType
    readonly INVISIBILITY: PotionEffectType
    readonly BLINDNESS: PotionEffectType
    readonly NIGHT_VISION: PotionEffectType
    readonly HUNGER: PotionEffectType
    readonly WEAKNESS: PotionEffectType
    readonly POISON: PotionEffectType
    readonly WITHER: PotionEffectType
    readonly HEALTH_BOOST: PotionEffectType
    readonly ABSORPTION: PotionEffectType
    readonly SATURATION: PotionEffectType
    readonly GLOWING: PotionEffectType
    readonly LEVITATION: PotionEffectType
    readonly LUCK: PotionEffectType
    readonly UNLUCK: PotionEffectType
    readonly SLOW_FALLING: PotionEffectType
    readonly CONDUIT_POWER: PotionEffectType
    readonly DOLPHINS_GRACE: PotionEffectType
    readonly BAD_OMEN: PotionEffectType
    readonly HERO_OF_THE_VILLAGE: PotionEffectType
    readonly DARKNESS: PotionEffectType
    getColor(): Color
    stopAcceptingRegistrations(): void
    registerPotionEffectType(arg0: PotionEffectType): void
    getDurationModifier(): number
    getByKey(arg0: NamespacedKey): PotionEffectType
    createEffect(arg0: number, arg1: number): PotionEffect
    isInstant(): boolean
    getById(arg0: number): PotionEffectType
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    values(): PotionEffectType[]
    hashCode(): number
    getKey(): NamespacedKey
    getId(): number
    getByName(arg0: string): PotionEffectType
}

declare class GameRule {
    readonly ANNOUNCE_ADVANCEMENTS: GameRule<Boolean>
    readonly COMMAND_BLOCK_OUTPUT: GameRule<Boolean>
    readonly DISABLE_ELYTRA_MOVEMENT_CHECK: GameRule<Boolean>
    readonly DO_DAYLIGHT_CYCLE: GameRule<Boolean>
    readonly DO_ENTITY_DROPS: GameRule<Boolean>
    readonly DO_FIRE_TICK: GameRule<Boolean>
    readonly DO_LIMITED_CRAFTING: GameRule<Boolean>
    readonly DO_MOB_LOOT: GameRule<Boolean>
    readonly DO_MOB_SPAWNING: GameRule<Boolean>
    readonly DO_TILE_DROPS: GameRule<Boolean>
    readonly DO_WEATHER_CYCLE: GameRule<Boolean>
    readonly KEEP_INVENTORY: GameRule<Boolean>
    readonly LOG_ADMIN_COMMANDS: GameRule<Boolean>
    readonly MOB_GRIEFING: GameRule<Boolean>
    readonly NATURAL_REGENERATION: GameRule<Boolean>
    readonly REDUCED_DEBUG_INFO: GameRule<Boolean>
    readonly SEND_COMMAND_FEEDBACK: GameRule<Boolean>
    readonly SHOW_DEATH_MESSAGES: GameRule<Boolean>
    readonly SPECTATORS_GENERATE_CHUNKS: GameRule<Boolean>
    readonly DISABLE_RAIDS: GameRule<Boolean>
    readonly DO_INSOMNIA: GameRule<Boolean>
    readonly DO_IMMEDIATE_RESPAWN: GameRule<Boolean>
    readonly DROWNING_DAMAGE: GameRule<Boolean>
    readonly FALL_DAMAGE: GameRule<Boolean>
    readonly FIRE_DAMAGE: GameRule<Boolean>
    readonly FREEZE_DAMAGE: GameRule<Boolean>
    readonly DO_PATROL_SPAWNING: GameRule<Boolean>
    readonly DO_TRADER_SPAWNING: GameRule<Boolean>
    readonly DO_WARDEN_SPAWNING: GameRule<Boolean>
    readonly FORGIVE_DEAD_PLAYERS: GameRule<Boolean>
    readonly UNIVERSAL_ANGER: GameRule<Boolean>
    readonly BLOCK_EXPLOSION_DROP_DECAY: GameRule<Boolean>
    readonly MOB_EXPLOSION_DROP_DECAY: GameRule<Boolean>
    readonly TNT_EXPLOSION_DROP_DECAY: GameRule<Boolean>
    readonly WATER_SOURCE_CONVERSION: GameRule<Boolean>
    readonly LAVA_SOURCE_CONVERSION: GameRule<Boolean>
    readonly GLOBAL_SOUND_EVENTS: GameRule<Boolean>
    readonly DO_VINES_SPREAD: GameRule<Boolean>
    readonly RANDOM_TICK_SPEED: GameRule<Integer>
    readonly SPAWN_RADIUS: GameRule<Integer>
    readonly MAX_ENTITY_CRAMMING: GameRule<Integer>
    readonly MAX_COMMAND_CHAIN_LENGTH: GameRule<Integer>
    readonly COMMAND_MODIFICATION_BLOCK_LIMIT: GameRule<Integer>
    readonly PLAYERS_SLEEPING_PERCENTAGE: GameRule<Integer>
    readonly SNOW_ACCUMULATION_HEIGHT: GameRule<Integer>
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    values(): GameRule[]
    getType(): Class<T>
    getByName(arg0: string): GameRule<any>
}

declare class PlayerChangedMainHandEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getMainHand(): MainHand
    getHandlers(): HandlerList
}

declare class BlockSupport extends Enum<BlockSupport> {
    readonly FULL: BlockSupport
    readonly CENTER: BlockSupport
    readonly RIGID: BlockSupport
    values(): BlockSupport[]
    valueOf(arg0: string): BlockSupport
}

declare class HelpTopic {
    canSee(arg0: CommandSender): boolean
    amendTopic(arg0: string, arg1: string): void
    getFullText(arg0: CommandSender): string
    getShortText(): string
    amendCanSee(arg0: string): void
    getName(): string
}

declare class InventoryCloseEvent extends InventoryEvent {
    getHandlerList(): HandlerList
    getPlayer(): HumanEntity
    getHandlers(): HandlerList
}

declare class PlayerRespawnEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    isAnchorSpawn(): boolean
    setRespawnLocation(arg0: Location): void
    getRespawnReason(): PlayerRespawnEventRespawnReason
    isBedSpawn(): boolean
    getRespawnLocation(): Location
    getHandlers(): HandlerList
}

declare class ArrayList extends AbstractList<E> implements List<E>, RandomAccess, Cloneable, Serializable {
    remove(arg0: Object): boolean
    remove(arg0: number): E
    size(): number
    get(arg0: number): E
    equals(arg0: Object): boolean
    hashCode(): number
    clone(): Object
    indexOf(arg0: Object): number
    clear(): void
    lastIndexOf(arg0: Object): number
    isEmpty(): boolean
    replaceAll(arg0: UnaryOperator<E>): void
    add(arg0: number, arg1: E): void
    add(arg0: E): boolean
    subList(arg0: number, arg1: number): List<E>
    toArray(): Object[]
    toArray(arg0: T[]): T[]
    iterator(): Iterator<E>
    contains(arg0: Object): boolean
    spliterator(): Spliterator<E>
    addAll(arg0: number, arg1: Collection<E>): boolean
    addAll(arg0: Collection<E>): boolean
    set(arg0: number, arg1: E): E
    forEach(arg0: Consumer<E>): void
    sort(arg0: Comparator<E>): void
    ensureCapacity(arg0: number): void
    trimToSize(): void
    removeIf(arg0: Predicate<E>): boolean
    getFirst(): E
    getLast(): E
    addFirst(arg0: E): void
    addLast(arg0: E): void
    removeFirst(): E
    removeLast(): E
    removeAll(arg0: Collection<any>): boolean
    retainAll(arg0: Collection<any>): boolean
    listIterator(arg0: number): ListIterator<E>
    listIterator(): ListIterator<E>
}

declare class PlayerTeleportEventTeleportCause extends Enum<PlayerTeleportEventTeleportCause> {
    readonly ENDER_PEARL: PlayerTeleportEventTeleportCause
    readonly COMMAND: PlayerTeleportEventTeleportCause
    readonly PLUGIN: PlayerTeleportEventTeleportCause
    readonly NETHER_PORTAL: PlayerTeleportEventTeleportCause
    readonly END_PORTAL: PlayerTeleportEventTeleportCause
    readonly SPECTATE: PlayerTeleportEventTeleportCause
    readonly END_GATEWAY: PlayerTeleportEventTeleportCause
    readonly CHORUS_FRUIT: PlayerTeleportEventTeleportCause
    readonly DISMOUNT: PlayerTeleportEventTeleportCause
    readonly EXIT_BED: PlayerTeleportEventTeleportCause
    readonly UNKNOWN: PlayerTeleportEventTeleportCause
    values(): PlayerTeleportEventTeleportCause[]
    valueOf(arg0: string): PlayerTeleportEventTeleportCause
}

interface Strider implements Steerable, Vehicle {
    isShivering(): boolean
    setShivering(arg0: boolean): void
}

declare class MapViewScale extends Enum<MapViewScale> {
    readonly CLOSEST: MapViewScale
    readonly CLOSE: MapViewScale
    readonly NORMAL: MapViewScale
    readonly FAR: MapViewScale
    readonly FARTHEST: MapViewScale
    values(): MapViewScale[]
    valueOf(arg0: string): MapViewScale
    valueOf(arg0: byte): MapViewScale
    getValue(): byte
}

declare class EntityPlaceEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getBlock(): Block
    getBlockFace(): BlockFace
    getPlayer(): Player
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ServerListPingEvent extends ServerEvent implements Iterable<Player> {
    getHandlerList(): HandlerList
    getMotd(): string
    setMotd(arg0: string): void
    getMaxPlayers(): number
    setMaxPlayers(arg0: number): void
    getHostname(): string
    getNumPlayers(): number
    setServerIcon(arg0: CachedServerIcon): void
    iterator(): Iterator<Player>
    getAddress(): InetAddress
    getHandlers(): HandlerList
    shouldSendChatPreviews(): boolean
}

declare class VehicleCreateEvent extends VehicleEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ResourceBundle {
    containsKey(arg0: string): boolean
    keySet(): Set<string>
    getObject(arg0: string): Object
    getStringArray(arg0: string): string[]
    getString(arg0: string): string
    getLocale(): Locale
    getKeys(): Enumeration<string>
    getBaseBundleName(): string
    getBundle(arg0: string, arg1: Locale): ResourceBundle
    getBundle(arg0: string, arg1: ResourceBundleControl): ResourceBundle
    getBundle(arg0: string): ResourceBundle
    getBundle(arg0: string, arg1: Locale, arg2: ClassLoader): ResourceBundle
    getBundle(arg0: string, arg1: Locale, arg2: ClassLoader, arg3: ResourceBundleControl): ResourceBundle
    getBundle(arg0: string, arg1: Locale, arg2: ResourceBundleControl): ResourceBundle
    getBundle(arg0: string, arg1: Locale, arg2: Module): ResourceBundle
    getBundle(arg0: string, arg1: Module): ResourceBundle
    clearCache(): void
    clearCache(arg0: ClassLoader): void
}

interface Server implements PluginMessageRecipient {
    readonly BROADCAST_CHANNEL_ADMINISTRATIVE: string
    readonly BROADCAST_CHANNEL_USERS: string
    getOfflinePlayer(arg0: UUID): OfflinePlayer
    getOfflinePlayer(arg0: string): OfflinePlayer
    getScheduler(): BukkitScheduler
    getPluginManager(): PluginManager
    getTicksPerWaterUndergroundCreatureSpawns(): number
    getWaterUndergroundCreatureSpawnLimit(): number
    getTicksPerWaterAmbientSpawns(): number
    getMaxChainedNeighborUpdates(): number
    getPlayer(arg0: UUID): Player
    getPlayer(arg0: string): Player
    isHardcore(): boolean
    getTags(arg0: string, arg1: Class<T>): Iterable<Tag<T>>
    getIPBans(): Set<string>
    banIP(arg0: string): void
    banIP(arg0: InetAddress): void
    reloadData(): void
    getBanList(arg0: BanListType): T
    getMotd(): string
    addRecipe(arg0: Recipe): boolean
    getWorld(arg0: string): World
    getWorld(arg0: UUID): World
    craftItem(arg0: ItemStack[], arg1: World, arg2: Player): ItemStack
    setMotd(arg0: string): void
    getIp(): string
    getBossBar(arg0: NamespacedKey): KeyedBossBar
    unbanIP(arg0: string): void
    unbanIP(arg0: InetAddress): void
    getHelpMap(): HelpMap
    getRecipe(arg0: NamespacedKey): Recipe
    spigot(): ServerSpigot
    getWorldContainer(): File
    createWorld(arg0: WorldCreator): World
    removeRecipe(arg0: NamespacedKey): boolean
    recipeIterator(): Iterator<Recipe>
    unloadWorld(arg0: World, arg1: boolean): boolean
    unloadWorld(arg0: string, arg1: boolean): boolean
    savePlayers(): void
    setSpawnRadius(arg0: number): void
    getCraftingRecipe(arg0: ItemStack[], arg1: World): Recipe
    getOperators(): Set<OfflinePlayer>
    getDefaultGameMode(): GameMode
    dispatchCommand(arg0: CommandSender, arg1: string): boolean
    getServicesManager(): ServicesManager
    getRecipesFor(arg0: ItemStack): List<Recipe>
    clearRecipes(): void
    getSpawnRadius(): number
    resetRecipes(): void
    createWorldBorder(): WorldBorder
    getPluginCommand(arg0: string): PluginCommand
    getCommandAliases(): Map<string, string[]>
    getOnlineMode(): boolean
    setDefaultGameMode(arg0: GameMode): void
    getAllowFlight(): boolean
    getBannedPlayers(): Set<OfflinePlayer>
    getConsoleSender(): ConsoleCommandSender
    createExplorerMap(arg0: World, arg1: Location, arg2: StructureType, arg3: number, arg4: boolean): ItemStack
    createExplorerMap(arg0: World, arg1: Location, arg2: StructureType): ItemStack
    getBukkitVersion(): string
    getAllowNether(): boolean
    getResourcePack(): string
    setWhitelist(arg0: boolean): void
    broadcastMessage(arg0: string): number
    getMaxPlayers(): number
    setMaxPlayers(arg0: number): void
    hasWhitelist(): boolean
    getMaxWorldSize(): number
    getOnlinePlayers(): Collection<Player>
    getUpdateFolder(): string
    getTicksPerSpawns(arg0: SpawnCategory): number
    getWorldType(): string
    getAllowEnd(): boolean
    reloadWhitelist(): void
    getViewDistance(): number
    getPlayerExact(arg0: string): Player
    matchPlayer(arg0: string): List<Player>
    getDataPackManager(): DataPackManager
    getWarningState(): WarningWarningState
    createChunkData(arg0: World): ChunkGeneratorChunkData
    getMessenger(): Messenger
    getAdvancement(arg0: NamespacedKey): Advancement
    getBossBars(): Iterator<KeyedBossBar>
    getOfflinePlayers(): OfflinePlayer[]
    createInventory(arg0: InventoryHolder, arg1: number): Inventory
    createInventory(arg0: InventoryHolder, arg1: InventoryType, arg2: string): Inventory
    createInventory(arg0: InventoryHolder, arg1: InventoryType): Inventory
    createInventory(arg0: InventoryHolder, arg1: number, arg2: string): Inventory
    createMerchant(arg0: string): Merchant
    getServerIcon(): CachedServerIcon
    setIdleTimeout(arg0: number): void
    getLootTable(arg0: NamespacedKey): LootTable
    getSpawnLimit(arg0: SpawnCategory): number
    getIdleTimeout(): number
    createBossBar(arg0: NamespacedKey, arg1: string, arg2: BarColor, arg3: BarStyle, arg4: BarFlag[]): KeyedBossBar
    createBossBar(arg0: string, arg1: BarColor, arg2: BarStyle, arg3: BarFlag[]): BossBar
    isPrimaryThread(): boolean
    getShutdownMessage(): string
    removeBossBar(arg0: NamespacedKey): boolean
    loadServerIcon(arg0: File): CachedServerIcon
    loadServerIcon(arg0: BufferedImage): CachedServerIcon
    selectEntities(arg0: CommandSender, arg1: string): List<Entity>
    getItemFactory(): ItemFactory
    createBlockData(arg0: Material, arg1: Consumer<BlockData>): BlockData
    createBlockData(arg0: Material, arg1: string): BlockData
    createBlockData(arg0: Material): BlockData
    createBlockData(arg0: string): BlockData
    getRegistry(arg0: Class<T>): Registry<T>
    getWorlds(): List<World>
    getName(): string
    shutdown(): void
    getUnsafe(): UnsafeValues
    getLogger(): Logger
    getPort(): number
    getMap(arg0: number): MapView
    getTag(arg0: string, arg1: NamespacedKey, arg2: Class<T>): Tag<T>
    createMap(arg0: World): MapView
    broadcast(arg0: string, arg1: string): number
    reload(): void
    getVersion(): string
    getResourcePackHash(): string
    getUpdateFolderFile(): File
    getInitialEnabledPacks(): List<string>
    getResourcePackPrompt(): string
    isResourcePackRequired(): boolean
    isWhitelistEnforced(): boolean
    getSimulationDistance(): number
    getGenerateStructures(): boolean
    getInitialDisabledPacks(): List<string>
    setWhitelistEnforced(arg0: boolean): void
    getWhitelistedPlayers(): Set<OfflinePlayer>
    getScoreboardCriteria(arg0: string): Criteria
    getConnectionThrottle(): number
    getScoreboardManager(): ScoreboardManager
    getTicksPerWaterSpawns(): number
    getAmbientSpawnLimit(): number
    getMonsterSpawnLimit(): number
    createPlayerProfile(arg0: UUID): PlayerProfile
    createPlayerProfile(arg0: string): PlayerProfile
    createPlayerProfile(arg0: UUID, arg1: string): PlayerProfile
    getWaterAnimalSpawnLimit(): number
    getTicksPerAmbientSpawns(): number
    getTicksPerMonsterSpawns(): number
    getTicksPerAnimalSpawns(): number
    getAnimalSpawnLimit(): number
    isEnforcingSecureProfiles(): boolean
    shouldSendChatPreviews(): boolean
    getStructureManager(): StructureManager
    getHideOnlinePlayers(): boolean
    advancementIterator(): Iterator<Advancement>
    getWaterAmbientSpawnLimit(): number
    getEntity(arg0: UUID): Entity
}

interface ServicesManager {
    unregisterAll(arg0: Plugin): void
    getRegistrations(arg0: Plugin): List<RegisteredServiceProvider<any>>
    getRegistrations(arg0: Class<T>): Collection<RegisteredServiceProvider<T>>
    getKnownServices(): Collection<Class<any>>
    isProvidedFor(arg0: Class<T>): boolean
    getRegistration(arg0: Class<T>): RegisteredServiceProvider<T>
    load(arg0: Class<T>): T
    register(arg0: Class<T>, arg1: T, arg2: Plugin, arg3: ServicePriority): void
    unregister(arg0: Object): void
    unregister(arg0: Class<any>, arg1: Object): void
}

interface Vehicle implements Entity {
    getVelocity(): Vector
    setVelocity(arg0: Vector): void
}

declare class URLConnection {
    getUseCaches(): boolean
    getContentLengthLong(): number
    guessContentTypeFromStream(arg0: InputStream): string
    guessContentTypeFromName(arg0: string): string
    getHeaderField(arg0: number): string
    getHeaderField(arg0: string): string
    getRequestProperty(arg0: string): string
    addRequestProperty(arg0: string, arg1: string): void
    getRequestProperties(): Map<string, List<string>>
    setAllowUserInteraction(arg0: boolean): void
    getAllowUserInteraction(): boolean
    setIfModifiedSince(arg0: number): void
    setDefaultUseCaches(arg0: boolean): void
    setDefaultUseCaches(arg0: string, arg1: boolean): void
    getDefaultUseCaches(arg0: string): boolean
    getDefaultUseCaches(): boolean
    getContentType(): string
    getHeaderFieldLong(arg0: string, arg1: number): number
    getHeaderFieldDate(arg0: string, arg1: number): number
    getFileNameMap(): FileNameMap
    setFileNameMap(arg0: FileNameMap): void
    setConnectTimeout(arg0: number): void
    getConnectTimeout(): number
    setReadTimeout(arg0: number): void
    getReadTimeout(): number
    getContentEncoding(): string
    getExpiration(): number
    getHeaderFields(): Map<string, List<string>>
    getHeaderFieldInt(arg0: string, arg1: number): number
    getHeaderFieldKey(arg0: number): string
    getOutputStream(): OutputStream
    setDoInput(arg0: boolean): void
    getDoInput(): boolean
    setDoOutput(arg0: boolean): void
    getDoOutput(): boolean
    setDefaultAllowUserInteraction(arg0: boolean): void
    getDefaultAllowUserInteraction(): boolean
    getIfModifiedSince(): number
    setDefaultRequestProperty(arg0: string, arg1: string): void
    getDefaultRequestProperty(arg0: string): string
    setContentHandlerFactory(arg0: ContentHandlerFactory): void
    toString(): string
    connect(): void
    getInputStream(): InputStream
    getContent(): Object
    getContent(arg0: Class[]): Object
    getPermission(): Permission
    getDate(): number
    setUseCaches(arg0: boolean): void
    getLastModified(): number
    getContentLength(): number
    getURL(): URL
    setRequestProperty(arg0: string, arg1: string): void
}

declare class PlayerInteractEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    useItemInHand(): EventResult
    getBlockFace(): BlockFace
    getMaterial(): Material
    useInteractedBlock(): EventResult
    getAction(): Action
    setUseInteractedBlock(arg0: EventResult): void
    setUseItemInHand(arg0: EventResult): void
    isBlockInHand(): boolean
    getClickedPosition(): Vector
    getClickedBlock(): Block
    hasBlock(): boolean
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
    hasItem(): boolean
}

declare class ChunkLoadLevel extends Enum<ChunkLoadLevel> {
    readonly INACCESSIBLE: ChunkLoadLevel
    readonly BORDER: ChunkLoadLevel
    readonly TICKING: ChunkLoadLevel
    readonly ENTITY_TICKING: ChunkLoadLevel
    readonly UNLOADED: ChunkLoadLevel
    values(): ChunkLoadLevel[]
    valueOf(arg0: string): ChunkLoadLevel
}

declare class RaidSpawnWaveEvent extends RaidEvent {
    getHandlerList(): HandlerList
    getRaiders(): List<Raider>
    getPatrolLeader(): Raider
    getHandlers(): HandlerList
}

interface Raid {
    getStatus(): RaidRaidStatus
    getRaiders(): List<Raider>
    getHeroes(): Set<UUID>
    getTotalWaves(): number
    getTotalHealth(): number
    getBadOmenLevel(): number
    getActiveTicks(): number
    getSpawnedGroups(): number
    setBadOmenLevel(arg0: number): void
    getTotalGroups(): number
    getLocation(): Location
    isStarted(): boolean
}

interface LootTable implements Keyed {
    fillInventory(arg0: Inventory, arg1: Random, arg2: LootContext): void
    populateLoot(arg0: Random, arg1: LootContext): Collection<ItemStack>
}

declare class InventoryTypeSlotType extends Enum<InventoryTypeSlotType> {
    readonly RESULT: InventoryTypeSlotType
    readonly CRAFTING: InventoryTypeSlotType
    readonly ARMOR: InventoryTypeSlotType
    readonly CONTAINER: InventoryTypeSlotType
    readonly QUICKBAR: InventoryTypeSlotType
    readonly OUTSIDE: InventoryTypeSlotType
    readonly FUEL: InventoryTypeSlotType
    values(): InventoryTypeSlotType[]
    valueOf(arg0: string): InventoryTypeSlotType
}

interface Criteria {
    readonly DUMMY: Criteria
    readonly TRIGGER: Criteria
    readonly DEATH_COUNT: Criteria
    readonly PLAYER_KILL_COUNT: Criteria
    readonly TOTAL_KILL_COUNT: Criteria
    readonly HEALTH: Criteria
    readonly FOOD: Criteria
    readonly AIR: Criteria
    readonly ARMOR: Criteria
    readonly XP: Criteria
    readonly LEVEL: Criteria
    readonly TEAM_KILL_BLACK: Criteria
    readonly TEAM_KILL_DARK_BLUE: Criteria
    readonly TEAM_KILL_DARK_GREEN: Criteria
    readonly TEAM_KILL_DARK_AQUA: Criteria
    readonly TEAM_KILL_DARK_RED: Criteria
    readonly TEAM_KILL_DARK_PURPLE: Criteria
    readonly TEAM_KILL_GOLD: Criteria
    readonly TEAM_KILL_GRAY: Criteria
    readonly TEAM_KILL_DARK_GRAY: Criteria
    readonly TEAM_KILL_BLUE: Criteria
    readonly TEAM_KILL_GREEN: Criteria
    readonly TEAM_KILL_AQUA: Criteria
    readonly TEAM_KILL_RED: Criteria
    readonly TEAM_KILL_LIGHT_PURPLE: Criteria
    readonly TEAM_KILL_YELLOW: Criteria
    readonly TEAM_KILL_WHITE: Criteria
    readonly KILLED_BY_TEAM_BLACK: Criteria
    readonly KILLED_BY_TEAM_DARK_BLUE: Criteria
    readonly KILLED_BY_TEAM_DARK_GREEN: Criteria
    readonly KILLED_BY_TEAM_DARK_AQUA: Criteria
    readonly KILLED_BY_TEAM_DARK_RED: Criteria
    readonly KILLED_BY_TEAM_DARK_PURPLE: Criteria
    readonly KILLED_BY_TEAM_GOLD: Criteria
    readonly KILLED_BY_TEAM_GRAY: Criteria
    readonly KILLED_BY_TEAM_DARK_GRAY: Criteria
    readonly KILLED_BY_TEAM_BLUE: Criteria
    readonly KILLED_BY_TEAM_GREEN: Criteria
    readonly KILLED_BY_TEAM_AQUA: Criteria
    readonly KILLED_BY_TEAM_RED: Criteria
    readonly KILLED_BY_TEAM_LIGHT_PURPLE: Criteria
    readonly KILLED_BY_TEAM_YELLOW: Criteria
    readonly KILLED_BY_TEAM_WHITE: Criteria
    readonly $SWITCH_TABLE$org$bukkit$Statistic: number[]
    statistic(arg0: Statistic, arg1: EntityType): Criteria
    statistic(arg0: Statistic): Criteria
    statistic(arg0: Statistic, arg1: Material): Criteria
    getDefaultRenderType(): RenderType
    $SWITCH_TABLE$org$bukkit$Statistic(): number[]
    getName(): string
    create(arg0: string): Criteria
    isReadOnly(): boolean
}

declare class BlockCookEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getResult(): ItemStack
    setResult(arg0: ItemStack): void
    getSource(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerToggleSprintEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isSprinting(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface TileObserver {
    tileUpdate(arg0: WritableRenderedImage, arg1: number, arg2: number, arg3: boolean): void
}

declare class BellResonateEvent extends BlockEvent {
    getHandlerList(): HandlerList
    getResonatedEntities(): List<LivingEntity>
    getHandlers(): HandlerList
}

declare class Vector implements Cloneable, ConfigurationSerializable {
    serialize(): Map<string, Object>
    midpoint(arg0: Vector): Vector
    angle(arg0: Vector): number
    lengthSquared(): number
    distanceSquared(arg0: Vector): number
    getY(): number
    getZ(): number
    getX(): number
    checkFinite(): void
    setX(arg0: number): Vector
    setX(arg0: number): Vector
    setX(arg0: number): Vector
    setZ(arg0: number): Vector
    setZ(arg0: number): Vector
    setZ(arg0: number): Vector
    setY(arg0: number): Vector
    setY(arg0: number): Vector
    setY(arg0: number): Vector
    rotateAroundNonUnitAxis(arg0: Vector, arg1: number): Vector
    isInAABB(arg0: Vector, arg1: Vector): boolean
    toVector3f(): Vector3f
    toLocation(arg0: World): Location
    toLocation(arg0: World, arg1: number, arg2: number): Location
    toVector3d(): Vector3d
    getEpsilon(): number
    isInSphere(arg0: Vector, arg1: number): boolean
    toVector3i(): Vector3i
    toVector3i(arg0: number): Vector3i
    fromJOML(arg0: Vector3f): Vector
    fromJOML(arg0: Vector3d): Vector
    fromJOML(arg0: Vector3i): Vector
    getCrossProduct(arg0: Vector): Vector
    crossProduct(arg0: Vector): Vector
    rotateAroundX(arg0: number): Vector
    getMidpoint(arg0: Vector): Vector
    rotateAroundAxis(arg0: Vector, arg1: number): Vector
    toBlockVector(): BlockVector
    rotateAroundZ(arg0: number): Vector
    rotateAroundY(arg0: number): Vector
    getBlockZ(): number
    getBlockX(): number
    getBlockY(): number
    getRandom(): Vector
    equals(arg0: Object): boolean
    length(): number
    toString(): string
    hashCode(): number
    clone(): Object
    clone(): Vector
    add(arg0: Vector): Vector
    dot(arg0: Vector): number
    copy(arg0: Vector): Vector
    zero(): Vector
    distance(arg0: Vector): number
    multiply(arg0: number): Vector
    multiply(arg0: Vector): Vector
    multiply(arg0: number): Vector
    multiply(arg0: number): Vector
    normalize(): Vector
    subtract(arg0: Vector): Vector
    isZero(): boolean
    divide(arg0: Vector): Vector
    getMaximum(arg0: Vector, arg1: Vector): Vector
    getMinimum(arg0: Vector, arg1: Vector): Vector
    isNormalized(): boolean
    deserialize(arg0: Map<string, Object>): Vector
}

interface FileFilter {
    accept(arg0: File): boolean
}

declare class FontMetrics implements Serializable {
    getHeight(): number
    getLeading(): number
    getFontRenderContext(): FontRenderContext
    getAscent(): number
    getDescent(): number
    getMaxDescent(): number
    getWidths(): number[]
    charsWidth(arg0: char[], arg1: number, arg2: number): number
    stringWidth(arg0: string): number
    charWidth(arg0: char): number
    charWidth(arg0: number): number
    hasUniformLineMetrics(): boolean
    getLineMetrics(arg0: string, arg1: Graphics): LineMetrics
    getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: Graphics): LineMetrics
    getLineMetrics(arg0: CharacterIterator, arg1: number, arg2: number, arg3: Graphics): LineMetrics
    getLineMetrics(arg0: char[], arg1: number, arg2: number, arg3: Graphics): LineMetrics
    getStringBounds(arg0: CharacterIterator, arg1: number, arg2: number, arg3: Graphics): Rectangle2D
    getStringBounds(arg0: string, arg1: Graphics): Rectangle2D
    getStringBounds(arg0: char[], arg1: number, arg2: number, arg3: Graphics): Rectangle2D
    getStringBounds(arg0: string, arg1: number, arg2: number, arg3: Graphics): Rectangle2D
    getMaxCharBounds(arg0: Graphics): Rectangle2D
    getMaxAscent(): number
    getMaxDecent(): number
    getMaxAdvance(): number
    bytesWidth(arg0: byte[], arg1: number, arg2: number): number
    getFont(): Font
    toString(): string
}

declare class ChronoUnit extends Enum<ChronoUnit> implements TemporalUnit {
    readonly NANOS: ChronoUnit
    readonly MICROS: ChronoUnit
    readonly MILLIS: ChronoUnit
    readonly SECONDS: ChronoUnit
    readonly MINUTES: ChronoUnit
    readonly HOURS: ChronoUnit
    readonly HALF_DAYS: ChronoUnit
    readonly DAYS: ChronoUnit
    readonly WEEKS: ChronoUnit
    readonly MONTHS: ChronoUnit
    readonly YEARS: ChronoUnit
    readonly DECADES: ChronoUnit
    readonly CENTURIES: ChronoUnit
    readonly MILLENNIA: ChronoUnit
    readonly ERAS: ChronoUnit
    readonly FOREVER: ChronoUnit
    toString(): string
    values(): ChronoUnit[]
    valueOf(arg0: string): ChronoUnit
    between(arg0: Temporal, arg1: Temporal): number
    isDurationEstimated(): boolean
    getDuration(): Duration
    addTo(arg0: R, arg1: number): R
    isSupportedBy(arg0: Temporal): boolean
    isTimeBased(): boolean
    isDateBased(): boolean
}

interface BiomeParameterPoint {
    getDepth(): number
    getMaxDepth(): number
    getHumidity(): number
    getTemperature(): number
    getErosion(): number
    getMinContinentalness(): number
    getMaxContinentalness(): number
    getMaxHumidity(): number
    getMinDepth(): number
    getMinWeirdness(): number
    getWeirdness(): number
    getMinHumidity(): number
    getContinentalness(): number
    getMaxWeirdness(): number
    getMaxErosion(): number
    getMaxTemperature(): number
    getMinTemperature(): number
    getMinErosion(): number
}

declare class SpawnChangeEvent extends WorldEvent {
    getHandlerList(): HandlerList
    getPreviousLocation(): Location
    getHandlers(): HandlerList
}

declare class PlayerItemBreakEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getBrokenItem(): ItemStack
    getHandlers(): HandlerList
}

declare class EntityDropItemEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getItemDrop(): Item
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityPortalEnterEvent extends EntityEvent {
    getHandlerList(): HandlerList
    getLocation(): Location
    getHandlers(): HandlerList
}

declare class DyeColor extends Enum<DyeColor> {
    readonly WHITE: DyeColor
    readonly ORANGE: DyeColor
    readonly MAGENTA: DyeColor
    readonly LIGHT_BLUE: DyeColor
    readonly YELLOW: DyeColor
    readonly LIME: DyeColor
    readonly PINK: DyeColor
    readonly GRAY: DyeColor
    readonly LIGHT_GRAY: DyeColor
    readonly CYAN: DyeColor
    readonly PURPLE: DyeColor
    readonly BLUE: DyeColor
    readonly BROWN: DyeColor
    readonly GREEN: DyeColor
    readonly RED: DyeColor
    readonly BLACK: DyeColor
    getColor(): Color
    getWoolData(): byte
    getByWoolData(arg0: byte): DyeColor
    legacyValueOf(arg0: string): DyeColor
    getFireworkColor(): Color
    getByDyeData(arg0: byte): DyeColor
    getByFireworkColor(arg0: Color): DyeColor
    getByColor(arg0: Color): DyeColor
    getDyeData(): byte
    values(): DyeColor[]
    valueOf(arg0: string): DyeColor
}

declare class BrewingStandFuelEvent extends BlockEvent implements Cancellable {
    setFuelPower(arg0: number): void
    setConsuming(arg0: boolean): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getFuelPower(): number
    isConsuming(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
    getFuel(): ItemStack
}

declare class EnderDragonChangePhaseEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setNewPhase(arg0: EnderDragonPhase): void
    getCurrentPhase(): EnderDragonPhase
    getNewPhase(): EnderDragonPhase
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): EnderDragon
    getEntity(): Entity
}

interface Raider implements Monster {
    getWave(): number
    setWave(arg0: number): void
    getRaid(): Raid
    setRaid(arg0: Raid): void
    isCanJoinRaid(): boolean
    getPatrolTarget(): Block
    setPatrolLeader(arg0: boolean): void
    setCanJoinRaid(arg0: boolean): void
    setCelebrating(arg0: boolean): void
    setPatrolTarget(arg0: Block): void
    isPatrolLeader(): boolean
    isCelebrating(): boolean
    setTicksOutsideRaid(arg0: number): void
    getTicksOutsideRaid(): number
    getCelebrationSound(): Sound
}

declare class Enchantment implements Keyed {
    readonly PROTECTION_ENVIRONMENTAL: Enchantment
    readonly PROTECTION_FIRE: Enchantment
    readonly PROTECTION_FALL: Enchantment
    readonly PROTECTION_EXPLOSIONS: Enchantment
    readonly PROTECTION_PROJECTILE: Enchantment
    readonly OXYGEN: Enchantment
    readonly WATER_WORKER: Enchantment
    readonly THORNS: Enchantment
    readonly DEPTH_STRIDER: Enchantment
    readonly FROST_WALKER: Enchantment
    readonly BINDING_CURSE: Enchantment
    readonly DAMAGE_ALL: Enchantment
    readonly DAMAGE_UNDEAD: Enchantment
    readonly DAMAGE_ARTHROPODS: Enchantment
    readonly KNOCKBACK: Enchantment
    readonly FIRE_ASPECT: Enchantment
    readonly LOOT_BONUS_MOBS: Enchantment
    readonly SWEEPING_EDGE: Enchantment
    readonly DIG_SPEED: Enchantment
    readonly SILK_TOUCH: Enchantment
    readonly DURABILITY: Enchantment
    readonly LOOT_BONUS_BLOCKS: Enchantment
    readonly ARROW_DAMAGE: Enchantment
    readonly ARROW_KNOCKBACK: Enchantment
    readonly ARROW_FIRE: Enchantment
    readonly ARROW_INFINITE: Enchantment
    readonly LUCK: Enchantment
    readonly LURE: Enchantment
    readonly LOYALTY: Enchantment
    readonly IMPALING: Enchantment
    readonly RIPTIDE: Enchantment
    readonly CHANNELING: Enchantment
    readonly MULTISHOT: Enchantment
    readonly QUICK_CHARGE: Enchantment
    readonly PIERCING: Enchantment
    readonly MENDING: Enchantment
    readonly VANISHING_CURSE: Enchantment
    readonly SOUL_SPEED: Enchantment
    readonly SWIFT_SNEAK: Enchantment
    getMaxLevel(): number
    conflictsWith(arg0: Enchantment): boolean
    getItemTarget(): EnchantmentTarget
    stopAcceptingRegistrations(): void
    getStartLevel(): number
    canEnchantItem(arg0: ItemStack): boolean
    getByKey(arg0: NamespacedKey): Enchantment
    registerEnchantment(arg0: Enchantment): void
    isAcceptingRegistrations(): boolean
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    values(): Enchantment[]
    hashCode(): number
    getKey(): NamespacedKey
    getByName(arg0: string): Enchantment
    isTreasure(): boolean
    isCursed(): boolean
}

interface HelpMap {
    registerHelpTopicFactory(arg0: Class<any>, arg1: HelpTopicFactory<any>): void
    addTopic(arg0: HelpTopic): void
    getIgnoredPlugins(): List<string>
    getHelpTopic(arg0: string): HelpTopic
    getHelpTopics(): Collection<HelpTopic>
    clear(): void
}

declare class PlayerBedEnterEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBed(): Block
    useBed(): EventResult
    getBedEnterResult(): PlayerBedEnterEventBedEnterResult
    setUseBed(arg0: EventResult): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class WorldEnvironment extends Enum<WorldEnvironment> {
    readonly NORMAL: WorldEnvironment
    readonly NETHER: WorldEnvironment
    readonly THE_END: WorldEnvironment
    readonly CUSTOM: WorldEnvironment
    values(): WorldEnvironment[]
    valueOf(arg0: string): WorldEnvironment
    getId(): number
    getEnvironment(arg0: number): WorldEnvironment
}

declare class Point extends Point2D implements Serializable {
    x: number
    y: number
    setLocation(arg0: number, arg1: number): void
    setLocation(arg0: number, arg1: number): void
    setLocation(arg0: Point): void
    translate(arg0: number, arg1: number): void
    getY(): number
    getX(): number
    equals(arg0: Object): boolean
    toString(): string
    getLocation(): Point
    move(arg0: number, arg1: number): void
}

declare class PlayerFishEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getExpToDrop(): number
    setExpToDrop(arg0: number): void
    getHook(): FishHook
    getCaught(): Entity
    getState(): PlayerFishEventState
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerSignOpenEventCause extends Enum<PlayerSignOpenEventCause> {
    readonly INTERACT: PlayerSignOpenEventCause
    readonly PLACE: PlayerSignOpenEventCause
    readonly PLUGIN: PlayerSignOpenEventCause
    readonly UNKNOWN: PlayerSignOpenEventCause
    values(): PlayerSignOpenEventCause[]
    valueOf(arg0: string): PlayerSignOpenEventCause
}

declare class CreeperPowerEventPowerCause extends Enum<CreeperPowerEventPowerCause> {
    readonly LIGHTNING: CreeperPowerEventPowerCause
    readonly SET_ON: CreeperPowerEventPowerCause
    readonly SET_OFF: CreeperPowerEventPowerCause
    values(): CreeperPowerEventPowerCause[]
    valueOf(arg0: string): CreeperPowerEventPowerCause
}

declare class Biome extends Enum<Biome> implements Keyed {
    readonly OCEAN: Biome
    readonly PLAINS: Biome
    readonly DESERT: Biome
    readonly WINDSWEPT_HILLS: Biome
    readonly FOREST: Biome
    readonly TAIGA: Biome
    readonly SWAMP: Biome
    readonly MANGROVE_SWAMP: Biome
    readonly RIVER: Biome
    readonly NETHER_WASTES: Biome
    readonly THE_END: Biome
    readonly FROZEN_OCEAN: Biome
    readonly FROZEN_RIVER: Biome
    readonly SNOWY_PLAINS: Biome
    readonly MUSHROOM_FIELDS: Biome
    readonly BEACH: Biome
    readonly JUNGLE: Biome
    readonly SPARSE_JUNGLE: Biome
    readonly DEEP_OCEAN: Biome
    readonly STONY_SHORE: Biome
    readonly SNOWY_BEACH: Biome
    readonly BIRCH_FOREST: Biome
    readonly DARK_FOREST: Biome
    readonly SNOWY_TAIGA: Biome
    readonly OLD_GROWTH_PINE_TAIGA: Biome
    readonly WINDSWEPT_FOREST: Biome
    readonly SAVANNA: Biome
    readonly SAVANNA_PLATEAU: Biome
    readonly BADLANDS: Biome
    readonly WOODED_BADLANDS: Biome
    readonly SMALL_END_ISLANDS: Biome
    readonly END_MIDLANDS: Biome
    readonly END_HIGHLANDS: Biome
    readonly END_BARRENS: Biome
    readonly WARM_OCEAN: Biome
    readonly LUKEWARM_OCEAN: Biome
    readonly COLD_OCEAN: Biome
    readonly DEEP_LUKEWARM_OCEAN: Biome
    readonly DEEP_COLD_OCEAN: Biome
    readonly DEEP_FROZEN_OCEAN: Biome
    readonly THE_VOID: Biome
    readonly SUNFLOWER_PLAINS: Biome
    readonly WINDSWEPT_GRAVELLY_HILLS: Biome
    readonly FLOWER_FOREST: Biome
    readonly ICE_SPIKES: Biome
    readonly OLD_GROWTH_BIRCH_FOREST: Biome
    readonly OLD_GROWTH_SPRUCE_TAIGA: Biome
    readonly WINDSWEPT_SAVANNA: Biome
    readonly ERODED_BADLANDS: Biome
    readonly BAMBOO_JUNGLE: Biome
    readonly SOUL_SAND_VALLEY: Biome
    readonly CRIMSON_FOREST: Biome
    readonly WARPED_FOREST: Biome
    readonly BASALT_DELTAS: Biome
    readonly DRIPSTONE_CAVES: Biome
    readonly LUSH_CAVES: Biome
    readonly DEEP_DARK: Biome
    readonly MEADOW: Biome
    readonly GROVE: Biome
    readonly SNOWY_SLOPES: Biome
    readonly FROZEN_PEAKS: Biome
    readonly JAGGED_PEAKS: Biome
    readonly STONY_PEAKS: Biome
    readonly CHERRY_GROVE: Biome
    readonly CUSTOM: Biome
    values(): Biome[]
    valueOf(arg0: string): Biome
    getKey(): NamespacedKey
}

declare class Formatter {
    formatMessage(arg0: LogRecord): string
    getHead(arg0: Handler): string
    getTail(arg0: Handler): string
    format(arg0: LogRecord): string
}

interface ImageObserver {
    readonly WIDTH: number
    readonly HEIGHT: number
    readonly PROPERTIES: number
    readonly SOMEBITS: number
    readonly FRAMEBITS: number
    readonly ALLBITS: number
    readonly ERROR: number
    readonly ABORT: number
    imageUpdate(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean
}

interface AreaEffectCloud implements Entity {
    getColor(): Color
    setSource(arg0: ProjectileSource): void
    getRadius(): number
    setBasePotionData(arg0: PotionData): void
    setRadius(arg0: number): void
    getBasePotionData(): PotionData
    clearCustomEffects(): void
    getCustomEffects(): List<PotionEffect>
    hasCustomEffects(): boolean
    addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean
    hasCustomEffect(arg0: PotionEffectType): boolean
    removeCustomEffect(arg0: PotionEffectType): boolean
    setRadiusOnUse(arg0: number): void
    setWaitTime(arg0: number): void
    getWaitTime(): number
    getDurationOnUse(): number
    getRadiusPerTick(): number
    setParticle(arg0: Particle, arg1: T): void
    setParticle(arg0: Particle): void
    setDurationOnUse(arg0: number): void
    getParticle(): Particle
    getRadiusOnUse(): number
    setRadiusPerTick(arg0: number): void
    getReapplicationDelay(): number
    setReapplicationDelay(arg0: number): void
    getSource(): ProjectileSource
    getDuration(): number
    setColor(arg0: Color): void
    setDuration(arg0: number): void
}

declare class EnderDragonPhase extends Enum<EnderDragonPhase> {
    readonly CIRCLING: EnderDragonPhase
    readonly STRAFING: EnderDragonPhase
    readonly FLY_TO_PORTAL: EnderDragonPhase
    readonly LAND_ON_PORTAL: EnderDragonPhase
    readonly LEAVE_PORTAL: EnderDragonPhase
    readonly BREATH_ATTACK: EnderDragonPhase
    readonly SEARCH_FOR_BREATH_ATTACK_TARGET: EnderDragonPhase
    readonly ROAR_BEFORE_ATTACK: EnderDragonPhase
    readonly CHARGE_PLAYER: EnderDragonPhase
    readonly DYING: EnderDragonPhase
    readonly HOVER: EnderDragonPhase
    values(): EnderDragonPhase[]
    valueOf(arg0: string): EnderDragonPhase
}

interface Block implements Metadatable, Translatable {
    getRelative(arg0: number, arg1: number, arg2: number): Block
    getRelative(arg0: BlockFace, arg1: number): Block
    getRelative(arg0: BlockFace): Block
    getY(): number
    getZ(): number
    getX(): number
    getBoundingBox(): BoundingBox
    rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult
    getDrops(): Collection<ItemStack>
    getDrops(arg0: ItemStack): Collection<ItemStack>
    getDrops(arg0: ItemStack, arg1: Entity): Collection<ItemStack>
    canPlace(arg0: BlockData): boolean
    getChunk(): Chunk
    getBiome(): Biome
    getFace(arg0: Block): BlockFace
    setBiome(arg0: Biome): void
    isLiquid(): boolean
    isPassable(): boolean
    getBlockData(): BlockData
    setBlockData(arg0: BlockData, arg1: boolean): void
    setBlockData(arg0: BlockData): void
    isBlockPowered(): boolean
    getCollisionShape(): VoxelShape
    getLightFromSky(): byte
    breakNaturally(): boolean
    breakNaturally(arg0: ItemStack): boolean
    getBlockPower(): number
    getBlockPower(arg0: BlockFace): number
    getBreakSpeed(arg0: Player): number
    getHumidity(): number
    isBlockFacePowered(arg0: BlockFace): boolean
    getLightFromBlocks(): byte
    getTemperature(): number
    getLightLevel(): byte
    applyBoneMeal(arg0: BlockFace): boolean
    isPreferredTool(arg0: ItemStack): boolean
    isBlockFaceIndirectlyPowered(arg0: BlockFace): boolean
    getWorld(): World
    isEmpty(): boolean
    getLocation(): Location
    getLocation(arg0: Location): Location
    getState(): BlockState
    getType(): Material
    getData(): byte
    setType(arg0: Material): void
    setType(arg0: Material, arg1: boolean): void
    isBlockIndirectlyPowered(): boolean
    getPistonMoveReaction(): PistonMoveReaction
}

interface Sheep implements Animals, Colorable {
    isSheared(): boolean
    setSheared(arg0: boolean): void
}

declare class RaidStopEventReason extends Enum<RaidStopEventReason> {
    readonly PEACE: RaidStopEventReason
    readonly TIMEOUT: RaidStopEventReason
    readonly FINISHED: RaidStopEventReason
    readonly UNSPAWNABLE: RaidStopEventReason
    readonly NOT_IN_VILLAGE: RaidStopEventReason
    values(): RaidStopEventReason[]
    valueOf(arg0: string): RaidStopEventReason
}

declare class LocalTime implements Temporal, TemporalAdjuster, Comparable<LocalTime>, Serializable {
    readonly MIN: LocalTime
    readonly MAX: LocalTime
    readonly MIDNIGHT: LocalTime
    readonly NOON: LocalTime
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: Object): number
    compareTo(arg0: LocalTime): number
    getLong(arg0: TemporalField): number
    format(arg0: DateTimeFormatter): string
    of(arg0: number, arg1: number, arg2: number): LocalTime
    of(arg0: number, arg1: number, arg2: number, arg3: number): LocalTime
    of(arg0: number, arg1: number): LocalTime
    from(arg0: TemporalAccessor): LocalTime
    isSupported(arg0: TemporalUnit): boolean
    isSupported(arg0: TemporalField): boolean
    parse(arg0: CharSequence): LocalTime
    parse(arg0: CharSequence, arg1: DateTimeFormatter): LocalTime
    with(arg0: TemporalAdjuster): LocalTime
    with(arg0: TemporalAdjuster): Temporal
    with(arg0: TemporalField, arg1: number): LocalTime
    with(arg0: TemporalField, arg1: number): Temporal
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
    now(): LocalTime
    now(arg0: Clock): LocalTime
    now(arg0: ZoneId): LocalTime
    getNano(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(arg0: number, arg1: TemporalUnit): Temporal
    minus(arg0: TemporalAmount): LocalTime
    minus(arg0: number, arg1: TemporalUnit): LocalTime
    minus(arg0: TemporalAmount): Temporal
    plus(arg0: TemporalAmount): LocalTime
    plus(arg0: TemporalAmount): Temporal
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: number, arg1: TemporalUnit): LocalTime
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusNanos(arg0: number): LocalTime
    plusSeconds(arg0: number): LocalTime
    plusHours(arg0: number): LocalTime
    plusMinutes(arg0: number): LocalTime
    minusHours(arg0: number): LocalTime
    minusMinutes(arg0: number): LocalTime
    minusSeconds(arg0: number): LocalTime
    minusNanos(arg0: number): LocalTime
    truncatedTo(arg0: TemporalUnit): LocalTime
    adjustInto(arg0: Temporal): Temporal
    ofInstant(arg0: Instant, arg1: ZoneId): LocalTime
    atOffset(arg0: ZoneOffset): OffsetTime
    isAfter(arg0: LocalTime): boolean
    isBefore(arg0: LocalTime): boolean
    toSecondOfDay(): number
    toEpochSecond(arg0: LocalDate, arg1: ZoneOffset): number
    ofNanoOfDay(arg0: number): LocalTime
    withHour(arg0: number): LocalTime
    withMinute(arg0: number): LocalTime
    withSecond(arg0: number): LocalTime
    withNano(arg0: number): LocalTime
    toNanoOfDay(): number
    ofSecondOfDay(arg0: number): LocalTime
    atDate(arg0: LocalDate): LocalDateTime
}

declare class WeatherEvent extends MinecraftEvent {
    getWorld(): World
}

declare class OffsetTime implements Temporal, TemporalAdjuster, Comparable<OffsetTime>, Serializable {
    readonly MIN: OffsetTime
    readonly MAX: OffsetTime
    withOffsetSameInstant(arg0: ZoneOffset): OffsetTime
    withOffsetSameLocal(arg0: ZoneOffset): OffsetTime
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: OffsetTime): number
    compareTo(arg0: Object): number
    getLong(arg0: TemporalField): number
    format(arg0: DateTimeFormatter): string
    of(arg0: LocalTime, arg1: ZoneOffset): OffsetTime
    of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: ZoneOffset): OffsetTime
    from(arg0: TemporalAccessor): OffsetTime
    isSupported(arg0: TemporalField): boolean
    isSupported(arg0: TemporalUnit): boolean
    parse(arg0: CharSequence): OffsetTime
    parse(arg0: CharSequence, arg1: DateTimeFormatter): OffsetTime
    with(arg0: TemporalField, arg1: number): OffsetTime
    with(arg0: TemporalAdjuster): OffsetTime
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): Temporal
    query(arg0: TemporalQuery<R>): R
    getOffset(): ZoneOffset
    range(arg0: TemporalField): ValueRange
    isEqual(arg0: OffsetTime): boolean
    now(): OffsetTime
    now(arg0: ZoneId): OffsetTime
    now(arg0: Clock): OffsetTime
    getNano(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(arg0: TemporalAmount): Temporal
    minus(arg0: number, arg1: TemporalUnit): Temporal
    minus(arg0: TemporalAmount): OffsetTime
    minus(arg0: number, arg1: TemporalUnit): OffsetTime
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: number, arg1: TemporalUnit): OffsetTime
    plus(arg0: TemporalAmount): OffsetTime
    plus(arg0: TemporalAmount): Temporal
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusNanos(arg0: number): OffsetTime
    plusSeconds(arg0: number): OffsetTime
    plusHours(arg0: number): OffsetTime
    plusMinutes(arg0: number): OffsetTime
    minusHours(arg0: number): OffsetTime
    minusMinutes(arg0: number): OffsetTime
    minusSeconds(arg0: number): OffsetTime
    minusNanos(arg0: number): OffsetTime
    truncatedTo(arg0: TemporalUnit): OffsetTime
    adjustInto(arg0: Temporal): Temporal
    ofInstant(arg0: Instant, arg1: ZoneId): OffsetTime
    isAfter(arg0: OffsetTime): boolean
    isBefore(arg0: OffsetTime): boolean
    toLocalTime(): LocalTime
    toEpochSecond(arg0: LocalDate): number
    withHour(arg0: number): OffsetTime
    withMinute(arg0: number): OffsetTime
    withSecond(arg0: number): OffsetTime
    withNano(arg0: number): OffsetTime
    atDate(arg0: LocalDate): OffsetDateTime
}

interface AdvancementProgress {
    getAdvancement(): Advancement
    revokeCriteria(arg0: string): boolean
    awardCriteria(arg0: string): boolean
    getDateAwarded(arg0: string): Date
    getAwardedCriteria(): Collection<string>
    getRemainingCriteria(): Collection<string>
    isDone(): boolean
}

declare class BlockPopulator {
    populate(arg0: World, arg1: Random, arg2: Chunk): void
    populate(arg0: WorldInfo, arg1: Random, arg2: number, arg3: number, arg4: LimitedRegion): void
}

declare class EntityDamageEventDamageCause extends Enum<EntityDamageEventDamageCause> {
    readonly KILL: EntityDamageEventDamageCause
    readonly WORLD_BORDER: EntityDamageEventDamageCause
    readonly CONTACT: EntityDamageEventDamageCause
    readonly ENTITY_ATTACK: EntityDamageEventDamageCause
    readonly ENTITY_SWEEP_ATTACK: EntityDamageEventDamageCause
    readonly PROJECTILE: EntityDamageEventDamageCause
    readonly SUFFOCATION: EntityDamageEventDamageCause
    readonly FALL: EntityDamageEventDamageCause
    readonly FIRE: EntityDamageEventDamageCause
    readonly FIRE_TICK: EntityDamageEventDamageCause
    readonly MELTING: EntityDamageEventDamageCause
    readonly LAVA: EntityDamageEventDamageCause
    readonly DROWNING: EntityDamageEventDamageCause
    readonly BLOCK_EXPLOSION: EntityDamageEventDamageCause
    readonly ENTITY_EXPLOSION: EntityDamageEventDamageCause
    readonly VOID: EntityDamageEventDamageCause
    readonly LIGHTNING: EntityDamageEventDamageCause
    readonly SUICIDE: EntityDamageEventDamageCause
    readonly STARVATION: EntityDamageEventDamageCause
    readonly POISON: EntityDamageEventDamageCause
    readonly MAGIC: EntityDamageEventDamageCause
    readonly WITHER: EntityDamageEventDamageCause
    readonly FALLING_BLOCK: EntityDamageEventDamageCause
    readonly THORNS: EntityDamageEventDamageCause
    readonly DRAGON_BREATH: EntityDamageEventDamageCause
    readonly CUSTOM: EntityDamageEventDamageCause
    readonly FLY_INTO_WALL: EntityDamageEventDamageCause
    readonly HOT_FLOOR: EntityDamageEventDamageCause
    readonly CRAMMING: EntityDamageEventDamageCause
    readonly DRYOUT: EntityDamageEventDamageCause
    readonly FREEZE: EntityDamageEventDamageCause
    readonly SONIC_BOOM: EntityDamageEventDamageCause
    values(): EntityDamageEventDamageCause[]
    valueOf(arg0: string): EntityDamageEventDamageCause
}

declare class PlayerItemDamageEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getDamage(): number
    getHandlerList(): HandlerList
    setDamage(arg0: number): void
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class StriderTemperatureChangeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isShivering(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Strider
}

interface Predicate {
    test(arg0: T): boolean
    or(arg0: Predicate<T>): Predicate<T>
    negate(): Predicate<T>
    and(arg0: Predicate<T>): Predicate<T>
    isEqual(arg0: Object): Predicate<T>
    not(arg0: Predicate<T>): Predicate<T>
}

declare class Font implements Serializable {
    readonly DIALOG: string
    readonly DIALOG_INPUT: string
    readonly SANS_SERIF: string
    readonly SERIF: string
    readonly MONOSPACED: string
    readonly PLAIN: number
    readonly BOLD: number
    readonly ITALIC: number
    readonly ROMAN_BASELINE: number
    readonly CENTER_BASELINE: number
    readonly HANGING_BASELINE: number
    readonly TRUETYPE_FONT: number
    readonly TYPE1_FONT: number
    readonly LAYOUT_LEFT_TO_RIGHT: number
    readonly LAYOUT_RIGHT_TO_LEFT: number
    readonly LAYOUT_NO_START_CONTEXT: number
    readonly LAYOUT_NO_LIMIT_CONTEXT: number
    getStyle(): number
    isPlain(): boolean
    textRequiresLayout(arg0: char[], arg1: number, arg2: number): boolean
    createFonts(arg0: File): Font[]
    createFonts(arg0: InputStream): Font[]
    createFont(arg0: number, arg1: InputStream): Font
    createFont(arg0: number, arg1: File): Font
    getPSName(): string
    getSize2D(): number
    getAvailableAttributes(): AttributedCharacterIteratorAttribute[]
    deriveFont(arg0: AffineTransform): Font
    deriveFont(arg0: number): Font
    deriveFont(arg0: number, arg1: AffineTransform): Font
    deriveFont(arg0: number, arg1: number): Font
    deriveFont(arg0: Map<AttributedCharacterIteratorAttribute, any>): Font
    deriveFont(arg0: number): Font
    canDisplayUpTo(arg0: char[], arg1: number, arg2: number): number
    canDisplayUpTo(arg0: CharacterIterator, arg1: number, arg2: number): number
    canDisplayUpTo(arg0: string): number
    createGlyphVector(arg0: FontRenderContext, arg1: char[]): GlyphVector
    createGlyphVector(arg0: FontRenderContext, arg1: number[]): GlyphVector
    createGlyphVector(arg0: FontRenderContext, arg1: string): GlyphVector
    createGlyphVector(arg0: FontRenderContext, arg1: CharacterIterator): GlyphVector
    layoutGlyphVector(arg0: FontRenderContext, arg1: char[], arg2: number, arg3: number, arg4: number): GlyphVector
    hasUniformLineMetrics(): boolean
    getLineMetrics(arg0: char[], arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics
    getLineMetrics(arg0: string, arg1: FontRenderContext): LineMetrics
    getLineMetrics(arg0: CharacterIterator, arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics
    getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: FontRenderContext): LineMetrics
    getStringBounds(arg0: string, arg1: FontRenderContext): Rectangle2D
    getStringBounds(arg0: char[], arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D
    getStringBounds(arg0: CharacterIterator, arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D
    getStringBounds(arg0: string, arg1: number, arg2: number, arg3: FontRenderContext): Rectangle2D
    getMaxCharBounds(arg0: FontRenderContext): Rectangle2D
    getFontName(arg0: Locale): string
    getFontName(): string
    hasLayoutAttributes(): boolean
    getNumGlyphs(): number
    getMissingGlyphCode(): number
    getBaselineFor(arg0: char): byte
    canDisplay(arg0: char): boolean
    canDisplay(arg0: number): boolean
    getItalicAngle(): number
    isTransformed(): boolean
    getFont(arg0: string, arg1: Font): Font
    getFont(arg0: string): Font
    getFont(arg0: Map<AttributedCharacterIteratorAttribute, any>): Font
    isBold(): boolean
    isItalic(): boolean
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    decode(arg0: string): Font
    getSize(): number
    getAttributes(): Map<TextAttribute, any>
    getFamily(): string
    getFamily(arg0: Locale): string
    getTransform(): AffineTransform
}

declare class InventoryClickEvent extends InventoryInteractEvent {
    isShiftClick(): boolean
    getCurrentItem(): ItemStack
    isLeftClick(): boolean
    getSlotType(): InventoryTypeSlotType
    isRightClick(): boolean
    setCurrentItem(arg0: ItemStack): void
    getHotbarButton(): number
    getCursor(): ItemStack
    setCursor(arg0: ItemStack): void
    getHandlerList(): HandlerList
    getClickedInventory(): Inventory
    getRawSlot(): number
    getAction(): InventoryAction
    getClick(): ClickType
    getSlot(): number
    getHandlers(): HandlerList
}

declare class PlayerShearEntityEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
}

declare class FurnaceSmeltEvent extends BlockCookEvent {
}

declare class Sound extends Enum<Sound> implements Keyed {
    readonly AMBIENT_BASALT_DELTAS_ADDITIONS: Sound
    readonly AMBIENT_BASALT_DELTAS_LOOP: Sound
    readonly AMBIENT_BASALT_DELTAS_MOOD: Sound
    readonly AMBIENT_CAVE: Sound
    readonly AMBIENT_CRIMSON_FOREST_ADDITIONS: Sound
    readonly AMBIENT_CRIMSON_FOREST_LOOP: Sound
    readonly AMBIENT_CRIMSON_FOREST_MOOD: Sound
    readonly AMBIENT_NETHER_WASTES_ADDITIONS: Sound
    readonly AMBIENT_NETHER_WASTES_LOOP: Sound
    readonly AMBIENT_NETHER_WASTES_MOOD: Sound
    readonly AMBIENT_SOUL_SAND_VALLEY_ADDITIONS: Sound
    readonly AMBIENT_SOUL_SAND_VALLEY_LOOP: Sound
    readonly AMBIENT_SOUL_SAND_VALLEY_MOOD: Sound
    readonly AMBIENT_UNDERWATER_ENTER: Sound
    readonly AMBIENT_UNDERWATER_EXIT: Sound
    readonly AMBIENT_UNDERWATER_LOOP: Sound
    readonly AMBIENT_UNDERWATER_LOOP_ADDITIONS: Sound
    readonly AMBIENT_UNDERWATER_LOOP_ADDITIONS_RARE: Sound
    readonly AMBIENT_UNDERWATER_LOOP_ADDITIONS_ULTRA_RARE: Sound
    readonly AMBIENT_WARPED_FOREST_ADDITIONS: Sound
    readonly AMBIENT_WARPED_FOREST_LOOP: Sound
    readonly AMBIENT_WARPED_FOREST_MOOD: Sound
    readonly BLOCK_AMETHYST_BLOCK_BREAK: Sound
    readonly BLOCK_AMETHYST_BLOCK_CHIME: Sound
    readonly BLOCK_AMETHYST_BLOCK_FALL: Sound
    readonly BLOCK_AMETHYST_BLOCK_HIT: Sound
    readonly BLOCK_AMETHYST_BLOCK_PLACE: Sound
    readonly BLOCK_AMETHYST_BLOCK_RESONATE: Sound
    readonly BLOCK_AMETHYST_BLOCK_STEP: Sound
    readonly BLOCK_AMETHYST_CLUSTER_BREAK: Sound
    readonly BLOCK_AMETHYST_CLUSTER_FALL: Sound
    readonly BLOCK_AMETHYST_CLUSTER_HIT: Sound
    readonly BLOCK_AMETHYST_CLUSTER_PLACE: Sound
    readonly BLOCK_AMETHYST_CLUSTER_STEP: Sound
    readonly BLOCK_ANCIENT_DEBRIS_BREAK: Sound
    readonly BLOCK_ANCIENT_DEBRIS_FALL: Sound
    readonly BLOCK_ANCIENT_DEBRIS_HIT: Sound
    readonly BLOCK_ANCIENT_DEBRIS_PLACE: Sound
    readonly BLOCK_ANCIENT_DEBRIS_STEP: Sound
    readonly BLOCK_ANVIL_BREAK: Sound
    readonly BLOCK_ANVIL_DESTROY: Sound
    readonly BLOCK_ANVIL_FALL: Sound
    readonly BLOCK_ANVIL_HIT: Sound
    readonly BLOCK_ANVIL_LAND: Sound
    readonly BLOCK_ANVIL_PLACE: Sound
    readonly BLOCK_ANVIL_STEP: Sound
    readonly BLOCK_ANVIL_USE: Sound
    readonly BLOCK_AZALEA_BREAK: Sound
    readonly BLOCK_AZALEA_FALL: Sound
    readonly BLOCK_AZALEA_HIT: Sound
    readonly BLOCK_AZALEA_LEAVES_BREAK: Sound
    readonly BLOCK_AZALEA_LEAVES_FALL: Sound
    readonly BLOCK_AZALEA_LEAVES_HIT: Sound
    readonly BLOCK_AZALEA_LEAVES_PLACE: Sound
    readonly BLOCK_AZALEA_LEAVES_STEP: Sound
    readonly BLOCK_AZALEA_PLACE: Sound
    readonly BLOCK_AZALEA_STEP: Sound
    readonly BLOCK_BAMBOO_BREAK: Sound
    readonly BLOCK_BAMBOO_FALL: Sound
    readonly BLOCK_BAMBOO_HIT: Sound
    readonly BLOCK_BAMBOO_PLACE: Sound
    readonly BLOCK_BAMBOO_SAPLING_BREAK: Sound
    readonly BLOCK_BAMBOO_SAPLING_HIT: Sound
    readonly BLOCK_BAMBOO_SAPLING_PLACE: Sound
    readonly BLOCK_BAMBOO_STEP: Sound
    readonly BLOCK_BAMBOO_WOOD_BREAK: Sound
    readonly BLOCK_BAMBOO_WOOD_BUTTON_CLICK_OFF: Sound
    readonly BLOCK_BAMBOO_WOOD_BUTTON_CLICK_ON: Sound
    readonly BLOCK_BAMBOO_WOOD_DOOR_CLOSE: Sound
    readonly BLOCK_BAMBOO_WOOD_DOOR_OPEN: Sound
    readonly BLOCK_BAMBOO_WOOD_FALL: Sound
    readonly BLOCK_BAMBOO_WOOD_FENCE_GATE_CLOSE: Sound
    readonly BLOCK_BAMBOO_WOOD_FENCE_GATE_OPEN: Sound
    readonly BLOCK_BAMBOO_WOOD_HANGING_SIGN_BREAK: Sound
    readonly BLOCK_BAMBOO_WOOD_HANGING_SIGN_FALL: Sound
    readonly BLOCK_BAMBOO_WOOD_HANGING_SIGN_HIT: Sound
    readonly BLOCK_BAMBOO_WOOD_HANGING_SIGN_PLACE: Sound
    readonly BLOCK_BAMBOO_WOOD_HANGING_SIGN_STEP: Sound
    readonly BLOCK_BAMBOO_WOOD_HIT: Sound
    readonly BLOCK_BAMBOO_WOOD_PLACE: Sound
    readonly BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_OFF: Sound
    readonly BLOCK_BAMBOO_WOOD_PRESSURE_PLATE_CLICK_ON: Sound
    readonly BLOCK_BAMBOO_WOOD_STEP: Sound
    readonly BLOCK_BAMBOO_WOOD_TRAPDOOR_CLOSE: Sound
    readonly BLOCK_BAMBOO_WOOD_TRAPDOOR_OPEN: Sound
    readonly BLOCK_BARREL_CLOSE: Sound
    readonly BLOCK_BARREL_OPEN: Sound
    readonly BLOCK_BASALT_BREAK: Sound
    readonly BLOCK_BASALT_FALL: Sound
    readonly BLOCK_BASALT_HIT: Sound
    readonly BLOCK_BASALT_PLACE: Sound
    readonly BLOCK_BASALT_STEP: Sound
    readonly BLOCK_BEACON_ACTIVATE: Sound
    readonly BLOCK_BEACON_AMBIENT: Sound
    readonly BLOCK_BEACON_DEACTIVATE: Sound
    readonly BLOCK_BEACON_POWER_SELECT: Sound
    readonly BLOCK_BEEHIVE_DRIP: Sound
    readonly BLOCK_BEEHIVE_ENTER: Sound
    readonly BLOCK_BEEHIVE_EXIT: Sound
    readonly BLOCK_BEEHIVE_SHEAR: Sound
    readonly BLOCK_BEEHIVE_WORK: Sound
    readonly BLOCK_BELL_RESONATE: Sound
    readonly BLOCK_BELL_USE: Sound
    readonly BLOCK_BIG_DRIPLEAF_BREAK: Sound
    readonly BLOCK_BIG_DRIPLEAF_FALL: Sound
    readonly BLOCK_BIG_DRIPLEAF_HIT: Sound
    readonly BLOCK_BIG_DRIPLEAF_PLACE: Sound
    readonly BLOCK_BIG_DRIPLEAF_STEP: Sound
    readonly BLOCK_BIG_DRIPLEAF_TILT_DOWN: Sound
    readonly BLOCK_BIG_DRIPLEAF_TILT_UP: Sound
    readonly BLOCK_BLASTFURNACE_FIRE_CRACKLE: Sound
    readonly BLOCK_BONE_BLOCK_BREAK: Sound
    readonly BLOCK_BONE_BLOCK_FALL: Sound
    readonly BLOCK_BONE_BLOCK_HIT: Sound
    readonly BLOCK_BONE_BLOCK_PLACE: Sound
    readonly BLOCK_BONE_BLOCK_STEP: Sound
    readonly BLOCK_BREWING_STAND_BREW: Sound
    readonly BLOCK_BUBBLE_COLUMN_BUBBLE_POP: Sound
    readonly BLOCK_BUBBLE_COLUMN_UPWARDS_AMBIENT: Sound
    readonly BLOCK_BUBBLE_COLUMN_UPWARDS_INSIDE: Sound
    readonly BLOCK_BUBBLE_COLUMN_WHIRLPOOL_AMBIENT: Sound
    readonly BLOCK_BUBBLE_COLUMN_WHIRLPOOL_INSIDE: Sound
    readonly BLOCK_CAKE_ADD_CANDLE: Sound
    readonly BLOCK_CALCITE_BREAK: Sound
    readonly BLOCK_CALCITE_FALL: Sound
    readonly BLOCK_CALCITE_HIT: Sound
    readonly BLOCK_CALCITE_PLACE: Sound
    readonly BLOCK_CALCITE_STEP: Sound
    readonly BLOCK_CAMPFIRE_CRACKLE: Sound
    readonly BLOCK_CANDLE_AMBIENT: Sound
    readonly BLOCK_CANDLE_BREAK: Sound
    readonly BLOCK_CANDLE_EXTINGUISH: Sound
    readonly BLOCK_CANDLE_FALL: Sound
    readonly BLOCK_CANDLE_HIT: Sound
    readonly BLOCK_CANDLE_PLACE: Sound
    readonly BLOCK_CANDLE_STEP: Sound
    readonly BLOCK_CAVE_VINES_BREAK: Sound
    readonly BLOCK_CAVE_VINES_FALL: Sound
    readonly BLOCK_CAVE_VINES_HIT: Sound
    readonly BLOCK_CAVE_VINES_PICK_BERRIES: Sound
    readonly BLOCK_CAVE_VINES_PLACE: Sound
    readonly BLOCK_CAVE_VINES_STEP: Sound
    readonly BLOCK_CHAIN_BREAK: Sound
    readonly BLOCK_CHAIN_FALL: Sound
    readonly BLOCK_CHAIN_HIT: Sound
    readonly BLOCK_CHAIN_PLACE: Sound
    readonly BLOCK_CHAIN_STEP: Sound
    readonly BLOCK_CHERRY_LEAVES_BREAK: Sound
    readonly BLOCK_CHERRY_LEAVES_FALL: Sound
    readonly BLOCK_CHERRY_LEAVES_HIT: Sound
    readonly BLOCK_CHERRY_LEAVES_PLACE: Sound
    readonly BLOCK_CHERRY_LEAVES_STEP: Sound
    readonly BLOCK_CHERRY_SAPLING_BREAK: Sound
    readonly BLOCK_CHERRY_SAPLING_FALL: Sound
    readonly BLOCK_CHERRY_SAPLING_HIT: Sound
    readonly BLOCK_CHERRY_SAPLING_PLACE: Sound
    readonly BLOCK_CHERRY_SAPLING_STEP: Sound
    readonly BLOCK_CHERRY_WOOD_BREAK: Sound
    readonly BLOCK_CHERRY_WOOD_BUTTON_CLICK_OFF: Sound
    readonly BLOCK_CHERRY_WOOD_BUTTON_CLICK_ON: Sound
    readonly BLOCK_CHERRY_WOOD_DOOR_CLOSE: Sound
    readonly BLOCK_CHERRY_WOOD_DOOR_OPEN: Sound
    readonly BLOCK_CHERRY_WOOD_FALL: Sound
    readonly BLOCK_CHERRY_WOOD_FENCE_GATE_CLOSE: Sound
    readonly BLOCK_CHERRY_WOOD_FENCE_GATE_OPEN: Sound
    readonly BLOCK_CHERRY_WOOD_HANGING_SIGN_BREAK: Sound
    readonly BLOCK_CHERRY_WOOD_HANGING_SIGN_FALL: Sound
    readonly BLOCK_CHERRY_WOOD_HANGING_SIGN_HIT: Sound
    readonly BLOCK_CHERRY_WOOD_HANGING_SIGN_PLACE: Sound
    readonly BLOCK_CHERRY_WOOD_HANGING_SIGN_STEP: Sound
    readonly BLOCK_CHERRY_WOOD_HIT: Sound
    readonly BLOCK_CHERRY_WOOD_PLACE: Sound
    readonly BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_OFF: Sound
    readonly BLOCK_CHERRY_WOOD_PRESSURE_PLATE_CLICK_ON: Sound
    readonly BLOCK_CHERRY_WOOD_STEP: Sound
    readonly BLOCK_CHERRY_WOOD_TRAPDOOR_CLOSE: Sound
    readonly BLOCK_CHERRY_WOOD_TRAPDOOR_OPEN: Sound
    readonly BLOCK_CHEST_CLOSE: Sound
    readonly BLOCK_CHEST_LOCKED: Sound
    readonly BLOCK_CHEST_OPEN: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_BREAK: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_FALL: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_HIT: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_INSERT: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_INSERT_ENCHANTED: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_PICKUP: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_PICKUP_ENCHANTED: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_PLACE: Sound
    readonly BLOCK_CHISELED_BOOKSHELF_STEP: Sound
    readonly BLOCK_CHORUS_FLOWER_DEATH: Sound
    readonly BLOCK_CHORUS_FLOWER_GROW: Sound
    readonly BLOCK_COMPARATOR_CLICK: Sound
    readonly BLOCK_COMPOSTER_EMPTY: Sound
    readonly BLOCK_COMPOSTER_FILL: Sound
    readonly BLOCK_COMPOSTER_FILL_SUCCESS: Sound
    readonly BLOCK_COMPOSTER_READY: Sound
    readonly BLOCK_CONDUIT_ACTIVATE: Sound
    readonly BLOCK_CONDUIT_AMBIENT: Sound
    readonly BLOCK_CONDUIT_AMBIENT_SHORT: Sound
    readonly BLOCK_CONDUIT_ATTACK_TARGET: Sound
    readonly BLOCK_CONDUIT_DEACTIVATE: Sound
    readonly BLOCK_COPPER_BREAK: Sound
    readonly BLOCK_COPPER_FALL: Sound
    readonly BLOCK_COPPER_HIT: Sound
    readonly BLOCK_COPPER_PLACE: Sound
    readonly BLOCK_COPPER_STEP: Sound
    readonly BLOCK_CORAL_BLOCK_BREAK: Sound
    readonly BLOCK_CORAL_BLOCK_FALL: Sound
    readonly BLOCK_CORAL_BLOCK_HIT: Sound
    readonly BLOCK_CORAL_BLOCK_PLACE: Sound
    readonly BLOCK_CORAL_BLOCK_STEP: Sound
    readonly BLOCK_CROP_BREAK: Sound
    readonly BLOCK_DECORATED_POT_BREAK: Sound
    readonly BLOCK_DECORATED_POT_FALL: Sound
    readonly BLOCK_DECORATED_POT_HIT: Sound
    readonly BLOCK_DECORATED_POT_PLACE: Sound
    readonly BLOCK_DECORATED_POT_SHATTER: Sound
    readonly BLOCK_DECORATED_POT_STEP: Sound
    readonly BLOCK_DEEPSLATE_BREAK: Sound
    readonly BLOCK_DEEPSLATE_BRICKS_BREAK: Sound
    readonly BLOCK_DEEPSLATE_BRICKS_FALL: Sound
    readonly BLOCK_DEEPSLATE_BRICKS_HIT: Sound
    readonly BLOCK_DEEPSLATE_BRICKS_PLACE: Sound
    readonly BLOCK_DEEPSLATE_BRICKS_STEP: Sound
    readonly BLOCK_DEEPSLATE_FALL: Sound
    readonly BLOCK_DEEPSLATE_HIT: Sound
    readonly BLOCK_DEEPSLATE_PLACE: Sound
    readonly BLOCK_DEEPSLATE_STEP: Sound
    readonly BLOCK_DEEPSLATE_TILES_BREAK: Sound
    readonly BLOCK_DEEPSLATE_TILES_FALL: Sound
    readonly BLOCK_DEEPSLATE_TILES_HIT: Sound
    readonly BLOCK_DEEPSLATE_TILES_PLACE: Sound
    readonly BLOCK_DEEPSLATE_TILES_STEP: Sound
    readonly BLOCK_DISPENSER_DISPENSE: Sound
    readonly BLOCK_DISPENSER_FAIL: Sound
    readonly BLOCK_DISPENSER_LAUNCH: Sound
    readonly BLOCK_DRIPSTONE_BLOCK_BREAK: Sound
    readonly BLOCK_DRIPSTONE_BLOCK_FALL: Sound
    readonly BLOCK_DRIPSTONE_BLOCK_HIT: Sound
    readonly BLOCK_DRIPSTONE_BLOCK_PLACE: Sound
    readonly BLOCK_DRIPSTONE_BLOCK_STEP: Sound
    readonly BLOCK_ENCHANTMENT_TABLE_USE: Sound
    readonly BLOCK_ENDER_CHEST_CLOSE: Sound
    readonly BLOCK_ENDER_CHEST_OPEN: Sound
    readonly BLOCK_END_GATEWAY_SPAWN: Sound
    readonly BLOCK_END_PORTAL_FRAME_FILL: Sound
    readonly BLOCK_END_PORTAL_SPAWN: Sound
    readonly BLOCK_FENCE_GATE_CLOSE: Sound
    readonly BLOCK_FENCE_GATE_OPEN: Sound
    readonly BLOCK_FIRE_AMBIENT: Sound
    readonly BLOCK_FIRE_EXTINGUISH: Sound
    readonly BLOCK_FLOWERING_AZALEA_BREAK: Sound
    readonly BLOCK_FLOWERING_AZALEA_FALL: Sound
    readonly BLOCK_FLOWERING_AZALEA_HIT: Sound
    readonly BLOCK_FLOWERING_AZALEA_PLACE: Sound
    readonly BLOCK_FLOWERING_AZALEA_STEP: Sound
    readonly BLOCK_FROGLIGHT_BREAK: Sound
    readonly BLOCK_FROGLIGHT_FALL: Sound
    readonly BLOCK_FROGLIGHT_HIT: Sound
    readonly BLOCK_FROGLIGHT_PLACE: Sound
    readonly BLOCK_FROGLIGHT_STEP: Sound
    readonly BLOCK_FROGSPAWN_BREAK: Sound
    readonly BLOCK_FROGSPAWN_FALL: Sound
    readonly BLOCK_FROGSPAWN_HATCH: Sound
    readonly BLOCK_FROGSPAWN_HIT: Sound
    readonly BLOCK_FROGSPAWN_PLACE: Sound
    readonly BLOCK_FROGSPAWN_STEP: Sound
    readonly BLOCK_FUNGUS_BREAK: Sound
    readonly BLOCK_FUNGUS_FALL: Sound
    readonly BLOCK_FUNGUS_HIT: Sound
    readonly BLOCK_FUNGUS_PLACE: Sound
    readonly BLOCK_FUNGUS_STEP: Sound
    readonly BLOCK_FURNACE_FIRE_CRACKLE: Sound
    readonly BLOCK_GILDED_BLACKSTONE_BREAK: Sound
    readonly BLOCK_GILDED_BLACKSTONE_FALL: Sound
    readonly BLOCK_GILDED_BLACKSTONE_HIT: Sound
    readonly BLOCK_GILDED_BLACKSTONE_PLACE: Sound
    readonly BLOCK_GILDED_BLACKSTONE_STEP: Sound
    readonly BLOCK_GLASS_BREAK: Sound
    readonly BLOCK_GLASS_FALL: Sound
    readonly BLOCK_GLASS_HIT: Sound
    readonly BLOCK_GLASS_PLACE: Sound
    readonly BLOCK_GLASS_STEP: Sound
    readonly BLOCK_GRASS_BREAK: Sound
    readonly BLOCK_GRASS_FALL: Sound
    readonly BLOCK_GRASS_HIT: Sound
    readonly BLOCK_GRASS_PLACE: Sound
    readonly BLOCK_GRASS_STEP: Sound
    readonly BLOCK_GRAVEL_BREAK: Sound
    readonly BLOCK_GRAVEL_FALL: Sound
    readonly BLOCK_GRAVEL_HIT: Sound
    readonly BLOCK_GRAVEL_PLACE: Sound
    readonly BLOCK_GRAVEL_STEP: Sound
    readonly BLOCK_GRINDSTONE_USE: Sound
    readonly BLOCK_GROWING_PLANT_CROP: Sound
    readonly BLOCK_HANGING_ROOTS_BREAK: Sound
    readonly BLOCK_HANGING_ROOTS_FALL: Sound
    readonly BLOCK_HANGING_ROOTS_HIT: Sound
    readonly BLOCK_HANGING_ROOTS_PLACE: Sound
    readonly BLOCK_HANGING_ROOTS_STEP: Sound
    readonly BLOCK_HANGING_SIGN_BREAK: Sound
    readonly BLOCK_HANGING_SIGN_FALL: Sound
    readonly BLOCK_HANGING_SIGN_HIT: Sound
    readonly BLOCK_HANGING_SIGN_PLACE: Sound
    readonly BLOCK_HANGING_SIGN_STEP: Sound
    readonly BLOCK_HONEY_BLOCK_BREAK: Sound
    readonly BLOCK_HONEY_BLOCK_FALL: Sound
    readonly BLOCK_HONEY_BLOCK_HIT: Sound
    readonly BLOCK_HONEY_BLOCK_PLACE: Sound
    readonly BLOCK_HONEY_BLOCK_SLIDE: Sound
    readonly BLOCK_HONEY_BLOCK_STEP: Sound
    readonly BLOCK_IRON_DOOR_CLOSE: Sound
    readonly BLOCK_IRON_DOOR_OPEN: Sound
    readonly BLOCK_IRON_TRAPDOOR_CLOSE: Sound
    readonly BLOCK_IRON_TRAPDOOR_OPEN: Sound
    readonly BLOCK_LADDER_BREAK: Sound
    readonly BLOCK_LADDER_FALL: Sound
    readonly BLOCK_LADDER_HIT: Sound
    readonly BLOCK_LADDER_PLACE: Sound
    readonly BLOCK_LADDER_STEP: Sound
    readonly BLOCK_LANTERN_BREAK: Sound
    readonly BLOCK_LANTERN_FALL: Sound
    readonly BLOCK_LANTERN_HIT: Sound
    readonly BLOCK_LANTERN_PLACE: Sound
    readonly BLOCK_LANTERN_STEP: Sound
    readonly BLOCK_LARGE_AMETHYST_BUD_BREAK: Sound
    readonly BLOCK_LARGE_AMETHYST_BUD_PLACE: Sound
    readonly BLOCK_LAVA_AMBIENT: Sound
    readonly BLOCK_LAVA_EXTINGUISH: Sound
    readonly BLOCK_LAVA_POP: Sound
    readonly BLOCK_LEVER_CLICK: Sound
    readonly BLOCK_LILY_PAD_PLACE: Sound
    readonly BLOCK_LODESTONE_BREAK: Sound
    readonly BLOCK_LODESTONE_FALL: Sound
    readonly BLOCK_LODESTONE_HIT: Sound
    readonly BLOCK_LODESTONE_PLACE: Sound
    readonly BLOCK_LODESTONE_STEP: Sound
    readonly BLOCK_MANGROVE_ROOTS_BREAK: Sound
    readonly BLOCK_MANGROVE_ROOTS_FALL: Sound
    readonly BLOCK_MANGROVE_ROOTS_HIT: Sound
    readonly BLOCK_MANGROVE_ROOTS_PLACE: Sound
    readonly BLOCK_MANGROVE_ROOTS_STEP: Sound
    readonly BLOCK_MEDIUM_AMETHYST_BUD_BREAK: Sound
    readonly BLOCK_MEDIUM_AMETHYST_BUD_PLACE: Sound
    readonly BLOCK_METAL_BREAK: Sound
    readonly BLOCK_METAL_FALL: Sound
    readonly BLOCK_METAL_HIT: Sound
    readonly BLOCK_METAL_PLACE: Sound
    readonly BLOCK_METAL_PRESSURE_PLATE_CLICK_OFF: Sound
    readonly BLOCK_METAL_PRESSURE_PLATE_CLICK_ON: Sound
    readonly BLOCK_METAL_STEP: Sound
    readonly BLOCK_MOSS_BREAK: Sound
    readonly BLOCK_MOSS_CARPET_BREAK: Sound
    readonly BLOCK_MOSS_CARPET_FALL: Sound
    readonly BLOCK_MOSS_CARPET_HIT: Sound
    readonly BLOCK_MOSS_CARPET_PLACE: Sound
    readonly BLOCK_MOSS_CARPET_STEP: Sound
    readonly BLOCK_MOSS_FALL: Sound
    readonly BLOCK_MOSS_HIT: Sound
    readonly BLOCK_MOSS_PLACE: Sound
    readonly BLOCK_MOSS_STEP: Sound
    readonly BLOCK_MUDDY_MANGROVE_ROOTS_BREAK: Sound
    readonly BLOCK_MUDDY_MANGROVE_ROOTS_FALL: Sound
    readonly BLOCK_MUDDY_MANGROVE_ROOTS_HIT: Sound
    readonly BLOCK_MUDDY_MANGROVE_ROOTS_PLACE: Sound
    readonly BLOCK_MUDDY_MANGROVE_ROOTS_STEP: Sound
    readonly BLOCK_MUD_BREAK: Sound
    readonly BLOCK_MUD_BRICKS_BREAK: Sound
    readonly BLOCK_MUD_BRICKS_FALL: Sound
    readonly BLOCK_MUD_BRICKS_HIT: Sound
    readonly BLOCK_MUD_BRICKS_PLACE: Sound
    readonly BLOCK_MUD_BRICKS_STEP: Sound
    readonly BLOCK_MUD_FALL: Sound
    readonly BLOCK_MUD_HIT: Sound
    readonly BLOCK_MUD_PLACE: Sound
    readonly BLOCK_MUD_STEP: Sound
    readonly BLOCK_NETHERITE_BLOCK_BREAK: Sound
    readonly BLOCK_NETHERITE_BLOCK_FALL: Sound
    readonly BLOCK_NETHERITE_BLOCK_HIT: Sound
    readonly BLOCK_NETHERITE_BLOCK_PLACE: Sound
    readonly BLOCK_NETHERITE_BLOCK_STEP: Sound
    readonly BLOCK_NETHERRACK_BREAK: Sound
    readonly BLOCK_NETHERRACK_FALL: Sound
    readonly BLOCK_NETHERRACK_HIT: Sound
    readonly BLOCK_NETHERRACK_PLACE: Sound
    readonly BLOCK_NETHERRACK_STEP: Sound
    readonly BLOCK_NETHER_BRICKS_BREAK: Sound
    readonly BLOCK_NETHER_BRICKS_FALL: Sound
    readonly BLOCK_NETHER_BRICKS_HIT: Sound
    readonly BLOCK_NETHER_BRICKS_PLACE: Sound
    readonly BLOCK_NETHER_BRICKS_STEP: Sound
    readonly BLOCK_NETHER_GOLD_ORE_BREAK: Sound
    readonly BLOCK_NETHER_GOLD_ORE_FALL: Sound
    readonly BLOCK_NETHER_GOLD_ORE_HIT: Sound
    readonly BLOCK_NETHER_GOLD_ORE_PLACE: Sound
    readonly BLOCK_NETHER_GOLD_ORE_STEP: Sound
    readonly BLOCK_NETHER_ORE_BREAK: Sound
    readonly BLOCK_NETHER_ORE_FALL: Sound
    readonly BLOCK_NETHER_ORE_HIT: Sound
    readonly BLOCK_NETHER_ORE_PLACE: Sound
    readonly BLOCK_NETHER_ORE_STEP: Sound
    readonly BLOCK_NETHER_SPROUTS_BREAK: Sound
    readonly BLOCK_NETHER_SPROUTS_FALL: Sound
    readonly BLOCK_NETHER_SPROUTS_HIT: Sound
    readonly BLOCK_NETHER_SPROUTS_PLACE: Sound
    readonly BLOCK_NETHER_SPROUTS_STEP: Sound
    readonly BLOCK_NETHER_WART_BREAK: Sound
    readonly BLOCK_NETHER_WOOD_BREAK: Sound
    readonly BLOCK_NETHER_WOOD_BUTTON_CLICK_OFF: Sound
    readonly BLOCK_NETHER_WOOD_BUTTON_CLICK_ON: Sound
    readonly BLOCK_NETHER_WOOD_DOOR_CLOSE: Sound
    readonly BLOCK_NETHER_WOOD_DOOR_OPEN: Sound
    readonly BLOCK_NETHER_WOOD_FALL: Sound
    readonly BLOCK_NETHER_WOOD_FENCE_GATE_CLOSE: Sound
    readonly BLOCK_NETHER_WOOD_FENCE_GATE_OPEN: Sound
    readonly BLOCK_NETHER_WOOD_HANGING_SIGN_BREAK: Sound
    readonly BLOCK_NETHER_WOOD_HANGING_SIGN_FALL: Sound
    readonly BLOCK_NETHER_WOOD_HANGING_SIGN_HIT: Sound
    readonly BLOCK_NETHER_WOOD_HANGING_SIGN_PLACE: Sound
    readonly BLOCK_NETHER_WOOD_HANGING_SIGN_STEP: Sound
    readonly BLOCK_NETHER_WOOD_HIT: Sound
    readonly BLOCK_NETHER_WOOD_PLACE: Sound
    readonly BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_OFF: Sound
    readonly BLOCK_NETHER_WOOD_PRESSURE_PLATE_CLICK_ON: Sound
    readonly BLOCK_NETHER_WOOD_STEP: Sound
    readonly BLOCK_NETHER_WOOD_TRAPDOOR_CLOSE: Sound
    readonly BLOCK_NETHER_WOOD_TRAPDOOR_OPEN: Sound
    readonly BLOCK_NOTE_BLOCK_BANJO: Sound
    readonly BLOCK_NOTE_BLOCK_BASEDRUM: Sound
    readonly BLOCK_NOTE_BLOCK_BASS: Sound
    readonly BLOCK_NOTE_BLOCK_BELL: Sound
    readonly BLOCK_NOTE_BLOCK_BIT: Sound
    readonly BLOCK_NOTE_BLOCK_CHIME: Sound
    readonly BLOCK_NOTE_BLOCK_COW_BELL: Sound
    readonly BLOCK_NOTE_BLOCK_DIDGERIDOO: Sound
    readonly BLOCK_NOTE_BLOCK_FLUTE: Sound
    readonly BLOCK_NOTE_BLOCK_GUITAR: Sound
    readonly BLOCK_NOTE_BLOCK_HARP: Sound
    readonly BLOCK_NOTE_BLOCK_HAT: Sound
    readonly BLOCK_NOTE_BLOCK_IMITATE_CREEPER: Sound
    readonly BLOCK_NOTE_BLOCK_IMITATE_ENDER_DRAGON: Sound
    readonly BLOCK_NOTE_BLOCK_IMITATE_PIGLIN: Sound
    readonly BLOCK_NOTE_BLOCK_IMITATE_SKELETON: Sound
    readonly BLOCK_NOTE_BLOCK_IMITATE_WITHER_SKELETON: Sound
    readonly BLOCK_NOTE_BLOCK_IMITATE_ZOMBIE: Sound
    readonly BLOCK_NOTE_BLOCK_IRON_XYLOPHONE: Sound
    readonly BLOCK_NOTE_BLOCK_PLING: Sound
    readonly BLOCK_NOTE_BLOCK_SNARE: Sound
    readonly BLOCK_NOTE_BLOCK_XYLOPHONE: Sound
    readonly BLOCK_NYLIUM_BREAK: Sound
    readonly BLOCK_NYLIUM_FALL: Sound
    readonly BLOCK_NYLIUM_HIT: Sound
    readonly BLOCK_NYLIUM_PLACE: Sound
    readonly BLOCK_NYLIUM_STEP: Sound
    readonly BLOCK_PACKED_MUD_BREAK: Sound
    readonly BLOCK_PACKED_MUD_FALL: Sound
    readonly BLOCK_PACKED_MUD_HIT: Sound
    readonly BLOCK_PACKED_MUD_PLACE: Sound
    readonly BLOCK_PACKED_MUD_STEP: Sound
    readonly BLOCK_PINK_PETALS_BREAK: Sound
    readonly BLOCK_PINK_PETALS_FALL: Sound
    readonly BLOCK_PINK_PETALS_HIT: Sound
    readonly BLOCK_PINK_PETALS_PLACE: Sound
    readonly BLOCK_PINK_PETALS_STEP: Sound
    readonly BLOCK_PISTON_CONTRACT: Sound
    readonly BLOCK_PISTON_EXTEND: Sound
    readonly BLOCK_POINTED_DRIPSTONE_BREAK: Sound
    readonly BLOCK_POINTED_DRIPSTONE_DRIP_LAVA: Sound
    readonly BLOCK_POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON: Sound
    readonly BLOCK_POINTED_DRIPSTONE_DRIP_WATER: Sound
    readonly BLOCK_POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON: Sound
    readonly BLOCK_POINTED_DRIPSTONE_FALL: Sound
    readonly BLOCK_POINTED_DRIPSTONE_HIT: Sound
    readonly BLOCK_POINTED_DRIPSTONE_LAND: Sound
    readonly BLOCK_POINTED_DRIPSTONE_PLACE: Sound
    readonly BLOCK_POINTED_DRIPSTONE_STEP: Sound
    readonly BLOCK_POLISHED_DEEPSLATE_BREAK: Sound
    readonly BLOCK_POLISHED_DEEPSLATE_FALL: Sound
    readonly BLOCK_POLISHED_DEEPSLATE_HIT: Sound
    readonly BLOCK_POLISHED_DEEPSLATE_PLACE: Sound
    readonly BLOCK_POLISHED_DEEPSLATE_STEP: Sound
    readonly BLOCK_PORTAL_AMBIENT: Sound
    readonly BLOCK_PORTAL_TRAVEL: Sound
    readonly BLOCK_PORTAL_TRIGGER: Sound
    readonly BLOCK_POWDER_SNOW_BREAK: Sound
    readonly BLOCK_POWDER_SNOW_FALL: Sound
    readonly BLOCK_POWDER_SNOW_HIT: Sound
    readonly BLOCK_POWDER_SNOW_PLACE: Sound
    readonly BLOCK_POWDER_SNOW_STEP: Sound
    readonly BLOCK_PUMPKIN_CARVE: Sound
    readonly BLOCK_REDSTONE_TORCH_BURNOUT: Sound
    readonly BLOCK_RESPAWN_ANCHOR_AMBIENT: Sound
    readonly BLOCK_RESPAWN_ANCHOR_CHARGE: Sound
    readonly BLOCK_RESPAWN_ANCHOR_DEPLETE: Sound
    readonly BLOCK_RESPAWN_ANCHOR_SET_SPAWN: Sound
    readonly BLOCK_ROOTED_DIRT_BREAK: Sound
    readonly BLOCK_ROOTED_DIRT_FALL: Sound
    readonly BLOCK_ROOTED_DIRT_HIT: Sound
    readonly BLOCK_ROOTED_DIRT_PLACE: Sound
    readonly BLOCK_ROOTED_DIRT_STEP: Sound
    readonly BLOCK_ROOTS_BREAK: Sound
    readonly BLOCK_ROOTS_FALL: Sound
    readonly BLOCK_ROOTS_HIT: Sound
    readonly BLOCK_ROOTS_PLACE: Sound
    readonly BLOCK_ROOTS_STEP: Sound
    readonly BLOCK_SAND_BREAK: Sound
    readonly BLOCK_SAND_FALL: Sound
    readonly BLOCK_SAND_HIT: Sound
    readonly BLOCK_SAND_PLACE: Sound
    readonly BLOCK_SAND_STEP: Sound
    readonly BLOCK_SCAFFOLDING_BREAK: Sound
    readonly BLOCK_SCAFFOLDING_FALL: Sound
    readonly BLOCK_SCAFFOLDING_HIT: Sound
    readonly BLOCK_SCAFFOLDING_PLACE: Sound
    readonly BLOCK_SCAFFOLDING_STEP: Sound
    readonly BLOCK_SCULK_BREAK: Sound
    readonly BLOCK_SCULK_CATALYST_BLOOM: Sound
    readonly BLOCK_SCULK_CATALYST_BREAK: Sound
    readonly BLOCK_SCULK_CATALYST_FALL: Sound
    readonly BLOCK_SCULK_CATALYST_HIT: Sound
    readonly BLOCK_SCULK_CATALYST_PLACE: Sound
    readonly BLOCK_SCULK_CATALYST_STEP: Sound
    readonly BLOCK_SCULK_CHARGE: Sound
    readonly BLOCK_SCULK_FALL: Sound
    readonly BLOCK_SCULK_HIT: Sound
    readonly BLOCK_SCULK_PLACE: Sound
    readonly BLOCK_SCULK_SENSOR_BREAK: Sound
    readonly BLOCK_SCULK_SENSOR_CLICKING: Sound
    readonly BLOCK_SCULK_SENSOR_CLICKING_STOP: Sound
    readonly BLOCK_SCULK_SENSOR_FALL: Sound
    readonly BLOCK_SCULK_SENSOR_HIT: Sound
    readonly BLOCK_SCULK_SENSOR_PLACE: Sound
    readonly BLOCK_SCULK_SENSOR_STEP: Sound
    readonly BLOCK_SCULK_SHRIEKER_BREAK: Sound
    readonly BLOCK_SCULK_SHRIEKER_FALL: Sound
    readonly BLOCK_SCULK_SHRIEKER_HIT: Sound
    readonly BLOCK_SCULK_SHRIEKER_PLACE: Sound
    readonly BLOCK_SCULK_SHRIEKER_SHRIEK: Sound
    readonly BLOCK_SCULK_SHRIEKER_STEP: Sound
    readonly BLOCK_SCULK_SPREAD: Sound
    readonly BLOCK_SCULK_STEP: Sound
    readonly BLOCK_SCULK_VEIN_BREAK: Sound
    readonly BLOCK_SCULK_VEIN_FALL: Sound
    readonly BLOCK_SCULK_VEIN_HIT: Sound
    readonly BLOCK_SCULK_VEIN_PLACE: Sound
    readonly BLOCK_SCULK_VEIN_STEP: Sound
    readonly BLOCK_SHROOMLIGHT_BREAK: Sound
    readonly BLOCK_SHROOMLIGHT_FALL: Sound
    readonly BLOCK_SHROOMLIGHT_HIT: Sound
    readonly BLOCK_SHROOMLIGHT_PLACE: Sound
    readonly BLOCK_SHROOMLIGHT_STEP: Sound
    readonly BLOCK_SHULKER_BOX_CLOSE: Sound
    readonly BLOCK_SHULKER_BOX_OPEN: Sound
    readonly BLOCK_SIGN_WAXED_INTERACT_FAIL: Sound
    readonly BLOCK_SLIME_BLOCK_BREAK: Sound
    readonly BLOCK_SLIME_BLOCK_FALL: Sound
    readonly BLOCK_SLIME_BLOCK_HIT: Sound
    readonly BLOCK_SLIME_BLOCK_PLACE: Sound
    readonly BLOCK_SLIME_BLOCK_STEP: Sound
    readonly BLOCK_SMALL_AMETHYST_BUD_BREAK: Sound
    readonly BLOCK_SMALL_AMETHYST_BUD_PLACE: Sound
    readonly BLOCK_SMALL_DRIPLEAF_BREAK: Sound
    readonly BLOCK_SMALL_DRIPLEAF_FALL: Sound
    readonly BLOCK_SMALL_DRIPLEAF_HIT: Sound
    readonly BLOCK_SMALL_DRIPLEAF_PLACE: Sound
    readonly BLOCK_SMALL_DRIPLEAF_STEP: Sound
    readonly BLOCK_SMITHING_TABLE_USE: Sound
    readonly BLOCK_SMOKER_SMOKE: Sound
    readonly BLOCK_SNIFFER_EGG_CRACK: Sound
    readonly BLOCK_SNIFFER_EGG_HATCH: Sound
    readonly BLOCK_SNIFFER_EGG_PLOP: Sound
    readonly BLOCK_SNOW_BREAK: Sound
    readonly BLOCK_SNOW_FALL: Sound
    readonly BLOCK_SNOW_HIT: Sound
    readonly BLOCK_SNOW_PLACE: Sound
    readonly BLOCK_SNOW_STEP: Sound
    readonly BLOCK_SOUL_SAND_BREAK: Sound
    readonly BLOCK_SOUL_SAND_FALL: Sound
    readonly BLOCK_SOUL_SAND_HIT: Sound
    readonly BLOCK_SOUL_SAND_PLACE: Sound
    readonly BLOCK_SOUL_SAND_STEP: Sound
    readonly BLOCK_SOUL_SOIL_BREAK: Sound
    readonly BLOCK_SOUL_SOIL_FALL: Sound
    readonly BLOCK_SOUL_SOIL_HIT: Sound
    readonly BLOCK_SOUL_SOIL_PLACE: Sound
    readonly BLOCK_SOUL_SOIL_STEP: Sound
    readonly BLOCK_SPORE_BLOSSOM_BREAK: Sound
    readonly BLOCK_SPORE_BLOSSOM_FALL: Sound
    readonly BLOCK_SPORE_BLOSSOM_HIT: Sound
    readonly BLOCK_SPORE_BLOSSOM_PLACE: Sound
    readonly BLOCK_SPORE_BLOSSOM_STEP: Sound
    readonly BLOCK_STEM_BREAK: Sound
    readonly BLOCK_STEM_FALL: Sound
    readonly BLOCK_STEM_HIT: Sound
    readonly BLOCK_STEM_PLACE: Sound
    readonly BLOCK_STEM_STEP: Sound
    readonly BLOCK_STONE_BREAK: Sound
    readonly BLOCK_STONE_BUTTON_CLICK_OFF: Sound
    readonly BLOCK_STONE_BUTTON_CLICK_ON: Sound
    readonly BLOCK_STONE_FALL: Sound
    readonly BLOCK_STONE_HIT: Sound
    readonly BLOCK_STONE_PLACE: Sound
    readonly BLOCK_STONE_PRESSURE_PLATE_CLICK_OFF: Sound
    readonly BLOCK_STONE_PRESSURE_PLATE_CLICK_ON: Sound
    readonly BLOCK_STONE_STEP: Sound
    readonly BLOCK_SUSPICIOUS_GRAVEL_BREAK: Sound
    readonly BLOCK_SUSPICIOUS_GRAVEL_FALL: Sound
    readonly BLOCK_SUSPICIOUS_GRAVEL_HIT: Sound
    readonly BLOCK_SUSPICIOUS_GRAVEL_PLACE: Sound
    readonly BLOCK_SUSPICIOUS_GRAVEL_STEP: Sound
    readonly BLOCK_SUSPICIOUS_SAND_BREAK: Sound
    readonly BLOCK_SUSPICIOUS_SAND_FALL: Sound
    readonly BLOCK_SUSPICIOUS_SAND_HIT: Sound
    readonly BLOCK_SUSPICIOUS_SAND_PLACE: Sound
    readonly BLOCK_SUSPICIOUS_SAND_STEP: Sound
    readonly BLOCK_SWEET_BERRY_BUSH_BREAK: Sound
    readonly BLOCK_SWEET_BERRY_BUSH_PICK_BERRIES: Sound
    readonly BLOCK_SWEET_BERRY_BUSH_PLACE: Sound
    readonly BLOCK_TRIPWIRE_ATTACH: Sound
    readonly BLOCK_TRIPWIRE_CLICK_OFF: Sound
    readonly BLOCK_TRIPWIRE_CLICK_ON: Sound
    readonly BLOCK_TRIPWIRE_DETACH: Sound
    readonly BLOCK_TUFF_BREAK: Sound
    readonly BLOCK_TUFF_FALL: Sound
    readonly BLOCK_TUFF_HIT: Sound
    readonly BLOCK_TUFF_PLACE: Sound
    readonly BLOCK_TUFF_STEP: Sound
    readonly BLOCK_VINE_BREAK: Sound
    readonly BLOCK_VINE_FALL: Sound
    readonly BLOCK_VINE_HIT: Sound
    readonly BLOCK_VINE_PLACE: Sound
    readonly BLOCK_VINE_STEP: Sound
    readonly BLOCK_WART_BLOCK_BREAK: Sound
    readonly BLOCK_WART_BLOCK_FALL: Sound
    readonly BLOCK_WART_BLOCK_HIT: Sound
    readonly BLOCK_WART_BLOCK_PLACE: Sound
    readonly BLOCK_WART_BLOCK_STEP: Sound
    readonly BLOCK_WATER_AMBIENT: Sound
    readonly BLOCK_WEEPING_VINES_BREAK: Sound
    readonly BLOCK_WEEPING_VINES_FALL: Sound
    readonly BLOCK_WEEPING_VINES_HIT: Sound
    readonly BLOCK_WEEPING_VINES_PLACE: Sound
    readonly BLOCK_WEEPING_VINES_STEP: Sound
    readonly BLOCK_WET_GRASS_BREAK: Sound
    readonly BLOCK_WET_GRASS_FALL: Sound
    readonly BLOCK_WET_GRASS_HIT: Sound
    readonly BLOCK_WET_GRASS_PLACE: Sound
    readonly BLOCK_WET_GRASS_STEP: Sound
    readonly BLOCK_WOODEN_BUTTON_CLICK_OFF: Sound
    readonly BLOCK_WOODEN_BUTTON_CLICK_ON: Sound
    readonly BLOCK_WOODEN_DOOR_CLOSE: Sound
    readonly BLOCK_WOODEN_DOOR_OPEN: Sound
    readonly BLOCK_WOODEN_PRESSURE_PLATE_CLICK_OFF: Sound
    readonly BLOCK_WOODEN_PRESSURE_PLATE_CLICK_ON: Sound
    readonly BLOCK_WOODEN_TRAPDOOR_CLOSE: Sound
    readonly BLOCK_WOODEN_TRAPDOOR_OPEN: Sound
    readonly BLOCK_WOOD_BREAK: Sound
    readonly BLOCK_WOOD_FALL: Sound
    readonly BLOCK_WOOD_HIT: Sound
    readonly BLOCK_WOOD_PLACE: Sound
    readonly BLOCK_WOOD_STEP: Sound
    readonly BLOCK_WOOL_BREAK: Sound
    readonly BLOCK_WOOL_FALL: Sound
    readonly BLOCK_WOOL_HIT: Sound
    readonly BLOCK_WOOL_PLACE: Sound
    readonly BLOCK_WOOL_STEP: Sound
    readonly ENCHANT_THORNS_HIT: Sound
    readonly ENTITY_ALLAY_AMBIENT_WITHOUT_ITEM: Sound
    readonly ENTITY_ALLAY_AMBIENT_WITH_ITEM: Sound
    readonly ENTITY_ALLAY_DEATH: Sound
    readonly ENTITY_ALLAY_HURT: Sound
    readonly ENTITY_ALLAY_ITEM_GIVEN: Sound
    readonly ENTITY_ALLAY_ITEM_TAKEN: Sound
    readonly ENTITY_ALLAY_ITEM_THROWN: Sound
    readonly ENTITY_ARMOR_STAND_BREAK: Sound
    readonly ENTITY_ARMOR_STAND_FALL: Sound
    readonly ENTITY_ARMOR_STAND_HIT: Sound
    readonly ENTITY_ARMOR_STAND_PLACE: Sound
    readonly ENTITY_ARROW_HIT: Sound
    readonly ENTITY_ARROW_HIT_PLAYER: Sound
    readonly ENTITY_ARROW_SHOOT: Sound
    readonly ENTITY_AXOLOTL_ATTACK: Sound
    readonly ENTITY_AXOLOTL_DEATH: Sound
    readonly ENTITY_AXOLOTL_HURT: Sound
    readonly ENTITY_AXOLOTL_IDLE_AIR: Sound
    readonly ENTITY_AXOLOTL_IDLE_WATER: Sound
    readonly ENTITY_AXOLOTL_SPLASH: Sound
    readonly ENTITY_AXOLOTL_SWIM: Sound
    readonly ENTITY_BAT_AMBIENT: Sound
    readonly ENTITY_BAT_DEATH: Sound
    readonly ENTITY_BAT_HURT: Sound
    readonly ENTITY_BAT_LOOP: Sound
    readonly ENTITY_BAT_TAKEOFF: Sound
    readonly ENTITY_BEE_DEATH: Sound
    readonly ENTITY_BEE_HURT: Sound
    readonly ENTITY_BEE_LOOP: Sound
    readonly ENTITY_BEE_LOOP_AGGRESSIVE: Sound
    readonly ENTITY_BEE_POLLINATE: Sound
    readonly ENTITY_BEE_STING: Sound
    readonly ENTITY_BLAZE_AMBIENT: Sound
    readonly ENTITY_BLAZE_BURN: Sound
    readonly ENTITY_BLAZE_DEATH: Sound
    readonly ENTITY_BLAZE_HURT: Sound
    readonly ENTITY_BLAZE_SHOOT: Sound
    readonly ENTITY_BOAT_PADDLE_LAND: Sound
    readonly ENTITY_BOAT_PADDLE_WATER: Sound
    readonly ENTITY_CAMEL_AMBIENT: Sound
    readonly ENTITY_CAMEL_DASH: Sound
    readonly ENTITY_CAMEL_DASH_READY: Sound
    readonly ENTITY_CAMEL_DEATH: Sound
    readonly ENTITY_CAMEL_EAT: Sound
    readonly ENTITY_CAMEL_HURT: Sound
    readonly ENTITY_CAMEL_SADDLE: Sound
    readonly ENTITY_CAMEL_SIT: Sound
    readonly ENTITY_CAMEL_STAND: Sound
    readonly ENTITY_CAMEL_STEP: Sound
    readonly ENTITY_CAMEL_STEP_SAND: Sound
    readonly ENTITY_CAT_AMBIENT: Sound
    readonly ENTITY_CAT_BEG_FOR_FOOD: Sound
    readonly ENTITY_CAT_DEATH: Sound
    readonly ENTITY_CAT_EAT: Sound
    readonly ENTITY_CAT_HISS: Sound
    readonly ENTITY_CAT_HURT: Sound
    readonly ENTITY_CAT_PURR: Sound
    readonly ENTITY_CAT_PURREOW: Sound
    readonly ENTITY_CAT_STRAY_AMBIENT: Sound
    readonly ENTITY_CHICKEN_AMBIENT: Sound
    readonly ENTITY_CHICKEN_DEATH: Sound
    readonly ENTITY_CHICKEN_EGG: Sound
    readonly ENTITY_CHICKEN_HURT: Sound
    readonly ENTITY_CHICKEN_STEP: Sound
    readonly ENTITY_COD_AMBIENT: Sound
    readonly ENTITY_COD_DEATH: Sound
    readonly ENTITY_COD_FLOP: Sound
    readonly ENTITY_COD_HURT: Sound
    readonly ENTITY_COW_AMBIENT: Sound
    readonly ENTITY_COW_DEATH: Sound
    readonly ENTITY_COW_HURT: Sound
    readonly ENTITY_COW_MILK: Sound
    readonly ENTITY_COW_STEP: Sound
    readonly ENTITY_CREEPER_DEATH: Sound
    readonly ENTITY_CREEPER_HURT: Sound
    readonly ENTITY_CREEPER_PRIMED: Sound
    readonly ENTITY_DOLPHIN_AMBIENT: Sound
    readonly ENTITY_DOLPHIN_AMBIENT_WATER: Sound
    readonly ENTITY_DOLPHIN_ATTACK: Sound
    readonly ENTITY_DOLPHIN_DEATH: Sound
    readonly ENTITY_DOLPHIN_EAT: Sound
    readonly ENTITY_DOLPHIN_HURT: Sound
    readonly ENTITY_DOLPHIN_JUMP: Sound
    readonly ENTITY_DOLPHIN_PLAY: Sound
    readonly ENTITY_DOLPHIN_SPLASH: Sound
    readonly ENTITY_DOLPHIN_SWIM: Sound
    readonly ENTITY_DONKEY_AMBIENT: Sound
    readonly ENTITY_DONKEY_ANGRY: Sound
    readonly ENTITY_DONKEY_CHEST: Sound
    readonly ENTITY_DONKEY_DEATH: Sound
    readonly ENTITY_DONKEY_EAT: Sound
    readonly ENTITY_DONKEY_HURT: Sound
    readonly ENTITY_DRAGON_FIREBALL_EXPLODE: Sound
    readonly ENTITY_DROWNED_AMBIENT: Sound
    readonly ENTITY_DROWNED_AMBIENT_WATER: Sound
    readonly ENTITY_DROWNED_DEATH: Sound
    readonly ENTITY_DROWNED_DEATH_WATER: Sound
    readonly ENTITY_DROWNED_HURT: Sound
    readonly ENTITY_DROWNED_HURT_WATER: Sound
    readonly ENTITY_DROWNED_SHOOT: Sound
    readonly ENTITY_DROWNED_STEP: Sound
    readonly ENTITY_DROWNED_SWIM: Sound
    readonly ENTITY_EGG_THROW: Sound
    readonly ENTITY_ELDER_GUARDIAN_AMBIENT: Sound
    readonly ENTITY_ELDER_GUARDIAN_AMBIENT_LAND: Sound
    readonly ENTITY_ELDER_GUARDIAN_CURSE: Sound
    readonly ENTITY_ELDER_GUARDIAN_DEATH: Sound
    readonly ENTITY_ELDER_GUARDIAN_DEATH_LAND: Sound
    readonly ENTITY_ELDER_GUARDIAN_FLOP: Sound
    readonly ENTITY_ELDER_GUARDIAN_HURT: Sound
    readonly ENTITY_ELDER_GUARDIAN_HURT_LAND: Sound
    readonly ENTITY_ENDERMAN_AMBIENT: Sound
    readonly ENTITY_ENDERMAN_DEATH: Sound
    readonly ENTITY_ENDERMAN_HURT: Sound
    readonly ENTITY_ENDERMAN_SCREAM: Sound
    readonly ENTITY_ENDERMAN_STARE: Sound
    readonly ENTITY_ENDERMAN_TELEPORT: Sound
    readonly ENTITY_ENDERMITE_AMBIENT: Sound
    readonly ENTITY_ENDERMITE_DEATH: Sound
    readonly ENTITY_ENDERMITE_HURT: Sound
    readonly ENTITY_ENDERMITE_STEP: Sound
    readonly ENTITY_ENDER_DRAGON_AMBIENT: Sound
    readonly ENTITY_ENDER_DRAGON_DEATH: Sound
    readonly ENTITY_ENDER_DRAGON_FLAP: Sound
    readonly ENTITY_ENDER_DRAGON_GROWL: Sound
    readonly ENTITY_ENDER_DRAGON_HURT: Sound
    readonly ENTITY_ENDER_DRAGON_SHOOT: Sound
    readonly ENTITY_ENDER_EYE_DEATH: Sound
    readonly ENTITY_ENDER_EYE_LAUNCH: Sound
    readonly ENTITY_ENDER_PEARL_THROW: Sound
    readonly ENTITY_EVOKER_AMBIENT: Sound
    readonly ENTITY_EVOKER_CAST_SPELL: Sound
    readonly ENTITY_EVOKER_CELEBRATE: Sound
    readonly ENTITY_EVOKER_DEATH: Sound
    readonly ENTITY_EVOKER_FANGS_ATTACK: Sound
    readonly ENTITY_EVOKER_HURT: Sound
    readonly ENTITY_EVOKER_PREPARE_ATTACK: Sound
    readonly ENTITY_EVOKER_PREPARE_SUMMON: Sound
    readonly ENTITY_EVOKER_PREPARE_WOLOLO: Sound
    readonly ENTITY_EXPERIENCE_BOTTLE_THROW: Sound
    readonly ENTITY_EXPERIENCE_ORB_PICKUP: Sound
    readonly ENTITY_FIREWORK_ROCKET_BLAST: Sound
    readonly ENTITY_FIREWORK_ROCKET_BLAST_FAR: Sound
    readonly ENTITY_FIREWORK_ROCKET_LARGE_BLAST: Sound
    readonly ENTITY_FIREWORK_ROCKET_LARGE_BLAST_FAR: Sound
    readonly ENTITY_FIREWORK_ROCKET_LAUNCH: Sound
    readonly ENTITY_FIREWORK_ROCKET_SHOOT: Sound
    readonly ENTITY_FIREWORK_ROCKET_TWINKLE: Sound
    readonly ENTITY_FIREWORK_ROCKET_TWINKLE_FAR: Sound
    readonly ENTITY_FISHING_BOBBER_RETRIEVE: Sound
    readonly ENTITY_FISHING_BOBBER_SPLASH: Sound
    readonly ENTITY_FISHING_BOBBER_THROW: Sound
    readonly ENTITY_FISH_SWIM: Sound
    readonly ENTITY_FOX_AGGRO: Sound
    readonly ENTITY_FOX_AMBIENT: Sound
    readonly ENTITY_FOX_BITE: Sound
    readonly ENTITY_FOX_DEATH: Sound
    readonly ENTITY_FOX_EAT: Sound
    readonly ENTITY_FOX_HURT: Sound
    readonly ENTITY_FOX_SCREECH: Sound
    readonly ENTITY_FOX_SLEEP: Sound
    readonly ENTITY_FOX_SNIFF: Sound
    readonly ENTITY_FOX_SPIT: Sound
    readonly ENTITY_FOX_TELEPORT: Sound
    readonly ENTITY_FROG_AMBIENT: Sound
    readonly ENTITY_FROG_DEATH: Sound
    readonly ENTITY_FROG_EAT: Sound
    readonly ENTITY_FROG_HURT: Sound
    readonly ENTITY_FROG_LAY_SPAWN: Sound
    readonly ENTITY_FROG_LONG_JUMP: Sound
    readonly ENTITY_FROG_STEP: Sound
    readonly ENTITY_FROG_TONGUE: Sound
    readonly ENTITY_GENERIC_BIG_FALL: Sound
    readonly ENTITY_GENERIC_BURN: Sound
    readonly ENTITY_GENERIC_DEATH: Sound
    readonly ENTITY_GENERIC_DRINK: Sound
    readonly ENTITY_GENERIC_EAT: Sound
    readonly ENTITY_GENERIC_EXPLODE: Sound
    readonly ENTITY_GENERIC_EXTINGUISH_FIRE: Sound
    readonly ENTITY_GENERIC_HURT: Sound
    readonly ENTITY_GENERIC_SMALL_FALL: Sound
    readonly ENTITY_GENERIC_SPLASH: Sound
    readonly ENTITY_GENERIC_SWIM: Sound
    readonly ENTITY_GHAST_AMBIENT: Sound
    readonly ENTITY_GHAST_DEATH: Sound
    readonly ENTITY_GHAST_HURT: Sound
    readonly ENTITY_GHAST_SCREAM: Sound
    readonly ENTITY_GHAST_SHOOT: Sound
    readonly ENTITY_GHAST_WARN: Sound
    readonly ENTITY_GLOW_ITEM_FRAME_ADD_ITEM: Sound
    readonly ENTITY_GLOW_ITEM_FRAME_BREAK: Sound
    readonly ENTITY_GLOW_ITEM_FRAME_PLACE: Sound
    readonly ENTITY_GLOW_ITEM_FRAME_REMOVE_ITEM: Sound
    readonly ENTITY_GLOW_ITEM_FRAME_ROTATE_ITEM: Sound
    readonly ENTITY_GLOW_SQUID_AMBIENT: Sound
    readonly ENTITY_GLOW_SQUID_DEATH: Sound
    readonly ENTITY_GLOW_SQUID_HURT: Sound
    readonly ENTITY_GLOW_SQUID_SQUIRT: Sound
    readonly ENTITY_GOAT_AMBIENT: Sound
    readonly ENTITY_GOAT_DEATH: Sound
    readonly ENTITY_GOAT_EAT: Sound
    readonly ENTITY_GOAT_HORN_BREAK: Sound
    readonly ENTITY_GOAT_HURT: Sound
    readonly ENTITY_GOAT_LONG_JUMP: Sound
    readonly ENTITY_GOAT_MILK: Sound
    readonly ENTITY_GOAT_PREPARE_RAM: Sound
    readonly ENTITY_GOAT_RAM_IMPACT: Sound
    readonly ENTITY_GOAT_SCREAMING_AMBIENT: Sound
    readonly ENTITY_GOAT_SCREAMING_DEATH: Sound
    readonly ENTITY_GOAT_SCREAMING_EAT: Sound
    readonly ENTITY_GOAT_SCREAMING_HORN_BREAK: Sound
    readonly ENTITY_GOAT_SCREAMING_HURT: Sound
    readonly ENTITY_GOAT_SCREAMING_LONG_JUMP: Sound
    readonly ENTITY_GOAT_SCREAMING_MILK: Sound
    readonly ENTITY_GOAT_SCREAMING_PREPARE_RAM: Sound
    readonly ENTITY_GOAT_SCREAMING_RAM_IMPACT: Sound
    readonly ENTITY_GOAT_STEP: Sound
    readonly ENTITY_GUARDIAN_AMBIENT: Sound
    readonly ENTITY_GUARDIAN_AMBIENT_LAND: Sound
    readonly ENTITY_GUARDIAN_ATTACK: Sound
    readonly ENTITY_GUARDIAN_DEATH: Sound
    readonly ENTITY_GUARDIAN_DEATH_LAND: Sound
    readonly ENTITY_GUARDIAN_FLOP: Sound
    readonly ENTITY_GUARDIAN_HURT: Sound
    readonly ENTITY_GUARDIAN_HURT_LAND: Sound
    readonly ENTITY_HOGLIN_AMBIENT: Sound
    readonly ENTITY_HOGLIN_ANGRY: Sound
    readonly ENTITY_HOGLIN_ATTACK: Sound
    readonly ENTITY_HOGLIN_CONVERTED_TO_ZOMBIFIED: Sound
    readonly ENTITY_HOGLIN_DEATH: Sound
    readonly ENTITY_HOGLIN_HURT: Sound
    readonly ENTITY_HOGLIN_RETREAT: Sound
    readonly ENTITY_HOGLIN_STEP: Sound
    readonly ENTITY_HORSE_AMBIENT: Sound
    readonly ENTITY_HORSE_ANGRY: Sound
    readonly ENTITY_HORSE_ARMOR: Sound
    readonly ENTITY_HORSE_BREATHE: Sound
    readonly ENTITY_HORSE_DEATH: Sound
    readonly ENTITY_HORSE_EAT: Sound
    readonly ENTITY_HORSE_GALLOP: Sound
    readonly ENTITY_HORSE_HURT: Sound
    readonly ENTITY_HORSE_JUMP: Sound
    readonly ENTITY_HORSE_LAND: Sound
    readonly ENTITY_HORSE_SADDLE: Sound
    readonly ENTITY_HORSE_STEP: Sound
    readonly ENTITY_HORSE_STEP_WOOD: Sound
    readonly ENTITY_HOSTILE_BIG_FALL: Sound
    readonly ENTITY_HOSTILE_DEATH: Sound
    readonly ENTITY_HOSTILE_HURT: Sound
    readonly ENTITY_HOSTILE_SMALL_FALL: Sound
    readonly ENTITY_HOSTILE_SPLASH: Sound
    readonly ENTITY_HOSTILE_SWIM: Sound
    readonly ENTITY_HUSK_AMBIENT: Sound
    readonly ENTITY_HUSK_CONVERTED_TO_ZOMBIE: Sound
    readonly ENTITY_HUSK_DEATH: Sound
    readonly ENTITY_HUSK_HURT: Sound
    readonly ENTITY_HUSK_STEP: Sound
    readonly ENTITY_ILLUSIONER_AMBIENT: Sound
    readonly ENTITY_ILLUSIONER_CAST_SPELL: Sound
    readonly ENTITY_ILLUSIONER_DEATH: Sound
    readonly ENTITY_ILLUSIONER_HURT: Sound
    readonly ENTITY_ILLUSIONER_MIRROR_MOVE: Sound
    readonly ENTITY_ILLUSIONER_PREPARE_BLINDNESS: Sound
    readonly ENTITY_ILLUSIONER_PREPARE_MIRROR: Sound
    readonly ENTITY_IRON_GOLEM_ATTACK: Sound
    readonly ENTITY_IRON_GOLEM_DAMAGE: Sound
    readonly ENTITY_IRON_GOLEM_DEATH: Sound
    readonly ENTITY_IRON_GOLEM_HURT: Sound
    readonly ENTITY_IRON_GOLEM_REPAIR: Sound
    readonly ENTITY_IRON_GOLEM_STEP: Sound
    readonly ENTITY_ITEM_BREAK: Sound
    readonly ENTITY_ITEM_FRAME_ADD_ITEM: Sound
    readonly ENTITY_ITEM_FRAME_BREAK: Sound
    readonly ENTITY_ITEM_FRAME_PLACE: Sound
    readonly ENTITY_ITEM_FRAME_REMOVE_ITEM: Sound
    readonly ENTITY_ITEM_FRAME_ROTATE_ITEM: Sound
    readonly ENTITY_ITEM_PICKUP: Sound
    readonly ENTITY_LEASH_KNOT_BREAK: Sound
    readonly ENTITY_LEASH_KNOT_PLACE: Sound
    readonly ENTITY_LIGHTNING_BOLT_IMPACT: Sound
    readonly ENTITY_LIGHTNING_BOLT_THUNDER: Sound
    readonly ENTITY_LINGERING_POTION_THROW: Sound
    readonly ENTITY_LLAMA_AMBIENT: Sound
    readonly ENTITY_LLAMA_ANGRY: Sound
    readonly ENTITY_LLAMA_CHEST: Sound
    readonly ENTITY_LLAMA_DEATH: Sound
    readonly ENTITY_LLAMA_EAT: Sound
    readonly ENTITY_LLAMA_HURT: Sound
    readonly ENTITY_LLAMA_SPIT: Sound
    readonly ENTITY_LLAMA_STEP: Sound
    readonly ENTITY_LLAMA_SWAG: Sound
    readonly ENTITY_MAGMA_CUBE_DEATH: Sound
    readonly ENTITY_MAGMA_CUBE_DEATH_SMALL: Sound
    readonly ENTITY_MAGMA_CUBE_HURT: Sound
    readonly ENTITY_MAGMA_CUBE_HURT_SMALL: Sound
    readonly ENTITY_MAGMA_CUBE_JUMP: Sound
    readonly ENTITY_MAGMA_CUBE_SQUISH: Sound
    readonly ENTITY_MAGMA_CUBE_SQUISH_SMALL: Sound
    readonly ENTITY_MINECART_INSIDE: Sound
    readonly ENTITY_MINECART_INSIDE_UNDERWATER: Sound
    readonly ENTITY_MINECART_RIDING: Sound
    readonly ENTITY_MOOSHROOM_CONVERT: Sound
    readonly ENTITY_MOOSHROOM_EAT: Sound
    readonly ENTITY_MOOSHROOM_MILK: Sound
    readonly ENTITY_MOOSHROOM_SHEAR: Sound
    readonly ENTITY_MOOSHROOM_SUSPICIOUS_MILK: Sound
    readonly ENTITY_MULE_AMBIENT: Sound
    readonly ENTITY_MULE_ANGRY: Sound
    readonly ENTITY_MULE_CHEST: Sound
    readonly ENTITY_MULE_DEATH: Sound
    readonly ENTITY_MULE_EAT: Sound
    readonly ENTITY_MULE_HURT: Sound
    readonly ENTITY_OCELOT_AMBIENT: Sound
    readonly ENTITY_OCELOT_DEATH: Sound
    readonly ENTITY_OCELOT_HURT: Sound
    readonly ENTITY_PAINTING_BREAK: Sound
    readonly ENTITY_PAINTING_PLACE: Sound
    readonly ENTITY_PANDA_AGGRESSIVE_AMBIENT: Sound
    readonly ENTITY_PANDA_AMBIENT: Sound
    readonly ENTITY_PANDA_BITE: Sound
    readonly ENTITY_PANDA_CANT_BREED: Sound
    readonly ENTITY_PANDA_DEATH: Sound
    readonly ENTITY_PANDA_EAT: Sound
    readonly ENTITY_PANDA_HURT: Sound
    readonly ENTITY_PANDA_PRE_SNEEZE: Sound
    readonly ENTITY_PANDA_SNEEZE: Sound
    readonly ENTITY_PANDA_STEP: Sound
    readonly ENTITY_PANDA_WORRIED_AMBIENT: Sound
    readonly ENTITY_PARROT_AMBIENT: Sound
    readonly ENTITY_PARROT_DEATH: Sound
    readonly ENTITY_PARROT_EAT: Sound
    readonly ENTITY_PARROT_FLY: Sound
    readonly ENTITY_PARROT_HURT: Sound
    readonly ENTITY_PARROT_IMITATE_BLAZE: Sound
    readonly ENTITY_PARROT_IMITATE_CREEPER: Sound
    readonly ENTITY_PARROT_IMITATE_DROWNED: Sound
    readonly ENTITY_PARROT_IMITATE_ELDER_GUARDIAN: Sound
    readonly ENTITY_PARROT_IMITATE_ENDERMITE: Sound
    readonly ENTITY_PARROT_IMITATE_ENDER_DRAGON: Sound
    readonly ENTITY_PARROT_IMITATE_EVOKER: Sound
    readonly ENTITY_PARROT_IMITATE_GHAST: Sound
    readonly ENTITY_PARROT_IMITATE_GUARDIAN: Sound
    readonly ENTITY_PARROT_IMITATE_HOGLIN: Sound
    readonly ENTITY_PARROT_IMITATE_HUSK: Sound
    readonly ENTITY_PARROT_IMITATE_ILLUSIONER: Sound
    readonly ENTITY_PARROT_IMITATE_MAGMA_CUBE: Sound
    readonly ENTITY_PARROT_IMITATE_PHANTOM: Sound
    readonly ENTITY_PARROT_IMITATE_PIGLIN: Sound
    readonly ENTITY_PARROT_IMITATE_PIGLIN_BRUTE: Sound
    readonly ENTITY_PARROT_IMITATE_PILLAGER: Sound
    readonly ENTITY_PARROT_IMITATE_RAVAGER: Sound
    readonly ENTITY_PARROT_IMITATE_SHULKER: Sound
    readonly ENTITY_PARROT_IMITATE_SILVERFISH: Sound
    readonly ENTITY_PARROT_IMITATE_SKELETON: Sound
    readonly ENTITY_PARROT_IMITATE_SLIME: Sound
    readonly ENTITY_PARROT_IMITATE_SPIDER: Sound
    readonly ENTITY_PARROT_IMITATE_STRAY: Sound
    readonly ENTITY_PARROT_IMITATE_VEX: Sound
    readonly ENTITY_PARROT_IMITATE_VINDICATOR: Sound
    readonly ENTITY_PARROT_IMITATE_WARDEN: Sound
    readonly ENTITY_PARROT_IMITATE_WITCH: Sound
    readonly ENTITY_PARROT_IMITATE_WITHER: Sound
    readonly ENTITY_PARROT_IMITATE_WITHER_SKELETON: Sound
    readonly ENTITY_PARROT_IMITATE_ZOGLIN: Sound
    readonly ENTITY_PARROT_IMITATE_ZOMBIE: Sound
    readonly ENTITY_PARROT_IMITATE_ZOMBIE_VILLAGER: Sound
    readonly ENTITY_PARROT_STEP: Sound
    readonly ENTITY_PHANTOM_AMBIENT: Sound
    readonly ENTITY_PHANTOM_BITE: Sound
    readonly ENTITY_PHANTOM_DEATH: Sound
    readonly ENTITY_PHANTOM_FLAP: Sound
    readonly ENTITY_PHANTOM_HURT: Sound
    readonly ENTITY_PHANTOM_SWOOP: Sound
    readonly ENTITY_PIGLIN_ADMIRING_ITEM: Sound
    readonly ENTITY_PIGLIN_AMBIENT: Sound
    readonly ENTITY_PIGLIN_ANGRY: Sound
    readonly ENTITY_PIGLIN_BRUTE_AMBIENT: Sound
    readonly ENTITY_PIGLIN_BRUTE_ANGRY: Sound
    readonly ENTITY_PIGLIN_BRUTE_CONVERTED_TO_ZOMBIFIED: Sound
    readonly ENTITY_PIGLIN_BRUTE_DEATH: Sound
    readonly ENTITY_PIGLIN_BRUTE_HURT: Sound
    readonly ENTITY_PIGLIN_BRUTE_STEP: Sound
    readonly ENTITY_PIGLIN_CELEBRATE: Sound
    readonly ENTITY_PIGLIN_CONVERTED_TO_ZOMBIFIED: Sound
    readonly ENTITY_PIGLIN_DEATH: Sound
    readonly ENTITY_PIGLIN_HURT: Sound
    readonly ENTITY_PIGLIN_JEALOUS: Sound
    readonly ENTITY_PIGLIN_RETREAT: Sound
    readonly ENTITY_PIGLIN_STEP: Sound
    readonly ENTITY_PIG_AMBIENT: Sound
    readonly ENTITY_PIG_DEATH: Sound
    readonly ENTITY_PIG_HURT: Sound
    readonly ENTITY_PIG_SADDLE: Sound
    readonly ENTITY_PIG_STEP: Sound
    readonly ENTITY_PILLAGER_AMBIENT: Sound
    readonly ENTITY_PILLAGER_CELEBRATE: Sound
    readonly ENTITY_PILLAGER_DEATH: Sound
    readonly ENTITY_PILLAGER_HURT: Sound
    readonly ENTITY_PLAYER_ATTACK_CRIT: Sound
    readonly ENTITY_PLAYER_ATTACK_KNOCKBACK: Sound
    readonly ENTITY_PLAYER_ATTACK_NODAMAGE: Sound
    readonly ENTITY_PLAYER_ATTACK_STRONG: Sound
    readonly ENTITY_PLAYER_ATTACK_SWEEP: Sound
    readonly ENTITY_PLAYER_ATTACK_WEAK: Sound
    readonly ENTITY_PLAYER_BIG_FALL: Sound
    readonly ENTITY_PLAYER_BREATH: Sound
    readonly ENTITY_PLAYER_BURP: Sound
    readonly ENTITY_PLAYER_DEATH: Sound
    readonly ENTITY_PLAYER_HURT: Sound
    readonly ENTITY_PLAYER_HURT_DROWN: Sound
    readonly ENTITY_PLAYER_HURT_FREEZE: Sound
    readonly ENTITY_PLAYER_HURT_ON_FIRE: Sound
    readonly ENTITY_PLAYER_HURT_SWEET_BERRY_BUSH: Sound
    readonly ENTITY_PLAYER_LEVELUP: Sound
    readonly ENTITY_PLAYER_SMALL_FALL: Sound
    readonly ENTITY_PLAYER_SPLASH: Sound
    readonly ENTITY_PLAYER_SPLASH_HIGH_SPEED: Sound
    readonly ENTITY_PLAYER_SWIM: Sound
    readonly ENTITY_POLAR_BEAR_AMBIENT: Sound
    readonly ENTITY_POLAR_BEAR_AMBIENT_BABY: Sound
    readonly ENTITY_POLAR_BEAR_DEATH: Sound
    readonly ENTITY_POLAR_BEAR_HURT: Sound
    readonly ENTITY_POLAR_BEAR_STEP: Sound
    readonly ENTITY_POLAR_BEAR_WARNING: Sound
    readonly ENTITY_PUFFER_FISH_AMBIENT: Sound
    readonly ENTITY_PUFFER_FISH_BLOW_OUT: Sound
    readonly ENTITY_PUFFER_FISH_BLOW_UP: Sound
    readonly ENTITY_PUFFER_FISH_DEATH: Sound
    readonly ENTITY_PUFFER_FISH_FLOP: Sound
    readonly ENTITY_PUFFER_FISH_HURT: Sound
    readonly ENTITY_PUFFER_FISH_STING: Sound
    readonly ENTITY_RABBIT_AMBIENT: Sound
    readonly ENTITY_RABBIT_ATTACK: Sound
    readonly ENTITY_RABBIT_DEATH: Sound
    readonly ENTITY_RABBIT_HURT: Sound
    readonly ENTITY_RABBIT_JUMP: Sound
    readonly ENTITY_RAVAGER_AMBIENT: Sound
    readonly ENTITY_RAVAGER_ATTACK: Sound
    readonly ENTITY_RAVAGER_CELEBRATE: Sound
    readonly ENTITY_RAVAGER_DEATH: Sound
    readonly ENTITY_RAVAGER_HURT: Sound
    readonly ENTITY_RAVAGER_ROAR: Sound
    readonly ENTITY_RAVAGER_STEP: Sound
    readonly ENTITY_RAVAGER_STUNNED: Sound
    readonly ENTITY_SALMON_AMBIENT: Sound
    readonly ENTITY_SALMON_DEATH: Sound
    readonly ENTITY_SALMON_FLOP: Sound
    readonly ENTITY_SALMON_HURT: Sound
    readonly ENTITY_SHEEP_AMBIENT: Sound
    readonly ENTITY_SHEEP_DEATH: Sound
    readonly ENTITY_SHEEP_HURT: Sound
    readonly ENTITY_SHEEP_SHEAR: Sound
    readonly ENTITY_SHEEP_STEP: Sound
    readonly ENTITY_SHULKER_AMBIENT: Sound
    readonly ENTITY_SHULKER_BULLET_HIT: Sound
    readonly ENTITY_SHULKER_BULLET_HURT: Sound
    readonly ENTITY_SHULKER_CLOSE: Sound
    readonly ENTITY_SHULKER_DEATH: Sound
    readonly ENTITY_SHULKER_HURT: Sound
    readonly ENTITY_SHULKER_HURT_CLOSED: Sound
    readonly ENTITY_SHULKER_OPEN: Sound
    readonly ENTITY_SHULKER_SHOOT: Sound
    readonly ENTITY_SHULKER_TELEPORT: Sound
    readonly ENTITY_SILVERFISH_AMBIENT: Sound
    readonly ENTITY_SILVERFISH_DEATH: Sound
    readonly ENTITY_SILVERFISH_HURT: Sound
    readonly ENTITY_SILVERFISH_STEP: Sound
    readonly ENTITY_SKELETON_AMBIENT: Sound
    readonly ENTITY_SKELETON_CONVERTED_TO_STRAY: Sound
    readonly ENTITY_SKELETON_DEATH: Sound
    readonly ENTITY_SKELETON_HORSE_AMBIENT: Sound
    readonly ENTITY_SKELETON_HORSE_AMBIENT_WATER: Sound
    readonly ENTITY_SKELETON_HORSE_DEATH: Sound
    readonly ENTITY_SKELETON_HORSE_GALLOP_WATER: Sound
    readonly ENTITY_SKELETON_HORSE_HURT: Sound
    readonly ENTITY_SKELETON_HORSE_JUMP_WATER: Sound
    readonly ENTITY_SKELETON_HORSE_STEP_WATER: Sound
    readonly ENTITY_SKELETON_HORSE_SWIM: Sound
    readonly ENTITY_SKELETON_HURT: Sound
    readonly ENTITY_SKELETON_SHOOT: Sound
    readonly ENTITY_SKELETON_STEP: Sound
    readonly ENTITY_SLIME_ATTACK: Sound
    readonly ENTITY_SLIME_DEATH: Sound
    readonly ENTITY_SLIME_DEATH_SMALL: Sound
    readonly ENTITY_SLIME_HURT: Sound
    readonly ENTITY_SLIME_HURT_SMALL: Sound
    readonly ENTITY_SLIME_JUMP: Sound
    readonly ENTITY_SLIME_JUMP_SMALL: Sound
    readonly ENTITY_SLIME_SQUISH: Sound
    readonly ENTITY_SLIME_SQUISH_SMALL: Sound
    readonly ENTITY_SNIFFER_DEATH: Sound
    readonly ENTITY_SNIFFER_DIGGING: Sound
    readonly ENTITY_SNIFFER_DIGGING_STOP: Sound
    readonly ENTITY_SNIFFER_DROP_SEED: Sound
    readonly ENTITY_SNIFFER_EAT: Sound
    readonly ENTITY_SNIFFER_HAPPY: Sound
    readonly ENTITY_SNIFFER_HURT: Sound
    readonly ENTITY_SNIFFER_IDLE: Sound
    readonly ENTITY_SNIFFER_SCENTING: Sound
    readonly ENTITY_SNIFFER_SEARCHING: Sound
    readonly ENTITY_SNIFFER_SNIFFING: Sound
    readonly ENTITY_SNIFFER_STEP: Sound
    readonly ENTITY_SNOWBALL_THROW: Sound
    readonly ENTITY_SNOW_GOLEM_AMBIENT: Sound
    readonly ENTITY_SNOW_GOLEM_DEATH: Sound
    readonly ENTITY_SNOW_GOLEM_HURT: Sound
    readonly ENTITY_SNOW_GOLEM_SHEAR: Sound
    readonly ENTITY_SNOW_GOLEM_SHOOT: Sound
    readonly ENTITY_SPIDER_AMBIENT: Sound
    readonly ENTITY_SPIDER_DEATH: Sound
    readonly ENTITY_SPIDER_HURT: Sound
    readonly ENTITY_SPIDER_STEP: Sound
    readonly ENTITY_SPLASH_POTION_BREAK: Sound
    readonly ENTITY_SPLASH_POTION_THROW: Sound
    readonly ENTITY_SQUID_AMBIENT: Sound
    readonly ENTITY_SQUID_DEATH: Sound
    readonly ENTITY_SQUID_HURT: Sound
    readonly ENTITY_SQUID_SQUIRT: Sound
    readonly ENTITY_STRAY_AMBIENT: Sound
    readonly ENTITY_STRAY_DEATH: Sound
    readonly ENTITY_STRAY_HURT: Sound
    readonly ENTITY_STRAY_STEP: Sound
    readonly ENTITY_STRIDER_AMBIENT: Sound
    readonly ENTITY_STRIDER_DEATH: Sound
    readonly ENTITY_STRIDER_EAT: Sound
    readonly ENTITY_STRIDER_HAPPY: Sound
    readonly ENTITY_STRIDER_HURT: Sound
    readonly ENTITY_STRIDER_RETREAT: Sound
    readonly ENTITY_STRIDER_SADDLE: Sound
    readonly ENTITY_STRIDER_STEP: Sound
    readonly ENTITY_STRIDER_STEP_LAVA: Sound
    readonly ENTITY_TADPOLE_DEATH: Sound
    readonly ENTITY_TADPOLE_FLOP: Sound
    readonly ENTITY_TADPOLE_GROW_UP: Sound
    readonly ENTITY_TADPOLE_HURT: Sound
    readonly ENTITY_TNT_PRIMED: Sound
    readonly ENTITY_TROPICAL_FISH_AMBIENT: Sound
    readonly ENTITY_TROPICAL_FISH_DEATH: Sound
    readonly ENTITY_TROPICAL_FISH_FLOP: Sound
    readonly ENTITY_TROPICAL_FISH_HURT: Sound
    readonly ENTITY_TURTLE_AMBIENT_LAND: Sound
    readonly ENTITY_TURTLE_DEATH: Sound
    readonly ENTITY_TURTLE_DEATH_BABY: Sound
    readonly ENTITY_TURTLE_EGG_BREAK: Sound
    readonly ENTITY_TURTLE_EGG_CRACK: Sound
    readonly ENTITY_TURTLE_EGG_HATCH: Sound
    readonly ENTITY_TURTLE_HURT: Sound
    readonly ENTITY_TURTLE_HURT_BABY: Sound
    readonly ENTITY_TURTLE_LAY_EGG: Sound
    readonly ENTITY_TURTLE_SHAMBLE: Sound
    readonly ENTITY_TURTLE_SHAMBLE_BABY: Sound
    readonly ENTITY_TURTLE_SWIM: Sound
    readonly ENTITY_VEX_AMBIENT: Sound
    readonly ENTITY_VEX_CHARGE: Sound
    readonly ENTITY_VEX_DEATH: Sound
    readonly ENTITY_VEX_HURT: Sound
    readonly ENTITY_VILLAGER_AMBIENT: Sound
    readonly ENTITY_VILLAGER_CELEBRATE: Sound
    readonly ENTITY_VILLAGER_DEATH: Sound
    readonly ENTITY_VILLAGER_HURT: Sound
    readonly ENTITY_VILLAGER_NO: Sound
    readonly ENTITY_VILLAGER_TRADE: Sound
    readonly ENTITY_VILLAGER_WORK_ARMORER: Sound
    readonly ENTITY_VILLAGER_WORK_BUTCHER: Sound
    readonly ENTITY_VILLAGER_WORK_CARTOGRAPHER: Sound
    readonly ENTITY_VILLAGER_WORK_CLERIC: Sound
    readonly ENTITY_VILLAGER_WORK_FARMER: Sound
    readonly ENTITY_VILLAGER_WORK_FISHERMAN: Sound
    readonly ENTITY_VILLAGER_WORK_FLETCHER: Sound
    readonly ENTITY_VILLAGER_WORK_LEATHERWORKER: Sound
    readonly ENTITY_VILLAGER_WORK_LIBRARIAN: Sound
    readonly ENTITY_VILLAGER_WORK_MASON: Sound
    readonly ENTITY_VILLAGER_WORK_SHEPHERD: Sound
    readonly ENTITY_VILLAGER_WORK_TOOLSMITH: Sound
    readonly ENTITY_VILLAGER_WORK_WEAPONSMITH: Sound
    readonly ENTITY_VILLAGER_YES: Sound
    readonly ENTITY_VINDICATOR_AMBIENT: Sound
    readonly ENTITY_VINDICATOR_CELEBRATE: Sound
    readonly ENTITY_VINDICATOR_DEATH: Sound
    readonly ENTITY_VINDICATOR_HURT: Sound
    readonly ENTITY_WANDERING_TRADER_AMBIENT: Sound
    readonly ENTITY_WANDERING_TRADER_DEATH: Sound
    readonly ENTITY_WANDERING_TRADER_DISAPPEARED: Sound
    readonly ENTITY_WANDERING_TRADER_DRINK_MILK: Sound
    readonly ENTITY_WANDERING_TRADER_DRINK_POTION: Sound
    readonly ENTITY_WANDERING_TRADER_HURT: Sound
    readonly ENTITY_WANDERING_TRADER_NO: Sound
    readonly ENTITY_WANDERING_TRADER_REAPPEARED: Sound
    readonly ENTITY_WANDERING_TRADER_TRADE: Sound
    readonly ENTITY_WANDERING_TRADER_YES: Sound
    readonly ENTITY_WARDEN_AGITATED: Sound
    readonly ENTITY_WARDEN_AMBIENT: Sound
    readonly ENTITY_WARDEN_ANGRY: Sound
    readonly ENTITY_WARDEN_ATTACK_IMPACT: Sound
    readonly ENTITY_WARDEN_DEATH: Sound
    readonly ENTITY_WARDEN_DIG: Sound
    readonly ENTITY_WARDEN_EMERGE: Sound
    readonly ENTITY_WARDEN_HEARTBEAT: Sound
    readonly ENTITY_WARDEN_HURT: Sound
    readonly ENTITY_WARDEN_LISTENING: Sound
    readonly ENTITY_WARDEN_LISTENING_ANGRY: Sound
    readonly ENTITY_WARDEN_NEARBY_CLOSE: Sound
    readonly ENTITY_WARDEN_NEARBY_CLOSER: Sound
    readonly ENTITY_WARDEN_NEARBY_CLOSEST: Sound
    readonly ENTITY_WARDEN_ROAR: Sound
    readonly ENTITY_WARDEN_SNIFF: Sound
    readonly ENTITY_WARDEN_SONIC_BOOM: Sound
    readonly ENTITY_WARDEN_SONIC_CHARGE: Sound
    readonly ENTITY_WARDEN_STEP: Sound
    readonly ENTITY_WARDEN_TENDRIL_CLICKS: Sound
    readonly ENTITY_WITCH_AMBIENT: Sound
    readonly ENTITY_WITCH_CELEBRATE: Sound
    readonly ENTITY_WITCH_DEATH: Sound
    readonly ENTITY_WITCH_DRINK: Sound
    readonly ENTITY_WITCH_HURT: Sound
    readonly ENTITY_WITCH_THROW: Sound
    readonly ENTITY_WITHER_AMBIENT: Sound
    readonly ENTITY_WITHER_BREAK_BLOCK: Sound
    readonly ENTITY_WITHER_DEATH: Sound
    readonly ENTITY_WITHER_HURT: Sound
    readonly ENTITY_WITHER_SHOOT: Sound
    readonly ENTITY_WITHER_SKELETON_AMBIENT: Sound
    readonly ENTITY_WITHER_SKELETON_DEATH: Sound
    readonly ENTITY_WITHER_SKELETON_HURT: Sound
    readonly ENTITY_WITHER_SKELETON_STEP: Sound
    readonly ENTITY_WITHER_SPAWN: Sound
    readonly ENTITY_WOLF_AMBIENT: Sound
    readonly ENTITY_WOLF_DEATH: Sound
    readonly ENTITY_WOLF_GROWL: Sound
    readonly ENTITY_WOLF_HOWL: Sound
    readonly ENTITY_WOLF_HURT: Sound
    readonly ENTITY_WOLF_PANT: Sound
    readonly ENTITY_WOLF_SHAKE: Sound
    readonly ENTITY_WOLF_STEP: Sound
    readonly ENTITY_WOLF_WHINE: Sound
    readonly ENTITY_ZOGLIN_AMBIENT: Sound
    readonly ENTITY_ZOGLIN_ANGRY: Sound
    readonly ENTITY_ZOGLIN_ATTACK: Sound
    readonly ENTITY_ZOGLIN_DEATH: Sound
    readonly ENTITY_ZOGLIN_HURT: Sound
    readonly ENTITY_ZOGLIN_STEP: Sound
    readonly ENTITY_ZOMBIE_AMBIENT: Sound
    readonly ENTITY_ZOMBIE_ATTACK_IRON_DOOR: Sound
    readonly ENTITY_ZOMBIE_ATTACK_WOODEN_DOOR: Sound
    readonly ENTITY_ZOMBIE_BREAK_WOODEN_DOOR: Sound
    readonly ENTITY_ZOMBIE_CONVERTED_TO_DROWNED: Sound
    readonly ENTITY_ZOMBIE_DEATH: Sound
    readonly ENTITY_ZOMBIE_DESTROY_EGG: Sound
    readonly ENTITY_ZOMBIE_HORSE_AMBIENT: Sound
    readonly ENTITY_ZOMBIE_HORSE_DEATH: Sound
    readonly ENTITY_ZOMBIE_HORSE_HURT: Sound
    readonly ENTITY_ZOMBIE_HURT: Sound
    readonly ENTITY_ZOMBIE_INFECT: Sound
    readonly ENTITY_ZOMBIE_STEP: Sound
    readonly ENTITY_ZOMBIE_VILLAGER_AMBIENT: Sound
    readonly ENTITY_ZOMBIE_VILLAGER_CONVERTED: Sound
    readonly ENTITY_ZOMBIE_VILLAGER_CURE: Sound
    readonly ENTITY_ZOMBIE_VILLAGER_DEATH: Sound
    readonly ENTITY_ZOMBIE_VILLAGER_HURT: Sound
    readonly ENTITY_ZOMBIE_VILLAGER_STEP: Sound
    readonly ENTITY_ZOMBIFIED_PIGLIN_AMBIENT: Sound
    readonly ENTITY_ZOMBIFIED_PIGLIN_ANGRY: Sound
    readonly ENTITY_ZOMBIFIED_PIGLIN_DEATH: Sound
    readonly ENTITY_ZOMBIFIED_PIGLIN_HURT: Sound
    readonly EVENT_RAID_HORN: Sound
    readonly INTENTIONALLY_EMPTY: Sound
    readonly ITEM_ARMOR_EQUIP_CHAIN: Sound
    readonly ITEM_ARMOR_EQUIP_DIAMOND: Sound
    readonly ITEM_ARMOR_EQUIP_ELYTRA: Sound
    readonly ITEM_ARMOR_EQUIP_GENERIC: Sound
    readonly ITEM_ARMOR_EQUIP_GOLD: Sound
    readonly ITEM_ARMOR_EQUIP_IRON: Sound
    readonly ITEM_ARMOR_EQUIP_LEATHER: Sound
    readonly ITEM_ARMOR_EQUIP_NETHERITE: Sound
    readonly ITEM_ARMOR_EQUIP_TURTLE: Sound
    readonly ITEM_AXE_SCRAPE: Sound
    readonly ITEM_AXE_STRIP: Sound
    readonly ITEM_AXE_WAX_OFF: Sound
    readonly ITEM_BONE_MEAL_USE: Sound
    readonly ITEM_BOOK_PAGE_TURN: Sound
    readonly ITEM_BOOK_PUT: Sound
    readonly ITEM_BOTTLE_EMPTY: Sound
    readonly ITEM_BOTTLE_FILL: Sound
    readonly ITEM_BOTTLE_FILL_DRAGONBREATH: Sound
    readonly ITEM_BRUSH_BRUSHING_GENERIC: Sound
    readonly ITEM_BRUSH_BRUSHING_GRAVEL: Sound
    readonly ITEM_BRUSH_BRUSHING_GRAVEL_COMPLETE: Sound
    readonly ITEM_BRUSH_BRUSHING_SAND: Sound
    readonly ITEM_BRUSH_BRUSHING_SAND_COMPLETE: Sound
    readonly ITEM_BUCKET_EMPTY: Sound
    readonly ITEM_BUCKET_EMPTY_AXOLOTL: Sound
    readonly ITEM_BUCKET_EMPTY_FISH: Sound
    readonly ITEM_BUCKET_EMPTY_LAVA: Sound
    readonly ITEM_BUCKET_EMPTY_POWDER_SNOW: Sound
    readonly ITEM_BUCKET_EMPTY_TADPOLE: Sound
    readonly ITEM_BUCKET_FILL: Sound
    readonly ITEM_BUCKET_FILL_AXOLOTL: Sound
    readonly ITEM_BUCKET_FILL_FISH: Sound
    readonly ITEM_BUCKET_FILL_LAVA: Sound
    readonly ITEM_BUCKET_FILL_POWDER_SNOW: Sound
    readonly ITEM_BUCKET_FILL_TADPOLE: Sound
    readonly ITEM_BUNDLE_DROP_CONTENTS: Sound
    readonly ITEM_BUNDLE_INSERT: Sound
    readonly ITEM_BUNDLE_REMOVE_ONE: Sound
    readonly ITEM_CHORUS_FRUIT_TELEPORT: Sound
    readonly ITEM_CROP_PLANT: Sound
    readonly ITEM_CROSSBOW_HIT: Sound
    readonly ITEM_CROSSBOW_LOADING_END: Sound
    readonly ITEM_CROSSBOW_LOADING_MIDDLE: Sound
    readonly ITEM_CROSSBOW_LOADING_START: Sound
    readonly ITEM_CROSSBOW_QUICK_CHARGE_1: Sound
    readonly ITEM_CROSSBOW_QUICK_CHARGE_2: Sound
    readonly ITEM_CROSSBOW_QUICK_CHARGE_3: Sound
    readonly ITEM_CROSSBOW_SHOOT: Sound
    readonly ITEM_DYE_USE: Sound
    readonly ITEM_ELYTRA_FLYING: Sound
    readonly ITEM_FIRECHARGE_USE: Sound
    readonly ITEM_FLINTANDSTEEL_USE: Sound
    readonly ITEM_GLOW_INK_SAC_USE: Sound
    readonly ITEM_GOAT_HORN_PLAY: Sound
    readonly ITEM_GOAT_HORN_SOUND_0: Sound
    readonly ITEM_GOAT_HORN_SOUND_1: Sound
    readonly ITEM_GOAT_HORN_SOUND_2: Sound
    readonly ITEM_GOAT_HORN_SOUND_3: Sound
    readonly ITEM_GOAT_HORN_SOUND_4: Sound
    readonly ITEM_GOAT_HORN_SOUND_5: Sound
    readonly ITEM_GOAT_HORN_SOUND_6: Sound
    readonly ITEM_GOAT_HORN_SOUND_7: Sound
    readonly ITEM_HOE_TILL: Sound
    readonly ITEM_HONEYCOMB_WAX_ON: Sound
    readonly ITEM_HONEY_BOTTLE_DRINK: Sound
    readonly ITEM_INK_SAC_USE: Sound
    readonly ITEM_LODESTONE_COMPASS_LOCK: Sound
    readonly ITEM_NETHER_WART_PLANT: Sound
    readonly ITEM_SHIELD_BLOCK: Sound
    readonly ITEM_SHIELD_BREAK: Sound
    readonly ITEM_SHOVEL_FLATTEN: Sound
    readonly ITEM_SPYGLASS_STOP_USING: Sound
    readonly ITEM_SPYGLASS_USE: Sound
    readonly ITEM_TOTEM_USE: Sound
    readonly ITEM_TRIDENT_HIT: Sound
    readonly ITEM_TRIDENT_HIT_GROUND: Sound
    readonly ITEM_TRIDENT_RETURN: Sound
    readonly ITEM_TRIDENT_RIPTIDE_1: Sound
    readonly ITEM_TRIDENT_RIPTIDE_2: Sound
    readonly ITEM_TRIDENT_RIPTIDE_3: Sound
    readonly ITEM_TRIDENT_THROW: Sound
    readonly ITEM_TRIDENT_THUNDER: Sound
    readonly MUSIC_CREATIVE: Sound
    readonly MUSIC_CREDITS: Sound
    readonly MUSIC_DISC_11: Sound
    readonly MUSIC_DISC_13: Sound
    readonly MUSIC_DISC_5: Sound
    readonly MUSIC_DISC_BLOCKS: Sound
    readonly MUSIC_DISC_CAT: Sound
    readonly MUSIC_DISC_CHIRP: Sound
    readonly MUSIC_DISC_FAR: Sound
    readonly MUSIC_DISC_MALL: Sound
    readonly MUSIC_DISC_MELLOHI: Sound
    readonly MUSIC_DISC_OTHERSIDE: Sound
    readonly MUSIC_DISC_PIGSTEP: Sound
    readonly MUSIC_DISC_RELIC: Sound
    readonly MUSIC_DISC_STAL: Sound
    readonly MUSIC_DISC_STRAD: Sound
    readonly MUSIC_DISC_WAIT: Sound
    readonly MUSIC_DISC_WARD: Sound
    readonly MUSIC_DRAGON: Sound
    readonly MUSIC_END: Sound
    readonly MUSIC_GAME: Sound
    readonly MUSIC_MENU: Sound
    readonly MUSIC_NETHER_BASALT_DELTAS: Sound
    readonly MUSIC_NETHER_CRIMSON_FOREST: Sound
    readonly MUSIC_NETHER_NETHER_WASTES: Sound
    readonly MUSIC_NETHER_SOUL_SAND_VALLEY: Sound
    readonly MUSIC_NETHER_WARPED_FOREST: Sound
    readonly MUSIC_OVERWORLD_BADLANDS: Sound
    readonly MUSIC_OVERWORLD_BAMBOO_JUNGLE: Sound
    readonly MUSIC_OVERWORLD_CHERRY_GROVE: Sound
    readonly MUSIC_OVERWORLD_DEEP_DARK: Sound
    readonly MUSIC_OVERWORLD_DESERT: Sound
    readonly MUSIC_OVERWORLD_DRIPSTONE_CAVES: Sound
    readonly MUSIC_OVERWORLD_FLOWER_FOREST: Sound
    readonly MUSIC_OVERWORLD_FOREST: Sound
    readonly MUSIC_OVERWORLD_FROZEN_PEAKS: Sound
    readonly MUSIC_OVERWORLD_GROVE: Sound
    readonly MUSIC_OVERWORLD_JAGGED_PEAKS: Sound
    readonly MUSIC_OVERWORLD_JUNGLE: Sound
    readonly MUSIC_OVERWORLD_LUSH_CAVES: Sound
    readonly MUSIC_OVERWORLD_MEADOW: Sound
    readonly MUSIC_OVERWORLD_OLD_GROWTH_TAIGA: Sound
    readonly MUSIC_OVERWORLD_SNOWY_SLOPES: Sound
    readonly MUSIC_OVERWORLD_SPARSE_JUNGLE: Sound
    readonly MUSIC_OVERWORLD_STONY_PEAKS: Sound
    readonly MUSIC_OVERWORLD_SWAMP: Sound
    readonly MUSIC_UNDER_WATER: Sound
    readonly PARTICLE_SOUL_ESCAPE: Sound
    readonly UI_BUTTON_CLICK: Sound
    readonly UI_CARTOGRAPHY_TABLE_TAKE_RESULT: Sound
    readonly UI_LOOM_SELECT_PATTERN: Sound
    readonly UI_LOOM_TAKE_RESULT: Sound
    readonly UI_STONECUTTER_SELECT_RECIPE: Sound
    readonly UI_STONECUTTER_TAKE_RESULT: Sound
    readonly UI_TOAST_CHALLENGE_COMPLETE: Sound
    readonly UI_TOAST_IN: Sound
    readonly UI_TOAST_OUT: Sound
    readonly WEATHER_RAIN: Sound
    readonly WEATHER_RAIN_ABOVE: Sound
    values(): Sound[]
    valueOf(arg0: string): Sound
    getKey(): NamespacedKey
}

declare class InetSocketAddress extends SocketAddress {
    createUnresolved(arg0: string, arg1: number): InetSocketAddress
    getHostString(): string
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getAddress(): InetAddress
    getPort(): number
    isUnresolved(): boolean
    getHostName(): string
}

declare class PluginCommand extends Command implements PluginIdentifiableCommand {
    timings: CustomTimingsHandler
    tabComplete(arg0: CommandSender, arg1: string, arg2: string[]): List<string>
    getPlugin(): Plugin
    setTabCompleter(arg0: TabCompleter): void
    setExecutor(arg0: CommandExecutor): void
    getTabCompleter(): TabCompleter
    toString(): string
    execute(arg0: CommandSender, arg1: string, arg2: string[]): boolean
    getExecutor(): CommandExecutor
}

declare class BlockIgniteEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getIgnitingBlock(): Block
    getPlayer(): Player
    getIgnitingEntity(): Entity
    getCause(): BlockIgniteEventIgniteCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface List implements SequencedCollection<E> {
    remove(arg0: Object): boolean
    remove(arg0: number): E
    size(): number
    get(arg0: number): E
    equals(arg0: Object): boolean
    hashCode(): number
    copyOf(arg0: Collection<E>): List<E>
    indexOf(arg0: Object): number
    clear(): void
    lastIndexOf(arg0: Object): number
    isEmpty(): boolean
    replaceAll(arg0: UnaryOperator<E>): void
    add(arg0: E): boolean
    add(arg0: number, arg1: E): void
    subList(arg0: number, arg1: number): List<E>
    toArray(): Object[]
    toArray(arg0: T[]): T[]
    iterator(): Iterator<E>
    of(arg0: E, arg1: E, arg2: E): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): List<E>
    of(): List<E>
    of(arg0: E): List<E>
    of(arg0: E, arg1: E): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): List<E>
    of(arg0: E[]): List<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): List<E>
    contains(arg0: Object): boolean
    spliterator(): Spliterator<E>
    addAll(arg0: Collection<E>): boolean
    addAll(arg0: number, arg1: Collection<E>): boolean
    set(arg0: number, arg1: E): E
    sort(arg0: Comparator<E>): void
    getFirst(): E
    getLast(): E
    addFirst(arg0: E): void
    addLast(arg0: E): void
    removeFirst(): E
    removeLast(): E
    removeAll(arg0: Collection<any>): boolean
    retainAll(arg0: Collection<any>): boolean
    listIterator(): ListIterator<E>
    listIterator(arg0: number): ListIterator<E>
    reversed(): SequencedCollection
    reversed(): List<E>
    containsAll(arg0: Collection<any>): boolean
}

declare class Dimension extends Dimension2D implements Serializable {
    width: number
    height: number
    getHeight(): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getSize(): Dimension
    setSize(arg0: Dimension): void
    setSize(arg0: number, arg1: number): void
    setSize(arg0: number, arg1: number): void
    getWidth(): number
}

declare class HopperInventorySearchEvent extends BlockEvent {
    getContainerType(): HopperInventorySearchEventContainerType
    getSearchBlock(): Block
    setInventory(arg0: Inventory): void
    getInventory(): Inventory
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class Graphics {
    getColor(): Color
    translate(arg0: number, arg1: number): void
    drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void
    getFontMetrics(): FontMetrics
    getFontMetrics(arg0: Font): FontMetrics
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: Color, arg4: ImageObserver): boolean
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: ImageObserver): boolean
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: ImageObserver): boolean
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Color, arg6: ImageObserver): boolean
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: Color, arg10: ImageObserver): boolean
    drawImage(arg0: Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: ImageObserver): boolean
    clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void
    fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void
    drawPolygon(arg0: number[], arg1: number[], arg2: number): void
    drawPolygon(arg0: Polygon): void
    fillPolygon(arg0: number[], arg1: number[], arg2: number): void
    fillPolygon(arg0: Polygon): void
    drawString(arg0: AttributedCharacterIterator, arg1: number, arg2: number): void
    drawString(arg0: string, arg1: number, arg2: number): void
    getClipBounds(): Rectangle
    getClipBounds(arg0: Rectangle): Rectangle
    setPaintMode(): void
    setXORMode(arg0: Color): void
    setClip(arg0: number, arg1: number, arg2: number, arg3: number): void
    setClip(arg0: Shape): void
    getClip(): Shape
    copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void
    drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void
    clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void
    drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void
    fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void
    draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void
    fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void
    drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void
    fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void
    drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void
    fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void
    drawPolyline(arg0: number[], arg1: number[], arg2: number): void
    drawChars(arg0: char[], arg1: number, arg2: number, arg3: number, arg4: number): void
    drawBytes(arg0: byte[], arg1: number, arg2: number, arg3: number, arg4: number): void
    getClipRect(): Rectangle
    hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    getFont(): Font
    setFont(arg0: Font): void
    finalize(): void
    toString(): string
    create(): Graphics
    create(arg0: number, arg1: number, arg2: number, arg3: number): Graphics
    setColor(arg0: Color): void
    dispose(): void
}

declare class HangingEvent extends MinecraftEvent {
    getEntity(): Hanging
}

declare class Handler {
    flush(): void
    close(): void
    getEncoding(): string
    publish(arg0: LogRecord): void
    getFilter(): Filter
    isLoggable(arg0: LogRecord): boolean
    getLevel(): Level
    setFormatter(arg0: Formatter): void
    getFormatter(): Formatter
    setEncoding(arg0: string): void
    setFilter(arg0: Filter): void
    setErrorManager(arg0: ErrorManager): void
    getErrorManager(): ErrorManager
    setLevel(arg0: Level): void
}

declare class PlayerGameModeChangeEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewGameMode(): GameMode
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ClickType extends Enum<ClickType> {
    readonly LEFT: ClickType
    readonly SHIFT_LEFT: ClickType
    readonly RIGHT: ClickType
    readonly SHIFT_RIGHT: ClickType
    readonly WINDOW_BORDER_LEFT: ClickType
    readonly WINDOW_BORDER_RIGHT: ClickType
    readonly MIDDLE: ClickType
    readonly NUMBER_KEY: ClickType
    readonly DOUBLE_CLICK: ClickType
    readonly DROP: ClickType
    readonly CONTROL_DROP: ClickType
    readonly CREATIVE: ClickType
    readonly SWAP_OFFHAND: ClickType
    readonly UNKNOWN: ClickType
    isShiftClick(): boolean
    isLeftClick(): boolean
    isRightClick(): boolean
    isKeyboardClick(): boolean
    isCreativeAction(): boolean
    isMouseClick(): boolean
    values(): ClickType[]
    valueOf(arg0: string): ClickType
}

declare class ServerSpigot {
    getConfig(): YamlConfiguration
    restart(): void
    broadcast(arg0: BaseComponent[]): void
    broadcast(arg0: BaseComponent): void
}

declare class Rectangle extends Rectangle2D implements Shape, Serializable {
    x: number
    y: number
    width: number
    height: number
    readonly OUT_LEFT: number
    readonly OUT_TOP: number
    readonly OUT_RIGHT: number
    readonly OUT_BOTTOM: number
    setLocation(arg0: number, arg1: number): void
    setLocation(arg0: Point): void
    intersects(arg0: Rectangle): boolean
    translate(arg0: number, arg1: number): void
    intersection(arg0: Rectangle): Rectangle
    getY(): number
    getX(): number
    getHeight(): number
    setRect(arg0: number, arg1: number, arg2: number, arg3: number): void
    createUnion(arg0: Rectangle2D): Rectangle2D
    setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void
    setBounds(arg0: Rectangle): void
    reshape(arg0: number, arg1: number, arg2: number, arg3: number): void
    inside(arg0: number, arg1: number): boolean
    getBounds2D(): Rectangle2D
    outcode(arg0: number, arg1: number): number
    createIntersection(arg0: Rectangle2D): Rectangle2D
    equals(arg0: Object): boolean
    toString(): string
    isEmpty(): boolean
    add(arg0: Point): void
    add(arg0: Rectangle): void
    add(arg0: number, arg1: number): void
    contains(arg0: number, arg1: number): boolean
    contains(arg0: Point): boolean
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    contains(arg0: Rectangle): boolean
    getBounds(): Rectangle
    getLocation(): Point
    getSize(): Dimension
    grow(arg0: number, arg1: number): void
    resize(arg0: number, arg1: number): void
    move(arg0: number, arg1: number): void
    setSize(arg0: Dimension): void
    setSize(arg0: number, arg1: number): void
    union(arg0: Rectangle): Rectangle
    getWidth(): number
}

declare class CreativeCategory extends Enum<CreativeCategory> {
    readonly BUILDING_BLOCKS: CreativeCategory
    readonly DECORATIONS: CreativeCategory
    readonly REDSTONE: CreativeCategory
    readonly TRANSPORTATION: CreativeCategory
    readonly MISC: CreativeCategory
    readonly FOOD: CreativeCategory
    readonly TOOLS: CreativeCategory
    readonly COMBAT: CreativeCategory
    readonly BREWING: CreativeCategory
    values(): CreativeCategory[]
    valueOf(arg0: string): CreativeCategory
}

declare class PlayerItemConsumeEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    setItem(arg0: ItemStack): void
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityTargetEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getTarget(): Entity
    setTarget(arg0: Entity): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getReason(): EntityTargetEventTargetReason
}

interface RecipeChoice implements Predicate<ItemStack>, Cloneable {
    getItemStack(): ItemStack
    clone(): Object
    clone(): RecipeChoice
    test(arg0: Object): boolean
    test(arg0: ItemStack): boolean
}

declare class EntityInteractEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class BlockFadeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewState(): BlockState
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class Action extends Enum<Action> {
    readonly LEFT_CLICK_BLOCK: Action
    readonly RIGHT_CLICK_BLOCK: Action
    readonly LEFT_CLICK_AIR: Action
    readonly RIGHT_CLICK_AIR: Action
    readonly PHYSICAL: Action
    values(): Action[]
    valueOf(arg0: string): Action
}

declare class ColorSpace implements Serializable {
    readonly TYPE_XYZ: number
    readonly TYPE_Lab: number
    readonly TYPE_Luv: number
    readonly TYPE_YCbCr: number
    readonly TYPE_Yxy: number
    readonly TYPE_RGB: number
    readonly TYPE_GRAY: number
    readonly TYPE_HSV: number
    readonly TYPE_HLS: number
    readonly TYPE_CMYK: number
    readonly TYPE_CMY: number
    readonly TYPE_2CLR: number
    readonly TYPE_3CLR: number
    readonly TYPE_4CLR: number
    readonly TYPE_5CLR: number
    readonly TYPE_6CLR: number
    readonly TYPE_7CLR: number
    readonly TYPE_8CLR: number
    readonly TYPE_9CLR: number
    readonly TYPE_ACLR: number
    readonly TYPE_BCLR: number
    readonly TYPE_CCLR: number
    readonly TYPE_DCLR: number
    readonly TYPE_ECLR: number
    readonly TYPE_FCLR: number
    readonly CS_sRGB: number
    readonly CS_LINEAR_RGB: number
    readonly CS_CIEXYZ: number
    readonly CS_PYCC: number
    readonly CS_GRAY: number
    fromRGB(arg0: number[]): number[]
    getNumComponents(): number
    toRGB(arg0: number[]): number[]
    toCIEXYZ(arg0: number[]): number[]
    fromCIEXYZ(arg0: number[]): number[]
    isCS_sRGB(): boolean
    getName(arg0: number): string
    getInstance(arg0: number): ColorSpace
    getType(): number
    getMinValue(arg0: number): number
    getMaxValue(arg0: number): number
}

declare class EntityPickupItemEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getItem(): Item
    isCancelled(): boolean
    getHandlers(): HandlerList
    getRemaining(): number
    getEntity(): Entity
    getEntity(): LivingEntity
}

interface ImageProducer {
    addConsumer(arg0: ImageConsumer): void
    isConsumer(arg0: ImageConsumer): boolean
    removeConsumer(arg0: ImageConsumer): void
    startProduction(arg0: ImageConsumer): void
    requestTopDownLeftRightResend(arg0: ImageConsumer): void
}

declare class VillagerAcquireTradeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipe(): MerchantRecipe
    setRecipe(arg0: MerchantRecipe): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): AbstractVillager
}

declare class Mirror extends Enum<Mirror> {
    readonly NONE: Mirror
    readonly LEFT_RIGHT: Mirror
    readonly FRONT_BACK: Mirror
    values(): Mirror[]
    valueOf(arg0: string): Mirror
}

interface TileState implements BlockState, PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer
}

declare class SheepRegrowWoolEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Sheep
}

declare class PlayerCommandPreprocessEvent extends PlayerEvent implements Cancellable {
    setMessage(arg0: string): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipients(): Set<Player>
    setPlayer(arg0: Player): void
    getMessage(): string
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class MerchantRecipe implements Recipe {
    addIngredient(arg0: ItemStack): void
    setIngredients(arg0: List<ItemStack>): void
    setSpecialPrice(arg0: number): void
    setPriceMultiplier(arg0: number): void
    getSpecialPrice(): number
    removeIngredient(arg0: number): void
    getPriceMultiplier(): number
    getIngredients(): List<ItemStack>
    setExperienceReward(arg0: boolean): void
    setVillagerExperience(arg0: number): void
    getVillagerExperience(): number
    getAdjustedIngredient1(): ItemStack
    hasExperienceReward(): boolean
    getMaxUses(): number
    getDemand(): number
    setUses(arg0: number): void
    getUses(): number
    setDemand(arg0: number): void
    setMaxUses(arg0: number): void
    getResult(): ItemStack
    adjust(arg0: ItemStack): void
}

declare class SpawnCategory extends Enum<SpawnCategory> {
    readonly MONSTER: SpawnCategory
    readonly ANIMAL: SpawnCategory
    readonly WATER_ANIMAL: SpawnCategory
    readonly WATER_AMBIENT: SpawnCategory
    readonly WATER_UNDERGROUND_CREATURE: SpawnCategory
    readonly AMBIENT: SpawnCategory
    readonly AXOLOTL: SpawnCategory
    readonly MISC: SpawnCategory
    values(): SpawnCategory[]
    valueOf(arg0: string): SpawnCategory
}

interface Listener {
}

interface HumanEntity implements LivingEntity, AnimalTamer, InventoryHolder {
    closeInventory(): void
    getItemInHand(): ItemStack
    getInventory(): Inventory
    getInventory(): PlayerInventory
    setItemInHand(arg0: ItemStack): void
    getExhaustion(): number
    dropItem(arg0: boolean): boolean
    setWindowProperty(arg0: InventoryViewProperty, arg1: number): boolean
    getEnderChest(): Inventory
    getEnchantmentSeed(): number
    getMainHand(): MainHand
    setEnchantmentSeed(arg0: number): void
    getOpenInventory(): InventoryView
    openInventory(arg0: Inventory): InventoryView
    openInventory(arg0: InventoryView): void
    openWorkbench(arg0: Location, arg1: boolean): InventoryView
    getShoulderEntityLeft(): Entity
    getSaturatedRegenRate(): number
    getDiscoveredRecipes(): Set<NamespacedKey>
    getUnsaturatedRegenRate(): number
    getShoulderEntityRight(): Entity
    getLastDeathLocation(): Location
    hasDiscoveredRecipe(arg0: NamespacedKey): boolean
    setShoulderEntityLeft(arg0: Entity): void
    setShoulderEntityRight(arg0: Entity): void
    setSaturatedRegenRate(arg0: number): void
    setLastDeathLocation(arg0: Location): void
    setUnsaturatedRegenRate(arg0: number): void
    wakeup(arg0: boolean): void
    setItemOnCursor(arg0: ItemStack): void
    setCooldown(arg0: Material, arg1: number): void
    openMerchant(arg0: Villager, arg1: boolean): InventoryView
    openMerchant(arg0: Merchant, arg1: boolean): InventoryView
    hasCooldown(arg0: Material): boolean
    getCooldown(arg0: Material): number
    getExpToLevel(): number
    getBedLocation(): Location
    getItemOnCursor(): ItemStack
    getSaturation(): number
    setExhaustion(arg0: number): void
    setSaturation(arg0: number): void
    getSleepTicks(): number
    undiscoverRecipe(arg0: NamespacedKey): boolean
    setFoodLevel(arg0: number): void
    getAttackCooldown(): number
    openEnchanting(arg0: Location, arg1: boolean): InventoryView
    isHandRaised(): boolean
    undiscoverRecipes(arg0: Collection<NamespacedKey>): number
    discoverRecipes(arg0: Collection<NamespacedKey>): number
    setGameMode(arg0: GameMode): void
    getGameMode(): GameMode
    discoverRecipe(arg0: NamespacedKey): boolean
    setStarvationRate(arg0: number): void
    fireworkBoost(arg0: ItemStack): Firework
    getItemInUse(): ItemStack
    getStarvationRate(): number
    isBlocking(): boolean
    getName(): string
    sleep(arg0: Location, arg1: boolean): boolean
    getFoodLevel(): number
}

declare class OutputStream implements Closeable, Flushable {
    flush(): void
    write(arg0: byte[]): void
    write(arg0: byte[], arg1: number, arg2: number): void
    write(arg0: number): void
    close(): void
    nullOutputStream(): OutputStream
}

declare class PlayerSpawnLocationEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    setSpawnLocation(arg0: Location): void
    getSpawnLocation(): Location
    getHandlers(): HandlerList
}

interface ChunkGeneratorChunkData {
    getBiome(arg0: number, arg1: number, arg2: number): Biome
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData
    getMinHeight(): number
    getMaxHeight(): number
    setBlock(arg0: number, arg1: number, arg2: number, arg3: BlockData): void
    setBlock(arg0: number, arg1: number, arg2: number, arg3: MaterialData): void
    setBlock(arg0: number, arg1: number, arg2: number, arg3: Material): void
    getTypeAndData(arg0: number, arg1: number, arg2: number): MaterialData
    getType(arg0: number, arg1: number, arg2: number): Material
    setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: Material): void
    setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: MaterialData): void
    setRegion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: BlockData): void
    getData(arg0: number, arg1: number, arg2: number): byte
}

declare class NamespacedKey {
    readonly MINECRAFT: string
    readonly BUKKIT: string
    fromString(arg0: string): NamespacedKey
    fromString(arg0: string, arg1: Plugin): NamespacedKey
    minecraft(arg0: string): NamespacedKey
    randomKey(): NamespacedKey
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getKey(): string
    getNamespace(): string
}

declare class PlayerFishEventState extends Enum<PlayerFishEventState> {
    readonly FISHING: PlayerFishEventState
    readonly CAUGHT_FISH: PlayerFishEventState
    readonly CAUGHT_ENTITY: PlayerFishEventState
    readonly IN_GROUND: PlayerFishEventState
    readonly FAILED_ATTEMPT: PlayerFishEventState
    readonly REEL_IN: PlayerFishEventState
    readonly BITE: PlayerFishEventState
    values(): PlayerFishEventState[]
    valueOf(arg0: string): PlayerFishEventState
}

declare class LightningStrikeEventCause extends Enum<LightningStrikeEventCause> {
    readonly COMMAND: LightningStrikeEventCause
    readonly CUSTOM: LightningStrikeEventCause
    readonly SPAWNER: LightningStrikeEventCause
    readonly TRIDENT: LightningStrikeEventCause
    readonly TRAP: LightningStrikeEventCause
    readonly WEATHER: LightningStrikeEventCause
    readonly UNKNOWN: LightningStrikeEventCause
    values(): LightningStrikeEventCause[]
    valueOf(arg0: string): LightningStrikeEventCause
}

interface GrindstoneInventory implements Inventory {
}

declare class PlayerExpCooldownChangeEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getNewCooldown(): number
    setNewCooldown(arg0: number): void
    getHandlers(): HandlerList
    getReason(): PlayerExpCooldownChangeEventChangeReason
}

declare class PlayerEditBookEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPreviousBookMeta(): BookMeta
    getNewBookMeta(): BookMeta
    setNewBookMeta(arg0: BookMeta): void
    setSigning(arg0: boolean): void
    isSigning(): boolean
    getSlot(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerSpawnChangeEventCause extends Enum<PlayerSpawnChangeEventCause> {
    readonly COMMAND: PlayerSpawnChangeEventCause
    readonly BED: PlayerSpawnChangeEventCause
    readonly RESPAWN_ANCHOR: PlayerSpawnChangeEventCause
    readonly PLUGIN: PlayerSpawnChangeEventCause
    readonly RESET: PlayerSpawnChangeEventCause
    readonly UNKNOWN: PlayerSpawnChangeEventCause
    values(): PlayerSpawnChangeEventCause[]
    valueOf(arg0: string): PlayerSpawnChangeEventCause
}

declare class EventResult extends Enum<EventResult> {
    readonly DENY: EventResult
    readonly DEFAULT: EventResult
    readonly ALLOW: EventResult
    values(): EventResult[]
    valueOf(arg0: string): EventResult
}

interface BlockState implements Metadatable {
    setData(arg0: MaterialData): void
    getY(): number
    getZ(): number
    getX(): number
    getChunk(): Chunk
    getRawData(): byte
    isPlaced(): boolean
    setRawData(arg0: byte): void
    getBlockData(): BlockData
    setBlockData(arg0: BlockData): void
    getLightLevel(): byte
    getBlock(): Block
    getWorld(): World
    update(arg0: boolean, arg1: boolean): boolean
    update(arg0: boolean): boolean
    update(): boolean
    getLocation(arg0: Location): Location
    getLocation(): Location
    getType(): Material
    getData(): MaterialData
    setType(arg0: Material): void
}

declare class PlayerDropItemEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getItemDrop(): Item
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class BroadcastMessageEvent extends ServerEvent implements Cancellable {
    setMessage(arg0: string): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipients(): Set<CommandSender>
    getMessage(): string
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerItemHeldEvent extends PlayerEvent implements Cancellable {
    getPreviousSlot(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewSlot(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class TimeUnit extends Enum<TimeUnit> {
    readonly NANOSECONDS: TimeUnit
    readonly MICROSECONDS: TimeUnit
    readonly MILLISECONDS: TimeUnit
    readonly SECONDS: TimeUnit
    readonly MINUTES: TimeUnit
    readonly HOURS: TimeUnit
    readonly DAYS: TimeUnit
    values(): TimeUnit[]
    convert(arg0: Duration): number
    convert(arg0: number, arg1: TimeUnit): number
    valueOf(arg0: string): TimeUnit
    of(arg0: ChronoUnit): TimeUnit
    toNanos(arg0: number): number
    toMillis(arg0: number): number
    sleep(arg0: number): void
    toDays(arg0: number): number
    toSeconds(arg0: number): number
    toHours(arg0: number): number
    toMinutes(arg0: number): number
    toMicros(arg0: number): number
    timedWait(arg0: Object, arg1: number): void
    timedJoin(arg0: Thread, arg1: number): void
    toChronoUnit(): ChronoUnit
}

declare class CookingBookCategory extends Enum<CookingBookCategory> {
    readonly FOOD: CookingBookCategory
    readonly BLOCKS: CookingBookCategory
    readonly MISC: CookingBookCategory
    values(): CookingBookCategory[]
    valueOf(arg0: string): CookingBookCategory
}

interface ExperienceOrb implements Entity {
    getExperience(): number
    setExperience(arg0: number): void
}

declare class FoodLevelChangeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setFoodLevel(arg0: number): void
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
    getFoodLevel(): number
    getEntity(): HumanEntity
    getEntity(): Entity
}

declare class Note {
    flat(arg0: number, arg1: NoteTone): Note
    natural(arg0: number, arg1: NoteTone): Note
    isSharped(): boolean
    sharp(arg0: number, arg1: NoteTone): Note
    getOctave(): number
    getTone(): NoteTone
    sharped(): Note
    flattened(): Note
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getId(): byte
}

declare class PlayerEvent extends MinecraftEvent {
    getPlayer(): Player
}

declare class BiomeProvider {
    getBiome(arg0: WorldInfo, arg1: number, arg2: number, arg3: number, arg4: BiomeParameterPoint): Biome
    getBiome(arg0: WorldInfo, arg1: number, arg2: number, arg3: number): Biome
    getBiomes(arg0: WorldInfo): List<Biome>
}

declare class VillagerReplenishTradeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipe(): MerchantRecipe
    setRecipe(arg0: MerchantRecipe): void
    getBonus(): number
    setBonus(arg0: number): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): AbstractVillager
}

declare class BellRingEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getDirection(): BlockFace
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
}

declare class PlayerChangedWorldEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getFrom(): World
    getHandlers(): HandlerList
}

declare class RaidRaidStatus extends Enum<RaidRaidStatus> {
    readonly ONGOING: RaidRaidStatus
    readonly VICTORY: RaidRaidStatus
    readonly LOSS: RaidRaidStatus
    readonly STOPPED: RaidRaidStatus
    values(): RaidRaidStatus[]
    valueOf(arg0: string): RaidRaidStatus
}

declare class InputStream implements Closeable {
    reset(): void
    read(arg0: byte[]): number
    read(arg0: byte[], arg1: number, arg2: number): number
    read(): number
    close(): void
    readAllBytes(): byte[]
    mark(arg0: number): void
    readNBytes(arg0: byte[], arg1: number, arg2: number): number
    readNBytes(arg0: number): byte[]
    transferTo(arg0: OutputStream): number
    skip(arg0: number): number
    available(): number
    markSupported(): boolean
    nullInputStream(): InputStream
    skipNBytes(arg0: number): void
}

interface BrewerInventory implements Inventory {
    setIngredient(arg0: ItemStack): void
    getHolder(): BrewingStand
    getHolder(): InventoryHolder
    setFuel(arg0: ItemStack): void
    getIngredient(): ItemStack
    getFuel(): ItemStack
}

declare class InventoryEvent extends MinecraftEvent {
    getInventory(): Inventory
    getHandlerList(): HandlerList
    getViewers(): List<HumanEntity>
    getView(): InventoryView
    getHandlers(): HandlerList
}

interface CraftingInventory implements Inventory {
    getRecipe(): Recipe
    getMatrix(): ItemStack[]
    setMatrix(arg0: ItemStack[]): void
    getResult(): ItemStack
    setResult(arg0: ItemStack): void
}

interface DragonBattle {
    getBossBar(): BossBar
    hasBeenPreviouslyKilled(): boolean
    getEndPortalLocation(): Location
    setRespawnPhase(arg0: DragonBattleRespawnPhase): boolean
    getEnderDragon(): EnderDragon
    generateEndPortal(arg0: boolean): boolean
    initiateRespawn(arg0: Collection<EnderCrystal>): boolean
    initiateRespawn(): void
    resetCrystals(): void
    getRespawnPhase(): DragonBattleRespawnPhase
}

declare class ZonedDateTime implements Temporal, ChronoZonedDateTime<LocalDate>, Serializable {
    withEarlierOffsetAtOverlap(): ChronoZonedDateTime
    withEarlierOffsetAtOverlap(): ZonedDateTime
    ofLocal(arg0: LocalDateTime, arg1: ZoneId, arg2: ZoneOffset): ZonedDateTime
    withZoneSameInstant(arg0: ZoneId): ChronoZonedDateTime
    withZoneSameInstant(arg0: ZoneId): ZonedDateTime
    toOffsetDateTime(): OffsetDateTime
    withZoneSameLocal(arg0: ZoneId): ZonedDateTime
    withZoneSameLocal(arg0: ZoneId): ChronoZonedDateTime
    withLaterOffsetAtOverlap(): ChronoZonedDateTime
    withLaterOffsetAtOverlap(): ZonedDateTime
    ofStrict(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId): ZonedDateTime
    withFixedOffsetZone(): ZonedDateTime
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getLong(arg0: TemporalField): number
    format(arg0: DateTimeFormatter): string
    of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneId): ZonedDateTime
    of(arg0: LocalDateTime, arg1: ZoneId): ZonedDateTime
    of(arg0: LocalDate, arg1: LocalTime, arg2: ZoneId): ZonedDateTime
    from(arg0: TemporalAccessor): ZonedDateTime
    isSupported(arg0: TemporalField): boolean
    isSupported(arg0: TemporalUnit): boolean
    parse(arg0: CharSequence, arg1: DateTimeFormatter): ZonedDateTime
    parse(arg0: CharSequence): ZonedDateTime
    with(arg0: TemporalField, arg1: number): ChronoZonedDateTime
    with(arg0: TemporalAdjuster): ChronoZonedDateTime
    with(arg0: TemporalField, arg1: number): ZonedDateTime
    with(arg0: TemporalAdjuster): ZonedDateTime
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): Temporal
    query(arg0: TemporalQuery<R>): R
    getOffset(): ZoneOffset
    range(arg0: TemporalField): ValueRange
    now(): ZonedDateTime
    now(arg0: Clock): ZonedDateTime
    now(arg0: ZoneId): ZonedDateTime
    getNano(): number
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(arg0: TemporalAmount): ZonedDateTime
    minus(arg0: TemporalAmount): Temporal
    minus(arg0: number, arg1: TemporalUnit): ZonedDateTime
    minus(arg0: number, arg1: TemporalUnit): Temporal
    minus(arg0: TemporalAmount): ChronoZonedDateTime
    minus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime
    getZone(): ZoneId
    plus(arg0: TemporalAmount): ZonedDateTime
    plus(arg0: TemporalAmount): ChronoZonedDateTime
    plus(arg0: number, arg1: TemporalUnit): ChronoZonedDateTime
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: TemporalAmount): Temporal
    plus(arg0: number, arg1: TemporalUnit): ZonedDateTime
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusNanos(arg0: number): ZonedDateTime
    plusSeconds(arg0: number): ZonedDateTime
    plusDays(arg0: number): ZonedDateTime
    plusHours(arg0: number): ZonedDateTime
    plusMinutes(arg0: number): ZonedDateTime
    minusDays(arg0: number): ZonedDateTime
    minusHours(arg0: number): ZonedDateTime
    minusMinutes(arg0: number): ZonedDateTime
    minusSeconds(arg0: number): ZonedDateTime
    minusNanos(arg0: number): ZonedDateTime
    truncatedTo(arg0: TemporalUnit): ZonedDateTime
    ofInstant(arg0: LocalDateTime, arg1: ZoneOffset, arg2: ZoneId): ZonedDateTime
    ofInstant(arg0: Instant, arg1: ZoneId): ZonedDateTime
    getMonth(): Month
    getDayOfWeek(): DayOfWeek
    getDayOfYear(): number
    withDayOfMonth(arg0: number): ZonedDateTime
    withDayOfYear(arg0: number): ZonedDateTime
    plusWeeks(arg0: number): ZonedDateTime
    withMonth(arg0: number): ZonedDateTime
    plusMonths(arg0: number): ZonedDateTime
    withYear(arg0: number): ZonedDateTime
    plusYears(arg0: number): ZonedDateTime
    minusMonths(arg0: number): ZonedDateTime
    toLocalTime(): LocalTime
    minusYears(arg0: number): ZonedDateTime
    minusWeeks(arg0: number): ZonedDateTime
    toLocalDateTime(): LocalDateTime
    toLocalDateTime(): ChronoLocalDateTime
    withHour(arg0: number): ZonedDateTime
    withMinute(arg0: number): ZonedDateTime
    withSecond(arg0: number): ZonedDateTime
    withNano(arg0: number): ZonedDateTime
    toLocalDate(): ChronoLocalDate
    toLocalDate(): LocalDate
}

declare class PlayerMoveEvent extends PlayerEvent implements Cancellable {
    getTo(): Location
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setTo(arg0: Location): void
    setFrom(arg0: Location): void
    getFrom(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class MapInitializeEvent extends ServerEvent {
    getHandlerList(): HandlerList
    getMap(): MapView
    getHandlers(): HandlerList
}

interface Piglin implements PiglinAbstract, InventoryHolder {
    removeMaterialOfInterest(arg0: Material): boolean
    addMaterialOfInterest(arg0: Material): boolean
    removeBarterMaterial(arg0: Material): boolean
    getBarterList(): Set<Material>
    getInterestList(): Set<Material>
    setIsAbleToHunt(arg0: boolean): void
    isAbleToHunt(): boolean
    addBarterMaterial(arg0: Material): boolean
}

declare class MaterialData implements Cloneable {
    setData(arg0: byte): void
    getItemType(): Material
    toItemStack(arg0: number): ItemStack
    toItemStack(): ItemStack
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    clone(): MaterialData
    clone(): Object
    getData(): byte
}

declare class ValueRange implements Serializable {
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    of(arg0: number, arg1: number): ValueRange
    of(arg0: number, arg1: number, arg2: number, arg3: number): ValueRange
    of(arg0: number, arg1: number, arg2: number): ValueRange
    getMaximum(): number
    checkValidIntValue(arg0: number, arg1: TemporalField): number
    checkValidValue(arg0: number, arg1: TemporalField): number
    isIntValue(): boolean
    isValidValue(arg0: number): boolean
    getMinimum(): number
    isValidIntValue(arg0: number): boolean
    isFixed(): boolean
    getLargestMinimum(): number
    getSmallestMaximum(): number
}

declare class PrepareSmithingEvent extends PrepareInventoryResultEvent {
    getInventory(): SmithingInventory
    getInventory(): Inventory
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

interface Map {
    remove(arg0: Object, arg1: Object): boolean
    remove(arg0: Object): V
    size(): number
    get(arg0: Object): V
    put(arg0: K, arg1: V): V
    equals(arg0: Object): boolean
    values(): Collection<V>
    hashCode(): number
    copyOf(arg0: Map<K, V>): Map<K, V>
    clear(): void
    isEmpty(): boolean
    replace(arg0: K, arg1: V, arg2: V): boolean
    replace(arg0: K, arg1: V): V
    replaceAll(arg0: BiFunction<K, V, V>): void
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): Map<K, V>
    of(): Map<K, V>
    of(arg0: K, arg1: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): Map<K, V>
    of(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): Map<K, V>
    merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V
    entrySet(): Set<MapEntry<K, V>>
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    compute(arg0: K, arg1: BiFunction<K, V, V>): V
    entry(arg0: K, arg1: V): MapEntry<K, V>
    forEach(arg0: BiConsumer<K, V>): void
    containsKey(arg0: Object): boolean
    computeIfAbsent(arg0: K, arg1: Function<K, V>): V
    keySet(): Set<K>
    containsValue(arg0: Object): boolean
    getOrDefault(arg0: Object, arg1: V): V
    computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V
    ofEntries(arg0: MapEntry[]): Map<K, V>
}

declare class Duration implements TemporalAmount, Comparable<Duration>, Serializable {
    readonly ZERO: Duration
    get(arg0: TemporalUnit): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    abs(): Duration
    compareTo(arg0: Duration): number
    compareTo(arg0: Object): number
    of(arg0: number, arg1: TemporalUnit): Duration
    from(arg0: TemporalAmount): Duration
    toNanos(): number
    toMillis(): number
    parse(arg0: CharSequence): Duration
    between(arg0: Temporal, arg1: Temporal): Duration
    isZero(): boolean
    getNano(): number
    toDays(): number
    toSeconds(): number
    isNegative(): boolean
    minus(arg0: number, arg1: TemporalUnit): Duration
    minus(arg0: Duration): Duration
    isPositive(): boolean
    plus(arg0: number, arg1: TemporalUnit): Duration
    plus(arg0: Duration): Duration
    getUnits(): List<TemporalUnit>
    ofSeconds(arg0: number, arg1: number): Duration
    ofSeconds(arg0: number): Duration
    negated(): Duration
    ofNanos(arg0: number): Duration
    getSeconds(): number
    plusNanos(arg0: number): Duration
    plusSeconds(arg0: number): Duration
    plusMillis(arg0: number): Duration
    multipliedBy(arg0: number): Duration
    plusDays(arg0: number): Duration
    plusHours(arg0: number): Duration
    plusMinutes(arg0: number): Duration
    toHours(): number
    toMinutes(): number
    ofDays(arg0: number): Duration
    ofHours(arg0: number): Duration
    ofMinutes(arg0: number): Duration
    ofMillis(arg0: number): Duration
    withSeconds(arg0: number): Duration
    withNanos(arg0: number): Duration
    minusDays(arg0: number): Duration
    minusHours(arg0: number): Duration
    minusMinutes(arg0: number): Duration
    minusSeconds(arg0: number): Duration
    minusMillis(arg0: number): Duration
    minusNanos(arg0: number): Duration
    dividedBy(arg0: number): Duration
    dividedBy(arg0: Duration): number
    addTo(arg0: Temporal): Temporal
    subtractFrom(arg0: Temporal): Temporal
    toDaysPart(): number
    toHoursPart(): number
    toMinutesPart(): number
    toSecondsPart(): number
    toMillisPart(): number
    toNanosPart(): number
    truncatedTo(arg0: TemporalUnit): Duration
}

declare class PlayerToggleSneakEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isSneaking(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ZoneOffset extends ZoneId implements TemporalAccessor, TemporalAdjuster, Comparable<ZoneOffset>, Serializable {
    readonly UTC: ZoneOffset
    readonly MIN: ZoneOffset
    readonly MAX: ZoneOffset
    readonly SHORT_IDS: Map<string, string>
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: ZoneOffset): number
    compareTo(arg0: Object): number
    getLong(arg0: TemporalField): number
    of(arg0: string): ZoneOffset
    from(arg0: TemporalAccessor): ZoneOffset
    isSupported(arg0: TemporalField): boolean
    getId(): string
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
    normalized(): ZoneId
    ofHours(arg0: number): ZoneOffset
    adjustInto(arg0: Temporal): Temporal
    getRules(): ZoneRules
    getTotalSeconds(): number
    ofHoursMinutesSeconds(arg0: number, arg1: number, arg2: number): ZoneOffset
    ofTotalSeconds(arg0: number): ZoneOffset
    ofHoursMinutes(arg0: number, arg1: number): ZoneOffset
}

declare class PlayerShowEntityEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
    getEntity(): Entity
}

interface ProjectileSource {
    launchProjectile(arg0: Class<T>): T
    launchProjectile(arg0: Class<T>, arg1: Vector): T
}

declare class EquipmentSlot extends Enum<EquipmentSlot> {
    readonly HAND: EquipmentSlot
    readonly OFF_HAND: EquipmentSlot
    readonly FEET: EquipmentSlot
    readonly LEGS: EquipmentSlot
    readonly CHEST: EquipmentSlot
    readonly HEAD: EquipmentSlot
    values(): EquipmentSlot[]
    valueOf(arg0: string): EquipmentSlot
}

declare class EntityExhaustionEvent extends EntityEvent implements Cancellable {
    getExhaustion(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setExhaustion(arg0: number): void
    getExhaustionReason(): EntityExhaustionEventExhaustionReason
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): HumanEntity
}

interface Filter {
    isLoggable(arg0: LogRecord): boolean
}

interface Entity implements Metadatable, CommandSender, Nameable, PersistentDataHolder {
    getVehicle(): Entity
    removePassenger(arg0: Entity): boolean
    leaveVehicle(): boolean
    getPortalCooldown(): number
    getFreezeTicks(): number
    setFreezeTicks(arg0: number): void
    getMaxFreezeTicks(): number
    isPersistent(): boolean
    setTicksLived(arg0: number): void
    getNearbyEntities(arg0: number, arg1: number, arg2: number): List<Entity>
    isVisibleByDefault(): boolean
    getScoreboardTags(): Set<string>
    getTicksLived(): number
    getMaxFireTicks(): number
    isVisualFire(): boolean
    setVisualFire(arg0: boolean): void
    setPersistent(arg0: boolean): void
    getSwimSound(): Sound
    setRotation(arg0: number, arg1: number): void
    addPassenger(arg0: Entity): boolean
    setInvulnerable(arg0: boolean): void
    isInvulnerable(): boolean
    isInsideVehicle(): boolean
    setPortalCooldown(arg0: number): void
    addScoreboardTag(arg0: string): boolean
    getUniqueId(): UUID
    getSpawnCategory(): SpawnCategory
    getEntityId(): number
    getPassengers(): List<Entity>
    getPassenger(): Entity
    setFallDistance(arg0: number): void
    getBoundingBox(): BoundingBox
    getFallDistance(): number
    setFireTicks(arg0: number): void
    getLastDamageCause(): EntityDamageEvent
    getSwimSplashSound(): Sound
    setPassenger(arg0: Entity): boolean
    getFireTicks(): number
    setLastDamageCause(arg0: EntityDamageEvent): void
    getVelocity(): Vector
    setVelocity(arg0: Vector): void
    isOnGround(): boolean
    isInWater(): boolean
    getHeight(): number
    isDead(): boolean
    eject(): boolean
    playEffect(arg0: EntityEffect): void
    setGlowing(arg0: boolean): void
    isGlowing(): boolean
    isSilent(): boolean
    setSilent(arg0: boolean): void
    hasGravity(): boolean
    getFacing(): BlockFace
    getPose(): Pose
    setGravity(arg0: boolean): void
    getSwimHighSpeedSplashSound(): Sound
    teleport(arg0: Location): boolean
    teleport(arg0: Location, arg1: PlayerTeleportEventTeleportCause): boolean
    teleport(arg0: Entity, arg1: PlayerTeleportEventTeleportCause): boolean
    teleport(arg0: Entity): boolean
    getWorld(): World
    spigot(): EntitySpigot
    spigot(): CommandSenderSpigot
    getServer(): Server
    remove(): void
    isEmpty(): boolean
    getLocation(arg0: Location): Location
    getLocation(): Location
    getType(): EntityType
    isFrozen(): boolean
    isValid(): boolean
    isCustomNameVisible(): boolean
    removeScoreboardTag(arg0: string): boolean
    setVisibleByDefault(arg0: boolean): void
    getPistonMoveReaction(): PistonMoveReaction
    setCustomNameVisible(arg0: boolean): void
    getWidth(): number
}

declare class FurnaceExtractEvent extends BlockExpEvent {
    getItemType(): Material
    getItemAmount(): number
    getPlayer(): Player
}

declare class MainHand extends Enum<MainHand> {
    readonly LEFT: MainHand
    readonly RIGHT: MainHand
    values(): MainHand[]
    valueOf(arg0: string): MainHand
}

declare class NetworkInterface {
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    isVirtual(): boolean
    getParent(): NetworkInterface
    getByName(arg0: string): NetworkInterface
    getIndex(): number
    networkInterfaces(): Stream<NetworkInterface>
    inetAddresses(): Stream<InetAddress>
    getInetAddresses(): Enumeration<InetAddress>
    getNetworkInterfaces(): Enumeration<NetworkInterface>
    getInterfaceAddresses(): List<InterfaceAddress>
    getSubInterfaces(): Enumeration<NetworkInterface>
    subInterfaces(): Stream<NetworkInterface>
    getDisplayName(): string
    getByIndex(arg0: number): NetworkInterface
    getByInetAddress(arg0: InetAddress): NetworkInterface
    isUp(): boolean
    isLoopback(): boolean
    isPointToPoint(): boolean
    supportsMulticast(): boolean
    getHardwareAddress(): byte[]
    getMTU(): number
}

declare class StructureType implements Keyed {
    readonly MINESHAFT: StructureType
    readonly VILLAGE: StructureType
    readonly NETHER_FORTRESS: StructureType
    readonly STRONGHOLD: StructureType
    readonly JUNGLE_PYRAMID: StructureType
    readonly OCEAN_RUIN: StructureType
    readonly DESERT_PYRAMID: StructureType
    readonly IGLOO: StructureType
    readonly SWAMP_HUT: StructureType
    readonly OCEAN_MONUMENT: StructureType
    readonly END_CITY: StructureType
    readonly WOODLAND_MANSION: StructureType
    readonly BURIED_TREASURE: StructureType
    readonly SHIPWRECK: StructureType
    readonly PILLAGER_OUTPOST: StructureType
    readonly NETHER_FOSSIL: StructureType
    readonly RUINED_PORTAL: StructureType
    readonly BASTION_REMNANT: StructureType
    getMapIcon(): MapCursorType
    getStructureTypes(): Map<string, StructureType>
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getKey(): NamespacedKey
}

declare class InventoryDragEvent extends InventoryInteractEvent {
    getOldCursor(): ItemStack
    getRawSlots(): Set<Integer>
    getNewItems(): Map<Integer, ItemStack>
    getInventorySlots(): Set<Integer>
    getCursor(): ItemStack
    setCursor(arg0: ItemStack): void
    getHandlerList(): HandlerList
    getType(): DragType
    getHandlers(): HandlerList
}

declare class BlockVector extends Vector {
    equals(arg0: Object): boolean
    hashCode(): number
    clone(): Vector
    clone(): Object
    clone(): BlockVector
    deserialize(arg0: Map<string, Object>): BlockVector
}

declare class ZoneId implements Serializable {
    readonly SHORT_IDS: Map<string, string>
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    of(arg0: string, arg1: Map<string, string>): ZoneId
    of(arg0: string): ZoneId
    from(arg0: TemporalAccessor): ZoneId
    getId(): string
    normalized(): ZoneId
    getDisplayName(arg0: TextStyle, arg1: Locale): string
    systemDefault(): ZoneId
    getRules(): ZoneRules
    getAvailableZoneIds(): Set<string>
    ofOffset(arg0: string, arg1: ZoneOffset): ZoneId
}

interface OfflinePlayer implements ServerOperator, AnimalTamer, ConfigurationSerializable {
    getUniqueId(): UUID
    getPlayer(): Player
    getLastDeathLocation(): Location
    getBedSpawnLocation(): Location
    isOnline(): boolean
    isBanned(): boolean
    ban(arg0: string, arg1: Date, arg2: string): BanEntry<PlayerProfile>
    ban(arg0: string, arg1: Duration, arg2: string): BanEntry<PlayerProfile>
    ban(arg0: string, arg1: Instant, arg2: string): BanEntry<PlayerProfile>
    isWhitelisted(): boolean
    hasPlayedBefore(): boolean
    setStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void
    setStatistic(arg0: Statistic, arg1: number): void
    setStatistic(arg0: Statistic, arg1: Material, arg2: number): void
    setWhitelisted(arg0: boolean): void
    getPlayerProfile(): PlayerProfile
    getFirstPlayed(): number
    getLastPlayed(): number
    decrementStatistic(arg0: Statistic, arg1: Material): void
    decrementStatistic(arg0: Statistic, arg1: EntityType): void
    decrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void
    decrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void
    decrementStatistic(arg0: Statistic): void
    decrementStatistic(arg0: Statistic, arg1: number): void
    incrementStatistic(arg0: Statistic, arg1: EntityType, arg2: number): void
    incrementStatistic(arg0: Statistic, arg1: EntityType): void
    incrementStatistic(arg0: Statistic, arg1: number): void
    incrementStatistic(arg0: Statistic): void
    incrementStatistic(arg0: Statistic, arg1: Material): void
    incrementStatistic(arg0: Statistic, arg1: Material, arg2: number): void
    getStatistic(arg0: Statistic, arg1: EntityType): number
    getStatistic(arg0: Statistic): number
    getStatistic(arg0: Statistic, arg1: Material): number
    getName(): string
}

declare class InventoryView {
    readonly OUTSIDE: number
    getTitle(): string
    convertSlot(arg0: number): number
    getOriginalTitle(): string
    getSlotType(arg0: number): InventoryTypeSlotType
    getCursor(): ItemStack
    setCursor(arg0: ItemStack): void
    getInventory(arg0: number): Inventory
    getBottomInventory(): Inventory
    getTopInventory(): Inventory
    setTitle(arg0: string): void
    getPlayer(): HumanEntity
    setItem(arg0: number, arg1: ItemStack): void
    countSlots(): number
    setProperty(arg0: InventoryViewProperty, arg1: number): boolean
    close(): void
    getType(): InventoryType
    getItem(arg0: number): ItemStack
}

declare class FireworkExplodeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Firework
}

interface Stream implements BaseStream<T, Stream<T>> {
    min(arg0: Comparator<T>): Optional<T>
    max(arg0: Comparator<T>): Optional<T>
    toArray(): Object[]
    toArray(arg0: IntFunction<A[]>): A[]
    map(arg0: Function<T, R>): Stream<R>
    collect(arg0: Supplier<R>, arg1: BiConsumer<R, T>, arg2: BiConsumer<R, R>): R
    collect(arg0: Collector<T, A, R>): R
    toList(): List<T>
    of(arg0: T[]): Stream<T>
    of(arg0: T): Stream<T>
    count(): number
    builder(): StreamBuilder<T>
    concat(arg0: Stream<T>, arg1: Stream<T>): Stream<T>
    limit(arg0: number): Stream<T>
    filter(arg0: Predicate<T>): Stream<T>
    empty(): Stream<T>
    anyMatch(arg0: Predicate<T>): boolean
    flatMap(arg0: Function<T, Stream>): Stream<R>
    forEach(arg0: Consumer<T>): void
    findAny(): Optional<T>
    skip(arg0: number): Stream<T>
    peek(arg0: Consumer<T>): Stream<T>
    reduce(arg0: U, arg1: BiFunction<U, T, U>, arg2: BinaryOperator<U>): U
    reduce(arg0: T, arg1: BinaryOperator<T>): T
    reduce(arg0: BinaryOperator<T>): Optional<T>
    iterate(arg0: T, arg1: UnaryOperator<T>): Stream<T>
    iterate(arg0: T, arg1: Predicate<T>, arg2: UnaryOperator<T>): Stream<T>
    distinct(): Stream<T>
    ofNullable(arg0: T): Stream<T>
    findFirst(): Optional<T>
    allMatch(arg0: Predicate<T>): boolean
    noneMatch(arg0: Predicate<T>): boolean
    sorted(arg0: Comparator<T>): Stream<T>
    sorted(): Stream<T>
    generate(arg0: Supplier<T>): Stream<T>
    forEachOrdered(arg0: Consumer<T>): void
    mapToInt(arg0: ToIntFunction<T>): IntStream
    mapToLong(arg0: ToLongFunction<T>): LongStream
    mapToDouble(arg0: ToDoubleFunction<T>): DoubleStream
    flatMapToInt(arg0: Function<T, IntStream>): IntStream
    flatMapToDouble(arg0: Function<T, DoubleStream>): DoubleStream
    flatMapToLong(arg0: Function<T, LongStream>): LongStream
    mapMulti(arg0: BiConsumer<T, Consumer>): Stream<R>
    mapMultiToInt(arg0: BiConsumer<T, IntConsumer>): IntStream
    mapMultiToLong(arg0: BiConsumer<T, LongConsumer>): LongStream
    mapMultiToDouble(arg0: BiConsumer<T, DoubleConsumer>): DoubleStream
    takeWhile(arg0: Predicate<T>): Stream<T>
    dropWhile(arg0: Predicate<T>): Stream<T>
}

declare class VehicleUpdateEvent extends VehicleEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class VehicleMoveEvent extends VehicleEvent {
    getTo(): Location
    getHandlerList(): HandlerList
    getFrom(): Location
    getHandlers(): HandlerList
}

interface FallingBlock implements Entity {
    getBlockData(): BlockData
    getMaterial(): Material
    getMaxDamage(): number
    setDamagePerBlock(arg0: number): void
    setCancelDrop(arg0: boolean): void
    setHurtEntities(arg0: boolean): void
    setMaxDamage(arg0: number): void
    getCancelDrop(): boolean
    canHurtEntities(): boolean
    setDropItem(arg0: boolean): void
    getDamagePerBlock(): number
    getDropItem(): boolean
}

interface FilenameFilter {
    accept(arg0: File, arg1: string): boolean
}

declare class Polygon implements Shape, Serializable {
    npoints: number
    xpoints: number[]
    ypoints: number[]
    intersects(arg0: Rectangle2D): boolean
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    translate(arg0: number, arg1: number): void
    getBoundingBox(): Rectangle
    addPoint(arg0: number, arg1: number): void
    inside(arg0: number, arg1: number): boolean
    getBounds2D(): Rectangle2D
    getPathIterator(arg0: AffineTransform): PathIterator
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator
    reset(): void
    contains(arg0: number, arg1: number): boolean
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    contains(arg0: Rectangle2D): boolean
    contains(arg0: Point): boolean
    contains(arg0: number, arg1: number): boolean
    contains(arg0: Point2D): boolean
    getBounds(): Rectangle
    invalidate(): void
}

interface SmithingInventory implements Inventory {
    getRecipe(): Recipe
    getResult(): ItemStack
    setResult(arg0: ItemStack): void
}

declare class WarningWarningState extends Enum<WarningWarningState> {
    readonly ON: WarningWarningState
    readonly OFF: WarningWarningState
    readonly DEFAULT: WarningWarningState
    printFor(arg0: Warning): boolean
    value(arg0: string): WarningWarningState
    values(): WarningWarningState[]
    valueOf(arg0: string): WarningWarningState
}

declare class CreeperPowerEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLightning(): LightningStrike
    getCause(): CreeperPowerEventPowerCause
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): Creeper
}

declare class PlayerHarvestBlockEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getItemsHarvested(): List<ItemStack>
    getHarvestedBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class TNTPrimeEventPrimeCause extends Enum<TNTPrimeEventPrimeCause> {
    readonly FIRE: TNTPrimeEventPrimeCause
    readonly REDSTONE: TNTPrimeEventPrimeCause
    readonly PLAYER: TNTPrimeEventPrimeCause
    readonly EXPLOSION: TNTPrimeEventPrimeCause
    readonly PROJECTILE: TNTPrimeEventPrimeCause
    readonly BLOCK_BREAK: TNTPrimeEventPrimeCause
    readonly DISPENSER: TNTPrimeEventPrimeCause
    values(): TNTPrimeEventPrimeCause[]
    valueOf(arg0: string): TNTPrimeEventPrimeCause
}

interface VoxelShape {
    getBoundingBoxes(): Collection<BoundingBox>
    overlaps(arg0: BoundingBox): boolean
}

declare class EntityShootBowEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getProjectile(): Entity
    shouldConsumeItem(): boolean
    getConsumable(): ItemStack
    setProjectile(arg0: Entity): void
    setConsumeItem(arg0: boolean): void
    getBow(): ItemStack
    getForce(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): LivingEntity
    getEntity(): Entity
}

declare class Raster {
    getHeight(): number
    createWritableRaster(arg0: SampleModel, arg1: Point): WritableRaster
    createWritableRaster(arg0: SampleModel, arg1: DataBuffer, arg2: Point): WritableRaster
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[]
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[]
    getPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): number[]
    createCompatibleWritableRaster(): WritableRaster
    createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster
    createCompatibleWritableRaster(arg0: number, arg1: number, arg2: number, arg3: number): WritableRaster
    createCompatibleWritableRaster(arg0: Rectangle): WritableRaster
    createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster
    createInterleavedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Point): WritableRaster
    createInterleavedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: Point): WritableRaster
    createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: Point): WritableRaster
    createPackedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster
    createPackedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: Point): WritableRaster
    createPackedRaster(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: Point): WritableRaster
    getNumBands(): number
    getDataElements(arg0: number, arg1: number, arg2: Object): Object
    getDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object): Object
    getDataBuffer(): DataBuffer
    getSampleModelTranslateX(): number
    getSampleModelTranslateY(): number
    createBandedRaster(arg0: DataBuffer, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: Point): WritableRaster
    createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Point): WritableRaster
    createBandedRaster(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number[], arg6: Point): WritableRaster
    getNumDataElements(): number
    getTransferType(): number
    getPixel(arg0: number, arg1: number, arg2: number[]): number[]
    getPixel(arg0: number, arg1: number, arg2: number[]): number[]
    getPixel(arg0: number, arg1: number, arg2: number[]): number[]
    getSample(arg0: number, arg1: number, arg2: number): number
    getSampleFloat(arg0: number, arg1: number, arg2: number): number
    getSampleDouble(arg0: number, arg1: number, arg2: number): number
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[]
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[]
    getSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): number[]
    createRaster(arg0: SampleModel, arg1: DataBuffer, arg2: Point): Raster
    createTranslatedChild(arg0: number, arg1: number): Raster
    getBounds(): Rectangle
    getParent(): Raster
    createChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): Raster
    getWidth(): number
    getSampleModel(): SampleModel
    getMinX(): number
    getMinY(): number
}

interface TemporalAmount {
    get(arg0: TemporalUnit): number
    getUnits(): List<TemporalUnit>
    addTo(arg0: Temporal): Temporal
    subtractFrom(arg0: Temporal): Temporal
}

declare class VillagerProfession extends Enum<VillagerProfession> implements Keyed {
    readonly NONE: VillagerProfession
    readonly ARMORER: VillagerProfession
    readonly BUTCHER: VillagerProfession
    readonly CARTOGRAPHER: VillagerProfession
    readonly CLERIC: VillagerProfession
    readonly FARMER: VillagerProfession
    readonly FISHERMAN: VillagerProfession
    readonly FLETCHER: VillagerProfession
    readonly LEATHERWORKER: VillagerProfession
    readonly LIBRARIAN: VillagerProfession
    readonly MASON: VillagerProfession
    readonly NITWIT: VillagerProfession
    readonly SHEPHERD: VillagerProfession
    readonly TOOLSMITH: VillagerProfession
    readonly WEAPONSMITH: VillagerProfession
    values(): VillagerProfession[]
    valueOf(arg0: string): VillagerProfession
    getKey(): NamespacedKey
}

declare class PlayerEggThrowEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getHatchingType(): EntityType
    getNumHatches(): byte
    setHatchingType(arg0: EntityType): void
    setNumHatches(arg0: byte): void
    setHatching(arg0: boolean): void
    getEgg(): Egg
    isHatching(): boolean
    getHandlers(): HandlerList
}

interface IntFunction {
    apply(arg0: number): R
}

interface Messenger {
    readonly MAX_MESSAGE_SIZE: number
    readonly MAX_CHANNEL_SIZE: number
    getIncomingChannelRegistrations(arg0: Plugin): Set<PluginMessageListenerRegistration>
    getIncomingChannelRegistrations(arg0: Plugin, arg1: string): Set<PluginMessageListenerRegistration>
    getIncomingChannelRegistrations(arg0: string): Set<PluginMessageListenerRegistration>
    isIncomingChannelRegistered(arg0: Plugin, arg1: string): boolean
    isOutgoingChannelRegistered(arg0: Plugin, arg1: string): boolean
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string): void
    unregisterIncomingPluginChannel(arg0: Plugin): void
    unregisterIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): void
    dispatchIncomingMessage(arg0: Player, arg1: string, arg2: byte[]): void
    getIncomingChannels(arg0: Plugin): Set<string>
    getIncomingChannels(): Set<string>
    getOutgoingChannels(arg0: Plugin): Set<string>
    getOutgoingChannels(): Set<string>
    isRegistrationValid(arg0: PluginMessageListenerRegistration): boolean
    isReservedChannel(arg0: string): boolean
    unregisterOutgoingPluginChannel(arg0: Plugin): void
    unregisterOutgoingPluginChannel(arg0: Plugin, arg1: string): void
    registerOutgoingPluginChannel(arg0: Plugin, arg1: string): void
    registerIncomingPluginChannel(arg0: Plugin, arg1: string, arg2: PluginMessageListener): PluginMessageListenerRegistration
}

declare class StructureGrowEvent extends WorldEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPlayer(): Player
    isFromBonemeal(): boolean
    getSpecies(): TreeType
    getBlocks(): List<BlockState>
    getLocation(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class RaidTriggerEvent extends RaidEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPlayer(): Player
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerInteractEntityEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getRightClicked(): Entity
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerPickupItemEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getItem(): Item
    isCancelled(): boolean
    getHandlers(): HandlerList
    getRemaining(): number
}

declare class PlayerSignOpenEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getSign(): Sign
    getCause(): PlayerSignOpenEventCause
    isCancelled(): boolean
    getHandlers(): HandlerList
    getSide(): Side
}

declare class HeightMap extends Enum<HeightMap> {
    readonly MOTION_BLOCKING: HeightMap
    readonly MOTION_BLOCKING_NO_LEAVES: HeightMap
    readonly OCEAN_FLOOR: HeightMap
    readonly OCEAN_FLOOR_WG: HeightMap
    readonly WORLD_SURFACE: HeightMap
    readonly WORLD_SURFACE_WG: HeightMap
    values(): HeightMap[]
    valueOf(arg0: string): HeightMap
}

interface InventoryHolder {
    getInventory(): Inventory
}

interface BossBar {
    getColor(): BarColor
    getTitle(): string
    hide(): void
    setTitle(arg0: string): void
    getPlayers(): List<Player>
    setStyle(arg0: BarStyle): void
    hasFlag(arg0: BarFlag): boolean
    addPlayer(arg0: Player): void
    removeFlag(arg0: BarFlag): void
    getStyle(): BarStyle
    show(): void
    removePlayer(arg0: Player): void
    setProgress(arg0: number): void
    getProgress(): number
    removeAll(): void
    setColor(arg0: BarColor): void
    addFlag(arg0: BarFlag): void
    isVisible(): boolean
    setVisible(arg0: boolean): void
}

declare class PlayerBedEnterEventBedEnterResult extends Enum<PlayerBedEnterEventBedEnterResult> {
    readonly OK: PlayerBedEnterEventBedEnterResult
    readonly NOT_POSSIBLE_HERE: PlayerBedEnterEventBedEnterResult
    readonly NOT_POSSIBLE_NOW: PlayerBedEnterEventBedEnterResult
    readonly TOO_FAR_AWAY: PlayerBedEnterEventBedEnterResult
    readonly NOT_SAFE: PlayerBedEnterEventBedEnterResult
    readonly OTHER_PROBLEM: PlayerBedEnterEventBedEnterResult
    values(): PlayerBedEnterEventBedEnterResult[]
    valueOf(arg0: string): PlayerBedEnterEventBedEnterResult
}

declare class ArrowBodyCountChangeEvent extends EntityEvent implements Cancellable {
    getNewAmount(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setNewAmount(arg0: number): void
    getOldAmount(): number
    isReset(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): LivingEntity
}

interface Creeper implements Monster {
    isPowered(): boolean
    ignite(): void
    explode(): void
    setPowered(arg0: boolean): void
    getFuseTicks(): number
    setFuseTicks(arg0: number): void
    getExplosionRadius(): number
    setExplosionRadius(arg0: number): void
    setMaxFuseTicks(arg0: number): void
    getMaxFuseTicks(): number
}

declare class DayOfWeek extends Enum<DayOfWeek> implements TemporalAccessor, TemporalAdjuster {
    readonly MONDAY: DayOfWeek
    readonly TUESDAY: DayOfWeek
    readonly WEDNESDAY: DayOfWeek
    readonly THURSDAY: DayOfWeek
    readonly FRIDAY: DayOfWeek
    readonly SATURDAY: DayOfWeek
    readonly SUNDAY: DayOfWeek
    get(arg0: TemporalField): number
    values(): DayOfWeek[]
    getLong(arg0: TemporalField): number
    valueOf(arg0: string): DayOfWeek
    getValue(): number
    of(arg0: number): DayOfWeek
    from(arg0: TemporalAccessor): DayOfWeek
    isSupported(arg0: TemporalField): boolean
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
    getDisplayName(arg0: TextStyle, arg1: Locale): string
    minus(arg0: number): DayOfWeek
    plus(arg0: number): DayOfWeek
    adjustInto(arg0: Temporal): Temporal
}

declare class RaidStopEvent extends RaidEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
    getReason(): RaidStopEventReason
}

declare class HangingPlaceEvent extends HangingEvent implements Cancellable {
    getItemStack(): ItemStack
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    getBlock(): Block
    getBlockFace(): BlockFace
    getPlayer(): Player
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface PluginManager {
    getPlugins(): Plugin[]
    callEvent(arg0: MinecraftEvent): void
    loadPlugins(arg0: File): Plugin[]
    disablePlugins(): void
    addPermission(arg0: Permission): void
    clearPlugins(): void
    enablePlugin(arg0: Plugin): void
    registerInterface(arg0: Class<PluginLoader>): void
    removePermission(arg0: string): void
    removePermission(arg0: Permission): void
    disablePlugin(arg0: Plugin): void
    isPluginEnabled(arg0: Plugin): boolean
    isPluginEnabled(arg0: string): boolean
    registerEvents(arg0: Listener, arg1: Plugin): void
    recalculatePermissionDefaults(arg0: Permission): void
    unsubscribeFromDefaultPerms(arg0: boolean, arg1: Permissible): void
    getDefaultPermSubscriptions(arg0: boolean): Set<Permissible>
    subscribeToPermission(arg0: string, arg1: Permissible): void
    getPermissionSubscriptions(arg0: string): Set<Permissible>
    getDefaultPermissions(arg0: boolean): Set<Permission>
    unsubscribeFromPermission(arg0: string, arg1: Permissible): void
    subscribeToDefaultPerms(arg0: boolean, arg1: Permissible): void
    useTimings(): boolean
    getPlugin(arg0: string): Plugin
    loadPlugin(arg0: File): Plugin
    getPermissions(): Set<Permission>
    getPermission(arg0: string): Permission
    registerEvent(arg0: Class<MinecraftEvent>, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin, arg5: boolean): void
    registerEvent(arg0: Class<MinecraftEvent>, arg1: Listener, arg2: EventPriority, arg3: EventExecutor, arg4: Plugin): void
}

interface Plugin implements TabExecutor {
    getConfig(): FileConfiguration
    getServer(): Server
    getDefaultBiomeProvider(arg0: string, arg1: string): BiomeProvider
    getDefaultWorldGenerator(arg0: string, arg1: string): ChunkGenerator
    onLoad(): void
    saveConfig(): void
    onEnable(): void
    isNaggable(): boolean
    onDisable(): void
    getDataFolder(): File
    reloadConfig(): void
    saveResource(arg0: string, arg1: boolean): void
    getPluginLoader(): PluginLoader
    setNaggable(arg0: boolean): void
    saveDefaultConfig(): void
    getName(): string
    isEnabled(): boolean
    getResource(arg0: string): InputStream
    getLogger(): Logger
    getDescription(): PluginDescriptionFile
}

declare class BlockReceiveGameEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEvent(): GameEvent
    getEntity(): Entity
}

interface ListIterator implements Iterator<E> {
    remove(): void
    add(arg0: E): void
    hasNext(): boolean
    next(): E
    set(arg0: E): void
    nextIndex(): number
    previousIndex(): number
    hasPrevious(): boolean
    previous(): E
}

interface ConsoleCommandSender implements CommandSender, Conversable {
}

declare class Date implements Serializable, Cloneable, Comparable<Date> {
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    clone(): Object
    compareTo(arg0: Object): number
    compareTo(arg0: Date): number
    from(arg0: Instant): Date
    parse(arg0: string): number
    before(arg0: Date): boolean
    after(arg0: Date): boolean
    getTime(): number
    toInstant(): Instant
    UTC(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): number
    getYear(): number
    setTime(arg0: number): void
    getSeconds(): number
    getMonth(): number
    setDate(arg0: number): void
    setMonth(arg0: number): void
    getHours(): number
    setHours(arg0: number): void
    getMinutes(): number
    setMinutes(arg0: number): void
    setSeconds(arg0: number): void
    setYear(arg0: number): void
    getDate(): number
    getDay(): number
    toLocaleString(): string
    toGMTString(): string
    getTimezoneOffset(): number
}

declare class ClickEvent {
    getAction(): ClickEventAction
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getValue(): string
}

interface BiFunction {
    apply(arg0: T, arg1: U): R
    andThen(arg0: Function<R, V>): BiFunction<T, U, V>
}

declare class Random implements RandomGenerator, Serializable {
    from(arg0: RandomGenerator): Random
    nextDouble(): number
    nextInt(): number
    nextInt(arg0: number): number
    nextBytes(arg0: byte[]): void
    setSeed(arg0: number): void
    ints(arg0: number): IntStream
    ints(): IntStream
    ints(arg0: number, arg1: number, arg2: number): IntStream
    ints(arg0: number, arg1: number): IntStream
    longs(arg0: number): LongStream
    longs(arg0: number, arg1: number): LongStream
    longs(arg0: number, arg1: number, arg2: number): LongStream
    longs(): LongStream
    doubles(arg0: number): DoubleStream
    doubles(arg0: number, arg1: number, arg2: number): DoubleStream
    doubles(arg0: number, arg1: number): DoubleStream
    doubles(): DoubleStream
    nextLong(): number
    nextBoolean(): boolean
    nextFloat(): number
    nextGaussian(): number
}

interface Player implements HumanEntity, Conversable, OfflinePlayer, PluginMessageRecipient {
    setPlayerWeather(arg0: WeatherType): void
    getScoreboard(): Scoreboard
    updateInventory(): void
    isOnGround(): boolean
    playEffect(arg0: Location, arg1: Effect, arg2: number): void
    playEffect(arg0: Location, arg1: Effect, arg2: T): void
    openSign(arg0: Sign): void
    openSign(arg0: Sign, arg1: Side): void
    kickPlayer(arg0: string): void
    canSee(arg0: Entity): boolean
    canSee(arg0: Player): boolean
    spigot(): CommandSenderSpigot
    spigot(): EntitySpigot
    spigot(): PlayerSpigot
    getAllowFlight(): boolean
    removeCustomChatCompletions(arg0: Collection<string>): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: T): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: T): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: T): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: T): void
    getWorldBorder(): WorldBorder
    playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void
    playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void
    playSound(arg0: Entity, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Entity, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Entity, arg1: string, arg2: number, arg3: number): void
    playSound(arg0: Entity, arg1: Sound, arg2: number, arg3: number): void
    getPlayerTime(): number
    getPlayerWeather(): WeatherType
    resetPlayerWeather(): void
    getFlySpeed(): number
    getPlayerListName(): string
    setExpCooldown(arg0: number): void
    showDemoScreen(): void
    performCommand(arg0: string): boolean
    setCompassTarget(arg0: Location): void
    setSleepingIgnored(arg0: boolean): void
    sendBlockChanges(arg0: Collection<BlockState>, arg1: boolean): void
    sendBlockChanges(arg0: Collection<BlockState>): void
    sendBlockDamage(arg0: Location, arg1: number): void
    sendBlockDamage(arg0: Location, arg1: number, arg2: number): void
    sendBlockDamage(arg0: Location, arg1: number, arg2: Entity): void
    setWalkSpeed(arg0: number): void
    setScoreboard(arg0: Scoreboard): void
    isHealthScaled(): boolean
    setSprinting(arg0: boolean): void
    getSpectatorTarget(): Entity
    setPlayerTime(arg0: number, arg1: boolean): void
    sendRawMessage(arg0: string): void
    sendSignChange(arg0: Location, arg1: string[], arg2: DyeColor): void
    sendSignChange(arg0: Location, arg1: string[]): void
    sendSignChange(arg0: Location, arg1: string[], arg2: DyeColor, arg3: boolean): void
    sendHurtAnimation(arg0: number): void
    getCompassTarget(): Location
    setTotalExperience(arg0: number): void
    setFlySpeed(arg0: number): void
    giveExpLevels(arg0: number): void
    setHealthScaled(arg0: boolean): void
    setHealthScale(arg0: number): void
    setTexturePack(arg0: string): void
    setResourcePack(arg0: string, arg1: byte[], arg2: string, arg3: boolean): void
    setResourcePack(arg0: string, arg1: byte[], arg2: boolean): void
    setResourcePack(arg0: string): void
    setResourcePack(arg0: string, arg1: byte[], arg2: string): void
    setResourcePack(arg0: string, arg1: byte[]): void
    stopAllSounds(): void
    sendBlockUpdate(arg0: Location, arg1: TileState): void
    resetPlayerTime(): void
    getWalkSpeed(): number
    setWorldBorder(arg0: WorldBorder): void
    updateCommands(): void
    getHealthScale(): number
    setSneaking(arg0: boolean): void
    getTotalExperience(): number
    setSpectatorTarget(arg0: Entity): void
    setDisplayName(arg0: string): void
    isSprinting(): boolean
    isSleepingIgnored(): boolean
    getExpCooldown(): number
    sendBlockChange(arg0: Location, arg1: Material, arg2: byte): void
    sendBlockChange(arg0: Location, arg1: BlockData): void
    setPlayerListName(arg0: string): void
    setAllowFlight(arg0: boolean): void
    getPlayerListHeader(): string
    getPlayerListFooter(): string
    getClientViewDistance(): number
    setBedSpawnLocation(arg0: Location): void
    setBedSpawnLocation(arg0: Location, arg1: boolean): void
    getAdvancementProgress(arg0: Advancement): AdvancementProgress
    addCustomChatCompletions(arg0: Collection<string>): void
    getPlayerTimeOffset(): number
    setPlayerListHeader(arg0: string): void
    setPlayerListFooter(arg0: string): void
    getBedSpawnLocation(): Location
    setCustomChatCompletions(arg0: Collection<string>): void
    isPlayerTimeRelative(): boolean
    getPreviousGameMode(): GameMode
    setPlayerListHeaderFooter(arg0: string, arg1: string): void
    sendEquipmentChange(arg0: LivingEntity, arg1: Map<EquipmentSlot, ItemStack>): void
    sendEquipmentChange(arg0: LivingEntity, arg1: EquipmentSlot, arg2: ItemStack): void
    sendExperienceChange(arg0: number, arg1: number): void
    sendExperienceChange(arg0: number): void
    isAllowingServerListings(): boolean
    isSneaking(): boolean
    hidePlayer(arg0: Plugin, arg1: Player): void
    hidePlayer(arg0: Player): void
    isFlying(): boolean
    giveExp(arg0: number): void
    chat(arg0: string): void
    sendMap(arg0: MapView): void
    showPlayer(arg0: Plugin, arg1: Player): void
    showPlayer(arg0: Player): void
    sendTitle(arg0: string, arg1: string, arg2: number, arg3: number, arg4: number): void
    sendTitle(arg0: string, arg1: string): void
    getPing(): number
    openBook(arg0: ItemStack): void
    hideEntity(arg0: Plugin, arg1: Entity): void
    banIp(arg0: string, arg1: Date, arg2: string, arg3: boolean): BanEntry<InetAddress>
    banIp(arg0: string, arg1: Duration, arg2: string, arg3: boolean): BanEntry<InetAddress>
    banIp(arg0: string, arg1: Instant, arg2: string, arg3: boolean): BanEntry<InetAddress>
    playNote(arg0: Location, arg1: Instrument, arg2: Note): void
    playNote(arg0: Location, arg1: byte, arg2: byte): void
    setFlying(arg0: boolean): void
    resetTitle(): void
    setExp(arg0: number): void
    saveData(): void
    loadData(): void
    breakBlock(arg0: Block): boolean
    showEntity(arg0: Plugin, arg1: Entity): void
    ban(arg0: string, arg1: Instant, arg2: string, arg3: boolean): BanEntry<PlayerProfile>
    ban(arg0: string, arg1: Duration, arg2: string, arg3: boolean): BanEntry<PlayerProfile>
    ban(arg0: string, arg1: Date, arg2: string, arg3: boolean): BanEntry<PlayerProfile>
    stopSound(arg0: string): void
    stopSound(arg0: Sound): void
    stopSound(arg0: string, arg1: SoundCategory): void
    stopSound(arg0: Sound, arg1: SoundCategory): void
    stopSound(arg0: SoundCategory): void
    getExp(): number
    getName(): string
    getAddress(): InetSocketAddress
    getDisplayName(): string
    getLocale(): string
    getLevel(): number
    setLevel(arg0: number): void
    sendHealthUpdate(): void
    sendHealthUpdate(arg0: number, arg1: number, arg2: number): void
}

interface Scoreboard {
    getPlayerTeam(arg0: OfflinePlayer): Team
    getPlayers(): Set<OfflinePlayer>
    getObjective(arg0: DisplaySlot): Objective
    getObjective(arg0: string): Objective
    getObjectives(): Set<Objective>
    getEntryTeam(arg0: string): Team
    resetScores(arg0: string): void
    resetScores(arg0: OfflinePlayer): void
    registerNewTeam(arg0: string): Team
    getScores(arg0: string): Set<Score>
    getScores(arg0: OfflinePlayer): Set<Score>
    getTeam(arg0: string): Team
    getTeams(): Set<Team>
    clearSlot(arg0: DisplaySlot): void
    registerNewObjective(arg0: string, arg1: Criteria, arg2: string): Objective
    registerNewObjective(arg0: string, arg1: string, arg2: string, arg3: RenderType): Objective
    registerNewObjective(arg0: string, arg1: string, arg2: string): Objective
    registerNewObjective(arg0: string, arg1: string): Objective
    registerNewObjective(arg0: string, arg1: Criteria, arg2: string, arg3: RenderType): Objective
    getObjectivesByCriteria(arg0: Criteria): Set<Objective>
    getObjectivesByCriteria(arg0: string): Set<Objective>
    getEntries(): Set<string>
}

interface UnsafeValues {
    getTranslationKey(arg0: ItemStack): string
    getTranslationKey(arg0: EntityType): string
    removeAdvancement(arg0: NamespacedKey): boolean
    getMaterial(arg0: string, arg1: number): Material
    getDataVersion(): number
    toLegacy(arg0: Material): Material
    fromLegacy(arg0: Material): Material
    fromLegacy(arg0: MaterialData): Material
    fromLegacy(arg0: MaterialData, arg1: boolean): Material
    fromLegacy(arg0: Material, arg1: byte): BlockData
    modifyItemStack(arg0: ItemStack, arg1: string): ItemStack
    loadAdvancement(arg0: NamespacedKey, arg1: string): Advancement
    checkSupported(arg0: PluginDescriptionFile): void
    getDefaultAttributeModifiers(arg0: Material, arg1: EquipmentSlot): Multimap<Attribute, AttributeModifier>
    getCreativeCategory(arg0: Material): CreativeCategory
    getItemTranslationKey(arg0: Material): string
    getBlockTranslationKey(arg0: Material): string
    processClass(arg0: PluginDescriptionFile, arg1: string, arg2: byte[]): byte[]
    getFeatureFlag(arg0: NamespacedKey): FeatureFlag
}

declare class Instrument extends Enum<Instrument> {
    readonly PIANO: Instrument
    readonly BASS_DRUM: Instrument
    readonly SNARE_DRUM: Instrument
    readonly STICKS: Instrument
    readonly BASS_GUITAR: Instrument
    readonly FLUTE: Instrument
    readonly BELL: Instrument
    readonly GUITAR: Instrument
    readonly CHIME: Instrument
    readonly XYLOPHONE: Instrument
    readonly IRON_XYLOPHONE: Instrument
    readonly COW_BELL: Instrument
    readonly DIDGERIDOO: Instrument
    readonly BIT: Instrument
    readonly BANJO: Instrument
    readonly PLING: Instrument
    readonly ZOMBIE: Instrument
    readonly SKELETON: Instrument
    readonly CREEPER: Instrument
    readonly DRAGON: Instrument
    readonly WITHER_SKELETON: Instrument
    readonly PIGLIN: Instrument
    readonly CUSTOM_HEAD: Instrument
    getByType(arg0: byte): Instrument
    values(): Instrument[]
    valueOf(arg0: string): Instrument
    getType(): byte
}

declare class MapRenderer {
    isContextual(): boolean
    initialize(arg0: MapView): void
    render(arg0: MapView, arg1: MapCanvas, arg2: Player): void
}

interface Recipe {
    getResult(): ItemStack
}

interface PigZombie implements Zombie {
    setAnger(arg0: number): void
    getAnger(): number
    setAngry(arg0: boolean): void
    isAngry(): boolean
    setConversionTime(arg0: number): void
    isConverting(): boolean
    getConversionTime(): number
}

declare class EntityToggleSwimEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isSwimming(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface ItemFactory {
    getItemMeta(arg0: Material): ItemMeta
    isApplicable(arg0: ItemMeta, arg1: Material): boolean
    isApplicable(arg0: ItemMeta, arg1: ItemStack): boolean
    updateMaterial(arg0: ItemMeta, arg1: Material): Material
    asMetaFor(arg0: ItemMeta, arg1: Material): ItemMeta
    asMetaFor(arg0: ItemMeta, arg1: ItemStack): ItemMeta
    getDefaultLeatherColor(): Color
    getSpawnEgg(arg0: EntityType): Material
    createItemStack(arg0: string): ItemStack
    equals(arg0: ItemMeta, arg1: ItemMeta): boolean
}

declare class Image {
    readonly UndefinedProperty: Object
    readonly SCALE_DEFAULT: number
    readonly SCALE_FAST: number
    readonly SCALE_SMOOTH: number
    readonly SCALE_REPLICATE: number
    readonly SCALE_AREA_AVERAGING: number
    getHeight(arg0: ImageObserver): number
    getGraphics(): Graphics
    getCapabilities(arg0: GraphicsConfiguration): ImageCapabilities
    setAccelerationPriority(arg0: number): void
    getScaledInstance(arg0: number, arg1: number, arg2: number): Image
    getAccelerationPriority(): number
    getProperty(arg0: string, arg1: ImageObserver): Object
    flush(): void
    getSource(): ImageProducer
    getWidth(arg0: ImageObserver): number
}

declare class EntityExhaustionEventExhaustionReason extends Enum<EntityExhaustionEventExhaustionReason> {
    readonly BLOCK_MINED: EntityExhaustionEventExhaustionReason
    readonly HUNGER_EFFECT: EntityExhaustionEventExhaustionReason
    readonly DAMAGED: EntityExhaustionEventExhaustionReason
    readonly ATTACK: EntityExhaustionEventExhaustionReason
    readonly JUMP_SPRINT: EntityExhaustionEventExhaustionReason
    readonly JUMP: EntityExhaustionEventExhaustionReason
    readonly SWIM: EntityExhaustionEventExhaustionReason
    readonly WALK_UNDERWATER: EntityExhaustionEventExhaustionReason
    readonly WALK_ON_WATER: EntityExhaustionEventExhaustionReason
    readonly SPRINT: EntityExhaustionEventExhaustionReason
    readonly CROUCH: EntityExhaustionEventExhaustionReason
    readonly WALK: EntityExhaustionEventExhaustionReason
    readonly REGEN: EntityExhaustionEventExhaustionReason
    readonly UNKNOWN: EntityExhaustionEventExhaustionReason
    values(): EntityExhaustionEventExhaustionReason[]
    valueOf(arg0: string): EntityExhaustionEventExhaustionReason
}

declare class InventoryInteractEvent extends InventoryEvent implements Cancellable {
    getWhoClicked(): HumanEntity
    setCancelled(arg0: boolean): void
    getResult(): EventResult
    setResult(arg0: EventResult): void
    isCancelled(): boolean
}

interface Collection implements Iterable<E> {
    remove(arg0: Object): boolean
    size(): number
    equals(arg0: Object): boolean
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    add(arg0: E): boolean
    toArray(arg0: T[]): T[]
    toArray(arg0: IntFunction<T[]>): T[]
    toArray(): Object[]
    iterator(): Iterator<E>
    stream(): Stream<E>
    contains(arg0: Object): boolean
    spliterator(): Spliterator<E>
    addAll(arg0: Collection<E>): boolean
    removeIf(arg0: Predicate<E>): boolean
    removeAll(arg0: Collection<any>): boolean
    retainAll(arg0: Collection<any>): boolean
    containsAll(arg0: Collection<any>): boolean
    parallelStream(): Stream<E>
}

declare class PlayerRespawnEventRespawnReason extends Enum<PlayerRespawnEventRespawnReason> {
    readonly DEATH: PlayerRespawnEventRespawnReason
    readonly END_PORTAL: PlayerRespawnEventRespawnReason
    readonly PLUGIN: PlayerRespawnEventRespawnReason
    values(): PlayerRespawnEventRespawnReason[]
    valueOf(arg0: string): PlayerRespawnEventRespawnReason
}

interface RenderedImage {
    getPropertyNames(): string[]
    getHeight(): number
    getProperty(arg0: string): Object
    getData(arg0: Rectangle): Raster
    getData(): Raster
    getWidth(): number
    getSources(): Vector<RenderedImage>
    getColorModel(): ColorModel
    getSampleModel(): SampleModel
    getMinX(): number
    getMinY(): number
    getNumXTiles(): number
    getNumYTiles(): number
    getMinTileX(): number
    getMinTileY(): number
    getTileWidth(): number
    getTileHeight(): number
    getTileGridXOffset(): number
    getTileGridYOffset(): number
    getTile(arg0: number, arg1: number): Raster
    copyData(arg0: WritableRaster): WritableRaster
}

declare class UUID implements Serializable, Comparable<UUID> {
    randomUUID(): UUID
    fromString(arg0: string): UUID
    equals(arg0: Object): boolean
    toString(): string
    version(): number
    hashCode(): number
    compareTo(arg0: Object): number
    compareTo(arg0: UUID): number
    timestamp(): number
    node(): number
    variant(): number
    nameUUIDFromBytes(arg0: byte[]): UUID
    getLeastSignificantBits(): number
    getMostSignificantBits(): number
    clockSequence(): number
}

interface LivingEntity implements Attributable, Damageable, ProjectileSource {
    getMemory(arg0: MemoryKey<T>): T
    getCategory(): EntityCategory
    getCanPickupItems(): boolean
    rayTraceBlocks(arg0: number, arg1: FluidCollisionMode): RayTraceResult
    rayTraceBlocks(arg0: number): RayTraceResult
    getLastTwoTargetBlocks(arg0: Set<Material>, arg1: number): List<Block>
    setMaximumNoDamageTicks(arg0: number): void
    getActivePotionEffects(): Collection<PotionEffect>
    setRemoveWhenFarAway(arg0: boolean): void
    getCollidableExemptions(): Set<UUID>
    getRemoveWhenFarAway(): boolean
    getMaximumNoDamageTicks(): number
    canBreatheUnderwater(): boolean
    getFallDamageSoundSmall(): Sound
    getTargetBlockExact(arg0: number, arg1: FluidCollisionMode): Block
    getTargetBlockExact(arg0: number): Block
    getFallDamageSoundBig(): Sound
    attack(arg0: Entity): void
    isGliding(): boolean
    isLeashed(): boolean
    setAI(arg0: boolean): void
    isSwimming(): boolean
    setGliding(arg0: boolean): void
    getKiller(): Player
    isSleeping(): boolean
    isClimbing(): boolean
    hasAI(): boolean
    setRemainingAir(arg0: number): void
    setLeashHolder(arg0: Entity): boolean
    getRemainingAir(): number
    getMaximumAir(): number
    getArrowCooldown(): number
    setCanPickupItems(arg0: boolean): void
    setNoDamageTicks(arg0: number): void
    setSwimming(arg0: boolean): void
    addPotionEffect(arg0: PotionEffect): boolean
    addPotionEffect(arg0: PotionEffect, arg1: boolean): boolean
    setMaximumAir(arg0: number): void
    isRiptiding(): boolean
    swingMainHand(): void
    getEquipment(): EntityEquipment
    getNoDamageTicks(): number
    setNoActionTicks(arg0: number): void
    hasPotionEffect(arg0: PotionEffectType): boolean
    getLineOfSight(arg0: Set<Material>, arg1: number): List<Block>
    setArrowCooldown(arg0: number): void
    removePotionEffect(arg0: PotionEffectType): void
    swingOffHand(): void
    getTargetBlock(arg0: Set<Material>, arg1: number): Block
    getEyeHeight(arg0: boolean): number
    getEyeHeight(): number
    getEyeLocation(): Location
    setArrowsInBody(arg0: number): void
    getLastDamage(): number
    setLastDamage(arg0: number): void
    getLeashHolder(): Entity
    playHurtAnimation(arg0: number): void
    setCollidable(arg0: boolean): void
    isCollidable(): boolean
    getHurtSound(): Sound
    getDeathSound(): Sound
    getNoActionTicks(): number
    addPotionEffects(arg0: Collection<PotionEffect>): boolean
    getArrowsInBody(): number
    getPotionEffect(arg0: PotionEffectType): PotionEffect
    hasLineOfSight(arg0: Entity): boolean
    setInvisible(arg0: boolean): void
    isInvisible(): boolean
    getFallDamageSound(arg0: number): Sound
    getDrinkingSound(arg0: ItemStack): Sound
    getEatingSound(arg0: ItemStack): Sound
    setMemory(arg0: MemoryKey<T>, arg1: T): void
}

declare class Instant implements Temporal, TemporalAdjuster, Comparable<Instant>, Serializable {
    readonly EPOCH: Instant
    readonly MIN: Instant
    readonly MAX: Instant
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: Instant): number
    compareTo(arg0: Object): number
    getLong(arg0: TemporalField): number
    from(arg0: TemporalAccessor): Instant
    isSupported(arg0: TemporalUnit): boolean
    isSupported(arg0: TemporalField): boolean
    parse(arg0: CharSequence): Instant
    with(arg0: TemporalField, arg1: number): Instant
    with(arg0: TemporalAdjuster): Instant
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): Temporal
    query(arg0: TemporalQuery<R>): R
    range(arg0: TemporalField): ValueRange
    now(): Instant
    now(arg0: Clock): Instant
    getEpochSecond(): number
    getNano(): number
    ofEpochSecond(arg0: number): Instant
    ofEpochSecond(arg0: number, arg1: number): Instant
    minus(arg0: TemporalAmount): Temporal
    minus(arg0: number, arg1: TemporalUnit): Temporal
    minus(arg0: TemporalAmount): Instant
    minus(arg0: number, arg1: TemporalUnit): Instant
    toEpochMilli(): number
    plus(arg0: number, arg1: TemporalUnit): Instant
    plus(arg0: TemporalAmount): Instant
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: TemporalAmount): Temporal
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusNanos(arg0: number): Instant
    plusSeconds(arg0: number): Instant
    plusMillis(arg0: number): Instant
    minusSeconds(arg0: number): Instant
    minusMillis(arg0: number): Instant
    minusNanos(arg0: number): Instant
    truncatedTo(arg0: TemporalUnit): Instant
    adjustInto(arg0: Temporal): Temporal
    ofEpochMilli(arg0: number): Instant
    atOffset(arg0: ZoneOffset): OffsetDateTime
    atZone(arg0: ZoneId): ZonedDateTime
    isAfter(arg0: Instant): boolean
    isBefore(arg0: Instant): boolean
}

declare class EntityAirChangeEvent extends EntityEvent implements Cancellable {
    setAmount(arg0: number): void
    getAmount(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface Villager implements AbstractVillager {
    wakeup(): void
    setVillagerExperience(arg0: number): void
    getVillagerExperience(): number
    getVillagerType(): VillagerType
    setVillagerType(arg0: VillagerType): void
    getProfession(): VillagerProfession
    setVillagerLevel(arg0: number): void
    setProfession(arg0: VillagerProfession): void
    getVillagerLevel(): number
    sleep(arg0: Location): boolean
    zombify(): ZombieVillager
    shakeHead(): void
}

declare class FluidLevelChangeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewData(): BlockData
    setNewData(arg0: BlockData): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class BrewEvent extends BlockEvent implements Cancellable {
    getFuelLevel(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getContents(): BrewerInventory
    isCancelled(): boolean
    getHandlers(): HandlerList
    getResults(): List<ItemStack>
}

declare class PlayerSpigot extends EntitySpigot {
    getRawAddress(): InetSocketAddress
    sendMessage(arg0: ChatMessageType, arg1: UUID, arg2: BaseComponent[]): void
    sendMessage(arg0: ChatMessageType, arg1: BaseComponent): void
    sendMessage(arg0: ChatMessageType, arg1: BaseComponent[]): void
    sendMessage(arg0: ChatMessageType, arg1: UUID, arg2: BaseComponent): void
    sendMessage(arg0: BaseComponent): void
    sendMessage(arg0: BaseComponent[]): void
    respawn(): void
    getHiddenPlayers(): Set<Player>
}

interface AttributedCharacterIterator implements CharacterIterator {
    readonly DONE: char
    getAttributes(): Map<AttributedCharacterIteratorAttribute, Object>
    getAttribute(arg0: AttributedCharacterIteratorAttribute): Object
    getRunStart(): number
    getRunStart(arg0: Set<AttributedCharacterIteratorAttribute>): number
    getRunStart(arg0: AttributedCharacterIteratorAttribute): number
    getRunLimit(arg0: Set<AttributedCharacterIteratorAttribute>): number
    getRunLimit(arg0: AttributedCharacterIteratorAttribute): number
    getRunLimit(): number
    getAllAttributeKeys(): Set<AttributedCharacterIteratorAttribute>
}

declare class PlayerExpChangeEvent extends PlayerEvent {
    setAmount(arg0: number): void
    getAmount(): number
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class BlockDropItemEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBlockState(): BlockState
    getPlayer(): Player
    getItems(): List<Item>
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class VehicleExitEvent extends VehicleEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getExited(): LivingEntity
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class RaidEvent extends WorldEvent {
    getRaid(): Raid
}

declare class Command {
    timings: CustomTimingsHandler
    getUsage(): string
    setAliases(arg0: List<string>): Command
    tabComplete(arg0: CommandSender, arg1: string, arg2: string[], arg3: Location): List<string>
    tabComplete(arg0: CommandSender, arg1: string, arg2: string[]): List<string>
    getPermissionMessage(): string
    broadcastCommandMessage(arg0: CommandSender, arg1: string): void
    broadcastCommandMessage(arg0: CommandSender, arg1: string, arg2: boolean): void
    setPermissionMessage(arg0: string): Command
    testPermissionSilent(arg0: CommandSender): boolean
    setUsage(arg0: string): Command
    testPermission(arg0: CommandSender): boolean
    setDescription(arg0: string): Command
    getName(): string
    toString(): string
    isRegistered(): boolean
    register(arg0: CommandMap): boolean
    execute(arg0: CommandSender, arg1: string, arg2: string[]): boolean
    setName(arg0: string): boolean
    getPermission(): string
    setPermission(arg0: string): void
    unregister(arg0: CommandMap): boolean
    getAliases(): List<string>
    getDescription(): string
    getLabel(): string
    setLabel(arg0: string): boolean
}

interface Temporal implements TemporalAccessor {
    isSupported(arg0: TemporalUnit): boolean
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): Temporal
    minus(arg0: number, arg1: TemporalUnit): Temporal
    minus(arg0: TemporalAmount): Temporal
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: TemporalAmount): Temporal
    until(arg0: Temporal, arg1: TemporalUnit): number
}

interface Spliterator {
    readonly ORDERED: number
    readonly DISTINCT: number
    readonly SORTED: number
    readonly SIZED: number
    readonly NONNULL: number
    readonly IMMUTABLE: number
    readonly CONCURRENT: number
    readonly SUBSIZED: number
    forEachRemaining(arg0: Consumer<T>): void
    characteristics(): number
    tryAdvance(arg0: Consumer<T>): boolean
    estimateSize(): number
    trySplit(): Spliterator<T>
    getExactSizeIfKnown(): number
    hasCharacteristics(arg0: number): boolean
    getComparator(): Comparator<T>
}

declare class PrepareItemEnchantEvent extends InventoryEvent implements Cancellable {
    getEnchanter(): Player
    getEnchantBlock(): Block
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getOffers(): EnchantmentOffer[]
    getExpLevelCostsOffered(): number[]
    getEnchantmentBonus(): number
    getItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface ItemMeta implements Cloneable, ConfigurationSerializable, PersistentDataHolder {
    getAsString(): string
    getEnchantLevel(arg0: Enchantment): number
    removeEnchant(arg0: Enchantment): boolean
    getEnchants(): Map<Enchantment, Integer>
    hasEnchant(arg0: Enchantment): boolean
    addEnchant(arg0: Enchantment, arg1: number, arg2: boolean): boolean
    setDisplayName(arg0: string): void
    hasAttributeModifiers(): boolean
    hasConflictingEnchant(arg0: Enchantment): boolean
    getAttributeModifiers(arg0: EquipmentSlot): Multimap<Attribute, AttributeModifier>
    getAttributeModifiers(): Multimap<Attribute, AttributeModifier>
    getAttributeModifiers(arg0: Attribute): Collection<AttributeModifier>
    addAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean
    setAttributeModifiers(arg0: Multimap<Attribute, AttributeModifier>): void
    getCustomTagContainer(): CustomItemTagContainer
    removeAttributeModifier(arg0: Attribute, arg1: AttributeModifier): boolean
    removeAttributeModifier(arg0: Attribute): boolean
    removeAttributeModifier(arg0: EquipmentSlot): boolean
    getLore(): List<string>
    hasLore(): boolean
    setLore(arg0: List<string>): void
    hasLocalizedName(): boolean
    hasCustomModelData(): boolean
    isUnbreakable(): boolean
    addItemFlags(arg0: ItemFlag[]): void
    hasDisplayName(): boolean
    setUnbreakable(arg0: boolean): void
    setCustomModelData(arg0: Integer): void
    setLocalizedName(arg0: string): void
    getItemFlags(): Set<ItemFlag>
    getCustomModelData(): number
    hasEnchants(): boolean
    hasItemFlag(arg0: ItemFlag): boolean
    removeItemFlags(arg0: ItemFlag[]): void
    clone(): ItemMeta
    clone(): Object
    getDisplayName(): string
    getLocalizedName(): string
    setVersion(arg0: number): void
}

declare class FireworkEffect implements ConfigurationSerializable {
    serialize(): Map<string, Object>
    hasTrail(): boolean
    hasFlicker(): boolean
    getColors(): List<Color>
    getFadeColors(): List<Color>
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    builder(): FireworkEffectBuilder
    getType(): FireworkEffectType
    deserialize(arg0: Map<string, Object>): ConfigurationSerializable
}

interface BookMeta implements ItemMeta {
    getTitle(): string
    setTitle(arg0: string): boolean
    spigot(): BookMetaSpigot
    getGeneration(): BookMetaGeneration
    hasTitle(): boolean
    setPage(arg0: number, arg1: string): void
    addPage(arg0: string[]): void
    setAuthor(arg0: string): void
    getPage(arg0: number): string
    hasAuthor(): boolean
    getAuthor(): string
    hasPages(): boolean
    getPages(): List<string>
    setPages(arg0: string[]): void
    setPages(arg0: List<string>): void
    getPageCount(): number
    setGeneration(arg0: BookMetaGeneration): void
    hasGeneration(): boolean
    clone(): BookMeta
    clone(): ItemMeta
    clone(): Object
}

declare class CompletableFuture implements Future<T>, CompletionStage<T> {
    completeAsync(arg0: Supplier<T>, arg1: Executor): CompletableFuture<T>
    completeAsync(arg0: Supplier<T>): CompletableFuture<T>
    supplyAsync(arg0: Supplier<U>, arg1: Executor): CompletableFuture<U>
    supplyAsync(arg0: Supplier<U>): CompletableFuture<U>
    thenCompose(arg0: Function): CompletionStage
    thenCompose(arg0: Function<T, CompletionStage>): CompletableFuture<U>
    handleAsync(arg0: BiFunction): CompletionStage
    handleAsync(arg0: BiFunction, arg1: Executor): CompletionStage
    handleAsync(arg0: BiFunction<T, Throwable, U>, arg1: Executor): CompletableFuture<U>
    handleAsync(arg0: BiFunction<T, Throwable, U>): CompletableFuture<U>
    thenApplyAsync(arg0: Function<T, U>, arg1: Executor): CompletableFuture<U>
    thenApplyAsync(arg0: Function<T, U>): CompletableFuture<U>
    thenApplyAsync(arg0: Function): CompletionStage
    thenApplyAsync(arg0: Function, arg1: Executor): CompletionStage
    thenAccept(arg0: Consumer<T>): CompletableFuture<Void>
    thenAccept(arg0: Consumer): CompletionStage
    thenAcceptAsync(arg0: Consumer<T>): CompletableFuture<Void>
    thenAcceptAsync(arg0: Consumer, arg1: Executor): CompletionStage
    thenAcceptAsync(arg0: Consumer<T>, arg1: Executor): CompletableFuture<Void>
    thenAcceptAsync(arg0: Consumer): CompletionStage
    thenRun(arg0: Runnable): CompletionStage
    thenRun(arg0: Runnable): CompletableFuture<Void>
    thenRunAsync(arg0: Runnable): CompletionStage
    thenRunAsync(arg0: Runnable): CompletableFuture<Void>
    thenRunAsync(arg0: Runnable, arg1: Executor): CompletableFuture<Void>
    thenRunAsync(arg0: Runnable, arg1: Executor): CompletionStage
    thenCombine(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>): CompletableFuture<V>
    thenCombine(arg0: CompletionStage, arg1: BiFunction): CompletionStage
    thenCombineAsync(arg0: CompletionStage, arg1: BiFunction): CompletionStage
    thenCombineAsync(arg0: CompletionStage, arg1: BiFunction, arg2: Executor): CompletionStage
    thenCombineAsync(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>): CompletableFuture<V>
    thenCombineAsync(arg0: CompletionStage<U>, arg1: BiFunction<T, U, V>, arg2: Executor): CompletableFuture<V>
    thenAcceptBoth(arg0: CompletionStage, arg1: BiConsumer): CompletionStage
    thenAcceptBoth(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>): CompletableFuture<Void>
    thenAcceptBothAsync(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>, arg2: Executor): CompletableFuture<Void>
    thenAcceptBothAsync(arg0: CompletionStage, arg1: BiConsumer, arg2: Executor): CompletionStage
    thenAcceptBothAsync(arg0: CompletionStage, arg1: BiConsumer): CompletionStage
    thenAcceptBothAsync(arg0: CompletionStage<U>, arg1: BiConsumer<T, U>): CompletableFuture<Void>
    runAfterBoth(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>
    runAfterBoth(arg0: CompletionStage, arg1: Runnable): CompletionStage
    runAfterBothAsync(arg0: CompletionStage<any>, arg1: Runnable, arg2: Executor): CompletableFuture<Void>
    runAfterBothAsync(arg0: CompletionStage, arg1: Runnable): CompletionStage
    runAfterBothAsync(arg0: CompletionStage, arg1: Runnable, arg2: Executor): CompletionStage
    runAfterBothAsync(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>
    applyToEitherAsync(arg0: CompletionStage, arg1: Function): CompletionStage
    applyToEitherAsync(arg0: CompletionStage, arg1: Function, arg2: Executor): CompletionStage
    applyToEitherAsync(arg0: CompletionStage<T>, arg1: Function<T, U>): CompletableFuture<U>
    applyToEitherAsync(arg0: CompletionStage<T>, arg1: Function<T, U>, arg2: Executor): CompletableFuture<U>
    acceptEither(arg0: CompletionStage<T>, arg1: Consumer<T>): CompletableFuture<Void>
    acceptEither(arg0: CompletionStage, arg1: Consumer): CompletionStage
    acceptEitherAsync(arg0: CompletionStage, arg1: Consumer): CompletionStage
    acceptEitherAsync(arg0: CompletionStage, arg1: Consumer, arg2: Executor): CompletionStage
    acceptEitherAsync(arg0: CompletionStage<T>, arg1: Consumer<T>, arg2: Executor): CompletableFuture<Void>
    acceptEitherAsync(arg0: CompletionStage<T>, arg1: Consumer<T>): CompletableFuture<Void>
    runAfterEither(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>
    runAfterEither(arg0: CompletionStage, arg1: Runnable): CompletionStage
    runAfterEitherAsync(arg0: CompletionStage<any>, arg1: Runnable): CompletableFuture<Void>
    runAfterEitherAsync(arg0: CompletionStage<any>, arg1: Runnable, arg2: Executor): CompletableFuture<Void>
    runAfterEitherAsync(arg0: CompletionStage, arg1: Runnable): CompletionStage
    runAfterEitherAsync(arg0: CompletionStage, arg1: Runnable, arg2: Executor): CompletionStage
    thenComposeAsync(arg0: Function, arg1: Executor): CompletionStage
    thenComposeAsync(arg0: Function): CompletionStage
    thenComposeAsync(arg0: Function<T, CompletionStage>, arg1: Executor): CompletableFuture<U>
    thenComposeAsync(arg0: Function<T, CompletionStage>): CompletableFuture<U>
    whenCompleteAsync(arg0: BiConsumer<T, Throwable>, arg1: Executor): CompletableFuture<T>
    whenCompleteAsync(arg0: BiConsumer, arg1: Executor): CompletionStage
    whenCompleteAsync(arg0: BiConsumer): CompletionStage
    whenCompleteAsync(arg0: BiConsumer<T, Throwable>): CompletableFuture<T>
    exceptionally(arg0: Function<Throwable, T>): CompletableFuture<T>
    exceptionally(arg0: Function): CompletionStage
    exceptionallyAsync(arg0: Function, arg1: Executor): CompletionStage
    exceptionallyAsync(arg0: Function): CompletionStage
    exceptionallyAsync(arg0: Function<Throwable, T>): CompletableFuture<T>
    exceptionallyAsync(arg0: Function<Throwable, T>, arg1: Executor): CompletableFuture<T>
    exceptionallyCompose(arg0: Function): CompletionStage
    exceptionallyCompose(arg0: Function<Throwable, CompletionStage>): CompletableFuture<T>
    exceptionallyComposeAsync(arg0: Function<Throwable, CompletionStage>): CompletableFuture<T>
    exceptionallyComposeAsync(arg0: Function): CompletionStage
    exceptionallyComposeAsync(arg0: Function, arg1: Executor): CompletionStage
    exceptionallyComposeAsync(arg0: Function<Throwable, CompletionStage>, arg1: Executor): CompletableFuture<T>
    toCompletableFuture(): CompletableFuture<T>
    runAsync(arg0: Runnable, arg1: Executor): CompletableFuture<Void>
    runAsync(arg0: Runnable): CompletableFuture<Void>
    applyToEither(arg0: CompletionStage<T>, arg1: Function<T, U>): CompletableFuture<U>
    applyToEither(arg0: CompletionStage, arg1: Function): CompletionStage
    whenComplete(arg0: BiConsumer<T, Throwable>): CompletableFuture<T>
    whenComplete(arg0: BiConsumer): CompletionStage
    thenApply(arg0: Function<T, U>): CompletableFuture<U>
    thenApply(arg0: Function): CompletionStage
    anyOf(arg0: CompletableFuture[]): CompletableFuture<Object>
    getNow(arg0: T): T
    isCompletedExceptionally(): boolean
    obtrudeValue(arg0: T): void
    obtrudeException(arg0: Throwable): void
    getNumberOfDependents(): number
    minimalCompletionStage(): CompletionStage<T>
    orTimeout(arg0: number, arg1: TimeUnit): CompletableFuture<T>
    completeOnTimeout(arg0: T, arg1: number, arg2: TimeUnit): CompletableFuture<T>
    delayedExecutor(arg0: number, arg1: TimeUnit): Executor
    delayedExecutor(arg0: number, arg1: TimeUnit, arg2: Executor): Executor
    completedStage(arg0: U): CompletionStage<U>
    failedFuture(arg0: Throwable): CompletableFuture<U>
    failedStage(arg0: Throwable): CompletionStage<U>
    get(arg0: number, arg1: TimeUnit): T
    get(): T
    toString(): string
    join(): T
    state(): FutureState
    isDone(): boolean
    cancel(arg0: boolean): boolean
    copy(): CompletableFuture<T>
    handle(arg0: BiFunction): CompletionStage
    handle(arg0: BiFunction<T, Throwable, U>): CompletableFuture<U>
    complete(arg0: T): boolean
    allOf(arg0: CompletableFuture[]): CompletableFuture<Void>
    isCancelled(): boolean
    resultNow(): T
    exceptionNow(): Throwable
    completeExceptionally(arg0: Throwable): boolean
    defaultExecutor(): Executor
    newIncompleteFuture(): CompletableFuture<U>
    completedFuture(arg0: U): CompletableFuture<U>
}

declare class PlayerSwapHandItemsEvent extends PlayerEvent implements Cancellable {
    setMainHandItem(arg0: ItemStack): void
    setOffHandItem(arg0: ItemStack): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getMainHandItem(): ItemStack
    getOffHandItem(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class WorldCreator {
    hardcore(): boolean
    hardcore(arg0: boolean): WorldCreator
    biomeProvider(arg0: BiomeProvider): WorldCreator
    biomeProvider(arg0: string, arg1: CommandSender): WorldCreator
    biomeProvider(arg0: string): WorldCreator
    biomeProvider(): BiomeProvider
    createWorld(): World
    generatorSettings(arg0: string): WorldCreator
    generatorSettings(): string
    generateStructures(): boolean
    generateStructures(arg0: boolean): WorldCreator
    getBiomeProviderForName(arg0: string, arg1: string, arg2: CommandSender): BiomeProvider
    getGeneratorForName(arg0: string, arg1: string, arg2: CommandSender): ChunkGenerator
    name(): string
    name(arg0: string): WorldCreator
    type(): WorldType
    type(arg0: WorldType): WorldCreator
    copy(arg0: World): WorldCreator
    copy(arg0: WorldCreator): WorldCreator
    generator(arg0: string): WorldCreator
    generator(arg0: ChunkGenerator): WorldCreator
    generator(arg0: string, arg1: CommandSender): WorldCreator
    generator(): ChunkGenerator
    seed(arg0: number): WorldCreator
    seed(): number
    environment(arg0: WorldEnvironment): WorldCreator
    environment(): WorldEnvironment
}

declare class Level implements Serializable {
    readonly OFF: Level
    readonly SEVERE: Level
    readonly WARNING: Level
    readonly INFO: Level
    readonly CONFIG: Level
    readonly FINE: Level
    readonly FINER: Level
    readonly FINEST: Level
    readonly ALL: Level
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    intValue(): number
    parse(arg0: string): Level
    getResourceBundleName(): string
    getLocalizedName(): string
}

interface LightningStrike implements Entity {
    spigot(): EntitySpigot
    spigot(): LightningStrikeSpigot
    spigot(): CommandSenderSpigot
    isEffect(): boolean
}

declare class DragType extends Enum<DragType> {
    readonly SINGLE: DragType
    readonly EVEN: DragType
    values(): DragType[]
    valueOf(arg0: string): DragType
}

declare class WorldUnloadEvent extends WorldEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class BarStyle extends Enum<BarStyle> {
    readonly SOLID: BarStyle
    readonly SEGMENTED_6: BarStyle
    readonly SEGMENTED_10: BarStyle
    readonly SEGMENTED_12: BarStyle
    readonly SEGMENTED_20: BarStyle
    values(): BarStyle[]
    valueOf(arg0: string): BarStyle
}

declare class AsyncPlayerChatEvent extends PlayerEvent implements Cancellable {
    setMessage(arg0: string): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipients(): Set<Player>
    getMessage(): string
    setFormat(arg0: string): void
    getFormat(): string
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class GameEvent implements Keyed {
    readonly BLOCK_ACTIVATE: GameEvent
    readonly BLOCK_ATTACH: GameEvent
    readonly BLOCK_CHANGE: GameEvent
    readonly BLOCK_CLOSE: GameEvent
    readonly BLOCK_DEACTIVATE: GameEvent
    readonly BLOCK_DESTROY: GameEvent
    readonly BLOCK_DETACH: GameEvent
    readonly BLOCK_OPEN: GameEvent
    readonly BLOCK_PLACE: GameEvent
    readonly BLOCK_PRESS: GameEvent
    readonly BLOCK_SWITCH: GameEvent
    readonly BLOCK_UNPRESS: GameEvent
    readonly BLOCK_UNSWITCH: GameEvent
    readonly CONTAINER_CLOSE: GameEvent
    readonly CONTAINER_OPEN: GameEvent
    readonly DISPENSE_FAIL: GameEvent
    readonly DRINK: GameEvent
    readonly DRINKING_FINISH: GameEvent
    readonly EAT: GameEvent
    readonly ELYTRA_FREE_FALL: GameEvent
    readonly ELYTRA_GLIDE: GameEvent
    readonly ENTITY_DAMAGE: GameEvent
    readonly ENTITY_DAMAGED: GameEvent
    readonly ENTITY_DIE: GameEvent
    readonly ENTITY_DISMOUNT: GameEvent
    readonly ENTITY_DYING: GameEvent
    readonly ENTITY_INTERACT: GameEvent
    readonly ENTITY_MOUNT: GameEvent
    readonly ENTITY_KILLED: GameEvent
    readonly ENTITY_PLACE: GameEvent
    readonly ENTITY_ROAR: GameEvent
    readonly ENTITY_SHAKE: GameEvent
    readonly EQUIP: GameEvent
    readonly EXPLODE: GameEvent
    readonly FLAP: GameEvent
    readonly FLUID_PICKUP: GameEvent
    readonly FLUID_PLACE: GameEvent
    readonly HIT_GROUND: GameEvent
    readonly INSTRUMENT_PLAY: GameEvent
    readonly ITEM_INTERACT_FINISH: GameEvent
    readonly ITEM_INTERACT_START: GameEvent
    readonly JUKEBOX_PLAY: GameEvent
    readonly JUKEBOX_STOP_PLAY: GameEvent
    readonly LIGHTNING_STRIKE: GameEvent
    readonly MOB_INTERACT: GameEvent
    readonly NOTE_BLOCK_PLAY: GameEvent
    readonly PISTON_CONTRACT: GameEvent
    readonly PISTON_EXTEND: GameEvent
    readonly PRIME_FUSE: GameEvent
    readonly PROJECTILE_LAND: GameEvent
    readonly PROJECTILE_SHOOT: GameEvent
    readonly RAVAGER_ROAR: GameEvent
    readonly RING_BELL: GameEvent
    readonly SCULK_SENSOR_TENDRILS_CLICKING: GameEvent
    readonly SHEAR: GameEvent
    readonly SHRIEK: GameEvent
    readonly SHULKER_CLOSE: GameEvent
    readonly SHULKER_OPEN: GameEvent
    readonly SPLASH: GameEvent
    readonly STEP: GameEvent
    readonly SWIM: GameEvent
    readonly TELEPORT: GameEvent
    readonly WOLF_SHAKING: GameEvent
    readonly RESONATE_1: GameEvent
    readonly RESONATE_2: GameEvent
    readonly RESONATE_3: GameEvent
    readonly RESONATE_4: GameEvent
    readonly RESONATE_5: GameEvent
    readonly RESONATE_6: GameEvent
    readonly RESONATE_7: GameEvent
    readonly RESONATE_8: GameEvent
    readonly RESONATE_9: GameEvent
    readonly RESONATE_10: GameEvent
    readonly RESONATE_11: GameEvent
    readonly RESONATE_12: GameEvent
    readonly RESONATE_13: GameEvent
    readonly RESONATE_14: GameEvent
    readonly RESONATE_15: GameEvent
    getByKey(arg0: NamespacedKey): GameEvent
    values(): Collection<GameEvent>
}

declare class BlockBurnEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getIgnitingBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class GenericGameEvent extends WorldEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRadius(): number
    setRadius(arg0: number): void
    getLocation(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEvent(): GameEvent
    getEntity(): Entity
}

declare class Attribute extends Enum<Attribute> implements Keyed {
    readonly GENERIC_MAX_HEALTH: Attribute
    readonly GENERIC_FOLLOW_RANGE: Attribute
    readonly GENERIC_KNOCKBACK_RESISTANCE: Attribute
    readonly GENERIC_MOVEMENT_SPEED: Attribute
    readonly GENERIC_FLYING_SPEED: Attribute
    readonly GENERIC_ATTACK_DAMAGE: Attribute
    readonly GENERIC_ATTACK_KNOCKBACK: Attribute
    readonly GENERIC_ATTACK_SPEED: Attribute
    readonly GENERIC_ARMOR: Attribute
    readonly GENERIC_ARMOR_TOUGHNESS: Attribute
    readonly GENERIC_LUCK: Attribute
    readonly HORSE_JUMP_STRENGTH: Attribute
    readonly ZOMBIE_SPAWN_REINFORCEMENTS: Attribute
    values(): Attribute[]
    valueOf(arg0: string): Attribute
    getKey(): NamespacedKey
}

declare class EntityCombustEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getDuration(): number
    isCancelled(): boolean
    getHandlers(): HandlerList
    setDuration(arg0: number): void
}

declare class PlayerChatEvent extends PlayerEvent implements Cancellable {
    setMessage(arg0: string): void
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipients(): Set<Player>
    setPlayer(arg0: Player): void
    getMessage(): string
    setFormat(arg0: string): void
    getFormat(): string
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PotionEffect implements ConfigurationSerializable {
    readonly INFINITE_DURATION: number
    getColor(): Color
    serialize(): Map<string, Object>
    hasParticles(): boolean
    getAmplifier(): number
    isAmbient(): boolean
    hasIcon(): boolean
    isShorterThan(arg0: PotionEffect): boolean
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    isInfinite(): boolean
    apply(arg0: LivingEntity): boolean
    getType(): PotionEffectType
    getDuration(): number
}

declare class Particle extends Enum<Particle> {
    readonly EXPLOSION_NORMAL: Particle
    readonly EXPLOSION_LARGE: Particle
    readonly EXPLOSION_HUGE: Particle
    readonly FIREWORKS_SPARK: Particle
    readonly WATER_BUBBLE: Particle
    readonly WATER_SPLASH: Particle
    readonly WATER_WAKE: Particle
    readonly SUSPENDED: Particle
    readonly SUSPENDED_DEPTH: Particle
    readonly CRIT: Particle
    readonly CRIT_MAGIC: Particle
    readonly SMOKE_NORMAL: Particle
    readonly SMOKE_LARGE: Particle
    readonly SPELL: Particle
    readonly SPELL_INSTANT: Particle
    readonly SPELL_MOB: Particle
    readonly SPELL_MOB_AMBIENT: Particle
    readonly SPELL_WITCH: Particle
    readonly DRIP_WATER: Particle
    readonly DRIP_LAVA: Particle
    readonly VILLAGER_ANGRY: Particle
    readonly VILLAGER_HAPPY: Particle
    readonly TOWN_AURA: Particle
    readonly NOTE: Particle
    readonly PORTAL: Particle
    readonly ENCHANTMENT_TABLE: Particle
    readonly FLAME: Particle
    readonly LAVA: Particle
    readonly CLOUD: Particle
    readonly REDSTONE: Particle
    readonly SNOWBALL: Particle
    readonly SNOW_SHOVEL: Particle
    readonly SLIME: Particle
    readonly HEART: Particle
    readonly ITEM_CRACK: Particle
    readonly BLOCK_CRACK: Particle
    readonly BLOCK_DUST: Particle
    readonly WATER_DROP: Particle
    readonly MOB_APPEARANCE: Particle
    readonly DRAGON_BREATH: Particle
    readonly END_ROD: Particle
    readonly DAMAGE_INDICATOR: Particle
    readonly SWEEP_ATTACK: Particle
    readonly FALLING_DUST: Particle
    readonly TOTEM: Particle
    readonly SPIT: Particle
    readonly SQUID_INK: Particle
    readonly BUBBLE_POP: Particle
    readonly CURRENT_DOWN: Particle
    readonly BUBBLE_COLUMN_UP: Particle
    readonly NAUTILUS: Particle
    readonly DOLPHIN: Particle
    readonly SNEEZE: Particle
    readonly CAMPFIRE_COSY_SMOKE: Particle
    readonly CAMPFIRE_SIGNAL_SMOKE: Particle
    readonly COMPOSTER: Particle
    readonly FLASH: Particle
    readonly FALLING_LAVA: Particle
    readonly LANDING_LAVA: Particle
    readonly FALLING_WATER: Particle
    readonly DRIPPING_HONEY: Particle
    readonly FALLING_HONEY: Particle
    readonly LANDING_HONEY: Particle
    readonly FALLING_NECTAR: Particle
    readonly SOUL_FIRE_FLAME: Particle
    readonly ASH: Particle
    readonly CRIMSON_SPORE: Particle
    readonly WARPED_SPORE: Particle
    readonly SOUL: Particle
    readonly DRIPPING_OBSIDIAN_TEAR: Particle
    readonly FALLING_OBSIDIAN_TEAR: Particle
    readonly LANDING_OBSIDIAN_TEAR: Particle
    readonly REVERSE_PORTAL: Particle
    readonly WHITE_ASH: Particle
    readonly DUST_COLOR_TRANSITION: Particle
    readonly VIBRATION: Particle
    readonly FALLING_SPORE_BLOSSOM: Particle
    readonly SPORE_BLOSSOM_AIR: Particle
    readonly SMALL_FLAME: Particle
    readonly SNOWFLAKE: Particle
    readonly DRIPPING_DRIPSTONE_LAVA: Particle
    readonly FALLING_DRIPSTONE_LAVA: Particle
    readonly DRIPPING_DRIPSTONE_WATER: Particle
    readonly FALLING_DRIPSTONE_WATER: Particle
    readonly GLOW_SQUID_INK: Particle
    readonly GLOW: Particle
    readonly WAX_ON: Particle
    readonly WAX_OFF: Particle
    readonly ELECTRIC_SPARK: Particle
    readonly SCRAPE: Particle
    readonly SONIC_BOOM: Particle
    readonly SCULK_SOUL: Particle
    readonly SCULK_CHARGE: Particle
    readonly SCULK_CHARGE_POP: Particle
    readonly SHRIEK: Particle
    readonly CHERRY_LEAVES: Particle
    readonly EGG_CRACK: Particle
    readonly BLOCK_MARKER: Particle
    readonly LEGACY_BLOCK_CRACK: Particle
    readonly LEGACY_BLOCK_DUST: Particle
    readonly LEGACY_FALLING_DUST: Particle
    getDataType(): Class<any>
    values(): Particle[]
    valueOf(arg0: string): Particle
}

declare class EntityPotionEffectEventCause extends Enum<EntityPotionEffectEventCause> {
    readonly AREA_EFFECT_CLOUD: EntityPotionEffectEventCause
    readonly ARROW: EntityPotionEffectEventCause
    readonly ATTACK: EntityPotionEffectEventCause
    readonly AXOLOTL: EntityPotionEffectEventCause
    readonly BEACON: EntityPotionEffectEventCause
    readonly COMMAND: EntityPotionEffectEventCause
    readonly CONDUIT: EntityPotionEffectEventCause
    readonly CONVERSION: EntityPotionEffectEventCause
    readonly DEATH: EntityPotionEffectEventCause
    readonly DOLPHIN: EntityPotionEffectEventCause
    readonly EXPIRATION: EntityPotionEffectEventCause
    readonly FOOD: EntityPotionEffectEventCause
    readonly ILLUSION: EntityPotionEffectEventCause
    readonly MILK: EntityPotionEffectEventCause
    readonly PATROL_CAPTAIN: EntityPotionEffectEventCause
    readonly PLUGIN: EntityPotionEffectEventCause
    readonly POTION_DRINK: EntityPotionEffectEventCause
    readonly POTION_SPLASH: EntityPotionEffectEventCause
    readonly SPIDER_SPAWN: EntityPotionEffectEventCause
    readonly TOTEM: EntityPotionEffectEventCause
    readonly TURTLE_HELMET: EntityPotionEffectEventCause
    readonly UNKNOWN: EntityPotionEffectEventCause
    readonly VILLAGER_TRADE: EntityPotionEffectEventCause
    readonly WARDEN: EntityPotionEffectEventCause
    readonly WITHER_ROSE: EntityPotionEffectEventCause
    values(): EntityPotionEffectEventCause[]
    valueOf(arg0: string): EntityPotionEffectEventCause
}

declare class WritableRaster extends Raster {
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void
    setPixels(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[]): void
    setDataElements(arg0: number, arg1: number, arg2: Object): void
    setDataElements(arg0: number, arg1: number, arg2: Raster): void
    setDataElements(arg0: number, arg1: number, arg2: number, arg3: number, arg4: Object): void
    createWritableChild(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number[]): WritableRaster
    setRect(arg0: number, arg1: number, arg2: Raster): void
    setRect(arg0: Raster): void
    setPixel(arg0: number, arg1: number, arg2: number[]): void
    setPixel(arg0: number, arg1: number, arg2: number[]): void
    setPixel(arg0: number, arg1: number, arg2: number[]): void
    setSample(arg0: number, arg1: number, arg2: number, arg3: number): void
    setSample(arg0: number, arg1: number, arg2: number, arg3: number): void
    setSample(arg0: number, arg1: number, arg2: number, arg3: number): void
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void
    setSamples(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[]): void
    getWritableParent(): WritableRaster
    createWritableTranslatedChild(arg0: number, arg1: number): WritableRaster
}

declare class BlockCanBuildEvent extends BlockEvent {
    getBlockData(): BlockData
    getHandlerList(): HandlerList
    getPlayer(): Player
    getMaterial(): Material
    isBuildable(): boolean
    setBuildable(arg0: boolean): void
    getHandlers(): HandlerList
}

interface EntityEquipment {
    setItemInMainHandDropChance(arg0: number): void
    setArmorContents(arg0: ItemStack[]): void
    setBootsDropChance(arg0: number): void
    getChestplate(): ItemStack
    setLeggings(arg0: ItemStack, arg1: boolean): void
    setLeggings(arg0: ItemStack): void
    getLeggings(): ItemStack
    getItemInMainHand(): ItemStack
    setItemInOffHand(arg0: ItemStack, arg1: boolean): void
    setItemInOffHand(arg0: ItemStack): void
    getBootsDropChance(): number
    setChestplate(arg0: ItemStack): void
    setChestplate(arg0: ItemStack, arg1: boolean): void
    getArmorContents(): ItemStack[]
    getItemInOffHand(): ItemStack
    setItemInMainHand(arg0: ItemStack, arg1: boolean): void
    setItemInMainHand(arg0: ItemStack): void
    getItemInHand(): ItemStack
    setItemInHand(arg0: ItemStack): void
    getHolder(): Entity
    setItem(arg0: EquipmentSlot, arg1: ItemStack): void
    setItem(arg0: EquipmentSlot, arg1: ItemStack, arg2: boolean): void
    setLeggingsDropChance(arg0: number): void
    getChestplateDropChance(): number
    getHelmetDropChance(): number
    getItemInOffHandDropChance(): number
    setChestplateDropChance(arg0: number): void
    setItemInOffHandDropChance(arg0: number): void
    getLeggingsDropChance(): number
    setItemInHandDropChance(arg0: number): void
    getItemInHandDropChance(): number
    setHelmetDropChance(arg0: number): void
    getItemInMainHandDropChance(): number
    clear(): void
    getItem(arg0: EquipmentSlot): ItemStack
    setHelmet(arg0: ItemStack, arg1: boolean): void
    setHelmet(arg0: ItemStack): void
    getHelmet(): ItemStack
    getBoots(): ItemStack
    setBoots(arg0: ItemStack, arg1: boolean): void
    setBoots(arg0: ItemStack): void
}

interface Comparator {
    equals(arg0: Object): boolean
    compare(arg0: T, arg1: T): number
    reversed(): Comparator<T>
    reverseOrder(): Comparator<T>
    comparing(arg0: Function<T, U>): Comparator<T>
    comparing(arg0: Function<T, U>, arg1: Comparator<U>): Comparator<T>
    thenComparing(arg0: Function<T, U>, arg1: Comparator<U>): Comparator<T>
    thenComparing(arg0: Comparator<T>): Comparator<T>
    thenComparing(arg0: Function<T, U>): Comparator<T>
    comparingInt(arg0: ToIntFunction<T>): Comparator<T>
    comparingLong(arg0: ToLongFunction<T>): Comparator<T>
    comparingDouble(arg0: ToDoubleFunction<T>): Comparator<T>
    thenComparingInt(arg0: ToIntFunction<T>): Comparator<T>
    thenComparingLong(arg0: ToLongFunction<T>): Comparator<T>
    thenComparingDouble(arg0: ToDoubleFunction<T>): Comparator<T>
    naturalOrder(): Comparator<T>
    nullsFirst(arg0: Comparator<T>): Comparator<T>
    nullsLast(arg0: Comparator<T>): Comparator<T>
}

declare class ProjectileHitEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getHitBlock(): Block
    getHitBlockFace(): BlockFace
    getHitEntity(): Entity
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Projectile
    getEntity(): Entity
}

declare class BlockFromToEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getFace(): BlockFace
    getHandlerList(): HandlerList
    getToBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityPoseChangeEvent extends EntityEvent {
    getPose(): Pose
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class EntityCategory extends Enum<EntityCategory> {
    readonly NONE: EntityCategory
    readonly UNDEAD: EntityCategory
    readonly ARTHROPOD: EntityCategory
    readonly ILLAGER: EntityCategory
    readonly WATER: EntityCategory
    values(): EntityCategory[]
    valueOf(arg0: string): EntityCategory
}

declare class TreeType extends Enum<TreeType> {
    readonly TREE: TreeType
    readonly BIG_TREE: TreeType
    readonly REDWOOD: TreeType
    readonly TALL_REDWOOD: TreeType
    readonly BIRCH: TreeType
    readonly JUNGLE: TreeType
    readonly SMALL_JUNGLE: TreeType
    readonly COCOA_TREE: TreeType
    readonly JUNGLE_BUSH: TreeType
    readonly RED_MUSHROOM: TreeType
    readonly BROWN_MUSHROOM: TreeType
    readonly SWAMP: TreeType
    readonly ACACIA: TreeType
    readonly DARK_OAK: TreeType
    readonly MEGA_REDWOOD: TreeType
    readonly TALL_BIRCH: TreeType
    readonly CHORUS_PLANT: TreeType
    readonly CRIMSON_FUNGUS: TreeType
    readonly WARPED_FUNGUS: TreeType
    readonly AZALEA: TreeType
    readonly MANGROVE: TreeType
    readonly TALL_MANGROVE: TreeType
    readonly CHERRY: TreeType
    values(): TreeType[]
    valueOf(arg0: string): TreeType
}

declare class PlayerSpawnChangeEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getNewSpawn(): Location
    isForced(): boolean
    setNewSpawn(arg0: Location): void
    setForced(arg0: boolean): void
    getCause(): PlayerSpawnChangeEventCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface Slime implements Mob, Enemy {
    getSize(): number
    setSize(arg0: number): void
}

interface TabCompleter {
    onTabComplete(arg0: CommandSender, arg1: Command, arg2: string, arg3: string[]): List<string>
}

declare class Rectangle2D extends RectangularShape {
    readonly OUT_LEFT: number
    readonly OUT_TOP: number
    readonly OUT_RIGHT: number
    readonly OUT_BOTTOM: number
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    intersect(arg0: Rectangle2D, arg1: Rectangle2D, arg2: Rectangle2D): void
    setRect(arg0: number, arg1: number, arg2: number, arg3: number): void
    setRect(arg0: Rectangle2D): void
    createUnion(arg0: Rectangle2D): Rectangle2D
    getBounds2D(): Rectangle2D
    outcode(arg0: Point2D): number
    outcode(arg0: number, arg1: number): number
    createIntersection(arg0: Rectangle2D): Rectangle2D
    getPathIterator(arg0: AffineTransform): PathIterator
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator
    intersectsLine(arg0: Line2D): boolean
    intersectsLine(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    setFrame(arg0: number, arg1: number, arg2: number, arg3: number): void
    equals(arg0: Object): boolean
    hashCode(): number
    add(arg0: Rectangle2D): void
    add(arg0: Point2D): void
    add(arg0: number, arg1: number): void
    contains(arg0: number, arg1: number): boolean
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    union(arg0: Rectangle2D, arg1: Rectangle2D, arg2: Rectangle2D): void
}

interface Animals implements Breedable {
    isLoveMode(): boolean
    getLoveModeTicks(): number
    setLoveModeTicks(arg0: number): void
    isBreedItem(arg0: ItemStack): boolean
    isBreedItem(arg0: Material): boolean
    setBreedCause(arg0: UUID): void
    getBreedCause(): UUID
}

interface TemporalQuery {
    queryFrom(arg0: TemporalAccessor): R
}

interface UnaryOperator implements Function<T, T> {
    identity(): UnaryOperator<T>
}

declare class InetAddress implements Serializable {
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getHostAddress(): string
    getAddress(): byte[]
    getByName(arg0: string): InetAddress
    getHostName(): string
    isLinkLocalAddress(): boolean
    isMulticastAddress(): boolean
    isAnyLocalAddress(): boolean
    isLoopbackAddress(): boolean
    isSiteLocalAddress(): boolean
    isMCGlobal(): boolean
    isMCNodeLocal(): boolean
    isMCLinkLocal(): boolean
    isMCSiteLocal(): boolean
    isMCOrgLocal(): boolean
    isReachable(arg0: NetworkInterface, arg1: number, arg2: number): boolean
    isReachable(arg0: number): boolean
    getAllByName(arg0: string): InetAddress[]
    getByAddress(arg0: byte[]): InetAddress
    getByAddress(arg0: string, arg1: byte[]): InetAddress
    getCanonicalHostName(): string
    getLoopbackAddress(): InetAddress
    getLocalHost(): InetAddress
}

declare class PrepareInventoryResultEvent extends InventoryEvent {
    getHandlerList(): HandlerList
    getResult(): ItemStack
    setResult(arg0: ItemStack): void
    getHandlers(): HandlerList
}

declare class PlayerBedLeaveEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setSpawnLocation(arg0: boolean): void
    getBed(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
    shouldSetSpawnLocation(): boolean
}

interface World implements RegionAccessor, WorldInfo, PluginMessageRecipient, Metadatable, PersistentDataHolder, Keyed {
    getEntities(): List<Entity>
    strikeLightning(arg0: Location): LightningStrike
    isChunkLoaded(arg0: number, arg1: number): boolean
    isChunkLoaded(arg0: Chunk): boolean
    getNearbyEntities(arg0: BoundingBox, arg1: Predicate<Entity>): Collection<Entity>
    getNearbyEntities(arg0: BoundingBox): Collection<Entity>
    getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number): Collection<Entity>
    getNearbyEntities(arg0: Location, arg1: number, arg2: number, arg3: number, arg4: Predicate<Entity>): Collection<Entity>
    playEffect(arg0: Location, arg1: Effect, arg2: T): void
    playEffect(arg0: Location, arg1: Effect, arg2: T, arg3: number): void
    playEffect(arg0: Location, arg1: Effect, arg2: number, arg3: number): void
    playEffect(arg0: Location, arg1: Effect, arg2: number): void
    rayTrace(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean, arg5: number, arg6: Predicate<Entity>): RayTraceResult
    getBiome(arg0: number, arg1: number): Biome
    setBiome(arg0: number, arg1: number, arg2: Biome): void
    getHumidity(arg0: number, arg1: number, arg2: number): number
    getHumidity(arg0: number, arg1: number): number
    getTemperature(arg0: number, arg1: number): number
    getTemperature(arg0: number, arg1: number, arg2: number): number
    setWaterUndergroundCreatureSpawnLimit(arg0: number): void
    setTicksPerWaterUndergroundCreatureSpawns(arg0: number): void
    getBlockAt(arg0: number, arg1: number, arg2: number): Block
    getBlockAt(arg0: Location): Block
    getTicksPerWaterUndergroundCreatureSpawns(): number
    getWaterUndergroundCreatureSpawnLimit(): number
    getTicksPerWaterAmbientSpawns(): number
    isHardcore(): boolean
    spigot(): WorldSpigot
    getTicksPerSpawns(arg0: SpawnCategory): number
    getWorldType(): WorldType
    getViewDistance(): number
    getSpawnLimit(arg0: SpawnCategory): number
    setTicksPerWaterAmbientSpawns(arg0: number): void
    getKeepSpawnInMemory(): boolean
    removePluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean
    setTicksPerAnimalSpawns(arg0: number): void
    setTicksPerWaterSpawns(arg0: number): void
    locateNearestStructure(arg0: Location, arg1: Structure, arg2: number, arg3: boolean): StructureSearchResult
    locateNearestStructure(arg0: Location, arg1: StructureType, arg2: number, arg3: boolean): StructureSearchResult
    locateNearestStructure(arg0: Location, arg1: StructureType, arg2: number, arg3: boolean): Location
    setAnimalSpawnLimit(arg0: number): void
    setAmbientSpawnLimit(arg0: number): void
    setWaterAnimalSpawnLimit(arg0: number): void
    strikeLightningEffect(arg0: Location): LightningStrike
    setMonsterSpawnLimit(arg0: number): void
    setTicksPerMonsterSpawns(arg0: number): void
    addPluginChunkTicket(arg0: number, arg1: number, arg2: Plugin): boolean
    getEntitiesByClasses(arg0: Class[]): Collection<Entity>
    getClearWeatherDuration(): number
    setChunkForceLoaded(arg0: number, arg1: number, arg2: boolean): void
    getForceLoadedChunks(): Collection<Chunk>
    setTicksPerAmbientSpawns(arg0: number): void
    getEmptyChunkSnapshot(arg0: number, arg1: number, arg2: boolean, arg3: boolean): ChunkSnapshot
    canGenerateStructures(): boolean
    setWaterAmbientSpawnLimit(arg0: number): void
    getEnderDragonBattle(): DragonBattle
    isRespawnAnchorWorks(): boolean
    setClearWeatherDuration(arg0: number): void
    setKeepSpawnInMemory(arg0: boolean): void
    removePluginChunkTickets(arg0: Plugin): void
    dropItem(arg0: Location, arg1: ItemStack): Item
    dropItem(arg0: Location, arg1: ItemStack, arg2: Consumer<Item>): Item
    loadChunk(arg0: number, arg1: number, arg2: boolean): boolean
    loadChunk(arg0: Chunk): void
    loadChunk(arg0: number, arg1: number): void
    getChunkAt(arg0: Block): Chunk
    getChunkAt(arg0: number, arg1: number): Chunk
    getChunkAt(arg0: number, arg1: number, arg2: boolean): Chunk
    getChunkAt(arg0: Location): Chunk
    getLivingEntities(): List<LivingEntity>
    getPopulators(): List<BlockPopulator>
    spawnFallingBlock(arg0: Location, arg1: MaterialData): FallingBlock
    spawnFallingBlock(arg0: Location, arg1: BlockData): FallingBlock
    spawnFallingBlock(arg0: Location, arg1: Material, arg2: byte): FallingBlock
    getAllowMonsters(): boolean
    isChunkGenerated(arg0: number, arg1: number): boolean
    dropItemNaturally(arg0: Location, arg1: ItemStack, arg2: Consumer<Item>): Item
    dropItemNaturally(arg0: Location, arg1: ItemStack): Item
    setThunderDuration(arg0: number): void
    getLogicalHeight(): number
    setThundering(arg0: boolean): void
    hasSkyLight(): boolean
    isPiglinSafe(): boolean
    isChunkInUse(arg0: number, arg1: number): boolean
    rayTraceEntities(arg0: Location, arg1: Vector, arg2: number): RayTraceResult
    rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: Predicate<Entity>): RayTraceResult
    rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: Predicate<Entity>): RayTraceResult
    rayTraceEntities(arg0: Location, arg1: Vector, arg2: number, arg3: number): RayTraceResult
    setFullTime(arg0: number): void
    unloadChunkRequest(arg0: number, arg1: number): boolean
    getWeatherDuration(): number
    getBiomeProvider(): BiomeProvider
    getAllowAnimals(): boolean
    isUltraWarm(): boolean
    setSpawnLocation(arg0: number, arg1: number, arg2: number): boolean
    setSpawnLocation(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    setSpawnLocation(arg0: Location): boolean
    setSpawnFlags(arg0: boolean, arg1: boolean): void
    getSeaLevel(): number
    getHighestBlockAt(arg0: number, arg1: number): Block
    getHighestBlockAt(arg0: number, arg1: number, arg2: HeightMap): Block
    getHighestBlockAt(arg0: Location, arg1: HeightMap): Block
    getHighestBlockAt(arg0: Location): Block
    getGameTime(): number
    getLoadedChunks(): Chunk[]
    regenerateChunk(arg0: number, arg1: number): boolean
    unloadChunk(arg0: number, arg1: number, arg2: boolean): boolean
    unloadChunk(arg0: Chunk): boolean
    unloadChunk(arg0: number, arg1: number): boolean
    refreshChunk(arg0: number, arg1: number): boolean
    generateTree(arg0: Location, arg1: TreeType): boolean
    generateTree(arg0: Location, arg1: TreeType, arg2: BlockChangeDelegate): boolean
    getEntitiesByClass(arg0: Class<T>): Collection<T>
    getEntitiesByClass(arg0: Class[]): Collection<T>
    rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number): RayTraceResult
    rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode): RayTraceResult
    rayTraceBlocks(arg0: Location, arg1: Vector, arg2: number, arg3: FluidCollisionMode, arg4: boolean): RayTraceResult
    getSpawnLocation(): Location
    getFullTime(): number
    getThunderDuration(): number
    isClearWeather(): boolean
    isChunkForceLoaded(arg0: number, arg1: number): boolean
    setWeatherDuration(arg0: number): void
    isThundering(): boolean
    createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean, arg4: Entity): boolean
    createExplosion(arg0: Location, arg1: number, arg2: boolean, arg3: boolean): boolean
    createExplosion(arg0: Location, arg1: number, arg2: boolean): boolean
    createExplosion(arg0: Location, arg1: number): boolean
    createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: Entity): boolean
    createExplosion(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean
    createExplosion(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): boolean
    getGenerator(): ChunkGenerator
    getGameRuleDefault(arg0: GameRule<T>): T
    setTicksPerSpawns(arg0: SpawnCategory, arg1: number): void
    getDifficulty(): Difficulty
    getGameRuleValue(arg0: string): string
    getGameRuleValue(arg0: GameRule<T>): T
    setDifficulty(arg0: Difficulty): void
    setAutoSave(arg0: boolean): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T, arg8: boolean): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: T): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: T): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: T): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: T, arg10: boolean): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number): void
    spawnParticle(arg0: Particle, arg1: number, arg2: number, arg3: number, arg4: number): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: T): void
    spawnParticle(arg0: Particle, arg1: Location, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: T): void
    locateNearestRaid(arg0: Location, arg1: number): Raid
    getFeatureFlags(): Set<FeatureFlag>
    getGameRules(): string[]
    getWorldFolder(): File
    setHardcore(arg0: boolean): void
    setGameRuleValue(arg0: string, arg1: string): boolean
    getWorldBorder(): WorldBorder
    setGameRule(arg0: GameRule<T>, arg1: T): boolean
    setSpawnLimit(arg0: SpawnCategory, arg1: number): void
    isBedWorks(): boolean
    getPVP(): boolean
    getRaids(): List<Raid>
    isAutoSave(): boolean
    hasRaids(): boolean
    isNatural(): boolean
    getPlayers(): List<Player>
    hasCeiling(): boolean
    playSound(arg0: Location, arg1: Sound, arg2: number, arg3: number): void
    playSound(arg0: Entity, arg1: string, arg2: number, arg3: number): void
    playSound(arg0: Location, arg1: string, arg2: number, arg3: number): void
    playSound(arg0: Location, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Entity, arg1: Sound, arg2: number, arg3: number): void
    playSound(arg0: Location, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Entity, arg1: string, arg2: SoundCategory, arg3: number, arg4: number): void
    playSound(arg0: Entity, arg1: Sound, arg2: SoundCategory, arg3: number, arg4: number): void
    isGameRule(arg0: string): boolean
    setStorm(arg0: boolean): void
    hasStorm(): boolean
    setPVP(arg0: boolean): void
    spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number): Arrow
    spawnArrow(arg0: Location, arg1: Vector, arg2: number, arg3: number, arg4: Class<T>): T
    save(): void
    getTime(): number
    setTime(arg0: number): void
    getPluginChunkTickets(): Map<Plugin, Collection<Chunk>>
    getPluginChunkTickets(arg0: number, arg1: number): Collection<Plugin>
    getSimulationDistance(): number
    getTicksPerWaterSpawns(): number
    getAmbientSpawnLimit(): number
    getMonsterSpawnLimit(): number
    getWaterAnimalSpawnLimit(): number
    getTicksPerAmbientSpawns(): number
    getTicksPerMonsterSpawns(): number
    getTicksPerAnimalSpawns(): number
    getAnimalSpawnLimit(): number
    getWaterAmbientSpawnLimit(): number
}

declare class LootGenerateEvent extends WorldEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLootTable(): LootTable
    getLoot(): List<ItemStack>
    getInventoryHolder(): InventoryHolder
    getLootContext(): LootContext
    isPlugin(): boolean
    setLoot(arg0: Collection<ItemStack>): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
}

declare class BlockPlaceEvent extends BlockEvent implements Cancellable {
    getItemInHand(): ItemStack
    setCancelled(arg0: boolean): void
    getHand(): EquipmentSlot
    getHandlerList(): HandlerList
    canBuild(): boolean
    getPlayer(): Player
    getBlockAgainst(): Block
    getBlockPlaced(): Block
    getBlockReplacedState(): BlockState
    setBuild(arg0: boolean): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class Material extends Enum<Material> implements Keyed, Translatable {
    readonly AIR: Material
    readonly STONE: Material
    readonly GRANITE: Material
    readonly POLISHED_GRANITE: Material
    readonly DIORITE: Material
    readonly POLISHED_DIORITE: Material
    readonly ANDESITE: Material
    readonly POLISHED_ANDESITE: Material
    readonly DEEPSLATE: Material
    readonly COBBLED_DEEPSLATE: Material
    readonly POLISHED_DEEPSLATE: Material
    readonly CALCITE: Material
    readonly TUFF: Material
    readonly DRIPSTONE_BLOCK: Material
    readonly GRASS_BLOCK: Material
    readonly DIRT: Material
    readonly COARSE_DIRT: Material
    readonly PODZOL: Material
    readonly ROOTED_DIRT: Material
    readonly MUD: Material
    readonly CRIMSON_NYLIUM: Material
    readonly WARPED_NYLIUM: Material
    readonly COBBLESTONE: Material
    readonly OAK_PLANKS: Material
    readonly SPRUCE_PLANKS: Material
    readonly BIRCH_PLANKS: Material
    readonly JUNGLE_PLANKS: Material
    readonly ACACIA_PLANKS: Material
    readonly CHERRY_PLANKS: Material
    readonly DARK_OAK_PLANKS: Material
    readonly MANGROVE_PLANKS: Material
    readonly BAMBOO_PLANKS: Material
    readonly CRIMSON_PLANKS: Material
    readonly WARPED_PLANKS: Material
    readonly BAMBOO_MOSAIC: Material
    readonly OAK_SAPLING: Material
    readonly SPRUCE_SAPLING: Material
    readonly BIRCH_SAPLING: Material
    readonly JUNGLE_SAPLING: Material
    readonly ACACIA_SAPLING: Material
    readonly CHERRY_SAPLING: Material
    readonly DARK_OAK_SAPLING: Material
    readonly MANGROVE_PROPAGULE: Material
    readonly BEDROCK: Material
    readonly SAND: Material
    readonly SUSPICIOUS_SAND: Material
    readonly SUSPICIOUS_GRAVEL: Material
    readonly RED_SAND: Material
    readonly GRAVEL: Material
    readonly COAL_ORE: Material
    readonly DEEPSLATE_COAL_ORE: Material
    readonly IRON_ORE: Material
    readonly DEEPSLATE_IRON_ORE: Material
    readonly COPPER_ORE: Material
    readonly DEEPSLATE_COPPER_ORE: Material
    readonly GOLD_ORE: Material
    readonly DEEPSLATE_GOLD_ORE: Material
    readonly REDSTONE_ORE: Material
    readonly DEEPSLATE_REDSTONE_ORE: Material
    readonly EMERALD_ORE: Material
    readonly DEEPSLATE_EMERALD_ORE: Material
    readonly LAPIS_ORE: Material
    readonly DEEPSLATE_LAPIS_ORE: Material
    readonly DIAMOND_ORE: Material
    readonly DEEPSLATE_DIAMOND_ORE: Material
    readonly NETHER_GOLD_ORE: Material
    readonly NETHER_QUARTZ_ORE: Material
    readonly ANCIENT_DEBRIS: Material
    readonly COAL_BLOCK: Material
    readonly RAW_IRON_BLOCK: Material
    readonly RAW_COPPER_BLOCK: Material
    readonly RAW_GOLD_BLOCK: Material
    readonly AMETHYST_BLOCK: Material
    readonly BUDDING_AMETHYST: Material
    readonly IRON_BLOCK: Material
    readonly COPPER_BLOCK: Material
    readonly GOLD_BLOCK: Material
    readonly DIAMOND_BLOCK: Material
    readonly NETHERITE_BLOCK: Material
    readonly EXPOSED_COPPER: Material
    readonly WEATHERED_COPPER: Material
    readonly OXIDIZED_COPPER: Material
    readonly CUT_COPPER: Material
    readonly EXPOSED_CUT_COPPER: Material
    readonly WEATHERED_CUT_COPPER: Material
    readonly OXIDIZED_CUT_COPPER: Material
    readonly CUT_COPPER_STAIRS: Material
    readonly EXPOSED_CUT_COPPER_STAIRS: Material
    readonly WEATHERED_CUT_COPPER_STAIRS: Material
    readonly OXIDIZED_CUT_COPPER_STAIRS: Material
    readonly CUT_COPPER_SLAB: Material
    readonly EXPOSED_CUT_COPPER_SLAB: Material
    readonly WEATHERED_CUT_COPPER_SLAB: Material
    readonly OXIDIZED_CUT_COPPER_SLAB: Material
    readonly WAXED_COPPER_BLOCK: Material
    readonly WAXED_EXPOSED_COPPER: Material
    readonly WAXED_WEATHERED_COPPER: Material
    readonly WAXED_OXIDIZED_COPPER: Material
    readonly WAXED_CUT_COPPER: Material
    readonly WAXED_EXPOSED_CUT_COPPER: Material
    readonly WAXED_WEATHERED_CUT_COPPER: Material
    readonly WAXED_OXIDIZED_CUT_COPPER: Material
    readonly WAXED_CUT_COPPER_STAIRS: Material
    readonly WAXED_EXPOSED_CUT_COPPER_STAIRS: Material
    readonly WAXED_WEATHERED_CUT_COPPER_STAIRS: Material
    readonly WAXED_OXIDIZED_CUT_COPPER_STAIRS: Material
    readonly WAXED_CUT_COPPER_SLAB: Material
    readonly WAXED_EXPOSED_CUT_COPPER_SLAB: Material
    readonly WAXED_WEATHERED_CUT_COPPER_SLAB: Material
    readonly WAXED_OXIDIZED_CUT_COPPER_SLAB: Material
    readonly OAK_LOG: Material
    readonly SPRUCE_LOG: Material
    readonly BIRCH_LOG: Material
    readonly JUNGLE_LOG: Material
    readonly ACACIA_LOG: Material
    readonly CHERRY_LOG: Material
    readonly DARK_OAK_LOG: Material
    readonly MANGROVE_LOG: Material
    readonly MANGROVE_ROOTS: Material
    readonly MUDDY_MANGROVE_ROOTS: Material
    readonly CRIMSON_STEM: Material
    readonly WARPED_STEM: Material
    readonly BAMBOO_BLOCK: Material
    readonly STRIPPED_OAK_LOG: Material
    readonly STRIPPED_SPRUCE_LOG: Material
    readonly STRIPPED_BIRCH_LOG: Material
    readonly STRIPPED_JUNGLE_LOG: Material
    readonly STRIPPED_ACACIA_LOG: Material
    readonly STRIPPED_CHERRY_LOG: Material
    readonly STRIPPED_DARK_OAK_LOG: Material
    readonly STRIPPED_MANGROVE_LOG: Material
    readonly STRIPPED_CRIMSON_STEM: Material
    readonly STRIPPED_WARPED_STEM: Material
    readonly STRIPPED_OAK_WOOD: Material
    readonly STRIPPED_SPRUCE_WOOD: Material
    readonly STRIPPED_BIRCH_WOOD: Material
    readonly STRIPPED_JUNGLE_WOOD: Material
    readonly STRIPPED_ACACIA_WOOD: Material
    readonly STRIPPED_CHERRY_WOOD: Material
    readonly STRIPPED_DARK_OAK_WOOD: Material
    readonly STRIPPED_MANGROVE_WOOD: Material
    readonly STRIPPED_CRIMSON_HYPHAE: Material
    readonly STRIPPED_WARPED_HYPHAE: Material
    readonly STRIPPED_BAMBOO_BLOCK: Material
    readonly OAK_WOOD: Material
    readonly SPRUCE_WOOD: Material
    readonly BIRCH_WOOD: Material
    readonly JUNGLE_WOOD: Material
    readonly ACACIA_WOOD: Material
    readonly CHERRY_WOOD: Material
    readonly DARK_OAK_WOOD: Material
    readonly MANGROVE_WOOD: Material
    readonly CRIMSON_HYPHAE: Material
    readonly WARPED_HYPHAE: Material
    readonly OAK_LEAVES: Material
    readonly SPRUCE_LEAVES: Material
    readonly BIRCH_LEAVES: Material
    readonly JUNGLE_LEAVES: Material
    readonly ACACIA_LEAVES: Material
    readonly CHERRY_LEAVES: Material
    readonly DARK_OAK_LEAVES: Material
    readonly MANGROVE_LEAVES: Material
    readonly AZALEA_LEAVES: Material
    readonly FLOWERING_AZALEA_LEAVES: Material
    readonly SPONGE: Material
    readonly WET_SPONGE: Material
    readonly GLASS: Material
    readonly TINTED_GLASS: Material
    readonly LAPIS_BLOCK: Material
    readonly SANDSTONE: Material
    readonly CHISELED_SANDSTONE: Material
    readonly CUT_SANDSTONE: Material
    readonly COBWEB: Material
    readonly GRASS: Material
    readonly FERN: Material
    readonly AZALEA: Material
    readonly FLOWERING_AZALEA: Material
    readonly DEAD_BUSH: Material
    readonly SEAGRASS: Material
    readonly SEA_PICKLE: Material
    readonly WHITE_WOOL: Material
    readonly ORANGE_WOOL: Material
    readonly MAGENTA_WOOL: Material
    readonly LIGHT_BLUE_WOOL: Material
    readonly YELLOW_WOOL: Material
    readonly LIME_WOOL: Material
    readonly PINK_WOOL: Material
    readonly GRAY_WOOL: Material
    readonly LIGHT_GRAY_WOOL: Material
    readonly CYAN_WOOL: Material
    readonly PURPLE_WOOL: Material
    readonly BLUE_WOOL: Material
    readonly BROWN_WOOL: Material
    readonly GREEN_WOOL: Material
    readonly RED_WOOL: Material
    readonly BLACK_WOOL: Material
    readonly DANDELION: Material
    readonly POPPY: Material
    readonly BLUE_ORCHID: Material
    readonly ALLIUM: Material
    readonly AZURE_BLUET: Material
    readonly RED_TULIP: Material
    readonly ORANGE_TULIP: Material
    readonly WHITE_TULIP: Material
    readonly PINK_TULIP: Material
    readonly OXEYE_DAISY: Material
    readonly CORNFLOWER: Material
    readonly LILY_OF_THE_VALLEY: Material
    readonly WITHER_ROSE: Material
    readonly TORCHFLOWER: Material
    readonly PITCHER_PLANT: Material
    readonly SPORE_BLOSSOM: Material
    readonly BROWN_MUSHROOM: Material
    readonly RED_MUSHROOM: Material
    readonly CRIMSON_FUNGUS: Material
    readonly WARPED_FUNGUS: Material
    readonly CRIMSON_ROOTS: Material
    readonly WARPED_ROOTS: Material
    readonly NETHER_SPROUTS: Material
    readonly WEEPING_VINES: Material
    readonly TWISTING_VINES: Material
    readonly SUGAR_CANE: Material
    readonly KELP: Material
    readonly MOSS_CARPET: Material
    readonly PINK_PETALS: Material
    readonly MOSS_BLOCK: Material
    readonly HANGING_ROOTS: Material
    readonly BIG_DRIPLEAF: Material
    readonly SMALL_DRIPLEAF: Material
    readonly BAMBOO: Material
    readonly OAK_SLAB: Material
    readonly SPRUCE_SLAB: Material
    readonly BIRCH_SLAB: Material
    readonly JUNGLE_SLAB: Material
    readonly ACACIA_SLAB: Material
    readonly CHERRY_SLAB: Material
    readonly DARK_OAK_SLAB: Material
    readonly MANGROVE_SLAB: Material
    readonly BAMBOO_SLAB: Material
    readonly BAMBOO_MOSAIC_SLAB: Material
    readonly CRIMSON_SLAB: Material
    readonly WARPED_SLAB: Material
    readonly STONE_SLAB: Material
    readonly SMOOTH_STONE_SLAB: Material
    readonly SANDSTONE_SLAB: Material
    readonly CUT_SANDSTONE_SLAB: Material
    readonly PETRIFIED_OAK_SLAB: Material
    readonly COBBLESTONE_SLAB: Material
    readonly BRICK_SLAB: Material
    readonly STONE_BRICK_SLAB: Material
    readonly MUD_BRICK_SLAB: Material
    readonly NETHER_BRICK_SLAB: Material
    readonly QUARTZ_SLAB: Material
    readonly RED_SANDSTONE_SLAB: Material
    readonly CUT_RED_SANDSTONE_SLAB: Material
    readonly PURPUR_SLAB: Material
    readonly PRISMARINE_SLAB: Material
    readonly PRISMARINE_BRICK_SLAB: Material
    readonly DARK_PRISMARINE_SLAB: Material
    readonly SMOOTH_QUARTZ: Material
    readonly SMOOTH_RED_SANDSTONE: Material
    readonly SMOOTH_SANDSTONE: Material
    readonly SMOOTH_STONE: Material
    readonly BRICKS: Material
    readonly BOOKSHELF: Material
    readonly CHISELED_BOOKSHELF: Material
    readonly DECORATED_POT: Material
    readonly MOSSY_COBBLESTONE: Material
    readonly OBSIDIAN: Material
    readonly TORCH: Material
    readonly END_ROD: Material
    readonly CHORUS_PLANT: Material
    readonly CHORUS_FLOWER: Material
    readonly PURPUR_BLOCK: Material
    readonly PURPUR_PILLAR: Material
    readonly PURPUR_STAIRS: Material
    readonly SPAWNER: Material
    readonly CHEST: Material
    readonly CRAFTING_TABLE: Material
    readonly FARMLAND: Material
    readonly FURNACE: Material
    readonly LADDER: Material
    readonly COBBLESTONE_STAIRS: Material
    readonly SNOW: Material
    readonly ICE: Material
    readonly SNOW_BLOCK: Material
    readonly CACTUS: Material
    readonly CLAY: Material
    readonly JUKEBOX: Material
    readonly OAK_FENCE: Material
    readonly SPRUCE_FENCE: Material
    readonly BIRCH_FENCE: Material
    readonly JUNGLE_FENCE: Material
    readonly ACACIA_FENCE: Material
    readonly CHERRY_FENCE: Material
    readonly DARK_OAK_FENCE: Material
    readonly MANGROVE_FENCE: Material
    readonly BAMBOO_FENCE: Material
    readonly CRIMSON_FENCE: Material
    readonly WARPED_FENCE: Material
    readonly PUMPKIN: Material
    readonly CARVED_PUMPKIN: Material
    readonly JACK_O_LANTERN: Material
    readonly NETHERRACK: Material
    readonly SOUL_SAND: Material
    readonly SOUL_SOIL: Material
    readonly BASALT: Material
    readonly POLISHED_BASALT: Material
    readonly SMOOTH_BASALT: Material
    readonly SOUL_TORCH: Material
    readonly GLOWSTONE: Material
    readonly INFESTED_STONE: Material
    readonly INFESTED_COBBLESTONE: Material
    readonly INFESTED_STONE_BRICKS: Material
    readonly INFESTED_MOSSY_STONE_BRICKS: Material
    readonly INFESTED_CRACKED_STONE_BRICKS: Material
    readonly INFESTED_CHISELED_STONE_BRICKS: Material
    readonly INFESTED_DEEPSLATE: Material
    readonly STONE_BRICKS: Material
    readonly MOSSY_STONE_BRICKS: Material
    readonly CRACKED_STONE_BRICKS: Material
    readonly CHISELED_STONE_BRICKS: Material
    readonly PACKED_MUD: Material
    readonly MUD_BRICKS: Material
    readonly DEEPSLATE_BRICKS: Material
    readonly CRACKED_DEEPSLATE_BRICKS: Material
    readonly DEEPSLATE_TILES: Material
    readonly CRACKED_DEEPSLATE_TILES: Material
    readonly CHISELED_DEEPSLATE: Material
    readonly REINFORCED_DEEPSLATE: Material
    readonly BROWN_MUSHROOM_BLOCK: Material
    readonly RED_MUSHROOM_BLOCK: Material
    readonly MUSHROOM_STEM: Material
    readonly IRON_BARS: Material
    readonly CHAIN: Material
    readonly GLASS_PANE: Material
    readonly MELON: Material
    readonly VINE: Material
    readonly GLOW_LICHEN: Material
    readonly BRICK_STAIRS: Material
    readonly STONE_BRICK_STAIRS: Material
    readonly MUD_BRICK_STAIRS: Material
    readonly MYCELIUM: Material
    readonly LILY_PAD: Material
    readonly NETHER_BRICKS: Material
    readonly CRACKED_NETHER_BRICKS: Material
    readonly CHISELED_NETHER_BRICKS: Material
    readonly NETHER_BRICK_FENCE: Material
    readonly NETHER_BRICK_STAIRS: Material
    readonly SCULK: Material
    readonly SCULK_VEIN: Material
    readonly SCULK_CATALYST: Material
    readonly SCULK_SHRIEKER: Material
    readonly ENCHANTING_TABLE: Material
    readonly END_PORTAL_FRAME: Material
    readonly END_STONE: Material
    readonly END_STONE_BRICKS: Material
    readonly DRAGON_EGG: Material
    readonly SANDSTONE_STAIRS: Material
    readonly ENDER_CHEST: Material
    readonly EMERALD_BLOCK: Material
    readonly OAK_STAIRS: Material
    readonly SPRUCE_STAIRS: Material
    readonly BIRCH_STAIRS: Material
    readonly JUNGLE_STAIRS: Material
    readonly ACACIA_STAIRS: Material
    readonly CHERRY_STAIRS: Material
    readonly DARK_OAK_STAIRS: Material
    readonly MANGROVE_STAIRS: Material
    readonly BAMBOO_STAIRS: Material
    readonly BAMBOO_MOSAIC_STAIRS: Material
    readonly CRIMSON_STAIRS: Material
    readonly WARPED_STAIRS: Material
    readonly COMMAND_BLOCK: Material
    readonly BEACON: Material
    readonly COBBLESTONE_WALL: Material
    readonly MOSSY_COBBLESTONE_WALL: Material
    readonly BRICK_WALL: Material
    readonly PRISMARINE_WALL: Material
    readonly RED_SANDSTONE_WALL: Material
    readonly MOSSY_STONE_BRICK_WALL: Material
    readonly GRANITE_WALL: Material
    readonly STONE_BRICK_WALL: Material
    readonly MUD_BRICK_WALL: Material
    readonly NETHER_BRICK_WALL: Material
    readonly ANDESITE_WALL: Material
    readonly RED_NETHER_BRICK_WALL: Material
    readonly SANDSTONE_WALL: Material
    readonly END_STONE_BRICK_WALL: Material
    readonly DIORITE_WALL: Material
    readonly BLACKSTONE_WALL: Material
    readonly POLISHED_BLACKSTONE_WALL: Material
    readonly POLISHED_BLACKSTONE_BRICK_WALL: Material
    readonly COBBLED_DEEPSLATE_WALL: Material
    readonly POLISHED_DEEPSLATE_WALL: Material
    readonly DEEPSLATE_BRICK_WALL: Material
    readonly DEEPSLATE_TILE_WALL: Material
    readonly ANVIL: Material
    readonly CHIPPED_ANVIL: Material
    readonly DAMAGED_ANVIL: Material
    readonly CHISELED_QUARTZ_BLOCK: Material
    readonly QUARTZ_BLOCK: Material
    readonly QUARTZ_BRICKS: Material
    readonly QUARTZ_PILLAR: Material
    readonly QUARTZ_STAIRS: Material
    readonly WHITE_TERRACOTTA: Material
    readonly ORANGE_TERRACOTTA: Material
    readonly MAGENTA_TERRACOTTA: Material
    readonly LIGHT_BLUE_TERRACOTTA: Material
    readonly YELLOW_TERRACOTTA: Material
    readonly LIME_TERRACOTTA: Material
    readonly PINK_TERRACOTTA: Material
    readonly GRAY_TERRACOTTA: Material
    readonly LIGHT_GRAY_TERRACOTTA: Material
    readonly CYAN_TERRACOTTA: Material
    readonly PURPLE_TERRACOTTA: Material
    readonly BLUE_TERRACOTTA: Material
    readonly BROWN_TERRACOTTA: Material
    readonly GREEN_TERRACOTTA: Material
    readonly RED_TERRACOTTA: Material
    readonly BLACK_TERRACOTTA: Material
    readonly BARRIER: Material
    readonly LIGHT: Material
    readonly HAY_BLOCK: Material
    readonly WHITE_CARPET: Material
    readonly ORANGE_CARPET: Material
    readonly MAGENTA_CARPET: Material
    readonly LIGHT_BLUE_CARPET: Material
    readonly YELLOW_CARPET: Material
    readonly LIME_CARPET: Material
    readonly PINK_CARPET: Material
    readonly GRAY_CARPET: Material
    readonly LIGHT_GRAY_CARPET: Material
    readonly CYAN_CARPET: Material
    readonly PURPLE_CARPET: Material
    readonly BLUE_CARPET: Material
    readonly BROWN_CARPET: Material
    readonly GREEN_CARPET: Material
    readonly RED_CARPET: Material
    readonly BLACK_CARPET: Material
    readonly TERRACOTTA: Material
    readonly PACKED_ICE: Material
    readonly DIRT_PATH: Material
    readonly SUNFLOWER: Material
    readonly LILAC: Material
    readonly ROSE_BUSH: Material
    readonly PEONY: Material
    readonly TALL_GRASS: Material
    readonly LARGE_FERN: Material
    readonly WHITE_STAINED_GLASS: Material
    readonly ORANGE_STAINED_GLASS: Material
    readonly MAGENTA_STAINED_GLASS: Material
    readonly LIGHT_BLUE_STAINED_GLASS: Material
    readonly YELLOW_STAINED_GLASS: Material
    readonly LIME_STAINED_GLASS: Material
    readonly PINK_STAINED_GLASS: Material
    readonly GRAY_STAINED_GLASS: Material
    readonly LIGHT_GRAY_STAINED_GLASS: Material
    readonly CYAN_STAINED_GLASS: Material
    readonly PURPLE_STAINED_GLASS: Material
    readonly BLUE_STAINED_GLASS: Material
    readonly BROWN_STAINED_GLASS: Material
    readonly GREEN_STAINED_GLASS: Material
    readonly RED_STAINED_GLASS: Material
    readonly BLACK_STAINED_GLASS: Material
    readonly WHITE_STAINED_GLASS_PANE: Material
    readonly ORANGE_STAINED_GLASS_PANE: Material
    readonly MAGENTA_STAINED_GLASS_PANE: Material
    readonly LIGHT_BLUE_STAINED_GLASS_PANE: Material
    readonly YELLOW_STAINED_GLASS_PANE: Material
    readonly LIME_STAINED_GLASS_PANE: Material
    readonly PINK_STAINED_GLASS_PANE: Material
    readonly GRAY_STAINED_GLASS_PANE: Material
    readonly LIGHT_GRAY_STAINED_GLASS_PANE: Material
    readonly CYAN_STAINED_GLASS_PANE: Material
    readonly PURPLE_STAINED_GLASS_PANE: Material
    readonly BLUE_STAINED_GLASS_PANE: Material
    readonly BROWN_STAINED_GLASS_PANE: Material
    readonly GREEN_STAINED_GLASS_PANE: Material
    readonly RED_STAINED_GLASS_PANE: Material
    readonly BLACK_STAINED_GLASS_PANE: Material
    readonly PRISMARINE: Material
    readonly PRISMARINE_BRICKS: Material
    readonly DARK_PRISMARINE: Material
    readonly PRISMARINE_STAIRS: Material
    readonly PRISMARINE_BRICK_STAIRS: Material
    readonly DARK_PRISMARINE_STAIRS: Material
    readonly SEA_LANTERN: Material
    readonly RED_SANDSTONE: Material
    readonly CHISELED_RED_SANDSTONE: Material
    readonly CUT_RED_SANDSTONE: Material
    readonly RED_SANDSTONE_STAIRS: Material
    readonly REPEATING_COMMAND_BLOCK: Material
    readonly CHAIN_COMMAND_BLOCK: Material
    readonly MAGMA_BLOCK: Material
    readonly NETHER_WART_BLOCK: Material
    readonly WARPED_WART_BLOCK: Material
    readonly RED_NETHER_BRICKS: Material
    readonly BONE_BLOCK: Material
    readonly STRUCTURE_VOID: Material
    readonly SHULKER_BOX: Material
    readonly WHITE_SHULKER_BOX: Material
    readonly ORANGE_SHULKER_BOX: Material
    readonly MAGENTA_SHULKER_BOX: Material
    readonly LIGHT_BLUE_SHULKER_BOX: Material
    readonly YELLOW_SHULKER_BOX: Material
    readonly LIME_SHULKER_BOX: Material
    readonly PINK_SHULKER_BOX: Material
    readonly GRAY_SHULKER_BOX: Material
    readonly LIGHT_GRAY_SHULKER_BOX: Material
    readonly CYAN_SHULKER_BOX: Material
    readonly PURPLE_SHULKER_BOX: Material
    readonly BLUE_SHULKER_BOX: Material
    readonly BROWN_SHULKER_BOX: Material
    readonly GREEN_SHULKER_BOX: Material
    readonly RED_SHULKER_BOX: Material
    readonly BLACK_SHULKER_BOX: Material
    readonly WHITE_GLAZED_TERRACOTTA: Material
    readonly ORANGE_GLAZED_TERRACOTTA: Material
    readonly MAGENTA_GLAZED_TERRACOTTA: Material
    readonly LIGHT_BLUE_GLAZED_TERRACOTTA: Material
    readonly YELLOW_GLAZED_TERRACOTTA: Material
    readonly LIME_GLAZED_TERRACOTTA: Material
    readonly PINK_GLAZED_TERRACOTTA: Material
    readonly GRAY_GLAZED_TERRACOTTA: Material
    readonly LIGHT_GRAY_GLAZED_TERRACOTTA: Material
    readonly CYAN_GLAZED_TERRACOTTA: Material
    readonly PURPLE_GLAZED_TERRACOTTA: Material
    readonly BLUE_GLAZED_TERRACOTTA: Material
    readonly BROWN_GLAZED_TERRACOTTA: Material
    readonly GREEN_GLAZED_TERRACOTTA: Material
    readonly RED_GLAZED_TERRACOTTA: Material
    readonly BLACK_GLAZED_TERRACOTTA: Material
    readonly WHITE_CONCRETE: Material
    readonly ORANGE_CONCRETE: Material
    readonly MAGENTA_CONCRETE: Material
    readonly LIGHT_BLUE_CONCRETE: Material
    readonly YELLOW_CONCRETE: Material
    readonly LIME_CONCRETE: Material
    readonly PINK_CONCRETE: Material
    readonly GRAY_CONCRETE: Material
    readonly LIGHT_GRAY_CONCRETE: Material
    readonly CYAN_CONCRETE: Material
    readonly PURPLE_CONCRETE: Material
    readonly BLUE_CONCRETE: Material
    readonly BROWN_CONCRETE: Material
    readonly GREEN_CONCRETE: Material
    readonly RED_CONCRETE: Material
    readonly BLACK_CONCRETE: Material
    readonly WHITE_CONCRETE_POWDER: Material
    readonly ORANGE_CONCRETE_POWDER: Material
    readonly MAGENTA_CONCRETE_POWDER: Material
    readonly LIGHT_BLUE_CONCRETE_POWDER: Material
    readonly YELLOW_CONCRETE_POWDER: Material
    readonly LIME_CONCRETE_POWDER: Material
    readonly PINK_CONCRETE_POWDER: Material
    readonly GRAY_CONCRETE_POWDER: Material
    readonly LIGHT_GRAY_CONCRETE_POWDER: Material
    readonly CYAN_CONCRETE_POWDER: Material
    readonly PURPLE_CONCRETE_POWDER: Material
    readonly BLUE_CONCRETE_POWDER: Material
    readonly BROWN_CONCRETE_POWDER: Material
    readonly GREEN_CONCRETE_POWDER: Material
    readonly RED_CONCRETE_POWDER: Material
    readonly BLACK_CONCRETE_POWDER: Material
    readonly TURTLE_EGG: Material
    readonly SNIFFER_EGG: Material
    readonly DEAD_TUBE_CORAL_BLOCK: Material
    readonly DEAD_BRAIN_CORAL_BLOCK: Material
    readonly DEAD_BUBBLE_CORAL_BLOCK: Material
    readonly DEAD_FIRE_CORAL_BLOCK: Material
    readonly DEAD_HORN_CORAL_BLOCK: Material
    readonly TUBE_CORAL_BLOCK: Material
    readonly BRAIN_CORAL_BLOCK: Material
    readonly BUBBLE_CORAL_BLOCK: Material
    readonly FIRE_CORAL_BLOCK: Material
    readonly HORN_CORAL_BLOCK: Material
    readonly TUBE_CORAL: Material
    readonly BRAIN_CORAL: Material
    readonly BUBBLE_CORAL: Material
    readonly FIRE_CORAL: Material
    readonly HORN_CORAL: Material
    readonly DEAD_BRAIN_CORAL: Material
    readonly DEAD_BUBBLE_CORAL: Material
    readonly DEAD_FIRE_CORAL: Material
    readonly DEAD_HORN_CORAL: Material
    readonly DEAD_TUBE_CORAL: Material
    readonly TUBE_CORAL_FAN: Material
    readonly BRAIN_CORAL_FAN: Material
    readonly BUBBLE_CORAL_FAN: Material
    readonly FIRE_CORAL_FAN: Material
    readonly HORN_CORAL_FAN: Material
    readonly DEAD_TUBE_CORAL_FAN: Material
    readonly DEAD_BRAIN_CORAL_FAN: Material
    readonly DEAD_BUBBLE_CORAL_FAN: Material
    readonly DEAD_FIRE_CORAL_FAN: Material
    readonly DEAD_HORN_CORAL_FAN: Material
    readonly BLUE_ICE: Material
    readonly CONDUIT: Material
    readonly POLISHED_GRANITE_STAIRS: Material
    readonly SMOOTH_RED_SANDSTONE_STAIRS: Material
    readonly MOSSY_STONE_BRICK_STAIRS: Material
    readonly POLISHED_DIORITE_STAIRS: Material
    readonly MOSSY_COBBLESTONE_STAIRS: Material
    readonly END_STONE_BRICK_STAIRS: Material
    readonly STONE_STAIRS: Material
    readonly SMOOTH_SANDSTONE_STAIRS: Material
    readonly SMOOTH_QUARTZ_STAIRS: Material
    readonly GRANITE_STAIRS: Material
    readonly ANDESITE_STAIRS: Material
    readonly RED_NETHER_BRICK_STAIRS: Material
    readonly POLISHED_ANDESITE_STAIRS: Material
    readonly DIORITE_STAIRS: Material
    readonly COBBLED_DEEPSLATE_STAIRS: Material
    readonly POLISHED_DEEPSLATE_STAIRS: Material
    readonly DEEPSLATE_BRICK_STAIRS: Material
    readonly DEEPSLATE_TILE_STAIRS: Material
    readonly POLISHED_GRANITE_SLAB: Material
    readonly SMOOTH_RED_SANDSTONE_SLAB: Material
    readonly MOSSY_STONE_BRICK_SLAB: Material
    readonly POLISHED_DIORITE_SLAB: Material
    readonly MOSSY_COBBLESTONE_SLAB: Material
    readonly END_STONE_BRICK_SLAB: Material
    readonly SMOOTH_SANDSTONE_SLAB: Material
    readonly SMOOTH_QUARTZ_SLAB: Material
    readonly GRANITE_SLAB: Material
    readonly ANDESITE_SLAB: Material
    readonly RED_NETHER_BRICK_SLAB: Material
    readonly POLISHED_ANDESITE_SLAB: Material
    readonly DIORITE_SLAB: Material
    readonly COBBLED_DEEPSLATE_SLAB: Material
    readonly POLISHED_DEEPSLATE_SLAB: Material
    readonly DEEPSLATE_BRICK_SLAB: Material
    readonly DEEPSLATE_TILE_SLAB: Material
    readonly SCAFFOLDING: Material
    readonly REDSTONE: Material
    readonly REDSTONE_TORCH: Material
    readonly REDSTONE_BLOCK: Material
    readonly REPEATER: Material
    readonly COMPARATOR: Material
    readonly PISTON: Material
    readonly STICKY_PISTON: Material
    readonly SLIME_BLOCK: Material
    readonly HONEY_BLOCK: Material
    readonly OBSERVER: Material
    readonly HOPPER: Material
    readonly DISPENSER: Material
    readonly DROPPER: Material
    readonly LECTERN: Material
    readonly TARGET: Material
    readonly LEVER: Material
    readonly LIGHTNING_ROD: Material
    readonly DAYLIGHT_DETECTOR: Material
    readonly SCULK_SENSOR: Material
    readonly CALIBRATED_SCULK_SENSOR: Material
    readonly TRIPWIRE_HOOK: Material
    readonly TRAPPED_CHEST: Material
    readonly TNT: Material
    readonly REDSTONE_LAMP: Material
    readonly NOTE_BLOCK: Material
    readonly STONE_BUTTON: Material
    readonly POLISHED_BLACKSTONE_BUTTON: Material
    readonly OAK_BUTTON: Material
    readonly SPRUCE_BUTTON: Material
    readonly BIRCH_BUTTON: Material
    readonly JUNGLE_BUTTON: Material
    readonly ACACIA_BUTTON: Material
    readonly CHERRY_BUTTON: Material
    readonly DARK_OAK_BUTTON: Material
    readonly MANGROVE_BUTTON: Material
    readonly BAMBOO_BUTTON: Material
    readonly CRIMSON_BUTTON: Material
    readonly WARPED_BUTTON: Material
    readonly STONE_PRESSURE_PLATE: Material
    readonly POLISHED_BLACKSTONE_PRESSURE_PLATE: Material
    readonly LIGHT_WEIGHTED_PRESSURE_PLATE: Material
    readonly HEAVY_WEIGHTED_PRESSURE_PLATE: Material
    readonly OAK_PRESSURE_PLATE: Material
    readonly SPRUCE_PRESSURE_PLATE: Material
    readonly BIRCH_PRESSURE_PLATE: Material
    readonly JUNGLE_PRESSURE_PLATE: Material
    readonly ACACIA_PRESSURE_PLATE: Material
    readonly CHERRY_PRESSURE_PLATE: Material
    readonly DARK_OAK_PRESSURE_PLATE: Material
    readonly MANGROVE_PRESSURE_PLATE: Material
    readonly BAMBOO_PRESSURE_PLATE: Material
    readonly CRIMSON_PRESSURE_PLATE: Material
    readonly WARPED_PRESSURE_PLATE: Material
    readonly IRON_DOOR: Material
    readonly OAK_DOOR: Material
    readonly SPRUCE_DOOR: Material
    readonly BIRCH_DOOR: Material
    readonly JUNGLE_DOOR: Material
    readonly ACACIA_DOOR: Material
    readonly CHERRY_DOOR: Material
    readonly DARK_OAK_DOOR: Material
    readonly MANGROVE_DOOR: Material
    readonly BAMBOO_DOOR: Material
    readonly CRIMSON_DOOR: Material
    readonly WARPED_DOOR: Material
    readonly IRON_TRAPDOOR: Material
    readonly OAK_TRAPDOOR: Material
    readonly SPRUCE_TRAPDOOR: Material
    readonly BIRCH_TRAPDOOR: Material
    readonly JUNGLE_TRAPDOOR: Material
    readonly ACACIA_TRAPDOOR: Material
    readonly CHERRY_TRAPDOOR: Material
    readonly DARK_OAK_TRAPDOOR: Material
    readonly MANGROVE_TRAPDOOR: Material
    readonly BAMBOO_TRAPDOOR: Material
    readonly CRIMSON_TRAPDOOR: Material
    readonly WARPED_TRAPDOOR: Material
    readonly OAK_FENCE_GATE: Material
    readonly SPRUCE_FENCE_GATE: Material
    readonly BIRCH_FENCE_GATE: Material
    readonly JUNGLE_FENCE_GATE: Material
    readonly ACACIA_FENCE_GATE: Material
    readonly CHERRY_FENCE_GATE: Material
    readonly DARK_OAK_FENCE_GATE: Material
    readonly MANGROVE_FENCE_GATE: Material
    readonly BAMBOO_FENCE_GATE: Material
    readonly CRIMSON_FENCE_GATE: Material
    readonly WARPED_FENCE_GATE: Material
    readonly POWERED_RAIL: Material
    readonly DETECTOR_RAIL: Material
    readonly RAIL: Material
    readonly ACTIVATOR_RAIL: Material
    readonly SADDLE: Material
    readonly MINECART: Material
    readonly CHEST_MINECART: Material
    readonly FURNACE_MINECART: Material
    readonly TNT_MINECART: Material
    readonly HOPPER_MINECART: Material
    readonly CARROT_ON_A_STICK: Material
    readonly WARPED_FUNGUS_ON_A_STICK: Material
    readonly ELYTRA: Material
    readonly OAK_BOAT: Material
    readonly OAK_CHEST_BOAT: Material
    readonly SPRUCE_BOAT: Material
    readonly SPRUCE_CHEST_BOAT: Material
    readonly BIRCH_BOAT: Material
    readonly BIRCH_CHEST_BOAT: Material
    readonly JUNGLE_BOAT: Material
    readonly JUNGLE_CHEST_BOAT: Material
    readonly ACACIA_BOAT: Material
    readonly ACACIA_CHEST_BOAT: Material
    readonly CHERRY_BOAT: Material
    readonly CHERRY_CHEST_BOAT: Material
    readonly DARK_OAK_BOAT: Material
    readonly DARK_OAK_CHEST_BOAT: Material
    readonly MANGROVE_BOAT: Material
    readonly MANGROVE_CHEST_BOAT: Material
    readonly BAMBOO_RAFT: Material
    readonly BAMBOO_CHEST_RAFT: Material
    readonly STRUCTURE_BLOCK: Material
    readonly JIGSAW: Material
    readonly TURTLE_HELMET: Material
    readonly SCUTE: Material
    readonly FLINT_AND_STEEL: Material
    readonly APPLE: Material
    readonly BOW: Material
    readonly ARROW: Material
    readonly COAL: Material
    readonly CHARCOAL: Material
    readonly DIAMOND: Material
    readonly EMERALD: Material
    readonly LAPIS_LAZULI: Material
    readonly QUARTZ: Material
    readonly AMETHYST_SHARD: Material
    readonly RAW_IRON: Material
    readonly IRON_INGOT: Material
    readonly RAW_COPPER: Material
    readonly COPPER_INGOT: Material
    readonly RAW_GOLD: Material
    readonly GOLD_INGOT: Material
    readonly NETHERITE_INGOT: Material
    readonly NETHERITE_SCRAP: Material
    readonly WOODEN_SWORD: Material
    readonly WOODEN_SHOVEL: Material
    readonly WOODEN_PICKAXE: Material
    readonly WOODEN_AXE: Material
    readonly WOODEN_HOE: Material
    readonly STONE_SWORD: Material
    readonly STONE_SHOVEL: Material
    readonly STONE_PICKAXE: Material
    readonly STONE_AXE: Material
    readonly STONE_HOE: Material
    readonly GOLDEN_SWORD: Material
    readonly GOLDEN_SHOVEL: Material
    readonly GOLDEN_PICKAXE: Material
    readonly GOLDEN_AXE: Material
    readonly GOLDEN_HOE: Material
    readonly IRON_SWORD: Material
    readonly IRON_SHOVEL: Material
    readonly IRON_PICKAXE: Material
    readonly IRON_AXE: Material
    readonly IRON_HOE: Material
    readonly DIAMOND_SWORD: Material
    readonly DIAMOND_SHOVEL: Material
    readonly DIAMOND_PICKAXE: Material
    readonly DIAMOND_AXE: Material
    readonly DIAMOND_HOE: Material
    readonly NETHERITE_SWORD: Material
    readonly NETHERITE_SHOVEL: Material
    readonly NETHERITE_PICKAXE: Material
    readonly NETHERITE_AXE: Material
    readonly NETHERITE_HOE: Material
    readonly STICK: Material
    readonly BOWL: Material
    readonly MUSHROOM_STEW: Material
    readonly STRING: Material
    readonly FEATHER: Material
    readonly GUNPOWDER: Material
    readonly WHEAT_SEEDS: Material
    readonly WHEAT: Material
    readonly BREAD: Material
    readonly LEATHER_HELMET: Material
    readonly LEATHER_CHESTPLATE: Material
    readonly LEATHER_LEGGINGS: Material
    readonly LEATHER_BOOTS: Material
    readonly CHAINMAIL_HELMET: Material
    readonly CHAINMAIL_CHESTPLATE: Material
    readonly CHAINMAIL_LEGGINGS: Material
    readonly CHAINMAIL_BOOTS: Material
    readonly IRON_HELMET: Material
    readonly IRON_CHESTPLATE: Material
    readonly IRON_LEGGINGS: Material
    readonly IRON_BOOTS: Material
    readonly DIAMOND_HELMET: Material
    readonly DIAMOND_CHESTPLATE: Material
    readonly DIAMOND_LEGGINGS: Material
    readonly DIAMOND_BOOTS: Material
    readonly GOLDEN_HELMET: Material
    readonly GOLDEN_CHESTPLATE: Material
    readonly GOLDEN_LEGGINGS: Material
    readonly GOLDEN_BOOTS: Material
    readonly NETHERITE_HELMET: Material
    readonly NETHERITE_CHESTPLATE: Material
    readonly NETHERITE_LEGGINGS: Material
    readonly NETHERITE_BOOTS: Material
    readonly FLINT: Material
    readonly PORKCHOP: Material
    readonly COOKED_PORKCHOP: Material
    readonly PAINTING: Material
    readonly GOLDEN_APPLE: Material
    readonly ENCHANTED_GOLDEN_APPLE: Material
    readonly OAK_SIGN: Material
    readonly SPRUCE_SIGN: Material
    readonly BIRCH_SIGN: Material
    readonly JUNGLE_SIGN: Material
    readonly ACACIA_SIGN: Material
    readonly CHERRY_SIGN: Material
    readonly DARK_OAK_SIGN: Material
    readonly MANGROVE_SIGN: Material
    readonly BAMBOO_SIGN: Material
    readonly CRIMSON_SIGN: Material
    readonly WARPED_SIGN: Material
    readonly OAK_HANGING_SIGN: Material
    readonly SPRUCE_HANGING_SIGN: Material
    readonly BIRCH_HANGING_SIGN: Material
    readonly JUNGLE_HANGING_SIGN: Material
    readonly ACACIA_HANGING_SIGN: Material
    readonly CHERRY_HANGING_SIGN: Material
    readonly DARK_OAK_HANGING_SIGN: Material
    readonly MANGROVE_HANGING_SIGN: Material
    readonly BAMBOO_HANGING_SIGN: Material
    readonly CRIMSON_HANGING_SIGN: Material
    readonly WARPED_HANGING_SIGN: Material
    readonly BUCKET: Material
    readonly WATER_BUCKET: Material
    readonly LAVA_BUCKET: Material
    readonly POWDER_SNOW_BUCKET: Material
    readonly SNOWBALL: Material
    readonly LEATHER: Material
    readonly MILK_BUCKET: Material
    readonly PUFFERFISH_BUCKET: Material
    readonly SALMON_BUCKET: Material
    readonly COD_BUCKET: Material
    readonly TROPICAL_FISH_BUCKET: Material
    readonly AXOLOTL_BUCKET: Material
    readonly TADPOLE_BUCKET: Material
    readonly BRICK: Material
    readonly CLAY_BALL: Material
    readonly DRIED_KELP_BLOCK: Material
    readonly PAPER: Material
    readonly BOOK: Material
    readonly SLIME_BALL: Material
    readonly EGG: Material
    readonly COMPASS: Material
    readonly RECOVERY_COMPASS: Material
    readonly BUNDLE: Material
    readonly FISHING_ROD: Material
    readonly CLOCK: Material
    readonly SPYGLASS: Material
    readonly GLOWSTONE_DUST: Material
    readonly COD: Material
    readonly SALMON: Material
    readonly TROPICAL_FISH: Material
    readonly PUFFERFISH: Material
    readonly COOKED_COD: Material
    readonly COOKED_SALMON: Material
    readonly INK_SAC: Material
    readonly GLOW_INK_SAC: Material
    readonly COCOA_BEANS: Material
    readonly WHITE_DYE: Material
    readonly ORANGE_DYE: Material
    readonly MAGENTA_DYE: Material
    readonly LIGHT_BLUE_DYE: Material
    readonly YELLOW_DYE: Material
    readonly LIME_DYE: Material
    readonly PINK_DYE: Material
    readonly GRAY_DYE: Material
    readonly LIGHT_GRAY_DYE: Material
    readonly CYAN_DYE: Material
    readonly PURPLE_DYE: Material
    readonly BLUE_DYE: Material
    readonly BROWN_DYE: Material
    readonly GREEN_DYE: Material
    readonly RED_DYE: Material
    readonly BLACK_DYE: Material
    readonly BONE_MEAL: Material
    readonly BONE: Material
    readonly SUGAR: Material
    readonly CAKE: Material
    readonly WHITE_BED: Material
    readonly ORANGE_BED: Material
    readonly MAGENTA_BED: Material
    readonly LIGHT_BLUE_BED: Material
    readonly YELLOW_BED: Material
    readonly LIME_BED: Material
    readonly PINK_BED: Material
    readonly GRAY_BED: Material
    readonly LIGHT_GRAY_BED: Material
    readonly CYAN_BED: Material
    readonly PURPLE_BED: Material
    readonly BLUE_BED: Material
    readonly BROWN_BED: Material
    readonly GREEN_BED: Material
    readonly RED_BED: Material
    readonly BLACK_BED: Material
    readonly COOKIE: Material
    readonly FILLED_MAP: Material
    readonly SHEARS: Material
    readonly MELON_SLICE: Material
    readonly DRIED_KELP: Material
    readonly PUMPKIN_SEEDS: Material
    readonly MELON_SEEDS: Material
    readonly BEEF: Material
    readonly COOKED_BEEF: Material
    readonly CHICKEN: Material
    readonly COOKED_CHICKEN: Material
    readonly ROTTEN_FLESH: Material
    readonly ENDER_PEARL: Material
    readonly BLAZE_ROD: Material
    readonly GHAST_TEAR: Material
    readonly GOLD_NUGGET: Material
    readonly NETHER_WART: Material
    readonly POTION: Material
    readonly GLASS_BOTTLE: Material
    readonly SPIDER_EYE: Material
    readonly FERMENTED_SPIDER_EYE: Material
    readonly BLAZE_POWDER: Material
    readonly MAGMA_CREAM: Material
    readonly BREWING_STAND: Material
    readonly CAULDRON: Material
    readonly ENDER_EYE: Material
    readonly GLISTERING_MELON_SLICE: Material
    readonly ALLAY_SPAWN_EGG: Material
    readonly AXOLOTL_SPAWN_EGG: Material
    readonly BAT_SPAWN_EGG: Material
    readonly BEE_SPAWN_EGG: Material
    readonly BLAZE_SPAWN_EGG: Material
    readonly CAT_SPAWN_EGG: Material
    readonly CAMEL_SPAWN_EGG: Material
    readonly CAVE_SPIDER_SPAWN_EGG: Material
    readonly CHICKEN_SPAWN_EGG: Material
    readonly COD_SPAWN_EGG: Material
    readonly COW_SPAWN_EGG: Material
    readonly CREEPER_SPAWN_EGG: Material
    readonly DOLPHIN_SPAWN_EGG: Material
    readonly DONKEY_SPAWN_EGG: Material
    readonly DROWNED_SPAWN_EGG: Material
    readonly ELDER_GUARDIAN_SPAWN_EGG: Material
    readonly ENDER_DRAGON_SPAWN_EGG: Material
    readonly ENDERMAN_SPAWN_EGG: Material
    readonly ENDERMITE_SPAWN_EGG: Material
    readonly EVOKER_SPAWN_EGG: Material
    readonly FOX_SPAWN_EGG: Material
    readonly FROG_SPAWN_EGG: Material
    readonly GHAST_SPAWN_EGG: Material
    readonly GLOW_SQUID_SPAWN_EGG: Material
    readonly GOAT_SPAWN_EGG: Material
    readonly GUARDIAN_SPAWN_EGG: Material
    readonly HOGLIN_SPAWN_EGG: Material
    readonly HORSE_SPAWN_EGG: Material
    readonly HUSK_SPAWN_EGG: Material
    readonly IRON_GOLEM_SPAWN_EGG: Material
    readonly LLAMA_SPAWN_EGG: Material
    readonly MAGMA_CUBE_SPAWN_EGG: Material
    readonly MOOSHROOM_SPAWN_EGG: Material
    readonly MULE_SPAWN_EGG: Material
    readonly OCELOT_SPAWN_EGG: Material
    readonly PANDA_SPAWN_EGG: Material
    readonly PARROT_SPAWN_EGG: Material
    readonly PHANTOM_SPAWN_EGG: Material
    readonly PIG_SPAWN_EGG: Material
    readonly PIGLIN_SPAWN_EGG: Material
    readonly PIGLIN_BRUTE_SPAWN_EGG: Material
    readonly PILLAGER_SPAWN_EGG: Material
    readonly POLAR_BEAR_SPAWN_EGG: Material
    readonly PUFFERFISH_SPAWN_EGG: Material
    readonly RABBIT_SPAWN_EGG: Material
    readonly RAVAGER_SPAWN_EGG: Material
    readonly SALMON_SPAWN_EGG: Material
    readonly SHEEP_SPAWN_EGG: Material
    readonly SHULKER_SPAWN_EGG: Material
    readonly SILVERFISH_SPAWN_EGG: Material
    readonly SKELETON_SPAWN_EGG: Material
    readonly SKELETON_HORSE_SPAWN_EGG: Material
    readonly SLIME_SPAWN_EGG: Material
    readonly SNIFFER_SPAWN_EGG: Material
    readonly SNOW_GOLEM_SPAWN_EGG: Material
    readonly SPIDER_SPAWN_EGG: Material
    readonly SQUID_SPAWN_EGG: Material
    readonly STRAY_SPAWN_EGG: Material
    readonly STRIDER_SPAWN_EGG: Material
    readonly TADPOLE_SPAWN_EGG: Material
    readonly TRADER_LLAMA_SPAWN_EGG: Material
    readonly TROPICAL_FISH_SPAWN_EGG: Material
    readonly TURTLE_SPAWN_EGG: Material
    readonly VEX_SPAWN_EGG: Material
    readonly VILLAGER_SPAWN_EGG: Material
    readonly VINDICATOR_SPAWN_EGG: Material
    readonly WANDERING_TRADER_SPAWN_EGG: Material
    readonly WARDEN_SPAWN_EGG: Material
    readonly WITCH_SPAWN_EGG: Material
    readonly WITHER_SPAWN_EGG: Material
    readonly WITHER_SKELETON_SPAWN_EGG: Material
    readonly WOLF_SPAWN_EGG: Material
    readonly ZOGLIN_SPAWN_EGG: Material
    readonly ZOMBIE_SPAWN_EGG: Material
    readonly ZOMBIE_HORSE_SPAWN_EGG: Material
    readonly ZOMBIE_VILLAGER_SPAWN_EGG: Material
    readonly ZOMBIFIED_PIGLIN_SPAWN_EGG: Material
    readonly EXPERIENCE_BOTTLE: Material
    readonly FIRE_CHARGE: Material
    readonly WRITABLE_BOOK: Material
    readonly WRITTEN_BOOK: Material
    readonly ITEM_FRAME: Material
    readonly GLOW_ITEM_FRAME: Material
    readonly FLOWER_POT: Material
    readonly CARROT: Material
    readonly POTATO: Material
    readonly BAKED_POTATO: Material
    readonly POISONOUS_POTATO: Material
    readonly MAP: Material
    readonly GOLDEN_CARROT: Material
    readonly SKELETON_SKULL: Material
    readonly WITHER_SKELETON_SKULL: Material
    readonly PLAYER_HEAD: Material
    readonly ZOMBIE_HEAD: Material
    readonly CREEPER_HEAD: Material
    readonly DRAGON_HEAD: Material
    readonly PIGLIN_HEAD: Material
    readonly NETHER_STAR: Material
    readonly PUMPKIN_PIE: Material
    readonly FIREWORK_ROCKET: Material
    readonly FIREWORK_STAR: Material
    readonly ENCHANTED_BOOK: Material
    readonly NETHER_BRICK: Material
    readonly PRISMARINE_SHARD: Material
    readonly PRISMARINE_CRYSTALS: Material
    readonly RABBIT: Material
    readonly COOKED_RABBIT: Material
    readonly RABBIT_STEW: Material
    readonly RABBIT_FOOT: Material
    readonly RABBIT_HIDE: Material
    readonly ARMOR_STAND: Material
    readonly IRON_HORSE_ARMOR: Material
    readonly GOLDEN_HORSE_ARMOR: Material
    readonly DIAMOND_HORSE_ARMOR: Material
    readonly LEATHER_HORSE_ARMOR: Material
    readonly LEAD: Material
    readonly NAME_TAG: Material
    readonly COMMAND_BLOCK_MINECART: Material
    readonly MUTTON: Material
    readonly COOKED_MUTTON: Material
    readonly WHITE_BANNER: Material
    readonly ORANGE_BANNER: Material
    readonly MAGENTA_BANNER: Material
    readonly LIGHT_BLUE_BANNER: Material
    readonly YELLOW_BANNER: Material
    readonly LIME_BANNER: Material
    readonly PINK_BANNER: Material
    readonly GRAY_BANNER: Material
    readonly LIGHT_GRAY_BANNER: Material
    readonly CYAN_BANNER: Material
    readonly PURPLE_BANNER: Material
    readonly BLUE_BANNER: Material
    readonly BROWN_BANNER: Material
    readonly GREEN_BANNER: Material
    readonly RED_BANNER: Material
    readonly BLACK_BANNER: Material
    readonly END_CRYSTAL: Material
    readonly CHORUS_FRUIT: Material
    readonly POPPED_CHORUS_FRUIT: Material
    readonly TORCHFLOWER_SEEDS: Material
    readonly PITCHER_POD: Material
    readonly BEETROOT: Material
    readonly BEETROOT_SEEDS: Material
    readonly BEETROOT_SOUP: Material
    readonly DRAGON_BREATH: Material
    readonly SPLASH_POTION: Material
    readonly SPECTRAL_ARROW: Material
    readonly TIPPED_ARROW: Material
    readonly LINGERING_POTION: Material
    readonly SHIELD: Material
    readonly TOTEM_OF_UNDYING: Material
    readonly SHULKER_SHELL: Material
    readonly IRON_NUGGET: Material
    readonly KNOWLEDGE_BOOK: Material
    readonly DEBUG_STICK: Material
    readonly MUSIC_DISC_13: Material
    readonly MUSIC_DISC_CAT: Material
    readonly MUSIC_DISC_BLOCKS: Material
    readonly MUSIC_DISC_CHIRP: Material
    readonly MUSIC_DISC_FAR: Material
    readonly MUSIC_DISC_MALL: Material
    readonly MUSIC_DISC_MELLOHI: Material
    readonly MUSIC_DISC_STAL: Material
    readonly MUSIC_DISC_STRAD: Material
    readonly MUSIC_DISC_WARD: Material
    readonly MUSIC_DISC_11: Material
    readonly MUSIC_DISC_WAIT: Material
    readonly MUSIC_DISC_OTHERSIDE: Material
    readonly MUSIC_DISC_RELIC: Material
    readonly MUSIC_DISC_5: Material
    readonly MUSIC_DISC_PIGSTEP: Material
    readonly DISC_FRAGMENT_5: Material
    readonly TRIDENT: Material
    readonly PHANTOM_MEMBRANE: Material
    readonly NAUTILUS_SHELL: Material
    readonly HEART_OF_THE_SEA: Material
    readonly CROSSBOW: Material
    readonly SUSPICIOUS_STEW: Material
    readonly LOOM: Material
    readonly FLOWER_BANNER_PATTERN: Material
    readonly CREEPER_BANNER_PATTERN: Material
    readonly SKULL_BANNER_PATTERN: Material
    readonly MOJANG_BANNER_PATTERN: Material
    readonly GLOBE_BANNER_PATTERN: Material
    readonly PIGLIN_BANNER_PATTERN: Material
    readonly GOAT_HORN: Material
    readonly COMPOSTER: Material
    readonly BARREL: Material
    readonly SMOKER: Material
    readonly BLAST_FURNACE: Material
    readonly CARTOGRAPHY_TABLE: Material
    readonly FLETCHING_TABLE: Material
    readonly GRINDSTONE: Material
    readonly SMITHING_TABLE: Material
    readonly STONECUTTER: Material
    readonly BELL: Material
    readonly LANTERN: Material
    readonly SOUL_LANTERN: Material
    readonly SWEET_BERRIES: Material
    readonly GLOW_BERRIES: Material
    readonly CAMPFIRE: Material
    readonly SOUL_CAMPFIRE: Material
    readonly SHROOMLIGHT: Material
    readonly HONEYCOMB: Material
    readonly BEE_NEST: Material
    readonly BEEHIVE: Material
    readonly HONEY_BOTTLE: Material
    readonly HONEYCOMB_BLOCK: Material
    readonly LODESTONE: Material
    readonly CRYING_OBSIDIAN: Material
    readonly BLACKSTONE: Material
    readonly BLACKSTONE_SLAB: Material
    readonly BLACKSTONE_STAIRS: Material
    readonly GILDED_BLACKSTONE: Material
    readonly POLISHED_BLACKSTONE: Material
    readonly POLISHED_BLACKSTONE_SLAB: Material
    readonly POLISHED_BLACKSTONE_STAIRS: Material
    readonly CHISELED_POLISHED_BLACKSTONE: Material
    readonly POLISHED_BLACKSTONE_BRICKS: Material
    readonly POLISHED_BLACKSTONE_BRICK_SLAB: Material
    readonly POLISHED_BLACKSTONE_BRICK_STAIRS: Material
    readonly CRACKED_POLISHED_BLACKSTONE_BRICKS: Material
    readonly RESPAWN_ANCHOR: Material
    readonly CANDLE: Material
    readonly WHITE_CANDLE: Material
    readonly ORANGE_CANDLE: Material
    readonly MAGENTA_CANDLE: Material
    readonly LIGHT_BLUE_CANDLE: Material
    readonly YELLOW_CANDLE: Material
    readonly LIME_CANDLE: Material
    readonly PINK_CANDLE: Material
    readonly GRAY_CANDLE: Material
    readonly LIGHT_GRAY_CANDLE: Material
    readonly CYAN_CANDLE: Material
    readonly PURPLE_CANDLE: Material
    readonly BLUE_CANDLE: Material
    readonly BROWN_CANDLE: Material
    readonly GREEN_CANDLE: Material
    readonly RED_CANDLE: Material
    readonly BLACK_CANDLE: Material
    readonly SMALL_AMETHYST_BUD: Material
    readonly MEDIUM_AMETHYST_BUD: Material
    readonly LARGE_AMETHYST_BUD: Material
    readonly AMETHYST_CLUSTER: Material
    readonly POINTED_DRIPSTONE: Material
    readonly OCHRE_FROGLIGHT: Material
    readonly VERDANT_FROGLIGHT: Material
    readonly PEARLESCENT_FROGLIGHT: Material
    readonly FROGSPAWN: Material
    readonly ECHO_SHARD: Material
    readonly BRUSH: Material
    readonly NETHERITE_UPGRADE_SMITHING_TEMPLATE: Material
    readonly SENTRY_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly DUNE_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly COAST_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly WILD_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly WARD_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly EYE_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly VEX_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly TIDE_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly SNOUT_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly RIB_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly SPIRE_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly WAYFINDER_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly SHAPER_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly SILENCE_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly RAISER_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly HOST_ARMOR_TRIM_SMITHING_TEMPLATE: Material
    readonly ANGLER_POTTERY_SHERD: Material
    readonly ARCHER_POTTERY_SHERD: Material
    readonly ARMS_UP_POTTERY_SHERD: Material
    readonly BLADE_POTTERY_SHERD: Material
    readonly BREWER_POTTERY_SHERD: Material
    readonly BURN_POTTERY_SHERD: Material
    readonly DANGER_POTTERY_SHERD: Material
    readonly EXPLORER_POTTERY_SHERD: Material
    readonly FRIEND_POTTERY_SHERD: Material
    readonly HEART_POTTERY_SHERD: Material
    readonly HEARTBREAK_POTTERY_SHERD: Material
    readonly HOWL_POTTERY_SHERD: Material
    readonly MINER_POTTERY_SHERD: Material
    readonly MOURNER_POTTERY_SHERD: Material
    readonly PLENTY_POTTERY_SHERD: Material
    readonly PRIZE_POTTERY_SHERD: Material
    readonly SHEAF_POTTERY_SHERD: Material
    readonly SHELTER_POTTERY_SHERD: Material
    readonly SKULL_POTTERY_SHERD: Material
    readonly SNORT_POTTERY_SHERD: Material
    readonly WATER: Material
    readonly LAVA: Material
    readonly TALL_SEAGRASS: Material
    readonly PISTON_HEAD: Material
    readonly MOVING_PISTON: Material
    readonly WALL_TORCH: Material
    readonly FIRE: Material
    readonly SOUL_FIRE: Material
    readonly REDSTONE_WIRE: Material
    readonly OAK_WALL_SIGN: Material
    readonly SPRUCE_WALL_SIGN: Material
    readonly BIRCH_WALL_SIGN: Material
    readonly ACACIA_WALL_SIGN: Material
    readonly CHERRY_WALL_SIGN: Material
    readonly JUNGLE_WALL_SIGN: Material
    readonly DARK_OAK_WALL_SIGN: Material
    readonly MANGROVE_WALL_SIGN: Material
    readonly BAMBOO_WALL_SIGN: Material
    readonly OAK_WALL_HANGING_SIGN: Material
    readonly SPRUCE_WALL_HANGING_SIGN: Material
    readonly BIRCH_WALL_HANGING_SIGN: Material
    readonly ACACIA_WALL_HANGING_SIGN: Material
    readonly CHERRY_WALL_HANGING_SIGN: Material
    readonly JUNGLE_WALL_HANGING_SIGN: Material
    readonly DARK_OAK_WALL_HANGING_SIGN: Material
    readonly MANGROVE_WALL_HANGING_SIGN: Material
    readonly CRIMSON_WALL_HANGING_SIGN: Material
    readonly WARPED_WALL_HANGING_SIGN: Material
    readonly BAMBOO_WALL_HANGING_SIGN: Material
    readonly REDSTONE_WALL_TORCH: Material
    readonly SOUL_WALL_TORCH: Material
    readonly NETHER_PORTAL: Material
    readonly ATTACHED_PUMPKIN_STEM: Material
    readonly ATTACHED_MELON_STEM: Material
    readonly PUMPKIN_STEM: Material
    readonly MELON_STEM: Material
    readonly WATER_CAULDRON: Material
    readonly LAVA_CAULDRON: Material
    readonly POWDER_SNOW_CAULDRON: Material
    readonly END_PORTAL: Material
    readonly COCOA: Material
    readonly TRIPWIRE: Material
    readonly POTTED_TORCHFLOWER: Material
    readonly POTTED_OAK_SAPLING: Material
    readonly POTTED_SPRUCE_SAPLING: Material
    readonly POTTED_BIRCH_SAPLING: Material
    readonly POTTED_JUNGLE_SAPLING: Material
    readonly POTTED_ACACIA_SAPLING: Material
    readonly POTTED_CHERRY_SAPLING: Material
    readonly POTTED_DARK_OAK_SAPLING: Material
    readonly POTTED_MANGROVE_PROPAGULE: Material
    readonly POTTED_FERN: Material
    readonly POTTED_DANDELION: Material
    readonly POTTED_POPPY: Material
    readonly POTTED_BLUE_ORCHID: Material
    readonly POTTED_ALLIUM: Material
    readonly POTTED_AZURE_BLUET: Material
    readonly POTTED_RED_TULIP: Material
    readonly POTTED_ORANGE_TULIP: Material
    readonly POTTED_WHITE_TULIP: Material
    readonly POTTED_PINK_TULIP: Material
    readonly POTTED_OXEYE_DAISY: Material
    readonly POTTED_CORNFLOWER: Material
    readonly POTTED_LILY_OF_THE_VALLEY: Material
    readonly POTTED_WITHER_ROSE: Material
    readonly POTTED_RED_MUSHROOM: Material
    readonly POTTED_BROWN_MUSHROOM: Material
    readonly POTTED_DEAD_BUSH: Material
    readonly POTTED_CACTUS: Material
    readonly CARROTS: Material
    readonly POTATOES: Material
    readonly SKELETON_WALL_SKULL: Material
    readonly WITHER_SKELETON_WALL_SKULL: Material
    readonly ZOMBIE_WALL_HEAD: Material
    readonly PLAYER_WALL_HEAD: Material
    readonly CREEPER_WALL_HEAD: Material
    readonly DRAGON_WALL_HEAD: Material
    readonly PIGLIN_WALL_HEAD: Material
    readonly WHITE_WALL_BANNER: Material
    readonly ORANGE_WALL_BANNER: Material
    readonly MAGENTA_WALL_BANNER: Material
    readonly LIGHT_BLUE_WALL_BANNER: Material
    readonly YELLOW_WALL_BANNER: Material
    readonly LIME_WALL_BANNER: Material
    readonly PINK_WALL_BANNER: Material
    readonly GRAY_WALL_BANNER: Material
    readonly LIGHT_GRAY_WALL_BANNER: Material
    readonly CYAN_WALL_BANNER: Material
    readonly PURPLE_WALL_BANNER: Material
    readonly BLUE_WALL_BANNER: Material
    readonly BROWN_WALL_BANNER: Material
    readonly GREEN_WALL_BANNER: Material
    readonly RED_WALL_BANNER: Material
    readonly BLACK_WALL_BANNER: Material
    readonly TORCHFLOWER_CROP: Material
    readonly PITCHER_CROP: Material
    readonly BEETROOTS: Material
    readonly END_GATEWAY: Material
    readonly FROSTED_ICE: Material
    readonly KELP_PLANT: Material
    readonly DEAD_TUBE_CORAL_WALL_FAN: Material
    readonly DEAD_BRAIN_CORAL_WALL_FAN: Material
    readonly DEAD_BUBBLE_CORAL_WALL_FAN: Material
    readonly DEAD_FIRE_CORAL_WALL_FAN: Material
    readonly DEAD_HORN_CORAL_WALL_FAN: Material
    readonly TUBE_CORAL_WALL_FAN: Material
    readonly BRAIN_CORAL_WALL_FAN: Material
    readonly BUBBLE_CORAL_WALL_FAN: Material
    readonly FIRE_CORAL_WALL_FAN: Material
    readonly HORN_CORAL_WALL_FAN: Material
    readonly BAMBOO_SAPLING: Material
    readonly POTTED_BAMBOO: Material
    readonly VOID_AIR: Material
    readonly CAVE_AIR: Material
    readonly BUBBLE_COLUMN: Material
    readonly SWEET_BERRY_BUSH: Material
    readonly WEEPING_VINES_PLANT: Material
    readonly TWISTING_VINES_PLANT: Material
    readonly CRIMSON_WALL_SIGN: Material
    readonly WARPED_WALL_SIGN: Material
    readonly POTTED_CRIMSON_FUNGUS: Material
    readonly POTTED_WARPED_FUNGUS: Material
    readonly POTTED_CRIMSON_ROOTS: Material
    readonly POTTED_WARPED_ROOTS: Material
    readonly CANDLE_CAKE: Material
    readonly WHITE_CANDLE_CAKE: Material
    readonly ORANGE_CANDLE_CAKE: Material
    readonly MAGENTA_CANDLE_CAKE: Material
    readonly LIGHT_BLUE_CANDLE_CAKE: Material
    readonly YELLOW_CANDLE_CAKE: Material
    readonly LIME_CANDLE_CAKE: Material
    readonly PINK_CANDLE_CAKE: Material
    readonly GRAY_CANDLE_CAKE: Material
    readonly LIGHT_GRAY_CANDLE_CAKE: Material
    readonly CYAN_CANDLE_CAKE: Material
    readonly PURPLE_CANDLE_CAKE: Material
    readonly BLUE_CANDLE_CAKE: Material
    readonly BROWN_CANDLE_CAKE: Material
    readonly GREEN_CANDLE_CAKE: Material
    readonly RED_CANDLE_CAKE: Material
    readonly BLACK_CANDLE_CAKE: Material
    readonly POWDER_SNOW: Material
    readonly CAVE_VINES: Material
    readonly CAVE_VINES_PLANT: Material
    readonly BIG_DRIPLEAF_STEM: Material
    readonly POTTED_AZALEA_BUSH: Material
    readonly POTTED_FLOWERING_AZALEA_BUSH: Material
    readonly LEGACY_AIR: Material
    readonly LEGACY_STONE: Material
    readonly LEGACY_GRASS: Material
    readonly LEGACY_DIRT: Material
    readonly LEGACY_COBBLESTONE: Material
    readonly LEGACY_WOOD: Material
    readonly LEGACY_SAPLING: Material
    readonly LEGACY_BEDROCK: Material
    readonly LEGACY_WATER: Material
    readonly LEGACY_STATIONARY_WATER: Material
    readonly LEGACY_LAVA: Material
    readonly LEGACY_STATIONARY_LAVA: Material
    readonly LEGACY_SAND: Material
    readonly LEGACY_GRAVEL: Material
    readonly LEGACY_GOLD_ORE: Material
    readonly LEGACY_IRON_ORE: Material
    readonly LEGACY_COAL_ORE: Material
    readonly LEGACY_LOG: Material
    readonly LEGACY_LEAVES: Material
    readonly LEGACY_SPONGE: Material
    readonly LEGACY_GLASS: Material
    readonly LEGACY_LAPIS_ORE: Material
    readonly LEGACY_LAPIS_BLOCK: Material
    readonly LEGACY_DISPENSER: Material
    readonly LEGACY_SANDSTONE: Material
    readonly LEGACY_NOTE_BLOCK: Material
    readonly LEGACY_BED_BLOCK: Material
    readonly LEGACY_POWERED_RAIL: Material
    readonly LEGACY_DETECTOR_RAIL: Material
    readonly LEGACY_PISTON_STICKY_BASE: Material
    readonly LEGACY_WEB: Material
    readonly LEGACY_LONG_GRASS: Material
    readonly LEGACY_DEAD_BUSH: Material
    readonly LEGACY_PISTON_BASE: Material
    readonly LEGACY_PISTON_EXTENSION: Material
    readonly LEGACY_WOOL: Material
    readonly LEGACY_PISTON_MOVING_PIECE: Material
    readonly LEGACY_YELLOW_FLOWER: Material
    readonly LEGACY_RED_ROSE: Material
    readonly LEGACY_BROWN_MUSHROOM: Material
    readonly LEGACY_RED_MUSHROOM: Material
    readonly LEGACY_GOLD_BLOCK: Material
    readonly LEGACY_IRON_BLOCK: Material
    readonly LEGACY_DOUBLE_STEP: Material
    readonly LEGACY_STEP: Material
    readonly LEGACY_BRICK: Material
    readonly LEGACY_TNT: Material
    readonly LEGACY_BOOKSHELF: Material
    readonly LEGACY_MOSSY_COBBLESTONE: Material
    readonly LEGACY_OBSIDIAN: Material
    readonly LEGACY_TORCH: Material
    readonly LEGACY_FIRE: Material
    readonly LEGACY_MOB_SPAWNER: Material
    readonly LEGACY_WOOD_STAIRS: Material
    readonly LEGACY_CHEST: Material
    readonly LEGACY_REDSTONE_WIRE: Material
    readonly LEGACY_DIAMOND_ORE: Material
    readonly LEGACY_DIAMOND_BLOCK: Material
    readonly LEGACY_WORKBENCH: Material
    readonly LEGACY_CROPS: Material
    readonly LEGACY_SOIL: Material
    readonly LEGACY_FURNACE: Material
    readonly LEGACY_BURNING_FURNACE: Material
    readonly LEGACY_SIGN_POST: Material
    readonly LEGACY_WOODEN_DOOR: Material
    readonly LEGACY_LADDER: Material
    readonly LEGACY_RAILS: Material
    readonly LEGACY_COBBLESTONE_STAIRS: Material
    readonly LEGACY_WALL_SIGN: Material
    readonly LEGACY_LEVER: Material
    readonly LEGACY_STONE_PLATE: Material
    readonly LEGACY_IRON_DOOR_BLOCK: Material
    readonly LEGACY_WOOD_PLATE: Material
    readonly LEGACY_REDSTONE_ORE: Material
    readonly LEGACY_GLOWING_REDSTONE_ORE: Material
    readonly LEGACY_REDSTONE_TORCH_OFF: Material
    readonly LEGACY_REDSTONE_TORCH_ON: Material
    readonly LEGACY_STONE_BUTTON: Material
    readonly LEGACY_SNOW: Material
    readonly LEGACY_ICE: Material
    readonly LEGACY_SNOW_BLOCK: Material
    readonly LEGACY_CACTUS: Material
    readonly LEGACY_CLAY: Material
    readonly LEGACY_SUGAR_CANE_BLOCK: Material
    readonly LEGACY_JUKEBOX: Material
    readonly LEGACY_FENCE: Material
    readonly LEGACY_PUMPKIN: Material
    readonly LEGACY_NETHERRACK: Material
    readonly LEGACY_SOUL_SAND: Material
    readonly LEGACY_GLOWSTONE: Material
    readonly LEGACY_PORTAL: Material
    readonly LEGACY_JACK_O_LANTERN: Material
    readonly LEGACY_CAKE_BLOCK: Material
    readonly LEGACY_DIODE_BLOCK_OFF: Material
    readonly LEGACY_DIODE_BLOCK_ON: Material
    readonly LEGACY_STAINED_GLASS: Material
    readonly LEGACY_TRAP_DOOR: Material
    readonly LEGACY_MONSTER_EGGS: Material
    readonly LEGACY_SMOOTH_BRICK: Material
    readonly LEGACY_HUGE_MUSHROOM_1: Material
    readonly LEGACY_HUGE_MUSHROOM_2: Material
    readonly LEGACY_IRON_FENCE: Material
    readonly LEGACY_THIN_GLASS: Material
    readonly LEGACY_MELON_BLOCK: Material
    readonly LEGACY_PUMPKIN_STEM: Material
    readonly LEGACY_MELON_STEM: Material
    readonly LEGACY_VINE: Material
    readonly LEGACY_FENCE_GATE: Material
    readonly LEGACY_BRICK_STAIRS: Material
    readonly LEGACY_SMOOTH_STAIRS: Material
    readonly LEGACY_MYCEL: Material
    readonly LEGACY_WATER_LILY: Material
    readonly LEGACY_NETHER_BRICK: Material
    readonly LEGACY_NETHER_FENCE: Material
    readonly LEGACY_NETHER_BRICK_STAIRS: Material
    readonly LEGACY_NETHER_WARTS: Material
    readonly LEGACY_ENCHANTMENT_TABLE: Material
    readonly LEGACY_BREWING_STAND: Material
    readonly LEGACY_CAULDRON: Material
    readonly LEGACY_ENDER_PORTAL: Material
    readonly LEGACY_ENDER_PORTAL_FRAME: Material
    readonly LEGACY_ENDER_STONE: Material
    readonly LEGACY_DRAGON_EGG: Material
    readonly LEGACY_REDSTONE_LAMP_OFF: Material
    readonly LEGACY_REDSTONE_LAMP_ON: Material
    readonly LEGACY_WOOD_DOUBLE_STEP: Material
    readonly LEGACY_WOOD_STEP: Material
    readonly LEGACY_COCOA: Material
    readonly LEGACY_SANDSTONE_STAIRS: Material
    readonly LEGACY_EMERALD_ORE: Material
    readonly LEGACY_ENDER_CHEST: Material
    readonly LEGACY_TRIPWIRE_HOOK: Material
    readonly LEGACY_TRIPWIRE: Material
    readonly LEGACY_EMERALD_BLOCK: Material
    readonly LEGACY_SPRUCE_WOOD_STAIRS: Material
    readonly LEGACY_BIRCH_WOOD_STAIRS: Material
    readonly LEGACY_JUNGLE_WOOD_STAIRS: Material
    readonly LEGACY_COMMAND: Material
    readonly LEGACY_BEACON: Material
    readonly LEGACY_COBBLE_WALL: Material
    readonly LEGACY_FLOWER_POT: Material
    readonly LEGACY_CARROT: Material
    readonly LEGACY_POTATO: Material
    readonly LEGACY_WOOD_BUTTON: Material
    readonly LEGACY_SKULL: Material
    readonly LEGACY_ANVIL: Material
    readonly LEGACY_TRAPPED_CHEST: Material
    readonly LEGACY_GOLD_PLATE: Material
    readonly LEGACY_IRON_PLATE: Material
    readonly LEGACY_REDSTONE_COMPARATOR_OFF: Material
    readonly LEGACY_REDSTONE_COMPARATOR_ON: Material
    readonly LEGACY_DAYLIGHT_DETECTOR: Material
    readonly LEGACY_REDSTONE_BLOCK: Material
    readonly LEGACY_QUARTZ_ORE: Material
    readonly LEGACY_HOPPER: Material
    readonly LEGACY_QUARTZ_BLOCK: Material
    readonly LEGACY_QUARTZ_STAIRS: Material
    readonly LEGACY_ACTIVATOR_RAIL: Material
    readonly LEGACY_DROPPER: Material
    readonly LEGACY_STAINED_CLAY: Material
    readonly LEGACY_STAINED_GLASS_PANE: Material
    readonly LEGACY_LEAVES_2: Material
    readonly LEGACY_LOG_2: Material
    readonly LEGACY_ACACIA_STAIRS: Material
    readonly LEGACY_DARK_OAK_STAIRS: Material
    readonly LEGACY_SLIME_BLOCK: Material
    readonly LEGACY_BARRIER: Material
    readonly LEGACY_IRON_TRAPDOOR: Material
    readonly LEGACY_PRISMARINE: Material
    readonly LEGACY_SEA_LANTERN: Material
    readonly LEGACY_HAY_BLOCK: Material
    readonly LEGACY_CARPET: Material
    readonly LEGACY_HARD_CLAY: Material
    readonly LEGACY_COAL_BLOCK: Material
    readonly LEGACY_PACKED_ICE: Material
    readonly LEGACY_DOUBLE_PLANT: Material
    readonly LEGACY_STANDING_BANNER: Material
    readonly LEGACY_WALL_BANNER: Material
    readonly LEGACY_DAYLIGHT_DETECTOR_INVERTED: Material
    readonly LEGACY_RED_SANDSTONE: Material
    readonly LEGACY_RED_SANDSTONE_STAIRS: Material
    readonly LEGACY_DOUBLE_STONE_SLAB2: Material
    readonly LEGACY_STONE_SLAB2: Material
    readonly LEGACY_SPRUCE_FENCE_GATE: Material
    readonly LEGACY_BIRCH_FENCE_GATE: Material
    readonly LEGACY_JUNGLE_FENCE_GATE: Material
    readonly LEGACY_DARK_OAK_FENCE_GATE: Material
    readonly LEGACY_ACACIA_FENCE_GATE: Material
    readonly LEGACY_SPRUCE_FENCE: Material
    readonly LEGACY_BIRCH_FENCE: Material
    readonly LEGACY_JUNGLE_FENCE: Material
    readonly LEGACY_DARK_OAK_FENCE: Material
    readonly LEGACY_ACACIA_FENCE: Material
    readonly LEGACY_SPRUCE_DOOR: Material
    readonly LEGACY_BIRCH_DOOR: Material
    readonly LEGACY_JUNGLE_DOOR: Material
    readonly LEGACY_ACACIA_DOOR: Material
    readonly LEGACY_DARK_OAK_DOOR: Material
    readonly LEGACY_END_ROD: Material
    readonly LEGACY_CHORUS_PLANT: Material
    readonly LEGACY_CHORUS_FLOWER: Material
    readonly LEGACY_PURPUR_BLOCK: Material
    readonly LEGACY_PURPUR_PILLAR: Material
    readonly LEGACY_PURPUR_STAIRS: Material
    readonly LEGACY_PURPUR_DOUBLE_SLAB: Material
    readonly LEGACY_PURPUR_SLAB: Material
    readonly LEGACY_END_BRICKS: Material
    readonly LEGACY_BEETROOT_BLOCK: Material
    readonly LEGACY_GRASS_PATH: Material
    readonly LEGACY_END_GATEWAY: Material
    readonly LEGACY_COMMAND_REPEATING: Material
    readonly LEGACY_COMMAND_CHAIN: Material
    readonly LEGACY_FROSTED_ICE: Material
    readonly LEGACY_MAGMA: Material
    readonly LEGACY_NETHER_WART_BLOCK: Material
    readonly LEGACY_RED_NETHER_BRICK: Material
    readonly LEGACY_BONE_BLOCK: Material
    readonly LEGACY_STRUCTURE_VOID: Material
    readonly LEGACY_OBSERVER: Material
    readonly LEGACY_WHITE_SHULKER_BOX: Material
    readonly LEGACY_ORANGE_SHULKER_BOX: Material
    readonly LEGACY_MAGENTA_SHULKER_BOX: Material
    readonly LEGACY_LIGHT_BLUE_SHULKER_BOX: Material
    readonly LEGACY_YELLOW_SHULKER_BOX: Material
    readonly LEGACY_LIME_SHULKER_BOX: Material
    readonly LEGACY_PINK_SHULKER_BOX: Material
    readonly LEGACY_GRAY_SHULKER_BOX: Material
    readonly LEGACY_SILVER_SHULKER_BOX: Material
    readonly LEGACY_CYAN_SHULKER_BOX: Material
    readonly LEGACY_PURPLE_SHULKER_BOX: Material
    readonly LEGACY_BLUE_SHULKER_BOX: Material
    readonly LEGACY_BROWN_SHULKER_BOX: Material
    readonly LEGACY_GREEN_SHULKER_BOX: Material
    readonly LEGACY_RED_SHULKER_BOX: Material
    readonly LEGACY_BLACK_SHULKER_BOX: Material
    readonly LEGACY_WHITE_GLAZED_TERRACOTTA: Material
    readonly LEGACY_ORANGE_GLAZED_TERRACOTTA: Material
    readonly LEGACY_MAGENTA_GLAZED_TERRACOTTA: Material
    readonly LEGACY_LIGHT_BLUE_GLAZED_TERRACOTTA: Material
    readonly LEGACY_YELLOW_GLAZED_TERRACOTTA: Material
    readonly LEGACY_LIME_GLAZED_TERRACOTTA: Material
    readonly LEGACY_PINK_GLAZED_TERRACOTTA: Material
    readonly LEGACY_GRAY_GLAZED_TERRACOTTA: Material
    readonly LEGACY_SILVER_GLAZED_TERRACOTTA: Material
    readonly LEGACY_CYAN_GLAZED_TERRACOTTA: Material
    readonly LEGACY_PURPLE_GLAZED_TERRACOTTA: Material
    readonly LEGACY_BLUE_GLAZED_TERRACOTTA: Material
    readonly LEGACY_BROWN_GLAZED_TERRACOTTA: Material
    readonly LEGACY_GREEN_GLAZED_TERRACOTTA: Material
    readonly LEGACY_RED_GLAZED_TERRACOTTA: Material
    readonly LEGACY_BLACK_GLAZED_TERRACOTTA: Material
    readonly LEGACY_CONCRETE: Material
    readonly LEGACY_CONCRETE_POWDER: Material
    readonly LEGACY_STRUCTURE_BLOCK: Material
    readonly LEGACY_IRON_SPADE: Material
    readonly LEGACY_IRON_PICKAXE: Material
    readonly LEGACY_IRON_AXE: Material
    readonly LEGACY_FLINT_AND_STEEL: Material
    readonly LEGACY_APPLE: Material
    readonly LEGACY_BOW: Material
    readonly LEGACY_ARROW: Material
    readonly LEGACY_COAL: Material
    readonly LEGACY_DIAMOND: Material
    readonly LEGACY_IRON_INGOT: Material
    readonly LEGACY_GOLD_INGOT: Material
    readonly LEGACY_IRON_SWORD: Material
    readonly LEGACY_WOOD_SWORD: Material
    readonly LEGACY_WOOD_SPADE: Material
    readonly LEGACY_WOOD_PICKAXE: Material
    readonly LEGACY_WOOD_AXE: Material
    readonly LEGACY_STONE_SWORD: Material
    readonly LEGACY_STONE_SPADE: Material
    readonly LEGACY_STONE_PICKAXE: Material
    readonly LEGACY_STONE_AXE: Material
    readonly LEGACY_DIAMOND_SWORD: Material
    readonly LEGACY_DIAMOND_SPADE: Material
    readonly LEGACY_DIAMOND_PICKAXE: Material
    readonly LEGACY_DIAMOND_AXE: Material
    readonly LEGACY_STICK: Material
    readonly LEGACY_BOWL: Material
    readonly LEGACY_MUSHROOM_SOUP: Material
    readonly LEGACY_GOLD_SWORD: Material
    readonly LEGACY_GOLD_SPADE: Material
    readonly LEGACY_GOLD_PICKAXE: Material
    readonly LEGACY_GOLD_AXE: Material
    readonly LEGACY_STRING: Material
    readonly LEGACY_FEATHER: Material
    readonly LEGACY_SULPHUR: Material
    readonly LEGACY_WOOD_HOE: Material
    readonly LEGACY_STONE_HOE: Material
    readonly LEGACY_IRON_HOE: Material
    readonly LEGACY_DIAMOND_HOE: Material
    readonly LEGACY_GOLD_HOE: Material
    readonly LEGACY_SEEDS: Material
    readonly LEGACY_WHEAT: Material
    readonly LEGACY_BREAD: Material
    readonly LEGACY_LEATHER_HELMET: Material
    readonly LEGACY_LEATHER_CHESTPLATE: Material
    readonly LEGACY_LEATHER_LEGGINGS: Material
    readonly LEGACY_LEATHER_BOOTS: Material
    readonly LEGACY_CHAINMAIL_HELMET: Material
    readonly LEGACY_CHAINMAIL_CHESTPLATE: Material
    readonly LEGACY_CHAINMAIL_LEGGINGS: Material
    readonly LEGACY_CHAINMAIL_BOOTS: Material
    readonly LEGACY_IRON_HELMET: Material
    readonly LEGACY_IRON_CHESTPLATE: Material
    readonly LEGACY_IRON_LEGGINGS: Material
    readonly LEGACY_IRON_BOOTS: Material
    readonly LEGACY_DIAMOND_HELMET: Material
    readonly LEGACY_DIAMOND_CHESTPLATE: Material
    readonly LEGACY_DIAMOND_LEGGINGS: Material
    readonly LEGACY_DIAMOND_BOOTS: Material
    readonly LEGACY_GOLD_HELMET: Material
    readonly LEGACY_GOLD_CHESTPLATE: Material
    readonly LEGACY_GOLD_LEGGINGS: Material
    readonly LEGACY_GOLD_BOOTS: Material
    readonly LEGACY_FLINT: Material
    readonly LEGACY_PORK: Material
    readonly LEGACY_GRILLED_PORK: Material
    readonly LEGACY_PAINTING: Material
    readonly LEGACY_GOLDEN_APPLE: Material
    readonly LEGACY_SIGN: Material
    readonly LEGACY_WOOD_DOOR: Material
    readonly LEGACY_BUCKET: Material
    readonly LEGACY_WATER_BUCKET: Material
    readonly LEGACY_LAVA_BUCKET: Material
    readonly LEGACY_MINECART: Material
    readonly LEGACY_SADDLE: Material
    readonly LEGACY_IRON_DOOR: Material
    readonly LEGACY_REDSTONE: Material
    readonly LEGACY_SNOW_BALL: Material
    readonly LEGACY_BOAT: Material
    readonly LEGACY_LEATHER: Material
    readonly LEGACY_MILK_BUCKET: Material
    readonly LEGACY_CLAY_BRICK: Material
    readonly LEGACY_CLAY_BALL: Material
    readonly LEGACY_SUGAR_CANE: Material
    readonly LEGACY_PAPER: Material
    readonly LEGACY_BOOK: Material
    readonly LEGACY_SLIME_BALL: Material
    readonly LEGACY_STORAGE_MINECART: Material
    readonly LEGACY_POWERED_MINECART: Material
    readonly LEGACY_EGG: Material
    readonly LEGACY_COMPASS: Material
    readonly LEGACY_FISHING_ROD: Material
    readonly LEGACY_WATCH: Material
    readonly LEGACY_GLOWSTONE_DUST: Material
    readonly LEGACY_RAW_FISH: Material
    readonly LEGACY_COOKED_FISH: Material
    readonly LEGACY_INK_SACK: Material
    readonly LEGACY_BONE: Material
    readonly LEGACY_SUGAR: Material
    readonly LEGACY_CAKE: Material
    readonly LEGACY_BED: Material
    readonly LEGACY_DIODE: Material
    readonly LEGACY_COOKIE: Material
    readonly LEGACY_MAP: Material
    readonly LEGACY_SHEARS: Material
    readonly LEGACY_MELON: Material
    readonly LEGACY_PUMPKIN_SEEDS: Material
    readonly LEGACY_MELON_SEEDS: Material
    readonly LEGACY_RAW_BEEF: Material
    readonly LEGACY_COOKED_BEEF: Material
    readonly LEGACY_RAW_CHICKEN: Material
    readonly LEGACY_COOKED_CHICKEN: Material
    readonly LEGACY_ROTTEN_FLESH: Material
    readonly LEGACY_ENDER_PEARL: Material
    readonly LEGACY_BLAZE_ROD: Material
    readonly LEGACY_GHAST_TEAR: Material
    readonly LEGACY_GOLD_NUGGET: Material
    readonly LEGACY_NETHER_STALK: Material
    readonly LEGACY_POTION: Material
    readonly LEGACY_GLASS_BOTTLE: Material
    readonly LEGACY_SPIDER_EYE: Material
    readonly LEGACY_FERMENTED_SPIDER_EYE: Material
    readonly LEGACY_BLAZE_POWDER: Material
    readonly LEGACY_MAGMA_CREAM: Material
    readonly LEGACY_BREWING_STAND_ITEM: Material
    readonly LEGACY_CAULDRON_ITEM: Material
    readonly LEGACY_EYE_OF_ENDER: Material
    readonly LEGACY_SPECKLED_MELON: Material
    readonly LEGACY_MONSTER_EGG: Material
    readonly LEGACY_EXP_BOTTLE: Material
    readonly LEGACY_FIREBALL: Material
    readonly LEGACY_BOOK_AND_QUILL: Material
    readonly LEGACY_WRITTEN_BOOK: Material
    readonly LEGACY_EMERALD: Material
    readonly LEGACY_ITEM_FRAME: Material
    readonly LEGACY_FLOWER_POT_ITEM: Material
    readonly LEGACY_CARROT_ITEM: Material
    readonly LEGACY_POTATO_ITEM: Material
    readonly LEGACY_BAKED_POTATO: Material
    readonly LEGACY_POISONOUS_POTATO: Material
    readonly LEGACY_EMPTY_MAP: Material
    readonly LEGACY_GOLDEN_CARROT: Material
    readonly LEGACY_SKULL_ITEM: Material
    readonly LEGACY_CARROT_STICK: Material
    readonly LEGACY_NETHER_STAR: Material
    readonly LEGACY_PUMPKIN_PIE: Material
    readonly LEGACY_FIREWORK: Material
    readonly LEGACY_FIREWORK_CHARGE: Material
    readonly LEGACY_ENCHANTED_BOOK: Material
    readonly LEGACY_REDSTONE_COMPARATOR: Material
    readonly LEGACY_NETHER_BRICK_ITEM: Material
    readonly LEGACY_QUARTZ: Material
    readonly LEGACY_EXPLOSIVE_MINECART: Material
    readonly LEGACY_HOPPER_MINECART: Material
    readonly LEGACY_PRISMARINE_SHARD: Material
    readonly LEGACY_PRISMARINE_CRYSTALS: Material
    readonly LEGACY_RABBIT: Material
    readonly LEGACY_COOKED_RABBIT: Material
    readonly LEGACY_RABBIT_STEW: Material
    readonly LEGACY_RABBIT_FOOT: Material
    readonly LEGACY_RABBIT_HIDE: Material
    readonly LEGACY_ARMOR_STAND: Material
    readonly LEGACY_IRON_BARDING: Material
    readonly LEGACY_GOLD_BARDING: Material
    readonly LEGACY_DIAMOND_BARDING: Material
    readonly LEGACY_LEASH: Material
    readonly LEGACY_NAME_TAG: Material
    readonly LEGACY_COMMAND_MINECART: Material
    readonly LEGACY_MUTTON: Material
    readonly LEGACY_COOKED_MUTTON: Material
    readonly LEGACY_BANNER: Material
    readonly LEGACY_END_CRYSTAL: Material
    readonly LEGACY_SPRUCE_DOOR_ITEM: Material
    readonly LEGACY_BIRCH_DOOR_ITEM: Material
    readonly LEGACY_JUNGLE_DOOR_ITEM: Material
    readonly LEGACY_ACACIA_DOOR_ITEM: Material
    readonly LEGACY_DARK_OAK_DOOR_ITEM: Material
    readonly LEGACY_CHORUS_FRUIT: Material
    readonly LEGACY_CHORUS_FRUIT_POPPED: Material
    readonly LEGACY_BEETROOT: Material
    readonly LEGACY_BEETROOT_SEEDS: Material
    readonly LEGACY_BEETROOT_SOUP: Material
    readonly LEGACY_DRAGONS_BREATH: Material
    readonly LEGACY_SPLASH_POTION: Material
    readonly LEGACY_SPECTRAL_ARROW: Material
    readonly LEGACY_TIPPED_ARROW: Material
    readonly LEGACY_LINGERING_POTION: Material
    readonly LEGACY_SHIELD: Material
    readonly LEGACY_ELYTRA: Material
    readonly LEGACY_BOAT_SPRUCE: Material
    readonly LEGACY_BOAT_BIRCH: Material
    readonly LEGACY_BOAT_JUNGLE: Material
    readonly LEGACY_BOAT_ACACIA: Material
    readonly LEGACY_BOAT_DARK_OAK: Material
    readonly LEGACY_TOTEM: Material
    readonly LEGACY_SHULKER_SHELL: Material
    readonly LEGACY_IRON_NUGGET: Material
    readonly LEGACY_KNOWLEDGE_BOOK: Material
    readonly LEGACY_GOLD_RECORD: Material
    readonly LEGACY_GREEN_RECORD: Material
    readonly LEGACY_RECORD_3: Material
    readonly LEGACY_RECORD_4: Material
    readonly LEGACY_RECORD_5: Material
    readonly LEGACY_RECORD_6: Material
    readonly LEGACY_RECORD_7: Material
    readonly LEGACY_RECORD_8: Material
    readonly LEGACY_RECORD_9: Material
    readonly LEGACY_RECORD_10: Material
    readonly LEGACY_RECORD_11: Material
    readonly LEGACY_RECORD_12: Material
    readonly LEGACY_PREFIX: string
    readonly data: Class<any>
    isLegacy(): boolean
    getMaxStackSize(): number
    hasGravity(): boolean
    getTranslationKey(): string
    isAir(): boolean
    createBlockData(arg0: string): BlockData
    createBlockData(): BlockData
    createBlockData(arg0: Consumer<BlockData>): BlockData
    getNewData(arg0: byte): MaterialData
    getMaterial(arg0: string, arg1: boolean): Material
    getMaterial(arg0: string): Material
    getMaxDurability(): short
    isOccluding(): boolean
    isItem(): boolean
    isBlock(): boolean
    isEnabledByFeature(arg0: World): boolean
    getDefaultAttributeModifiers(arg0: EquipmentSlot): Multimap<Attribute, AttributeModifier>
    getCreativeCategory(): CreativeCategory
    getItemTranslationKey(): string
    getBlockTranslationKey(): string
    getCraftingRemainingItem(): Material
    matchMaterial(arg0: string, arg1: boolean): Material
    matchMaterial(arg0: string): Material
    isFlammable(): boolean
    getBlastResistance(): number
    getHardness(): number
    getSlipperiness(): number
    isTransparent(): boolean
    isInteractable(): boolean
    getEquipmentSlot(): EquipmentSlot
    isBurnable(): boolean
    isSolid(): boolean
    isFuel(): boolean
    isEdible(): boolean
    values(): Material[]
    valueOf(arg0: string): Material
    isRecord(): boolean
    getKey(): NamespacedKey
    getId(): number
    getData(): Class<MaterialData>
}

declare class BlockPhysicsEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getChangedType(): Material
    getSourceBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface CommandSender implements Permissible {
    sendMessage(arg0: UUID, arg1: string[]): void
    sendMessage(arg0: UUID, arg1: string): void
    sendMessage(arg0: string[]): void
    sendMessage(arg0: string): void
    spigot(): CommandSenderSpigot
    getServer(): Server
    getName(): string
}

declare class PistonMoveReaction extends Enum<PistonMoveReaction> {
    readonly MOVE: PistonMoveReaction
    readonly BREAK: PistonMoveReaction
    readonly BLOCK: PistonMoveReaction
    readonly IGNORE: PistonMoveReaction
    readonly PUSH_ONLY: PistonMoveReaction
    getById(arg0: number): PistonMoveReaction
    values(): PistonMoveReaction[]
    valueOf(arg0: string): PistonMoveReaction
    getId(): number
}

declare class PlayerLoginEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getRealAddress(): InetAddress
    setKickMessage(arg0: string): void
    getHostname(): string
    getKickMessage(): string
    disallow(arg0: PlayerLoginEventResult, arg1: string): void
    allow(): void
    getAddress(): InetAddress
    getResult(): PlayerLoginEventResult
    setResult(arg0: PlayerLoginEventResult): void
    getHandlers(): HandlerList
}

declare class VillagerCareerChangeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getProfession(): VillagerProfession
    setProfession(arg0: VillagerProfession): void
    isCancelled(): boolean
    getHandlers(): HandlerList
    getReason(): VillagerCareerChangeEventChangeReason
    getEntity(): Villager
    getEntity(): Entity
}

interface Set implements Collection<E> {
    remove(arg0: Object): boolean
    size(): number
    equals(arg0: Object): boolean
    hashCode(): number
    copyOf(arg0: Collection<E>): Set<E>
    clear(): void
    isEmpty(): boolean
    add(arg0: E): boolean
    toArray(): Object[]
    toArray(arg0: T[]): T[]
    iterator(): Iterator<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): Set<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): Set<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E): Set<E>
    of(): Set<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): Set<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): Set<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): Set<E>
    of(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): Set<E>
    of(arg0: E[]): Set<E>
    of(arg0: E, arg1: E, arg2: E): Set<E>
    of(arg0: E): Set<E>
    of(arg0: E, arg1: E): Set<E>
    contains(arg0: Object): boolean
    spliterator(): Spliterator<E>
    addAll(arg0: Collection<E>): boolean
    removeAll(arg0: Collection<any>): boolean
    retainAll(arg0: Collection<any>): boolean
    containsAll(arg0: Collection<any>): boolean
}

declare class PrepareAnvilEvent extends PrepareInventoryResultEvent {
    getInventory(): AnvilInventory
    getInventory(): Inventory
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class PrepareItemCraftEvent extends InventoryEvent {
    getInventory(): CraftingInventory
    getInventory(): Inventory
    getHandlerList(): HandlerList
    isRepair(): boolean
    getRecipe(): Recipe
    getHandlers(): HandlerList
}

interface FeatureFlag implements Keyed {
    readonly VANILLA: FeatureFlag
    readonly BUNDLE: FeatureFlag
    readonly UPDATE_1_20: FeatureFlag
}

interface FishHook implements Projectile {
    setWaitTime(arg0: number, arg1: number): void
    setApplyLure(arg0: boolean): void
    getBiteChance(): number
    setBiteChance(arg0: number): void
    isInOpenWater(): boolean
    getMaxLureTime(): number
    setMinWaitTime(arg0: number): void
    getMaxWaitTime(): number
    setMaxWaitTime(arg0: number): void
    setMinLureTime(arg0: number): void
    getMinLureTime(): number
    getMinWaitTime(): number
    setMaxLureTime(arg0: number): void
    setLureTime(arg0: number, arg1: number): void
    getMinLureAngle(): number
    setMinLureAngle(arg0: number): void
    getMaxLureAngle(): number
    setMaxLureAngle(arg0: number): void
    setLureAngle(arg0: number, arg1: number): void
    getApplyLure(): boolean
    getHookedEntity(): Entity
    isRainInfluenced(): boolean
    pullHookedEntity(): boolean
    setSkyInfluenced(arg0: boolean): void
    setRainInfluenced(arg0: boolean): void
    setHookedEntity(arg0: Entity): void
    isSkyInfluenced(): boolean
    getState(): FishHookHookState
}

declare class EntityExplodeEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    blockList(): List<Block>
    getYield(): number
    setYield(arg0: number): void
    getLocation(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class BatToggleSleepEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isAwake(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface Registry implements Iterable<T> {
    readonly ADVANCEMENT: Registry<Advancement>
    readonly ART: Registry<Art>
    readonly ATTRIBUTE: Registry<Attribute>
    readonly BIOME: Registry<Biome>
    readonly BOSS_BARS: Registry<KeyedBossBar>
    readonly ENCHANTMENT: Registry<Enchantment>
    readonly ENTITY_TYPE: Registry<EntityType>
    readonly INSTRUMENT: Registry<MusicInstrument>
    readonly LOOT_TABLES: Registry<LootTables>
    readonly MATERIAL: Registry<Material>
    readonly STATISTIC: Registry<Statistic>
    readonly STRUCTURE: Registry<Structure>
    readonly STRUCTURE_TYPE: Registry<StructureType>
    readonly SOUNDS: Registry<Sound>
    readonly TRIM_MATERIAL: Registry<TrimMaterial>
    readonly TRIM_PATTERN: Registry<TrimPattern>
    readonly VILLAGER_PROFESSION: Registry<VillagerProfession>
    readonly VILLAGER_TYPE: Registry<VillagerType>
    readonly MEMORY_MODULE_TYPE: Registry<MemoryKey>
    readonly FLUID: Registry<Fluid>
    readonly FROG_VARIANT: Registry<FrogVariant>
    readonly GAME_EVENT: Registry<GameEvent>
    get(arg0: NamespacedKey): T
    stream(): Stream<T>
    match(arg0: string): T
}

declare class HandlerList {
    unregisterAll(arg0: Plugin): void
    unregisterAll(): void
    unregisterAll(arg0: Listener): void
    getRegisteredListeners(arg0: Plugin): ArrayList<RegisteredListener>
    getRegisteredListeners(): RegisteredListener[]
    bakeAll(): void
    registerAll(arg0: Collection<RegisteredListener>): void
    bake(): void
    getHandlerLists(): ArrayList<HandlerList>
    register(arg0: RegisteredListener): void
    unregister(arg0: RegisteredListener): void
    unregister(arg0: Plugin): void
    unregister(arg0: Listener): void
}

declare class Throwable implements Serializable {
    printStackTrace(arg0: PrintWriter): void
    printStackTrace(): void
    printStackTrace(arg0: PrintStream): void
    getStackTrace(): StackTraceElement[]
    fillInStackTrace(): Throwable
    getCause(): Throwable
    initCause(arg0: Throwable): Throwable
    toString(): string
    getMessage(): string
    getSuppressed(): Throwable[]
    getLocalizedMessage(): string
    setStackTrace(arg0: StackTraceElement[]): void
    addSuppressed(arg0: Throwable): void
}

declare class VehicleEnterEvent extends VehicleEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getEntered(): Entity
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface Tag implements Keyed {
    readonly REGISTRY_BLOCKS: string
    readonly WOOL: Tag<Material>
    readonly PLANKS: Tag<Material>
    readonly STONE_BRICKS: Tag<Material>
    readonly WOODEN_BUTTONS: Tag<Material>
    readonly STONE_BUTTONS: Tag<Material>
    readonly BUTTONS: Tag<Material>
    readonly WOOL_CARPETS: Tag<Material>
    readonly CARPETS: Tag<Material>
    readonly WOODEN_DOORS: Tag<Material>
    readonly WOODEN_STAIRS: Tag<Material>
    readonly WOODEN_SLABS: Tag<Material>
    readonly WOODEN_FENCES: Tag<Material>
    readonly PRESSURE_PLATES: Tag<Material>
    readonly WOODEN_PRESSURE_PLATES: Tag<Material>
    readonly STONE_PRESSURE_PLATES: Tag<Material>
    readonly WOODEN_TRAPDOORS: Tag<Material>
    readonly DOORS: Tag<Material>
    readonly SAPLINGS: Tag<Material>
    readonly LOGS_THAT_BURN: Tag<Material>
    readonly LOGS: Tag<Material>
    readonly DARK_OAK_LOGS: Tag<Material>
    readonly OAK_LOGS: Tag<Material>
    readonly BIRCH_LOGS: Tag<Material>
    readonly ACACIA_LOGS: Tag<Material>
    readonly CHERRY_LOGS: Tag<Material>
    readonly JUNGLE_LOGS: Tag<Material>
    readonly SPRUCE_LOGS: Tag<Material>
    readonly MANGROVE_LOGS: Tag<Material>
    readonly CRIMSON_STEMS: Tag<Material>
    readonly WARPED_STEMS: Tag<Material>
    readonly BAMBOO_BLOCKS: Tag<Material>
    readonly BANNERS: Tag<Material>
    readonly SAND: Tag<Material>
    readonly SMELTS_TO_GLASS: Tag<Material>
    readonly STAIRS: Tag<Material>
    readonly SLABS: Tag<Material>
    readonly WALLS: Tag<Material>
    readonly ANVIL: Tag<Material>
    readonly RAILS: Tag<Material>
    readonly LEAVES: Tag<Material>
    readonly TRAPDOORS: Tag<Material>
    readonly FLOWER_POTS: Tag<Material>
    readonly SMALL_FLOWERS: Tag<Material>
    readonly BEDS: Tag<Material>
    readonly FENCES: Tag<Material>
    readonly TALL_FLOWERS: Tag<Material>
    readonly FLOWERS: Tag<Material>
    readonly PIGLIN_REPELLENTS: Tag<Material>
    readonly GOLD_ORES: Tag<Material>
    readonly IRON_ORES: Tag<Material>
    readonly DIAMOND_ORES: Tag<Material>
    readonly REDSTONE_ORES: Tag<Material>
    readonly LAPIS_ORES: Tag<Material>
    readonly COAL_ORES: Tag<Material>
    readonly EMERALD_ORES: Tag<Material>
    readonly COPPER_ORES: Tag<Material>
    readonly CANDLES: Tag<Material>
    readonly DIRT: Tag<Material>
    readonly TERRACOTTA: Tag<Material>
    readonly COMPLETES_FIND_TREE_TUTORIAL: Tag<Material>
    readonly ENDERMAN_HOLDABLE: Tag<Material>
    readonly ICE: Tag<Material>
    readonly VALID_SPAWN: Tag<Material>
    readonly IMPERMEABLE: Tag<Material>
    readonly UNDERWATER_BONEMEALS: Tag<Material>
    readonly CORAL_BLOCKS: Tag<Material>
    readonly WALL_CORALS: Tag<Material>
    readonly CORAL_PLANTS: Tag<Material>
    readonly CORALS: Tag<Material>
    readonly BAMBOO_PLANTABLE_ON: Tag<Material>
    readonly STANDING_SIGNS: Tag<Material>
    readonly WALL_SIGNS: Tag<Material>
    readonly SIGNS: Tag<Material>
    readonly CEILING_HANGING_SIGNS: Tag<Material>
    readonly WALL_HANGING_SIGNS: Tag<Material>
    readonly ALL_HANGING_SIGNS: Tag<Material>
    readonly ALL_SIGNS: Tag<Material>
    readonly DRAGON_IMMUNE: Tag<Material>
    readonly DRAGON_TRANSPARENT: Tag<Material>
    readonly WITHER_IMMUNE: Tag<Material>
    readonly WITHER_SUMMON_BASE_BLOCKS: Tag<Material>
    readonly BEEHIVES: Tag<Material>
    readonly CROPS: Tag<Material>
    readonly BEE_GROWABLES: Tag<Material>
    readonly PORTALS: Tag<Material>
    readonly FIRE: Tag<Material>
    readonly NYLIUM: Tag<Material>
    readonly WART_BLOCKS: Tag<Material>
    readonly BEACON_BASE_BLOCKS: Tag<Material>
    readonly SOUL_SPEED_BLOCKS: Tag<Material>
    readonly WALL_POST_OVERRIDE: Tag<Material>
    readonly CLIMBABLE: Tag<Material>
    readonly FALL_DAMAGE_RESETTING: Tag<Material>
    readonly SHULKER_BOXES: Tag<Material>
    readonly HOGLIN_REPELLENTS: Tag<Material>
    readonly SOUL_FIRE_BASE_BLOCKS: Tag<Material>
    readonly STRIDER_WARM_BLOCKS: Tag<Material>
    readonly CAMPFIRES: Tag<Material>
    readonly GUARDED_BY_PIGLINS: Tag<Material>
    readonly PREVENT_MOB_SPAWNING_INSIDE: Tag<Material>
    readonly FENCE_GATES: Tag<Material>
    readonly UNSTABLE_BOTTOM_CENTER: Tag<Material>
    readonly MUSHROOM_GROW_BLOCK: Tag<Material>
    readonly INFINIBURN_OVERWORLD: Tag<Material>
    readonly INFINIBURN_NETHER: Tag<Material>
    readonly INFINIBURN_END: Tag<Material>
    readonly BASE_STONE_OVERWORLD: Tag<Material>
    readonly STONE_ORE_REPLACEABLES: Tag<Material>
    readonly DEEPSLATE_ORE_REPLACEABLES: Tag<Material>
    readonly BASE_STONE_NETHER: Tag<Material>
    readonly OVERWORLD_CARVER_REPLACEABLES: Tag<Material>
    readonly NETHER_CARVER_REPLACEABLES: Tag<Material>
    readonly CANDLE_CAKES: Tag<Material>
    readonly CAULDRONS: Tag<Material>
    readonly CRYSTAL_SOUND_BLOCKS: Tag<Material>
    readonly INSIDE_STEP_SOUND_BLOCKS: Tag<Material>
    readonly COMBINATION_STEP_SOUND_BLOCKS: Tag<Material>
    readonly OCCLUDES_VIBRATION_SIGNALS: Tag<Material>
    readonly DAMPENS_VIBRATIONS: Tag<Material>
    readonly DRIPSTONE_REPLACEABLE: Tag<Material>
    readonly CAVE_VINES: Tag<Material>
    readonly MOSS_REPLACEABLE: Tag<Material>
    readonly LUSH_GROUND_REPLACEABLE: Tag<Material>
    readonly AZALEA_ROOT_REPLACEABLE: Tag<Material>
    readonly SMALL_DRIPLEAF_PLACEABLE: Tag<Material>
    readonly BIG_DRIPLEAF_PLACEABLE: Tag<Material>
    readonly SNOW: Tag<Material>
    readonly MINEABLE_AXE: Tag<Material>
    readonly MINEABLE_HOE: Tag<Material>
    readonly MINEABLE_PICKAXE: Tag<Material>
    readonly MINEABLE_SHOVEL: Tag<Material>
    readonly SWORD_EFFICIENT: Tag<Material>
    readonly NEEDS_DIAMOND_TOOL: Tag<Material>
    readonly NEEDS_IRON_TOOL: Tag<Material>
    readonly NEEDS_STONE_TOOL: Tag<Material>
    readonly FEATURES_CANNOT_REPLACE: Tag<Material>
    readonly LAVA_POOL_STONE_CANNOT_REPLACE: Tag<Material>
    readonly GEODE_INVALID_BLOCKS: Tag<Material>
    readonly FROG_PREFER_JUMP_TO: Tag<Material>
    readonly SCULK_REPLACEABLE: Tag<Material>
    readonly SCULK_REPLACEABLE_WORLD_GEN: Tag<Material>
    readonly ANCIENT_CITY_REPLACEABLE: Tag<Material>
    readonly VIBRATION_RESONATORS: Tag<Material>
    readonly ANIMALS_SPAWNABLE_ON: Tag<Material>
    readonly AXOLOTLS_SPAWNABLE_ON: Tag<Material>
    readonly GOATS_SPAWNABLE_ON: Tag<Material>
    readonly MOOSHROOMS_SPAWNABLE_ON: Tag<Material>
    readonly PARROTS_SPAWNABLE_ON: Tag<Material>
    readonly POLAR_BEARS_SPAWNABLE_ON_ALTERNATE: Tag<Material>
    readonly RABBITS_SPAWNABLE_ON: Tag<Material>
    readonly FOXES_SPAWNABLE_ON: Tag<Material>
    readonly WOLVES_SPAWNABLE_ON: Tag<Material>
    readonly FROGS_SPAWNABLE_ON: Tag<Material>
    readonly AZALEA_GROWS_ON: Tag<Material>
    readonly CONVERTABLE_TO_MUD: Tag<Material>
    readonly MANGROVE_LOGS_CAN_GROW_THROUGH: Tag<Material>
    readonly MANGROVE_ROOTS_CAN_GROW_THROUGH: Tag<Material>
    readonly DEAD_BUSH_MAY_PLACE_ON: Tag<Material>
    readonly SNAPS_GOAT_HORN: Tag<Material>
    readonly REPLACEABLE_BY_TREES: Tag<Material>
    readonly SNOW_LAYER_CANNOT_SURVIVE_ON: Tag<Material>
    readonly SNOW_LAYER_CAN_SURVIVE_ON: Tag<Material>
    readonly INVALID_SPAWN_INSIDE: Tag<Material>
    readonly SNIFFER_DIGGABLE_BLOCK: Tag<Material>
    readonly SNIFFER_EGG_HATCH_BOOST: Tag<Material>
    readonly TRAIL_RUINS_REPLACEABLE: Tag<Material>
    readonly REPLACEABLE: Tag<Material>
    readonly ENCHANTMENT_POWER_PROVIDER: Tag<Material>
    readonly ENCHANTMENT_POWER_TRANSMITTER: Tag<Material>
    readonly MAINTAINS_FARMLAND: Tag<Material>
    readonly REGISTRY_ITEMS: string
    readonly ITEMS_PIGLIN_LOVED: Tag<Material>
    readonly IGNORED_BY_PIGLIN_BABIES: Tag<Material>
    readonly PIGLIN_FOOD: Tag<Material>
    readonly FOX_FOOD: Tag<Material>
    readonly ITEMS_BANNERS: Tag<Material>
    readonly ITEMS_BOATS: Tag<Material>
    readonly ITEMS_CHEST_BOATS: Tag<Material>
    readonly ITEMS_FISHES: Tag<Material>
    readonly ITEMS_MUSIC_DISCS: Tag<Material>
    readonly ITEMS_CREEPER_DROP_MUSIC_DISCS: Tag<Material>
    readonly ITEMS_COALS: Tag<Material>
    readonly ITEMS_ARROWS: Tag<Material>
    readonly ITEMS_LECTERN_BOOKS: Tag<Material>
    readonly ITEMS_BOOKSHELF_BOOKS: Tag<Material>
    readonly ITEMS_BEACON_PAYMENT_ITEMS: Tag<Material>
    readonly ITEMS_STONE_TOOL_MATERIALS: Tag<Material>
    readonly ITEMS_FURNACE_MATERIALS: Tag<Material>
    readonly ITEMS_COMPASSES: Tag<Material>
    readonly ITEMS_HANGING_SIGNS: Tag<Material>
    readonly ITEMS_CREEPER_IGNITERS: Tag<Material>
    readonly ITEMS_NOTE_BLOCK_TOP_INSTRUMENTS: Tag<Material>
    readonly ITEMS_TRIMMABLE_ARMOR: Tag<Material>
    readonly ITEMS_TRIM_MATERIALS: Tag<Material>
    readonly ITEMS_TRIM_TEMPLATES: Tag<Material>
    readonly ITEMS_SNIFFER_FOOD: Tag<Material>
    readonly ITEMS_DECORATED_POT_SHERDS: Tag<Material>
    readonly ITEMS_DECORATED_POT_INGREDIENTS: Tag<Material>
    readonly ITEMS_SWORDS: Tag<Material>
    readonly ITEMS_AXES: Tag<Material>
    readonly ITEMS_HOES: Tag<Material>
    readonly ITEMS_PICKAXES: Tag<Material>
    readonly ITEMS_SHOVELS: Tag<Material>
    readonly ITEMS_TOOLS: Tag<Material>
    readonly ITEMS_BREAKS_DECORATED_POTS: Tag<Material>
    readonly ITEMS_VILLAGER_PLANTABLE_SEEDS: Tag<Material>
    readonly FREEZE_IMMUNE_WEARABLES: Tag<Material>
    readonly AXOLOTL_TEMPT_ITEMS: Tag<Material>
    readonly CLUSTER_MAX_HARVESTABLES: Tag<Material>
    readonly REGISTRY_FLUIDS: string
    readonly FLUIDS_LAVA: Tag<Fluid>
    readonly FLUIDS_WATER: Tag<Fluid>
    readonly REGISTRY_ENTITY_TYPES: string
    readonly ENTITY_TYPES_SKELETONS: Tag<EntityType>
    readonly ENTITY_TYPES_RAIDERS: Tag<EntityType>
    readonly ENTITY_TYPES_BEEHIVE_INHABITORS: Tag<EntityType>
    readonly ENTITY_TYPES_ARROWS: Tag<EntityType>
    readonly ENTITY_TYPES_IMPACT_PROJECTILES: Tag<EntityType>
    readonly ENTITY_TYPES_POWDER_SNOW_WALKABLE_MOBS: Tag<EntityType>
    readonly ENTITY_TYPES_AXOLOTL_ALWAYS_HOSTILES: Tag<EntityType>
    readonly ENTITY_TYPES_AXOLOTL_HUNT_TARGETS: Tag<EntityType>
    readonly ENTITY_TYPES_FREEZE_IMMUNE_ENTITY_TYPES: Tag<EntityType>
    readonly ENTITY_TYPES_FREEZE_HURTS_EXTRA_TYPES: Tag<EntityType>
    readonly ENTITY_TYPES_FROG_FOOD: Tag<EntityType>
    readonly ENTITY_TYPES_FALL_DAMAGE_IMMUNE: Tag<EntityType>
    readonly ENTITY_TYPES_DISMOUNTS_UNDERWATER: Tag<EntityType>
    getValues(): Set<T>
    isTagged(arg0: T): boolean
}

declare class EntityToggleGlideEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    isGliding(): boolean
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PiglinBarterEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getOutcome(): List<ItemStack>
    isCancelled(): boolean
    getHandlers(): HandlerList
    getInput(): ItemStack
    getEntity(): Entity
    getEntity(): Piglin
}

declare class SignChangeEvent extends BlockEvent implements Cancellable {
    getLines(): string[]
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getLine(arg0: number): string
    getPlayer(): Player
    isCancelled(): boolean
    getHandlers(): HandlerList
    getSide(): Side
    setLine(arg0: number, arg1: string): void
}

declare class LootContext {
    readonly DEFAULT_LOOT_MODIFIER: number
    getKiller(): HumanEntity
    getLootedEntity(): Entity
    getLootingModifier(): number
    getLuck(): number
    getLocation(): Location
}

declare class BaseComponent {
    getColor(): ChatColor
    retain(arg0: ComponentBuilderFormatRetention): void
    toLegacyText(arg0: BaseComponent[]): string
    toLegacyText(): string
    isReset(): boolean
    duplicateWithoutFormatting(): BaseComponent
    getColorRaw(): ChatColor
    setHoverEvent(arg0: HoverEvent): void
    setStrikethrough(arg0: Boolean): void
    setClickEvent(arg0: ClickEvent): void
    isUnderlined(): boolean
    isStrikethrough(): boolean
    isObfuscated(): boolean
    isItalicRaw(): Boolean
    toPlainText(arg0: BaseComponent[]): string
    toPlainText(): string
    setUnderlined(arg0: Boolean): void
    hasFormatting(): boolean
    copyFormatting(arg0: BaseComponent): void
    copyFormatting(arg0: BaseComponent, arg1: ComponentBuilderFormatRetention, arg2: boolean): void
    copyFormatting(arg0: BaseComponent, arg1: boolean): void
    setObfuscated(arg0: Boolean): void
    setInsertion(arg0: string): void
    isObfuscatedRaw(): Boolean
    isUnderlinedRaw(): Boolean
    isStrikethroughRaw(): Boolean
    getClickEvent(): ClickEvent
    getInsertion(): string
    getHoverEvent(): HoverEvent
    getFont(): string
    getFontRaw(): string
    isBold(): boolean
    isBoldRaw(): Boolean
    isItalic(): boolean
    addExtra(arg0: BaseComponent): void
    addExtra(arg0: string): void
    setFont(arg0: string): void
    setBold(arg0: Boolean): void
    setItalic(arg0: Boolean): void
    setReset(arg0: boolean): void
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    duplicate(): BaseComponent
    setColor(arg0: ChatColor): void
    setExtra(arg0: List<BaseComponent>): void
    getExtra(): List<BaseComponent>
}

declare class EntityChangeBlockEvent extends EntityEvent implements Cancellable {
    getTo(): Material
    setCancelled(arg0: boolean): void
    getBlockData(): BlockData
    getHandlerList(): HandlerList
    getBlock(): Block
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface BiConsumer {
    accept(arg0: T, arg1: U): void
    andThen(arg0: BiConsumer<T, U>): BiConsumer<T, U>
}

declare class CookingRecipe implements Recipe, Keyed {
    setCategory(arg0: CookingBookCategory): void
    getCategory(): CookingBookCategory
    setGroup(arg0: string): void
    getCookingTime(): number
    getExperience(): number
    getGroup(): string
    setExperience(arg0: number): void
    getInputChoice(): RecipeChoice
    setCookingTime(arg0: number): void
    setInputChoice(arg0: RecipeChoice): T
    getKey(): NamespacedKey
    getResult(): ItemStack
    setInput(arg0: Material): CookingRecipe
    getInput(): ItemStack
}

interface MapEntry {
    equals(arg0: Object): boolean
    hashCode(): number
    copyOf(arg0: MapEntry<K, V>): MapEntry<K, V>
    getValue(): V
    getKey(): K
    comparingByKey(arg0: Comparator<K>): Comparator<MapEntry<K, V>>
    comparingByKey(): Comparator<MapEntry<K, V>>
    setValue(arg0: V): V
    comparingByValue(): Comparator<MapEntry<K, V>>
    comparingByValue(arg0: Comparator<V>): Comparator<MapEntry<K, V>>
}

declare class VehicleEvent extends MinecraftEvent {
    getVehicle(): Vehicle
}

declare class MemoryKey implements Keyed {
    readonly HOME: MemoryKey<Location>
    readonly POTENTIAL_JOB_SITE: MemoryKey<Location>
    readonly JOB_SITE: MemoryKey<Location>
    readonly MEETING_POINT: MemoryKey<Location>
    readonly GOLEM_DETECTED_RECENTLY: MemoryKey<Boolean>
    readonly LAST_SLEPT: MemoryKey<Long>
    readonly LAST_WOKEN: MemoryKey<Long>
    readonly LAST_WORKED_AT_POI: MemoryKey<Long>
    readonly UNIVERSAL_ANGER: MemoryKey<Boolean>
    readonly ANGRY_AT: MemoryKey<UUID>
    readonly ADMIRING_ITEM: MemoryKey<Boolean>
    readonly ADMIRING_DISABLED: MemoryKey<Boolean>
    readonly HUNTED_RECENTLY: MemoryKey<Boolean>
    readonly PLAY_DEAD_TICKS: MemoryKey<Integer>
    readonly TEMPTATION_COOLDOWN_TICKS: MemoryKey<Integer>
    readonly IS_TEMPTED: MemoryKey<Boolean>
    readonly LONG_JUMP_COOLING_DOWN: MemoryKey<Integer>
    readonly HAS_HUNTING_COOLDOWN: MemoryKey<Boolean>
    readonly RAM_COOLDOWN_TICKS: MemoryKey<Integer>
    readonly LIKED_PLAYER: MemoryKey<UUID>
    readonly LIKED_NOTEBLOCK_POSITION: MemoryKey<Location>
    readonly LIKED_NOTEBLOCK_COOLDOWN_TICKS: MemoryKey<Integer>
    readonly ITEM_PICKUP_COOLDOWN_TICKS: MemoryKey<Integer>
    readonly SNIFFER_EXPLORED_POSITIONS: MemoryKey<Location>
    getByKey(arg0: NamespacedKey): MemoryKey
    getMemoryClass(): Class<T>
    values(): Set<MemoryKey>
    getKey(): NamespacedKey
}

declare class EntityTeleportEvent extends EntityEvent implements Cancellable {
    getTo(): Location
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setTo(arg0: Location): void
    setFrom(arg0: Location): void
    getFrom(): Location
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class PlayerResourcePackStatusEventStatus extends Enum<PlayerResourcePackStatusEventStatus> {
    readonly SUCCESSFULLY_LOADED: PlayerResourcePackStatusEventStatus
    readonly DECLINED: PlayerResourcePackStatusEventStatus
    readonly FAILED_DOWNLOAD: PlayerResourcePackStatusEventStatus
    readonly ACCEPTED: PlayerResourcePackStatusEventStatus
    values(): PlayerResourcePackStatusEventStatus[]
    valueOf(arg0: string): PlayerResourcePackStatusEventStatus
}

declare class EntityRegainHealthEvent extends EntityEvent implements Cancellable {
    setAmount(arg0: number): void
    getAmount(): number
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRegainReason(): EntityRegainHealthEventRegainReason
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityTargetEventTargetReason extends Enum<EntityTargetEventTargetReason> {
    readonly TARGET_DIED: EntityTargetEventTargetReason
    readonly CLOSEST_PLAYER: EntityTargetEventTargetReason
    readonly TARGET_ATTACKED_ENTITY: EntityTargetEventTargetReason
    readonly PIG_ZOMBIE_TARGET: EntityTargetEventTargetReason
    readonly FORGOT_TARGET: EntityTargetEventTargetReason
    readonly TARGET_ATTACKED_OWNER: EntityTargetEventTargetReason
    readonly OWNER_ATTACKED_TARGET: EntityTargetEventTargetReason
    readonly RANDOM_TARGET: EntityTargetEventTargetReason
    readonly DEFEND_VILLAGE: EntityTargetEventTargetReason
    readonly TARGET_ATTACKED_NEARBY_ENTITY: EntityTargetEventTargetReason
    readonly REINFORCEMENT_TARGET: EntityTargetEventTargetReason
    readonly COLLISION: EntityTargetEventTargetReason
    readonly CUSTOM: EntityTargetEventTargetReason
    readonly CLOSEST_ENTITY: EntityTargetEventTargetReason
    readonly FOLLOW_LEADER: EntityTargetEventTargetReason
    readonly TEMPT: EntityTargetEventTargetReason
    readonly UNKNOWN: EntityTargetEventTargetReason
    values(): EntityTargetEventTargetReason[]
    valueOf(arg0: string): EntityTargetEventTargetReason
}

declare class File implements Serializable, Comparable<File> {
    readonly separatorChar: char
    readonly separator: string
    readonly pathSeparatorChar: char
    readonly pathSeparator: string
    getName(): string
    equals(arg0: Object): boolean
    length(): number
    toString(): string
    hashCode(): number
    isHidden(): boolean
    compareTo(arg0: File): number
    compareTo(arg0: Object): number
    list(): string[]
    list(arg0: FilenameFilter): string[]
    isAbsolute(): boolean
    getParent(): string
    delete(): boolean
    setReadOnly(): boolean
    canRead(): boolean
    getPath(): string
    toURI(): URI
    toURL(): URL
    getAbsolutePath(): string
    exists(): boolean
    createNewFile(): boolean
    renameTo(arg0: File): boolean
    isDirectory(): boolean
    getCanonicalPath(): string
    getAbsoluteFile(): File
    mkdir(): boolean
    getCanonicalFile(): File
    getParentFile(): File
    mkdirs(): boolean
    setWritable(arg0: boolean): boolean
    setWritable(arg0: boolean, arg1: boolean): boolean
    setReadable(arg0: boolean, arg1: boolean): boolean
    setReadable(arg0: boolean): boolean
    setExecutable(arg0: boolean, arg1: boolean): boolean
    setExecutable(arg0: boolean): boolean
    listRoots(): File[]
    createTempFile(arg0: string, arg1: string): File
    createTempFile(arg0: string, arg1: string, arg2: File): File
    canWrite(): boolean
    isFile(): boolean
    lastModified(): number
    deleteOnExit(): void
    listFiles(arg0: FileFilter): File[]
    listFiles(arg0: FilenameFilter): File[]
    listFiles(): File[]
    setLastModified(arg0: number): boolean
    canExecute(): boolean
    getTotalSpace(): number
    getFreeSpace(): number
    getUsableSpace(): number
    toPath(): Path
}

declare class PlayerExpCooldownChangeEventChangeReason extends Enum<PlayerExpCooldownChangeEventChangeReason> {
    readonly PICKUP_ORB: PlayerExpCooldownChangeEventChangeReason
    readonly PLUGIN: PlayerExpCooldownChangeEventChangeReason
    values(): PlayerExpCooldownChangeEventChangeReason[]
    valueOf(arg0: string): PlayerExpCooldownChangeEventChangeReason
}

declare class Pose extends Enum<Pose> {
    readonly STANDING: Pose
    readonly FALL_FLYING: Pose
    readonly SLEEPING: Pose
    readonly SWIMMING: Pose
    readonly SPIN_ATTACK: Pose
    readonly SNEAKING: Pose
    readonly LONG_JUMPING: Pose
    readonly DYING: Pose
    readonly CROAKING: Pose
    readonly USING_TONGUE: Pose
    readonly SITTING: Pose
    readonly ROARING: Pose
    readonly SNIFFING: Pose
    readonly EMERGING: Pose
    readonly DIGGING: Pose
    values(): Pose[]
    valueOf(arg0: string): Pose
}

declare class StructureType implements Keyed {
    readonly BURIED_TREASURE: StructureType
    readonly DESERT_PYRAMID: StructureType
    readonly END_CITY: StructureType
    readonly FORTRESS: StructureType
    readonly IGLOO: StructureType
    readonly JIGSAW: StructureType
    readonly JUNGLE_TEMPLE: StructureType
    readonly MINESHAFT: StructureType
    readonly NETHER_FOSSIL: StructureType
    readonly OCEAN_MONUMENT: StructureType
    readonly OCEAN_RUIN: StructureType
    readonly RUINED_PORTAL: StructureType
    readonly SHIPWRECK: StructureType
    readonly STRONGHOLD: StructureType
    readonly SWAMP_HUT: StructureType
    readonly WOODLAND_MANSION: StructureType
}

declare class BlockShearEntityEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getTool(): ItemStack
    isCancelled(): boolean
    getHandlers(): HandlerList
    getEntity(): Entity
}

interface SoundGroup {
    getPitch(): number
    getVolume(): number
    getPlaceSound(): Sound
    getHitSound(): Sound
    getStepSound(): Sound
    getFallSound(): Sound
    getBreakSound(): Sound
}

declare class WorldSpigot {
    strikeLightning(arg0: Location, arg1: boolean): LightningStrike
    strikeLightningEffect(arg0: Location, arg1: boolean): LightningStrike
}

interface TemporalAdjuster {
    adjustInto(arg0: Temporal): Temporal
}

interface Egg implements ThrowableProjectile {
}

interface Firework implements Projectile {
    getLife(): number
    detonate(): void
    setLife(arg0: number): boolean
    getMaxLife(): number
    setMaxLife(arg0: number): boolean
    setAttachedTo(arg0: LivingEntity): boolean
    getFireworkMeta(): FireworkMeta
    setFireworkMeta(arg0: FireworkMeta): void
    setShotAtAngle(arg0: boolean): void
    isDetonated(): boolean
    isShotAtAngle(): boolean
    getAttachedTo(): LivingEntity
}

declare class AttributeModifier implements ConfigurationSerializable {
    serialize(): Map<string, Object>
    getAmount(): number
    getUniqueId(): UUID
    getOperation(): AttributeModifierOperation
    getName(): string
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    getSlot(): EquipmentSlot
    deserialize(arg0: Map<string, Object>): AttributeModifier
}

interface KeyedBossBar implements BossBar, Keyed {
}

declare class EntityEffect extends Enum<EntityEffect> {
    readonly ARROW_PARTICLES: EntityEffect
    readonly RABBIT_JUMP: EntityEffect
    readonly HURT: EntityEffect
    readonly DEATH: EntityEffect
    readonly WOLF_SMOKE: EntityEffect
    readonly WOLF_HEARTS: EntityEffect
    readonly WOLF_SHAKE: EntityEffect
    readonly SHEEP_EAT: EntityEffect
    readonly IRON_GOLEM_ROSE: EntityEffect
    readonly VILLAGER_HEART: EntityEffect
    readonly VILLAGER_ANGRY: EntityEffect
    readonly VILLAGER_HAPPY: EntityEffect
    readonly WITCH_MAGIC: EntityEffect
    readonly ZOMBIE_TRANSFORM: EntityEffect
    readonly FIREWORK_EXPLODE: EntityEffect
    readonly LOVE_HEARTS: EntityEffect
    readonly SQUID_ROTATE: EntityEffect
    readonly ENTITY_POOF: EntityEffect
    readonly GUARDIAN_TARGET: EntityEffect
    readonly SHIELD_BLOCK: EntityEffect
    readonly SHIELD_BREAK: EntityEffect
    readonly ARMOR_STAND_HIT: EntityEffect
    readonly THORNS_HURT: EntityEffect
    readonly IRON_GOLEM_SHEATH: EntityEffect
    readonly TOTEM_RESURRECT: EntityEffect
    readonly HURT_DROWN: EntityEffect
    readonly HURT_EXPLOSION: EntityEffect
    readonly DOLPHIN_FED: EntityEffect
    readonly RAVAGER_STUNNED: EntityEffect
    readonly CAT_TAME_FAIL: EntityEffect
    readonly CAT_TAME_SUCCESS: EntityEffect
    readonly VILLAGER_SPLASH: EntityEffect
    readonly PLAYER_BAD_OMEN_RAID: EntityEffect
    readonly HURT_BERRY_BUSH: EntityEffect
    readonly FOX_CHEW: EntityEffect
    readonly TELEPORT_ENDER: EntityEffect
    readonly BREAK_EQUIPMENT_MAIN_HAND: EntityEffect
    readonly BREAK_EQUIPMENT_OFF_HAND: EntityEffect
    readonly BREAK_EQUIPMENT_HELMET: EntityEffect
    readonly BREAK_EQUIPMENT_CHESTPLATE: EntityEffect
    readonly BREAK_EQUIPMENT_LEGGINGS: EntityEffect
    readonly BREAK_EQUIPMENT_BOOTS: EntityEffect
    getApplicable(): Class<Entity>
    values(): EntityEffect[]
    valueOf(arg0: string): EntityEffect
    getData(): byte
}

declare class TradeSelectEvent extends InventoryInteractEvent {
    getInventory(): MerchantInventory
    getInventory(): Inventory
    getHandlerList(): HandlerList
    getMerchant(): Merchant
    getIndex(): number
    getHandlers(): HandlerList
}

interface ChunkSnapshot {
    getZ(): number
    getX(): number
    getBiome(arg0: number, arg1: number, arg2: number): Biome
    getBiome(arg0: number, arg1: number): Biome
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData
    getWorldName(): string
    getHighestBlockYAt(arg0: number, arg1: number): number
    isSectionEmpty(arg0: number): boolean
    getCaptureFullTime(): number
    getBlockType(arg0: number, arg1: number, arg2: number): Material
    getBlockSkyLight(arg0: number, arg1: number, arg2: number): number
    contains(arg0: Biome): boolean
    contains(arg0: BlockData): boolean
    getData(arg0: number, arg1: number, arg2: number): number
    getBlockEmittedLight(arg0: number, arg1: number, arg2: number): number
    getRawBiomeTemperature(arg0: number, arg1: number): number
    getRawBiomeTemperature(arg0: number, arg1: number, arg2: number): number
}

declare class URL implements Serializable {
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    of(arg0: URI, arg1: URLStreamHandler): URL
    openStream(): InputStream
    getHost(): string
    getPort(): number
    getDefaultPort(): number
    sameFile(arg0: URL): boolean
    toExternalForm(): string
    openConnection(): URLConnection
    openConnection(arg0: Proxy): URLConnection
    getContent(): Object
    getContent(arg0: Class[]): Object
    getProtocol(): string
    getAuthority(): string
    getFile(): string
    getRef(): string
    getQuery(): string
    getPath(): string
    getUserInfo(): string
    toURI(): URI
    setURLStreamHandlerFactory(arg0: URLStreamHandlerFactory): void
}

declare class Statistic extends Enum<Statistic> implements Keyed {
    readonly DAMAGE_DEALT: Statistic
    readonly DAMAGE_TAKEN: Statistic
    readonly DEATHS: Statistic
    readonly MOB_KILLS: Statistic
    readonly PLAYER_KILLS: Statistic
    readonly FISH_CAUGHT: Statistic
    readonly ANIMALS_BRED: Statistic
    readonly LEAVE_GAME: Statistic
    readonly JUMP: Statistic
    readonly DROP_COUNT: Statistic
    readonly DROP: Statistic
    readonly PICKUP: Statistic
    readonly PLAY_ONE_MINUTE: Statistic
    readonly TOTAL_WORLD_TIME: Statistic
    readonly WALK_ONE_CM: Statistic
    readonly WALK_ON_WATER_ONE_CM: Statistic
    readonly FALL_ONE_CM: Statistic
    readonly SNEAK_TIME: Statistic
    readonly CLIMB_ONE_CM: Statistic
    readonly FLY_ONE_CM: Statistic
    readonly WALK_UNDER_WATER_ONE_CM: Statistic
    readonly MINECART_ONE_CM: Statistic
    readonly BOAT_ONE_CM: Statistic
    readonly PIG_ONE_CM: Statistic
    readonly HORSE_ONE_CM: Statistic
    readonly SPRINT_ONE_CM: Statistic
    readonly CROUCH_ONE_CM: Statistic
    readonly AVIATE_ONE_CM: Statistic
    readonly MINE_BLOCK: Statistic
    readonly USE_ITEM: Statistic
    readonly BREAK_ITEM: Statistic
    readonly CRAFT_ITEM: Statistic
    readonly KILL_ENTITY: Statistic
    readonly ENTITY_KILLED_BY: Statistic
    readonly TIME_SINCE_DEATH: Statistic
    readonly TALKED_TO_VILLAGER: Statistic
    readonly TRADED_WITH_VILLAGER: Statistic
    readonly CAKE_SLICES_EATEN: Statistic
    readonly CAULDRON_FILLED: Statistic
    readonly CAULDRON_USED: Statistic
    readonly ARMOR_CLEANED: Statistic
    readonly BANNER_CLEANED: Statistic
    readonly BREWINGSTAND_INTERACTION: Statistic
    readonly BEACON_INTERACTION: Statistic
    readonly DROPPER_INSPECTED: Statistic
    readonly HOPPER_INSPECTED: Statistic
    readonly DISPENSER_INSPECTED: Statistic
    readonly NOTEBLOCK_PLAYED: Statistic
    readonly NOTEBLOCK_TUNED: Statistic
    readonly FLOWER_POTTED: Statistic
    readonly TRAPPED_CHEST_TRIGGERED: Statistic
    readonly ENDERCHEST_OPENED: Statistic
    readonly ITEM_ENCHANTED: Statistic
    readonly RECORD_PLAYED: Statistic
    readonly FURNACE_INTERACTION: Statistic
    readonly CRAFTING_TABLE_INTERACTION: Statistic
    readonly CHEST_OPENED: Statistic
    readonly SLEEP_IN_BED: Statistic
    readonly SHULKER_BOX_OPENED: Statistic
    readonly TIME_SINCE_REST: Statistic
    readonly SWIM_ONE_CM: Statistic
    readonly DAMAGE_DEALT_ABSORBED: Statistic
    readonly DAMAGE_DEALT_RESISTED: Statistic
    readonly DAMAGE_BLOCKED_BY_SHIELD: Statistic
    readonly DAMAGE_ABSORBED: Statistic
    readonly DAMAGE_RESISTED: Statistic
    readonly CLEAN_SHULKER_BOX: Statistic
    readonly OPEN_BARREL: Statistic
    readonly INTERACT_WITH_BLAST_FURNACE: Statistic
    readonly INTERACT_WITH_SMOKER: Statistic
    readonly INTERACT_WITH_LECTERN: Statistic
    readonly INTERACT_WITH_CAMPFIRE: Statistic
    readonly INTERACT_WITH_CARTOGRAPHY_TABLE: Statistic
    readonly INTERACT_WITH_LOOM: Statistic
    readonly INTERACT_WITH_STONECUTTER: Statistic
    readonly BELL_RING: Statistic
    readonly RAID_TRIGGER: Statistic
    readonly RAID_WIN: Statistic
    readonly INTERACT_WITH_ANVIL: Statistic
    readonly INTERACT_WITH_GRINDSTONE: Statistic
    readonly TARGET_HIT: Statistic
    readonly INTERACT_WITH_SMITHING_TABLE: Statistic
    readonly STRIDER_ONE_CM: Statistic
    isBlock(): boolean
    isSubstatistic(): boolean
    values(): Statistic[]
    valueOf(arg0: string): Statistic
    getKey(): NamespacedKey
    getType(): StatisticType
}

interface Projectile implements Entity {
    setShooter(arg0: ProjectileSource): void
    doesBounce(): boolean
    setBounce(arg0: boolean): void
    getShooter(): ProjectileSource
}

declare class SpellcasterSpell extends Enum<SpellcasterSpell> {
    readonly NONE: SpellcasterSpell
    readonly SUMMON_VEX: SpellcasterSpell
    readonly FANGS: SpellcasterSpell
    readonly WOLOLO: SpellcasterSpell
    readonly DISAPPEAR: SpellcasterSpell
    readonly BLINDNESS: SpellcasterSpell
    values(): SpellcasterSpell[]
    valueOf(arg0: string): SpellcasterSpell
}

interface BlockChangeDelegate {
    getHeight(): number
    getBlockData(arg0: number, arg1: number, arg2: number): BlockData
    setBlockData(arg0: number, arg1: number, arg2: number, arg3: BlockData): boolean
    isEmpty(arg0: number, arg1: number, arg2: number): boolean
}

declare class BlockFace extends Enum<BlockFace> {
    readonly NORTH: BlockFace
    readonly EAST: BlockFace
    readonly SOUTH: BlockFace
    readonly WEST: BlockFace
    readonly UP: BlockFace
    readonly DOWN: BlockFace
    readonly NORTH_EAST: BlockFace
    readonly NORTH_WEST: BlockFace
    readonly SOUTH_EAST: BlockFace
    readonly SOUTH_WEST: BlockFace
    readonly WEST_NORTH_WEST: BlockFace
    readonly NORTH_NORTH_WEST: BlockFace
    readonly NORTH_NORTH_EAST: BlockFace
    readonly EAST_NORTH_EAST: BlockFace
    readonly EAST_SOUTH_EAST: BlockFace
    readonly SOUTH_SOUTH_EAST: BlockFace
    readonly SOUTH_SOUTH_WEST: BlockFace
    readonly WEST_SOUTH_WEST: BlockFace
    readonly SELF: BlockFace
    getDirection(): Vector
    isCartesian(): boolean
    getOppositeFace(): BlockFace
    getModX(): number
    getModY(): number
    getModZ(): number
    values(): BlockFace[]
    valueOf(arg0: string): BlockFace
}

declare class WorldInitEvent extends WorldEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

interface Inventory implements Iterable<ItemStack> {
    addItem(arg0: ItemStack[]): HashMap<Integer, ItemStack>
    getMaxStackSize(): number
    firstEmpty(): number
    getHolder(): InventoryHolder
    getViewers(): List<HumanEntity>
    setMaxStackSize(arg0: number): void
    setItem(arg0: number, arg1: ItemStack): void
    getStorageContents(): ItemStack[]
    containsAtLeast(arg0: ItemStack, arg1: number): boolean
    setStorageContents(arg0: ItemStack[]): void
    setContents(arg0: ItemStack[]): void
    remove(arg0: ItemStack): void
    remove(arg0: Material): void
    clear(): void
    clear(arg0: number): void
    isEmpty(): boolean
    iterator(): Iterator
    iterator(arg0: number): ListIterator<ItemStack>
    iterator(): ListIterator<ItemStack>
    contains(arg0: ItemStack): boolean
    contains(arg0: Material): boolean
    contains(arg0: Material, arg1: number): boolean
    contains(arg0: ItemStack, arg1: number): boolean
    first(arg0: ItemStack): number
    first(arg0: Material): number
    getLocation(): Location
    getType(): InventoryType
    getSize(): number
    all(arg0: Material): HashMap<Integer, ItemStack>
    all(arg0: ItemStack): HashMap<Integer, ItemStack>
    getItem(arg0: number): ItemStack
    getContents(): ItemStack[]
    removeItem(arg0: ItemStack[]): HashMap<Integer, ItemStack>
}

interface PlayerProfile implements Cloneable, ConfigurationSerializable {
    isComplete(): boolean
    getUniqueId(): UUID
    getTextures(): PlayerTextures
    setTextures(arg0: PlayerTextures): void
    getName(): string
    clone(): PlayerProfile
    clone(): Object
    update(): CompletableFuture<PlayerProfile>
}

declare class PlayerRiptideEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getItem(): ItemStack
    getHandlers(): HandlerList
}

declare class Difficulty extends Enum<Difficulty> {
    readonly PEACEFUL: Difficulty
    readonly EASY: Difficulty
    readonly NORMAL: Difficulty
    readonly HARD: Difficulty
    getByValue(arg0: number): Difficulty
    values(): Difficulty[]
    valueOf(arg0: string): Difficulty
    getValue(): number
}

interface PlayerInventory implements Inventory {
    getExtraContents(): ItemStack[]
    setArmorContents(arg0: ItemStack[]): void
    setExtraContents(arg0: ItemStack[]): void
    getChestplate(): ItemStack
    setLeggings(arg0: ItemStack): void
    getLeggings(): ItemStack
    getItemInMainHand(): ItemStack
    setItemInOffHand(arg0: ItemStack): void
    setHeldItemSlot(arg0: number): void
    setChestplate(arg0: ItemStack): void
    getHeldItemSlot(): number
    getArmorContents(): ItemStack[]
    getItemInOffHand(): ItemStack
    setItemInMainHand(arg0: ItemStack): void
    getItemInHand(): ItemStack
    setItemInHand(arg0: ItemStack): void
    getHolder(): InventoryHolder
    getHolder(): HumanEntity
    setItem(arg0: number, arg1: ItemStack): void
    setItem(arg0: EquipmentSlot, arg1: ItemStack): void
    getItem(arg0: EquipmentSlot): ItemStack
    setHelmet(arg0: ItemStack): void
    getHelmet(): ItemStack
    getBoots(): ItemStack
    setBoots(arg0: ItemStack): void
}

interface StructureManager {
    getStructure(arg0: NamespacedKey): Structure
    unregisterStructure(arg0: NamespacedKey): Structure
    getStructures(): Map<NamespacedKey, Structure>
    loadStructure(arg0: NamespacedKey): Structure
    loadStructure(arg0: File): Structure
    loadStructure(arg0: NamespacedKey, arg1: boolean): Structure
    loadStructure(arg0: InputStream): Structure
    getStructureFile(arg0: NamespacedKey): File
    deleteStructure(arg0: NamespacedKey, arg1: boolean): void
    deleteStructure(arg0: NamespacedKey): void
    saveStructure(arg0: OutputStream, arg1: Structure): void
    saveStructure(arg0: File, arg1: Structure): void
    saveStructure(arg0: NamespacedKey, arg1: Structure): void
    saveStructure(arg0: NamespacedKey): void
    createStructure(): Structure
    registerStructure(arg0: NamespacedKey, arg1: Structure): Structure
    copy(arg0: Structure): Structure
}

declare class Side extends Enum<Side> {
    readonly FRONT: Side
    readonly BACK: Side
    values(): Side[]
    valueOf(arg0: string): Side
}

interface Structure implements PersistentDataHolder {
    getEntities(): List<Entity>
    getPalettes(): List<Palette>
    getEntityCount(): number
    getPaletteCount(): number
    fill(arg0: Location, arg1: Location, arg2: boolean): void
    fill(arg0: Location, arg1: BlockVector, arg2: boolean): void
    getSize(): BlockVector
    place(arg0: RegionAccessor, arg1: BlockVector, arg2: boolean, arg3: StructureRotation, arg4: Mirror, arg5: number, arg6: number, arg7: Random): void
    place(arg0: Location, arg1: boolean, arg2: StructureRotation, arg3: Mirror, arg4: number, arg5: number, arg6: Random): void
}

declare class URI implements Comparable<URI>, Serializable {
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: Object): number
    compareTo(arg0: URI): number
    isAbsolute(): boolean
    resolve(arg0: string): URI
    resolve(arg0: URI): URI
    create(arg0: string): URI
    getScheme(): string
    isOpaque(): boolean
    getRawAuthority(): string
    getRawFragment(): string
    getRawQuery(): string
    getRawPath(): string
    getHost(): string
    getPort(): number
    getAuthority(): string
    getQuery(): string
    getPath(): string
    getUserInfo(): string
    toURL(): URL
    normalize(): URI
    relativize(arg0: URI): URI
    getRawSchemeSpecificPart(): string
    parseServerAuthority(): URI
    getSchemeSpecificPart(): string
    getRawUserInfo(): string
    getFragment(): string
    toASCIIString(): string
}

declare class BlockEvent extends MinecraftEvent {
    getBlock(): Block
}

declare class EntityTransformEventTransformReason extends Enum<EntityTransformEventTransformReason> {
    readonly CURED: EntityTransformEventTransformReason
    readonly FROZEN: EntityTransformEventTransformReason
    readonly INFECTION: EntityTransformEventTransformReason
    readonly DROWNED: EntityTransformEventTransformReason
    readonly SHEARED: EntityTransformEventTransformReason
    readonly LIGHTNING: EntityTransformEventTransformReason
    readonly SPLIT: EntityTransformEventTransformReason
    readonly PIGLIN_ZOMBIFIED: EntityTransformEventTransformReason
    readonly METAMORPHOSIS: EntityTransformEventTransformReason
    readonly UNKNOWN: EntityTransformEventTransformReason
    values(): EntityTransformEventTransformReason[]
    valueOf(arg0: string): EntityTransformEventTransformReason
}

interface Shape {
    intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    intersects(arg0: Rectangle2D): boolean
    getBounds2D(): Rectangle2D
    getPathIterator(arg0: AffineTransform): PathIterator
    getPathIterator(arg0: AffineTransform, arg1: number): PathIterator
    contains(arg0: number, arg1: number): boolean
    contains(arg0: Rectangle2D): boolean
    contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean
    contains(arg0: Point2D): boolean
    getBounds(): Rectangle
}

declare class PlayerJoinEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    setJoinMessage(arg0: string): void
    getJoinMessage(): string
    getHandlers(): HandlerList
}

declare class BufferedImage extends Image implements WritableRenderedImage, Transparency {
    readonly TYPE_CUSTOM: number
    readonly TYPE_INT_RGB: number
    readonly TYPE_INT_ARGB: number
    readonly TYPE_INT_ARGB_PRE: number
    readonly TYPE_INT_BGR: number
    readonly TYPE_3BYTE_BGR: number
    readonly TYPE_4BYTE_ABGR: number
    readonly TYPE_4BYTE_ABGR_PRE: number
    readonly TYPE_USHORT_565_RGB: number
    readonly TYPE_USHORT_555_RGB: number
    readonly TYPE_BYTE_GRAY: number
    readonly TYPE_USHORT_GRAY: number
    readonly TYPE_BYTE_BINARY: number
    readonly TYPE_BYTE_INDEXED: number
    readonly OPAQUE: number
    readonly BITMASK: number
    readonly TRANSLUCENT: number
    readonly UndefinedProperty: Object
    readonly SCALE_DEFAULT: number
    readonly SCALE_FAST: number
    readonly SCALE_SMOOTH: number
    readonly SCALE_REPLICATE: number
    readonly SCALE_AREA_AVERAGING: number
    getPropertyNames(): string[]
    setData(arg0: Raster): void
    getHeight(): number
    getHeight(arg0: ImageObserver): number
    getTransparency(): number
    getRaster(): WritableRaster
    setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): void
    setRGB(arg0: number, arg1: number, arg2: number): void
    getGraphics(): Graphics
    getSubimage(arg0: number, arg1: number, arg2: number, arg3: number): BufferedImage
    addTileObserver(arg0: TileObserver): void
    removeTileObserver(arg0: TileObserver): void
    isTileWritable(arg0: number, arg1: number): boolean
    getWritableTileIndices(): Point[]
    hasTileWriters(): boolean
    getWritableTile(arg0: number, arg1: number): WritableRaster
    releaseWritableTile(arg0: number, arg1: number): void
    getRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number[], arg5: number, arg6: number): number[]
    getRGB(arg0: number, arg1: number): number
    createGraphics(): Graphics2D
    isAlphaPremultiplied(): boolean
    coerceData(arg0: boolean): void
    getAlphaRaster(): WritableRaster
    getProperty(arg0: string, arg1: ImageObserver): Object
    getProperty(arg0: string): Object
    toString(): string
    getType(): number
    getSource(): ImageProducer
    getData(arg0: Rectangle): Raster
    getData(): Raster
    getWidth(arg0: ImageObserver): number
    getWidth(): number
    getSources(): Vector<RenderedImage>
    getColorModel(): ColorModel
    getSampleModel(): SampleModel
    getMinX(): number
    getMinY(): number
    getNumXTiles(): number
    getNumYTiles(): number
    getMinTileX(): number
    getMinTileY(): number
    getTileWidth(): number
    getTileHeight(): number
    getTileGridXOffset(): number
    getTileGridYOffset(): number
    getTile(arg0: number, arg1: number): Raster
    copyData(arg0: WritableRaster): WritableRaster
}

declare class SmithItemEvent extends InventoryClickEvent {
    getInventory(): Inventory
    getInventory(): SmithingInventory
}

declare class ChatMessageType extends Enum<ChatMessageType> {
    readonly CHAT: ChatMessageType
    readonly SYSTEM: ChatMessageType
    readonly ACTION_BAR: ChatMessageType
    values(): ChatMessageType[]
    valueOf(arg0: string): ChatMessageType
}

declare class Logger {
    readonly GLOBAL_LOGGER_NAME: string
    readonly global: Logger
    getName(): string
    log(arg0: Level, arg1: string, arg2: Object[]): void
    log(arg0: LogRecord): void
    log(arg0: Level, arg1: string, arg2: Object): void
    log(arg0: Level, arg1: Supplier<string>): void
    log(arg0: Level, arg1: string): void
    log(arg0: Level, arg1: Throwable, arg2: Supplier<string>): void
    log(arg0: Level, arg1: string, arg2: Throwable): void
    info(arg0: string): void
    info(arg0: Supplier<string>): void
    getParent(): Logger
    getLogger(arg0: string): Logger
    getLogger(arg0: string, arg1: string): Logger
    config(arg0: string): void
    config(arg0: Supplier<string>): void
    getFilter(): Filter
    isLoggable(arg0: Level): boolean
    warning(arg0: Supplier<string>): void
    warning(arg0: string): void
    setParent(arg0: Logger): void
    getLevel(): Level
    setFilter(arg0: Filter): void
    setLevel(arg0: Level): void
    getResourceBundleName(): string
    addHandler(arg0: Handler): void
    getHandlers(): Handler[]
    removeHandler(arg0: Handler): void
    setUseParentHandlers(arg0: boolean): void
    getAnonymousLogger(arg0: string): Logger
    getAnonymousLogger(): Logger
    getUseParentHandlers(): boolean
    setResourceBundle(arg0: ResourceBundle): void
    logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Object): void
    logp(arg0: Level, arg1: string, arg2: string, arg3: Throwable, arg4: Supplier<string>): void
    logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Throwable): void
    logp(arg0: Level, arg1: string, arg2: string, arg3: string): void
    logp(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: Object[]): void
    logp(arg0: Level, arg1: string, arg2: string, arg3: Supplier<string>): void
    getResourceBundle(): ResourceBundle
    getGlobal(): Logger
    logrb(arg0: Level, arg1: string, arg2: string, arg3: ResourceBundle, arg4: string, arg5: Object[]): void
    logrb(arg0: Level, arg1: ResourceBundle, arg2: string, arg3: Object[]): void
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Throwable): void
    logrb(arg0: Level, arg1: string, arg2: string, arg3: ResourceBundle, arg4: string, arg5: Throwable): void
    logrb(arg0: Level, arg1: ResourceBundle, arg2: string, arg3: Throwable): void
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string): void
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Object): void
    logrb(arg0: Level, arg1: string, arg2: string, arg3: string, arg4: string, arg5: Object[]): void
    entering(arg0: string, arg1: string, arg2: Object): void
    entering(arg0: string, arg1: string): void
    entering(arg0: string, arg1: string, arg2: Object[]): void
    exiting(arg0: string, arg1: string, arg2: Object): void
    exiting(arg0: string, arg1: string): void
    throwing(arg0: string, arg1: string, arg2: Throwable): void
    severe(arg0: Supplier<string>): void
    severe(arg0: string): void
    fine(arg0: string): void
    fine(arg0: Supplier<string>): void
    finer(arg0: Supplier<string>): void
    finer(arg0: string): void
    finest(arg0: string): void
    finest(arg0: Supplier<string>): void
}

interface FireworkMeta implements ItemMeta {
    addEffect(arg0: FireworkEffect): void
    removeEffect(arg0: number): void
    getEffects(): List<FireworkEffect>
    addEffects(arg0: FireworkEffect[]): void
    addEffects(arg0: Iterable<FireworkEffect>): void
    getPower(): number
    setPower(arg0: number): void
    hasEffects(): boolean
    getEffectsSize(): number
    clearEffects(): void
    clone(): Object
    clone(): ItemMeta
    clone(): FireworkMeta
}

declare class LogRecord implements Serializable {
    getThrown(): Throwable
    setMessage(arg0: string): void
    getSourceClassName(): string
    getSourceMethodName(): string
    getThreadID(): number
    setThreadID(arg0: number): void
    getLongThreadID(): number
    setLongThreadID(arg0: number): LogRecord
    getInstant(): Instant
    getMessage(): string
    getParameters(): Object[]
    setInstant(arg0: Instant): void
    getMillis(): number
    getLevel(): Level
    setLevel(arg0: Level): void
    getResourceBundleName(): string
    getLoggerName(): string
    setLoggerName(arg0: string): void
    setResourceBundleName(arg0: string): void
    setResourceBundle(arg0: ResourceBundle): void
    setParameters(arg0: Object[]): void
    setThrown(arg0: Throwable): void
    setSourceClassName(arg0: string): void
    setSourceMethodName(arg0: string): void
    getResourceBundle(): ResourceBundle
    setMillis(arg0: number): void
    getSequenceNumber(): number
    setSequenceNumber(arg0: number): void
}

declare class AsyncPlayerPreLoginEventResult extends Enum<AsyncPlayerPreLoginEventResult> {
    readonly ALLOWED: AsyncPlayerPreLoginEventResult
    readonly KICK_FULL: AsyncPlayerPreLoginEventResult
    readonly KICK_BANNED: AsyncPlayerPreLoginEventResult
    readonly KICK_WHITELIST: AsyncPlayerPreLoginEventResult
    readonly KICK_OTHER: AsyncPlayerPreLoginEventResult
    values(): AsyncPlayerPreLoginEventResult[]
    valueOf(arg0: string): AsyncPlayerPreLoginEventResult
}

declare class Structure implements Keyed {
    readonly PILLAGER_OUTPOST: Structure
    readonly MINESHAFT: Structure
    readonly MINESHAFT_MESA: Structure
    readonly MANSION: Structure
    readonly JUNGLE_PYRAMID: Structure
    readonly DESERT_PYRAMID: Structure
    readonly IGLOO: Structure
    readonly SHIPWRECK: Structure
    readonly SHIPWRECK_BEACHED: Structure
    readonly SWAMP_HUT: Structure
    readonly STRONGHOLD: Structure
    readonly MONUMENT: Structure
    readonly OCEAN_RUIN_COLD: Structure
    readonly OCEAN_RUIN_WARM: Structure
    readonly FORTRESS: Structure
    readonly NETHER_FOSSIL: Structure
    readonly END_CITY: Structure
    readonly BURIED_TREASURE: Structure
    readonly BASTION_REMNANT: Structure
    readonly VILLAGE_PLAINS: Structure
    readonly VILLAGE_DESERT: Structure
    readonly VILLAGE_SAVANNA: Structure
    readonly VILLAGE_SNOWY: Structure
    readonly VILLAGE_TAIGA: Structure
    readonly RUINED_PORTAL: Structure
    readonly RUINED_PORTAL_DESERT: Structure
    readonly RUINED_PORTAL_JUNGLE: Structure
    readonly RUINED_PORTAL_SWAMP: Structure
    readonly RUINED_PORTAL_MOUNTAIN: Structure
    readonly RUINED_PORTAL_OCEAN: Structure
    readonly RUINED_PORTAL_NETHER: Structure
    readonly ANCIENT_CITY: Structure
    readonly TRAIL_RUINS: Structure
    getStructureType(): StructureType
}

declare class SpongeAbsorbEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getBlocks(): List<BlockState>
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface Palette {
    getBlocks(): List<BlockState>
    getBlockCount(): number
}

interface WorldInfo {
    getUID(): UUID
    getMinHeight(): number
    getMaxHeight(): number
    getName(): string
    getSeed(): number
    getEnvironment(): WorldEnvironment
}

declare class URLStreamHandler {
}

declare class NotePlayEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setInstrument(arg0: Instrument): void
    getInstrument(): Instrument
    setNote(arg0: Note): void
    getNote(): Note
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class OffsetDateTime implements Temporal, TemporalAdjuster, Comparable<OffsetDateTime>, Serializable {
    readonly MIN: OffsetDateTime
    readonly MAX: OffsetDateTime
    atZoneSameInstant(arg0: ZoneId): ZonedDateTime
    withOffsetSameInstant(arg0: ZoneOffset): OffsetDateTime
    withOffsetSameLocal(arg0: ZoneOffset): OffsetDateTime
    atZoneSimilarLocal(arg0: ZoneId): ZonedDateTime
    toOffsetTime(): OffsetTime
    get(arg0: TemporalField): number
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
    compareTo(arg0: OffsetDateTime): number
    compareTo(arg0: Object): number
    getLong(arg0: TemporalField): number
    format(arg0: DateTimeFormatter): string
    of(arg0: LocalDateTime, arg1: ZoneOffset): OffsetDateTime
    of(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: ZoneOffset): OffsetDateTime
    of(arg0: LocalDate, arg1: LocalTime, arg2: ZoneOffset): OffsetDateTime
    from(arg0: TemporalAccessor): OffsetDateTime
    isSupported(arg0: TemporalUnit): boolean
    isSupported(arg0: TemporalField): boolean
    parse(arg0: CharSequence, arg1: DateTimeFormatter): OffsetDateTime
    parse(arg0: CharSequence): OffsetDateTime
    with(arg0: TemporalField, arg1: number): Temporal
    with(arg0: TemporalAdjuster): OffsetDateTime
    with(arg0: TemporalField, arg1: number): OffsetDateTime
    with(arg0: TemporalAdjuster): Temporal
    query(arg0: TemporalQuery<R>): R
    getOffset(): ZoneOffset
    range(arg0: TemporalField): ValueRange
    isEqual(arg0: OffsetDateTime): boolean
    now(arg0: Clock): OffsetDateTime
    now(): OffsetDateTime
    now(arg0: ZoneId): OffsetDateTime
    getNano(): number
    toInstant(): Instant
    getYear(): number
    getMonthValue(): number
    getDayOfMonth(): number
    getHour(): number
    getMinute(): number
    getSecond(): number
    minus(arg0: number, arg1: TemporalUnit): OffsetDateTime
    minus(arg0: TemporalAmount): OffsetDateTime
    minus(arg0: TemporalAmount): Temporal
    minus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: TemporalAmount): Temporal
    plus(arg0: number, arg1: TemporalUnit): Temporal
    plus(arg0: number, arg1: TemporalUnit): OffsetDateTime
    plus(arg0: TemporalAmount): OffsetDateTime
    until(arg0: Temporal, arg1: TemporalUnit): number
    plusNanos(arg0: number): OffsetDateTime
    plusSeconds(arg0: number): OffsetDateTime
    plusDays(arg0: number): OffsetDateTime
    plusHours(arg0: number): OffsetDateTime
    plusMinutes(arg0: number): OffsetDateTime
    minusDays(arg0: number): OffsetDateTime
    minusHours(arg0: number): OffsetDateTime
    minusMinutes(arg0: number): OffsetDateTime
    minusSeconds(arg0: number): OffsetDateTime
    minusNanos(arg0: number): OffsetDateTime
    truncatedTo(arg0: TemporalUnit): OffsetDateTime
    adjustInto(arg0: Temporal): Temporal
    ofInstant(arg0: Instant, arg1: ZoneId): OffsetDateTime
    isAfter(arg0: OffsetDateTime): boolean
    isBefore(arg0: OffsetDateTime): boolean
    getMonth(): Month
    getDayOfWeek(): DayOfWeek
    getDayOfYear(): number
    withDayOfMonth(arg0: number): OffsetDateTime
    withDayOfYear(arg0: number): OffsetDateTime
    plusWeeks(arg0: number): OffsetDateTime
    withMonth(arg0: number): OffsetDateTime
    plusMonths(arg0: number): OffsetDateTime
    withYear(arg0: number): OffsetDateTime
    plusYears(arg0: number): OffsetDateTime
    minusMonths(arg0: number): OffsetDateTime
    toLocalTime(): LocalTime
    minusYears(arg0: number): OffsetDateTime
    minusWeeks(arg0: number): OffsetDateTime
    toEpochSecond(): number
    timeLineOrder(): Comparator<OffsetDateTime>
    toLocalDateTime(): LocalDateTime
    withHour(arg0: number): OffsetDateTime
    withMinute(arg0: number): OffsetDateTime
    withSecond(arg0: number): OffsetDateTime
    withNano(arg0: number): OffsetDateTime
    toLocalDate(): LocalDate
    toZonedDateTime(): ZonedDateTime
}

declare class PlayerChannelEvent extends PlayerEvent {
    getHandlerList(): HandlerList
    getChannel(): string
    getHandlers(): HandlerList
}

declare class PlayerPreLoginEventResult extends Enum<PlayerPreLoginEventResult> {
    readonly ALLOWED: PlayerPreLoginEventResult
    readonly KICK_FULL: PlayerPreLoginEventResult
    readonly KICK_BANNED: PlayerPreLoginEventResult
    readonly KICK_WHITELIST: PlayerPreLoginEventResult
    readonly KICK_OTHER: PlayerPreLoginEventResult
    values(): PlayerPreLoginEventResult[]
    valueOf(arg0: string): PlayerPreLoginEventResult
}

interface Cancellable {
    setCancelled(arg0: boolean): void
    isCancelled(): boolean
}

declare class ServerEvent extends MinecraftEvent {
}

declare class WorldLoadEvent extends WorldEvent {
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class HashMap extends AbstractMap<K, V> implements Map<K, V>, Cloneable, Serializable {
    remove(arg0: Object): V
    remove(arg0: Object, arg1: Object): boolean
    size(): number
    get(arg0: Object): V
    put(arg0: K, arg1: V): V
    values(): Collection<V>
    clone(): Object
    clear(): void
    isEmpty(): boolean
    replace(arg0: K, arg1: V): V
    replace(arg0: K, arg1: V, arg2: V): boolean
    replaceAll(arg0: BiFunction<K, V, V>): void
    merge(arg0: K, arg1: V, arg2: BiFunction<V, V, V>): V
    newHashMap(arg0: number): HashMap<K, V>
    entrySet(): Set<MapEntry<K, V>>
    putAll(arg0: Map<K, V>): void
    putIfAbsent(arg0: K, arg1: V): V
    compute(arg0: K, arg1: BiFunction<K, V, V>): V
    forEach(arg0: BiConsumer<K, V>): void
    containsKey(arg0: Object): boolean
    computeIfAbsent(arg0: K, arg1: Function<K, V>): V
    keySet(): Set<K>
    containsValue(arg0: Object): boolean
    getOrDefault(arg0: Object, arg1: V): V
    computeIfPresent(arg0: K, arg1: BiFunction<K, V, V>): V
}

interface Multimap {
    asMap(): Map<K, Collection<V>>
    containsEntry(arg0: Object, arg1: Object): boolean
    replaceValues(arg0: K, arg1: Iterable<V>): Collection<V>
    remove(arg0: Object, arg1: Object): boolean
    size(): number
    get(arg0: K): Collection<V>
    put(arg0: K, arg1: V): boolean
    equals(arg0: Object): boolean
    values(): Collection<V>
    hashCode(): number
    clear(): void
    isEmpty(): boolean
    putAll(arg0: Multimap<K, V>): boolean
    putAll(arg0: K, arg1: Iterable<V>): boolean
    forEach(arg0: BiConsumer<K, V>): void
    containsKey(arg0: Object): boolean
    keys(): Multiset<K>
    keySet(): Set<K>
    containsValue(arg0: Object): boolean
    entries(): Collection<MapEntry<K, V>>
    removeAll(arg0: Object): Collection<V>
}

interface Arrow implements AbstractArrow {
    getColor(): Color
    setBasePotionData(arg0: PotionData): void
    getBasePotionData(): PotionData
    clearCustomEffects(): void
    getCustomEffects(): List<PotionEffect>
    hasCustomEffects(): boolean
    addCustomEffect(arg0: PotionEffect, arg1: boolean): boolean
    hasCustomEffect(arg0: PotionEffectType): boolean
    removeCustomEffect(arg0: PotionEffectType): boolean
    setColor(arg0: Color): void
}

declare class VillagerCareerChangeEventChangeReason extends Enum<VillagerCareerChangeEventChangeReason> {
    readonly LOSING_JOB: VillagerCareerChangeEventChangeReason
    readonly EMPLOYED: VillagerCareerChangeEventChangeReason
    values(): VillagerCareerChangeEventChangeReason[]
    valueOf(arg0: string): VillagerCareerChangeEventChangeReason
}

declare class EntityDeathEvent extends EntityEvent {
    getDrops(): List<ItemStack>
    getHandlerList(): HandlerList
    getDroppedExp(): number
    setDroppedExp(arg0: number): void
    getHandlers(): HandlerList
    getEntity(): Entity
    getEntity(): LivingEntity
}

declare class EntityTransformEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getTransformedEntity(): Entity
    getTransformedEntities(): List<Entity>
    getTransformReason(): EntityTransformEventTransformReason
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class InventoryMoveItemEvent extends MinecraftEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    setItem(arg0: ItemStack): void
    getInitiator(): Inventory
    getItem(): ItemStack
    getSource(): Inventory
    isCancelled(): boolean
    getHandlers(): HandlerList
    getDestination(): Inventory
}

declare class Effect extends Enum<Effect> {
    readonly CLICK2: Effect
    readonly CLICK1: Effect
    readonly BOW_FIRE: Effect
    readonly DOOR_TOGGLE: Effect
    readonly IRON_DOOR_TOGGLE: Effect
    readonly TRAPDOOR_TOGGLE: Effect
    readonly IRON_TRAPDOOR_TOGGLE: Effect
    readonly FENCE_GATE_TOGGLE: Effect
    readonly DOOR_CLOSE: Effect
    readonly IRON_DOOR_CLOSE: Effect
    readonly TRAPDOOR_CLOSE: Effect
    readonly IRON_TRAPDOOR_CLOSE: Effect
    readonly FENCE_GATE_CLOSE: Effect
    readonly EXTINGUISH: Effect
    readonly RECORD_PLAY: Effect
    readonly GHAST_SHRIEK: Effect
    readonly GHAST_SHOOT: Effect
    readonly BLAZE_SHOOT: Effect
    readonly ZOMBIE_CHEW_WOODEN_DOOR: Effect
    readonly ZOMBIE_CHEW_IRON_DOOR: Effect
    readonly ZOMBIE_DESTROY_DOOR: Effect
    readonly SMOKE: Effect
    readonly STEP_SOUND: Effect
    readonly POTION_BREAK: Effect
    readonly INSTANT_POTION_BREAK: Effect
    readonly ENDER_SIGNAL: Effect
    readonly MOBSPAWNER_FLAMES: Effect
    readonly BREWING_STAND_BREW: Effect
    readonly CHORUS_FLOWER_GROW: Effect
    readonly CHORUS_FLOWER_DEATH: Effect
    readonly PORTAL_TRAVEL: Effect
    readonly ENDEREYE_LAUNCH: Effect
    readonly FIREWORK_SHOOT: Effect
    readonly VILLAGER_PLANT_GROW: Effect
    readonly DRAGON_BREATH: Effect
    readonly ANVIL_BREAK: Effect
    readonly ANVIL_USE: Effect
    readonly ANVIL_LAND: Effect
    readonly ENDERDRAGON_SHOOT: Effect
    readonly WITHER_BREAK_BLOCK: Effect
    readonly WITHER_SHOOT: Effect
    readonly ZOMBIE_INFECT: Effect
    readonly ZOMBIE_CONVERTED_VILLAGER: Effect
    readonly BAT_TAKEOFF: Effect
    readonly END_GATEWAY_SPAWN: Effect
    readonly ENDERDRAGON_GROWL: Effect
    readonly PHANTOM_BITE: Effect
    readonly ZOMBIE_CONVERTED_TO_DROWNED: Effect
    readonly HUSK_CONVERTED_TO_ZOMBIE: Effect
    readonly GRINDSTONE_USE: Effect
    readonly BOOK_PAGE_TURN: Effect
    readonly SMITHING_TABLE_USE: Effect
    readonly POINTED_DRIPSTONE_LAND: Effect
    readonly POINTED_DRIPSTONE_DRIP_LAVA_INTO_CAULDRON: Effect
    readonly POINTED_DRIPSTONE_DRIP_WATER_INTO_CAULDRON: Effect
    readonly SKELETON_CONVERTED_TO_STRAY: Effect
    readonly COMPOSTER_FILL_ATTEMPT: Effect
    readonly LAVA_INTERACT: Effect
    readonly REDSTONE_TORCH_BURNOUT: Effect
    readonly END_PORTAL_FRAME_FILL: Effect
    readonly DRIPPING_DRIPSTONE: Effect
    readonly BONE_MEAL_USE: Effect
    readonly ENDER_DRAGON_DESTROY_BLOCK: Effect
    readonly SPONGE_DRY: Effect
    readonly ELECTRIC_SPARK: Effect
    readonly COPPER_WAX_ON: Effect
    readonly COPPER_WAX_OFF: Effect
    readonly OXIDISED_COPPER_SCRAPE: Effect
    getById(arg0: number): Effect
    values(): Effect[]
    valueOf(arg0: string): Effect
    getId(): number
    getType(): EffectType
    getData(): Class<any>
}

declare class BlockDamageEvent extends BlockEvent implements Cancellable {
    getItemInHand(): ItemStack
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPlayer(): Player
    getInstaBreak(): boolean
    setInstaBreak(arg0: boolean): void
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class EntityDamageEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getFinalDamage(): number
    getDamage(arg0: EntityDamageEventDamageModifier): number
    getDamage(): number
    getHandlerList(): HandlerList
    isApplicable(arg0: EntityDamageEventDamageModifier): boolean
    setDamage(arg0: EntityDamageEventDamageModifier, arg1: number): void
    setDamage(arg0: number): void
    getOriginalDamage(arg0: EntityDamageEventDamageModifier): number
    getCause(): EntityDamageEventDamageCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ComponentBuilderFormatRetention extends Enum<ComponentBuilderFormatRetention> {
    readonly NONE: ComponentBuilderFormatRetention
    readonly FORMATTING: ComponentBuilderFormatRetention
    readonly EVENTS: ComponentBuilderFormatRetention
    readonly ALL: ComponentBuilderFormatRetention
    values(): ComponentBuilderFormatRetention[]
    valueOf(arg0: string): ComponentBuilderFormatRetention
}

declare class InventoryAction extends Enum<InventoryAction> {
    readonly NOTHING: InventoryAction
    readonly PICKUP_ALL: InventoryAction
    readonly PICKUP_SOME: InventoryAction
    readonly PICKUP_HALF: InventoryAction
    readonly PICKUP_ONE: InventoryAction
    readonly PLACE_ALL: InventoryAction
    readonly PLACE_SOME: InventoryAction
    readonly PLACE_ONE: InventoryAction
    readonly SWAP_WITH_CURSOR: InventoryAction
    readonly DROP_ALL_CURSOR: InventoryAction
    readonly DROP_ONE_CURSOR: InventoryAction
    readonly DROP_ALL_SLOT: InventoryAction
    readonly DROP_ONE_SLOT: InventoryAction
    readonly MOVE_TO_OTHER_INVENTORY: InventoryAction
    readonly HOTBAR_MOVE_AND_READD: InventoryAction
    readonly HOTBAR_SWAP: InventoryAction
    readonly CLONE_STACK: InventoryAction
    readonly COLLECT_TO_CURSOR: InventoryAction
    readonly UNKNOWN: InventoryAction
    values(): InventoryAction[]
    valueOf(arg0: string): InventoryAction
}

interface Iterator {
    remove(): void
    forEachRemaining(arg0: Consumer<E>): void
    hasNext(): boolean
    next(): E
}

declare class InventoryType extends Enum<InventoryType> {
    readonly CHEST: InventoryType
    readonly DISPENSER: InventoryType
    readonly DROPPER: InventoryType
    readonly FURNACE: InventoryType
    readonly WORKBENCH: InventoryType
    readonly CRAFTING: InventoryType
    readonly ENCHANTING: InventoryType
    readonly BREWING: InventoryType
    readonly PLAYER: InventoryType
    readonly CREATIVE: InventoryType
    readonly MERCHANT: InventoryType
    readonly ENDER_CHEST: InventoryType
    readonly ANVIL: InventoryType
    readonly SMITHING: InventoryType
    readonly BEACON: InventoryType
    readonly HOPPER: InventoryType
    readonly SHULKER_BOX: InventoryType
    readonly BARREL: InventoryType
    readonly BLAST_FURNACE: InventoryType
    readonly LECTERN: InventoryType
    readonly SMOKER: InventoryType
    readonly LOOM: InventoryType
    readonly CARTOGRAPHY: InventoryType
    readonly GRINDSTONE: InventoryType
    readonly STONECUTTER: InventoryType
    readonly COMPOSTER: InventoryType
    readonly CHISELED_BOOKSHELF: InventoryType
    readonly JUKEBOX: InventoryType
    readonly SMITHING_NEW: InventoryType
    isCreatable(): boolean
    getDefaultTitle(): string
    getDefaultSize(): number
    values(): InventoryType[]
    valueOf(arg0: string): InventoryType
}

declare class PlayerCommandSendEvent extends PlayerEvent {
    getCommands(): Collection<string>
    getHandlerList(): HandlerList
    getHandlers(): HandlerList
}

declare class BlockBreakEvent extends BlockExpEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getPlayer(): Player
    isDropItems(): boolean
    setDropItems(arg0: boolean): void
    isCancelled(): boolean
}

declare class EntityPotionEffectEvent extends EntityEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    isOverride(): boolean
    getHandlerList(): HandlerList
    getAction(): EntityPotionEffectEventAction
    getModifiedType(): PotionEffectType
    setOverride(arg0: boolean): void
    getOldEffect(): PotionEffect
    getNewEffect(): PotionEffect
    getCause(): EntityPotionEffectEventCause
    isCancelled(): boolean
    getHandlers(): HandlerList
}

interface CommandExecutor {
    onCommand(arg0: CommandSender, arg1: Command, arg2: string, arg3: string[]): boolean
}

declare class WorldType extends Enum<WorldType> {
    readonly NORMAL: WorldType
    readonly FLAT: WorldType
    readonly LARGE_BIOMES: WorldType
    readonly AMPLIFIED: WorldType
    getName(): string
    values(): WorldType[]
    valueOf(arg0: string): WorldType
    getByName(arg0: string): WorldType
}

declare class RayTraceResult {
    getHitBlock(): Block
    getHitBlockFace(): BlockFace
    getHitPosition(): Vector
    getHitEntity(): Entity
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
}

declare class BlockFertilizeEvent extends BlockEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getPlayer(): Player
    getBlocks(): List<BlockState>
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class ColorModel implements Transparency {
    readonly OPAQUE: number
    readonly BITMASK: number
    readonly TRANSLUCENT: number
    getGreen(arg0: number): number
    getGreen(arg0: Object): number
    getAlpha(arg0: number): number
    getAlpha(arg0: Object): number
    getRed(arg0: Object): number
    getRed(arg0: number): number
    getBlue(arg0: number): number
    getBlue(arg0: Object): number
    getNumComponents(): number
    getComponents(arg0: Object, arg1: number[], arg2: number): number[]
    getComponents(arg0: number, arg1: number[], arg2: number): number[]
    getColorSpace(): ColorSpace
    getTransparency(): number
    createCompatibleSampleModel(arg0: number, arg1: number): SampleModel
    getRGB(arg0: number): number
    getRGB(arg0: Object): number
    createCompatibleWritableRaster(arg0: number, arg1: number): WritableRaster
    getRGBdefault(): ColorModel
    hasAlpha(): boolean
    isAlphaPremultiplied(): boolean
    isCompatibleRaster(arg0: Raster): boolean
    coerceData(arg0: WritableRaster, arg1: boolean): ColorModel
    getComponentSize(arg0: number): number
    getComponentSize(): number[]
    getPixelSize(): number
    getAlphaRaster(arg0: WritableRaster): WritableRaster
    getDataElements(arg0: number[], arg1: number, arg2: Object): Object
    getDataElements(arg0: number[], arg1: number, arg2: Object): Object
    getDataElements(arg0: number, arg1: Object): Object
    getTransferType(): number
    getUnnormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[]
    getDataElement(arg0: number[], arg1: number): number
    getDataElement(arg0: number[], arg1: number): number
    getNormalizedComponents(arg0: Object, arg1: number[], arg2: number): number[]
    getNormalizedComponents(arg0: number[], arg1: number, arg2: number[], arg3: number): number[]
    getNumColorComponents(): number
    isCompatibleSampleModel(arg0: SampleModel): boolean
    equals(arg0: Object): boolean
    toString(): string
    hashCode(): number
}

declare class EntityPotionEffectEventAction extends Enum<EntityPotionEffectEventAction> {
    readonly ADDED: EntityPotionEffectEventAction
    readonly CHANGED: EntityPotionEffectEventAction
    readonly CLEARED: EntityPotionEffectEventAction
    readonly REMOVED: EntityPotionEffectEventAction
    values(): EntityPotionEffectEventAction[]
    valueOf(arg0: string): EntityPotionEffectEventAction
}

declare class PlayerRecipeDiscoverEvent extends PlayerEvent implements Cancellable {
    setCancelled(arg0: boolean): void
    getHandlerList(): HandlerList
    getRecipe(): NamespacedKey
    isCancelled(): boolean
    getHandlers(): HandlerList
}

declare class Clock implements InstantSource {
    equals(arg0: Object): boolean
    hashCode(): number
    offset(arg0: Clock, arg1: Duration): Clock
    millis(): number
    system(arg0: ZoneId): Clock
    fixed(arg0: Instant, arg1: ZoneId): Clock
    instant(): Instant
    systemUTC(): Clock
    systemDefaultZone(): Clock
    tickMillis(arg0: ZoneId): Clock
    tickSeconds(arg0: ZoneId): Clock
    tickMinutes(arg0: ZoneId): Clock
    tick(arg0: Clock, arg1: Duration): Clock
    getZone(): ZoneId
    withZone(arg0: ZoneId): Clock
}

declare class AttributeModifierOperation extends Enum<AttributeModifierOperation> {
    readonly ADD_NUMBER: AttributeModifierOperation
    readonly ADD_SCALAR: AttributeModifierOperation
    readonly MULTIPLY_SCALAR_1: AttributeModifierOperation
    values(): AttributeModifierOperation[]
    valueOf(arg0: string): AttributeModifierOperation
}

interface EnderDragon implements ComplexLivingEntity, Boss, Mob, Enemy {
    setPhase(arg0: EnderDragonPhase): void
    getPhase(): EnderDragonPhase
    getDeathAnimationTicks(): number
    getDragonBattle(): DragonBattle
}

declare class RaidFinishEvent extends RaidEvent {
    getHandlerList(): HandlerList
    getWinners(): List<Player>
    getHandlers(): HandlerList
}

interface EventMapping {
    blockCook: BlockCookEvent
    notePlay: NotePlayEvent
    blockBurn: BlockBurnEvent
    blockExp: BlockExpEvent
    blockGrow: BlockGrowEvent
    blockIgnite: BlockIgniteEvent
    blockFade: BlockFadeEvent
    bellRing: BellRingEvent
    blockPlace: BlockPlaceEvent
    blockBreak: BlockBreakEvent
    blockDamage: BlockDamageEvent
    tNTPrime: TNTPrimeEvent
    leavesDecay: LeavesDecayEvent
    sculkBloom: SculkBloomEvent
    blockFromTo: BlockFromToEvent
    signChange: SignChangeEvent
    blockDamageAbort: BlockDamageAbortEvent
    spongeAbsorb: SpongeAbsorbEvent
    blockDropItem: BlockDropItemEvent
    blockFertilize: BlockFertilizeEvent
    blockExplode: BlockExplodeEvent
    blockDispense: BlockDispenseEvent
    blockRedstone: BlockRedstoneEvent
    bellResonate: BellResonateEvent
    cauldronLevelChange: CauldronLevelChangeEvent
    blockPhysics: BlockPhysicsEvent
    blockCanBuild: BlockCanBuildEvent
    blockShearEntity: BlockShearEntityEvent
    inventoryBlockStart: InventoryBlockStartEvent
    moistureChange: MoistureChangeEvent
    fluidLevelChange: FluidLevelChangeEvent
    blockReceiveGame: BlockReceiveGameEvent
    enchantItem: EnchantItemEvent
    prepareItemEnchant: PrepareItemEnchantEvent
    entityBreed: EntityBreedEvent
    entityDamage: EntityDamageEvent
    entityDeath: EntityDeathEvent
    entityTame: EntityTameEvent
    entityToggleSwim: EntityToggleSwimEvent
    entityCombust: EntityCombustEvent
    entityPlace: EntityPlaceEvent
    entityAirChange: EntityAirChangeEvent
    entityShootBow: EntityShootBowEvent
    batToggleSleep: BatToggleSleepEvent
    entityExplode: EntityExplodeEvent
    entityPickupItem: EntityPickupItemEvent
    entityUnleash: EntityUnleashEvent
    explosionPrime: ExplosionPrimeEvent
    entityEnterBlock: EntityEnterBlockEvent
    entityExhaustion: EntityExhaustionEvent
    entityInteract: EntityInteractEvent
    entityPoseChange: EntityPoseChangeEvent
    entitySpawn: EntitySpawnEvent
    entityResurrect: EntityResurrectEvent
    entityTeleport: EntityTeleportEvent
    entityTransform: EntityTransformEvent
    fireworkExplode: FireworkExplodeEvent
    foodLevelChange: FoodLevelChangeEvent
    horseJump: HorseJumpEvent
    entityDropItem: EntityDropItemEvent
    creeperPower: CreeperPowerEvent
    entityTarget: EntityTargetEvent
    entitySpellCast: EntitySpellCastEvent
    pigZombieAnger: PigZombieAngerEvent
    itemDespawn: ItemDespawnEvent
    projectileHit: ProjectileHitEvent
    sheepRegrowWool: SheepRegrowWoolEvent
    slimeSplit: SlimeSplitEvent
    piglinBarter: PiglinBarterEvent
    itemMerge: ItemMergeEvent
    sheepDyeWool: SheepDyeWoolEvent
    entityPortalEnter: EntityPortalEnterEvent
    entityChangeBlock: EntityChangeBlockEvent
    entityPotionEffect: EntityPotionEffectEvent
    entityRegainHealth: EntityRegainHealthEvent
    entityToggleGlide: EntityToggleGlideEvent
    striderTemperatureChange: StriderTemperatureChangeEvent
    villagerAcquireTrade: VillagerAcquireTradeEvent
    villagerCareerChange: VillagerCareerChangeEvent
    villagerReplenishTrade: VillagerReplenishTradeEvent
    areaEffectCloudApply: AreaEffectCloudApplyEvent
    arrowBodyCountChange: ArrowBodyCountChangeEvent
    entityEnterLoveMode: EntityEnterLoveModeEvent
    enderDragonChangePhase: EnderDragonChangePhaseEvent
    hangingBreak: HangingBreakEvent
    hangingPlace: HangingPlaceEvent
    brew: BrewEvent
    tradeSelect: TradeSelectEvent
    inventory: InventoryEvent
    smithItem: SmithItemEvent
    craftItem: CraftItemEvent
    furnaceBurn: FurnaceBurnEvent
    hopperInventorySearch: HopperInventorySearchEvent
    prepareInventoryResult: PrepareInventoryResultEvent
    brewingStandFuel: BrewingStandFuelEvent
    inventoryMoveItem: InventoryMoveItemEvent
    inventoryPickupItem: InventoryPickupItemEvent
    inventoryClose: InventoryCloseEvent
    inventoryDrag: InventoryDragEvent
    inventoryOpen: InventoryOpenEvent
    furnaceSmelt: FurnaceSmeltEvent
    furnaceStartSmelt: FurnaceStartSmeltEvent
    prepareAnvil: PrepareAnvilEvent
    inventoryInteract: InventoryInteractEvent
    prepareSmithing: PrepareSmithingEvent
    furnaceExtract: FurnaceExtractEvent
    prepareGrindstone: PrepareGrindstoneEvent
    inventoryCreative: InventoryCreativeEvent
    inventoryClick: InventoryClickEvent
    prepareItemCraft: PrepareItemCraftEvent
    playerVelocity: PlayerVelocityEvent
    playerMove: PlayerMoveEvent
    playerExpChange: PlayerExpChangeEvent
    playerHideEntity: PlayerHideEntityEvent
    asyncPlayerChat: AsyncPlayerChatEvent
    playerEggThrow: PlayerEggThrowEvent
    playerRespawn: PlayerRespawnEvent
    playerChat: PlayerChatEvent
    playerBedEnter: PlayerBedEnterEvent
    playerDropItem: PlayerDropItemEvent
    playerJoin: PlayerJoinEvent
    playerChannel: PlayerChannelEvent
    playerItemDamage: PlayerItemDamageEvent
    playerSignOpen: PlayerSignOpenEvent
    playerEditBook: PlayerEditBookEvent
    playerItemHeld: PlayerItemHeldEvent
    playerFish: PlayerFishEvent
    playerItemMend: PlayerItemMendEvent
    playerItemBreak: PlayerItemBreakEvent
    playerPickupItem: PlayerPickupItemEvent
    playerKick: PlayerKickEvent
    playerInteract: PlayerInteractEvent
    playerAnimation: PlayerAnimationEvent
    playerBedLeave: PlayerBedLeaveEvent
    playerRiptide: PlayerRiptideEvent
    playerShowEntity: PlayerShowEntityEvent
    asyncPlayerPreLogin: AsyncPlayerPreLoginEvent
    playerLogin: PlayerLoginEvent
    playerQuit: PlayerQuitEvent
    playerToggleSprint: PlayerToggleSprintEvent
    playerAdvancementDone: PlayerAdvancementDoneEvent
    playerChangedWorld: PlayerChangedWorldEvent
    playerChatTabComplete: PlayerChatTabCompleteEvent
    playerExpCooldownChange: PlayerExpCooldownChangeEvent
    playerBucketEntity: PlayerBucketEntityEvent
    playerCommandPreprocess: PlayerCommandPreprocessEvent
    playerHarvestBlock: PlayerHarvestBlockEvent
    playerLocaleChange: PlayerLocaleChangeEvent
    playerRecipeBookClick: PlayerRecipeBookClickEvent
    playerRecipeDiscover: PlayerRecipeDiscoverEvent
    playerInteractEntity: PlayerInteractEntityEvent
    playerLevelChange: PlayerLevelChangeEvent
    playerResourcePackStatus: PlayerResourcePackStatusEvent
    playerShearEntity: PlayerShearEntityEvent
    playerSpawnChange: PlayerSpawnChangeEvent
    playerSpawnLocation: PlayerSpawnLocationEvent
    playerChangedMainHand: PlayerChangedMainHandEvent
    playerCommandSend: PlayerCommandSendEvent
    playerStatisticIncrement: PlayerStatisticIncrementEvent
    playerTakeLecternBook: PlayerTakeLecternBookEvent
    playerToggleFlight: PlayerToggleFlightEvent
    playerToggleSneak: PlayerToggleSneakEvent
    playerGameModeChange: PlayerGameModeChangeEvent
    playerItemConsume: PlayerItemConsumeEvent
    playerSwapHandItems: PlayerSwapHandItemsEvent
    raidTrigger: RaidTriggerEvent
    raidFinish: RaidFinishEvent
    raidSpawnWave: RaidSpawnWaveEvent
    raidStop: RaidStopEvent
    serverCommand: ServerCommandEvent
    broadcastMessage: BroadcastMessageEvent
    serverListPing: ServerListPingEvent
    serverLoad: ServerLoadEvent
    mapInitialize: MapInitializeEvent
    vehicleCreate: VehicleCreateEvent
    vehicleEnter: VehicleEnterEvent
    vehicleDamage: VehicleDamageEvent
    vehicleExit: VehicleExitEvent
    vehicleMove: VehicleMoveEvent
    vehicleDestroy: VehicleDestroyEvent
    vehicleUpdate: VehicleUpdateEvent
    lightningStrike: LightningStrikeEvent
    thunderChange: ThunderChangeEvent
    weatherChange: WeatherChangeEvent
    portalCreate: PortalCreateEvent
    worldSave: WorldSaveEvent
    lootGenerate: LootGenerateEvent
    worldInit: WorldInitEvent
    structureGrow: StructureGrowEvent
    genericGame: GenericGameEvent
    worldUnload: WorldUnloadEvent
    worldLoad: WorldLoadEvent
    spawnChange: SpawnChangeEvent
    timeSkip: TimeSkipEvent
    asyncStructureSpawn: AsyncStructureSpawnEvent
}
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