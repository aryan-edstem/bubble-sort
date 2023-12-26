import React from "react";
import { useState } from "react";
import '../bubble.css'

const Input = () => {
    const [inputArray, setInputArray] = useState('');
    const [outputArray, setOutputArray] = useState();

    const handleInputChange = (e) => {
        const textFieldValue=e.target.value;
        setInputArray(textFieldValue.split(',').map(function(item) {
            return parseInt(item.trim(), 10);
            }));
    }
    var swapped;
    const ArrayItemsSwap = (arr,a,b) => {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
        swapped = true;
    }

    const handleSort = () => {
        const arr = [...inputArray];
        let i,j;
        let length=arr.length
        for (i=0;i<length;i++)
            {
            swapped = false;
            for(j=0;j<(length-i-1);j++)
                {
                if(arr[j] > arr[j+1])
                    {
                    ArrayItemsSwap(arr,j,j+1);
                    }
                }
            }
        setOutputArray(arr);    
    }


    return(
        <div className="container">
            <h1>Input</h1>
            <div className="input-container">
                <label>Enter the Input Array</label> 
                <textarea type="textarea"
                onChange={handleInputChange}
                />
            </div>< br/>
            <button onClick={handleSort}>Sort</button> <br />
            <div className="output-container">
            {outputArray?.map((element)=>(
                <div className="output-box">{element}</div>
            ))}
            </div>
        </div>

    )
}

export default Input;