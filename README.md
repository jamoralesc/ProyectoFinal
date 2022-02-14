# ProyectoFinal
* Aseguradora TK-U

## Funcionamiento del programa

*El programa presentado en proyecto.js, tiene como finalidad automatizar la creación de cotizaciones, permitiendo realizar un proceso contínuo sin necesidad de iniciarlo cada vez que termine una cotización, pues se dejó la alternativa de ingresar otra cotización hasta que no se ingrese la opción Salir.*

## Partes del problema que se consideraron

*Se estructuró con 2 funciones, siendo la función principal la llamada Cotizar, en la cuál se hace un llamado a la función recargoEdad para calcular el valor de recargo, tanto para el asegurado, como para su conyuge en caso aplique.
Por manejarse los mismos criterios de rango de edad y porcentajes, se definió mejor una función para este cálculo.*

*Al final se obtiene el precio total de la cotización, el cuál incluye el precio base más el monto total de todos los recargos que se calculan de acuerdo a las respuestas que se brinden.*

## Aspectos que se podrían mejorar sobre el programa
*Entre los aspectos que se podrían mejorar sobre el programa, hay muchos, sin embargo para fines de este curso no se implementaron, pero entre los cuáles se pueden mencionar los siguientes:*

  * *Manejar validaciones cuando edades no sean mayores o iguales a 18*
  * *Solicitar nombres de conyuge e hijos, pues al final la intención es que se aseguren, por lo que esos datos son importantes*
  * *La opción de decidir continuar o no con una nueva cotización manejarla por medio de botones*
  * *Implementar alguna validación cuando el dato que se ingrese no sea adecuado a lo que se espera*
  * *Permitir modificar o hacer ajustes a la cotización antes de finalizarla*
  * *Simular envío de correo o impresión de una cotización*
