import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { CarruselItems } from "./CarruselItems"
import CarruselOfertas from "./CarruselOfertas"
import { urlAllProductos, urlProductosBySubCategory } from "../utils/endpoints"
import { landingPageDTO, productos } from "./LandingPage.model"

const Hero = () => {
    const [productoOferta, setProductoOferta] = useState<landingPageDTO>({})

    useEffect(() => {
        axios.get(`${urlProductosBySubCategory}/2`)
            .then((respuesta: AxiosResponse<productos[]>) => {
                const timerID = setTimeout(() => {
                    setProductoOferta({
                        productos: respuesta.data
                    })
                }, 500)
                return () => clearTimeout(timerID);
            })
    }, [])

    return (
        <>
            <CarruselItems />
            <h3>Ofertas</h3>
            <CarruselOfertas ofertas={productoOferta.productos} />
        </>
    )
}

export default Hero