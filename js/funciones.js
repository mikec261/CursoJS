'use strict'

//funciones 
//Una funcion es una grupacion reutilizable de un conjunto de instrucciones


function calculadora(numero1, numero2){

	var mensaje = ''; 
	mensaje += 'suma '+(numero1+numero2)+' \n';
	mensaje += 'resta '+(numero1-numero2)+' \n';
	mensaje += 'multiplicacion '+(numero1*numero2)+' \n';
	mensaje += 'division '+(numero1/numero2)+' \n';

	return mensaje;
}

//Invocar o llamar a la funcion
//console.log(calculadora(5,3));
//parametros opcionales

function calculadora2(numero1, numero2, mostrar = false){

	var mensaje = ''; 
	if(!mostrar){
		console.log('suma '+(numero1+numero2)+' \n');
		console.log('resta '+(numero1-numero2)+' \n');
		console.log('multiplicacion '+(numero1*numero2)+' \n');
		console.log('division '+(numero1/numero2)+' \n');
	}else{
		document.write('<h3> suma '+(numero1+numero2)+' <br> </h3>');
		document.write('<h3> resta '+(numero1-numero2)+' <br> </h3>');
		document.write(' <h3> multiplicacion '+(numero1*numero2)+' <br> </h3>');
		document.write('<h3> division '+(numero1/numero2)+' <br> </h3>');
	}
}

//Invocar o llamar a la funcion
//calculadora2(5,3,true);



//funciones dentro de otras


function porConsola(numero1, numero2){
	console.log('suma '+(numero1+numero2)+' \n');
	console.log('resta '+(numero1-numero2)+' \n');
	console.log('multiplicacion '+(numero1*numero2)+' \n');
	console.log('division '+(numero1/numero2)+' \n');
}


function porPantalla(numero1, numero2){
	document.write('<h3> suma '+(numero1+numero2)+' <br> </h3>');
	document.write('<h3> resta '+(numero1-numero2)+' <br> </h3>');
	document.write(' <h3> multiplicacion '+(numero1*numero2)+' <br> </h3>');
	document.write('<h3> division '+(numero1/numero2)+' <br> </h3>');
}


function calculadoraPorLlamada(numero1,numero2, mostrar = false){

	if(!mostrar){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
}

calculadoraPorLlamada(4,5,true);