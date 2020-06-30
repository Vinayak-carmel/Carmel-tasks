var overlay;

USGSOverlay.prototype = new google.maps.OverlayView();

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
    var bounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(15.3644, 75.1235),
        new google.maps.LatLng(15.3650, 75.1245));

    // The photograph is courtesy of the U.S. Geological Survey.
    var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
    srcImage += 'examples/full/images/talkeetna.png';

    overlay = new USGSOverlay(bounds, srcImage, map);
}


/** @constructor */
function USGSOverlay(bounds, image, map) {

    // Now initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay
    this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
USGSOverlay.prototype.onAdd = function() {

    var div = document.createElement('div');
    div.style.border = "10px dashed #CCCCCC";
    div.style.width = "10%";
    div.style.opacity = "0.5";
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';

    div.innerHTML +=
        '  <div class="gridparent">' +

        ' <div class="grid">' +
        '<div class="tielOne">' + 1 + '</div>' +
        '<div class="tielOne">' + 1 + '</div>' +
        '<div class="tielOne">' + 1 + '</div>' +
        '<div class="tielOne">' + 1 + '</div>' +
        ' </div>' +
        ' <p>5KM</p>'
    '</div>';
    this.div_ = div;

    // Add the element to the "overlayImage" pane.
    var panes = this.getPanes();
    panes.overlayImage.appendChild(this.div_);
};

USGSOverlay.prototype.draw = function() {

    // We use the south-west and north-east
    // coordinates of the overlay to peg it to the correct position and size.
    // To do this, we need to retrieve the projection from the overlay.
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
    var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = ne.y + 'px';
    div.style.width = (ne.x - sw.x) + 'px';
    div.style.height = (sw.y - ne.y) + 'px';

};

google.maps.event.addDomListener(window, 'load', initMap);