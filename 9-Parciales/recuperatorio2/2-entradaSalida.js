//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	//alert("Funciona 2-EntradaSalida");
	 var importe;
	 var importefinal;

	 importe= prompt("ingrese el importe de su producto: ");

	 importefinal= document.getElementById('importe').value=importe;
      
     importe= importefinal/100*21;
     importe= importefinal+importe;

     alert("su importe final es: " + importe);
}    


