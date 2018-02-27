function Mostrar()
{

	var numeroUno;
	var numeroDos;
	var resultado;
	var positivo;
	var negativo;
	var cero;


	numeroUno=prompt("ingrese numero uno");
	numeroDos=prompt("ingrese numero dos");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);


	resultado=numeroUno+numeroDos;


	if(resultado==0)
	{
		cero="cero";
	}
	else
	{
		if(resultado>0)
		{
			positivo="positivo";
		}
	}
		if(resultado<0)
		{
			negativo="negativo";
		}


		
	document.write("<br> la suma da "+cero);
	document.write("<br> la suma da "+positivo);
	document.write("<br> la suma da "+negativo);


}




