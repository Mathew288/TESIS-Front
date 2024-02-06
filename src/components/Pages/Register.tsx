import { Link } from 'react-router-dom';
import './Login.css'
import { ButtonLogin } from '../UI/Button';
import { Input } from '../UI/Input';
import Span from '../UI/Span';
import { ApiResponse } from './dto/Login.dto';
import { registerUser } from '../handlers/HandleRegister';
import { useState } from 'react';
import Label from '../UI/Label';
import { loginUser } from '../handlers/HandlerLogin';


function Register() {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cedula, setCedula] = useState('');
    const [fecha_nacimiento, setFechaNacimiento] = useState('');
    const [contacto, setContacto] = useState('');



    const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        try {
            const data: ApiResponse = await registerUser({
                nombre, apellido,
                cedula,
                email,
                password,
                fecha_nacimiento,
                contacto,
            });


            const loggeo: ApiResponse = await loginUser({ email, password });
            if (loggeo) {
                alert('Te has registrado correctamente.')
                sessionStorage.setItem('token', loggeo.token);
                window.location.reload();
                window.location.href = '/';
            }
            console.log("Data:", data);

        } catch (error) {
            console.error("Error al Registrarse:", error);
        } finally {
            console.log(email, password);
        }

    };


    return (
        <section id='container_login'>
            <section id="image-side" className="w-auto h-auto flex flex-col items-center justify-center">
                <h1 className='text-white text-3xl text text-center'>Somos lo mejor en calidad</h1>
                <Span>Inicia sesión para acceder a todas nuestras funcionalidades</Span>
            </section>

            <form id="form_login" onSubmit={handleSubmit}>
                <Input type="text" placeholder="Nombres" required onChange={e => setNombre(e.target.value)} />
                <Input type="text" placeholder="Apellidos" required onChange={e => setApellido(e.target.value)} />
                <Input type="text" placeholder="Cedula" required maxLength={10} onChange={e => setCedula(e.target.value)} />
                <Input type="text" placeholder="Número de conatcto" required maxLength={10} onChange={e => setContacto(e.target.value)} />
                <Input type="email" placeholder="Correo electrónico" required onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Contraseña" required onChange={e => setPassword(e.target.value)} />

                <div className='w-full'>
                    <Label>Fecha de nacimiento</Label>
                    <Input type='text' placeholder='aaaa-mm-dd' value={fecha_nacimiento} onChange={e => setFechaNacimiento(e.target.value)} required />

                </div>




                <ButtonLogin type='submit'>
                    Registrarse
                </ButtonLogin>
                <a href="" className="text-center">¿Ya tienes una cuenta? <Link className='font-bold text-blue-700' to={'/login'}>Inicia sesión</Link></a>
            </form>

        </section>
    );
}

export default Register;