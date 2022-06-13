"use strict";
class MapaDinamico {
    
    constructor(){
        this.mymap = L.map('mapid').setView([43.3603, -5.84476], 9);
        this.longitud = 44.0;
        this.latitud = -5.0;
    }

    verErrores(error){
        switch(error.code) {
        case error.PERMISSION_DENIED:
            this.mensaje = "El usuario no permite la petición de geolocalización"
            break;
        case error.POSITION_UNAVAILABLE:
            this.mensaje = "Información de geolocalización no disponible"
            break;
        case error.TIMEOUT:
            this.mensaje = "La petición de geolocalización ha caducado"
            break;
        case error.UNKNOWN_ERROR:
            this.mensaje = "Se ha producido un error desconocido"
            break;
        }
    }

    getPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
    }

    getLongitud(){
        return this.longitud;
    }
    getLatitud(){
        return this.latitud;
    }

    getMapa(){
        
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoidW8yNjQ4NTAiLCJhIjoiY2tpOHA0YzFnMDd1NzJybW44cnlwYzY3byJ9.cZyMLJPxJr5mc9PczSz5IQ'
        }).addTo(this.mymap);
        
    }

    addMarker(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPosicion);
          } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        var marker1 = L.marker([this.latitud,this.longitud]).addTo(this.mymap);
    }
}
var miMapa = new MapaDinamico();
miMapa.getMapa();