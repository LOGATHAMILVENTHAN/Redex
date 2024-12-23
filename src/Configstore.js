import { configureStore } from "@reduxjs/toolkit";
import  Counterslice  from "./Counterslice";

 export const  store=configureStore({
    reducer:{
        counter:Counterslice
    }
})