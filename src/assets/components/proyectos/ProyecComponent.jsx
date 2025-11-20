import { CardComponent } from "./CardComponent"
import { GitComponent } from "./GitComponent"
import styles from "./Proyec.module.css"

export const ProyecComponent = () => {
    return (
        <section className={styles.contain} id="proyectos">
            <h2 className={styles.titulo}>Proyectos</h2>
            <div className={styles.containCard}>
                <CardComponent tittle={"EDSQ"} img={"img-site-org.png"} text={"lorem"} to={"/edsq"} />
            </div> <br />
            <div className={styles.containCard}>
                <GitComponent titulo={"Cantidades"} to={"https://github.com/jhonatan-jaimes/back-obra"} parraf={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est vero sunt natus nostrum dolorum sapiente harum tenetur veritatis porro ducimus ipsam facere nulla id officiis, velit reiciendis cupiditate voluptates!"} />
                <GitComponent titulo={"Cantidades"} to={"https://github.com/jhonatan-jaimes/back-obra"} parraf={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est vero sunt natus nostrum dolorum sapiente harum tenetur veritatis porro ducimus ipsam facere nulla id officiis, velit reiciendis cupiditate voluptates!"} />
                <GitComponent titulo={"Cantidades"} to={"https://github.com/jhonatan-jaimes/back-obra"} parraf={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est vero sunt natus nostrum dolorum sapiente harum tenetur veritatis porro ducimus ipsam facere nulla id officiis, velit reiciendis cupiditate voluptates!"} />

            </div>
        </section>
    )
}