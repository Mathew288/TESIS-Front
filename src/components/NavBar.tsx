import { Link } from "react-router-dom";
import logo from '../assets/Logo-biogest.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { ButtonNav } from "./UI/Button";
import validateToken from "./handlers/ValidateToken";
import { getUserByToken } from "./handlers/GetUserById";
import { User } from "./Pages/dto/Login.dto";



const NavBar = () => {

    
    const { pathname } = useLocation();
    const token = sessionStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User>();

    const handleLogout = () => {
        sessionStorage.setItem('token', '');
        // Actualizar el estado local o redirigir a la página de inicio de sesión sin recargar la página.
        setIsLoggedIn(false);
        // Otra lógica necesaria...
    };

    useEffect(() => {
        async function fetchData() {
          try {
            const isTokenValid = await validateToken(token);
            setIsLoggedIn(isTokenValid);
    
            if (isTokenValid) {
              const userData = await getUserByToken(token??'');
              setUser(userData.data);
            }
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
        <header className="bg-indigo-600 flex flex-col px-4 py-2 items-center justify-between
        md:flex-row">
            <Link to='/' className="text-white">
                <img src={logo} alt={""} className="h-[60px]" />

            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex flex-col items-center justify-center gap-1 sm:gap-5 m-5 sm:flex-row">

                    <Link to='/agendar_cita' className={pathname == '/agendar_cita' ? 'item-selected list-item' : 'list-item'}>Agendar cita</Link>
                    <Link to='/historial_medico' className={pathname == '/historial_medico' ? 'item-selected list-item' : 'list-item'}>Historial médico</Link>

                    {isLoggedIn ? (
                        <>
                        <span>{user?.nombre}</span>
                            <ButtonNav
                                onClick={handleLogout}
                            >
                                Cerrar sesión
                            </ButtonNav>

                        </>
                    ) : (
                        <>
                            <Link to='/login' className={pathname == '/login' ? 'item-selected list-item' : 'list-item'}>Iniciar sesión</Link>
                            <Link to='/signup' className={pathname == '/signup' ? 'item-selected list-item' : 'list-item'}>Registrarse</Link>
                        </>
                    )}





                </ul>

            </nav>
        </header>
    )
}

export default NavBar;