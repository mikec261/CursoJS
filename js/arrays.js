'use strict'

//Arrays, Arreglos, Matrices

var nombre = 'Victor Robles';
var nombres = ['Miguel martinez', 'Juan Lopez', 'Manolo Garcia', 'Jose Martin', 52, true];
var lenguaje = new Array("PHP", "JS","GO","JAVA");
var indice = parseInt(prompt('Que indice deseas mostrar las opciones van desde 0 al '+(nombres.length-1)));

while(indice >= nombres.length){
	indice = parseInt(prompt('la opcion insertada es incorrecta solo se permiten valores de entre 0 al '+(nombres.length-1)));
}

	console.log(nombres[indice]);

/*
document.write('<h1>TABLA DE NOMRBES<h1><br>');
document.write('<ul>');
for(var i = 0; i<nombres.length ; i++){
	document.write('<li>'+nombres[i]+'</li>');
}
document.write('</ul>');
*/

document.write('<select>');
lenguaje.forEach((elemento,indice)=>{
	document.write("<option value="+indice+">"+elemento+"</option>");
});
document.write('</select>');

document.write("</ul>");
lenguaje.forEach((elemento)=>{
	document.write("<li>"+elemento+"</li>");
});

document.write("</ul>");



var escuelas = ['Tec saltillo', 'Tec monterrey', 'Tec Mexico'];


document.write("<h1>INSTITUTOS TECNOLOGICOS</h1>");


document.write("<div class='form-group'><div class'row'> <labe class='col-sm-2 control-label'>Tecnologicos</label> <div class='col-sm-4'>");
document.write("<select class='form-control'>");

escuelas.forEach((element,index)=>{
	document.write("<option value="+index+">"+element+"</option>");
});

document.write('</select></div></div></div>');