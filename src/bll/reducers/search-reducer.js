import {createSlice} from "@reduxjs/toolkit";
import {searchAPI} from "../../api/searchAPI";


const slice = createSlice({
    name: 'search',
    initialState: {
        countries: [],
        favoriteCountries: []
    },
    reducers: {
        setCountries: (state, action) => {
            return void (state.countries = [...action.payload])
        },
        setFavoriteCountries: (state, action) => {
            return void (state.favoriteCountries = [...action.payload])
        }
    }
})

export const searchReducer = slice.reducer
export const {setCountries, setFavoriteCountries} = slice.actions

//thunks
export const setCountriesTC = (name) => (dispatch) => {
    debugger
    searchAPI.getCountries(name)
        .then(
            res => {
                dispatch(setCountries(res.data))
            }
        )
}