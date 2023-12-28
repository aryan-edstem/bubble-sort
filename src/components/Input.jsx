import React from "react";
import "../bubble.css";
import { useDispatch } from "react-redux";
import { setInputArray,setExecutionTime,setNoOfIterations } from "../redux/bubbleSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Input = () => {
  const [selectedOption, setSelectedOption] = useState("asc");
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value);
  };

  const inputArray = useSelector((state) => state.bubble.array);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const textFieldValue = e.target.value;
    const input = textFieldValue
      .split(",")
      .map((item) => parseInt(item.trim(), 10));
    dispatch(setInputArray(input));
  };

  const ArrayItemsSwap = (arr, a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  const handleSort = async () => {
    const start = performance.now();
    const arr = [...inputArray];
    let swapped;
    let i, j;
    let length = arr.length;
    for (i = 0; i < length; i++) {
      swapped = false;
      for (j = 0; j < length - i - 1; j++) {
        await new Promise((resolve) => setTimeout(resolve, 250));
        if (selectedOption == "asc") 
        {
            if (arr[j] > arr[j + 1]) {
            ArrayItemsSwap(arr, j, j + 1);
            swapped = true;
            dispatch(setNoOfIterations(1));
            }
        }
        else {
            if (arr[j] < arr[j + 1]) {
            ArrayItemsSwap(arr, j, j + 1);
            swapped = true;
            dispatch(setNoOfIterations(1));
            }
        }
        dispatch(setInputArray([...arr]));
      }
      if (!swapped) {
        break;
      }
    }
    const end = performance.now();
    const time = end - start;
    dispatch(setExecutionTime(time));
  };

  return (
    <div className="container">
      <h1>Input</h1>
      <div className="input-container">
        <label>Enter the Input Array</label>
        <textarea type="textarea" onChange={handleInputChange} />
      </div>
      <br />
      <select
        id="dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select> <br />
      <button onClick={handleSort}>Sort</button> <br />
    </div>
  );
};

export default Input;
