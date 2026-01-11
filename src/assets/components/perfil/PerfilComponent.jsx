import styles from "./Perfil.module.css"

export const PerfilComponent = ({ texts }) => {
    return (
        <section className={styles.contain} id="perfil">
            <div className={styles.perfil}>
                <div className={styles.iPerfil}>
                    <img src="foto-002.jpg" alt="foto" className={styles.imgPerfil} />
                </div>
                <div className={styles.pPerfil}>
                    <h2>{ texts.name }</h2><br />
                    <h3>{ texts.career }</h3><br />
                    <p>{ texts.perfil }</p>
                </div>
            </div>
        </section>
    )
}
