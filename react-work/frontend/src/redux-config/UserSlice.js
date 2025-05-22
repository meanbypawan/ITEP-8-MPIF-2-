import { createSlice } from "@reduxjs/toolkit";
import { isLoggedIn } from "../components/Auth";

const slice = createSlice({
    name: "user-slice",
    initialState:{
        user: null,
        isLoggedIn: false
    },
    reducers:{
        setUser: (state,action)=>{
          state.user = action.payload.user;
          state.isLoggedIn = true
        },
        logOut: (state,action)=>{
            state.user = null;
            state.isLoggedIn = false;
        }
    }

});
export const {setUser,logOut} = slice.actions;
export default slice.reducer;