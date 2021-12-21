var map;
var marker;
//var marker1;
//var marker2;

//var currentInfoWindow = null;

//var place_cafe = [], place_famires = [], place_hamburger = [], place_karaoke = [], place_netcafe = [];
//var markers_cafe = [], markers_famires = [], markers_hamburger = [], markers_karaoke = [], markers_netcafe = []; 

function initialize() {
  var latlng = new google.maps.LatLng(35.69092, 139.7002579);
  var opts = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), opts);
  
  var m_latlng = new google.maps.LatLng(place_cafe[1].lat,place_cafe[1].lng);
  marker = new google.maps.Marker({
    position: m_latlng,
    title: place[1].name
  });
}
  //var m_latlng1 = new google.maps.LatLng(33.965074,130.952654);
  //marker1 = new google.maps.Marker({
    //position: m_latlng1
  //});

  //var m_latlng2 = new google.maps.LatLng(33.958739,130.964155);
  //marker2 = new google.maps.Marker({
    //position: m_latlng2
  //});
//}

//function initMap() {
  //var target = document.getElementById('map');  
  //var latlng = { lat: 35.69092, lng: 139.7002579 };
  //map = new google.maps.Map(document.getElementById('map'), {
    //center: latlng,
    //zoom: 16
  //});
  //createData(shinjuku_data.results);
  
  //var m_latlng1 = new google.maps.LatLng(33.965074,130.952654);
  //marker1 = new google.maps.Marker({
    //position: m_latlng1
  //});

  //var m_latlng2 = new google.maps.LatLng(33.958739,130.964155);
  //marker2 = new google.maps.Marker({
    //position: m_latlng2
  //});
  
  //marker1 = new google.maps.Marker({
    //position: { lat:place_cafe[1].lat, lng:place_cafe[1].lng },
    //title: place[1].name
  //});
//}


//function doOpen() {
  //marker1.setMap(map);
  //marker2.setMap(map);
  //for(int i=0; i<markers_cafe.length; i++){
    //markers_cafe[0].setMap(map);
  //}
//}

//function doClose() {
  //marker1.setMap(null);
  //marker2.setMap(null);
  //for(int i=0; i<markers_cafe.length; i++){
    //markers_cafe[i].setMap(null);
  //}
//}
