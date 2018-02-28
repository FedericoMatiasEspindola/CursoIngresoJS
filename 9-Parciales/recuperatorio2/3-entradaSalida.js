//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var largo;
	var ancho;
	var resultado;

	largo=prompt("ingrese largo");
	ancho=prompt("ingrese ancho");

	largo=parseInt(largo);
	ancho=parseInt(ancho);


	resultado=largo+ancho+largo+ancho;
	resultado=resultado*6;


	document.getElementById('largo').value=largo;
	document.getElementById('ancho').value=ancho;


	alert("se necesita "+resultado+" metros de alambre");









	
}

