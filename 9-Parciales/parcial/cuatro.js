function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese numero uno");
	numeroDos=prompt("ingrese numero dos");


	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);


	if( numeroUno == numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
		else
		{
			if(numeroUno > numeroDos)
			{
				resultado=numeroUno-numeroDos;
			}
		}
				
			if(numeroUno < numeroDos)
			{
				resultado=numeroUno+numeroDos;
			}
				
				
			

	document.write("<br> el resultado es: "+resultado);


}
