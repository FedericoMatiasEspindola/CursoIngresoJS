function Mostrar()
{
	var contador=0;
	//var repetciones = prompt("ingrese el número de repeticiones");
	var numeroRamdom;

	for(contador-100;contador<100;contador++)
	{
		//document.write("<br>"+contador);
		numeroRamdom=Math.floor(Math.random() * 10);
		document.write("<br>"+numeroRamdom);
	}


}//FIN DE LA FUNCIÓN