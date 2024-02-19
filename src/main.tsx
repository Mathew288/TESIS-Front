import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import esLocale from 'date-fns/locale/es';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
      <BrowserRouter>
        <App />

      </BrowserRouter>
    </MuiPickersUtilsProvider>
  </React.StrictMode>,
)
