//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var mesDelAño;


	mesDelAño=prompt("ingrese un mes");

	switch(mesDelAño)
	{
		case "enero":
		case "febrero":
			alert("Veranito!!!!");
			break;

			default:

	/*	case "marzo":
		case "abril":	
		case "mayo":	
		case "junio":
		case "julio":
		case "agosto":
		case "septiembre":
		case "octubre":	
		case "noviembre":
		case "diciembre":
		*/
			alert("extraño enero y febrero!!!");
			break;

	}
	
}

