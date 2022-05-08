import {combineReducers} from "redux";
import {searchReducer} from "../reducers/search-reducer";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers(
    {
        searchReducer:searchReducer
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