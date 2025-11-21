import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { HeaderComponent } from "../../components/header/HeaderComponent"
import { PerfilComponent } from "../../components/perfil/PerfilComponent"
import { ProyecComponent } from "../../components/proyectos/ProyecComponent"
import { TecnoComponent } from "../../components/tecnologias/TecnoComponent"
import { FooterComponent } from '../../components/footer/FooterComponent';

const PagePortafolio = () => {

    const location = useLocation(); // ← Ahora useLocation está definido

    useEffect(() => {
        if (location.hash) {
            const sectionId = location.hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        }
    }, [location]);

    return (
        <section>
            <HeaderComponent />
            <PerfilComponent />
            <TecnoComponent />
            <ProyecComponent />
            <FooterComponent />
        </section>
    )
}

export default PagePortafolio;