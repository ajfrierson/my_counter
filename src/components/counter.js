import React, { Component, useState } from "react";
import './counter.css';

function Counter(){
    let [count, setCount] = useState(0);
    
    function increment(){
        setCount(count + 1)
    }

    function decrement(){
        setCount(count - 1);
    }


    function incrementByOneHundred(){
        setCount(count + 100);
    }
    
    function decrementByOneHundred(){
        setCount(count - 100);
    }


    function incrementByTen(){
        setCount(count + 10);
    }
    
    function decrementByTen(){
        setCount(count - 10);
    }

    function reset(){
        setCount(0);
    }

    return(
        <div className="counter">
            <button onClick={incrementByOneHundred}>+100</button>
            <button onClick={decrementByOneHundred}>-100</button><br/>
            <button onClick={incrementByTen}>+10</button>
            <button onClick={decrementByTen}>-10</button><br/>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button><br/>
            <span className="count">{count}</span><br />

            <button className="reset" onClick={reset}>reset</button>
        </div>
    );

    
}



export default Counter;