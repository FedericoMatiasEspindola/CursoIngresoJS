function Mostrar()
{
  	var importeFinal;
  	var importeProducto;

  	importeProducto= prompt("ingrese el importe de su producto");

  	importeFinal= document.getElementById('importeFinal').value=importeProducto;
  
  	//importeProducto= parseInt(importe);

  	importeProducto= importeFinal *1.21;
  	//importeProducto= importeFinal+importeProducto;

  	alert("El importe final es: " +importeProducto);
}
