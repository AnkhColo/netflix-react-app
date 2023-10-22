import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import { AuthContexProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <>
    <AuthContexProvider>
         <Navbar /> 
           <Routes>
              <Route path="/" element= {<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
           </Routes>
    </AuthContexProvider>
      </>
  );
}

export default App;
