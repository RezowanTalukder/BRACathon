function initMap() {
    var broadway = {
      info:
        '<strong>Chipotle on Broadway</strong><br>\
          5224 N Broadway St<br> Chicago, IL 60640<br>\
          <a href="https://goo.gl/maps/jKNEDz4SyyH2"><b>Get Directions</b></a>',
      lat: 23.1397,
      long: 90.394,
    }
  
    var belmont = {
      info:
        '<strong>Chipotle on Belmont</strong><br>\
          1025 W Belmont Ave<br> Chicago, IL 60657<br>\
          <a href="https://goo.gl/maps/PHfsWTvgKa92">Get Directions</a>',
          lat: 23.0397,
          long: 90.594,
    }
  
    var sheridan = {
      info:
        '<strong>Mirpur Branch 3</strong><br>\r\
          Md Tanvir Rahman<br> Money Collector<br>Performance: 90%<br>\
          <a href="https://goo.gl/maps/QGUrqZPsYp92">Get Directions</a>',
          lat: 23.1397,
          long: 90.594,
    }
  
    var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
    ]
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(23.1397, 90.594),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    })
  
    var infowindow = new google.maps.InfoWindow({})
  
    var marker, i
  
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
      })
  
      google.maps.event.addListener(
        marker,
        'click',
        (function(marker, i) {
          return function() {
            infowindow.setContent(locations[i][0])
            infowindow.open(map, marker)
          }
        })(marker, i)
      )
    }
  }