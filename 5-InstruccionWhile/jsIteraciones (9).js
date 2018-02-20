function Mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';
	//var bandera= true;

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("");
		numero=parseInt(numero);
		if(contador==1) //if(bandera= true)
		{
			maximo=numero;
			minimo=numero;
			//bandera= false;
		}else
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




}//FIN DE LA FUNCIÓN