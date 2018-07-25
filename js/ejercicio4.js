'use strict'

var num1 = parseInt(prompt('Introduce el primer numero'));
var num2 = parseInt(prompt('Introduce el segundo numero'));

while(isNaN(num1) || isNaN(num2)){
	var num1 = parseInt(prompt('solo se aceptan numeros reintroduce el primer numero'));
	var num2 = parseInt(prompt('solo se aceptan numeros reintroduce el segundo numero'));
}

var cadena = '';

if(num1 > num2){

	    cadena = num2;
	var dif = num1-num2;

	for(var i=0;  i<dif ; i++)
	{
		num2++;

		if(num2%2!=0){
			cadena = cadena+' '+num2;
		}
		
	}

	cadena = cadena;
}else{

	    cadena = num1;
	var dif = num2-num1;

	for(var i=0;  i<dif ; i++)
	{
		num1++;

		if(num1%2!=0){
		cadena = cadena+' '+num1;
	    }
	}

	cadena = cadena;
}


console.log('la cadena completa seria '+cadena);

