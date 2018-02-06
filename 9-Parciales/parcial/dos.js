function Mostrar()
{
  var importefinal;
  var importeproducto;

  //importeproducto= prompt("ingrese el importe de su producto");

  importefinal= document.getElementById('importeFinal').value; //=importeproducto;
  
  importeproducto= importefinal *21/100;
  importeproducto= importefinal+importeproducto;

  alert("El importe final es: " +importeproducto);
}
