
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { addNewService, savingNewService, updateService } from "../../store/servicio/sliceServicio";

const formValidations = {
    title: [ (value) => value.length >= 6 , 'el Nombre debe tener  mas de 6 carectes.' ],
    descp: [ (value) => value.length >= 10 , 'La descripcion debe tener  mas de 10 carectes.' ],
  }
const data = {id:  "",
title: "",
descp: "",
tipe: ""}

export const FormService = () => {
  const dispatch = useDispatch();

  const datos = useSelector((state) => state.servicio);

  const { title , descp, inputChange, resetForm , id, tipe, titleValid, descpValid, isFormValid} = useForm( datos.active ?? data , formValidations, data );

  const [formSubmited, setformSubmited] = useState(false)

  console.log(formSubmited);

  const onSubmitService = (event) => {

    setformSubmited( true );
    event.preventDefault();

    if( !isFormValid ) return


    dispatch( savingNewService())
    if(id ) {

        dispatch( updateService( {id: id,title: title,
            descp: descp,
            tipe: tipe} ) )
    }
    else {
        
        dispatch(
          addNewService({
            id:  datos.services[datos.services.length - 1].id  + 1,
            title: title,
            descp: descp,
            tipe: "hogar",
          })
        );
    }
  };

  return (
    <div className="col">
      <div className="card">
        <form onSubmit={onSubmitService}>
          <div className="card-body  px-4">
            <h5 className="card-title">Servicio</h5>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre
              </label>

              <input
                type="text"
                id="nombre"
                className="form-control"
                placeholder="Nombre"
                name="title"
                value={title??""}
                onChange={inputChange}
                
              />
              <small className="text-danger">{ formSubmited && titleValid }</small>
            </div>
            <div className="mb-3">
              <label htmlFor="descp" className="form-label">
                Descripción
              </label>

              <input
                type="text"
                id="descp"
                className="form-control"
                placeholder="Descripción"
                name="descp"
                value={descp??""}
                onChange={inputChange}
              />
              <small className="text-danger">{ formSubmited && descpValid}</small>
            </div>
          </div>
          <div className="card-footer  px-4  py-3">
            <button  type="submit" className="btn btn-outline-success" disabled={ datos.isSaving} >Grabar</button>
            <button  type="button" onClick={resetForm} className="btn btn-outline-danger">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};
