var modal5 = document.getElementById('myModal5');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img5 = document.getElementById('myImg5');
var modalImg5 = document.getElementById("img05");
var captionText5 = document.getElementById("caption5");
img5.onclick = function(){
    modal5.style.display = "block";
    modalImg5.src = this.src;
    captionText5.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
function closeModal5() {
  document.getElementById('myModal5').style.display = "none";
}
