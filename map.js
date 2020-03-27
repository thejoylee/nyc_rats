'use strict'

console.log('Loaded map.js')

mapboxgl.accessToken = 'YOUR TOKEN HERE'

let map = new mapboxgl.Map({
    container: 'map',
    style: 'YOUR STYLE URL HERE',
    center: [-73.96216,40.80779],
    zoom: 16
})

let navigation = new mapboxgl.NavigationControl({
    showCompass: false
})
map.addControl(navigation, 'top-left')

let scale = new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'imperial'
})
map.addControl(scale, 'bottom-right')

let geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true,
    showUserLocation: true,
    fitBoundsOptions: {
    }
})
map.addControl(geolocate, 'top-left')

geolocate.on('geolocate', function(event) {

})

map.on('click', function(event) {
    // rat sightings from layer data
    let features = map.queryRenderedFeatures({layers:['rat-sightings']})
    console.log(features)
    
    // location of the click
    let current_location = [event.lngLat.lng, event.lngLat.lat]
    console.log(current_location)
    
    // if there aren't any features don't continue
    if (features.length == 0) return
    
    // create variables to hold the closest feature found so far
    let closest_distance = Infinity
    let closest_feature = null
    
    //we're going to check each feature
    for (let feature of features) {
        // calculate the distance using turf
        let distance = turf.distance(turf.point(feature.geometry.coordinates), turf.point(current_location))
        
        // if distance is less than closest distance we've seen so far, update the variables
        if (distance < closest_distance) {
            closest_distance = distance
            closest_feature = feature
        }
    }
    
    // closest_distance should now be set to the minimum value
    // closest_feature should be set to the feature itself
    console.log("Closest feature:", closest_feature.geometry.coordinates, "(", closest_distance, "m)")
    
    // additional handler code goes here
    
    // calculate bearing
    let bearing = turf.bearing(turf.point(current_location), turf.point(closest_feature.geometrry.coordinates)
    console.log("Bearing:", bearing)
    
})
    
})
