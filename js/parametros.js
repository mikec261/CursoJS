'use strict'


// Parametros REST y SPREAD


function listadoFrutas(fruta1, fruta2, ...todas_las_frutas){
	console.log('fruta 1: '+fruta1);
	console.log('fruta 2: '+fruta2);
	console.log(todas_las_frutas);
}



var frutas = ['Naranja','Manzanas'];
listadoFrutas(...frutas,'Pera','Sandia','Melon','Coco');