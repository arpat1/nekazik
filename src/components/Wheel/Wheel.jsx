import { useRef } from "react"
import styles from "./Wheel.module.css"

const Wheel = () => {
    const wheel = useRef(0)
    const onClickHandle = () => {
        let rotate_angle = Math.ceil(Math.random() * 3600)
        wheel.current.style.transform = `rotate(${rotate_angle}deg)` 
    }
    return (
        <div className={styles["container"]}>
            <div className={styles["wheel"]} onClick={onClickHandle} ref={wheel}>
                {[...Array(4)].map((_, i) => <span key={i} style={{"--i": i}}></span>)}
                <div className={styles["number"]}>
                    {[...Array(8)].map((_, i) => <b key={i} style={{"--i": i}}>{i}</b>)}
                </div>
            </div>
        </div>
    )
}

export default Wheel