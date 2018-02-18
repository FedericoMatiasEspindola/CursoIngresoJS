/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var resultado;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	resultado=largo*ancho;
	resultado=resultado*3;

	alert("Se necesita comprar "+resultado+" metros de alambre");



}
function Circulo () 
{
	var radio;
	var resultado;

	radio=document.getElementById('Radio').value;

	resultado=3.14*2*radio;
	resultado=resultado*3;


	alert("Se necesita comprar "+resultado+" metros de alambre");


}
function Materiales () 
{
	var largo;
	var ancho;
	var resultado;
	var resultadoDos;
	var resultadoTres;

	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	resultado=largo*ancho;
	resultadoDos=resultado*2;
	resultadoTres=resultado*3;

	alert("Se necesita "+resultadoDos+" bolsas de cemento y "+resultadoTres+" bolsas de cal");


}