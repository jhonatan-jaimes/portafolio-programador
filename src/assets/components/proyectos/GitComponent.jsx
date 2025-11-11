import { Link } from "react-router"
import styles from "./Proyec.module.css"

export const GitComponent = ({ titulo, to, parraf }) => {
    return (
        <div className={styles.gitRepo}>
            <h3>{titulo}</h3> <br /> <br />
            <Link to={to} className={styles.boton} target="_blank">Ir a GitHub</Link> 
            <br /> <br /> <br />
            <p>{parraf}</p>
        </div>
    )
}