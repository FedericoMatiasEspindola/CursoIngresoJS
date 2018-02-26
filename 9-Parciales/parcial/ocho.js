/*
	ingreso de alumnos (no sabemos cuantos hay), pedir nombres
	decir cuantos alumnos ingrese,
	1-cantidad alumnos 	-
	2-promedio total	-
	3-cantidad de mujeres(4)	-
	4-cantidad de varones(5)	-
	5-cantidad de varones desaprovados(1)	-
	6-nombre del alumno con mayor nota
	7-promedio de las mujeres 
	8-sexo del menor de edad
	9-promedio de las edades de los aprobados (177/6)	-*
	10-cantidad de notas pares(4)	-
	11-cantidad de notas impares(3)	-
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
	var cantidadF=0;
	var cantidadM=0;
	var maximo=0;
	var minimo=10;
	//var maximoNota;
	//var minimoNota;
	//var maximoEdad;
	//var minimoEdad;
	var nombreMejorNota;
	var sexoDelMenorEdad;
	var acumuladorF=0;
	var promedioMujeres;
	var varonesdesaprobados=0;
	var edad;
	var cantidadEdad=0;
	var acumuladorEdad=0;
	var canitdadDePar=0;
	var cantidadDeImpar=0;
	var promedioEdadAprobados;

	
	

	
	while(respuesta!="no")
	{
		//cantidad de alumnos
		nombre=prompt("ingrese nombre del alumno");
		contador= contador+1;
		//respuesta=prompt("Si para continuar , No para salir");
	
		



		//sexo F o M
		sexo=prompt("ingrese f ó m ");
		//respuesta=prompt("Si para continuar , No para salir");
		while(sexo!= "f" && sexo!= "m")
		{	
			sexo=prompt("error, ingrese f ó m ");
			//respuesta=prompt("Si para continuar , No para salir");		
		}
		if(sexo=="f")//promedio notas mujeres
		{
			cantidadF++;
		}
		if(sexo=="m")
		{
			cantidadM++;
		}
		

	
		

		//notas de alumnos
		nota=prompt("ingrese su nota");
		nota=parseInt(nota);
		acumulador=acumulador+nota;
		//respuesta=prompt("Si para continuar , No para salir");
		while(nota <0 || nota >10)
		{
			nota=prompt("ingrese bien su nota");
			nota=parseInt(nota);
			//respuesta=prompt("Si para continuar , No para salir");
		}

		


		//varones desaprobados
		if(nota<4 && sexo=="m")
		{
			varonesdesaprobados++;
		}


		

		//nombre mejor nota
		if(nota>maximo)
		{
			maximo=nota;
			nombreMejorNota=nombre;
		}



		acumuladorF=acumuladorF+nota;
		if(nota <0 || nota >10 && sexo=="f" )
		{
			acumuladorF++;
		}






		//edad pedida - promedio de edades de aprobados
		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		acumuladorEdad=acumuladorEdad+edad;
		if(edad <0 && edad >100 )
		{
			edad=prompt("ingrese bien su edad");
			edad=parseInt(edad);
			//respuesta=prompt("Si para continuar , No para salir");		
		}
		if(nota<4)
		{
			acumuladorEdad++;
		}
		respuesta=prompt("Si para continuar , No para salir");
		


		
	

		//notas pares e impares
		if(nota%2==0)
		{
			canitdadDePar++;
		}
			else
			{
				cantidadDeImpar++;
			}



		//sexo del menor edad
		if(edad<minimo)
		{
			minimo=edad;
			sexoDelMenorEdad=sexo;
		}
		







		/*
		//contador maximos y minimos notas
		if(contador==0)
		{
			maximoNota=nota;
			minimoNota=nota;
		}
		else
		
		if(nota>maximoNota)
		{
			maximoNota=nota;
		}
		if(nota<minimoNota)
		{
			minimoNota=nota;
		}
		



		//contador maximos y minimos edad
		if(contador==0)
		{
			maximoEdad=edad;
			minimoEdad=edad;
		}
		else
		
		if(edad>maximoEdad)
		{
			maximoEdad=edad;
		}
		if(edad<minimoEdad)
		{
			minimoEdad=edad;
		}

		*/


	


	}
	
	promedio=acumulador/contador;
	promedioMujeres=acumuladorF/cantidadF;
	promedioEdadAprobados=acumuladorEdad/cantidadEdad;


	document.write("<br> son " +contador+ " alumnos");
	document.write("<br> el promedio de las nota son "+promedio);
	document.write("<br> mujeres: "+cantidadF);
	document.write("<br> varones: "+cantidadM);
	document.write("<br> varones desaprobados "+varonesdesaprobados);
	document.write("<br> el alumno con mayor nota es "+nombreMejorNota+" y su nota es "+maximo);
	document.write("<br> el promedio de las notas de las mujeres es "+promedioMujeres);
	document.write("<br> sexo del menor de edad "+sexoDelMenorEdad);
	document.write("<br> promedio de edad de los aprobados "+promedioEdadAprobados);
	document.write("<br> notas pares "+canitdadDePar);
	document.write("<br> notas impares "+cantidadDeImpar);
	
	

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





