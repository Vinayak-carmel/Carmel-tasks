//required inputs to map to generate grid system.
var main_center_point;
var width = 10; // width of main rectangle in KM
var height = 5; // height of main rectangle in KM
var sub_cell_width = 2.5; // width of subcell in KM.
var sub_cell_height = 2.5 // height of subcell in KM.
var sub_cell_center_pointLat = (sub_cell_height) / 111.32;
var sub_cell_center_pointLng = (sub_cell_width) / 111.32;

var map;
var marker;
var north;
var south;
var east;
var west;
var subcellNorth;
var subcellSouth;
var subcellEast;
var subcellWest;

var EARTH_RADIUSE = 6378; //radius of the earth in kilometer
var PI = Math.PI;

function initMap(horizontal) {
    var ratation = horizontal
    main_center_point = {
        lat: 15.3647,
        lng: 75.1240
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 19,
        center: main_center_point,
    });
    // marker = new google.maps.Marker({
    //     position: main_center_point,
    //     map: map
    // });
    rotate(ratation);

}

function rotate(ratation) {
    var rotate = ratation;
    var rotatedHeight;
    var rotatedWidth;
    if (rotate === "horizontal") {
        rotatedHeight = height;
        rotatedWidth = width;
        boundingBox(rotatedHeight, rotatedWidth)
    } else if (rotate === "vertical") {
        rotatedHeight = width;
        rotatedWidth = height;
        boundingBox(rotatedHeight, rotatedWidth)
    } else {
        rotatedHeight = height;
        rotatedWidth = width;
        boundingBox(rotatedHeight, rotatedWidth)
    }

}
// 180/PI radians to degree.
// center_point.lat * PI / 180 degree to radian.
// number of km per degree = ~111km (111.32 in google maps, but range varies 
// between 110.567km at the equator and 111.699km at the poles)
// 1km in degree = 1 / 111.32km = 0.008983
function boundingBox(rotatedHeight, rotatedWidth) {
    // width =  (width / 111.32)    KM to Deegree Convert.
    var rotatedHeight = rotatedHeight;
    var rotatedWidth = rotatedWidth;
    north = main_center_point.lat + (((rotatedHeight / 111.32) / 2) / EARTH_RADIUSE) * (180 / PI);
    south = main_center_point.lat - (((rotatedHeight / 111.32) / 2) / EARTH_RADIUSE) * (180 / PI);
    east = main_center_point.lng + (((rotatedWidth / 111.32) / 2) / EARTH_RADIUSE) * (180 / PI) / Math.cos(main_center_point.lat * PI / 180);
    west = main_center_point.lng - (((rotatedWidth / 111.32) / 2) / EARTH_RADIUSE) * (180 / PI) / Math.cos(main_center_point.lat * PI / 180);

    var boundingbox = new google.maps.Rectangle({
        strokeColor: '#ff0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#ff0000',
        fillOpacity: 0.1,
        map: map,
        bounds: {
            north: north,
            south: south,
            west: west,
            east: east
        }
    });
    // ploat the grid System,only when the Sub cell Width and Height are valid.
    var is_height_valid = rotatedHeight / sub_cell_height;
    var is_width_valid = rotatedWidth / sub_cell_width;
    if (Number.isInteger(is_width_valid) && (Number.isInteger(is_height_valid))) {
        drawGrid(rotatedHeight, rotatedWidth)
    } else {
        alert('Width and Height should less then you mentioned')
    }
}

function drawGrid(rotatedHeight, rotatedWidth) {
    var rotatedHeight = rotatedHeight;
    var rotatedWidth = rotatedWidth;
    var rows = rotatedHeight / sub_cell_height;
    var cols = rotatedWidth / sub_cell_width;
    var newLat = []; // Array of New Lat.
    var newLng = []; // Array of New Lng
    var subcelllat = (sub_cell_height / 2) / 111.32;
    var subcelllng = (sub_cell_width / 2) / 111.32;
    var cellLat = north - (subcelllat / EARTH_RADIUSE) * (180 / PI);
    var cellLng = west + (subcelllng / EARTH_RADIUSE) * (180 / PI) / Math.cos(north * PI / 180); // Referance center Lat Lng to extract the other Center point.
    nextcellLat = cellLat;
    nextcellLng = cellLng;

    // Marker point.
    // Play Icon.
    var play = {
        url: 'play.png',
        size: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(20, 15),
        scaledSize: new google.maps.Size(30, 30)
    };

    // calculate the center point of each subCell
    for (let i = 1; i <= rows; i++) {
        nextcellLat = nextcellLat;
        newLat.push(nextcellLat);
        for (let j = 1; j <= cols; j++) {
            nextcellLng = nextcellLng;
            newLng.push(nextcellLng);
            // console.log("center point " + ([j]) + " = " + " " + nextcellLat, nextcellLng);
            var subcellcenterPoint = {
                lat: nextcellLat,
                lng: nextcellLng
            }

            var playMarker = new google.maps.Marker({
                position: subcellcenterPoint,
                map: map,
                icon: play,
                title: 'click to Play',
            });

            google.maps.event.addListener(map, 'zoom_changed', function() {
                var zoom = map.getZoom();
                if (zoom > 20) {
                    playMarker.setVisible(true);

                } else {
                    playMarker.setVisible(false);
                }
            })

            playMarker.addListener("click", function() {
                alert("clicked button is in " + " " + [i] + " " + "Row" + " " + [j] + " " + "Colum.");
            });

            nextcellLng = nextcellLng + (sub_cell_center_pointLng / EARTH_RADIUSE) * (180 / PI) / Math.cos(cellLat * PI / 180);
        }
        nextcellLat = nextcellLat - (sub_cell_center_pointLat / EARTH_RADIUSE) * (180 / PI);
        defferanceLng = (newLng[1] - newLng[0]);
        nextcellLng = nextcellLng - (defferanceLng * (cols));
    }
    // Notification Icon
    var reddot = {
        url: 'reddot.png',
        size: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(22, -6),
        scaledSize: new google.maps.Size(15, 15)
    };
    // ploat the Sub cell w.r.t Center point.
    for (let i = 0; i < newLat.length; i++) {
        subcellNorth = newLat[i] + (subcelllat / EARTH_RADIUSE) * (180 / PI);
        subcellSouth = newLat[i] - (subcelllat / EARTH_RADIUSE) * (180 / PI);
        for (let j = 0; j < newLng.length; j++) {
            subcellEast = newLng[j] + (subcelllng / EARTH_RADIUSE) * (180 / PI) / Math.cos(newLat[i] * PI / 180);
            subcellWest = newLng[j] - (subcelllng / EARTH_RADIUSE) * (180 / PI) / Math.cos(newLat[i] * PI / 180);
            var rednoti = {
                lat: subcellNorth,
                lng: subcellEast
            };
            // console.log("Top Left" + " " + [j] + " =" + " " + subcellNorth, subcellWest);
            // console.log("Top Right" + " " + [j] + " =" + " " + subcellNorth, subcellEast);
            // console.log("Bottom Right" + " " + [j] + " =" + " " + subcellSouth, subcellEast);
            // console.log("Bottom Left" + " " + [j] + " =" + " " + subcellSouth, subcellWest);

            var Notification = new google.maps.Marker({
                position: rednoti,
                map: map,
                icon: reddot
            });
            google.maps.event.addListener(map, 'zoom_changed', function() {
                var zoom = map.getZoom();
                if (zoom > 20) {
                    Notification.setVisible(true)
                } else {
                    Notification.setVisible(false)
                }
            })
            if (j % 2 == 0) {
                fillColor = '#000000';
            } else {
                fillColor = '#FFFFFF'
            }


            var boundingbox = new google.maps.Rectangle({
                strokeColor: '#CCCCCC',
                strokeOpacity: 0.2,
                strokeWeight: 2,
                fillColor: fillColor,
                fillOpacity: 0.4,
                map: map,
                bounds: {
                    north: subcellNorth,
                    south: subcellSouth,
                    west: subcellWest,
                    east: subcellEast
                }
            });
        }
    }

}

google.maps.event.addDomListener(window, 'load', initMap)