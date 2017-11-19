function initMap() {
        var uluru = {lat: 17.448019759651796, lng:78.34837943565503 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru

        });
        var marker = new google.maps.Marker({
          position :uluru,
          map: map
        });
      }
function selectRedirect(selectBlog) {
    var newLink = selectBlog.value;
    window.location= newLink;
  }
function fade(id)
  {
    document.getElementById(id).style.animation="4s linear 0s 1 fadein" ;  
  }
