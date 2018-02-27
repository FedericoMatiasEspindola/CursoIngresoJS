function Mostrar()
{
  	var importeFinal;
  	var importeProducto;
  	var descuento;

  	importeProducto= prompt("ingrese el importe de su producto");
  	descuento= prompt("ingrese su descuento");
  	
    importeProducto=parseInt(importeProducto);
    descuento=parseInt(descuento)

  	importeFinal= importeProducto*descuento/100;
    importeFinal= importeProducto-importeFinal;
  	
  	

  	document.getElementById('importeFinal').value=importeFinal;


}
