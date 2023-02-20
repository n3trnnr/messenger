import { configureStore } from "@reduxjs/toolkit";
import messenger from "./messenger";

const store = configureStore({
    reducer: {
        messenger
    }
})

export default store