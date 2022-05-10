import style from "./country-info.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setFavoriteCountries, setInitialized} from "../../../bll/reducers/search-reducer";

export const CountryInfo = ({country}) => {
    console.log('render')
    const dispatch = useDispatch()
    const favoriteCountries = useSelector((state) => state.searchReducer.favoriteCountries)
    const initialized = useSelector((state) => state.searchReducer.initialized)


    //Get favorite countries from local storage and set it to state
    useEffect(() => {
        const countriesFromLocalStorage = localStorage.getItem('favoriteCountries')

        countriesFromLocalStorage &&
        dispatch(setFavoriteCountries(JSON.parse(countriesFromLocalStorage)))
        dispatch(setInitialized())
    }, [])

    //Set favorite countries to  local storage
    useEffect(() => {
        initialized &&
        localStorage.setItem("favoriteCountries", JSON.stringify(favoriteCountries))
    }, [favoriteCountries])


    const addToFavorite = () => {
        dispatch(setFavoriteCountries([...favoriteCountries, country]))
    }

    return initialized && (
        <div className={style.countryInfo}>
            {country
                ? <>
                    <img src={country.flags.png} alt={"country flag"}/>
                    <span>{country.name.common}</span>
                    <span>{Object.values(country.languages).join(", ")}.</span>
                    <span>{country.cca3}</span>
                    <button onClick={addToFavorite}>add to favorite</button>
                </>
                : 'Please, enter country name'
            }
        </div>
    )
}