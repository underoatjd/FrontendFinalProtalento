import "./styleheader.css";
export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-dark  fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.postimg.cc/52nHmJXG/logo.png" alt="Logo" width="30" height="30" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                PROtalento - Dev.F
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Desarrolladores
                  </a>
                  <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                   Crear pelicula
                  </a>
                </li>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Actualizar pelicula
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Eliminar pelicula
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portafolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Autenticacion
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
