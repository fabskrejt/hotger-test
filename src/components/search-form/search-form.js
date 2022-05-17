import style from './search-form.module.css'
import {setCountriesTC} from "../../bll/reducers/countries-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

export const SearchForm = () => {
    const dispatch = useDispatch()
    const [searchInputValue, setSearchInputValue] = useState("")
    const [validationError, setValidationError] = useState(false)
    const dataIsFetching = useSelector(state => state.searchReducer.dataIsFetching)

    const onChangeSearchInputValue = (e) => {
        const regExp = /^[a-zA-Z\s]*$/;
        if (regExp.test(e.currentTarget.value)) {
            setSearchInputValue(e.currentTarget.value)
            validationError && setValidationError(false)
        } else {
            setValidationError(true)
        }
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(setCountriesTC(searchInputValue.trim()))
        setSearchInputValue("")
    }
    return (
        <div className={style.searchForm}>
            <div className={style.searchFormContent}>
                <form onSubmit={submit}>
                    <input type={'text'} placeholder={'type country name'}
                           value={searchInputValue} onChange={onChangeSearchInputValue}
                    />
                    <button type={"submit"} disabled={dataIsFetching}>search</button>
                    {validationError &&
                    <div className={style.validationError}>use only english letters and spaces</div>
                    }
                </form>
            </div>
        </div>
    )
}