import { configureStore } from "@reduxjs/toolkit";
import messenger from "./messanger";

const store = configureStore({
    reducer: {
        messenger
    }
})

export default store