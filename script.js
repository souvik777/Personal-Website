var body = document.body;


function color_change () {
  var number_one = 245;
  var number_two = 229;
  var number_three =27;
  body.style.backgroundColor =  `rgb(${number_one}, ${number_two}, ${number_three})`
}
color_change();
body.style.color = 'white';


var auto_color = setInterval(color_change, 10000);

