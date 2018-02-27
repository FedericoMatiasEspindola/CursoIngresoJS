function Mostrar()
{
	var numero;
	var cantidad=0;
	var iteraciones=50;
	var maximo;
	var minimo;

	while(cantidad<iteraciones)
	{
		cantidad++;
		numero=prompt("ingrese el peso de su contenedor");
		numero=parseInt(numero);
		while(numero<0)
		{
			numero=prompt("error, ingrese el peso de su contenedor");
			numero=parseInt(numero);
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







	}




	document.write("<br> el contenedor con mas peso "+maximo+" KL");
	document.write("<br> el contenedor con menos peso "+minimo+" KL");











}
