import { Link } from "react-router"
import { IconComponent } from "../tecnologias/IconComponent"
import styles from "./Proyec.module.css"

export const CardComponent = ({ tittle, text, img, to }) => {
    return (
        <Link className={styles.cardContain} to={to} target="_blank">
            <div className={styles.imgCard}>
                <img src={img} alt={tittle.toLowerCase()} className={styles.img} />
            </div>
            <div className={styles.parCard}>
                <h3>{tittle}</h3>
                <p>{text}</p>
                <div className={styles.iconContain}>
                    <IconComponent img={"java.png"} name={"JV"} className={styles.imgIcon} />
                    <IconComponent img={"spring.png"} name={"SP"} className={styles.imgIcon} />
                    <IconComponent img={"js.png"} name={"JS"} className={styles.imgIcon} />
                    <IconComponent img={"react.png"} name={"RC"} className={styles.imgIcon} />
                    <IconComponent img={"mysql.png"} name={"MS"} className={styles.imgIcon} />
                    <IconComponent img={"html.png"} name={"HT"} className={styles.imgIcon} />
                    <IconComponent img={"css.png"} name={"CS"} className={styles.imgIcon} />
                </div>
            </div>
        </Link>
    )
}