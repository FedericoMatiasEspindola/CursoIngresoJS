function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';
	
	

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		respuesta=prompt("Si para continuar , No para salir");
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

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN