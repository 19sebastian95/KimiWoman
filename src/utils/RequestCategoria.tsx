import axios, { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { landingPageDTO, productos } from '../Inicio/LandingPage.model'
import { urlProductosByCategory } from './endpoints'
import ListadoGenerico from './ListadoGenerico'
import ListadoProductos from './ListadoProductos'

const RequestCategoria = (props: RequestCategoriaProps) => {
    const [subCategoria, setSubCategoria] = useState<landingPageDTO>()

    useEffect(() => {
        axios.get(`${urlProductosByCategory}/${props.idCategoria}`)
            .then((respuesta: AxiosResponse<productos[]>) => {
                const timerID = setTimeout(() => {
                    setSubCategoria({
                        productos: respuesta.data
                    })
                }, 500);
                return () => clearTimeout(timerID)
            })
    }, [])
    return (
        <ListadoGenerico listado={subCategoria?.productos}>
            <>
                {subCategoria?.productos?.map(producto =>
                    <ListadoProductos productos={producto} key={producto.IdProducto} />
                )}
            </>
        </ListadoGenerico>
    )
}

interface RequestCategoriaProps {
    idCategoria: string
}

export default RequestCategoria