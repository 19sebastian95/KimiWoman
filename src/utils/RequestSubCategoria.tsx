import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react'
import { landingPageDTO, productos } from '../Inicio/LandingPage.model';
import { urlProductosBySubCategory } from './endpoints';
import ListadoGenerico from './ListadoGenerico';
import ListadoProductos from './ListadoProductos';

const RequestSubCategoria = (props: RequestSubCategoriaProps) => {
  const [subCategoria, setSubCategoria] = useState<landingPageDTO>()

  useEffect(() => {
    axios.get(`${urlProductosBySubCategory}/${props.idSubCategoria}`)
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

interface RequestSubCategoriaProps {
  idSubCategoria: string
}

export default RequestSubCategoria