var modal13 = document.getElementById('myModal13');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img13 = document.getElementById('myImg13');
var modalImg13 = document.getElementById("img013");
var captionText13 = document.getElementById("caption13");
img13.onclick = function(){
    modal13.style.display = "block";
    modalImg13.src = this.src;
    captionText13.innerHTML = this.alt;
}
function closeModal13() {
  document.getElementById('myModal13').style.display = "none";
}

