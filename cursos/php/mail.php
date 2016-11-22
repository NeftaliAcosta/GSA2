<?php



$nombre = utf8_decode($_POST['nombre']);
$email= utf8_decode($_POST['correo']);
$mytel = utf8_decode($_POST['tel']);
$formulario = $_POST['formulario'];
$reply = $email;
$bcc = 'nacosta@gubynetwork.com';


//Mensaje de contacto
$cabeceras = 'From:'.$email . "\r\n" .
			 'Reply-To: '.$reply. "\r\n" .
			 'Bcc: '.$bcc. "\r\n" .
			 'X-Mailer: PHP/' . phpversion();

$asunto = "+INFO GSA CONSULTING";
$email_to = "webmaster@gsaconsulting.com.mx";
$contenido = "$nombre se ha registrado a través de la campaña de GSA CONSULTING"
. "\n"
. "Nombre: $nombre \n"
. "Email: $email \n"
. "Telefono: $mytel \n"
. "Formulario Utilizado: $formulario \n"
 
."\n"
."\n"
;
 



if ( (trim($email)=="")){

	die(":From:");

}
else {
  mail($email_to, $asunto ,$contenido ,$cabeceras) ;
  echo "<b>Por favor revise su correo electrónico, le haremos llegar la información de nustros cursos a la brevedad</b>";
}

/* mail($email_to, $asunto ,$contenido ,$cabeceras) ;*/

 

?>
