'use-strict'

var categoria = ['comedia', 'tragedia', 'fantasia'];
var peliculas = ['lso huevos', 'titanic', 'harry potter'];

//para odenar el array en orden alfabetico 
peliculas.sort();


//voltear el orden del array
peliculas.reverse();

var cine = [categoria,peliculas];
console.log(cine[0][0]);

//insertar elementos
peliculas.push('jurassic world');

//saca el ultimo elemento
peliculas.pop();

//en que posicion se encuentra la opcion deseada
var indice = peliculas.indexOf('titanic');

//ELIMINO ELEMENTOS  APARTIR DE LA POSICION INDICADA Y LA CANTIDAD DE ELEMENTOS INDICADA
if(indice >-1){
	peliculas.splice(indice,1);
}

console.log(peliculas);


//convertir array en string separado con comas
var peliculas_string = peliculas.join();
console.log(peliculas_string);


//convertir cadena en array
var cadena = "texto1, texto2, texto2";

var cadena_array = cadena.split(" , ");
console.log(cadena_array);