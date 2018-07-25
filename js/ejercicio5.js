'use strict'

/*
Muestre todos los numeros divisores de un numero introduce en prompt
*/

var numero = parseInt(prompt("Mete un numero",1));

while(!parseInt(numero)){
	numero = parseInt(prompt("solo se aceptan numeros"));
}

for(var i = 1; i<numero; i++)
{
	if(numero%i==0){
		console.log("divisores"+i);
	}
}

