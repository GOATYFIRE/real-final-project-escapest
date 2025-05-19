// header 

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".header").style.fontSize = "20px";
    document.querySelector(".header").style.height = "85px"
  } else {
    document.querySelector(".header").style.fontSize = "30px";
    document.querySelector(".header").style.height = "170px"
  }
}

function moveimg() {
  var image = document.getElementById("imge");
  image.classList.add("move");
  image.style.transform = "translateX(-490px)";
  image.style.transition = "1.6s"
  // alert("hello")

}

function moveright() {
  var image = document.getElementById("imge");
  image.style.transform = "translateX(0px)";
  image.classList.remove("move")
}


var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

function alert() {
  window.location.reload();
}