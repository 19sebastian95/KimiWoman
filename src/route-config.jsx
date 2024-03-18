import { BrowserRouter, Route, Routes } from "react-router-dom";
import RedireccionarALanding from './RedireccionarALanding';
import Kit_Brochas from './Brochas/KitBrochas';
import ProductosBrochas from './Brochas/ProductosBrochas';
import AccesoriosBrochas from './Brochas/AccesoriosBrochas';
import EsponjasMaquillaje from './Accesorios/EsponjasMaquillaje';
import ProductosCuidadoFacial from './CuidadoFacial/ProductosCuidadoFacial';
import MascarillasColagenos from './CuidadoFacial/Mascarillas_Colagenos';
import Desmaquillantes from './CuidadoFacial/Desmaquillantes';
import Sueros from './CuidadoFacial/Sueros';
import CuidadoPiel from './CuidadoFacial/CuidadoPiel';
import Tonicos from './CuidadoFacial/Tonicos';
import ProductosRostro from './Rostro/ProductosRostro';
import Primers from './Rostro/Primers';
import Bases_Correctores from './Rostro/Bases_Correctores';
import Rubores from './Rostro/Rubores';
import Contornos from './Rostro/Contornos';
import Iluminadores from './Rostro/Iluminadores';
import Polvos from './Rostro/Polvos';
import Fijadores from './Rostro/Fijadores';
import Inicio from './Inicio/Inicio';
import ProductosOjos_Cejas from "./Ojos_Cejas/ProductosOjos_Cejas";
import Pestañinas from "./Ojos_Cejas/Pestañinas";
import Delineadores from "./Ojos_Cejas/Delineadores";
import Sombras from "./Ojos_Cejas/Sombras";
import Cejas from "./Ojos_Cejas/Cejas";
import ProductosLabios from "./Labios/ProductosLabios";
import Brillos from "./Labios/Brillos";
import Labiales from "./Labios/Labiales";
import Tintas from "./Labios/Tintas";
import ProductosAccesorios from "./Accesorios/ProductosAccesorios";
import { Cosmetiqueras } from "./Accesorios/Cosmetiqueras";
import Cepillos from "./Accesorios/Cepillos";
import Espejos from "./Accesorios/Espejos";
import Encrespadores from "./Accesorios/Encrespadores";
import Scrunchies from "./Accesorios/Scrunchies";
import Skin_Care from "./Accesorios/Skin_Care";

export default function Rutas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          //#region Inicio
          <Route path='/' element={<Inicio />} />
          <Route path='*' element={<RedireccionarALanding />} />
          //#endregion

          //#region Brochas
          <Route path='/Brochas' element={<ProductosBrochas />} />
          <Route path='/Kit-Brochas' element={<Kit_Brochas />} />
          <Route path='/Accesorios-Brochas' element={<AccesoriosBrochas />} />
          //#endregion

          //#region Cuidado Facial
          <Route path='/Cuidado-Facial' element={<ProductosCuidadoFacial />} />
          <Route path='/Cuidado-Piel' element={<CuidadoPiel />} />          
          <Route path='/Mascarillas-Colagenos' element={<MascarillasColagenos />} />
          <Route path='/Desmaquillantes' element={<Desmaquillantes />} />
          <Route path='/Sueros' element={<Sueros />} />
          <Route path='/Tonicos' element={<Tonicos />} />
          //#endregion

          //#region Rostro
          <Route path='/Rostro' element={<ProductosRostro />} />
          <Route path='/Primers' element={<Primers />} />
          <Route path='/Bases-Correctores' element={<Bases_Correctores />} />
          <Route path='/Rubores' element={<Rubores />} />
          <Route path='/Contornos' element={<Contornos />} />
          <Route path='/Iluminadores' element={<Iluminadores />} />
          <Route path='/Polvos' element={<Polvos />} />
          <Route path='/Fijadores' element={<Fijadores />} />
          //#endregion

          //#region Ojos y Cejas
          <Route path="/Ojos-Cejas" element={<ProductosOjos_Cejas />} />
          <Route path="/Pestañinas" element={<Pestañinas />} />
          <Route path="/Delineadores" element={<Delineadores />} />
          <Route path="/Sombras" element={<Sombras />} />
          <Route path="/Cejas" element={<Cejas />} />
          <Route path="/Pestañas" element={<Pestañinas />} />          
          //#endregion

          //#region Labios
          <Route path="/Labios" element={<ProductosLabios />} />
          <Route path="/Brillos" element={<Brillos />} />
          <Route path="/Labiales" element={<Labiales />} />
          <Route path="/Tintas" element={<Tintas />} />
          //#endregion

          //#region Accesorios
          <Route path="/Accesorios" element={<ProductosAccesorios />} />
          <Route path="/Cosmetiqueras" element={<Cosmetiqueras />} />
          <Route path="/Cepillos" element={<Cepillos />} />
          <Route path="/Espejos" element={<Espejos />} />
          <Route path="/Encrespadores" element={<Encrespadores />} />
          <Route path="/Scrunchies" element={<Scrunchies />} />
          <Route path="/Skin-Care" element={<Skin_Care />} />
          <Route path='/Esponjas-De-Maquillaje' element={<EsponjasMaquillaje />} />
          //#endregion
        </Routes>
      </BrowserRouter>
    </>
  )
}