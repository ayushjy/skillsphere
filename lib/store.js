import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import appReducer from "./features/channel/appSlice";

export default  configureStore({
    reducer:
    {
    user: userReducer,
    app: appReducer,
    },
});

