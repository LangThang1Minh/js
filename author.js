// tap author
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* copi noi dung chia se */
function copishare() {
  var copyText = document.getElementById("input-share");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
/* open bank tab */
function myFunction() {
  var x = document.getElementById("banktab");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// hien thi modal
function momodal(){
document.getElementById("nenmodal-1").classList.toggle("active");
}
// hien status
function status(){
document.getElementById("nenstatus-1").classList.toggle("active");
}
// zoom avatar
var imgmodal = document.getElementById("nenimg");
var img = document.getElementById("showimg");
var captionText = document.getElementById("caption");
img.onclick = function(){
  imgmodal.style.display = "block";
}
var span = document.getElementsByClassName("dongimg")[0];
span.onclick = function() { 
  imgmodal.style.display = "none";
}
