import { productos } from './LandingPage.model'
import ModalDetalles from '../utils/ModalDetalles'

const Ofertas = (props: OfertasProps) => {
  return (
    <div >
      <div className="card card-compact place-content-center w-48 h-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{props.oferta.NombreProducto}</h2>
          <h1>${props.oferta.Variaciones.ValorActual}</h1>
        </div>
        <div className='card-body'>
          <label htmlFor={props.oferta.IdProducto.toString()} className="btn btn-outline ">Detalles</label>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
        <ModalDetalles productos={props.oferta} key={props.oferta.IdProducto}/>        
      </div>
    </div>
  )
}

interface OfertasProps {
  oferta: productos
}

export default Ofertas