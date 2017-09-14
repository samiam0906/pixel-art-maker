var selectBox1 = document.querySelector('#box1');
selectBox1.addEventListener('click', function() {
  selectBox1.classList.toggle("red");
})

var selectBox2 = document.querySelector('#box2');
selectBox2.addEventListener('click', function() {
  selectBox2.classList.toggle("red");
})

var selectBox3 = document.querySelector('#box3');
selectBox3.addEventListener('click', function() {
  selectBox3.classList.toggle("red");
})

var selectBox4 = document.querySelector('#box4');
selectBox4.addEventListener('click', function() {
  selectBox4.classList.toggle("red");
})

var paletteSelect = document.querySelector('#palette');
paletteSelect.addEventListener('click', function(e) {
  if (e.target.matches('.color1')) {
    e.target.classList.toggle("red");
    console.log("Hi Red");
  }
  if (e.target.matches('.color2')) {
    e.target.classList.toggle("blue");
    console.log("Hi Blue");
  }
})
