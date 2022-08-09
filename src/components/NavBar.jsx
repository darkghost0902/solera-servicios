import { NavLink } from "react-router-dom";



export const NavBar = () => {

 

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? " active" : ""} `
                }
                to="/todos"
              >
                Todos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? " active" : ""} `
                }
                to="/auto"
              >
                Auto
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? " active" : ""} `
                }
                to="/salud"
              >
                Salud
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? " active" : ""} `
                }
                to="/hogar"
              >
                Hogar
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
