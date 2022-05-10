import style from "./favorites.module.css"
import {withDeleteFromFavorites} from "../../common/hoc/deleteFromFavorites";

export const Favorites = withDeleteFromFavorites(({deleteFromFavorites, favoriteCountries}) => {

    return (
        <div className={style.favorites}>
            <ol>
                {
                    favoriteCountries.map(i =>
                        <li key={i.name.common}>
                            <span>{i.name.common}</span>
                            <button onClick={() => deleteFromFavorites(i.name.common)}>
                                delete
                            </button>
                        </li>)
                }
            </ol>
        </div>
    )
})