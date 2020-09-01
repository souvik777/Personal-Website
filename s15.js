var modal15 = document.getElementById('myModal15');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img15 = document.getElementById('myImg15');
var modalImg15 = document.getElementById("img015");
var captionText15 = document.getElementById("caption15");
img15.onclick = function(){
    modal15.style.display = "block";
    modalImg15.src = this.src;
    captionText15.innerHTML = this.alt;
}

function closeModal15() {
  document.getElementById('myModal15').style.display = "none";
}