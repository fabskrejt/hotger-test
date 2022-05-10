import {CountryInfo} from "./country-info/country-info";
import {SearchResults} from "./search-results/search-results";
import style from "./content.module.css"
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const Content = () => {
    const countries = useSelector(state => state.searchReducer.countries)
    const [country, setCountry] = useState("")
    console.log('Content')
    useEffect(() => {
        if (countries.length === 1) {
            setCountry(countries[0])
        } else {
            country && setCountry("")
        }
    }, [countries])

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