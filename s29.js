var modal29 = document.getElementById('myModal29');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img29 = document.getElementById('myImg29');
var modalImg29 = document.getElementById("img029");
var captionText29 = document.getElementById("caption29");
img29.onclick = function(){
    modal29.style.display = "block";
    modalImg29.src = this.src;
    captionText29.innerHTML = this.alt;
}
function closeModal29() {
  document.getElementById('myModal29').style.display = "none";
}



