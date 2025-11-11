import styles from "./Tecno.module.css"

export const IconComponent = ({img, name}) => {
    return (
        <div className={styles.icon}>
            <img src={img} alt={name.toLowerCase()} className={styles.imgIcon} />
            <p>{name}</p>
        </div>
    )
}