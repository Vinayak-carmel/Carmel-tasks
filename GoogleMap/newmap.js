var overlay;
USGSOverlay.prototype = new google.maps.OverlayView();
var historicalOverlay;

function initMap() {
    var hubli2 = { lat: 15.3650, lng: 75.1245 };
    var hubli = { lat: 15.3647, lng: 75.1240 };
    var hubli1 = { lat: 15.3644, lng: 75.1235 };

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: { lat: 15.3647, lng: 75.1240 },
    });
    var marker = new google.maps.Marker({ position: hubli, map: map });
    var marker = new google.maps.Marker({ position: hubli1, map: map });
    var marker = new google.maps.Marker({ position: hubli2, map: map });

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

    var gridBounds = {
        north: 15.3650,
        south: 15.3644,

        west: 75.1235,
        east: 75.1245
    };

    historicalOverlay = new google.maps.GroundOverlay(
        'map.png',
        gridBounds);
    historicalOverlay.setMap(map);

    var srcImage = "map.png";
    overlay = new USGSOverlay(gridBounds, srcImage, map);
}

function USGSOverlay(gridBounds, image, map) {

    this.gridBounds = gridBounds;
    this.image_ = image;
    this.map_ = map;

    this.div_ = null;
    this.setMap(map);
}

USGSOverlay.prototype.onAdd = function() {

    var div = document.createElement('div');
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';

    // Create the img element and attach it to the div.
    var table = document.createElement('TABLE');
    table.border = '1';

    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    for (var i = 0; i < 3; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j = 0; j < 4; j++) {
            var td = document.createElement('TD');
            td.width = '75';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
    }
    div.appendChild(table);

    this.div_ = div;

    // Add the element to the "overlayLayer" pane.
    var panes = this.getPanes();
    panes.overlayLayer.appendChild(div);
};

USGSOverlay.prototype.draw = function() {

    var overlayProjection = this.getProjection();

    var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
    var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = ne.y + 'px';
    div.style.width = (ne.x - sw.x) + 'px';
    div.style.height = (sw.y - ne.y) + 'px';
};