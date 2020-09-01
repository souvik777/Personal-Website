var modal19 = document.getElementById('myModal19');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img19 = document.getElementById('myImg19');
var modalImg19 = document.getElementById("img019");
var captionText19 = document.getElementById("caption19");
img19.onclick = function(){
    modal19.style.display = "block";
    modalImg19.src = this.src;
    captionText19.innerHTML = this.alt;
}

function closeModal19() {
  document.getElementById('myModal19').style.display = "none";
}
