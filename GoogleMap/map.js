// function initMap() {
//     var map;

//     var rectangle = [{
//         "lat": 14.9995,
//         "lng": 74.9995
//     }, {
//         "lat": 15.0005,
//         "lng": 74.9995
//     }, {
//         "lat": 15.00055,
//         "lng": 75.00065
//     }, {
//         "lat": 14.9995,
//         "lng": 75.0005
//     }, {
//         "lat": 15.000536,
//         "lng": 75.00123
//     }];

//     var mapOptions, map, marker, element = document.getElementById('map');
//     var hubli = new google.maps.LatLng(rectangle[0].lat, rectangle[0].lng)
//     mapOptions = {
//         zoom: 15,
//         center: hubli,
//         disableDefaultUI: false,
//         scrollWheel: true,
//         draggable: true,
//     };


//     map = new google.maps.Map(element, mapOptions);

//     for (var i = 0, length = rectangle.length; i < length; i++) {
//         var data = rectangle[i],
//             latLng = new google.maps.LatLng(data.lat, data.lng);

//         // Creating a marker and putting it on the map
//         marker = new google.maps.Marker({
//             position: latLng,
//             map: map,
//         });
//     }


// }

// var hubli = { lat: 15.3647, lng: 75.1240 };
// var hubli1 = { lat: 15.3644, lng: 75.1236 };
// var hubli2 = { lat: 15.3650, lng: 75.1245 };


function initMap() {
    var rectangle = [{
        "lat": 14.9995,
        "lng": 74.9995
    }, {
        "lat": 15.0005,
        "lng": 74.9995
    }, {
        "lat": 15.00055,
        "lng": 75.00065
    }, {
        "lat": 14.9995,
        "lng": 75.0005
    }, {
        "lat": 15.3534,
        "lng": 75.1325
    }];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: new google.maps.LatLng(rectangle[4].lat, rectangle[1].lng),
        // mapTypeId: 'terrain'
    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF00000',
        fillOpacity: 0.4,
        map: map,
        bounds: {
            north: 15.3647,
            east: 75.1540,

            south: 15.3447,
            west: 75.1040
        }
    });
}