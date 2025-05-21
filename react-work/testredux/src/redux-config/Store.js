import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import MessageSlice from "./MessageSlice";
const store = configureStore({
    reducer:{
        CounterData : CounterSlice,
        Messages: MessageSlice
    }
});

/*
  CounterData {
    counter : 100,
    evenCounter: 0,
    oddCounter: 1
   },
   Messages:{
     morningMessage :"GM",
     eveningMessage: "GE",
     nightMessage :"GN"
   }
*/
export default store;