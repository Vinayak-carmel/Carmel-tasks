function initMap() {
    var hubli2 = {
        lat: 15.3650,
        lng: 75.1245
    };

    var hubli = {
        lat: 15.3647,
        lng: 75.1240
    };
    var hubli1 = {
        lat: 15.3644,
        lng: 75.1235
    };


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 20,
        center: {
            lat: 15.3647,
            lng: 75.1240
        },

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF00000',
        fillOpacity: 0.5,
        map: map,
        bounds: {
            north: 15.3650,
            south: 15.3644,

            west: 75.1235,
            east: 75.1245
        }

    });
    var marker = new google.maps.Marker({
        position: hubli,
        map: map
    });
    var marker = new google.maps.Marker({
        position: hubli1,
        map: map
    });
    var marker = new google.maps.Marker({
        position: hubli2,
        map: map
    });

    var gridLine = [
        { lat: 15.3649, lng: 75.1245 },
        { lat: 15.3649, lng: 75.1235 },
        { lat: 15.3650, lng: 75.1236 },
        { lat: 15.3644, lng: 75.1236 }
    ];

    var flightPath = new google.maps.Polyline({
        path: gridLine,
        geodesic: true,
        strokeColor: 'red',
        fillColor: 'red',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });

    flightPath.setMap(map);

}



google.maps.event.addDomListener(window, 'load', initMap);