import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  deleteServiceId,
  setActiveService,
} from "../../store/servicio/sliceServicio";

export const CardService = ({ id, title, descp, tipe }) => {

  const dispatch = useDispatch();

  const editar = () => {
    dispatch(setActiveService({ id, title, descp, tipe }));
  };

  const eliminar = () => {
    dispatch(deleteServiceId(id));
  };
  return (
    <div className="col mb-4">
      <div className="card h-100 ">
        <div className="card-body py-4">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descp}</p>
        </div>
        <div className="card-footer p-4">
          <NavLink
            className="card-link text-decoration-none"
            to="#"
            onClick={editar}
          >
            Editar
          </NavLink>
          <NavLink
            className="card-link text-decoration-none"
            onClick={eliminar}
            to="#"
          >
            Eliminar
          </NavLink>
        </div>
      </div>
    </div>
  );
};
