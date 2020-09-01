var modal7 = document.getElementById('myModal7');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img7 = document.getElementById('myImg7');
var modalImg7 = document.getElementById("img07");
var captionText7 = document.getElementById("caption7");
img7.onclick = function(){
    modal7.style.display = "block";
    modalImg7.src = this.src;
    captionText7.innerHTML = this.alt;
}
function closeModal7() {
  document.getElementById('myModal7').style.display = "none";
}