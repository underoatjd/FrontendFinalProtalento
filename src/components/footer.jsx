import "./stylefooter.css";
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3>Enlaces Útiles</h3>
            <ul>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Acerca de Nosotros</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes Sociales</h3>
            <ul className="social-links">
              <li>
                <a href="#">
                  <img src="facebook.png" alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="twitter.png" alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="linkedin.png" alt="LinkedIn" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="instagram.png" alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Dirección: 123 Calle Principal, Ciudad</p>
            <p>Email: info@ejemplo.com</p>
            <p>Teléfono: +123 456 789</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
