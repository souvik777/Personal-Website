var modal30 = document.getElementById('myModal30');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img30 = document.getElementById('myImg30');
var modalImg30 = document.getElementById("img030");
var captionText30 = document.getElementById("caption30");
img30.onclick = function(){
    modal30.style.display = "block";
    modalImg30.src = this.src;
    captionText30.innerHTML = this.alt;
}
function closeModal30() {
  document.getElementById('myModal30').style.display = "none";
}

