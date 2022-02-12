
1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

### Prototype: 
El `prototype o prototipo` es un concepto casi único de JavaScript. Este concepto se aleja de la forma en la cual normalmente se manejan las clases en un lenguaje de programación. En JAVA, por ejemplo, creamos una clase y luego la instanciamos. Pero en JS eso no se puede hacer, porque en JavaScript no existen las clases.
Al ser todos objetos en este lenguaje de programación debemos instanciarlos a partir de un objeto original, o bien, heredar a otros objetos. Y es aquí donde aparecen los conceptos de prototipo y su modelo de herencia prototipal.

# ¿Qué es un prototipo y la herencia prototipal? 
Un prototipo es un objeto que existe como una propiedad en todas las funciones de JavaScript.
JavaScript está basado en objetos. Entonces, un objeto es una colección de propiedades, y una propiedad es una llave (key) y un valor para esa llave (value). Aquí un ejemplo:
```js
const Frontend = {
name: “John”,
	age: 19,
	job: “Frontend Developer”,
};

// const Frontend --> Objeto
// {name: “John”, age: 19, job: “Frontend Developer”,}; --> Propiedades
// name: “John”	--> Propiedad
```
Siempre que pedimos una propiedad o un método a una función y no se encuentra, se busca en el `prototipo del objeto`. El prototipo, a su vez es también un objeto llamado `_Prototype_` y este objeto `_Prototype_` es una propiedad del objeto global: `_Object_`. Y como a todo objeto en JavaScript, se le pueden agregar nuevas propiedades y métodos.
Esto se conoce como cadena de prototipos. Y es la razón por la cual otros objetos pueden tener disponibles propiedades y métodos de otros objetos. Veamos unos ejemplos:
Primero, creamos un objeto normal:
```js
const character = {
    name: "Vegetal",
};

character.hi = function() {
    alert(`Me llamo ${this.name} y soy un personaje`);
};

character.hi();
```
Esto con un objeto puede estar bien y no causar problemas. Pero, ¿y si tenemos más de 50 objetos? ¿vamos a crear una función saludar por cada objeto? Esto es muy poco escalable. Busquemos otra forma:
```js
const characterMethods = {
    hi: function () {
        console.log(`Me llamo ${this.name} y soy un personaje`);
    },
};

function Character(name) {
    const character = {
        name: name,
    };

    character.saludar = characterMethods.hi;
    return character;
}

const vegeta = Character("Vegeta");
vegeta.hi();

const pikachu = Character("Pikachu");
pikachu.hi();
```

Esta forma es más sencilla y más funcional porque simplemente creamos dos objetos, uno donde guardamos los métodos y propiedades `characterMethods` y otro donde guardamos nuestros personajes `Characters`. Pero esto se puede hacer de forma mucho más sencilla con los prototipos y la herencia prototipal.
Y aquí veremos algo nuevo llamado: `object.create`. 
Básicamente, es uno de los métodos para crear objetos en JavaScript. Recibe dos argumentos:
`Object.create(prototypeObject, propertiesObject)`. 

El prototipo del objeto y las propiedades del objeto. Veamos su funcionamiento:
```js
function Character(name) {
    // Iniciamos el uso del Object.create.
    const character = Object.create(Character.prototype);
    character.name = name;
    return character;
}

// Iniciamos el uso de Object.prototype
Character.prototype;
```

Como mencionamos al principio en la definición de prototipo, todas las funciones tienen un objeto prototype. Al principio `Character.prototype` (el objeto de las funciones) `es un objeto vacío`. Pero, como dijimos al principio: a todo objeto se le pueden agregar nuevas propiedades y métodos. Hagamos que prototype deje de estar vacío
```js
function Character(name) {
    // Iniciamos el uso del Object.create.
    const character = Object.create(Character.prototype);
    character.name = name;
    return character;
}
// Iniciamos el uso de Object.prototype
Character.prototype;
// Agregamos un método a Character.prototype
Character.prototype.hi = function() {
    console.log(`Me llamo ${this.name} y soy un personaje`);
};

const vegeta = Character("Vegeta");
// Usamos el método agregado a Character.prototype
vegeta.hi();

const pikachu = Character("Pikachu");
pikachu.hi();
```

El código en el que trabajamos ahora es mucho más limpio, hay menos código repetido y sobre todo y más importante, es mucho más reutilizable y mantenible. Podemos agregar nuevos métodos y propiedades sin que todo se rompa, simplemente tendríamos que agregar un nuevo método a Character.prototype. No tendremos que crear muchas funciones o hacer que muchas propiedades y métodos dependan de un solo objeto.

## Resumen
•	Todo en JavaScript acaba en el objeto Object, el cual es el objeto global. Todo se hereda de allí y si alguna función no encuentra un método o una propiedad la buscará en el objeto global. Si no la encuentra en el objeto global se imprimirá un error.
•	La forma en la que un objeto puede acceder a propiedades y métodos de otro objeto hasta llegar al objeto global se llama herencia prototipal.
•	propotype es un objeto que tienen todas las funciones en JavaScript. Inicia vacío, pero se le pueden ir agregando nuevos métodos y propiedades.
Espero que hayas podido comprender un poco más este tema.
Nos vemos en un próximo post. 


### _Constructors_ (de Clases):
JavaScript tiene ciertas diferencias respecto a otros lenguajes de programación orientados a objetos. En JavaScript no existe el concepto de clase ni el concepto de constructor propiamente dicho, aunque por analogía con otros lenguajes muchas veces usamos estos términos.

# Constructores en Clases JavaScript
En programación orientada a objetos se denomina `constructor` al código que se ejecuta cuando se crea un objeto de un tipo determinado (a cada objeto creado se le denomina `instancia`). En otros lenguajes el constructor se delimita dentro de etiquetas separándolo del resto del código de la clase, pero en JavaScript esto no es así. Cuando se instancia un objeto, funciona como constructor todo el código declarado dentro de la función, es decir, todo código dentro de la función que pueda ser ejecutado será ejecutado (no se ejecutarán los métodos de la función, ya que será necesario invocarlos para que se ejecuten).
Escribe este código, guárdalo con extensión html y comprueba lo que ocurre.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Ejemplo aprenderaprogramar.com</title><meta charset="utf-8">
        <script type="text/javascript">
            function Taxi (tipoMotor) {
                this.tipoMotor = tipoMotor;
                alert('Se ha creado un objeto taxi con tipo motor: ' + this.tipoMotor);
                this.getCapacidad = function () {
                    if (tipoMotor == 'Diesel') { return 40;} else {return 35;} 
                }
            }

            function ejemploObjetos() {
                var coche1 = new Taxi('Diesel');
                var coche2 = new Taxi('Gasolina');
                alert ('El coche 1 tiene capacidad ' + coche1.getCapacidad() + ' litros\n');
                alert ('El coche 2 tiene capacidad ' + coche2.getCapacidad() + ' litros\n');
            }
        </script>
    </head>

    <body><div id="cabecera"><h2>Cursos aprenderaprogramar.com</h2><h3>Ejemplos JavaScript</h3></div>
        <div style="color:blue;" id ="pulsador" onclick="ejemploObjetos()">
            Probar 
        </div>
    </body>
</html>
```
Al pulsar sobre el texto “Probar” comprobamos que se muestran los mensajes:
* Se ha creado un objeto taxi con tipo motor: Diesel. 
* Se ha creado un objeto taxi con tipo motor: Gasolina.
* El coche 1 tiene capacidad 40 litros. 
* El coche 2 tiene capacidad 35 litros.

Como obervamos, cada vez que se instancia (crea un objeto) de la clase, se ejecuta el código asociado.
En este ejemplo tenemos el código this.tipoMotor = tipoMotor; donde debemos recordar que this.tipoMotor alude a la propiedad de la clase, mientras que tipoMotor es el parámetro recibido. Dado que ambos tienen el mismo nombre, la forma de diferenciar cuándo nos referimos a la propiedad y cuándo al parámetro es usar this cuando queramos referirnos a la clase. En general, toda propiedad y todo método dentro de la clase irán antecedidos de la palabra clave this para indicar que nos referimos a propiedades y métodos y no a variables cualquiera.

## Mas formas de crear objetos
Hemos visto que podemos declarar un tipo y luego crear objetos usando la invocación basada en `new nombreDelObjeto. `
Existen más alternativas para crear objetos:

# Creación de un objeto vacío
Para crear un objeto vacío podemos usar esta sintaxis.
```js
var objetoCreado = { };
```
Esta sintaxis equivale a escribir
```js
var objetoCreado = new Object ();
```

El objeto vacío creado con esta sintaxis pertenece al tipo de objeto predefinido de JavaScript del cual heredan propiedades y métodos todos los demás objetos existentes: `Object`.
Además existe un objeto Object, objeto predefinido de JavaScript, que nos facilita métodos para manipular objetos. No confundir el tipo de dato Object con el objeto predefinido Object. 
En este ejemplo se usa el objeto `Object` para definir una propiedad de un objeto creado inicialmente vacío:
```js
var pintura1 = {};
Object.defineProperty(pintura1, 'autor', {value: 'Vincent Van Gogh', writable:true, enumerable:true, configurable:true});
alert ('La propiedad autor del objeto pintura1 es: ' + pintura1.autor);
pintura1.autor = 'Michelangelo';
alert ('La propiedad autor del objeto pintura1 es: ' + pintura1.autor);
pintura1.deletrear = function () {
    var letras = []; var msg = '';
    for(var i=0; i<pintura1.autor.length;i++){msg = msg+pintura1.autor[i]+'-'; }
    alert (msg);
}
pintura1.deletrear();
```
Con este código en primer lugar creamos un objeto vacío pintura1. Luego le añadimos una propiedad valiéndonos del método defineProperty del objeto predefinido `Object`. En este método pasamos como parámetros el objeto del que definimos la propiedad `(pintura1)`, el nombre de la propiedad `(autor)`, el valor de la propiedad (Vincent Van Gogh) y sus características writable, enumerable y configurable (no vamos ahora a hablar sobre estas características). Posteriormente, accedemos a la propiedad y la modificamos para que pase a valer ‘Michelangelo’. Finalmente definimos una función para el objeto creado. A continuación resumimos la sintaxis utilizada. Adición de una propiedad a un objeto:
```js
Object.defineProperty(nombreObjeto, 'nombrePropiedad', {value: 'valorAsignado', writable:true,
enumerable:true, configurable:true});
```
# Adición de una función a un objeto:
```js
nombreObjeto.nombreFuncionDefinimos = function () { … código … }
```

# Definición y creación simultánea de un objeto
Para definir y crear un objeto en un solo paso usamos esta sintaxis:
```js
var nombreObjetoCreado = {
    propiedad1: valorPropiedad1,
    propiedad2: valorPropiedad2,
    propiedadN: valorPropiedadN,
    …
    método1: function () { … código … }
    método2: function (par1, par2, …, parN) { … código … }
    métodoN: function () { … código … }
}
```
# Comprueba los resultados de ejecutar este código:
```js
var pintura2 = {
    autor: "Vincent Van Gogh",
    añoCreacion: 1871,
    titulo: 'Los rosales corintios',
    getInfo: function () {    return this.titulo + ':' + this.autor + ', ' + this.añoCreacion +'.';     }
}
alert(pintura2.getInfo());
```
Con esta sintaxis no se pueden crear objetos adicionales del tipo definido. El único objeto existente es el que hemos definido y creado simultáneamente. Algunos autores denominan a esta construcción un Singleton (objeto único) por analogía con el patrón Singleton usado en otros lenguajes orientados a objetos para crear objetos únicos.
