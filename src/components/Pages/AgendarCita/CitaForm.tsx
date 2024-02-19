import { DatePicker, TimePicker } from '@material-ui/pickers';
import { useState } from 'react';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import './Cita.css'
import { ButtonPrimary } from '../../UI/Button';
import React from 'react';
import Toast from '../../UI/Toast';


const CitaForm: React.FC = () => {

  const [fecha, setFecha] = useState<Date | null>(new Date());
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const openSnackbar = () => {
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
 
      <ButtonPrimary onClick={openSnackbar}>Solicitar cita</ButtonPrimary>

      <Toast open={snackbarOpen} handleClose={closeSnackbar} 
        message={`Tu cita ha sido solicitada correctamente.`} />
    </form>
  );
};

export default CitaForm;
