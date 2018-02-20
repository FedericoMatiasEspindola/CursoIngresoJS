function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero= prompt("ingrese un numero");
		numero= parseInt(numero);
		
		respuesta=prompt("ingrese si para continuar");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN