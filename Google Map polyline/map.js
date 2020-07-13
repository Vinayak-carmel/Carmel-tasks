// Initialize some map with center at Bucaramanga
var map = new google.maps.Map(document.getElementById('map'), {
  center: {
    lat: 15.3647,
    lng: 75.1240
  },
  zoom: 20,
  mapTypeId: 'roadmap'
});

// An array with the coordinates of the boundaries of Bucaramanga, extracted manually from the GADM database
var latlngarry = [
  { lng:  75.1245,  lat: 15.3650 },
  { lng:  75.1235,  lat: 15.3650 },
  { lng:  75.1235,  lat: 15.3644 },
  { lng:  75.1245, lat: 15.3644 }
  // { lng:  75.1240, lat: 15.3647 }
];

// Construct the polygon.
var BucaramangaPolygon = new google.maps.Polygon({
  paths: latlngarry,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: '#FF0000',
  fillOpacity: 0.1
});

// for (let i = 0; i < latlngarry.length; i++) {
//   var marker = new google.maps.Marker({
//     position: latlngarry[i],
//     map: map
//   });
// }
// Draw the polygon on the desired map instance
BucaramangaPolygon.setMap(map);