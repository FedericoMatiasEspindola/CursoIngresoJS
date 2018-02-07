function Mostrar()
{
//tomo la edad  

	var edad;

	edad= document.getElementById('edad').value;

	if(edad <13)
		{
			
			alert("es niño");

		}

	  	else
			
			if(edad >17)
				{
					
					alert("es mayor de edad");

				}

				else
					{

						alert("es adolescente");

					}


}//FIN DE LA FUNCIÓN