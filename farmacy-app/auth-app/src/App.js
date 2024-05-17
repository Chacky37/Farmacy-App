import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
import Inventario from "./Inventario"; // Importar Page1
import Proveedores from "./Proveedores";
import Cliente from "./Cliente";
import Reporte from "./Reporte";
function App() {
 return (
 <div className="App">
 <AuthProvider>
 <Routes>
 <Route path="/" element={<Login />} />
 <Route path="/login" element={<Login />} />
 <Route element={<PrivateRoute />}>
 <Route path="/dashboard" element={<Dashboard />} />
 <Route path="/Inventario" element={<Inventario />} /> 
 <Route path="/Proveedores" element={<Proveedores />} /> 
 <Route path="/Cliente" element={<Cliente />} /> 
 <Route path="/Reporte" element={<Reporte />} />
        
 </Route>
 </Routes>
 </AuthProvider>
 </div>
 );
}
export default App; 