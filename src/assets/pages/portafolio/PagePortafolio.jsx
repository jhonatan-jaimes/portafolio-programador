import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { HeaderComponent } from "../../components/header/HeaderComponent"
import { PerfilComponent } from "../../components/perfil/PerfilComponent"
import { ProyecComponent } from "../../components/proyectos/ProyecComponent"
import { TecnoComponent } from "../../components/tecnologias/TecnoComponent"
import { FooterComponent } from '../../components/footer/FooterComponent';
import { HabiliComponent } from '../../components/habilidades/HabiliComponent';
import { getText } from '../../util/text';

const PagePortafolio = () => {
    const [text, setText] = useState({});
    const location = useLocation(); // ← Ahora useLocation está definido

    useEffect(() => {
        getText().then(setText)
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
            <PerfilComponent texts={text} />
            <TecnoComponent />
            <ProyecComponent texts={text} />
            <HabiliComponent />
            <FooterComponent />
        </section>
    )
}

export default PagePortafolio;