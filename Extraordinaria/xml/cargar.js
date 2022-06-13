"use strict";
class XMLControl {

    cargar(){
        $.ajax({
            dataType: "xml",
            url: "xml/concejos.xml",
            method: 'GET',
            success: function(datos){
                    //Extracción de los datos contenidos en el XML
                    var totalNodos          = $('*',datos).length; 
                    var concejo             = $('concejo',datos).attr("nombre");
                    var habitantes          = $('habitantes',datos).text();
                    var capital             = $('capital',datos).attr("nombre");
                    var fiesta              = $('fiesta',datos).attr("nombre");
                    var descripcion         = $('descripcion',datos).text();
                    var multimedia          = $('multimedia',datos).text();
                    var poblacion           = $('poblacion',datos).attr("nombre");
                    var destacado           = $('destacado',datos).text();
                    var enlace              = $('enlace',datos).text();


                    var stringDatos =  "<p>El número de elementos incluidos en el XML es " + totalNodos + ".</p> ";

                    for (let step = 0; step < totalNodos; step++) {
                        stringDatos += "<p>Este concejo se llama " + concejo + ", y su número de habitantes es de " + habitantes + ". ";
                        stringDatos += "La capital de este concejo se llama " + capital + ", y la fiesta es " + fiesta + ". " + descripcion + ". ";
                        stringDatos += "Una de las poblaciones del concejo es " + poblacion + " siendo destacado " + destacado + ". ";
                        stringDatos += "</p>";
                        stringDatos += "<img src=\"" + multimedia +"\" title=\"multimedia" + step + "\" />";
                        stringDatos += "<a href=\"" + enlace +"\">" + enlace + "</a>";
                    }
                    
                    $("#concejosCargados").text(stringDatos);                  
                },
            error:function(){
                $("#concejosCargados").text("No se pudo cargar el archivo XML"); 
            }
        });
    }

}
var xmlControl = new XMLControl();