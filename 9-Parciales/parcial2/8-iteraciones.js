//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var animal;
	var contador=0;
	var peso;
	var temperatura;
	var cantidadPar=0;
	var cantidadImpar=0;
	var maximoTemp;
	var minimoTemp;
	var maximoPeso;
	var minimoPeso;
	var promedio;
	var acumulador=0;
	var respuesta="si";
	var cantidadHabitadFrio=0;
	var animalMax;
	var animalMin;

	while(respuesta !="no")
	{
		contador++;
		animal=prompt("ingrese nombre del animal");
		peso=prompt("ingrese peso del animal");
		peso=parseInt(peso);
		acumulador=acumulador+peso;
		while(peso<0 || isNaN(peso))
		{
			peso=prompt("error, ingrese peso del animal");
			peso=parseInt(peso);
		}

		temperatura=prompt("ingrese temperatura del animal");
		temperatura=parseInt(temperatura);
		respuesta=prompt("Si para continuar, No para salir")
		while(temperatura<-40 || temperatura>40 || isNaN(temperatura))
		{
			temperatura=prompt("error, ingrese temperatura del animal");
			temperatura=parseInt(temperatura);
			respuesta=prompt("Si para continuar, No para salir")
		}


		if(temperatura%2==0 && temperatura!=0)
		{
			cantidadPar++;
		}
		else
		{
			cantidadImpar++;
		}




		if(temperatura <=0)
		{
			cantidadHabitadFrio++;
		}



		if(contador==1)
		{
			maximoTemp=temperatura;
			minimoTemp=temperatura;
		}
		else
		{
			if(temperatura>maximoTemp)
			{
				maximoTemp=temperatura;
			}
			else
			{
				minimoTemp=temperatura;
			}
		}

		if(contador==1)
		{
			maximoPeso=peso;
			minimoPeso=peso;
		}
		else
		{
			if(peso>maximoPeso)
			{
				maximoPeso=peso;
			}
			else
			{
				minimoPeso=peso;
			}
		}

		if(peso>maximoPeso)
		{
			animalMax=animal;
		}
		else
		{
			animalMin=animal;
		}







	}





	promedio=acumulador/contador;

	document.write("<br> cantidad temperatura par "+cantidadPar);
	document.write("<br> cantida temperatura impar "+cantidadImpar);
	document.write("<br> animal mas pesado "+animalMax);
	document.write("<br> animal menos pesado "+animalMin);
	document.write("<br> cantidad de animales que viven en habitad menos a 0 inclusive "+cantidadHabitadFrio);
	document.write("<br> promedio de los pesos de los animales "+promedio);
	document.write("<br> temperatura maxima "+maximoTemp);
	document.write("<br> temperatura minima "+minimoTemp);




	
}
/*
	se ingresa el nombre de un animal -
	el peso del mismo -
	validar que sea mayor que cero -
	y la temperatura del habitad de este animal -
	validar entre -40 y 40 -
	la cantidad de temperatura pares -
	cantidad de temperaturas impares -
	el nombre del animal mas pesado
	el nombre del animal menos pesado
	la cantidad de animales que viven en habitad menos a 0 inclusive -
	el promedio del peso de todos los animales -
	la temperatura maxima y minima 
*/