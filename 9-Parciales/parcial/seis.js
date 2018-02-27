function Mostrar()
{
	var importe;
	var contador=0;
	var respuesta="si";
	var maximo;
	var minimo;
	var promedio;
	var acumulador=0;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDePositivos=0;
	var contadorDeCeros=0;


	
	while(respuesta!="no")
	{
		contador++;
		importe=prompt("ingrese numero entre -50 y 50");
		importe=parseInt(importe);
		respuesta=prompt("si para continuar, no para salir")		
		
		while(importe<-50 || importe>50 isNaN(importe))
		{
			importe=prompt("error, ingrese numero entre -50 y 50");
			importe=parseInt(importe);
			respuesta=prompt("si para continuar, no para salir");
		}
		

		//par,impar
			{
				if(importe%2==0 && importe!=0)
				{
					contadorDePar++;
				}
				else
				{
					contadorDeImpar++;
				}
				//positivos
				if (importe>0)
				{
					contadorDePositivos++;
					acumulador=acumulador+importe;
				}
				
			}



		if(contador==1)
		{
			maximo=importe;
			minimo=importe;
		}
		else
		{
			if(importe>maximo)
			{
				maximo=importe;
			}
			if(importe<minimo)
			{
				minimo=importe;
			}
		}



	}


	promedio=acumulador/contadorDePositivos;



	document.write("<br> promedio de positivos "+promedio);
	document.write("<br> cantidad de pares "+contadorDePar);
	document.write("<br> cantidad de impares "+contadorDeImpar);
	document.write("<br> maximo "+maximo);
	document.write("<br> minimo "+minimo);






	

	//document.getElementById('importeFinal').value=importe;





}


/*

	-50 a 50 validar
	cliente puede ingresar cuantos numeros quiera
	informar cuantos pares e impares hay (3 par 0 impar)
	promedio de los positivos	15
	informar maximos y minimos
	max 20 min -50

*/