import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";
import './styles.css';

const Dashboard = () => {
  const auth = useAuth();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Farmacia Laura Daza</h1>
      </div>
      <div className="dashboard-content">
        <div className="menu-panel">
          <h3>Páginas</h3>
          <ul>
            <li>
              <Link to="/Inventario">
                <img src="/images/inventario-icon.png" alt="Inventario" width="20" height="20" />
                Inventario
              </Link>
            </li>
            <li>
              <Link to="/Proveedores">
                <img src="/images/proveedores-icon.png" alt="Proveedores" width="20" height="20" />
                Proveedores
              </Link>
            </li>
            <li>
              <Link to="/Clientes">
                <img src="/images/clientes-icon.png" alt="Clientes" width="20" height="20" />
                Clientes
              </Link>
            </li>
            <li>
              <Link to="/Reporte">
                <img src="/images/reportes-icon.png" alt="Reportes" width="20" height="20" />
                Reportes
              </Link>
            </li>
          </ul>
        </div>
        <div className="additional-info">
          <h2>¿Quiénes somos?</h2>
          <p>En Farmacia Laura Daza, nos dedicamos a cuidar de tu salud y bienestar desde hace 2 años. </p>
           <p> Somos una farmacia comprometida con ofrecerte productos de la más alta calidad y un servicio excepcional.</p>
           <p> Nuestro equipo de farmacéuticos y profesionales de la salud está siempre dispuesto a brindarte </p>
           <p>asesoramiento personalizado y confiable.</p>
          <h2>Misión</h2>
          <p>Nuestra misión es mejorar la calidad de vida de nuestra comunidad proporcionando productos farmacéuticos </p>
          <p> y de cuidado personal de la más alta calidad, acompañados de un servicio excepcional y atención personalizada.</p>
          <p>Nos esforzamos por ser un referente de confianza y apoyo en el ámbito de la salud, comprometidos  </p>
          <p>con el bienestar y la satisfacción de nuestros clientes. </p>
          <p>Trabajamos día a día para ofrecer soluciones integrales que promuevan una vida más</p>
          <p>saludable y plena.</p>
          <h2>Visión</h2>
          <p>Nuestra visión es convertirnos en la farmacia líder y más confiable de la región, reconocida por </p>
          <p>nuestra excelencia en servicio y la calidad de nuestros productos. Aspiramos a ser un referente en el sector </p>
          <p>farmacéutico, innovando constantemente para satisfacer las necesidades cambiantes de nuestros clientes.</p> 
          <p>Queremos ser un pilar en nuestra comunidad, promoviendo el bienestar y la salud integral a través de un enfoque</p> 
          <p>preventivo y personalizado. Creemos en un futuro donde cada persona tenga acceso a los mejores cuidados para llevar</p> 
          <p>una vida saludable y plena.</p>
          <div className="location-label">
            Valledupar, {currentYear}
          </div>
        </div>
      </div>
      <button onClick={() => auth.logOut()} className="btn-logout">Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;

