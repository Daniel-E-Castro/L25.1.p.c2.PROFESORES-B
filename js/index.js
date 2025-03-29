/*En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
de la clase Cl_profesor. 
*/

import Fijo from "./Cl_Fijo.js";
import Cl_Contratado from "./Cl_contratado.js";

export default class Cl_index {
    constructor() {
        let contratado1 = new Cl_Contratado("Rafael ", 30, 15);
        let contratado2 = new Cl_Contratado("Felicia", 30, 20);

        let salida = document.getElementById("salida");

        salida.innerHTML = `

<br>Nombre: ${contratado1.nombre}
<br>Monto del bono: ${contratado1.bono}$
<br>Cantidad de Horas: ${contratado1.horas}
<br>Ingreso total del profesor Rafael: ${contratado1.sueldoTotalContratado()}$
<br>

<br>Nombre: ${contratado2.nombre}
<br>Monto del bono: ${contratado2.bono}$
<br>Cantidad de Horas: ${contratado2.horas}
<br>Ingreso total del profesor Felicia: ${contratado2.sueldoTotalContratado()}$
`
    }
}