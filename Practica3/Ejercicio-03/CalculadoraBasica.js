class Calculadora {
    constructor() {
        this.numeroEnMemoria = new Number('0');
        this.wasMrcLastKey = 0;
        this.numero1 = null;
        this.numero2 = null;
        this.operador = null;
        this.segundoNum = false;
    }

    checkScreen() {
        if (document.getElementById('pantalla').value == 'Error') {
            this.borrar();
        }
    }

    igual() {
        this.checkScreen();

        if (this.numero2 == null){
            this.numero2 = new Number(document.getElementById('pantalla').value.toString());
        }

        try {
            var resultado = eval(this.numero1 + this.operador + this.numero2);
            this.numero1 = new Number(resultado);
            document.getElementById('pantalla').value = this.numero1.toString();
            this.operador = null;
            this.numero2 = null;
            this.segundoNum = false;
        } catch (err) {
            document.getElementById('pantalla').value = 'Error';
        }

    }

    mrc() {
        if (this.wasMrcLastKey == 1) {
            this.wasMrcLastKey = 0;
            this.numeroEnMemoria = new Number('0');
        }
        else {
            this.wasMrcLastKey = 1;
            document.getElementById('pantalla').value = this.numeroEnMemoria;
        }
    }

    mmenos() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = new Number(document.getElementById('pantalla').value.toString());
        try {
            this.numeroEnMemoria -= new Number(numeroPantalla);
        } catch (err) {
            document.getElementById('pantalla').value = 'Error';
        }
    }
    mmas() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = new Number(document.getElementById('pantalla').value.toString());
        try {
            this.numeroEnMemoria += new Number(numeroPantalla);
        } catch (err) {
            document.getElementById('pantalla').value = 'Error';
        }
    }

    digitos(num) {
        if (this.segundoNum == true) {
            document.getElementById('pantalla').value = '';
            this.segundoNum = false;
        }
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla.toString() + num.toString();
    }

    division() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        if (this.numero1 == null) {
            this.numero1 = new Number(numeroPantalla.toString());
            this.operador = '/';
            document.getElementById('pantalla').value = numeroPantalla + ' / ';
            this.segundoNum = true;
        } else {
            this.numero2 = new Number(numeroPantalla.toString());
            this.igual();
            this.operador = '/';
            document.getElementById('pantalla').value = document.getElementById('pantalla').value + ' / ';
            this.segundoNum = true;
        }

    }

    multiplicacion() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        if (this.numero1 == null) {
            this.numero1 = new Number(numeroPantalla.toString());
            this.operador = '*';
            document.getElementById('pantalla').value = numeroPantalla + ' * ';
            this.segundoNum = true;
        } else {
            this.numero2 = new Number(numeroPantalla.toString());
            this.igual();
            this.operador = '*';
            document.getElementById('pantalla').value = document.getElementById('pantalla').value + ' * ';
            this.segundoNum = true;
        }
    }

    resta() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        if (this.numero1 == null) {
            this.numero1 = new Number(numeroPantalla.toString());
            this.operador = '-';
            document.getElementById('pantalla').value = numeroPantalla + '-';
            this.segundoNum = true;
        } else {
            this.numero2 = new Number(numeroPantalla.toString());
            this.igual();
            this.operador = '-';
            document.getElementById('pantalla').value = document.getElementById('pantalla').value + ' - ';
            this.segundoNum = true;
        }
    }

    suma() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        if (this.numero1 == null) {
            this.numero1 = new Number(numeroPantalla.toString());
            this.operador = '+';
            document.getElementById('pantalla').value = numeroPantalla + ' + ';
            this.segundoNum = true;
        } else {
            this.numero2 = new Number(numeroPantalla.toString());
            this.igual();
            this.operador = '+';
            document.getElementById('pantalla').value = document.getElementById('pantalla').value + ' + ';
            this.segundoNum = true;
        }
    }

    punto() {
        this.checkScreen();
        this.wasMrcLastKey = 0;
        var numeroPantalla = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = numeroPantalla + '.';
    }

    borrar() {
        this.wasMrcLastKey = 0;
        document.getElementById('pantalla').value = '';
        this.numero1 = null;
        this.numero2 = null;
        this.operador = null;
        this.segundoNum = false;
    }
}
var calc = new Calculadora();