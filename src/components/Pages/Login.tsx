import { Link } from 'react-router-dom';
import './Login.css'
import { Input } from '../UI/Input';
import { ButtonLogin } from '../UI/Button';
import Span from '../UI/Span';
import { loginUser } from '../handlers/HandlerLogin';
import { useState } from 'react';
import { ApiResponse } from './dto/Login.dto';

function Login() {



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        try {
            const data: ApiResponse = await loginUser({ email, password });
            if (data) {
                alert(`Te has logueado correctamente, ${data.user.nombre} ${data.user.apellido}`);
            }
            console.log("Data:", data);

        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        } finally {
            window.location.reload()
            console.log(email, password);
        }

    };

    return (
        <section id='container_login'>
            <section id="image-side" className="w-[60%] flex flex-col items-center justify-center">
                <h1 className='text-white text-3xl text text-center'>Somos lo mejor en calidad</h1>
                <Span>Inicia sesión para acceder a todas nuestras funcionalidades</Span>
            </section>

            <form id="form_login" onSubmit={handleSubmit}>
                <Input type="text" placeholder="Correo electrónico" onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />


                <ButtonLogin type='submit'>
                    Iniciar sesión
                </ButtonLogin>

                <a href="">¿Aún no tienes una cuenta? <Link to={'/signup'} className='font-bold text-blue-700'>Registrate</Link></a>
                <a href="" className="text-center mt-5">¿Has olvidado tu contraseña?</a>
            </form>

        </section>
    );
}

export default Login;