// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'edhawkins.019i0phh';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiZWRoYXdraW5zIiwiYSI6ImNpbm52NHphMDB6bHp1Nmx5d3c3eGFqZDYifQ.ncry1ZY0LM2tJ8jr-bXDHQ';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!

var dataFileToAdd = 'data/restaurants.geojson';

var featureLayer = L.mapbox.featureLayer();
	featureLayer.loadURL(dataFileToAdd);
	featureLayer.addTo(map);

featureLayer.on('ready', function(){
	this.eachLayer(function(Layer){
        layer.setIcon(L.mapbox.marker.icon({
             "marker-color": "#8834bb",
             "marker-size": "Large",
             "marker-sysmbol": "restaurant"
        }))
    
    })
		map.fitBounds(featureLayer.getBounds());
 })
