import {createSlice} from "@reduxjs/toolkit";
import {searchAPI} from "../../api/searchAPI";


const slice = createSlice({
    name: "countries",
    initialState: {
        countries: [],
        favoriteCountries: [],
        bordersCountries: [],
        initialized: false,
        dataIsFetching: false,
        fetchingError: "",
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
        },
        setDataIsFetching: (state, action) => {
            return void (state.dataIsFetching = action.payload)
        },
        setFetchingError: (state, action) => {
            return void (state.fetchingError = action.payload)
        }
    }
})

export const countriesReducer = slice.reducer
export const {
    setCountries, setFavoriteCountries,
    setBordersCountries, setInitialized,
    deleteFromFavoriteCountries, addToFavoriteCountries,
    setDataIsFetching, setFetchingError,
} = slice.actions

//thunks
export const setCountriesTC = (name) => async (dispatch) => {
    dispatch(setDataIsFetching(true))
    try {
        const response = await searchAPI.getCountries(name)
        dispatch(setCountries(response.data))
    } catch (error) {
        dispatch(setFetchingError(error.response.data.message))
        dispatch(setCountries([]))
    } finally {
        dispatch(setDataIsFetching(false))
    }
}
export const getCountriesByAlpha3NameTC = (alpha3NamesArr) => async (dispatch) => {
    dispatch(setDataIsFetching(true))
    try {
        const response = await searchAPI.getCountriesByAlpha3Name(alpha3NamesArr)
        dispatch(setBordersCountries(response.data))
    } catch (error) {
        debugger
        dispatch(setFetchingError(error.response.data.message))
    } finally {
        dispatch(setDataIsFetching(false))
    }
}
