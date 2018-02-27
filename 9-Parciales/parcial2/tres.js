function Mostrar()
{
	var precioUno;
	var precioDos;
	var precioTres;
	var promedio;
	var resultado;


	precioUno=document.getElementById('precioUno').value;
	precioDos=document.getElementById('precioDos').value;
	precioTres=document.getElementById('precioTres').value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	

	resultado=precioUno+precioDos+precioTres;
	promedio=resultado/3;


	alert("la suma de los precios es "+resultado);
	alert("el promedio de los precios es "+promedio);




}
