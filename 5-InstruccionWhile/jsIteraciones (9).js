function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta='si';
	var acumulador=0;
	

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese su numero");
		numero=parseInt(numero);
		respuesta=prompt("Si para continuar , No para salir");
		if(acumulador<contador)
		{
			maximo=numero;
		}
			else
			{
				minimo=numero;
			}

	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;

}//FIN DE LA FUNCIÓN