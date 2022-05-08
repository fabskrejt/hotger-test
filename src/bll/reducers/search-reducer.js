import {createSlice} from "@reduxjs/toolkit";
import {searchAPI} from "../../api/searchAPI";


const slice = createSlice({
    name: 'search',
    initialState: {
        countries:[]
    },
    reducers:{
        setCountries:(state, action)=> {debugger
           return void (state.countries = [...action.payload])
        }
    }
})

export const searchReducer = slice.reducer
export const {setCountries} =  slice.actions

//thunks
export const setCountriesTC =(name)=>(dispatch)=>{debugger
    searchAPI.getCountries(name)
        .then(
            res => {
                dispatch(setCountries(res.data))
            }
        )
}