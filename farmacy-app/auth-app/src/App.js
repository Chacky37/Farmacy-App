import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "./AuthProvider";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./Dashboard";
function App() {
 return (
 <div className="App">
 <AuthProvider>
 <Routes>
 <Route path="/" element={<Login />} />
 <Route path="/login" element={<Login />} />
 <Route element={<PrivateRoute />}>
 <Route path="/dashboard" element={<Dashboard />} />
 </Route>
 </Routes>
 </AuthProvider>
 </div>
 );
}
export default App; 