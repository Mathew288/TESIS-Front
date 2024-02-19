import { Link } from "react-router-dom";
import logo from '../assets/Logo-biogest.png'
import './Navbar.css'
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import validateToken from "./handlers/ValidateToken";
import { getUserByToken } from "./handlers/GetUserById";
import UserContext from "../context/UserPrivider";
import PersonIcon from '@mui/icons-material/Person';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';

const NavBar = () => {
    const { pathname } = useLocation();
    const token = sessionStorage.getItem('token');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { user, setUser } = useContext(UserContext); // Aquí obtenemos el objeto de contexto



    useEffect(() => {
        async function fetchData() {
            try {
                const isTokenValid = await validateToken(token);
                setIsLoggedIn(isTokenValid);

                if (isTokenValid) {
                    const userData = await getUserByToken(token ?? '');
                    setUser(userData);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }

        if (token) {
            fetchData();
        }
        console.log("Is logged in", isLoggedIn)
    }, [token, isLoggedIn, setUser]);

    return (
        <header className="bg-indigo-600 flex flex-col px-4 py-2 items-center justify-around md:flex-row">
            <Link to='/' className="text-white">
                <img src={logo} alt={""} className="h-[60px]" />
            </Link>

            <nav className="flex gap-5 items-center justify-center">
                <ul className="flex flex-col items-center justify-between gap-1 sm:gap-5 m-5 sm:flex-row">
                    {isLoggedIn ? (
                        <>
                            <Link to='/agendar_cita' className={pathname == '/agendar_cita' ? 'item-selected list-item' : 'list-item'}>
                                <EventIcon className="mr-2" />
                                Agendar cita
                            </Link>
                            <Link to='/historial_medico' className={pathname == '/historial_medico' ? 'item-selected list-item' : 'list-item'}>
                                <ArticleIcon className="mr-2"/>
                                Mi historial médico
                            </Link>

                            <div className="flex">

                                <Link to={'/me'} className={pathname == '/me' ? 'item-selected list-item' : 'list-item'}>
                                    <PersonIcon className="mr-2" htmlColor="#fff" />
                                    <span className="text-white">{user?.data.nombre} {user?.data.apellido}</span>
                                </Link>
                            </div>
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
