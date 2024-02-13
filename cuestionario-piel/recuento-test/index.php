<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$data = json_decode(file_get_contents("php://input"));
$ruta = 'recuento.txt';
// print json_encode(array("tipo" => $data->tipo));

if (isset($data) && isset($data->tipo)) {
  // Leo el archivo y lo convierto en un array con los datos
  $archivo = file_get_contents($ruta);
  $datos = explode("||", $archivo);
  $datos[$data->tipo - 1] += 1;

  // Abro el stream para escribir en el archivo
  @$fd = fopen($ruta, "w");
  if (!$fd) {
    print json_encode(array("error" => "No se ha podido escribir el fichero"));
  }

  // Creo el nuevo string que irá en el archivo
  $nuevo_string = "";
  foreach ($datos as $dato) {
    $nuevo_string .= $dato . "||";
  }
  $nuevo_string = substr($nuevo_string, 0, strlen($nuevo_string) - 2);

  // Escribo el archivo
  fwrite($fd, $nuevo_string);
  // Cierro el stream
  fclose($fd);

  // Devuelvo que se ha insertado con éxito
  print json_encode(array("mensaje" => "Nuevo cuestionario guardado con éxito."));
} else if (isset($_GET)) {
  $archivo = file_get_contents($ruta);
  $datos = explode("||", $archivo);

  // Respondo con los datos recolectados hasta ahora
  foreach ($datos as $indice => $dato) {
    $nombre = "tipo" . ($indice + 1);
    $respuesta[$nombre] = $dato;
  }

  // Devuelvo el json de lo que llevo hasta ahora
  print json_encode($respuesta);
} else {
  // Informo que su petición no es correcta
  print json_encode(array("respuesta" => "No has enviado una petición correcta"));
}
