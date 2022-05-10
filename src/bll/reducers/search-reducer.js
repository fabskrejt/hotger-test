import {createSlice} from "@reduxjs/toolkit";
import {searchAPI} from "../../api/searchAPI";


const slice = createSlice({
    name: 'search',
    initialState: {
        countries: [],
        favoriteCountries: [],
        initialized: false
    },
    reducers: {
        setCountries: (state, action) => {
            return void (state.countries = [...action.payload])
        },
        setFavoriteCountries: (state, action) => {
            return void (state.favoriteCountries = [...action.payload])
        },
        setInitialized: (state, action) => {
            return void (state.initialized = true)
        }
    }
})

export const searchReducer = slice.reducer
export const {setCountries, setFavoriteCountries, setInitialized} = slice.actions

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
                dispatch(getCountriesByAlpha3NameTC)

            }
        )
}
