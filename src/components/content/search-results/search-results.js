import style from './search-results.module.css'

export const SearchResults = ({countries, setCountry}) => {
    return (
        <div className={style.searchResults}>
            {countries.map(i =>
                <div key={i.name.common} className={style.country}>
                    <span>{i.flag}</span>
                    <span>{i.name.common}</span>
                    <span>{i.cca3}</span>
                    <button onClick={() => setCountry(i)}>Show more</button>
                </div>
            )
            }
        </div>
    )
}