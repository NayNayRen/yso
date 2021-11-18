// Home v3.0
// This file generates a google map using lat and lng coordinates
// Markers can be added via the pins object
// Info bubbles are styled and display when markers are clicked

const hiddenMap = document.querySelector('.hidden-map');
const hiddenMapOpenButton = document.getElementById('map-button');
const hiddenMapCloseButton = document.querySelector('.hidden-map-close-button');
const hiddenMapLocationButton = document.querySelector('.hidden-map-location-button');
const markerGroup = [];

// pinellas county lat and lng
const myLocation = {
  lat: 27.889647,
  lng: -82.727766
};
// marker data for pins
const pins = [{
    lat: myLocation.lat,
    lng: myLocation.lng,
    name: "You Are Here.",
    city: 'Clearwater, FL',
    address: '33764',
  }
  // {
  //   lat: 27.960969999438248,
  //   lng: -82.76100309725183,
  //   name: 'Tropical Smoothie Cafe',
  //   address: '1840 Gulf to Bay Blvd.',
  //   city: 'Clearwater, FL',
  // },
  // {
  //   lat: 27.892476851843572,
  //   lng: -82.78553762444348,
  //   name: 'Largo Mall',
  //   address: '10500 Ulmerton Rd',
  //   city: 'Largo, FL',
  // },
  // {
  //   lat: 28.010112504139414,
  //   lng: -82.72997017212303,
  //   name: "Duff's Buffet",
  //   address: '26111 US Hwy 19 N',
  //   city: 'Countryside, FL',
  // }
];

// async function getGeoLocation(entryFromSearch) {
//   const res = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${entryFromSearch}&key=${geoApi}`);
//   const data = await res.json();
//   return data;
// }

// add async in front of function below if geoLocation is added back
function loadMap(zoomLevel) {
  // const address = await getGeoLocation(entryFromSearch);
  // const latitude = address.results[0].geometry.location.lat;
  // const longitude = address.results[0].geometry.location.lng;
  // console.log(address.results[0].formatted_address);
  // map centers on pinellas county
  const ysoIcon = {
    url: 'imgs/yso-clipped-rw.png',
    //state your size parameters in terms of pixels
    size: new google.maps.Size(35, 35),
    scaledSize: new google.maps.Size(35, 35),
    origin: new google.maps.Point(0, 0)
  }

  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLocation,
    mapId: 'd9a66ad64499fde1',
    zoom: zoomLevel,
    zoomControl: false,
    // center: new google.maps.LatLng(latitude, longitude),
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
    }
  });
  // creates markers with pin info passed for pins info bubble when clicked
  hiddenMapLocationButton.addEventListener('click', () => {
    for (i = 0; i < pins.length; i++) {
      const markerInfo = new google.maps.InfoWindow({
        content: `<div class='map-content'>
      <span class='map-content-heading'>${pins[i].name}</span>
        <div class='map-content-address'>
          <span class='map-content-city'>${pins[i].city}</span>
          <span class='map-content-street'>${pins[i].address}</span>
        </div>
      </div>`,
      });
      // for marker title and location
      const marker = new google.maps.Marker({
        map: map,
        icon: ysoIcon,
        position: new google.maps.LatLng(pins[i].lat, pins[i].lng),
        optimized: false,
        animation: google.maps.Animation.DROP,
      });
      setTimeout(() => {
        markerInfo.open({
          anchor: marker,
          map: map,
          shouldFocus: false,
        });
      }, 1000);
      // opens marker info bubble
      // marker.addListener("click", () => {
      //   markerInfo.open({
      //     anchor: marker,
      //     map: map,
      //     shouldFocus: false,
      //   });
      // });
      // marker.setMap(null);
    }
  });
}

// EVENT LISTENERS
// opens map from map icon next to search entry
hiddenMapOpenButton.addEventListener('click', () => {
    hiddenMap.style.webkitTransition = 'height 750ms ease-out, opacity 450ms ease-out, top 650ms ease-out, z-index 250ms ease-out';
  hiddenMap.style.transition = 'height 750ms ease-out, opacity 450ms ease-out, top 650ms ease-out, z-index 250ms ease-out';
  hiddenMap.style.opacity = '1';
  hiddenMap.style.top = '50px';
  hiddenMap.style.zIndex = '1';
  if (window.innerWidth > 1300) {
    loadMap(12);
    hiddenMap.style.height = '700px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 1000) {
    loadMap(11);
    hiddenMap.style.height = '600px';
  } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
    loadMap(10);
    hiddenMap.style.height = '500px';
  } else if (window.innerWidth < 700 && window.innerWidth > 400) {
    loadMap(9);
    hiddenMap.style.height = '400px';
  } else if (window.innerWidth < 400) {
    loadMap(9);
    hiddenMap.style.height = '300px';
  }
});

// closes map, top right of container
hiddenMapCloseButton.addEventListener('click', () => {
    hiddenMap.style.webkitTransition = 'height 750ms ease-in, opacity 450ms ease-in, top 650ms ease-out, z-index 550ms ease-in';
  hiddenMap.style.transition = 'height 750ms ease-in, opacity 450ms ease-in, top 650ms ease-out, z-index 550ms ease-in';
  hiddenMap.style.height = '0';
  hiddenMap.style.opacity = '0';
  hiddenMap.style.top = '-1500px';
  hiddenMap.style.zIndex = '-1';
});

// adjusts map when open on screen resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 1300) {
    hiddenMap.style.height = '700px';
  } else if (window.innerWidth < 1300 && window.innerWidth > 1000) {
    hiddenMap.style.height = '600px';
  } else if (window.innerWidth < 1000 && window.innerWidth > 700) {
    hiddenMap.style.height = '500px';
  } else if (window.innerWidth < 700 && window.innerWidth > 400) {
    hiddenMap.style.height = '400px';
  } else if (window.innerWidth < 400) {
    hiddenMap.style.height = '300px';
  }
});
