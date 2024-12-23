import { createSlice } from "@reduxjs/toolkit"
const initialvalue={
    count:0,
}
export let Counterslice=createSlice({
    name:"counter",
    initialState:initialvalue,
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        },
        addnumber:(state,action)=>{
            state.count+=action.payload
        }


    }

})
export const {increment,decrement,reset,addnumber}=Counterslice.actions
export default Counterslice.reducer