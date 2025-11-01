import styles from "./Tickets.module.css"

const Tickets = () => {
    return (
        <header>
            <div className={styles["tickets"]}>
                <img src="src/assets/ticket_icon.svg" width="15px" height="15px" className={styles["tick-img"]}/>
                <span className={styles["tick-count"]}>3</span>
            </div>
        </header>
    )
}

export default Tickets