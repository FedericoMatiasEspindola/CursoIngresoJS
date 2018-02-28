function Mostrar()
{
	var resultado;
  	var numeroUno;
  	var numeroDos;
  	var numeroTres;
  	var promedio;

  	numeroUno= document.getElementById('numeroUno').value;
  	numeroDos= document.getElementById('numeroDos').value;
  	numeroTres=document.getElementById('numeroTres').value;
  	
  	numeroUno= parseInt(numeroUno);
  	numeroDos= parseInt(numeroDos);
  	numeroTres= parseInt(numeroTres);

  	resultado= numeroUno + numeroDos;
  	promedio= resultado/3;
  	alert("la suma es: " + resultado);
  	alert("el promedio es "+promedio);



}

