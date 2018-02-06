/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	
	/*var nombre;
	nombre= prompt("nombre");
	document.getElementById('elNombre').value;
	var edad;
	edad= prompt("edad");
	document.getElementById('laEdad').value;
	alert("su nombre es:" +nombre "su edad es:" +edad);*/

	var nombre;
	var edad;

	nombre= document.getElementById('elNombre').value;
	edad= document.getElementById('laEdad').value;

	alert("Usted se llama "+nombre +" y tiene" +edad + "años");
}

