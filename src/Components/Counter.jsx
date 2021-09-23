import { useState } from "react";

export default function Counter({ initialValue }) {

    const [count, setCount] = useState(initialValue);

    const handleClick = (incr) => {
        setCount(count + incr);
    };
    return (
        <div>
            <h2>Count: {count}</h2>
            <button className="btn" onClick={() => {
                handleClick(1);
            }}>
                Add 1
            </button>
            <button className="btn" onClick={() => {
                handleClick(-1);
            }}>Sub 1</button>

            <button className="btn" onClick={() => {
                handleClick(count);
            }}>
                Double
            </button>
        </div>
    )
    
}