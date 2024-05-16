import { useAuth } from "./AuthProvider"; 
const Dashboard = () => {
    const auth = useAuth();
    return (
    <div className="container">
    <div>
    <h1>Bienvenido! {auth.user}</h1>
    <button onClick={() => auth.logOut()} className="btn-submit">
    Cerrar sesión
    </button>
    </div>
    </div>
    );
   };
   export default Dashboard; 