import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"Message-Slice",
    initialState:{
        morningMessage: "GM..",
        eveningMessage: "GE..",
        nightMessage : "GN...."
    }
});

export default slice.reducer;