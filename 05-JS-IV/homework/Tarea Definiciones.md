
1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

### Objetos:
En Javascript, existe un tipo de dato llamado objeto. No es más que una variable especial que puede contener más variables en su interior. De esta forma, tenemos la posibilidad de organizar múltiples variables de la misma temática dentro de un objeto. Veamos algunos ejemplos:
En muchos lenguajes de programación, para crear un objeto se utiliza la palabra clave new. En Javascript también se puede hacer:
    `const objeto = new Object();` // Esto es un objeto «genérico» vacío
Sin embargo, siempre que podamos, en Javascript se prefiere utilizar lo que se llaman los literales, un método abreviado para crear objetos directamente, sin necesidad de utilizar la palabra new.

## Declaración de un objeto:
Los literales de los objetos en Javascript son las llaves {}. Este ejemplo es equivalente al anterior, pero es más corto, rápido y cómodo, por lo que se aconseja declararlos así:
    `const objeto = {};` // Esto es un objeto vacío
Pero hasta ahora, solo hemos creado un objeto vacío. Vamos a crear un nuevo objeto, que contenga variables con información en su interior:
    `const player = {` // Declaración del objeto
        `name: "Manz",`
        `life: 99,`
        `strength: 10,`
    `};`

## Propiedades:
Estas variables dentro de los objetos se suelen denominar `propiedades`.
Como se puede ver, un objeto en Javascript nos permite encapsular en su interior información relacionada, para posteriormente poder acceder a ella de forma más sencilla e intuitiva.
Una vez tengamos un objeto, podemos acceder a sus propiedades de dos formas diferentes: a través de la notación con puntos o a través de la notación con corchetes.

# Notación con puntos
    console.log(player.name); // Muestra "Manz"
    console.log(player.life); // Muestra 99

# Notación con corchetes
    console.log(player["name"]); // Muestra "Manz"
    console.log(player["life"]); // Muestra 99
La más utilizada en Javascript suele ser la notación con puntos.
Hay ciertos casos en los que sólo se puede utilizar la notación con corchetes, como por ejemplo cuando se utilizan espacios en el nombre de la propiedad. Es imposible hacerlo con la notación con puntos.

## Métodos
El valor de una propiedad puede ser una función, en cuyo caso la propiedad es conocida como un método. Además de los objetos que están predefinidos en el navegador, puedes definir tus propios objetos. 
Un método es una función asociada a un objeto, o, simplemente, un método es una propiedad de un objeto que es una función. Los métodos se definen normalmente como una función, con excepción de que tienen que ser asignados como la propiedad de un objeto. Consulte también definiciones de métodos para obtener más detalles. Un ejemplo puede ser:

    objectName.methodname = functionName;
    var myObj = {
        myMethod: function(params) {
                // ...hacer algo
        }

        // O ESTO TAMBIÉN FUNCIONA

        myOtherMethod(params) {
            // ...hacer algo más
        }
    };

## Bucles ***for…in***
A veces queremos iterar sobre cada par clave-valor en nuestro objeto. Con las matrices, utilizamos un estándar para el bucle y una variable de número de índice. Los objetos no contienen índices numéricos, por lo que el bucle estándar no funcionará para los objetos. Javascript tiene un segundo tipo de bucle for integrado llamado "_for ... in loop_". Es una sintaxis ligeramente diferente, comienza igual pero entre paréntesis declararemos una variable, la palabra clave `in` y el nombre del objeto. Esto recorrerá cada clave del objeto y finalizará cuando se hayan iterado todas las claves. Podemos usar esta clave, y la notación de corchetes, en nuestro bucle for para acceder al valor asociado con esa clave.

```javascript
const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){
    console.log(clave);
    console.log(usuario[clave]);
}

// username
// 'juan.perez'
// password
// 'loremipsumpwd123'
// lovesJavascript
// true
// favoriteNumber
// 42
```
