import {deleteFromFavoriteCountries} from "../../bll/reducers/search-reducer";
import {useDispatch, useSelector} from "react-redux";

export const withDeleteFromFavorites = (Component) => {

    return (props) => {
        const dispatch = useDispatch()
        const favoriteCountries = useSelector((state) => state.searchReducer.favoriteCountries)
        const deleteFromFavorites = (countryName) => {
            dispatch(deleteFromFavoriteCountries(countryName))
        }
        return <Component
            {...props}
            deleteFromFavorites={deleteFromFavorites}
            favoriteCountries={favoriteCountries}/>
    }
}