let map;
let markers = [];

function initMap() {
    let coordinates = {};
    navigator.geolocation.getCurrentPosition((position) => {
        coordinates = {
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
        
        
    }, () => {
        console.log('no geo access');
    });
 

};


