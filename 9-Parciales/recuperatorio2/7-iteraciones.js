//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	
	var nota;
	var sexo;
	//var respuesta="si";
	var contador=0;
	var iteraciones=6;
	var promedio;
	var acumulador=0;
	var minimo;
	var cantidadVarones=0;

	while(contador<iteraciones)
	{
		contador++;
		nota=prompt("ingrese su nota");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
		while(nota<0 || nota>10 || isNaN(nota))
		{
			nota=prompt("ingrese bien su nota");
			nota=parseInt(nota);
		}

		sexo=prompt("ingrese f o m");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese f o m");
		}

		if(nota<=6 && sexo=="m")
		{
			cantidadVarones++;
		}


		if(contador==1)
		{
			minimo=nota;
		}
		if(nota>minimo)
		{
			nota=minimo;
		}


	}


	promedio=acumulador/contador;


	document.write("<br> el promedio de las notas son "+promedio);
	document.write("<br> la cantidad de varones que su nota es mayor a 6 es de "+cantidadVarones);
	document.write("<br> la nota mas baja es "+minimo);
	

	
}

