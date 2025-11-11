import { LinkComponent } from "./LinkComponent"
import styles from "./Header.module.css"

export const HeaderComponent = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      };

    return (
        <section className={styles.header}>
            <div className={styles.contain}>
                <div>
                    <h2 className={styles.tittle}>PORTAFOLIO</h2>
                </div>
                <nav className={styles.navHead}>
                    <LinkComponent to={"/"} name={"Inicio"} className={styles.link} onClick={scrollToSection} />
                    <LinkComponent to={"/perfil"} name={"Perfil"} className={styles.link} onClick={scrollToSection} />
                    <LinkComponent to={"/tecnologias"} name={"Tecnologias"} className={styles.link} onClick={scrollToSection} />
                    <LinkComponent to={"/proyectos"} name={"Proyectos"} className={styles.link} onClick={scrollToSection}/>
                    <LinkComponent to={"/habilidades"} name={"Habilidades"} className={styles.link} onClick={scrollToSection} />
                    <LinkComponent to={"/contacto"} name={"Contacto"} className={styles.link} onClick={scrollToSection} />
                </nav>
            </div>
        </section>
    )
}