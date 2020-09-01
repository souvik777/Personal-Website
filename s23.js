var modal23 = document.getElementById('myModal23');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img23 = document.getElementById('myImg23');
var modalImg23 = document.getElementById("img023");
var captionText23 = document.getElementById("caption23");
img23.onclick = function(){
    modal23.style.display = "block";
    modalImg23.src = this.src;
    captionText23.innerHTML = this.alt;
}
function closeModal23() {
  document.getElementById('myModal23').style.display = "none";
}
