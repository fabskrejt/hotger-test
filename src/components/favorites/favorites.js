import style from "./favorites.module.css"
import {useDispatch, useSelector} from "react-redux";
import {setFavoriteCountries} from "../../bll/reducers/search-reducer";

export const Favorites = () => {

    const dispatch = useDispatch()
    const favoriteCountries = useSelector((state) => state.searchReducer.favoriteCountries)


    const removeFromLocalStorage = (country) => {
        const filteredFavoriteCountries = favoriteCountries.filter(i => i !== country)
        dispatch(setFavoriteCountries(filteredFavoriteCountries))
    }

    return (
        <div className={style.favorites}>
            {favoriteCountries.map(i =>
                <div key={i.name.common}>
                    <span>{i.name.common}</span>
                    <button onClick={() => removeFromLocalStorage(i)}>delete</button>
                </div>)}
        </div>
    )
}