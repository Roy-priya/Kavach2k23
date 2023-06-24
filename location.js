// Define the center of the radius
var center = {lat: 37.7749, lng: -122.4194};

// Define the radius in meters
var radius = 1000;

// Define an array to store the police officers
var officers = [];

// Your code to get police officers from the system
// In this example, we'll just add some sample officers
officers.push({lat: 37.7752, lng: -122.4198});
officers.push({lat: 37.7747, lng: -122.4189});
officers.push({lat: 37.7751, lng: -122.4211});
officers.push({lat: 37.7739, lng: -122.4205});
officers.push({lat: 37.7760, lng: -122.4212});

// Define a function to calculate the distance between two points in meters
function getDistance(point1, point2) {
	var R = 6371000; // radius of the Earth in meters
	var lat1 = point1.lat * Math.PI / 180; // convert to radians
	var lat2 = point2.lat * Math.PI / 180; // convert to radians
	var dLat = (point2.lat - point1.lat) * Math.PI / 180; // convert to radians
	var dLng = (point2.lng - point1.lng) * Math.PI / 180; // convert to radians
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		Math.cos(lat1) * Math.cos(lat2) *
		Math.sin(dLng/2) * Math.sin(dLng/2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c; // distance in meters
	return d;
}

// Define a function to check if a police officer is within the radius
function isWithinRadius(officer, center, radius) {
	var distance = getDistance(officer, center);
	return (distance <= radius);
}

// Define an array to store the police officers within the radius
var officersWithinRadius = [];

// Check each police officer if they are within the radius
for (var i = 0; i < officers.length; i++) {
	if (isWithinRadius(officers[i], center, radius)) {
		officersWithinRadius.push(officers[i]);
	}
}

// Display the police officers within the radius
console.log("Police officers within " + radius + " meters of the center (" +
	center.lat + ", " + center.lng + "):");
for (var i = 0; i < officersWithinRadius.length; i++) {
	console.log(officersWithinRadius[i]);
}
