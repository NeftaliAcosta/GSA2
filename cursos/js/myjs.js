		function validar_email(valor){
		// creamos nuestra regla con expresiones regulares.
		var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
		// utilizamos test para comprobar si el parametro valor cumple la regla
		if(filter.test(valor))
			return true;
		else
			return false;
	}
	function validar_numero(valor){
		if(!/^([0-9])*$/.test(valor))
			return false;
	}
			
		$('#imgcurso1').click(function (){
			$('#curso1').modal('show');
		});
		$('#imgcurso2').click(function (){
			$('#curso2').modal('show');
		});
		$('#imgcurso3').click(function (){
			$('#curso3').modal('show'); 
		});
	 
	/*Envio de correos*/
	$('#c1').click(function (){
		var curso =  $(this).attr("id");
		var nombrey = $('#nombre'+curso).val();
		var correoy = $('#correo'+curso).val();
		var whatsappy = $('#telefono'+curso).val();
		if (nombrey=="") {
				$('#alerta').html("Por favor escribe tu Nombre Completo.");
				$('#nombre'+curso).focus();
			}
			
			else if (correoy=="") { 
				$('#alerta').html(nombrey + " por favor comp\u00e1rtenos tu E-mail.");
				$('#correo'+curso).focus();

			}
			
			else if (validar_email($("#correo"+curso).val())==false){
				$('#correo'+curso).focus();
				$('#alerta').html("Correo no válido."); 
			}
 
			else{
				
				  
				var urlData ="&nombre=" + nombrey +
							"&correo=" + correoy +
							"&tel=" + whatsappy +
							"&formulario=" + curso;
 
			$.ajax({ 
					type:  'POST',
					url:   'php/mail.php',
					async: true,
					data: urlData,
					dataType: 'text/html',
					success: function(){
	             },
					complete:  function(data) {
						$('#alerta').html(data.responseText);
						('#nombre'+curso).val("");
						('#correo'+curso).val("");
						('#telefono'+curso).val("");
	                }
	        });
			
			}

		return false;
	});
	
	
	
	
	 $('.btnenviar').click(function (){
		var btnfx =  $(this).attr("id");

		
		var nombrex = $('#nombre'+btnfx).val();
		var correox = $('#correo'+btnfx).val();
		var whatsappx = $('#telefono'+btnfx).val();
		

		
			if (nombrex=="") {
				$('#mymsj').html("Por favor escribe tu Nombre Completo.");
				$('#nombre'+btnfx).focus();
				$('#notificacion').modal('show');
			}
			
			else if (correox=="") { 
				$('#mymsj').html(nombrex + " por favor comp\u00e1rtenos tu E-mail.");
				$('#correo'+btnfx).focus();
				$('#notificacion').modal('show');
			}
			
			else if (validar_email($("#correo"+btnfx).val())==false){
				$('#correo').focus();
				$('#mymsj').html("Correo no válido."); 
				$('#notificacion').modal('show');
			}
 
			else{
				
				  
				var urlData ="&nombre=" + nombrex +
							"&correo=" + correox +
							"&tel=" + whatsappx +
							"&formulario=" + btnfx;
 
			$.ajax({ 
					type:  'POST',
					url:   'php/mail.php',
					async: true,
					data: urlData,
					dataType: 'text/html',
					success: function(){
	             },
					complete:  function(data) {
						$('#mymsj').html(data.responseText);
						$('#notificacion').modal('show');
	                }
	        });
			
			}

		return false;
		});
		

		
		$(document).ready(function () {
			 function $_GET(param) {
        url = document.URL;
        url = String(url.match(/\?+.+/));
        url = url.replace("?", "");
        url = url.split("&");
        x = 0;
        while (x < url.length) {
            p = url[x].split("=");
            if (p[0] == param) {
                return decodeURIComponent(p[1]);
            }
            x++;
        }
		}
		if (($_GET("curso") == 'curso1')) {
			$('#curso1').modal('show')
		}
		
		
		
		
		}); 
		
 