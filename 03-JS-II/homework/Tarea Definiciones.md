#### Escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años:

#### for:
La declaración for crea un ciclo repetitivo que consta de tres expresiones opcionales, encerradas entre paréntesis y separadas por punto y coma, seguidas de una declaración (generalmente una declaración de bloque) que se ejecutará en cada ciclo.

## Sintaxis:
```javascript
for ([inicializacion]; [condicion]; [expresion-final]){
    sentencia;
}
```
# inicializacion: 
Es una expresión o declaración (que incluye las expresiones de asignaciónde variables) que se evalua una vez antes de que comience el ciclo. Se utiliza para inicializar una variable de contador. Tambien puede declarar opcionalmente nuevas variables con las palabras clave `var` o `let`. Las variables declaradas con `var` no son locales para el ciclo, es decir, están en el mismo ámbito en el que se encuentra el ciclo for. Las variables declaradas con `let` son locales para la instrucción, el resultado de esta expresión se descarta al salir del lazo.

# condition
Es una expresión que se evaluará antes de cada iteración del ciclo. Si esta expresión se evalúa como verdadera, se ejecuta la ese ciclo. Esta prueba condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera y el ciclo se convierte en un ciclo infinito. Si la expresión se evalúa como falsa, la ejecución saltea el ciclo for y continua ejecutando las expresiones que siguen a continuacion del lazo for.

# expresión-final
Es una expresión que se evaluará al final de cada iteración del ciclo. Esto ocurre antes de la próxima evaluación de la condición. Generalmente se usa para actualizar o incrementar la variable del contador que luego en el proximo ciclo se evaluara en la condicion.

# sentencia/s (statement/s)
Es una instrucción o conjunto de instrucciones que se ejecutan siempre que la condición se evalúe como verdadera. Si es una sola instruccion no es necesario utilizar llaves `{}` para encerrarla, solo se debe terminar con un `;`, pero para ejecutar varias declaraciones dentro del ciclo, si es necesario utilizar llaves `{ instr1; instr2; .. instrn; }` para agrupar esas declaraciones como un bloque. Para NO ejecutar declaraciónes dentro del ciclo, se usa una declaración vacía (;). 


#### Operadores lógicos:  `&&`, `||`, `!`
Se utilizan para combinar dos expresiones de igualdad o desigualdad y preguntar si alguna de las dos es verdadera, si ambas son verdaderas o si ninguna de ellas es verdadera. Esto se conoce como Algebre de Boole.

### &&
Este es el operador lógico `Y` (`AND`) conocido en el Algebra de Boole como `Conjuncion Logica`. Se representa con dos símbolos `&&` ubicado entre las dos expresiones a comparar:
`(expresion1 && expresion2)`
Esto evaluará ambas expresiones y devolverá verdadero si AMBAS expresiones son `true`. Si uno (o ambos) de ellos es falso, este operador devolverá `false`:
Ejemplo:
```javascript
if (num > 0 && num < 10) {// Si el nro es mayor que 0 Y menor que 9 ejecutara el document.write().
    document.write("El numero esta dentro del rango"); 
}
```

### ||
Este es el operador lógico `O` (`OR`) conocido en el Algebra de Boole como `Disyuncion Logica`. Se representa con dos símbolos `||` ubicado entre las dos expresiones a comparar:
`(expresion1 || expresion2)`
Esto evaluará ambas expresiones y devolverá falso si AMBAS expresiones son `false`. Si uno (o ambos) de ellos es true, este operador devolverá `true`:
Ejemplo:
```javascript
if (num === 0 || num > 10) {// Si el nro es mayor que 0 OR mayor que 10 ejecutara el document.write().
    document.write("El numero esta dentro del rango"); 
}
```

### !
Este operador lógico es el operador `NOT` (`NO`). Está escrito como un solo signo de exclamación (`!`) que se escribe delante de la expresion. El operador NOT devolverá el valor booleano opuesto de lo que se le pasa, si la expresion es falsa la volvera verdadera y viceversa.
`!(expr verdadera) -->  false`
`!(expr falsa) -->  true`

```javascript
if (!(1 === 1)) {
    console.log('1 es igual a 1, de modo que la expresión devuelve true. El operador ! devolverá lo contrario de eso, por lo que este código NO se ejecutará');
}
```

### Orden de ejecucion de los operadores logicos:
Las expresiones se evalúan en orden, y se omitirá cualquier expresión redundante. En una declaración `&&`, si la primera expresión es `false`, la segunda expresión no se evaluará porque AMBAS expresiones deben ser `true`. Lo mismo para la declaración `||`. Si la primera expresión es `verdadero`, la segunda no se evaluará porque solo debe haber una declaración `verdadero` para cumplir con los requisitos del operador.

### Uso de paréntesis para agrupar;
Si queremos ejecutar primero una expresion para luego negarla, debemos encerrarla entre paréntesis para evaluar PRIMERO lo que esta dentro de los paréntesis, luego aplicamos el operador `!`. Podemos ajustar cualquier expresión entre paréntesis y se evaluará antes de evaluar la expresión como un todo.