import {createSlice} from '@reduxjs/toolkit'

export const BubbleSlice = createSlice({
    name:'bubble',
    initialState:{
        array: null,
        executionTime:0
    },
    reducers:{
        setInputArray: (state,action)=>{
            state.array = action.payload;
        },
        setExecutionTime: (state,action) => {
            state.executionTime = action.payload
        }
    }
})

export const {setInputArray,setExecutionTime} = BubbleSlice.actions
export default BubbleSlice.reducer