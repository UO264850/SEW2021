<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Practica 4 - Ejercicio2 - SEW</title>
    <meta name="author" content="Lucía Megido García - UO264850" />
    <meta name="desciption" content="Ejercicio 2 de la práctica 4 (PHP)" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="CalculadoraCientifica.css">

</head>

<body>
    <?php
    class Calculadora
    {
        protected $pantalla;
        protected $numeroEnMemoria;
        protected $wasMrcLastKey;

        public function __construct()
        {
            $this->numeroEnMemoria = 0;
            $this->wasMrcLastKey = 0;
            $this->pantalla = "";
        }

        public function digitos($num)
        {
            $this->checkScreen();
            $this->pantalla .= $num;
        }

        public function mrc()
        {
            if ($this->wasMrcLastKey == 1) {
                $this->wasMrcLastKey = 0;
                $this->numeroEnMemoria = 0;
            } else {
                $this->wasMrcLastKey = 1;
                $this->pantalla = $this->numeroEnMemoria;
            }
        }

        public function mmenos()
        {
            $this->checkScreen();
            $this->wasMrcLastKey = 0;
            try {
                $this->numeroEnMemoria -= $this->pantalla;
            } catch (Error $e) {
                $this->pantalla = 'Error';
            }
        }

        public function mmas()
        {
            $this->checkScreen();
            $this->wasMrcLastKey = 0;
            try {
                $this->numeroEnMemoria += $this->numeroPantalla;
            } catch (Error $e) {
                $this->pantalla = 'Error';
            }
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
            $this->numeroEnMemoria = "";
            $this->pantalla = "";
        }

        public function igual()
        {
            $this->checkScreen();
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

    class CalculadoraCientifica extends Calculadora{

        public function __construct()
        {
            parent::__construct();
        }

        public function mc(){
            this.numeroEnMemoria = 0;
        }

        public function mr(){
            $this->pantalla = this.numeroEnMemoria;
        }
        public function ms(){
            parent::checkScreen();
            if($this->pantalla == ''){
                $this->memoria = 0;
            }else{
                $this->memoria = $this->pantalla;
            }
        }
        public function pow2(){
            parent::checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.pow(0, 2);
            }
            else {
                $this->pantalla = Math.pow(eval(str), 2);
            }
        }
        public function powy(){
            parent::checkScreen();
            if($this->pantalla==''){
                $this->pantalla = '0^';
            } else {

                $this->pantalla .= '^';
            }
        }
        public function sin(){
            parent::checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.sin(0);
            } else{
                $this->pantalla = Math.sin(eval(str));
            }
        }
        public function cos(){
            parent::checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.cos(0);
            } else{
                $this->pantalla = Math.cos(eval(str));
            }
        }
        public function tan(){
            parent::checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.tan(0);
            } else{
                $this->pantalla = Math.tan(eval(str));
            }
        }
        public function sqroot(){
            this.checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.sqrt(0);
            } else{
                $this->pantalla = Math.sqrt(eval(str));
            }
        }
        public function pow10x(){
            this.checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.pow(10, 0);
            }
            else {
                $this->pantalla = Math.pow(10, eval(str));
            }
        }
        public function logaritmo(){
            this.checkScreen();
            if($this->pantalla==''){
                $this->pantalla = Math.log(0);
            }
            else {
                $this->pantalla = Math.log(eval(str));
            }
        }
        public function exp(){
            this.checkScreen();
            if($this->pantalla==''){
                $this->pantalla = '0e';
            }
            else {
                $this->pantalla .= 'e';
            }
        }
        public function mod(){
            this.checkScreen();
            if($this->pantalla==''){
                $this->pantalla = '0%';
            }
            else {
                $this->pantalla .= '%';
            }
        }
        public function unodivx(){
            this.checkScreen();
            if($this->pantalla == ''){
                $this->pantalla = 'Error';
            }
            else {
                $this->pantalla = eval(1/eval(str));
            }
        }
        public function limpiarRes(){
    
        }
        public function borrar(){
            this.checkScreen();
            if($this->pantalla != ''){
                $this->pantalla .= substr($this->pantalla, 0, -1);
            }
        }
        public function pi(){
            this.checkScreen();
            $this->pantalla = numeroPantalla + Math.PI;
        }
        public function n(){
            this.checkScreen();
            if($this->pantalla==''){
                $this->pantalla = this.rFact(0);
            }
            else {
                $this->pantalla = this.rFact(eval(str));
            }
        }
    
        public function rFact($num){
            if ($num === 0)
            { return 1; }
            else
            { return $num * rFact( num - 1 ); }
        }
        public function masmenos(){
            this.checkScreen();
            if($this->pantalla!=''){
                $this->pantalla = '-' + $this->pantalla;
            }
        }
        public function izdPar(){
            this.checkScreen();
            $this->pantalla .= '(';
        }
        public function drhPar(){
            this.checkScreen();
            $this->pantalla .= ')';
        }

        public function keyPressed()
        {
            if (isset($_POST['m-'])) parent::mmenos();
            if (isset($_POST['m'])) parent::mmas();
            if (isset($_POST['dv'])) parent::division();
            if (isset($_POST['b7'])) parent::digitos(7);
            if (isset($_POST['b8'])) parent::digitos(8);
            if (isset($_POST['b9'])) parent::digitos(9);
            if (isset($_POST['mul'])) parent::multiplicacion();
            if (isset($_POST['b4'])) parent::digitos(4);
            if (isset($_POST['b5'])) parent::digitos(5);
            if (isset($_POST['b6'])) parent::digitos(6);
            if (isset($_POST['res'])) parent::resta();
            if (isset($_POST['b1'])) parent::digitos(1);
            if (isset($_POST['b2'])) parent::digitos(2);
            if (isset($_POST['b3'])) parent::digitos(3);
            if (isset($_POST['sum'])) parent::suma();
            if (isset($_POST['b0'])) parent::digitos(0);
            if (isset($_POST['dec'])) parent::punto();
            if (isset($_POST['C'])) parent::borrar();
            if (isset($_POST['igual'])) parent::igual();

            if (isset($_POST['mc'])) $this->mc();
            if (isset($_POST['mr'])) $this->mr();
            if (isset($_POST['ms'])) $this->ms();
            if (isset($_POST['x2'])) $this->pow2();
            if (isset($_POST['xy'])) $this->powy();
            if (isset($_POST['sin'])) $this->sin();
            if (isset($_POST['cos'])) $this->cos();
            if (isset($_POST['tan'])) $this->tan();
            if (isset($_POST['sqroot'])) $this->sqroot();
            if (isset($_POST['10x'])) $this->pow10x();
            if (isset($_POST['log'])) $this->logaritmo();
            if (isset($_POST['exp'])) $this->exp();
            if (isset($_POST['mod'])) $this->mod();
            if (isset($_POST['1/x'])) $this->unodivx();
            if (isset($_POST['CE'])) $this->limpiarRes();
            if (isset($_POST['borrar'])) $this->borrarUno();
            if (isset($_POST['pi'])) $this->pi();
            if (isset($_POST['n'])) $this->n();
            if (isset($_POST['masmenos'])) $this->masmenos();
            if (isset($_POST['izdPar'])) $this->izdPar();
            if (isset($_POST['drhPar'])) $this->drhPar();
        }
    }

    session_name("calcu");
    session_start();

    if (!isset($_SESSION["calcu"])) {
        $_SESSION["calcu"] = new CalculadoraCientifica();
    } else if (count($_POST) > 0) {
        //pulsamos boton en calculadora
        $_SESSION["calcu"]->keyPressed();
    }

    echo "
    <section id='calculadora'>
        <h1>Calculadora Básica</h1>
        <input type='text' id='pantalla' name='pantalla' title='pantalla' value='" . $_SESSION["calcu"]->updateScreen() . "' disabled>
        <form action='#' method='post' name='botones'>
            <input type='submit' class='button' name='mc' value='mc'>
            <input type='submit' class='button' name='mr' value='mr' >
            <input type='submit' class='button' name='m-' value='m-' />
            <input type='submit' class='button' name='m' value='m+' />
            <input type='submit' class='button' name='ms' value='ms' />
            <input type='submit' class='button' name='x2' value='x^2' >
            <input type='submit' class='button' name='xy' value='x^y'>
            <input type='submit' class='button' name='sin' value='sin'>
            <input type='submit' class='button' name='cos' value='cos'>
            <input type='submit' class='button' name='tan' value='tan'>
            <input type='submit' class='button' name='sqroot' value='√'>
            <input type='submit' class='button' name='10x' value='10^x'>
            <input type='submit' class='button' name='log' value='log'>
            <input type='submit' class='button' name='exp' value='Exp'>
            <input type='submit' class='button' name='mod' value='Mod'>
            <input type='submit' class='button' name='1/x' value='1/x'>

            <input type='submit' class='button' name='CE' value='CE'>
            <input type='submit' class='button' name='C' value='C' />
            <input type='submit' class='button' name='borrar' value='←'>

            <input type='submit' class='button' name='dv' value='/' />

            <input type='submit' class='button' name='pi' value='π'>

            <input type='submit' class='button' name='b7' value='7' />
            <input type='submit' class='button' name='b8' value='8' />
            <input type='submit' class='button' name='b9' value='9' />
            <input type='submit' class='button' name='mul' value='*' />

            <input type='submit' class='button' id='n' value='n!'>

            <input type='submit' class='button' name='b4' value='4' />
            <input type='submit' class='button' name='b5' value='5' />
            <input type='submit' class='button' name='b6' value='6' />
            <input type='submit' class='button' name='res' value='-' />

            <input type='submit' class='button' id='masmenos' value='±'>

            <input type='submit' class='button' name='b1' value='1' />
            <input type='submit' class='button' name='b2' value='2' />
            <input type='submit' class='button' name='b3' value='3' />
            <input type='submit' class='button' name='sum' value='+' />

            <input type='submit' class='button' id='izdPar' value='('>
            <input type='submit' class='button' id='drhPar' value=')'>

            <input type='submit' class='button' name='b0' value='0' />
            <input type='submit' class='button' name='dec' value='.' />
            <input type='submit' class='button' name='igual' value='=' />
        </form>
    </section>
    ";
    ?>

</body>

</html>