var modal14 = document.getElementById('myModal14');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img14 = document.getElementById('myImg14');
var modalImg14 = document.getElementById("img014");
var captionText14 = document.getElementById("caption14");
img14.onclick = function(){
    modal14.style.display = "block";
    modalImg14.src = this.src;
    captionText14.innerHTML = this.alt;
}

function closeModal14() {
  document.getElementById('myModal14').style.display = "none";
}