import { useSelector } from "react-redux";
import { CardService } from "../components/CardService";
import { FormService } from "../components/FormService";

export const HogarPage = () => {
    const { services } = useSelector((state) => state.servicio);

    const hogares = services.filter( 
        servicio => servicio.tipe === "hogar"
     );
    return (
        
        <div className="row ">
      <div className="col-md-8 g-4">
        <div className=" row row-cols-1 row-cols-md-3  ">
          {hogares.map((hogar) => (
            <CardService key={hogar.id} {...hogar} />
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