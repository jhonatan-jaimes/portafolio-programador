import { IconComponent } from "./IconComponent"
import styles from "./Tecno.module.css"

export const TecnoComponent = () => {
    return (
        <section className={styles.contain} id="tecnologias">
            <h2 className={styles.titulo}>Tecnologías</h2>
            <div className={styles.iconContain}>
                <IconComponent img={"java.png"} name={"Java"} />
                <IconComponent img={"spring.png"} name={"Spring"} />
                <IconComponent img={"python.png"} name={"Python"} />
                <IconComponent img={"js.png"} name={"JavaScript"} />
                <IconComponent img={"react.png"} name={"React"} />
                <IconComponent img={"html.png"} name={"HTML"} />
                <IconComponent img={"css.png"} name={"CSS"} />
                <IconComponent img={"git.png"} name={"Git"} />
            </div>
        </section>
    )
}