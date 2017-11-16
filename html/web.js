function rule() {
    var x = document.createElement("IMG");
    x.setAttribute("src", "rule1.png");
    x.setAttribute("id", "rule");
    document.body.appendChild(x);
    document.write("   ");
}
function map() { 
var myCenter = new google.maps.LatLng(17.447891, 78.348589);
function initialize(){
    var mapProp = {
        center:myCenter,
        zoom:12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"),mapProp);

    var marker = new google.maps.Marker({
        position:myCenter,
    });

    marker.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
}
