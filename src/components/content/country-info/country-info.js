import style from "./country-info.module.css"
import {useSelector} from "react-redux";

export const CountryInfo = () => {
    const countries = useSelector(state => state.searchReducer.countries)
    return (
        <div className={style.countryInfo}>
            {countries.map(i =>
                <div className={style.country}>
                    <img src={i.flags.png} alt={"country flag"}/>
                    <span>{i.name.common}</span>
                    {/*<span>{i.flag}</span>*/}
                    <span>{i.cca3}</span>
                    <button>add to favorite</button>
                </div>
            )
            }
        </div>
    )
}