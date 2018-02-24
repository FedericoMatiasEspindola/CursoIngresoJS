function Mostrar()
{

	var clave= prompt("ingrese el número clave.");
	var intentos=0;
	while(clave!="utn750" && intentos<2)
	{
		clave= prompt("error, ingrese el número clave.");
		intentos++;
	}
	if(intentos!=2)
	{
		alert("Bievenido");
	}

}//FIN DE LA FUNCIÓN
