function Mostrar()
{
	var contador=0;
	var iteraciones=10;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contadorDeCeros=0;
	var contadorDePositivo=0;
	var contadorDeNegativo=0;

	
	for(contador=-10;contador<iteraciones;contador++)
	{
		document.write("<br>"+contador);

		if(contador==0)
		{
			contadorDeCeros++;
		}
		else//par,impar
		{
			if(contador%2==0)
			{
				contadorDePar++;
			}
			else
			{
				contadorDeImpar++;
			}
			//positivos,negativos
			if (contador>0)
			{
				contadorDePositivo++;
			}
			else
			{
				contadorDeNegativo++;	
			}
		}
	}

		//document.write("<br>"+contador);
		
		document.write("<br> cero "+contadorDeCeros);
		document.write("<br> par "+contadorDePar);
		document.write("<br> impar "+contadorDeImpar);
		document.write("<br> positivos "+contadorDePositivo);
		document.write("<br> Negativos "+contadorDeNegativo);

}

