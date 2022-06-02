'use strict';

// [ basic maps ]
var basic;
basic = new GMaps({
    el: '#basic-map',
    lat: 21.217319,
    lng: 72.866472,
    scrollwheel: false
});
// [ Gmaps ]
var map;
map = new GMaps({
    el: '#markers-map',
    lat: 21.2334329,
    lng: 72.866472,
    scrollwheel: false
});
// [ Add-marker map ]
map.addMarker({
    lat: 21.2334329,
    lng: 72.866472,
    title: 'Marker with InfoWindow',
    infoWindow: {
        content: '<p><Phoenicoded></Phoenicoded> <br/> Buy Now at <a href="">Themeforest</a></p>'
    }
});