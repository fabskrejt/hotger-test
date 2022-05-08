import style from "./country-info.module.css"

export const CountryInfo = ({country}) => {

    return (
        <div className={style.countryInfo}>
            {country
                ? <>
                    <img src={country.flags.png} alt={"country flag"}/>
                    <span>{country.name.common}</span>
                    <span>{country.cca3}</span>
                    <button>add to favorite</button>
                </>
                : 'Please, enter country name'
            }
        </div>
    )

    /*    return country &&
            (
                <div className={style.countryInfo}>
                    <img src={country.flags.png} alt={"country flag"}/>
                    <span>{country.name.common}</span>
                    {/!* <span>{country.flag}</span>*!/}
                    <span>{country.cca3}</span>
                    <button>add to favorite</button>
                </div>
            )*/
}