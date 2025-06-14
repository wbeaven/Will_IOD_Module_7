import { useState, useEffect } from "react";

function Clock() {
    const [date, setDate] = useState(new Date());
    const [tickCount, setTickCount] = useState(0);
    let ticks = 0;
    useEffect(() => {
        let clockInterval = setInterval(() => tick(), 1000);
        console.log("Clock component mounted");

        return () => {
            console.log("Clock component unmounted");
            clearInterval(clockInterval);
            setTickCount(0);
        };
    }, []);
    const tick = () => {
        setDate(new Date());
        ticks++;
        setTickCount(ticks);
    };
    return (
        <div className='Clock'>
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
            <p>Ticks since mounted: {tickCount}</p>
        </div>
    );
}

function ClockDisplay() {
    const [showClock, setShowClock] = useState(false);

    const toggleClock = () => {
        setShowClock(!showClock);
    };

    return (
        <div className='ClockDisplay componentBox'>
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    );
}

export default ClockDisplay;
