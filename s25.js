var modal25 = document.getElementById('myModal25');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img25 = document.getElementById('myImg25');
var modalImg25 = document.getElementById("img025");
var captionText25 = document.getElementById("caption25");
img25.onclick = function(){
    modal25.style.display = "block";
    modalImg25.src = this.src;
    captionText25.innerHTML = this.alt;
}
function closeModal25() {
  document.getElementById('myModal25').style.display = "none";
}

