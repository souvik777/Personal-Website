var modal21 = document.getElementById('myModal21');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img21 = document.getElementById('myImg21');
var modalImg21 = document.getElementById("img021");
var captionText21 = document.getElementById("caption21");
img21.onclick = function(){
    modal21.style.display = "block";
    modalImg21.src = this.src;
    captionText21.innerHTML = this.alt;
}
function closeModal21() {
  document.getElementById('myModal21').style.display = "none";
}
