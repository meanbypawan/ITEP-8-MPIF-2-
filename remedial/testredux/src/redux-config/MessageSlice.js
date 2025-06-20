import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
   name:"Message-Slice",
   initialState:{
    m1: "GM",
    m2: "GE",
    m3: "GN"
   },
   reducers:{
    setM1: (state,action)=>{ // action :{type: '', payload:'Hello'}
      state.m1 = action.payload;
    },
    setM2: (state,action)=>{
        state.m2 = action.payload;
    },
    setM3: (state,action)=>{
        state.m3 = action.payload;
    }
   }
});
export const {setM1, setM2,setM3} = slice.actions;
export default slice.reducer;