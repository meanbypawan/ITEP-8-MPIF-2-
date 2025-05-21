import { createSlice } from "@reduxjs/toolkit";
// Redux = ContextAPi + Reducer[useReducer]
const slice = createSlice({
   name: "Counter-Slice",
   initialState:{
    counter : 100,
    evenCounter: 0,
    oddCounter: 1
   },
   reducers:{
    incrementCounter: (state,action)=>{
        state.counter = state.counter + 1;
    },
    incrementEvenCouter : (state,action)=>{
        state.evenCounter = state.evenCounter + 2;
    },
    incrementOddCounter : (state,action)=>{
        state.oddCounter = state.oddCounter + 2;
    }
   }
});

console.log(slice.actions);
export const {incrementCounter,incrementEvenCouter,incrementOddCounter} = slice.actions;
export default slice.reducer;