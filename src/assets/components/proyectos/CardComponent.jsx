import { Link } from "react-router"
import styles from "./Proyec.module.css"

export const CardComponent = ({ tittle, text, img, to }) => {
    return (
        <Link className={styles.cardContain} to={to}>
            <h3>{tittle}</h3> <br />
            <img src={img} alt={tittle.toLowerCase()} className={styles.img} /> <br /> <br />
            <p>{text}</p>
        </Link>
    )
}