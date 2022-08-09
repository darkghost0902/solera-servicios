import { createSlice } from "@reduxjs/toolkit";
export const sliceServicio = createSlice({
  name: "servicio",
  initialState: {
    isSaving: false,
    messageSave: "",
    services: [
      {
        id: 1,
        title: "Electricidad",
        descp: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        tipe: "hogar",
      },
      {
        id: 2,
        title: "Auxilio Mecánico",
        descp: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        tipe: "auto",
      },
      {
        id: 3,
        title: "Chofer reemplazo",
        descp: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        tipe: "auto",
      },
      {
        id: 4,
        title: "Medico a domicilio",
        descp: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        tipe: "salud",
      },
      {
        id: 5,
        title: "Ambulancia",
        descp: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        tipe: "salud",
      },
      {
        id: 6,
        title: "Gasfitero",
        descp: "lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        tipe: "hogar",
      },
    ],
    active: null,
  },
  reducers: {
    savingNewService: (state) => {
      state.isSaving = true;
    },
    addNewService: (state, action) => {
      state.services.push(action.payload);
      state.isSaving = false;
    },
    setActiveService: (state, action) => {
      state.active = action.payload;
    },
    setService: (state, action) => {
      state.notes = action.payload;
    },
    updateService: (state, action) => {
      state.isSaving = false;
      state.services =  state.services.map(
        (servicio) => 
        {if (servicio.id === action.payload.id) {
            return action.payload
        }
      
        return servicio
      }
        
      );
      
    },
    deleteServiceId: (state, action) => {
      state.isSaving = false;
      state.services = state.services.filter(
        (servicio) => servicio.id !== action.payload
      );
    },
  },
});
export const { addNewService, deleteServiceId, updateService, setActiveService, savingNewService} = sliceServicio.actions;
