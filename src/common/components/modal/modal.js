import style from "./modal.module.css"
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setFetchingError} from "../../../bll/reducers/countries-reducer";

export const Modal = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        setTimeout(() => dispatch(setFetchingError("")), 5000)
    })
    const handleCloseModal = () => {
        dispatch(setFetchingError(""))
    }
    return (
        <div className={style.modalBody} onClick={handleCloseModal}>
            {props.fetchingError}
        </div>
    )
}