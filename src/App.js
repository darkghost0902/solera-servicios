import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./routes/AppRoute";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <BrowserRouter>

      <Provider store={ store }>

        <AppRoute />
        
      </Provider>

    </BrowserRouter>
  );
};