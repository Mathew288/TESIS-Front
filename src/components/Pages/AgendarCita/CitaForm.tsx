import { ButtonPrimary } from "../../UI/Button";
import { Input } from "../../UI/Input"
import Label from "../../UI/Label"


function CitaForm() {

    const today = new Date().toISOString().split('T')[0];

    return (
        <form action="" className="grid gap-5">
            <div>
                <Label htmlFor="fecha">Fecha de la cita:</Label>
                <Input lang="es" id="fecha" type="date" min={today} required/>
            </div>

            <div>
                <Label htmlFor="hora">Hora:</Label>
                <Input id="hora" type="time" min="08:00" max="18:00" required/>
            </div>

            <div className="flex flex-col">
                <Label htmlFor="motivo">Motivo de la consulta:</Label>
                <textarea lang="es" id="motivo" className="focus:outline-none focus:shadow-outline shadow appearance-none border-2 border-slate-300 rounded w-full py-2 px-3 text-gray-700 mb-3" required/>
            </div>

            <div className="flex flex-col">
                <Label htmlFor="sintomas">¿Tiene síntomas?</Label>
                <textarea id="sintomas" className="focus:outline-none focus:shadow-outline shadow appearance-none border-2 border-slate-300 rounded w-full py-2 px-3 text-gray-700 mb-3" placeholder="Especifique"/>
            </div>

            <ButtonPrimary>Enviar</ButtonPrimary>

        </form>
    )
}

export default CitaForm