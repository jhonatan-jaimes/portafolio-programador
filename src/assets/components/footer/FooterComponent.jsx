
import React from 'react'
import { Link } from 'react-router'
import styles from "./Footer.module.css"

export const FooterComponent = () => {
    return (
        <footer className={styles.contain}>
            <div className={styles.contDiv}>
                <div>
                <h2>PORTAFOLIO</h2>
                </div>
                <div>
                    <h3>Contacto</h3> <br />
                    <div className={styles.contactIt}><p>Telef:</p> <p className={styles.link}>3148466202</p> </div>
                    <div className={styles.contactIt}><p>Email: </p> <p className={styles.link}>jejo.arch@gmail.com</p> </div>
                    <div className={styles.contactIt}>
                        <p>LinkedIn: </p>
                        <Link to={"https://www.linkedin.com/in/jhonatan-jaimes-2382ab226/"} target="_blank" className={styles.link}>
                                https://www.linkedin.com/in/jhonatan-jaimes-2382ab226/
                        </Link> 
                     </div>
                </div>
            </div>
        </footer>
    )
}