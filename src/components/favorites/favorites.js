import style from "./favorites.module.css"
import {withDeleteFromFavorites} from "../../common/hoc/deleteFromFavorites";

export const Favorites = withDeleteFromFavorites(({deleteFromFavorites, favoriteCountries}) => {

    return (
        <div className={style.favorites}>
            <h3>My favorites</h3>
            <ol>
                {
                    favoriteCountries.length !== 0 ?
                        favoriteCountries.map(i => <div key={i.name.common} className={style.favoritesElement}>
                                <li>
                                    <span>{i.name.common}</span>
                                </li>
                                <button onClick={() => deleteFromFavorites(i.name.common)}>
                                    X
                                </button>
                            </div>
                        )
                        : "Add some country to favorite"
                }
            </ol>
        </div>
    )
})