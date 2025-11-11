import { Link } from "react-router"

export const LinkComponent = ({to, name, className}) => {
    return (
        <>
            <Link to={to} className={className} >{name}</Link>
        </>
    )
}