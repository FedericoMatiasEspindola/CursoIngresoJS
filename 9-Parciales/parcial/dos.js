function Mostrar()
{
  	var importeFinal;
  	var importeProducto;

  	importeProducto= prompt("ingrese el importe de su producto");

  	//importeProducto= parseInt(importe);

  	importeFinal= importeProducto *1.21;
  	//importeProducto= importeFinal+importeProducto;

  	//alert("El importe final es: " +importeProducto);

  	document.getElementById('importeFinal').value=importeFinal;


}
