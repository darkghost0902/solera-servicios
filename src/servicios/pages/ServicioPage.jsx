import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CardService } from "../components/CardService";
import { FormService } from "../components/FormService";

export const ServicioPage = () => {
  const { services } = useSelector((state) => state.servicio);

  console.log(services);

  return (
    <div className="row ">
      <div className="col-md-8 g-4">
        <div className=" row row-cols-1 row-cols-md-3  ">
          {services.map((servicio) => (
            <CardService key={servicio.id} {...servicio} />
          ))}
        </div>
      </div>
      <div className="col-md-4 g-4">
        <div className=" row row-cols-1 row-cols-md-1  ">
          <FormService />
        </div>
      </div>
    </div>
  );
};
