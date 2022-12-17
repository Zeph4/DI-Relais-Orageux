/*
* Meter Projection
* marko@zabreznik.net
* needs 0.8-dev
* With this lovely mess of code we force Leaflet to use latlng in meters
* Update: Added an example and cleaned up code 
* */
L.CRS.Meters = L.extend(L.CRS, {
    projection: L.extend( L.Projection.LonLat, {
	    bounds: L.bounds([0, 0], [2160, 4096])
    }),
    transformation: new L.Transformation(1, 0, -1, 0),
    scale: function (zoom) {
        return Math.pow(2, zoom);
    },
    infinite: false
});