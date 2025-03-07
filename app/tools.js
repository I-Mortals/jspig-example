
export class TimeChecker {
    day = 24000

    minecraftTimeTo24HourFormat = [
        { tick: 0, time: "06:00" },
        { tick: 1000, time: "07:00" },
        { tick: 2000, time: "08:00" },
        { tick: 3000, time: "09:00" },
        { tick: 4000, time: "10:00" },
        { tick: 5000, time: "11:00" },
        { tick: 6000, time: "12:00" },
        { tick: 7000, time: "13:00" },
        { tick: 8000, time: "14:00" },
        { tick: 9000, time: "15:00" },
        { tick: 10000, time: "16:00" },
        { tick: 11000, time: "17:00" },
        { tick: 12000, time: "18:00" },
        { tick: 13000, time: "19:00" },
        { tick: 14000, time: "20:00" },
        { tick: 15000, time: "21:00" },
        { tick: 16000, time: "22:00" },
        { tick: 17000, time: "23:00" },
        { tick: 18000, time: "00:00" },
        { tick: 19000, time: "01:00" },
        { tick: 20000, time: "02:00" },
        { tick: 21000, time: "03:00" },
        { tick: 22000, time: "04:00" },
        { tick: 23000, time: "05:00" }
    ];

    /**
     * 
     * @param {World} world 
     * @returns 
     */
    isDay(world) {
        const time = world.getTime();
        return time >= 0 && time < 12300;
    }

    /**
     * 
     * @param {World} world 
     * @returns 
     */
    isNight(world) {
        const time = world.getTime();
        return time >= 12300 && time < 24000;
    }

}