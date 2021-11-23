class Calculadora{
    constructor(){
        this.numeroEnMemoria = 0;
        this.wasMrcLastKey = 0;
    }

    checkScreen(){
        if(document.getElementById('pantalla').value == 'Error'){
            this.limpiar();
        }
    }

    igual(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        try{
            document.getElementById('pantalla').value = eval(str);
        } catch(err){
            document.getElementById('pantalla').value = 'Error';
        }
        
    } 
    mrc(){
        if(this.wasMrcLastKey == 1){
            this.wasMrcLastKey = 0;
            this.numeroEnMemoria = 0;
        }
        else{
            this.wasMrcLastKey = 1;
            document.getElementById('pantalla').value = this.numeroEnMemoria;
        }
    }
    mmenos(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        try{
            this.numeroEnMemoria -= parseInt(numeroPantalla);
        } catch(err){
            document.getElementById('pantalla').value = 'Error';
        }
    }
    mmas(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        try{
            this.numeroEnMemoria += parseInt(numeroPantalla);
        } catch(err){
            document.getElementById('pantalla').value = 'Error';
        }
    }
    cero(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '0';
    }
    uno(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '1';
    }
    dos(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '2';
    }
    tres(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '3';
    }
    cuatro(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '4';
    }
    cinco(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '5';
    }
    seis(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '6';
    }
    siete(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '7';
    }
    ocho(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '8';
    }
    nueve(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '9';
    }
    division(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '/';
    }
    multiplicacion(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '*';
    }
    resta(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '-';
    }
    suma(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '+';
    }
    decimal(){
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '.';
    }
    limpiar(){
        this.wasMrcLastKey = 0;
        document.getElementById('pantalla').value = '';
    }
}

class CalculadoraCientifica extends Calculadora{
    constructor() {
        super();
    }

    mc(){
        this.numeroEnMemoria = 0;
    }
    mr(){
        document.getElementById('pantalla').value = this.numeroEnMemoria;
    }
    ms(){
        this.checkScreen();
        var numeroPantalla = document.getElementById('pantalla').value;
        if(numeroPantalla==''){
            this.numeroEnMemoria = 0;
        }else{
            this.numeroEnMemoria = parseInt(numeroPantalla);
        }
    }
    pow2(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.pow(0, 2);
        }
        else {
            document.getElementById('pantalla').value = Math.pow(eval(str), 2);
        }
    }
    powy(){
        this.checkScreen();
        if(document.getElementById('pantalla').value==''){
            document.getElementById('pantalla').value = '0^';
        } else {
            var numeroPantalla = document.getElementById('pantalla').value;
            document.getElementById('pantalla').value = numeroPantalla + '^';
        }
    }
    sin(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.sin(0);
        } else{
            document.getElementById('pantalla').value = Math.sin(eval(str));
        }
    }
    cos(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.cos(0);
        } else{
            document.getElementById('pantalla').value = Math.cos(eval(str));
        }
    }
    tan(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.tan(0);
        } else{
            document.getElementById('pantalla').value = Math.tan(eval(str));
        }
    }
    sqroot(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.sqrt(0);
        } else{
            document.getElementById('pantalla').value = Math.sqrt(eval(str));
        }
    }
    pow10x(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.pow(10, 0);
        }
        else {
            document.getElementById('pantalla').value = Math.pow(10, eval(str));
        }
    }
    logaritmo(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = Math.log(0);
        }
        else {
            document.getElementById('pantalla').value = Math.log(eval(str));
        }
    }
    exp(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = '0e';
        }
        else {
            document.getElementById('pantalla').value = value + 'e';
        }
    }
    mod(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = '0%';
        }
        else {
            document.getElementById('pantalla').value = str + '%';
        }
    }
    unodivx(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = 'Error';
        }
        else {
            document.getElementById('pantalla').value = eval(1/eval(str));
        }
    }
    limpiarRes(){

    }
    borrar(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str!=''){
            document.getElementById('pantalla').value = str.slice(0, -1)
        }
    }
    pi(){
        this.checkScreen();
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + Math.PI;
    }
    n(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str==''){
            document.getElementById('pantalla').value = this.rFact(0);
        }
        else {
            document.getElementById('pantalla').value = this.rFact(eval(str));
        }
    }

    rFact(num){
        if (num === 0)
        { return 1; }
        else
        { return num * rFact( num - 1 ); }
    }
    masmenos(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        if(str!=''){
            document.getElementById('pantalla').value = '-' + str;
        }
    }
    izdPar(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = value + '(';
    }
    drhPar(){
        this.checkScreen();
        var str = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = value + ')';
    }
}

var calc = new CalculadoraCientifica(); 