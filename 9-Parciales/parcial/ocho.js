/*
	ingreso de alumnos (no sabemos cuantos hay), pedir nombres
	decir cuantos alumnos ingrese,
	1-cantidad alumnos
	2-promedio total
	3-cantidad de mujeres(4)
	4-cantidad de varones(5)
	5-cantidad de varones desaprovados(1)
	6-nombre del alumno con mayor nota
	7-promedio de las mujeres
	8-sexo de menor de edad
	9-promedio de las edades de los aprobados (177/6)
	10-cantidad de notas pares(4)
	11-cantidad de notas impares(3)
*/

function Mostrar()
{
	var nombre;
	var contador=0;
	var respuesta="si";
	var nota;
	var promedio;
	var acumulador=0;
	var sexo;
	var acumuladorF=0;
	var acumuladorM=0;
	var maximo;
	var minimo;
	var nombreMaximo;
	var promedioMujeres;

	
	

	
	while(respuesta!="no")
	{
		
		alumnos=prompt("ingrese nombre del alumno");
		contador= contador+1;
		respuesta=prompt("Si para continuar , No para salir");
	
		
		sexo=prompt("ingrese f ó m ");
		respuesta=prompt("Si para continuar , No para salir");
		while(sexo!= "f" && sexo!= "m")
		{	
			sexo=prompt("error, ingrese f ó m ");
			respuesta=prompt("Si para continuar , No para salir");		
		}
		if(sexo=="f")
		{
			acumuladorF++;
		}
		if(sexo=="m")
		{
			acumuladorM++;
		}
		
		

		

		nota=prompt("ingrese su nota");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
		respuesta=prompt("Si para continuar , No para salir");
		while(nota <0 || nota >10)
		{
			nota=prompt("ingrese bien su nota");
			nota=parseInt(nota);
			respuesta=prompt("Si para continuar , No para salir");
		}
		


	}
	
	promedio=acumulador/contador;


	document.write("<br> son " +contador+ " de alumnos");
	document.write("<br> el promedio de las nota son "+promedio);
	document.write("<br> mujeres: "+acumuladorF+" varones: "+acumuladorM);
	//document.write("<br> nota del alumno con mas nota "+maximo);



}

/*	
			nota		edad
	maria 	 10			20
	jose	 0			30
	gabriela 2			40
	martin	 5			17
	edi		 6			30
	axel	 9			40
	flor	 0			25
	lucas	 4			33
	lidia 	 7			37


*/





