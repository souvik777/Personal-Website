var modal20 = document.getElementById('myModal20');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img20 = document.getElementById('myImg20');
var modalImg20 = document.getElementById("img020");
var captionText20 = document.getElementById("caption20");
img20.onclick = function(){
    modal20.style.display = "block";
    modalImg20.src = this.src;
    captionText20.innerHTML = this.alt;
}
function closeModal20() {
  document.getElementById('myModal20').style.display = "none";
}

