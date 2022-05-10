import style from './search-form.module.css'
import {setCountriesTC} from "../../bll/reducers/search-reducer";
import {useDispatch} from "react-redux";

export const SearchForm = () => {
    const dispatch = useDispatch()
    const submit = (e) => {
        e.preventDefault()
        dispatch(setCountriesTC(e.currentTarget[0].value))
        e.currentTarget.reset()
    }
    return (
        <div className={style.searchForm}>
            <form onSubmit={submit}>
                <input type={'text'} placeholder={'type country name'}/>
                <button type={"submit"}>search</button>
            </form>
        </div>
    )
}