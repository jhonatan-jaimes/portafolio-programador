import { LinkComponent } from "./LinkComponent"
import styles from "./Header.module.css"

export const HeaderComponent = () => {

    return (
        <section className={styles.header}>
            <div className={styles.contain}>
                <div>
                    <h2 className={styles.tittle}>PORTAFOLIO</h2>
                </div>
                <nav className={styles.navHead}>
                    <LinkComponent to={"/#perfil"} name={"Perfil"} className={styles.link} />
                    <LinkComponent to={"/#tecnologias"} name={"Tecnologias"} className={styles.link} />
                    <LinkComponent to={"/#proyectos"} name={"Proyectos"} className={styles.link} />
                    <LinkComponent to={"/#habilidades"} name={"Habilidades"} className={styles.link}  />
                    <LinkComponent to={"/#contacto"} name={"Contacto"} className={styles.link} />
                </nav>
            </div>
        </section>
    )
}