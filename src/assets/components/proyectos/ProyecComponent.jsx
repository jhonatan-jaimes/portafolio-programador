import { CardComponent } from "./CardComponent"
import { GitComponent } from "./GitComponent"
import styles from "./Proyec.module.css"

export const ProyecComponent = ({ texts }) => {
    return (
        <section className={styles.contain} id="proyectos">
            <h2 className={styles.titulo}>Proyectos</h2>
            <div className={styles.containCard}>
                <CardComponent 
                    tittle={"EDSQ"} 
                    img={"page_edsq.png"} 
                    text={ texts.edsqDes } 
                    to={"https://edsq-app.onrender.com/"} />
            </div> <br />
            <h2 className={styles.titulo}>Proyectos github</h2>
            <div className={styles.containCard}>
                <GitComponent
                    titulo={"EDSQ frontend"}
                    to={"https://github.com/jhonatan-jaimes/front-crypt"}
                    parraf={ texts.edsqParFront } />
                <GitComponent
                    titulo={"EDSQ backend"}
                    to={"https://github.com/jhonatan-jaimes/encode-decode-backend"}
                    parraf={ texts.edsqParbacke } />
                <GitComponent
                    titulo={"Cantidades de obra"}
                    to={"https://github.com/jhonatan-jaimes/back-obra"}
                    parraf={ texts.obraCanti } />

            </div>
        </section>
    )
}