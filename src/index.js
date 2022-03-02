import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/StateProvider';
import reducer, { initialState } from './components/reducer';

//Aquí usamos el StateProvider para envolver a toda la app para pasarle todos los datos.
//Y le pasamos el estado inicial "initialState" que esta en reducer.js que es isOpen y le pasamos 
// el reducer que era la funcion inicial si habia tenido algun cambio el estado, para que haga lo que 
//le dijimos en la funcion que hiciera si cambiaba el estado inicial.

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
       <App />
       
       </StateProvider>
   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
