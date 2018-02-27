//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el primer numero");
	numeroDos=prompt("ingrese el segundo numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);



	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno-numeroDos;
		}
		else
		{
			resultado=numeroUno+numeroDos;
		}
	}





	document.write("<br> el resultado es "+resultado);
	












}

