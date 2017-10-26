function initMap() {
  var downtown = {lat: 45.494748, lng: -73.577903};
  var plamendon = {lat: 45.495586, lng: -73.640026};
  var map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 13,
    center: downtown
  });
  var map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 12,
    center: plamendon
  });

  var marker = new google.maps.Marker({
    position: downtown,
    map: map1,
    animation: google.maps.Animation.BOUNCE,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'


  });
  
  var marker = new google.maps.Marker({
    position: plamendon,
    map: map2,
    animation: google.maps.Animation.BOUNCE,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'

  });
}
