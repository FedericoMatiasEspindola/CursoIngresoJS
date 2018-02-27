function Mostrar()
{
	var numero;
	var maximo;
	var minimo;
	var promedio;
	var cantidadPar=0;
	var cantidad=0;
	var acumulador=0;
	var respuesta="si";


	while(respuesta!="no")
	{
		cantidad++;
		numero=prompt("ingrese un numero positivo");
		numero=parseInt(numero);
		respuesta=prompt("si o no")
		acumulador=acumulador+numero;
		while(numero<0)
		{
			numero=prompt("ingrese un numero positivo");
			numero=parseInt(numero);
			respuesta=prompt("si o no")
		}


		if(cantidad==1)
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


		if(numero%2==0 && numero!=0)
		{
			cantidadPar++;
		}



	}



	promedio=acumulador/cantidad;


	document.write("<br> cantidad de numeros par "+cantidadPar);
	document.write("<br> promedio de todos los numeros "+promedio);
	document.write("<br> suma de todos los numeros "+acumulador);
	document.write("<br> numero maximo "+maximo);
	document.write("<br> numero minimo "+minimo);


}
