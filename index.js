let map;
let markers = [];
const progressContainer = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const mapDiv = document.querySelector('.map');


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
          var marker = new google.maps.Marker({
            position: coordinates,
            title:"You are here"
        });
        
        marker.setMap(map);
        progressBar.value = 80;
        setTimeout(() => {
          progressContainer.classList.add('hide');
          mapDiv.classList.remove('hide');
        }, 1000);
    }, () => {
        console.log('no geo access');
    });
 

};


