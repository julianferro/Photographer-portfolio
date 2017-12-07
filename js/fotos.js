function ocultarfoto(){
	$('.contenedor2').removeClass('ver');
	$('.contenedor2').addClass('ocultar');
}

function mostrarfoto(imagen){
	$('.contenedor2').removeClass('ocultar');
	$('.contenedor2').addClass('ver');
	$('#fotomuestra').attr('src',imagen);
}