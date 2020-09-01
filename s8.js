var modal8 = document.getElementById('myModal8');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img8 = document.getElementById('myImg8');
var modalImg8 = document.getElementById("img08");
var captionText8 = document.getElementById("caption8");
img8.onclick = function(){
    modal8.style.display = "block";
    modalImg8.src = this.src;
    captionText8.innerHTML = this.alt;
}
function closeModal8() {
  document.getElementById('myModal8').style.display = "none";
}