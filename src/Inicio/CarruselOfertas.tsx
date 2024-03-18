import { productos } from './LandingPage.model'
import ListadoGenerico from '../utils/ListadoGenerico'
import Ofertas from './Ofertas'

const CarruselOfertas = (props: ListadoProductosProps) => {
  return (
    <ListadoGenerico listado={props.ofertas}>
      <div className="carousel w-full p-4 space-x-4 rounded-box justify-center">
        {props.ofertas?.map(producto =>
          <Ofertas oferta={producto} key={producto.IdProducto}
          />
        )}
      </div>
    </ListadoGenerico>
  )
}

interface ListadoProductosProps {
  ofertas?: productos[]
}
export default CarruselOfertas