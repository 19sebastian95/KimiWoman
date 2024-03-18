import Footer from "../Inicio/Footer"
import NavBar from "../Inicio/NavBar"
import RequestSubCategoria from "./RequestSubCategoria"

const LandingPageSubCategory = (props: LandingPageSubCategoryProps) => {
    return (
        <>
            <NavBar />
            <RequestSubCategoria idSubCategoria={props.idSubCategoria} />
            <Footer />
        </>
    )
}

interface LandingPageSubCategoryProps {
    idSubCategoria: string
}

export default LandingPageSubCategory