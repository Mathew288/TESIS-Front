import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Pages/Home'
import Footer from './components/Footer'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import CitaPage from './components/Pages/AgendarCita/CitaPage'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/agendar_cita' element={<CitaPage />} />

      </Routes>
      <Footer />
    </>


  )
}

export default App
