import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import OrderSlice from "./OrderSlice";
const store = configureStore({
    reducer:{
        current_user: UserSlice,
        users_order: OrderSlice
    }
});

export default store;