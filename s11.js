var modal11 = document.getElementById('myModal11');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img11 = document.getElementById('myImg11');
var modalImg11 = document.getElementById("img011");
var captionText11 = document.getElementById("caption11");
img11.onclick = function(){
    modal11.style.display = "block";
    modalImg11.src = this.src;
    captionText11.innerHTML = this.alt;
}
function closeModal11() {
  document.getElementById('myModal11').style.display = "none";
}

