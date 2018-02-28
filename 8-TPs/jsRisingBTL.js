/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 
	var edad;
	var sexo;
	var estadoCivico;
	var sueldo;
	var legajo;
	var nacionalidad;


	edad=prompt("ingrese su edad");
	edad=parseInt(edad);
	while(edad<17 || edad >91 || isNaN(edad))
	{
		edad=prompt("error, ingrese su edad");
		edad=parseInt(edad);
	}

	sexo=prompt("ingrese f para femenino o m para masculino");
	while(sexo!="f" && sexo!="m")
	{
		sexo=prompt("error, ingrese f o m");
	}
	if(sexo=="m")
		{
			sexo="Masculino";	
		}
		else
		{
			sexo="Femenino";
		}

	estadoCivico=prompt("1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	estadoCivico=parseInt(estadoCivico);
	while(estadoCivico<0 && estadoCivico>4 || isNaN(estadoCivico))
	{
		estadoCivico=prompt("error, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		estadoCivico=parseInt(estadoCivico);
	}
	switch(estadoCivico)
	{
		case 1:
		estadoCivico="Soltero/a";
			break;

		case 2:
		estadoCivico="Casado/a";
			break;

		case 3:
		estadoCivico="Divorciado/a";
			break;

		case 4:
		estadoCivico="viudo/a";
			break;

	}
	



	sueldo=prompt("ingrese su sueldo");
	sueldo=parseInt(sueldo);
	while(sueldo<8000 || isNaN(sueldo))
	{
		sueldo=prompt("error, ingrese su sueldo");
		sueldo=parseInt(sueldo);
	}





	legajo=prompt("ingrese legajo de 4 cifras");
	legajo=parseInt(legajo);
	while(legajo<0 || legajo>10000 || isNaN(legajo))
	{	
		legajo=prompt("error, ingrese legajo de 4 cifras");
		legajo=parseInt(legajo);
	}






	nacionalidad=prompt("ingrese A para argentinos, E para extranjeros, N para nacionalizados");
	while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n")
	{
		nacionalidad=prompt("error, ingrese A para argentinos, E para extranjeros, N para nacionalizados");
	}

	switch(nacionalidad)
	{
		case "a":
		nacionalidad="argentino/a";
			break;

		case "e":
		nacionalidad="extranjero/a";
			break;

		case "n":
		nacionalidad="nacionalizado/a";
			break;


	}
	


	document.getElementById('Edad').value=edad;
	document.getElementById('Sexo').value=sexo;
	document.getElementById('EstadoCivil').value=estadoCivico;
	document.getElementById('Sueldo').value=sueldo;
	document.getElementById('Legajo').value=legajo;
	document.getElementById('Nacionalidad').value=nacionalidad;












}
