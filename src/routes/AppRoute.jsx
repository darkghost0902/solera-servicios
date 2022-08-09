
import { Routes, Route } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { ServicioPage, AutoPage, HogarPage, SaludPage } from "../servicios/pages"


export const AppRoute = () => {


    return (
        <div className="container" >

        <NavBar/>
        <Routes>
          
            <Route  path="/*" element={<ServicioPage/>} />
            {/* {
                (status === 'logeado') &&
                <>
                <Route path="/armaplan" element={<ArmaplanPage/>} />
                <Route path="/gracias" element={<GraciasPage/>} />
                
                </>
                
            } */}
            <Route path="/auto" element={<AutoPage/>} />
            <Route path="/salud" element={<SaludPage/>} />
            <Route path="/hogar" element={<HogarPage/>} />
            
 
        </Routes>
        </div>

    )
}