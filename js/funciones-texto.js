'use strict'


var numero = 444;

var texto1 = 'Bienvenido al curso de JavaScript de victor robles';
var texto2 = 'es muy buen curso';

//convierte un entero en un string
var dato = numero.toString();

//cambia un texto a mayusculas
	dato = texto1.toUpperCase();
//cambia un texto a minusculas
	dato = texto1.toLowerCase();
	console.log(dato);

//calcular longitud de la cadena
var nombre = "mike";
console.log(nombre.length);

//concatenar unir textos
var textoTotal = texto1+' '+texto2;
var textoTotal2 = texto1.concat(' '+texto2);

console.log(textoTotal2); 


//buscar una palabra dentro de una cadena 
var busqueda = textoTotal2.indexOf('curso');
console.log(busqueda);

//la ultima vez que aparece
busqueda =  textoTotal2.lastIndexOf('curso');
console.log(busqueda)


//busca donde aparece la palabra
busqueda = texto1.search('curso');
console.log(busqueda);


//busca donde aparece la palabra y muestra en un array la info
busqueda = texto1.match('curso');
console.log(busqueda);

//busca donde aparece la palabra y muestra en un array todas las veces que aparece
busqueda = texto1.match('/curso/gi');
console.log(busqueda);

//sacar la palabra entre un rango 
busqueda = texto1.substr(14,5);
console.log(busqueda);

//sacar una letra en una posicion especifica
busqueda = texto1.charAt(14);
console.log(busqueda);

//devuelbe true si el texto inicia con lo especificado
busqueda = texto1.startsWith('Bi');
console.log(busqueda);

//devuelbe true si el texto termina con lo especificado
busqueda = texto1.endsWith('victor robles');
console.log(busqueda);

//devuelbe true si el texto contiene en cualquier parte lo especificado
busqueda = texto1.includes('de');
console.log(busqueda);

//remplazar un texto por otro
busqueda =  texto1.replace("JavaScript","Symfony");
console.log(busqueda);

//separar un string a partir del texto indicado
busqueda =  texto1.slice(14);
console.log(busqueda);

//separa una cadena de string segun un delimitador y lo guarda en un array
busqueda =  texto1.split(' ');
console.log(busqueda);

//elimina los espacios sobrantes por delante y detras
busqueda =  texto1.trim();
console.log(busqueda);