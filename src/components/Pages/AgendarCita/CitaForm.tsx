import { DatePicker, TimePicker } from '@material-ui/pickers';
import { useContext, useState } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './Cita.css'
import { ButtonPrimary } from '../../UI/Button';
import React from 'react';
import Toast from '../../UI/Toast';
import { agendarCita } from '../../handlers/HandlerAgendarCita';
import { format } from "date-fns";
import UserContext from '../../../context/UserPrivider';

const CitaForm: React.FC = () => {

  const [fecha, setFecha] = useState<Date | null>(new Date());
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const {user} = useContext(UserContext)
  const [motivo, setMotivo] = useState('')
  const [sintomas, setSintomas] = useState('')

  const handleSendCita = () => {
    if(fecha){
      const response = agendarCita({
        fecha: format(fecha,'dd-MM-yyyy'),
        hora: fecha?.getHours(),
        pacienteId: user?.data.id,
        motivo,
        sintomas
      });
      console.warn(response)
    }

    setSnackbarOpen(true);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleDateChange = (date: MaterialUiPickersDate) => {
    if (date !== null) {
      setFecha(date);
    }
  };

  return (
    <form className='grid items-center justify-center gap-5'>
      <div className="fecha">
        <label htmlFor="fecha">Fecha:</label>
        <DatePicker value={fecha} id='fecha' onChange={handleDateChange} />
      </div>
      <div className="hora">
        <label htmlFor="hora">Hora:</label>
        <TimePicker className='text-red-600' value={fecha} id='hora' onChange={handleDateChange} />
      </div>

      <div className='flex flex-col'>
        <label htmlFor="motivo">Motivo de la cita:</label>
        <textarea name="motivo" id="motivo" cols={30} rows={4} maxLength={280} required
            value={motivo} onChange={e => setMotivo(e.target.value)} placeholder='¿Cuál es el motivo de su consulta?'></textarea>
      </div>

      <div className='flex flex-col'>
        <label htmlFor="sintomas">Sintomas</label>
        <textarea id="sintomas" cols={30} rows={6} onChange={e=>setSintomas(e.target.value)} placeholder='En caso de que presente algunos síntomas, especifique.'></textarea>
      </div>
 
      <ButtonPrimary onClick={handleSendCita}>Solicitar cita</ButtonPrimary>

      <Toast open={snackbarOpen} handleClose={closeSnackbar} 
        message={`Tu cita ha sido solicitada correctamente.`} />
    </form>
  );
};

export default CitaForm;
