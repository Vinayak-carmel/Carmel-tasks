function initMap() {
    var topLeft = {
        lat: 15.3650,
        lng: 75.1235
    };

    var center = {
        lat: 15.3647,
        lng: 75.1240
    };
    var bottomRight = {
        lat: 15.3644,
        lng: 75.1245
    }
    var notiDot = {
        lat: 15.36497,
        lng: 75.12367
    }
    var squirCenter = {
        lat: 15.3649,
        lng: 75.1236
    }

    var containerTopLeft = {
        lat: 15.3651,
        lng: 75.1234
    }
    var containerBottonRight = {
        lat: 15.3643,
        lng: 75.1246
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: center,

    });

    var mainRectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF00000',
        fillOpacity: 0.1,
        map: map,
        bounds: {
            north: 15.3650,
            south: 15.3644,

            west: 75.1235,
            east: 75.1245
        }

    });

    var container = new google.maps.Rectangle({
        strokeColor: '#CCC',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF00000',
        fillOpacity: 0.1,
        map: map,
        bounds: {
            north: 15.3651,
            south: 15.3643,

            west: 75.1234,
            east: 75.1246
        }

    });


    // First Row
    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFF',
        fillOpacity: 0.7,
        map: map,

        bounds: {
            north: 15.3648,
            south: 15.3650,

            west: 75.1235,
            east: 75.1237
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFF',
        fillOpacity: 1,
        map: map,
        bounds: {
            north: 15.3648,
            south: 15.3650,

            west: 75.1237,
            east: 75.1239
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,
        bounds: {
            north: 15.3648,
            south: 15.3650,

            west: 75.1239,
            east: 75.1241
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFF',
        fillOpacity: 01,
        map: map,
        bounds: {
            north: 15.3648,
            south: 15.3650,

            west: 75.1241,
            east: 75.1243
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,
        bounds: {
            north: 15.3648,
            south: 15.3650,

            west: 75.1243,
            east: 75.1245
        }

    });

    // second Row

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFF',
        fillOpacity: 01,
        map: map,

        bounds: {
            north: 15.3648,
            south: 15.3646,

            west: 75.1235,
            east: 75.1237
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        lineWidth: 3,
        map: map,
        bounds: {
            north: 15.3648,
            south: 15.3646,

            west: 75.1237,
            east: 75.1239
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFF',
        fillOpacity: 01,
        lineWidth: 3,
        map: map,

        bounds: {
            north: 15.3648,
            south: 15.3646,

            west: 75.1239,
            east: 75.1241
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,

        bounds: {
            north: 15.3648,
            south: 15.3646,

            west: 75.1241,
            east: 75.1243
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FFF',
        fillOpacity: 01,
        map: map,

        bounds: {
            north: 15.3648,
            south: 15.3646,

            west: 75.1243,
            east: 75.1245
        }

    });
    //Therd Row

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,

        bounds: {
            north: 15.3646,
            south: 15.3644,

            west: 75.1235,
            east: 75.1237
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#fff',
        fillOpacity: 01,
        map: map,

        bounds: {
            north: 15.3646,
            south: 15.3644,

            west: 75.1237,
            east: 75.1239
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,

        bounds: {
            north: 15.3646,
            south: 15.3644,

            west: 75.1239,
            east: 75.1241
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#fff',
        fillOpacity: 01,
        map: map,

        bounds: {
            north: 15.3646,
            south: 15.3644,

            west: 75.1241,
            east: 75.1243
        }

    });

    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,

        bounds: {
            north: 15.3646,
            south: 15.3644,

            west: 75.1243,
            east: 75.1245
        }

    });

    var play = {
        url: 'play.png',
        size: new google.maps.Size(50, 25),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(10, 10),
        scaledSize: new google.maps.Size(20, 20)
    };

    var noti = {
        url: 'reddot.png',
        size: new google.maps.Size(10, 10),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(5, 5),
        scaledSize: new google.maps.Size(10, 10),
    };
    var notification = new google.maps.Marker({
        position: notiDot,
        map: map,
        icon: noti,
    });

    var play = new google.maps.Marker({
        position: squirCenter,
        map: map,
        icon: play,
        title: 'click to zoom',
        // label: '5 Km'
    });

    play.addListener("click", function() {
        map.setZoom(30);
        map.setCenter(play.getPosition());
    });

    google.maps.event.addListener(map, 'zoom_changed', function() {
        var zoom = map.getZoom();
        if (zoom >= 19) {
            notification.setVisible(true);
            play.setVisible(true);
        } else {
            notification.setVisible(false);
            play.setVisible(false);
        }
    })

}



google.maps.event.addDomListener(window, 'load', initMap);