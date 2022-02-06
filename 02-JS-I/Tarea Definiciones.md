Conceptos de:

Variables: 
Una variable en programacion es un elemento que se utiliza para almacenar un valor de algo que puede ser un numero, un caracter, una cadena de caracteres (string) o un valor booleano (verdadero o true, falso o false).
En JS se declara con la palabra reservada "var" seguida por un nombre que identificara a la variable y se puede en esta misma declaracion asignarle o no un valor inicial.
    var nombre = "Jose"; creamos la variable nombre y le asignamos el valor Jose. 
Los caracteres o cadena de caracteres se deben escribir entre comillas dobles o simples, los numeros y los booleanos no.
En algunos programas se debe especificar el tipo de datos que contendra esta variable, pero en JS eso no es necesario.

Strings:
Son cadenas de caracteres o blques de texto que se pueden almacenar en variables, o bien se podrian usar como argumentos o etiquetas y siempre se deben escribir entre comillas dobles o simples.

Funciones:
Las funciones son objetos formados por bloques de codigos que efectuan una tarea especifica y cuya principal ventaja es que se pueden reutilizar. 
Una funcion se declara utilizando la palabra reservada function precedida por un nombre, con parentesis, argumentos y llaves.
Las funciones pueden o no retornar un valor determinado. Para retornar un se utiliza la palabra reservada "return" seguida del la expresion o valor a retornar.
    function nombreFuncion (arg1, ..... ,argn) {
        // aqui va el codigo reutilizable
        return valor o expresion;
    }
Si no vamos a retornar valor alguno se escribe:
    function nombreFuncion (arg1, ..... ,argn) {
        // aqui va el codigo reutilizable
    }
Para utilizar una funcion debemos invocarla escribiendo su nombre y entre parentesis los argumentos.
    nombreFuncion ("Juan", 3, true, ..... , "argentino");

Declaraciones if:
Se utilizan como control de flujo, para ejecutar una parte determinada del codigo de acuerdo con el resultado de una comparacion.
    if(comparacion) {
        // si el resultado de la comparacion es true se ejecuta este codigo.
    } 
    else {
        // si el resultado de la comparacion es false se ejecuta esta otro codigo.
    }
Es util para ejecutar parte del codigo se se cumplen ciertas condiciones.

Valores booleanos (true, false):
Los valores booleanos true (verdadero) y false (falso) son aquellos que pueden tomar las variables booleanas, pero tambien son los valores que entregan los bloques de comparacion cuando hacen una comparacion entre valores y/o variables para decidir que hacer en base a este resultado.