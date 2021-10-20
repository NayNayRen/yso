
// pinellas county lat and lng
const myLocation = {
  lat: 27.889647,
  lng: -82.727766
};
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

async function getGeoLocation(entryFromSearch) {
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${entryFromSearch}&key=${GEO_API}`);
  const data = await res.json();
  return data;
}

async function loadMap(entryFromSearch) {
  const address = await getGeoLocation(entryFromSearch);
  const latitude = address.results[0].geometry.location.lat;
  const longitude = address.results[0].geometry.location.lng;
  console.log(address.results[0].formatted_address);
  // map centers on pinellas county
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: new google.maps.LatLng(latitude, longitude),
    // center: myLocation,
    // mapId: 'd9a66ad64499fde1',
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    }
  });
  // creates markers with pin info passed
  for (i = 0; i < pins.length; i++) {
    // for pins info bubble when clicked
    const infoWindow = new google.maps.InfoWindow({
      content: `<div id='map-content'>
      <span class='map-content-heading'>${pins[i].name}</span>
        <div class='map-content-address'>
          <span class='map-content-street'>${pins[i].address}</span>
          <span class='map-content-city'>${pins[i].city}</span>
        </div>
      </div>`,
    });
    // for marker title and location
    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(pins[i].lat, pins[i].lon),
      map,
    });
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
  }
}

function init() {
  loadMap('33764');
}

window.addEventListener('load', init);
