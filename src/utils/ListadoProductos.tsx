import React from 'react'
import { productos } from '../Inicio/LandingPage.model'
import ModalDetalles from './ModalDetalles'

const ListadoProductos = (props: ListadoProductosProps) => {
    return (
        <div >
            <div className="card card-compact place-content-center w-48 h-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{props.productos.NombreProducto}</h2>
                    <h1>${props.productos.Variaciones.ValorActual}</h1>
                </div>
                <div className='card-body'>
                    <label htmlFor={props.productos.IdProducto.toString()} className="btn btn-outline ">Detalles</label>
                    <button className="btn btn-primary">Añadir al carrito</button>
                </div>
                <ModalDetalles productos={props.productos} key={props.productos.IdProducto} />
            </div>
        </div>
    )
}

interface ListadoProductosProps {
    productos: productos
}

export default ListadoProductos