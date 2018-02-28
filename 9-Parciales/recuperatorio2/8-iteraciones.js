//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var maximo;
	var minimo;
	var cantidadPar=0;
	var resultado;
	var promedio;


	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese un numero positivo");
		numero=parseInt(numero);
		respuesta=prompt("SI para continuar, NO para salir");
		acumulador=acumulador+numero;
		while(numero<0 || isNaN(numero))
		{
			numero=prompt("error, ingrese un numero positivo");
			numero=parseInt(numero);
			respuesta=prompt("SI para continuar, NO para salir");
		}


		if(numero%2==0 && numero!=0)
		{
			cantidadPar++;
		}


		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}


		}


	}



	promedio=acumulador/contador;


	document.write("<br> cantidad de pares "+cantidadPar);
	document.write("<br> promedio de las notas "+promedio);
	document.write("<br> el numero maximo "+maximo);
	document.write("<br> el numero minimo "+minimo);
	document.write("<br> la suma de los numeros es "+acumulador);


	
}

