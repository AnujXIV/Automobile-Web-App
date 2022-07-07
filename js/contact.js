// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

window.initMap = initMap;

$("#message").click(function() {
    $(this).toggleClass("active");
    $("#store").removeClass("active");
    $("#contact").removeClass("active");

    $(".wrapper-message").show();
    $(".wrapper-find").hide();
    $(".wrapper-contact").hide();
})

$("#store").click(function() {
    $("#message").removeClass("active");
    $(this).toggleClass("active");
    $("#contact").removeClass("active");

    $(".wrapper-message").hide();
    $(".wrapper-find").show();
    $(".wrapper-contact").hide();
})

$("#contact").click(function() {
    $("#message").removeClass("active");
    $("#store").removeClass("active");
    $(this).toggleClass("active");

    $(".wrapper-message").hide();
    $(".wrapper-find").hide();
    $(".wrapper-contact").show();
})