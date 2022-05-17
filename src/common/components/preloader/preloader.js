import style from "./preloader.module.css"

export const Preloader = () => {
    return (
        <div className={style.preloader}>

            <div  className={`${style.bar} ${style.firstPoint}`}></div>
            <div  className={`${style.bar} ${style.secondPoint}`}></div>
            <span>Loading</span>
            <div className={`${style.bar} ${style.thirdPoint}`}></div>
            <div className={`${style.bar} ${style.fourthBar}`}></div>
        </div>
    )
}