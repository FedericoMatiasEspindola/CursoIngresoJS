function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var resultado;
	var maximo;
	var minimo;
	
	
	

	numeroUno=prompt("ingrese numero uno");
	numeroDos=prompt("ingrese numero dos");
	numeroTres=prompt("ingrese numero tres");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);


	if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
		alert("el numero mayor es "+numeroUno);
	}
	else
	{
		if(numeroDos>numeroUno && numeroDos>numeroTres)
			{
				alert("el numero mayor es "+numeroDos);
			}
			else
				{
					alert("el numero mayor es "+numeroTres);
				}

	}

	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		alert("el numero menor es "+numeroUno);
	}
	else
	{
		if(numeroDos<numeroUno && numeroDos<numeroTres)
		{
			alert("el numero menor es "+numeroDos);
		}
		else
		{
			alert("el numero menor es "+numeroTres);
		}
	}

	
	
	

}

	
	




	/*resultado=numeroUno+numeroDos+numeroTres;
		resultado=resultado/3;

		alert("el promedio es "+resultado);
		*/
		



		/*if( numeroUno == numeroDos)
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
		*/			
					
				

		//document.write("<br> el resultado es: "+resultado);


	/* no usar if-
		ingreso 3 numeros, muestro promedio.




*/