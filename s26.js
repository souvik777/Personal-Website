var modal26 = document.getElementById('myModal26');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img26 = document.getElementById('myImg26');
var modalImg26 = document.getElementById("img026");
var captionText26 = document.getElementById("caption26");
img26.onclick = function(){
    modal26.style.display = "block";
    modalImg26.src = this.src;
    captionText26.innerHTML = this.alt;
}
function closeModal26() {
  document.getElementById('myModal26').style.display = "none";
}



