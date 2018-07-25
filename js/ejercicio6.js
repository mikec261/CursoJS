'use strict'

/*
Que nos digan si un numero es par o impar.
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero 
*/

var number = parseInt(prompt('Introduce un numero'));
var mensaje ='';

while(!parseInt(number)){
	number = parseInt(prompt('Solo se aceptan numeros',0));
}

	if(number%2==0){
		mensaje = 'es par';
	}else{
		mensaje = 'es impar';
	}

console.log(mensaje);