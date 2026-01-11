import styles from "./Tecno.module.css"

export const IconComponent = ({img, name, className}) => {
    return (
        <div className={styles.icon}>
            <img src={img} alt={name.toLowerCase()} className={className} />
            <p>{name}</p>
        </div>
    )
}