import axios from "axios";
import { baseUrl } from "../../constants/BaseURL";
import { CitaDTO } from "../Pages/dto/Cita.dto";
import {  headerBearer } from "../../constants/Headers";


export async function agendarCita(citaDto: CitaDTO) {
    const api = `${baseUrl}/cita`;
    const fechaISO = new Date(citaDto.fecha).toISOString();
    const citaData = {
        ...citaDto,
        fecha: fechaISO
    };

    try {
        const response: CitaDTO = await axios.post(api, citaData, {
            headers: headerBearer()
        });
        return response;
    } catch (error) {
        // Manejo de error en caso de que la solicitud falle
        console.error('Error al enviar la cita:', error);
        throw error; // Lanzar el error para que el código que llama pueda manejarlo
    }
}