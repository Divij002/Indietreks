//    mapbox map integration
mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: campground.geometry.coordinates, // starting position [lng, lat]
  zoom: 10, // starting zoom
  attributionControl: false, // Disable the default attribution control
});

// Add zoom and rotation controls to the map. -
// from docs - https://docs.mapbox.com/mapbox-gl-js/example/navigation/  and https://docs.mapbox.com/mapbox-gl-js/api/markers/#navigationcontrol
map.addControl(new mapboxgl.NavigationControl());

// Create a default Marker and add it to the map
const marker1 = new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<h3>${campground.title}</h3> <p>${campground.location}</p>`
    )
  )
  .addTo(map);
