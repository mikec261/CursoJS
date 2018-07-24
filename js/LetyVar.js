'use strict'

//Pruebas con let y var

// Prueba

var numero = 40;

console.log(numero); //valor 40


if(true){
	var numero = 50;
	console.log (numero); //valor 50
}

console.log(numero); //valor 50

// Prueba con Let

var texto = 'curso js mike';

console.log(texto); //el valor es el mismo


if(true){
	let texto ='curso laravel 5';
	console.log(texto);
}

console.log(texto);