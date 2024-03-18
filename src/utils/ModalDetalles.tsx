import { productos } from '../Inicio/LandingPage.model'

const ModalDetalles = (props: ModalDetallesProps) => {
    return (
        <>
            <input type="checkbox" id={props.productos.IdProducto.toString()} className="modal-toggle" />
            <div className="modal">
                <div className="card card-side bg-base-100 w-3/5 shadow-xl">
                    <label htmlFor={props.productos.IdProducto.toString()} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid md:grid-cols-4 md:gap-3'>
                        <div className='col-span-4'>
                            <img src="https://placeimg.com/200/280/arch" alt="Movie" />
                        </div>
                        <img className='w-1/2 hidden md:block' src="https://placeimg.com/200/280/arch" alt="Movie" />
                        <img className='w-1/2 hidden md:block' src="https://placeimg.com/200/280/arch" alt="Movie" />
                        <img className='w-1/2 hidden md:block' src="https://placeimg.com/200/280/arch" alt="Movie" />
                        <img className='w-1/2 hidden md:block' src="https://placeimg.com/200/280/arch" alt="Movie" />
                    </div>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{props.productos.NombreProducto}</h2>
                        <h1>${props.productos.Variaciones.ValorActual}</h1>
                        <h4>{props.productos.Variaciones.Cantidad} en stop</h4>
                        <p>{props.productos.Descripcion}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Añadir al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

interface ModalDetallesProps {
    productos: productos
}

export default ModalDetalles