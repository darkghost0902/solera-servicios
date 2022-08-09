import { useSelector } from "react-redux";
import { CardService } from "../components/CardService";
import { FormService } from "../components/FormService";

export const  SaludPage = () => {
    const { services } = useSelector((state) => state.servicio);

    const saluds = services.filter( 
        servicio => servicio.tipe === "salud"
     );
    return ( 
        <div className="row ">
        <div className="col-md-8 g-4">
          <div className=" row row-cols-1 row-cols-md-3  ">
            {saluds.map((salud) => (
              <CardService key={salud.id} {...salud} />
            ))}
          </div>
        </div>
        <div className="col-md-4 g-4">
        <div className=" row row-cols-1 row-cols-md-1  ">
          <FormService />
        </div>
        </div>
      </div>
    )
}