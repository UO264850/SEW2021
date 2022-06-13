<?php
class insertarGastronomia{
    public $servername = "localhost";
    public $username = "DBUSER2021";
    public $password = "DBPSWD2021";
    public $database = "asturias";
    public $db = new mysqli($servername,$username,$password,$database);
   
    public function editar(){
    if($this->db->connect_error) {
    exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");
    } else {echo "<h2>Conexión establecida</h2>";}

    $consultaPre = $this->db->prepare("INSERT INTO gastronomia (plato, descripcion, valoracion, popularidad) VALUES (?,?,?,?)");

    $consultaPre->bind_param('ssii',
    $_POST["plato"],$_POST["descripcion"],$_POST["valoracion"],$_POST["popularidad"]);

    $consultaPre->execute();

    echo "<p>Filas añadidas: " . $consultaPre->affected_rows . "</p>";
    $consultaPre->close();
    
    $this->db->close();

}}
?>
