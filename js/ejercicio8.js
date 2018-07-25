'use strict'

/*
Calculadora:

- Pida dos numero spor pantalla
- Si se mete uno mal que nos los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado de
  sumar, restar, multiplicar y dividir esas dos cifras
 */

 var numero1 = parseInt(prompt('Ingresa el primer numero '));
 var mensaje = '';

 while(!parseInt(numero1)){
 	numero1 = parseInt(prompt('Es necesario ingresar solo numeros no se aceptan letras ni caracteres especiales',0));
 }

  var numero2 = parseInt(prompt('Ingresa el segundo numero ',0));

   while(!parseInt(numero2)){
 	numero2 = parseInt(prompt('Es necesario ingresar solo numeros no se aceptan letras ni caracteres especiales',0));
 }
 
var opcion = parseInt(prompt('Que operacion deseas realizar \n 1.- Suma \n 2.- Resta \n 3.- Multiplicar \n 4.- Dividir'));

while(!parseInt(opcion) || opcion<=0 || opcion>=5 ){
 	opcion = parseInt(prompt('Es necesario ingresar solo numeros no se aceptan letras ni caracteres especiales \n solo numeros del 1 al 5 Que operacion deseas realizar \n 1.- Suma \n 2.- Resta \n 3.- Multiplicar \n 4.- Dividir',0));
 }

switch(opcion){

	case 1: mensaje = ' la suma de '+numero1+' + '+numero2+' = '+(numero1+numero2);

		break;

	case 2: mensaje = ' la resta de '+numero1+' - '+numero2+' = '+(numero1-numero2);

		break;

	case 3: mensaje = ' la Multilicacion de '+numero1+' * '+numero2+' = '+(numero1*numero2);

		break;

	case 4: mensaje = ' la Divicion de '+numero1+' / '+numero2+' = '+(numero1/numero2);

		break;
}

	document.write('<h1> EL RESULTADO DE LA OPERACION ES: </h1><br/>');
	document.write('<h3>'+mensaje+'</h3>');