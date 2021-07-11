let map;
let markers = [];
const progressContainer = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const mapContainer = document.querySelector('.map');
const zoomIn = document.querySelector('#zoomin');
const zoomOut = document.querySelector('#zoomout');


function HomeControl(controlDiv, map) {
    google.maps.event.addDomListener(zoomout, 'click', function () {
      var currentZoomLevel = map.getZoom();
      if (currentZoomLevel != 0) {
        map.setZoom(currentZoomLevel - 1);
      }
    });

    google.maps.event.addDomListener(zoomin, 'click', function () {
      var currentZoomLevel = map.getZoom();
      if (currentZoomLevel != 21) {
        map.setZoom(currentZoomLevel + 1);
      }
    });
  }



function initMap() {
    progressBar.value = 20;
    navigator.geolocation.getCurrentPosition((position) => {
        let coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: coordinates,
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: true,
          });
          var homeControlDiv = document.createElement('div');
          var homeControl = new HomeControl(homeControlDiv, map);
          homeControlDiv.index = 1;
          map.controls[google.maps.ControlPosition.TOP_LEFT].push(homeControlDiv);


          const marker = new google.maps.Marker({
            position: coordinates,
            title:"You are here"
        });
        
        marker.setMap(map);
        progressBar.value = 80;
        setTimeout(() => {
          progressContainer.classList.add('hide');
          mapContainer.classList.remove('hide');
          zoomIn.classList.remove('hide');
          zoomOut.classList.remove('hide');
        //   mapContainer.style.position = 'static';
        }, 1000);
    }, () => {
        console.log('no geo access');
    });
 

};


