export const mascotaInput = document.querySelector('#mascota');
export const propietarioInput = document.querySelector('#propietario');
export const telefonoInput = document.querySelector('#telefono');
export const fechaInput = document.querySelector('#fecha');
export const horaInput = document.querySelector('#hora');
export const sintomasInput = document.querySelector('#sintomas');

const horaMinima = '10:00:00'; 
const horaMaxima = '17:00:00'; 
const fechaMinima = new Date();
const day = fechaMinima.getDate() + 2; 
const month = fechaMinima.getMonth();
const year = fechaMinima.getFullYear(); 
horaInput.min = horaMinima; 
horaInput.max = horaMaxima; 
fechaInput.min = `${year}-${month}-${day}`;

// Contenedor para las citas
export const contenedorCitas = document.querySelector('#citas');

// Formulario nuevas citas
export const formulario = document.querySelector('#nueva-cita'); 

// Heading
export const heading = document.querySelector('#administra');