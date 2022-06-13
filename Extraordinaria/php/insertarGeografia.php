<?php
class insertarGeografia{
    public $servername = "localhost";
    public $username = "DBUSER2021";
    public $password = "DBPSWD2021";
    public $database = "asturias";
    public $db = new mysqli($servername,$username,$password,$database);
   
    public function editar(){
    if($this->db->connect_error) {
    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");
    } else {echo "<h2>Conexión establecida</h2>";}

    $consultaPre = $this->db->prepare("INSERT INTO geografia (nombre, tipo, descripcion, concejo) VALUES (?,?,?,?)");

    $consultaPre->bind_param('ssss',
    $_POST["nombre"],$_POST["tipo"],$_POST["descripcion"],$_POST["concejo"]);

    $consultaPre->execute();

    echo "<p>Filas añadidas: " . $consultaPre->affected_rows . "</p>";
    $consultaPre->close();
    
    $this->db->close();
}}
?>
