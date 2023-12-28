import {createSlice} from '@reduxjs/toolkit'

export const BubbleSlice = createSlice({
    name:'bubble',
    initialState:{
        array: null,
        executionTime:0,
        noOfIterations:0
    },
    reducers:{
        setInputArray: (state,action)=>{
            state.array = action.payload;
        },
        setExecutionTime: (state,action) => {
            state.executionTime = action.payload
        },
        setNoOfIterations: (state,action)=>{
            state.noOfIterations += action.payload
        }
    }
})

export const {setInputArray,setExecutionTime,setNoOfIterations} = BubbleSlice.actions
export default BubbleSlice.reducer