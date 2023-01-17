import { configureStore } from "@reduxjs/toolkit";
import webseriesReducer from "./webseries/webseriesSlice";

 export const store = configureStore({
       reducer: {
        series:webseriesReducer},
})