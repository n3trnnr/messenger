import { configureStore } from "@reduxjs/toolkit";
import messenger from "./messenger";
import settings from "./settings";
import main from "./main";

const store = configureStore({
    reducer: {
        messenger,
        settings,
        main
    }
})

export default store