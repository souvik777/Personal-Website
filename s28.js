var modal28 = document.getElementById('myModal28');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img28 = document.getElementById('myImg28');
var modalImg28 = document.getElementById("img028");
var captionText28 = document.getElementById("caption28");
img28.onclick = function(){
    modal28.style.display = "block";
    modalImg28.src = this.src;
    captionText28.innerHTML = this.alt;
}
function closeModal28() {
  document.getElementById('myModal28').style.display = "none";
}



