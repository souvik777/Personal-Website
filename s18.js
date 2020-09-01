var modal18 = document.getElementById('myModal18');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img18 = document.getElementById('myImg18');
var modalImg18 = document.getElementById("img018");
var captionText18 = document.getElementById("caption18");
img18.onclick = function(){
    modal18.style.display = "block";
    modalImg18.src = this.src;
    captionText18.innerHTML = this.alt;
}
function closeModal18() {
  document.getElementById('myModal18').style.display = "none";
}

