function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	//console.log("hola");
	edad= document.getElementById('edad').value;
	estadoCivil= document.getElementById('estadoCivil').value;

	if(edad >17)

		//console.log("NO HACER NADA");

		if(estadoCivil == "Soltero")
			{

				alert("Es soltero y no es menor");

			}
			 
			{
				console.log("NO HACER NADA",estadoCivil);
			}
			





	/*if(edad >18 && estadoCivil == "Soltero")
		{

			alert("Es soltero y no es menor");

		}*/




}//FIN DE LA FUNCIÓN