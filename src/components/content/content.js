import {CountryInfo} from "./country-info/country-info";
import {SearchResults} from "./search-results/search-results";
import style from "./content.module.css"

export const Content = () => {
    return (
        <div className={style.content}>
            <CountryInfo/>
            <SearchResults/>
        </div>
    )
}