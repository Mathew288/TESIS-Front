import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Pages/Home'
import Footer from './components/Footer'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import CitaPage from './components/Pages/AgendarCita/CitaPage'
import ProtectedRoutes from './components/utils/ProtectedRoutes'
import { useEffect, useState } from 'react'
import validateToken from './components/handlers/ValidateToken'

function App() {

  const token = sessionStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const isTokenValid = await validateToken(token);
        setIsLoggedIn(isTokenValid);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    if (token) {
      fetchData();
    }
    console.log("Is logged in",isLoggedIn)
  }, [token, isLoggedIn]);

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />

        <Route element={<ProtectedRoutes canActive={isLoggedIn} />}>
          <Route path='/agendar_cita' element={<CitaPage />} />
        </Route>

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />

      </Routes>
      <Footer />
    </>


  )
}

export default App
