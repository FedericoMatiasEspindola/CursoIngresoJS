function Mostrar()
{

	var numero;
	var letra;
	var respuesta="si";
	var maximonumero;
	var minimonumero;
	var maximoletra;
	var minimoletra;
	var promedio;
	var contador=0;
	var contadorletra=0;
	var acumulador=0;
	var acumuladorDeLetra=0;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDePositivos=0;
	var contadorDeCeros=0;


	
	while(respuesta!="no")
	{
		contador++;
		letra=prompt("ingrese letra");
		respuesta=prompt("si para continuar, no para salir")
		while(!(isNaN(letra)))
		{
			letra=prompt("ingrese una letra");
			//respuesta=prompt("si para continuar, no para salir")
		}



		numero=prompt("ingrese numero entre -200 y 200");
		numero=parseInt(numero);
		respuesta=prompt("si para continuar, no para salir")
		while(numero<-200 || numero>200 isNaN(numero))
		{
			numero=prompt("ingrese numero entre -200 y 200");
			numero=parseInt(numero);
			respuesta=prompt("si para continuar, no para salir")
		}





		if(contador==1)
		{
			maximo=numero;
			maximoletra=letra;
			minimo=numero;
			minimoletra=letra;
		}
		else
		{
			if(numero>maximo && letra>maximoletra)
			{ 
				maximo=numero;
				maximoletra=letra;
			}
			if(numero<minimo && letra<minimoletra)
			{
				minimo=numero;
				minimoletra=letra;
			}
		}

		switch(letra)
		{
			case "a":
			case "e":
			case "i":
			case "o":
			case "u":

				contadorletra++;
				acumuladorDeLetra=acumuladorDeLetra+numero;
				break;


		}



		promedio=acumuladorDeLetra/numero;






	}



	//document.write("<br> letra del numero mas bajo "+minimo);
	document.write("<br> "+letra);
	document.write("<br> "+numero);





}

 	/*cliente pide lo que quiera(una letra) validar que es una letra
	 ingresar numero del -200 al 200 inclusive
	 mostrar la letra del numero mas bajo
	 el promedio de todos los numeros despues de ingresar una vocal
	 la letra del maximo
	 la letra del minimo
	

 

 	*/