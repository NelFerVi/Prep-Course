# Homework: Javascript VI

1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

# Funciones Callback: 
### Las Funciones son Objetos
Lo primero que tenemos que saber es que en Javascript, las funciones son objetos de primera clase. Como tales, podemos trabajar con ellos de la misma forma que trabajamos con otros objetos, como asignarlos a variables y pasarlos como argumentos a otras funciones. Esto es importante, porque esta última técnica nos permite ampliar la funcionalidad de nuestras aplicaciones.

##Funciones Callback
Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback. Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.

### Para ilustrar las funciones callback, iniciemos con un ejemplo simple:
```js
function crearCita(cita, callback){ 
  var miCita = "Como yo siempre digo, " + cita;
  callback(miCita); // 2
}
function logCita(cita){
  console.log(cita);
}
crearCita("come tus vegetales!", logCita); // 1
// Resultado en la consola: 
// Como yo siempre digo, come tus vegetales!
```
En el ejemplo anterior, crearCita es la función de orden-superior, la cual acepta dos argumentos, el segundo es el callback. La función logCita se está pasando como nuestra función callback. Cuando ejecutamos la función  crearCita  (1), observa que no estamos agregando paréntesis a logCita al pasarla como argumento. Esto se debe a que no queremos ejecutar nuestra función callback de inmediato, simplemente queremos pasar la definición de la función a la función de orden-superior para que pueda ejecutarse más tarde.

Además, debemos asegurarnos que si la función callback que pasamos espera argumentos, debemos proporcionarlos al ejecutarla (2). En el ejemplo anterior, eso sería la declaración callback(miCita); ya que sabemos que logCita  espera que se pase una cita.

Además, podemos pasar funciones anónimas como callbacks. La siguiente llamada a crearCita  tendrá el mismo resultado que el ejemplo anterior:
```js
crearCita("come tus vegetales!", function(cita){ 
  console.log(cita); 
});
```
No obligatorio usar la palabra "callback" como el nombre de tu argumento, Javascript solo necesita saber que es el nombre correcto del argumento. Según el ejemplo anterior, la siguiente función se comportará exactamente de la misma manera.
```js
function crearCita(cita, funcionParaLlamar) { 
  var miCita = "como siempre digo, " + cita;
  funcionParaLlamar(miCita);
}
```
## ¿Por qué usar funciones Callback?
La mayoría del tiempo estamos creando programas y aplicaciones que operan en una forma sincrónica. En otras palabras, algunos de nuestra operaciones comienzan solo después de que se hayan completado las anteriores. Usualmente, cuando solicitamos datos desde otras fuentes como una API externa, no siempre sabemos cuando nuestros datos serán devueltos. En estos casos queremos esperar la respuesta, pero no queremos que toda nuestra aplicación se detenga mientras se recuperan los datos. Estas son situaciones dónde las funciones callback resultan útiles.