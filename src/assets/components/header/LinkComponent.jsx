import { Link } from "react-router"

export const LinkComponent = ({to, name, className, onClick}) => {
    return (
        <>
            <Link to={to} className={className} onClick={() => onClick(name.toLowerCase())}>{name}</Link>
        </>
    )
}