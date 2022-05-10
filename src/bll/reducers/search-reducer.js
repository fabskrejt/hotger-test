import {createSlice} from "@reduxjs/toolkit";
import {searchAPI} from "../../api/searchAPI";


const slice = createSlice({
    name: 'search',
    initialState: {
        countries: [],
        favoriteCountries: [],
        bordersCountries: [],
        initialized: false
    },
    reducers: {
        setCountries: (state, action) => {
            return void (state.countries = [...action.payload])
        },
        setFavoriteCountries: (state, action) => {
            return void (state.favoriteCountries = action.payload)
        },
        setBordersCountries: (state, action) => {
            return void (state.bordersCountries = [...action.payload])
        },
        addToFavoriteCountries: (state, action) => {
            return void (state.favoriteCountries = [...state.favoriteCountries, action.payload])
        },
        deleteFromFavoriteCountries: (state, action) => {
            return void (state.favoriteCountries = state.favoriteCountries.filter(
                i => i.name.common !== action.payload))
        },
        setInitialized: (state, action) => {
            return void (state.initialized = true)
        }
    }
})

export const searchReducer = slice.reducer
export const {
    setCountries, setFavoriteCountries,
    setBordersCountries, setInitialized,
    deleteFromFavoriteCountries, addToFavoriteCountries
} = slice.actions

//thunks
export const setCountriesTC = (name) => (dispatch) => {
    searchAPI.getCountries(name)
        .then(
            res => {
                dispatch(setCountries(res.data))
            }
        )
}
export const getCountriesByAlpha3NameTC = (alpha3NamesArr) => (dispatch) => {
    searchAPI.getCountriesByAlpha3Name(alpha3NamesArr)
        .then(
            res => {
                dispatch(setBordersCountries(res.data))
            }
        )
}
