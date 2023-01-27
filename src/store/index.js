import {configureStore} from "@reduxjs/toolkit";
import isLoading from "./slices/isLoading.slice.js";

export default configureStore({
    reducer: {
        isLoading
    }
});
