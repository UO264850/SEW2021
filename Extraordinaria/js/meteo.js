"use strict";
class Meteo {
    constructor(){
        this.error = "Hubo un error recuperando la info meteorológica";
    }

    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: "https://api.weatherbit.io/v2.0/current?lat=43.3603&lon=-5.84476&key=44c7cd55d42447389c30013f6c70a6f6",
            method: 'GET',
            success: function(data){    
                var str = (JSON.stringify(data).split(','))[34].replace('temp', 'Oviedo');
                $("#oviedo").text(str);
            },
            error:function(){
                console.log(this.error);
            }
        });

        $.ajax({
            dataType: "json",
            url: "https://api.weatherbit.io/v2.0/current?lat=43.5453&lon=-5.66193&key=44c7cd55d42447389c30013f6c70a6f6",
            method: 'GET',
            success: function(data){
                var str = (JSON.stringify(data).split(','))[34].replace('temp', 'Gijón');
                $("#gijon").text(str);
            },
            error:function(){
                console.log(this.error);
            }
        });

        $.ajax({
            dataType: "json",
            url: "https://api.weatherbit.io/v2.0/current?lat=43.5558&lon=-5.92762&key=44c7cd55d42447389c30013f6c70a6f6",
            method: 'GET',
            success: function(data){
                var str = (JSON.stringify(data).split(','))[34].replace('temp', 'Avilés');
                $("#aviles").text(str);
            },
            error:function(){
                console.log(this.error);
            }
        });
    }
}

var meteo = new Meteo();
