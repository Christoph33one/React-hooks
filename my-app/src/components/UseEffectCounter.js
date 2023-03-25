import React, {useState, useEffect} from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('count 1 effect')
        document.title = count;
    },[count]);
    const [count2, setCount2] = useState(0);
    // using the setCount to sepperate the orginal count from the new count (count2)!
    // remember the useEffecet will run in every render, which will slow an app down. creating a seperate count, the counts with the useEffect
    // will help with preformance as it will onky render single counts when needed!
    useEffect(() => {
        console.log('count 2 effect 2')
        document.title = count;
    },[count2]);
    return (
    <div>
        <button onClick={
            () => setCount(count => count + 1)
        }>
            Increament Count ({count})
        </button>
        <button onClick={
            () => setCount2(count2 => count2 + 1)
        }>
            Increament Count ({count2})
        </button>
    </div>
  )
}
// use the useEffect hook to run code on every render in functional components.
// useEffect refractors code.

export default UseEffectCounter