import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        console.log('count 1 effect');
        document.title = count;
    }, [count]);
    // Runs conditionally on the count parameter - Component Did update
    useEffect(() => {
        console.log("count 2 effect");
        document.title = count2;
    });
    // No parameter so runs on every render, even if not related - Not recommended
    useEffect(()=>{
        console.log('Creating timer');
        const interval = setInterval(() => {
            console.log("Interval is executed")
            setTime(time => time + 1)
        }, 1000);
        return () => {
            console.log("cleaning up!")
            clearInterval(interval)
        }
        // Return command to cleanup - Component Will Unmount
    }, []);
    // Empty parameter so only runs once - Component Did Mount
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment Count ({count})
            </button>
            <button onClick={
            () => setCount2(count2 => count2 + 1)
            }>
                Increment Second Count: {count2}
            </button>
            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter