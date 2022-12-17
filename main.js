/**
 * TODO: add object render or map move
 */

$(document).ready(function() {

	/**
	 * Render map
	 */

	var zoom = 6;
	var tileSize = 90;
	var squareSize = (Math.pow(2, zoom) - 1) * tileSize;
	var tilesUrl = passedFromServer.baseUrl + 'map/tile?x={x}&y={y}';

	var map = new L.Map('map-container', {
		center 		: [0, 0],
		zoom 		: zoom,
		zoomControl	: false,
		crs 		: L.CRS.Simple,
		maxBounds 	: new L.LatLngBounds(
			new L.LatLng(-squareSize, squareSize),
			new L.LatLng(0, 0)
		)
	});

	L.tileLayer(tilesUrl, {
		maxZoom 		: zoom,
		minZoom 		: zoom,
		tileSize 		: tileSize,
		attribution		: false,
		continuousWorld : false,
	}).addTo(map);

	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(map);
	}

    map.on('click', onMapClick);

    $('a#submit-trigger').on('click', function() {
    	// console.log('dfngdaf');
    	$('form[name="login-form"]').submit();
    })
})