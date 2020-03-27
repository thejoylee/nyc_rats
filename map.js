#map.js
'use strict'
console.log('Loaded map.js')
mapboxgl.accessToken='pk.eyJ1IjoidGhlam95bGVlIiwiYSI6ImNrN3BmZnZ5NDBqYjQzbW1pNGs0MWFiejkifQ.9stnbzBJqom6XYjX73VYcA'

let map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/thejoylee/ck89c4hme003w1ims5f5ktulp',
	center: [-73.96216,40.80779],
	zoom:16
})

let navigation = new mapboxgl.NavigationControl({
	showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl ({
	maxWidth: 80,
	unit: 'imperial'
})
map.addControl(scale,'bottom-right')

let geolocate = new mapbox.gl.GeolocateControl({
	positionOptions: {
		enableHighAccuracy: true
	}, 
	trackUserLocation: true,
	showUserLocation: true,
	fitBoundsOptions: {
	}
})
map.addControl(geolocate,'top-left')

geolocate.on('gelocate',function(event) {	
})

