'use strict'

/* 
Utilizando un bucle mostrar la suma y l amedia de los numeros intriducidos
hasta intriducir un numero negativo y ahi mostrar el resultado
ewfw*/


var suma = 0;
var contador = 0;

do{
	var numero = parseInt(prompt('Introduce numeros hasta que metas uno negativo', 0));

	if(isNaN(numero)){
		numero = 0;
	}else if(numero >=0){
		suma += numero;
		contador++;
	}

	console.log('la suma '+contador+' es: '+suma);
}while(numero >= 0)