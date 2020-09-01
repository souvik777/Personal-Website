var modal9 = document.getElementById('myModal9');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img9 = document.getElementById('myImg9');
var modalImg9 = document.getElementById("img09");
var captionText9 = document.getElementById("caption9");
img9.onclick = function(){
    modal9.style.display = "block";
    modalImg9.src = this.src;
    captionText9.innerHTML = this.alt;
}

function closeModal9() {
  document.getElementById('myModal9').style.display = "none";
}