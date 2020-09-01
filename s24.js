var modal24 = document.getElementById('myModal24');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img24 = document.getElementById('myImg24');
var modalImg24 = document.getElementById("img024");
var captionText24 = document.getElementById("caption24");
img24.onclick = function(){
    modal24.style.display = "block";
    modalImg24.src = this.src;
    captionText24.innerHTML = this.alt;
}
function closeModal24() {
  document.getElementById('myModal24').style.display = "none";
}



