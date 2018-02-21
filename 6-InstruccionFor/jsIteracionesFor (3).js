function Mostrar()
{
	var contador=0;
	//var repetciones = prompt("ingrese el número de repeticiones");
	var numeroRamdom;
	var contador0=0;
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var interaciones=100;

	for(contador-100;contador<interaciones;contador++)
	{
		//document.write("<br>"+contador);
		numeroRamdom=Math.floor(Math.random() * 10);
		document.write("<br>"+numeroRamdom);
		switch(numeroRamdom)
		{
			case 0:
				contador0++;
				break;
			case 1:
				contador1++;
				break;
			case 2:
				contador2++;
				break;
			case 3:
			/*var porcen=(contador3/interaciones)*100;
				if(porcen>7)
				{
					contador3--;
					continue
				}*/
				contador3++;
				break;
			case 4:
				contador4++;
				break;
			case 5:
				contador5++;
				break;
			case 6:
				contador6++;
				break;
			case 7:
				contador7++;
				break;
			case 8:
				contador8++;
				break;
			case 9:
				contador9++;
				break;
			
		}
	}
	document.write("<br> cantidad de cero: "+contador0);
	document.write("<br> cantidad de uno: "+contador1);
	document.write("<br> cantidad de dos: "+contador2);
	document.write("<br> cantidad de tres: "+contador3);
	document.write("<br> cantidad de cuatro: "+contador4);
	document.write("<br> cantidad de cinco: "+contador5);
	document.write("<br> cantidad de seis: "+contador6);
	document.write("<br> cantidad de siete: "+contador7);
	document.write("<br> cantidad de ocho: "+contador8);
	document.write("<br> cantidad de nueve: "+contador9);

}//FIN DE LA FUNCIÓN