import style from './search-form.module.css'
import {setCountriesTC} from "../../bll/reducers/search-reducer";
import {useDispatch} from "react-redux";
import {useState} from "react";

export const SearchForm = () => {
    const dispatch = useDispatch()
    const [searchInputValue, setSearchInputValue] = useState("")
    const [validationError, setValidationError] = useState(false)

    const onChangeSearchInputValue = (e) => {
        const RegExpression = /^[a-zA-Z\s]*$/;
        if( RegExpression.test(e.currentTarget.value)){
            setSearchInputValue(e.currentTarget.value)
            validationError && setValidationError(!validationError)
        } else{
            setValidationError(true)
        }
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(setCountriesTC(searchInputValue))
        setSearchInputValue("")
    }
    return (
        <div className={style.searchForm}>
            <form onSubmit={submit}>
                <input type={'text'} placeholder={'type country name'}
                       value={searchInputValue} onChange={onChangeSearchInputValue}
                />
                {validationError&& <span>Please use only letters and spaces </span>}
                <button type={"submit"}>search</button>
            </form>
        </div>
    )
}