/* Close question */
function closeNav() {
    document.getElementById("myNav").style.display = "none";

}


/*Close loading*/
var element = document.getElementById("map");
element.addEventListener('DOMSubtreeModified', closeLoader);
function closeLoader(){
    document.getElementById("loading").style.display = "none";


}


function pay(element) {
    var from_address = document.getElementById("from").value;
    var to_address = document.getElementById("to").value;

    var cab_time = document.getElementById("pickup-time").innerHTML;
    var cost = element.parentElement.previousElementSibling.innerHTML;
    var cabtype = element.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    var imgsrc = element.parentElement.parentElement.previousElementSibling.firstElementChild.src.slice(21);;


    sessionStorage.setItem('from_address', JSON.stringify(from_address));
    sessionStorage.setItem('to_address', JSON.stringify(to_address));

    sessionStorage.setItem('cabtime', cab_time);
    sessionStorage.setItem('cabcost', cost);
    sessionStorage.setItem('cabtype', cabtype);
    sessionStorage.setItem('cabsrc', imgsrc);



    window.location.href = "/paymentpage.ejs"

}


//openstreetmap api

function initMap(){

navigator.geolocation.getCurrentPosition((position) => {

    myLat = position.coords.latitude;
    myLon = position.coords.longitude;
    getcurrentAddress(myLat, myLon);

    function getcurrentAddress(lat, lng) {
        fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.display_name);
                localStorage.setItem('address', data.display_name);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    var from_address = localStorage.getItem('address');

    //If mannually adding the pick address
    var input_address = document.getElementById("from").value;
    geocodeAddress(input_address);
    function geocodeAddress(address) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    var input_lat = data[0].lat;
                    var input_lon = data[0].lon;
                    localStorage.setItem('input_lat', input_lat);
                    localStorage.setItem('input_lon', input_lon);
                    localStorage.setItem('address', input_address);

                    from_pos = document.getElementById("from");
                    from_pos.value = input_address;
                    //fetch coordinates of drop address


                    var to_address =document.getElementById('to').value;
                    var to_coords;
                    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${to_address}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data.length > 0) {
                                //drop coords
                                var to_lat = data[0].lat;
                                var to_lon = data[0].lon;
                                localStorage.setItem('to_lat', to_lat);
                                localStorage.setItem('to_lon', to_lon);
                                localStorage.setItem('to_address', to_address);

                                from_pos = document.getElementById("from");
                                from_pos.value = input_address;

                                var map = L.map('map');
                                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                }).addTo(map);
                                var marker1 = L.marker([input_lat, input_lon]).addTo(map);
                                var marker2 = L.marker([to_lat, to_lon]).addTo(map);
                                var bounds = L.latLngBounds([marker1.getLatLng(), marker2.getLatLng()]);
                                map.fitBounds(bounds, { padding: [50, 50] });


                                // Define the coordinates for the start and end points
                                var startPoint = [input_lat, input_lon];
                                var endPoint = [to_lat, to_lon];

                                // Create a polyline for the route
                                var route = L.Routing.control({
                                    waypoints: [
                                        L.latLng(startPoint[0], startPoint[1]),
                                        L.latLng(endPoint[0], endPoint[1])
                                    ],

                                    router: new L.Routing.osrmv1({
                                        language: 'en',
                                        profile: 'driving',
                                    }),
                                }).addTo(map);

                                //Distance between two places
                                var distanceInMeters = marker1.getLatLng().distanceTo(marker2.getLatLng());
                                var distance = distanceInMeters / 1000;
                                distance = distance.toFixed(2);

                                document.getElementById('distance').innerHTML = `${distance} KM`;
                                //price for bike
                                document.getElementById('bike').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 2).toFixed(2)}`;

                                //price for auto
                                document.getElementById('auto').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 5).toFixed(2)}`;

                                //price for car
                                document.getElementById('car').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 7).toFixed(2)}`;

                                //price for car
                                document.getElementById('bus').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 10).toFixed(2)}`;




                            } else {
                                console.log("Address not found here.");
                            }
                        })



                } else {


                    from_pos = document.getElementById("from");
                    from_pos.value = from_address;
                     //fetch coordinates of drop address


                     var to_address =document.getElementById('to').value;
                     var to_coords;
                     fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${to_address}`)
                         .then(response => response.json())
                         .then(data => {
                             if (data.length > 0) {
                                 //drop coords
                                 var to_lat = data[0].lat;
                                 var to_lon = data[0].lon;
                                 localStorage.setItem('to_lat', to_lat);
                                 localStorage.setItem('to_lon', to_lon);
                                 localStorage.setItem('to_address', to_address);
 
                                 
 
                                 var map = L.map('map');
                                 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                                     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                 }).addTo(map);
                                 var marker1 = L.marker([myLat, myLon]).addTo(map);
                                 var marker2 = L.marker([to_lat, to_lon]).addTo(map);
                                 var bounds = L.latLngBounds([marker1.getLatLng(), marker2.getLatLng()]);
                                 map.fitBounds(bounds, { padding: [200, 200] });
 
 
                                 // Define the coordinates for the start and end points
                                 var startPoint = [myLat, myLon];
                                 var endPoint = [to_lat, to_lon];
 
                                 // Create a polyline for the route
                                 var route = L.Routing.control({
                                     waypoints: [
                                         L.latLng(startPoint[0], startPoint[1]),
                                         L.latLng(endPoint[0], endPoint[1])
                                     ],
 
                                     router: new L.Routing.osrmv1({
                                         language: 'en',
                                         profile: 'driving',
                                     }),
                                 }).addTo(map);
 
                                 //Distance between two places
                                 var distanceInMeters = marker1.getLatLng().distanceTo(marker2.getLatLng());
                                 var distance = distanceInMeters / 1000;
                                 distance = distance.toFixed(2);
 
                                 document.getElementById('distance').innerHTML = `${distance} KM`;
                                 //price for bike
                                 document.getElementById('bike').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 2).toFixed(2)}`;
 
                                 //price for auto
                                 document.getElementById('auto').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 5).toFixed(2)}`;
 
                                 //price for car
                                 document.getElementById('car').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 7).toFixed(2)}`;
 
                                 //price for car
                                 document.getElementById('bus').lastElementChild.lastElementChild.previousElementSibling.innerHTML = `${(distance * 10).toFixed(2)}`;
 
 
 
 
                             } else {
                                 console.log("Address not found here.");
                             }
                         })
 

                }
            })

    }


   

})
}
