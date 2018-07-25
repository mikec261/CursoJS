'use strict'

//Funciones anonimas
//Es una funcion que no tiene nombre

var pelicula = function(nombre){
	return "la pelicula es "+nombre;
}


function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}

//funcion de callBack

sumame(5,7,function(dato){
	console.log("La suma es:", dato);
},
function(dato){
	console.log("La suma por dos es:",(dato*2));
});


//funcion de flecha
sumame(10,20,dato =>{
	console.log("La suma es:", dato);
},
dato =>{
	console.log("La suma por dos es:",(dato*2));
});