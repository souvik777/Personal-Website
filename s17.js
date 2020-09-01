var modal17 = document.getElementById('myModal17');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img17 = document.getElementById('myImg17');
var modalImg17 = document.getElementById("img017");
var captionText17 = document.getElementById("caption17");
img17.onclick = function(){
    modal17.style.display = "block";
    modalImg17.src = this.src;
    captionText17.innerHTML = this.alt;
}

function closeModal17() {
  document.getElementById('myModal17').style.display = "none";
}