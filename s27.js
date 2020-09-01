var modal27 = document.getElementById('myModal27');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img27 = document.getElementById('myImg27');
var modalImg27 = document.getElementById("img027");
var captionText27 = document.getElementById("caption27");
img27.onclick = function(){
    modal27.style.display = "block";
    modalImg27.src = this.src;
    captionText27.innerHTML = this.alt;
}
function closeModal27() {
  document.getElementById('myModal27').style.display = "none";
}


