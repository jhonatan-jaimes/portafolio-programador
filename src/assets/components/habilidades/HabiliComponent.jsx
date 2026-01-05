import React from 'react'
import styles from "./Habili.module.css"
import { Link } from 'react-router'

export const HabiliComponent = () => {
    return (
        <section className={styles.habiContain} id='habilidades'>
            <h2 className={styles.titulo}>Habilidades</h2>
            <div className={styles.habiFlex}>
                <p>CREATIVIDAD</p>
                <p>ADAPTABILIDAD</p>
                <p>COMUNICACIÓN EFECTIVA</p>
                <p>TRABAJO EN EQUIPO</p>
                <p>PROACTIVO</p>
            </div>
            <a href="/CV_Programador_2025a.pdf" download>
                <button className={styles.botonDes}>Descargar PDF</button>
            </a>
        </section>
    )
}

