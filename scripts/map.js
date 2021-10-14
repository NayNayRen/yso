function loadMap() {
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
      <span class='map-content-address'>Clearwater, FL</span>
      </div>`,
    },
    {
      lat: 27.892476851843572,
      lon: -82.78553762444348,
      // address: 'Largo, FL',
      // title: 'Largo Mall',
      info: `<div id='map-content'>
      <span class='map-content-heading'>Largo Mall</span>
      <span class='map-content-address'>Largo, FL</span>
      </div>`,
    },
    {
      lat: 28.010112504139414,
      lon: -82.72997017212303,
      // address: 'Countryside, FL',
      // title: "Duff's Buffet",
      info: `<div id='map-content'>
      <span class='map-content-heading'>Duff's Buffet</span>
      <span class='map-content-address'>Countryside, FL</span>
      </div>`,
    }
  ];
  // map centers on pinellas county
  const map = new google.maps.Map(document.getElementById("map"), {
    // zoomControl: false,
    zoom: 11,
    center: myLocation,
    mapId: 'd9a66ad64499fde1',
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
      position: new google.maps.LatLng(pins[i].lat, pins[i].lon), map,
      animation: google.maps.Animation.DROP,
    });
    marker.addListener("click", () => {
      infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });
    if(document.documentElement.scrollTop > 800){

  }
  }
}

function init() {
  loadMap();
}

window.addEventListener('load', init);
