import { configureStore } from "@reduxjs/toolkit";
import { dataReducer, matchingReducer, searchReducer } from "./dataSlice";

export const store = configureStore({
    reducer: {
        allData: dataReducer,
        data: matchingReducer,
        filter: searchReducer,
    },
})
