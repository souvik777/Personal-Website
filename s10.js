var modal10 = document.getElementById('myModal10');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img10 = document.getElementById('myImg10');
var modalImg10 = document.getElementById("img010");
var captionText10 = document.getElementById("caption10");
img10.onclick = function(){
    modal10.style.display = "block";
    modalImg10.src = this.src;
    captionText10.innerHTML = this.alt;
}

function closeModal10() {
  document.getElementById('myModal10').style.display = "none";
}

