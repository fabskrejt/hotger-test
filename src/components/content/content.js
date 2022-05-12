import {CountryInfo} from "./country-info/country-info";
import {SearchResults} from "./search-results/search-results";
import style from "./content.module.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getCountriesByAlpha3NameTC} from "../../bll/reducers/search-reducer";

export const Content = () => {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.searchReducer.countries)
    const [country, setCountry] = useState("")

    useEffect(() => {
        if (countries.length === 1) {
            setCountry(countries[0])
        } else {
            country && setCountry("")
        }
    }, [countries])

    useEffect(() => {
        country.borders &&
        dispatch(getCountriesByAlpha3NameTC(country.borders))
    }, [country])


    return (
        <div className={style.content}>
            <CountryInfo country={country}/>
            {
                countries.length > 1
                && <SearchResults countries={countries} setCountry={setCountry}/>
            }
        </div>
    )
}