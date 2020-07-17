//required inputs to map to generate grid system.
var main_center_point;
var width = 10; 
var height = 6;
var sub_cell_width = 2;      // width and height in KM.
var sub_cell_height = 2;
var sub_cell_center_point =  (sub_cell_width / 2) / 111.32;  // center point will be always midway of sub cell width.

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

var EARTH_RADIUSE = 6378;       //radius of the earth in kilometer
var PI = Math.PI;
var DEGREE_TO_RADIANS;
var RADIANS_TO_DEGREE;

function initMap() {
    main_center_point = {
        lat: 15.3647,
        lng: 75.1240
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom:19,
        center:main_center_point,
    });
    marker = new google.maps.Marker({
        position: main_center_point,
        map:map
    });
    boundingBox()
}
// 180/PI radians to degree.
// center_point.lat * PI / 180 degree to radian.
// number of km per degree = ~111km (111.32 in google maps, but range varies 
// between 110.567km at the equator and 111.699km at the poles)
// 1km in degree = 1 / 111.32km = 0.008983
function boundingBox() {    
    width = width / 111.32;    // KM to Deegree Convert.
    height = height / 111.32; 
    north = main_center_point.lat + ((height / 2) / EARTH_RADIUSE) * (180 / PI);
    south = main_center_point.lat - ((height / 2) / EARTH_RADIUSE) * (180 / PI);
    east  = main_center_point.lng + ((width / 2) / EARTH_RADIUSE) * (180 / PI) / Math.cos(main_center_point.lat * PI / 180);
    west  = main_center_point.lng - ((width / 2) / EARTH_RADIUSE) * (180 / PI) / Math.cos(main_center_point.lat * PI / 180);

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
    drawGrid()
    }
function drawGrid() {  
    var rows = 6;  
    var cols = 10
    ;         
    var nextcellLat = north;
    var nextcellLng = west;  
    var newLat = [];        // Array of New Lat.
    var newLng = [];        // Array of New Lng
    for (let i = 0; i <= rows; i++) {
        nextcellLat = nextcellLat;
        newLat.push(nextcellLat);
       for (let j = 0; j <= cols; j++) {
            nextcellLng =  nextcellLng;          
            newLng.push(nextcellLng);
            console.log(nextcellLat,nextcellLng); 
            var cell = {
                lat:nextcellLat,
                lng:nextcellLng
            }
            marker = new google.maps.Marker({
                position: cell,
                map:map
            });
            nextcellLng =  (nextcellLng) + (sub_cell_center_point / EARTH_RADIUSE) * (180 / PI) / Math.cos(north * PI / 180);
        }
        nextcellLat = nextcellLat - (sub_cell_center_point / EARTH_RADIUSE) * (180 / PI);
        defferanceLng = (newLng[1] - newLng[0]);
        nextcellLng = nextcellLng - (defferanceLng * (cols + 1)); 
    } 
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
}

google.maps.event.addDomListener(window,'load',initMap)
