//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var numeroUno;
	var numeroDos;
	var resultado;
	var par;

	numeroUno=prompt("ingrese numero uno");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese numero dos");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+""+numeroDos;
	}
	else
	{
		if(numeroUno>numeroDos)
		{
			resultado=numeroUno*numeroDos;
			if(resultado%2==0 && resultado!=0)
			{
					par=" es par";
			}
			
		}
		if(numeroUno>numeroDos)
		{
				resultado=numeroUno-numeroDos;
		}




	}	
		
	
	
	



	document.write("<br> el resultado es "+resultado+ par);










	
}

/*

	no se tiene que validar
	no usar while
	solo if

	se ingresa 2 numeros
	si son iguales= se concatenan ----- 3 3=33
	si el mayor es el primero= se multiplican ----- 6 3 =18
	de lo contrario= se restan ----- 8 10= -2
	si multiplicacion es par= agregar es par al lado






*/