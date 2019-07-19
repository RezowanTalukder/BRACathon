function initMap() {
    var broadway = {
      info:
        '<strong>Chipotle on Broadway</strong><br>\
          5224 N Broadway St<br> Chicago, IL 60640<br>\
          <a href="bonogram.html">VO Details</a>',
      lat: 23.1397,
      long: 90.394,
    }
  
    var belmont = {
      info:
        '<strong>Chipotle on Belmont</strong><br>\
          1025 W Belmont Ave<br> Chicago, IL 60657<br>\
          <a href="bonogram.html">VO Details</a>',
          lat: 23.0397,
          long: 90.594,
    }
  
    var sheridan = {
      info:
        '<strong>Mirpur Branch 3</strong><br>\r\
          Md Tanvir Rahman<br> Money Collector<br>Performance: 90%<br>\
          <a href="bonogram.html">VO Details</a>',
          lat: 23.1397,
          long: 90.594,
    }

    var broadway2 = {
      info:
        '<strong>Chipotle on Broadway</strong><br>\
          5224 N Broadway St<br> Chicago, IL 60640<br>\
          <a href="bonogram.html">VO Details</a>', 
          lat: 23.3397,
          long: 90.194,
    }
  
    var belmont2 = {
      info:
        '<strong>Chipotle on Belmont</strong><br>\
          1025 W Belmont Ave<br> Chicago, IL 60657<br>\
          <a href="bonogram.html">VO Details</a>',
          lat: 23.0197,
          long: 90.494,
    }
  
    var sheridan2 = {
      info:
        '<strong>Mirpur Branch 3</strong><br>\r\
          Md Tanvir Rahman<br> Money Collector<br>Performance: 90%<br>\
          <a href="bonogram.html">VO Details</a>',
          lat: 23.1697,
          long: 90.5194,
    }


    var green_icon = {
    url: 'icon.png', // url
    scaledSize: new google.maps.Size(60, 60), // scaled size
    origin: new google.maps.Point(0,0), // origin
    anchor: new google.maps.Point(0, 0) // anchor
    };

  
    var locations = [
      [broadway.info, broadway.lat, broadway.long, 0],
      [belmont.info, belmont.lat, belmont.long, 1],
      [sheridan.info, sheridan.lat, sheridan.long, 2],
      [broadway2.info, broadway2.lat, broadway2.long, 3],
      [belmont2.info, belmont2.lat, belmont2.long, 4],
      [sheridan2.info, sheridan2.lat, sheridan2.long, 5],
    ]
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(23.1397, 90.594),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      icon:green_icon
    })

    
  
    var infowindow = new google.maps.InfoWindow({})
  
    var marker, i
  
   

      for (i = 0; i < locations.length; i++) {

        if(i%2){

          marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        icon: green_icon,

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
        else{

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
  }