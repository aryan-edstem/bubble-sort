import React from "react";
import { useSelector } from "react-redux";
import '../bubble.css'

const Output = () => {
    const output=useSelector((state)=>state.bubble.array);
    const time=useSelector((state)=>state.bubble.executionTime)
    const count=useSelector((state)=>state.bubble.noOfIterations)
    return(
        <>
        <h1>Output</h1>
        <p>Elapsed time: {time/1000} seconds</p>
        <p>No.of Iterations: {count}</p>
        <div className="output-container">
            {output?.map((element,index)=>(
                <div className="output-box" style={{height:`${element*10}px`}} key={index}>{element}</div>
            ))}
        </div>

        </>
    )
}

export default Output