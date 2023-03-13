import { configureStore } from "@reduxjs/toolkit";
import messenger from "./messenger";
import settings from "./settings";

const store = configureStore({
    reducer: {
        messenger,
        settings
    }
})

export default store