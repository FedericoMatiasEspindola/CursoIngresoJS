function Mostrar()
{

	var edad;
	var sexo;
	var promedio;
	var minimo;
	var cantidad=0;
	//var iteraciones=4;
	var acumuladorEdad=0;
	var cantidadVarones;
	var respuesta="si";


	while(respuesta!="no")
	{

		cantidad++;
		edad=prompt("ingrese su edad");
		edad=parseInt(edad);
		acumuladorEdad=acumuladorEdad+edad;
		while(edad<0 || edad>100)
		{
			edad=prompt("error, ingrese bien su edad");
			edad=parseInt(edad);
		}


		sexo=prompt("ingrese f o m");
		respuesta=prompt("si o no")
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("error, ingrese f o m");
		}


		if(cantidad==1)
		{
			minimo=edad;
		}
		else
		{
			if(edad<minimo)
			{
				minimo=edad;
			}
		}


		if(sexo=="m" && edad>19)
		{
			cantidadVarones++;
		}



	}


	promedio=acumuladorEdad/cantidad;


	alert("el promedio de edad es "+promedio);
	alert("la edad mas baja es "+minimo);
	alert("cantidad de varones que su edad sea mayor o igual a 20 "+cantidadVarones);



}
