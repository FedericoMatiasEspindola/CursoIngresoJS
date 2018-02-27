//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var importe;
	var iteraciones=7;
	var contador=0;
	var maximo;
	var minimo;

	while(contador<iteraciones)
	{
		contador++;
		importe=prompt("ingrese su importe")
		importe=parseInt(importe);
		while(importe<0)
		{
			importe=prompt("error ingrese un numero mayor a cero")
			importe=parseInt(importe);
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



	document.write("<br> el importe maximo es "+maximo);
	document.write("<br> el importe minimo es "+minimo);



}

