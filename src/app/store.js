import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../slice/userSlice"
import projectSlice from "../slice/projectSlice"

const store = configureStore({
    reducer:{
        userInfo:userReducer,
        projectItem:projectSlice,
    }
})

export default store