import React, {useState} from 'react';

const Counter = () => {
    const [count, setCounter] = useState(0)

    const [value, setValue] = useState('Текст в инпуте')

    function increment() {
        setCounter(count + 1)
    }

    function decrement() {
        setCounter(count - 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <h1>{value}</h1>
            <input
                type={"text"}
                value={value}
                onChange={event => setValue(event.target.value)}
            />

            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter