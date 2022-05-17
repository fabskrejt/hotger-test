import {combineReducers} from "redux";
import {countriesReducer} from "../reducers/countries-reducer";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers(
    {
        searchReducer:countriesReducer
    }
)

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware =>
    getDefaultMiddleware()
        .prepend(thunkMiddleware)
    )
})

window.store = store