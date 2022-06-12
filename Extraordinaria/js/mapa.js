"use strict";
class MapaDinamico {
    
    constructor(){
        navigator.geolocation.getCurrentPosition(this.getPosition.bind(this));
        
    }

    getPosition(posicion){
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
        var mymap = L.map('mapid').setView([43.3603, -5.84476], 9);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoidW8yNjQ4NTAiLCJhIjoiY2tpOHA0YzFnMDd1NzJybW44cnlwYzY3byJ9.cZyMLJPxJr5mc9PczSz5IQ'
        }).addTo(mymap);
        var marker1 = L.marker([this.latitud,this.longitud]).addTo(mymap);
    }
}
var miMapa = new MapaDinamico();
miMapa.getMapa();