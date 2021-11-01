// Home v3.0
// This file generates a google map using lat and lng coordinates
// Markers can be added via the pins object
// Info bubbles are styled and display when markers are clicked

const mapButton = document.getElementById('map-button');
const hiddenMap = document.querySelector('.hidden-map');
const hiddenMapCloseButton = document.querySelector('.hidden-map-close-button');

// pinellas county lat and lng
const myLocation = {
  lat: 27.889647,
  lng: -82.727766
};
// marker data for pins
const pins = [{
    lat: 27.960969999438248,
    lon: -82.76100309725183,
    name: 'Tropical Smoothie Cafe',
    address: '1840 Gulf to Bay Blvd.',
    city: 'Clearwater, FL',
  },
  {
    lat: 27.892476851843572,
    lon: -82.78553762444348,
    name: 'Largo Mall',
    address: '10500 Ulmerton Rd',
    city: 'Largo, FL',
  },
  {
    lat: 28.010112504139414,
    lon: -82.72997017212303,
    name: "Duff's Buffet",
    address: '26111 US Hwy 19 N',
    city: 'Countryside, FL',
  }
];

// async function getGeoLocation(entryFromSearch) {
//   const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${entryFromSearch}&key=${geoApi}`);
//   const data = await res.json();
//   return data;
// }

function loadMap() {
  // const address = await getGeoLocation(entryFromSearch);
  // const latitude = address.results[0].geometry.location.lat;
  // const longitude = address.results[0].geometry.location.lng;
  // console.log(address.results[0].formatted_address);
  // map centers on pinellas county
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    mapId: 'd9a66ad64499fde1',
    zoom: 11,
    // center: new google.maps.LatLng(latitude, longitude),
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    }
  });
  // creates markers with pin info passed for pins info bubble when clicked
  for (i = 0; i < pins.length; i++) {
    const markerInfo = new google.maps.InfoWindow({
      content: `<div class='map-content'>
      <span class='map-content-heading'>${pins[i].name}</span>
        <div class='map-content-address'>
          <span class='map-content-street'>${pins[i].address}</span>
          <span class='map-content-city'>${pins[i].city}</span>
        </div>
      </div>`,
    });
    // for marker title and location
    const marker = new google.maps.Marker({
      map: map,
      position: new google.maps.LatLng(pins[i].lat, pins[i].lon),
    });
    // opens marker info bubble
    marker.addListener("click", () => {
      markerInfo.open({
        anchor: marker,
        map: map,
        shouldFocus: false,
      });
    });
  }
  // This event listener calls addMarker() when the map is clicked.
  // google.maps.event.addListener(map, "click", (event) => {
  //   addMarker(event.latLng, map);
  // });
}

// add the marker at the clicked location
function addMarker(location, map) {
  new google.maps.Marker({
    position: location,
    map: map,
  });
}

// function loadMapView() {
//   loadMap();
// }

// EVENT LISTENERS
// window.addEventListener('load', loadMapView);
// opens map, top right of container
mapButton.addEventListener('click', () => {
  loadMap();
  hiddenMap.style.transition = 'height 450ms ease, opacity 250ms ease, z-index 150ms ease';
  hiddenMap.style.opacity = '1';
  hiddenMap.style.zIndex = '1';
  if(window.innerWidth > 1300){
    hiddenMap.style.height = '700px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 1000){
    hiddenMap.style.height = '600px';
  } else if (window.innerWidth < 1000 && window.innerWidth > 700){
    hiddenMap.style.height = '500px';
  } else if (window.innerWidth < 700 && window.innerWidth > 400){
    hiddenMap.style.height = '400px';
  } else if (window.innerWidth < 400){
    hiddenMap.style.height = '300px';
  }
});

// closes map, top right of container
hiddenMapCloseButton.addEventListener('click', () => {
  hiddenMap.style.transition = 'height 350ms ease, opacity 550ms ease, z-index 750ms ease';
  hiddenMap.style.height = '0';
  hiddenMap.style.opacity = '0';
  hiddenMap.style.zIndex = '-1';
});

// adjusts map when open on screen resize
window.addEventListener('resize', () => {
  if(window.innerWidth > 1300){
    hiddenMap.style.height = '700px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 1000){
    hiddenMap.style.height = '600px';
  } else if (window.innerWidth < 1000 && window.innerWidth > 700){
    hiddenMap.style.height = '500px';
  } else if (window.innerWidth < 700 && window.innerWidth > 400){
    hiddenMap.style.height = '400px';
  } else if (window.innerWidth < 400){
    hiddenMap.style.height = '300px';
  }
});
