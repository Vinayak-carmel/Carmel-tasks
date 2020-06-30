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
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: hubli,

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
    // First Row
    var rectangle = new google.maps.Rectangle({
        strokeColor: '#000000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#000',
        fillOpacity: 0.7,
        map: map,

        bounds: {
            north: 15.3650,
            south: 15.3648,

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

}



google.maps.event.addDomListener(window, 'load', initMap);