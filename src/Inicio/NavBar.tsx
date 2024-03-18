import Logo from '../img/Logo.jpeg'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li tabIndex={0}>
                            <NavLink to='/Brochas'>Brochas</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/kit-brochas'>Kit de Brochas</NavLink></li>
                                <li><NavLink to='/Accesorios-Brochas'>Accesorio de Brochas</NavLink></li>                                
                            </ul>
                        </li>
                        <li tabIndex={1}>
                            <NavLink to='/Cuidado-Facial'>Cuidado Facial</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Cuidado-Piel'>Cuidado de la Piel</NavLink></li>
                                <li><NavLink to='/Mascarillas-Colagenos'>Mascarillas y Cólagenos</NavLink></li>
                                <li><NavLink to='/Desmaquillantes'>Desmaquillantes</NavLink></li>
                                <li><NavLink to='/Sueros'>Serúm / Sueros</NavLink></li>
                                <li><NavLink to='/Tonicos'>Tónicos</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={2}>
                            <NavLink to='/Rostro'>Rostro</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Primers'>Primers</NavLink></li>
                                <li><NavLink to='/Bases-Correctores'>Bases y Correctores</NavLink></li>
                                <li><NavLink to='/Rubores'>Rubores</NavLink></li>
                                <li><NavLink to='/Contornos'>Contornos</NavLink></li>
                                <li><NavLink to='/Iluminadores'>Iluminadores</NavLink></li>
                                <li><NavLink to='/Polvos'>Polvos</NavLink></li>
                                <li><NavLink to='/Fijadores'>Fijadores</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={3}>
                            <NavLink to='/Ojos-Cejas'>Ojos y Cejas</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Pestañinas'>Pestañinas</NavLink></li>
                                <li><NavLink to='/Delineadores'>Delineadores</NavLink></li>
                                <li><NavLink to='/Sombras'>Sombras</NavLink></li>
                                <li><NavLink to='/Cejas'>Cejas</NavLink></li>
                                <li><NavLink to='/Pestañas'>Pestañas</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={4}>
                            <NavLink to='/Labios'>Labios</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Brillos'>Brillos</NavLink></li>
                                <li><NavLink to='/Labiales'>Labiales</NavLink></li>
                                <li><NavLink to='/Tintas'>Tintas</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={5}>
                            <NavLink to='/Accesorios'>Accesorios</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Cosmetiqueras'>Cosmetiqueras</NavLink></li>
                                <li><NavLink to='/Cepillos'>Cepillos</NavLink></li>
                                <li><NavLink to='/Espejos'>Espejos</NavLink></li>
                                <li><NavLink to='/Encrespadores'>Encrespadores</NavLink></li>
                                <li><NavLink to='/Scrunchies'>Scrunchies</NavLink></li>
                                <li><NavLink to='/Skin-Care'>Skin Care</NavLink></li>
                                <li><NavLink to='/Esponjas-De-Maquillaje'>Esponjas de Maquillaje</NavLink></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <NavLink to="/">
                        <img className="btn btn-ghost normal-case text-xl" src={Logo} />
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li tabIndex={0}>
                            <NavLink to='/Brochas'>Brochas</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/kit-brochas'>Kit de Brochas</NavLink></li>
                                <li><NavLink to='/Accesorios-Brochas'>Accesorio de Brochas</NavLink></li>                                
                            </ul>
                        </li>
                        <li tabIndex={1}>
                            <NavLink to='/Cuidado-Facial'>Cuidado Facial</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Cuidado-Piel'>Cuidado de la Piel</NavLink></li>
                                <li><NavLink to='/Mascarillas-Colagenos'>Mascarillas y Cólagenos</NavLink></li>
                                <li><NavLink to='/Desmaquillantes'>Desmaquillantes</NavLink></li>
                                <li><NavLink to='/Sueros'>Serúm / Sueros</NavLink></li>
                                <li><NavLink to='/Tonicos'>Tónicos</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={2}>
                            <NavLink to='/Rostro'>Rostro</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Primers'>Primers</NavLink></li>
                                <li><NavLink to='/Bases-Correctores'>Bases y Correctores</NavLink></li>
                                <li><NavLink to='/Rubores'>Rubores</NavLink></li>
                                <li><NavLink to='/Contornos'>Contornos</NavLink></li>
                                <li><NavLink to='/Iluminadores'>Iluminadores</NavLink></li>
                                <li><NavLink to='/Polvos'>Polvos</NavLink></li>
                                <li><NavLink to='/Fijadores'>Fijadores</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={3}>
                            <NavLink to='/Ojos-Cejas'>Ojos y Cejas</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Pestañinas'>Pestañinas</NavLink></li>
                                <li><NavLink to='/Delineadores'>Delineadores</NavLink></li>
                                <li><NavLink to='/Sombras'>Sombras</NavLink></li>
                                <li><NavLink to='/Cejas'>Cejas</NavLink></li>
                                <li><NavLink to='/Pestañas'>Pestañas</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={4}>
                            <NavLink to='/Labios'>Labios</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Brillos'>Brillos</NavLink></li>
                                <li><NavLink to='/Labiales'>Labiales</NavLink></li>
                                <li><NavLink to='/Tintas'>Tintas</NavLink></li>
                            </ul>
                        </li>
                        <li tabIndex={5}>
                            <NavLink to='/Accesorios'>Accesorios</NavLink>
                            <ul className="p-2 bg-base-200">
                                <li><NavLink to='/Cosmetiqueras'>Cosmetiqueras</NavLink></li>
                                <li><NavLink to='/Cepillos'>Cepillos</NavLink></li>
                                <li><NavLink to='/Espejos'>Espejos</NavLink></li>
                                <li><NavLink to='/Encrespadores'>Encrespadores</NavLink></li>
                                <li><NavLink to='/Scrunchies'>Scrunchies</NavLink></li>
                                <li><NavLink to='/Skin-Care'>Skin Care</NavLink></li>
                                <li><NavLink to='/Esponjas-De-Maquillaje'>Esponjas de Maquillaje</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end lg:flex">
                    <button className="btn btn-ghost mask mask-squircle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost mask mask-squircle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost mask mask-squircle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar