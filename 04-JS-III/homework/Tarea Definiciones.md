1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

#### Arrays
Un array es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado uno a continuacion de otro identificado por la posición sucesiva que ocupa en el array. En Javascript, se pueden definir de varias formas:
    `var array = [];` esto declara un array vacio
En JS a diferencia de otros lenguajes, un array no esta tipado, es decir que puede contener en el mismo array distintos tipos de datos. Ejemplo:
    `var array = [547, "texto", true, 4, "hola"];` [numero, texto, booleano, numero, texto]
La posicion que ocupa cada dato se cuenta desde el primero en forma sucesiva hasta el ultimo empezando desde cero.
por ejemplo en la posicion 0 esta el dato 547, en la posicion 2 esta true.
Para acceder a cada dato lo hacemos con el nombre del array seguido de [numero de ubicacion].
Ejemplo:
    `array[0] ----> contiene 547`
    `array[1] ----> contiene "texto"`
     ... etc hasta llegar al ultimo
    `array[4] ----> contiene "hola"`