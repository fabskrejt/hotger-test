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
import {Preloader} from "../../../common/components/preloader/preloader";
import {retry} from "@reduxjs/toolkit/query";

export const CountryInfo = withDeleteFromFavorites(({country, deleteFromFavorites, favoriteCountries}) => {
    console.log('render')
    const dispatch = useDispatch()
    const initialized = useSelector((state) => state.searchReducer.initialized)
    const bordersCountries = useSelector((state) => state.searchReducer.bordersCountries)
    const favoriteCountriesName = favoriteCountries.map(i => i.name.common)

    const dataIsFetching = useSelector(state => state.searchReducer.dataIsFetching)

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

    if(dataIsFetching) return  <div className={style.countryInfo}><Preloader/></div>
    return initialized && (
        <div className={style.countryInfo}>
           {/* {dataIsFetching && <Preloader/>}*/}
            {country
                ? <>
                    <img src={country.flags.png} alt={"country flag"}/>
                    <div>
                        <h5>Country name</h5>
                        <span>{country.name.common}</span>
                    </div>
                    <div>
                        <h5>Languages</h5>
                        <span>{Object.values(country.languages).join(", ")}</span>
                    </div>
                    <div>
                        <h5>Code</h5>
                        <span>{country.cca3}</span>
                    </div>
                    <div>
                        <h5>Border countries</h5>
                        <ul onClick={choseBorderCountry}>
                            {
                                bordersCountries.map((item, index) =>
                                    <li key={index} id={index}>{item.name.common}</li>)
                            }
                        </ul>
                    </div>
                    {
                        favoriteCountriesName.includes(country.name.common)
                            ? <button onClick={() => deleteFromFavorites(country.name.common)}>delete from
                                favorites</button>
                            : <button onClick={addToFavorite}>add to favorites</button>
                    }
                </>
                : 'Please, enter country name'
            }
        </div>
    )
})

