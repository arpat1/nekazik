import { useRef } from "react"
import styles from "./Wheel.module.css"
import { useState } from "react"

const Wheel = () => {
    const wheel = useRef(0)
    const [clickCount, setClickCount] = useState(0)
    const prizes = ["ferrari", "playstation 5", "anhayt priz ?", "17 pro max", "kvartira", "3d printer", "ployka/tenis", "200$"]
    const controlPrizes = [50, 1307, 808]
    const onClickHandle = () => {
        if (clickCount != 3){
            let rotateAngle = Math.ceil(3600+controlPrizes[clickCount])
            wheel.current.style.transform = `rotate(${rotateAngle}deg)`
            setClickCount((prev)=>prev+1)
        }
    }
    return (
        <div className={styles["container"]}>
            <div className={styles["wheel"]} onClick={onClickHandle} ref={wheel}>
                {[...Array(4)].map((_, i) => <span key={i} style={{"--i": i}}></span>)}
                <div className={styles["number"]}>
                    {prizes.map((prize, i) => <b key={i} style={{"--i": i}}>{prize}</b>)}
                </div>
            </div>
        </div>
    )
}

export default Wheel