<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Practica 4 - Ejercicio1 - SEW</title>
    <meta name="author" content="Lucía Megido García - UO264850" />
    <meta name="desciption" content="Ejercicio1" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="CalculadoraBasica.css">

</head>

<body>
    <?php
    class Calculadora
    {
        protected $mensaje;
        protected $pantalla;

        public function __construct()
        {
            $this->mensaje = "";
            $this->pantalla = "";
        }

        public function getMensaje()
        {
            //devuelve el mensaje
            return $this->mensaje;
        }

        public function digitos($num)
        {
            $this->checkScreen();
            echo ("<script>console.log('pulsado: " . $num . "');</script>");
            $this->pantalla .= $num;
        }

        public function mrc()
        {
            $this->checkScreen();
        }

        public function mmenos()
        {
            $this->checkScreen();
            return $this->mensaje;
        }

        public function mmas()
        {
            $this->checkScreen();
            return $this->mensaje;
        }

        public function division()
        {
            $this->checkScreen();
            $this->pantalla .= '/';
        }

        public function multiplicacion()
        {
            $this->checkScreen();
            $this->pantalla .= '*';
        }

        public function resta()
        {
            $this->checkScreen();
            $this->pantalla .= '-';
        }

        public function suma()
        {
            $this->checkScreen();
            $this->pantalla .= '+';
        }

        public function punto()
        {
            $this->checkScreen();
            $this->pantalla .= '.';
        }
        public function borrar()
        {
            $this->checkScreen();
            $this->pantalla = "";
        }

        public function igual()
        {
            try {
                $this->pantalla = eval("return $this->pantalla;");
            } catch (Error $e) {
                $this->pantalla = "Error";
            }
        }

        public function checkScreen()
        {
            if ($this->pantalla == "Error") {
                $this->pantalla = "";
            }
        }

        public function updateScreen()
        {
            return $this->pantalla;
        }

        public function keyPressed()
        {
            if (isset($_POST['mrc'])) $this->mrc();
            if (isset($_POST['m-'])) $this->mmenos();
            if (isset($_POST['m'])) $this->mmas();
            if (isset($_POST['dv'])) $this->division();
            if (isset($_POST['b7'])) $this->digitos(7);
            if (isset($_POST['b8'])) $this->digitos(8);
            if (isset($_POST['b9'])) $this->digitos(9);
            if (isset($_POST['mul'])) $this->multiplicacion();
            if (isset($_POST['b4'])) $this->digitos(4);
            if (isset($_POST['b5'])) $this->digitos(5);
            if (isset($_POST['b6'])) $this->digitos(6);
            if (isset($_POST['res'])) $this->resta();
            if (isset($_POST['b1'])) $this->digitos(1);
            if (isset($_POST['b2'])) $this->digitos(2);
            if (isset($_POST['b3'])) $this->digitos(3);
            if (isset($_POST['sum'])) $this->suma();
            if (isset($_POST['b0'])) $this->digitos(0);
            if (isset($_POST['dec'])) $this->punto();
            if (isset($_POST['C'])) $this->borrar();
            if (isset($_POST['igual'])) $this->igual();
        }
    }

    session_name("calculadora");
    session_start();

    if (!isset($_SESSION["calculadora"])) {
        $_SESSION["calculadora"] = new Calculadora();
    } else if (count($_POST) > 0) {
        //pulsamos boton en calculadora
        $_SESSION["calculadora"]->keyPressed();
    }
    
    echo "
    <section id='calculadora'>
        <h1>Calculadora Básica</h1>
        <input type='text' id='pantalla' name='pantalla' value='" . $_SESSION["calculadora"]->updateScreen() . "' disabled>
        <form action='#' method='post' name='botones'>
            <input type='submit' class='button' name='mrc' value='mrc' />
            <input type='submit' class='button' name='m-' value='m-' />
            <input type='submit' class='button' name='m' value='m+' />
            <input type='submit' class='button' name='dv' value='/' />
            <input type='submit' class='button' name='b7' value='7' />
            <input type='submit' class='button' name='b8' value='8' />
            <input type='submit' class='button' name='b9' value='9' />
            <input type='submit' class='button' name='mul' value='*' />
            <input type='submit' class='button' name='b4' value='4' />
            <input type='submit' class='button' name='b5' value='5' />
            <input type='submit' class='button' name='b6' value='6' />
            <input type='submit' class='button' name='res' value='-' />
            <input type='submit' class='button' name='b1' value='1' />
            <input type='submit' class='button' name='b2' value='2' />
            <input type='submit' class='button' name='b3' value='3' />
            <input type='submit' class='button' name='sum' value='+' />
            <input type='submit' class='button' name='b0' value='0' />
            <input type='submit' class='button' name='dec' value='.' />
            <input type='submit' class='button' name='C' value='C' />
            <input type='submit' class='button' name='igual' value='=' />
        </form>
    </section>
    ";
    ?>

</body>

</html>