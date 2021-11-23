class ClaculadoraFinanciera{
    constructor(){

    }

    calcular(){
        var C0 = parseFloat(document.getElementById('capInvertido').value);
        var i = parseFloat(document.getElementById('interes').value)/100;
        var n = parseFloat(document.getElementById('tiempo').value);
        var r = parseFloat(document.getElementById('retencion').value)/100;

        var Cn = this.calcularCapReunido(C0, i, n);
        var I = Math.round((Cn - C0)*100)/100; 
        var R = Math.round((I*r)*100)/100;
        var Cf = Cn - R;

        document.getElementById('capReunido').value = Cn;
        document.getElementById('interesFinal').value = I;
        document.getElementById('retencionFinal').value = R;
        document.getElementById('CapObtenido').value = Cf;
    }

    calcularCapReunido(C0, i , n){
        var final = C0/Math.pow((1+i), -n);
        final = Math.round(final * 100) / 100
        return final;
    }

    limpiar(){
        document.getElementById('capInvertido').value = '';
        document.getElementById('interes').value = '';
        document.getElementById('tiempo').value = '';
        document.getElementById('retencion').value = '';
        document.getElementById('capReunido').value = '';
        document.getElementById('interesFinal').value = '';
        document.getElementById('retencionFinal').value = '';
        document.getElementById('CapObtenido').value = '';
    }
}

var calc = new ClaculadoraFinanciera();