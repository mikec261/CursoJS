
/*
 Tabal de multiplicar de un numero introducido por pantalla
 */
 var numero = parseInt(prompt('de que numero quieres la tabla?'));


 while(!parseInt(numero)){
 	numero = parseInt(prompt('solo se aceptan  numeros, de que numero quieres la tabla?'));
 }

 for(var i=0; i<=10 ; i++)
 {
 	document.write(i+' * '+numero+' = '+(i*numero)+'<br>');
 }


 /*
 	Todas las tablas
 */

var cont=1;
 do{
 	for(var i=0; i<=10 ; i++)
 	{
 		document.write(i+' * '+cont+' = '+(i*cont)+'<br>');
 	}
 	cont++;
 }while(cont<=10)