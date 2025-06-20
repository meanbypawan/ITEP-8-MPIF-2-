import { configureStore } from "@reduxjs/toolkit";
import MessageSlice from "./MessageSlice";
const store = configureStore({
    reducer:{
        MessageState: MessageSlice
    }
});
// MessageState = {m1:"GM",m2:"GE",m3:"GN"}
export default store;