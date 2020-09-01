var modal22 = document.getElementById('myModal22');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img22 = document.getElementById('myImg22');
var modalImg22 = document.getElementById("img022");
var captionText22 = document.getElementById("caption22");
img22.onclick = function(){
    modal22.style.display = "block";
    modalImg22.src = this.src;
    captionText22.innerHTML = this.alt;
}
function closeModal22() {
  document.getElementById('myModal22').style.display = "none";
}

