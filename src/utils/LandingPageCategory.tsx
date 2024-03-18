import Footer from '../Inicio/Footer'
import NavBar from '../Inicio/NavBar'
import RequestCategoria from './RequestCategoria'

const LandingPageCategory = (props: PaginaDestinoCategoriaProps) => {
    return (
        <>
            <NavBar />
            <RequestCategoria idCategoria={props.idCatergoria} />
            <Footer />
        </>
    )
}

interface PaginaDestinoCategoriaProps {
    idCatergoria: string
}
export default LandingPageCategory