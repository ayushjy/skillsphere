import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import appReducer from "./features/channel/appSlice";
import inputReducer from "./features/input/inputSlice"

export default  configureStore({
    reducer:
    {
    user: userReducer,
    app: appReducer,
    input:inputReducer
    },
});

