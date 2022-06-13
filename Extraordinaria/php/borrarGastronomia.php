<?php
class BorrarGastronomia{
    public $servername = "localhost";
    public $username = "DBUSER2021";
    public $password = "DBPSWD2021";
    public $database = "asturias";
    public $db = new mysqli($servername,$username,$password,$database);
   
    public function borrar(){
    if($this->db->connect_error) {
        exit ("<h2>ERROR de conexión:".$this->db->connect_error."</h2>");
    } else {echo "<h2>Conexión establecida</h2>";}

    $consultaPre = $this->db->prepare("SELECT * FROM gastronomia WHERE plato = ?");

    $consultaPre->bind_param('s', $_POST["plato"]);
    $consultaPre->execute();
    $resultado = $consultaPre->get_result();

    if ($resultado->fetch_assoc()!=NULL) {
        $resultado->data_seek(0);
        $consultaPre = $this->db->prepare("DELETE FROM gastronomia WHERE plato = ?");
        $consultaPre->bind_param('s', $_POST["plato"]);
        $consultaPre->execute();
        $consultaPre->close();
        echo "<p>Se han borrado lo datos</p>";
    }
    else {
        echo "<p>El elemento a borrar no existe en la Base de Datos.</p>";
    }
    
    //cerrar la conexión
    $this->db->close();
    }
}
?>
