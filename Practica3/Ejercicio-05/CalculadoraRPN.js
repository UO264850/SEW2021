class CalculadoraRPN{
    constructor(){
        this.pila = new Array();
    }
    push(){
        var valor = document.getElementById('pantalla').value;
        this.pila.push(valor);
        this.updateExpresion();
        document.getElementById('pantalla').value = '';
    }
    pop(){
        return this.pila.pop();
    }
    write(valor){
        var str = document.getElementById('pantalla').value;
        document.getElementById('pantalla').value = str + valor;
    }
    sin(){
        if(this.pila.length >= 1){
            var number = this.pop();
            this.pila.push(Math.sin(number));
            this.updateExpresion();
        }
    }
    cos(){
        if(this.pila.length >= 1){
            var number = this.pop();
            this.pila.push(Math.cos(number));
            this.updateExpresion();
        }
    }
    tan(){
        if(this.pila.length >= 1){
            var number = this.pop();
            this.pila.push(Math.tan(number));
            this.updateExpresion();
        }
    }
    logaritmo(){
        if(this.pila.length >= 1){
            var number = this.pop();
            this.pila.push(Math.log(number));
            this.updateExpresion();
        }
    }
    sqroot(){
        if(this.pila.length >= 1){
            var number = this.pop();
            this.pila.push(Math.sqrt(number));
            this.updateExpresion();
        }
    }
    unodivx(){
        if(this.pila.length >= 1){
            var number = this.pop();
            this.pila.push(1/number);
            this.updateExpresion();
        }
    }
    pi(){
        this.write(Math.PI);
    }
    limpiarRes(){
        document.getElementById('pantalla').value = '';
    }
    limpiar(){
        this.limpiarRes();
        this.pila = new Array();
        this.updateExpresion();
    }
    borrar(){
        var val = document.getElementById('pantalla').value;
        if(val.length > 0){
            document.getElementById('pantalla').value = val.slice(0, -1);
        }
    }
    division(){
        if(this.pila.length >= 2){
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1/number2);
            this.updateExpresion();
        }
    }
    multiplicacion(){
        if(this.pila.length >= 2){
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1*number2);
            this.updateExpresion();
        }
    }
    resta(){
        if(this.pila.length >= 2){
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1-number2);
            this.updateExpresion();
        }
    }
    suma(){
        if(this.pila.length >= 2){
            var number2 = parseFloat(this.pop());
            var number1 = parseFloat(this.pop());
            this.pila.push(number1+number2);
            this.updateExpresion();
        }
    }

    updateExpresion(){
        var expresion = '';
        var number;
        for(number = 0; number < this.pila.length; number++){
            expresion += this.pila[number] + ' ';
        }
        document.getElementById('expresion').value = expresion;
    }
}
var calc = new CalculadoraRPN();