import { IconComponent } from "./IconComponent"
import styles from "./Tecno.module.css"

export const TecnoComponent = () => {
    return (
        <section className={styles.contain} id="tecnologias">
            <h2 className={styles.titulo}>Tecnologías</h2>
            <div className={styles.iconContain}>
                <IconComponent img={"java.png"} name={"Java"} className={styles.imgIcon} />
                <IconComponent img={"spring.png"} name={"Spring"} className={styles.imgIcon} />
                <IconComponent img={"python.png"} name={"Python"} className={styles.imgIcon} />
                <IconComponent img={"js.png"} name={"JavaScript"} className={styles.imgIcon} />
                <IconComponent img={"react.png"} name={"React"} className={styles.imgIcon} />
                <IconComponent img={"mysql.png"} name={"MySQL"} className={styles.imgIcon} />
                <IconComponent img={"html.png"} name={"HTML"}  className={styles.imgIcon}/>
                <IconComponent img={"css.png"} name={"CSS"} className={styles.imgIcon} />
                <IconComponent img={"git.png"} name={"Git"} className={styles.imgIcon} />
            </div>
        </section>
    )
}