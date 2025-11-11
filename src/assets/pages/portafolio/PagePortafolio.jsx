import { HeaderComponent } from "../../components/header/HeaderComponent"
import { PerfilComponent } from "../../components/perfil/PerfilComponent"
import { TecnoComponent } from "../../components/tecnologias/TecnoComponent"

export const PagePortafolio = () => {
    return (
        <section>
            <HeaderComponent />
            <PerfilComponent />
            <TecnoComponent />
        </section>
    )
}