import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Apis from "../Apis";
export const fetchOrder = createAsyncThunk("order-slice/fetchOrder",async(userId)=>{
   try{
      let response = await axios.get(Apis.ORDER_HISTORY+`/${userId}`);
      return response.data.history;
   }
   catch(err){
    console.log(err);
   }
});
const slice = createSlice({
    name:"order-slice",
    initialState:{
        orderHistory: [],
        isLoading: false,
        error: null
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchOrder.pending,(state,action)=>{
            state.isLoading = true
        }).addCase(fetchOrder.fulfilled,(state,action)=>{
            state.orderHistory = action.payload;
            state.isLoading = false;
        }).addCase(fetchOrder.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = "Oops! something went wrong";
        });
    }
});


export default slice.reducer;