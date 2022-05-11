import style from "./favorites.module.css"
import {withDeleteFromFavorites} from "../../common/hoc/deleteFromFavorites";

export const Favorites = withDeleteFromFavorites(({deleteFromFavorites, favoriteCountries}) => {

    return (
        <div className={style.favorites}>
            <h3>My favorites</h3>
            <ol>
                {
                    favoriteCountries.length !== 0 ?
                        favoriteCountries.map(i =>
                            <li key={i.name.common}>
                                <span>{i.name.common}</span>
                                <button onClick={() => deleteFromFavorites(i.name.common)}>
                                    X
                                </button>
                            </li>)
                        : "Add some country to favorite"
                }
            </ol>
        </div>
    )
})