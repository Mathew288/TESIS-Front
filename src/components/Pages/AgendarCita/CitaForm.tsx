import { useState } from "react";
import { ButtonPrimary } from "../../UI/Button";
import { Input } from "../../UI/Input"
import Label from "../../UI/Label"
import { agendarCita } from "../../handlers/HandlerAgendarCita";
import { CitaDTO } from "../dto/Cita.dto";


function CitaForm() {
    const today = new Date().toISOString().split('T')[0];

    const [formData, setFormData] = useState<CitaDTO>({
        fecha: new Date(), // Establecer la fecha actual como objeto Date
        hora: '', 
        motivo: '',
        sintomas: ''
    });

    async function enviarDatos() {
        // Combina la fecha y la hora en un formato ISO-8601
        const fechaHoraISO = formData.fecha.toISOString().split('T')[0] + 'T' + formData.hora + ':00.000Z';
        const cita = agendarCita({ ...formData, fecha: new Date(fechaHoraISO) });
        
        if (await cita) {
            alert("Cita agendada correctamente");
        } else {
            alert("Error al agendar cita");
        }
    }

    return (
        <form action="" className="grid gap-5">
            <div>
                <Label htmlFor="fecha">Fecha de la cita:</Label>
                <Input lang="es" id="fecha" type="date" min={today} required onChange={e => setFormData({ ...formData, fecha: new Date(e.target.value) })} />
            </div>

            <div>
                <Label htmlFor="hora">Hora:</Label>
                <Input id="hora" type="time" min="08:00" max="18:00" required onChange={e => setFormData({ ...formData, hora: e.target.value })} value={formData.hora} />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="motivo">Motivo de la consulta:</Label>
                <textarea lang="es" id="motivo" className="focus:outline-none focus:shadow-outline shadow appearance-none border-2 border-slate-300 rounded w-full py-2 px-3 text-gray-700 mb-3" required onChange={e => setFormData({ ...formData, motivo: e.target.value })} value={formData.motivo} />
            </div>

            <div className="flex flex-col">
                <Label htmlFor="sintomas">¿Tiene síntomas?</Label>
                <textarea id="sintomas" className="focus:outline-none focus:shadow-outline shadow appearance-none border-2 border-slate-300 rounded w-full py-2 px-3 text-gray-700 mb-3" placeholder="Especifique" onChange={e => setFormData({ ...formData, sintomas: e.target.value })} value={formData.sintomas} />
            </div>

            <ButtonPrimary onClick={e => { e.preventDefault(); enviarDatos(); }}>Agendar</ButtonPrimary>

        </form>
    )
}

export default CitaForm;
