function mudaTipoPessoa() {
	
	$("#cpf").parent().hide();
	$("#cnpj").parent().hide();
	
	if ($("#pf").is(":checked")) {
		$("#cpf").parent().show();
	}
	
	if ($("#pj").is(":checked")) {
		$("#cnpj").parent().show();
	}
	
}

function validar() {
	
	var valido = true;
	
	$("input,select").removeClass("is-invalid");
	
	if ($("#nome").val() == "") {
		$("#nome").addClass("is-invalid");
		valido = false;
	}
	
	if (!($("#pf").is(":checked")) && !($("#pj").is(":checked"))) {
		$("#pf").addClass("is-invalid");
		$("#pj").addClass("is-invalid");
		valido = false;
	}
	
	if ($("#pf").is(":checked")) {
		
		if ($("#cpf").cleanVal().length != 11) {
			$("#cpf").addClass("is-invalid");
			valido = false;
		}
		
	}
	
	if ($("#pj").is(":checked")) {
		
		if ($("#cnpj").cleanVal().length != 14) {
			$("#cnpj").addClass("is-invalid");
			valido = false;
		}
		
	}
	
	if ($("#cep").cleanVal().length != 8) {
		$("#cep").addClass("is-invalid");
		valido = false;
	}
	
	if ($("#estado").val() == "") {
		$("#estado").addClass("is-invalid");
		valido = false;
	}
	
	return valido;
}

$(document).ready(function() {
	
	mudaTipoPessoa();
	
	$("#cpf").mask("000.000.000-00", { placeholder: "___.___.___-__" });
	$("#cnpj").mask("00.000.000/0000-00", { placeholder: "__.___.___/____-__" });
	$("#cep").mask("00000-000", { placeholder: "_____-___" });
	
});


