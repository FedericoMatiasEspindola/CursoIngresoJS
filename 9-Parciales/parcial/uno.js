
function Mostrar()
{
   var base;
   var perimetro;
   var altura;
   var area;
   
   base=prompt("ingrese base");
   altura=prompt("ingrese altura");
   //base= document.getElementById('laBase').value;

   perimetro= base*3;
   area=base*altura/2;

   alert("El perimetro es: " + perimetro);
   alert("El area es: "+ area);


}
