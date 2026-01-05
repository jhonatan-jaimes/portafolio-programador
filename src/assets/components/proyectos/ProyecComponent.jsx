import { CardComponent } from "./CardComponent"
import { GitComponent } from "./GitComponent"
import styles from "./Proyec.module.css"

export const ProyecComponent = () => {
    return (
        <section className={styles.contain} id="proyectos">
            <h2 className={styles.titulo}>Proyectos</h2>
            <div className={styles.containCard}>
                <CardComponent 
                    tittle={"EDSQ"} 
                    img={"page_edsq.png"} 
                    text={"EDSQ es una plataforma web gratuita que centraliza herramientas digitales simples y seguras para codificar y decodificar texto, acortar enlaces y generar códigos QR, pensada para optimizar la gestión de información de forma rápida y accesible."} 
                    to={"https://edsq-app.onrender.com/"} />
            </div> <br />
            <h2 className={styles.titulo}>Proyectos github</h2>
            <div className={styles.containCard}>
                <GitComponent
                    titulo={"EDSQ frontend"}
                    to={"https://github.com/jhonatan-jaimes/front-crypt"}
                    parraf={"El front-end de EDSQ está desarrollado con React (JavaScript) y React Router, ofreciendo una interfaz rápida, ligera y moderna, con navegación fluida entre secciones sin recargar la página. Su diseño es simple e intuitivo, enfocado en la usabilidad y el rendimiento, sin dependencias innecesarias."} />
                <GitComponent
                    titulo={"EDSQ backend"}
                    to={"https://github.com/jhonatan-jaimes/encode-decode-backend"}
                    parraf={"El backend de EDSQ fue desarrollado completamente por mí, incluyendo los métodos de encriptación, desencriptación y generación de hashes para el acortador de enlaces. La única funcionalidad externa utilizada es una biblioteca para la generación de imágenes QR, integrada para garantizar resultados rápidos y confiables."} />
                <GitComponent
                    titulo={"Cantidades de obra"}
                    to={"https://github.com/jhonatan-jaimes/back-obra"}
                    parraf={"Cantidades de Obra es una aplicación en desarrollo creada con Java y Spring, que utiliza MySQL como base de datos, enfocada en la gestión y cálculo de cantidades de obra de forma estructurada y eficiente."} />

            </div>
        </section>
    )
}