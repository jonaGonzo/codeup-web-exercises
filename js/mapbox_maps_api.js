$(document).ready(function(){
    let thespots = [
        {
            "location": [-73.98969653623872, 40.72878190448207],
            "name": "McSorley’s Old Ale House"
        },
        {
            "location": [-73.98741040406428, 40.72228891057042],
            "name": "Katz's Delicatessen"
        },
        {
            "location": [-73.99228614825239, 40.726465313975226],
            "name": "Bohemian"
        },
    ]
        mapboxgl.accessToken = keys.mapbox;
        let map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            zoom: 15,
            center: [-73.98940023456997, 40.72611560026318]
        });

    for (let i=0; i<thespots.length; i++) {
        let marker = new mapboxgl.Marker()
            .setLngLat(thespots[i].location)
            .addTo(map);

        let spotPopUp = new mapboxgl.Popup()
            .setHTML(`<p>${thespots[i].name}</p>`)
        marker.setPopup(spotPopUp)

    }

});