var maps = new Array();
var infowindow = new google.maps.InfoWindow();

function initializeMap(mapId, defaultZoomLevel, defaultLatitude, defaultLongitude) {
	var myLatlng = new google.maps.LatLng(defaultLatitude, defaultLongitude);
	var myOptions = {
	  zoom: defaultZoomLevel,
	  center: myLatlng,
	  disableDefaultUI: true,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById(mapId), myOptions);	
	addMap(mapId, map);
}

function initDisplayMarker(mapId, location, latitude, longitude) {
	var map = getMap(mapId);
	var locValue = location == null ? "" : location;
	var latValue = latitude == null ? "" : latitude;
	var longValue = longitude == null ? "" : longitude;
	
	if(latValue != "" || longValue != "") {
		var point = new google.maps.LatLng(latValue,longValue);
		createDisplayMarker(map, point, locValue);
	}
}

function createDisplayMarker(map, point, location) {
	var marker = new google.maps.Marker({
	    position: point,
	    map: map,
	    title:location
	});

	google.maps.event.addListener(marker, 'click', function() {
	  infowindow.setContent(location);
	  infowindow.open(map,marker);
	});
}

function getMap(aMapId) {
	return maps[aMapId];
}

function addMap(aMapId, aMap) {
	maps[aMapId] = aMap;
}
