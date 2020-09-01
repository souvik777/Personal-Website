var modal16 = document.getElementById('myModal16');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img16 = document.getElementById('myImg16');
var modalImg16 = document.getElementById("img016");
var captionText16 = document.getElementById("caption16");
img16.onclick = function(){
    modal16.style.display = "block";
    modalImg16.src = this.src;
    captionText16.innerHTML = this.alt;
}
function closeModal16() {
  document.getElementById('myModal16').style.display = "none";
}

