<!DOCTYPE html>
<html lang="es">

<head>
    <base href="https://uo264850.github.io/SEW2021/Extraordinaria/" />
    <title>Extraordinaria - SEW - UO264850</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial scale=1.0" />
    <meta name="author" content="UO264850" />
    <meta name="desription" content="Sitio web sobre Asturias. Evaluación extraordinaria SEW. PHP" />
    <meta name="keywords" content="Asturias" />
    <link rel="stylesheet" type="text/css" href="estilo/estilo.css" />
    <link rel="stylesheet" type="text/css" href="estilo/layout.css" />
</head>

<body>
    <h1>Base de Datos en PHP</h1>
    <section>
        <h2>Sobre la bbdd creada</h2>
        <p>
            La base de datos consta de cuatro tablas: una con información básica de los diferentes
            concejos, otra con información sobre la gastronomía asturiana, otra con los accidentes
            geográficos más destacados, y una última con las fiestas de la región.
            La estructura de las tablas es la siguiente:
        </p>
        <ul>
            <li>Tabla concejo (nombre, capital, poblacion, plato)</li>
            <li>Tabla gastronomia (plato, descripcion, valoracion, popularidad)</li>
            <li>Tabla geografia (nombre, tipo, descripcion, concejo)</li>
            <li>Tabla fiesta (nombre, dia, mes, descripcion, concejo)</li>
        </ul>
        <?php
            $servername = "localhost";
            $username = "DBUSER2021";
            $password = "DBPSWD2021";
            $database = "asturias";
            
            //conectar a bbdd
            $db = new mysqli($servername, $username, $password);
            $db->select_db($database);

             //Crear la tabla Gastronomia
             $crearTabla = "CREATE TABLE IF NOT EXISTS gastronomia (plato VARCHAR(20),
             descripcion VARCHAR(50) NOT NULL,
             valoracion INT NOT NULL,
             popularidad INT NOT NULL,
             PRIMARY KEY (plato))";
             if ($db->query($crearTabla) === TRUE) {
                 echo "<p>Tabla 'gastronomia' creada correctamente </p>";
             } else {
                 echo "<p>ERROR al crear la tabla gastronomia: " . $db->error . "</p>";
                 exit();
             }

            //Crear la tabla Concejo
            $crearTabla = "CREATE TABLE IF NOT EXISTS concejo (nombre VARCHAR(20),
            capital VARCHAR(20) NOT NULL,
            poblacion VARCHAR(20) NOT NULL,
            plato VARCHAR(20) NOT NULL,
            PRIMARY KEY (nombre),
            FOREIGN KEY (plato))";
            if ($db->query($crearTabla) === TRUE) {
                echo "<p>Tabla 'concejo' creada correctamente </p>";
            } else {
                echo "<p>ERROR al crear la tabla concejo: " . $db->error . "</p>";
                exit();
            }

            //Crear la tabla Geografia
            $crearTabla = "CREATE TABLE IF NOT EXISTS geografia (nombre VARCHAR(20),
            tipo VARCHAR(20) NOT NULL,
            descripcion VARCHAR(50) NOT NULL,
            concejo VARCHAR(20) NOT NULL,
            PRIMARY KEY (nombre),
            FOREIGN KEY (concejo))";
            if ($db->query($crearTabla) === TRUE) {
                echo "<p>Tabla 'geografia' creada correctamente </p>";
            } else {
                echo "<p>ERROR al crear la tabla geografia: " . $db->error . "</p>";
                exit();
            }

            //Crear la tabla Fiesta
            $crearTabla = "CREATE TABLE IF NOT EXISTS fiesta (nombre VARCHAR(20),
            dia INT NOT NULL,
            mes INT NOT NULL,
            descripcion VARCHAR(50) NOT NULL,
            concejo VARCHAR(20) NOT NULL,
            PRIMARY KEY (nombre),
            FOREIGN KEY (concejo))";
            if ($db->query($crearTabla) === TRUE) {
                echo "<p>Tabla 'concejo' creada correctamente </p>";
            } else {
                echo "<p>ERROR al crear la tabla concejo: " . $db->error . "</p>";
                exit();
            }

        //cerrar conexion
        $db->close();
        ?>
    </section>
</body>

</html>