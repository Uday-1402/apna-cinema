

//seatdetail
var sessionString = sessionStorage.getItem('selectedSeat')
var costString = sessionStorage.getItem('amount')
var placeString = sessionStorage.getItem('place')
var timeString = sessionStorage.getItem('time')
var dateString = sessionStorage.getItem('date')

var obj = JSON.parse(sessionString);
var cost = JSON.parse(costString);
var place = JSON.parse(placeString);
var time = JSON.parse(timeString);
var date = JSON.parse(dateString);

var fee = document.getElementById('ticketFee');
var seats = document.getElementById('selSeats');
var venue = document.getElementById('venue');
var timing = document.getElementById('time');
var dates = document.getElementById('date');

if(obj!=null)
{
    var selseat = Object.values(obj).toLocaleString();
    selseat = selseat.replaceAll(',', ' ');
    
}

seats.value = selseat;
fee.value = cost;
venue.value = place;
timing.value = time;
dates.value = date;

//taxi detail
var from_address = sessionStorage.getItem('from_address')
var to_address = sessionStorage.getItem('to_address')
var cab_time = sessionStorage.getItem('cabtime')
var cab_cost = sessionStorage.getItem('cabcost')
var cab_type = sessionStorage.getItem('cabtype')


var fromplace = JSON.parse(from_address);
var toplace = JSON.parse(to_address);



document.getElementById('taxipickup').value=fromplace;
document.getElementById('taxidrop').value=toplace;
document.getElementById('taxitime').value=cab_time;
document.getElementById('cab-type').value=cab_type;
document.getElementById('taxiFee').value=cab_cost;

//total cost
if(cab_cost==null){
    cab_cost=0;
}

document.getElementById('totalFee').value=(parseInt(cab_cost)+parseInt(cost)).toFixed(2);






//restaurant seat details
var resplaceString = sessionStorage.getItem('resplace')
var restimeString = sessionStorage.getItem('restime')
var npersonString = sessionStorage.getItem('resperson')




var res_place = JSON.parse(resplaceString);
var res_time = JSON.parse(restimeString);
var res_nperson = JSON.parse(npersonString);




document.getElementById('nperson').value = res_nperson;
document.getElementById('resvenue').value=res_place;
document.getElementById('restime').value=res_time;

// razorpay
