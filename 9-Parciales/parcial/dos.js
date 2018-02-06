function Mostrar()
{
  var importefinal;
  var importeproducto;

  importefinal= document.getElementById('importeFinal').value;
  
  importeproducto= importefinal *21/100;
  importeproducto= importefinal+importeproducto;

  alert("El importe final es: " +importeproducto);
}
