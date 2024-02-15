import axios from "axios";
import { baseUrl } from "../../BaseURL";
import { CitaDTO } from "../Pages/dto/Cita.dto";


export async function agendarCita(citaDto:CitaDTO) {
    const api = `${baseUrl}/cita`;
    const response:CitaDTO = await axios.post(api, citaDto);
    return response;
}