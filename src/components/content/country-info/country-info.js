import style from "./country-info.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    addToFavoriteCountries,
    setCountries,
    setFavoriteCountries,
    setInitialized
} from "../../../bll/reducers/search-reducer";
import {withDeleteFromFavorites} from "../../../common/hoc/deleteFromFavorites";

export const CountryInfo = withDeleteFromFavorites(({country,deleteFromFavorites,favoriteCountries}) => {
    console.log('render')
    const dispatch = useDispatch()
    const initialized = useSelector((state) => state.searchReducer.initialized)
    const bordersCountries = useSelector((state) => state.searchReducer.bordersCountries)
    const favoriteCountriesName = favoriteCountries.map(i => i.name.common)

    //Get favorite countries from local storage and set it to state
    useEffect(() => {
        const countriesFromLocalStorage = localStorage.getItem('favoriteCountries')

        countriesFromLocalStorage &&
        dispatch(setFavoriteCountries(JSON.parse(countriesFromLocalStorage)))
        dispatch(setInitialized())
    }, [])

    //Set favorite countries to local storage
    useEffect(() => {
        initialized &&
        localStorage.setItem("favoriteCountries", JSON.stringify(favoriteCountries))
    }, [favoriteCountries])


    const addToFavorite = () => {
        dispatch(addToFavoriteCountries(country))
    }

    //Chose country for info from borders
    const choseBorderCountry = (e) => {
        e.target.id &&
        dispatch(setCountries([bordersCountries[e.target.id]]))
    }


    return initialized && (
        <div className={style.countryInfo}>
            {country
                ? <>
                    <img src={country.flags.png} alt={"country flag"}/>
                    <span>{country.name.common}</span>
                    <span>{Object.values(country.languages).join(", ")}</span>
                    <span>{country.cca3}</span>
                    <ul onClick={choseBorderCountry}>Border countries
                        {
                            bordersCountries.map((item, index) =>
                                <li key={index} id={index}>{item.name.common}</li>)
                        }
                    </ul>
                    {
                        favoriteCountriesName.includes(country.name.common)
                            ? <button onClick={()=>deleteFromFavorites(country.name.common)}>delete from favorites</button>
                            : <button onClick={addToFavorite}>add to favorites</button>
                    }
                </>
                : 'Please, enter country name'
            }
        </div>
    )
})