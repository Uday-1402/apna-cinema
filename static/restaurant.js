/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";

}


/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
function scrl(element) {
    window.scrollTo(0, 2080);
}
function scrol(element) {
    window.scrollTo(0, 750);
}



var selseat = 0;
function select(element) {
    var seatsrc = element.src;
    seatsrc = seatsrc.slice(21)
    if (seatsrc === "/static/pic/restaurant/vacant.png") {
        selseat = selseat + 4;
        element.src = "/static/pic/restaurant/selected.png";
        if (selseat != 0) {
            document.getElementById("allInfo").style.display = "block";

        }
    }
    else if (seatsrc === "/static/pic/restaurant/selected.png") {

        selseat = selseat - 4;
        selseat = selseat < 0 ? 0 : selseat;

        element.src = "/static/pic/restaurant/vacant.png";

    }
    var nperson = document.getElementById("nperson");
    $('#nperson').val(selseat);
    $('#nperson').change();

    if (selseat == 0) {
        document.getElementById("allInfo").style.display = "none";

    }

}

function pay() {
    var place = document.getElementById("place").value;
    var time = document.getElementById("time").value;
    var person = document.getElementById("nperson").value;



    sessionStorage.setItem('resplace', JSON.stringify(place));
    sessionStorage.setItem('restime', JSON.stringify(time));
    sessionStorage.setItem('resperson', JSON.stringify(person));



    window.location.href = "/paymentpage.ejs"

}
function scrl(element) {
    window.scrollTo(0, 2080);
}
function scrol(element) {
    window.scrollTo(0, 750);
}
$('body').append('<div style="" id="loadingDiv"><div class="loader"></div></div>');
setTimeout(() => { removeLoader(); }, 1000)
function removeLoader() {
    document.getElementById('loadingDiv').remove();

}
function removeInfo() {
    var box = document.getElementById("allInfo");
    box.removeChild(box.firstElementChild);
    box.removeChild(box.firstElementChild);

}

//no of person
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        selseat=selseat-1;
        selseat = selseat < 0 ? 0 : selseat;
        $('#nperson').val(selseat);
        $('#nperson').change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        selseat=selseat+1;

        $('#nperson').val(selseat);
        $('#nperson').change();
        return false;
    });
});