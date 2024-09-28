import { configureStore } from "@reduxjs/toolkit";

const temporaryReducer = (state = {}) => state; // Временный редьюсер

export const store = configureStore({
    reducer: {
        temp: temporaryReducer, 
    }
})

