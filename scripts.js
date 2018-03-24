
function actualizarSeleccion() {
	var mostrarTodo,
		grupoSeleccionado;

	mostrarTodo = document.getElementById("cbTodo").checked;

	if(mostrarTodo){
		
		// deshabilito el selector individual
		document.getElementById("selector-grupo").setAttribute("disabled", "true");

		// habilito todas las tablas
		document.getElementById("grupoD").classList.toggle("oculta", false);
		document.getElementById("grupoE").classList.toggle("oculta", false);
		document.getElementById("grupoF").classList.toggle("oculta", false);

	}else {

		// habilito selector individual
		document.getElementById("selector-grupo").removeAttribute("disabled");

		// habilito la que corresponde
		grupoSeleccionado = document.getElementById("selector-grupo").value;
		document.getElementById("grupoD").classList.toggle("oculta", grupoSeleccionado !== "grupoD");
		document.getElementById("grupoE").classList.toggle("oculta", grupoSeleccionado !== "grupoE");
		document.getElementById("grupoF").classList.toggle("oculta", grupoSeleccionado !== "grupoF");

		// otra implementacion (mejor pero mas avanzada)
		// document.querySelectorAll(".tablas table")
		// 	.forEach(tabla => {
		// 		tabla.classList.toggle("oculta", grupoSeleccionado !== tabla.id);
		// 	});
	}
}