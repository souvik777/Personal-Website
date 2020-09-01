var modal6 = document.getElementById('myModal6');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img6 = document.getElementById('myImg6');
var modalImg6 = document.getElementById("img06");
var captionText6 = document.getElementById("caption6");
img6.onclick = function(){
    modal6.style.display = "block";
    modalImg6.src = this.src;
    captionText6.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
function closeModal6() {
  document.getElementById('myModal6').style.display = "none";
}
