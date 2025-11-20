import styles from "./Perfil.module.css"

export const PerfilComponent = () => {
    return (
        <section className={styles.contain} id="perfil">
            <div className={styles.perfil}>
                <div className={styles.iPerfil}>
                    <img src="foto-002.jpg" alt="foto" className={styles.imgPerfil} />
                </div>
                <div className={styles.pPerfil}>
                    <h2>Jhonatan Jaimes Ovallos</h2><br />
                    <h3>Programador</h3><br />
                    <p>Desarrollador Full-Stack con una sólida base en ingeniería de software, especializado en diseñar y construir aplicaciones web completas. Experto en el desarrollo backend (APIs, servidores, bases de datos) y en el desarrollo frontend (interfaces de usuario modernas, responsivas y accesibles). Comprometido con la escritura de código limpio, eficiente y con una mentalidad orientada a la creación de productos digitales de calidad.</p>
                </div>
            </div>
        </section>
    )
}