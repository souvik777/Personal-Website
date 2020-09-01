var modal12 = document.getElementById('myModal12');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img12 = document.getElementById('myImg12');
var modalImg12 = document.getElementById("img012");
var captionText12 = document.getElementById("caption12");
img12.onclick = function(){
    modal12.style.display = "block";
    modalImg12.src = this.src;
    captionText12.innerHTML = this.alt;
}

function closeModal12() {
  document.getElementById('myModal12').style.display = "none";
}

