function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero= prompt("ingrese un numero");
		numero= parseInt(numero);
		acumulador= acumulador+numero;
		respuesta=prompt("ingrese si para continuar");
	}

	promedio=acumulador/contador;

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=promedio;

}//FIN DE LA FUNCIÓN