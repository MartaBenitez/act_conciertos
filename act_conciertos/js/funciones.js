var opciones_conciertos=[{nombre:"AC/DC", valor:"acdc", precio:100},
{nombre:"Barón Rojo", valor:"baron", precio:80},
{nombre:"Iron Butterfly", valor:"iron", precio:120}
];

function crearDesplegable(){
	let desplegable=document.createElement("select");
	desplegable.id="opciones_conciertos";
	let label_desplegable=document.createElement("label");
	label_desplegable.innerHTML="Selecciona un concierto:";
	label_desplegable.for="opciones_conciertos";
	document.getElementById("div_uno").appendChild(label_desplegable);
	document.getElementById("div_uno").appendChild(desplegable);
	for(i=0;i<opciones_conciertos.length;i++){
		let opcion=document.createElement("option");
		opcion.value=opciones_conciertos[i].valor;
		opcion.innerHTML=opciones_conciertos[i].nombre;
		document.getElementById("opciones_conciertos").appendChild(opcion);
	}
	desplegable.addEventListener("change",function(){
		if(document.getElementsByTagName("p")[0]!=null){
			document.getElementById("div_dos").removeChild(document.getElementsByTagName("p")[0]);
		}
			let indice_seleccionado=desplegable.selectedIndex;
			let precio=opciones_conciertos[indice_seleccionado].precio;
			let nombre=document.getElementsByTagName("option")[indice_seleccionado].innerHTML;
			let parrafo=document.createElement("p");
			parrafo.innerHTML="El concierto de "+nombre+" vale "+precio+" €";
			document.getElementById("div_dos").appendChild(parrafo);
	});
}