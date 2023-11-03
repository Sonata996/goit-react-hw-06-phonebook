import { configureStore } from "@reduxjs/toolkit";
import { contacReducer } from "./addContact";
import { filterReducer } from "./filter";


export const store = configureStore({
    reducer:{
        contacts:contacReducer,
        filter: filterReducer
    }
})