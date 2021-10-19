const dashboardSearchField = document.getElementById('dashboard-search-field');
const dashboardSearchFieldLabel = document.getElementById('dashboard-search-field-label');
const dashboardSearchFieldButton = document.getElementById('dashboard-search-field-button');
// pinellas county lat and lng
const myLocation = {
  lat: 27.889647,
  lng: -82.727766
};
const pins = [{
    lat: 27.960969999438248,
    lon: -82.76100309725183,
    // address: 'Clearwater, FL',
    // title: 'Tropical Smoothie Cafe',
    info: `<div id='map-content'>
    <span class='map-content-heading'>Tropical Smoothie</span>
      <div class='map-content-address'>
        <span class='map-content-street'>1840 Gulf to Bay Blvd.</span>
        <span class='map-content-city'>Clearwater, FL 33765</span>
      </div>
    </div>`,
  },
  {
    lat: 27.892476851843572,
    lon: -82.78553762444348,
    // address: 'Largo, FL',
    // title: 'Largo Mall',
    info: `<div id='map-content'>
    <span class='map-content-heading'>Largo Mall</span>
      <div class='map-content-address'>
        <span class='map-content-street'>10500 Ulmerton Rd</span>
        <span class='map-content-city'>Largo, FL 33771</span>
      </div>
    </div>`,
  },
  {
    lat: 28.010112504139414,
    lon: -82.72997017212303,
    // address: 'Countryside, FL',
    // title: "Duff's Buffet",
    info: `<div id='map-content'>
    <span class='map-content-heading'>Duff's Buffet</span>
      <div class='map-content-address'>
        <span class='map-content-street'>26111 US Hwy 19 N</span>
        <span class='map-content-city'>Clearwater, FL 33763</span>
      </div>
    </div>`,
  }
];

function openDashboardSearch() {
  dashboardSearchField.style.width = '200px';
  dashboardSearchField.style.opacity = '1';
  dashboardSearchFieldLabel.style.right = '210px';
  dashboardSearchFieldLabel.style.color = '#fff';
  dashboardSearchFieldButton.style.opacity = '1';
  dashboardSearchFieldButton.style.bottom = '0';
  if (window.innerWidth <= 700) {
    dashboardSearchField.style.width = '145px';
    dashboardSearchFieldLabel.style.right = '150px';
    dashboardSearchFieldButton.style.bottom = '30px';
  }
}

function closeDashboardSearch() {
  if(dashboardSearchField.value === ''){
    loadMap('33764');
  }else{
    loadMap(dashboardSearchField.value);
  }
  dashboardSearchField.style.width = '0';
  dashboardSearchField.style.opacity = '0';
  dashboardSearchFieldLabel.style.right = '0';
  dashboardSearchFieldButton.style.bottom = '-30px';
}

async function getGeoLocation(entryFromSearch) {
  const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${entryFromSearch}&key=${geoApi}`);
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
    // for info bubble
    const infoWindow = new google.maps.InfoWindow({
      content: pins[i].info,
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
dashboardSearchFieldLabel.addEventListener('click', openDashboardSearch);
dashboardSearchFieldButton.addEventListener('click', closeDashboardSearch);
