function Mostrar()
{

	var largo;
	var ancho;
	var perimetro;
	var perimetroAlambre;

	largo= document.getElementById('alrgo').value;
	ancho= document.getElementById('ancho').value;

	perimetro= largo*ancho
	perimetroAlambre= perimetro*3

	alert("se necesita: " + perimetroAlambre + " metros de alambre");



}
