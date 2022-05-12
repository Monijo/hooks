import React, {useMemo, useState} from 'react';


function fibonacci(num) {
    if (num < 1) return 0;
    if(num <=2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2)
}


function Memo(props) {
    const [num, setNum] = useState(1)
    const [isGreen, setIsGreen] = useState(true)
    const fib = useMemo(() =>fibonacci(num), [num]);

    return (
        <div>
            <h2 style={{color: isGreen ? "green" : "blue"}} onClick={(e) => {
                setIsGreen((prevState) => !prevState)
            }}>useMemo example</h2>
            <h3>Fibonacci of {num} is {fib} </h3>
            <button onClick={() => {
                setNum(num + 1)
            }}>+
            </button>
        </div>
    );
}

export default Memo;
