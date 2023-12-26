function handleClick0(){
    var audio = new Audio('./sounds/crash.mp3');
    audio.play();
}
function handleClick1(){
    var audio = new Audio('./sounds/kick-bass.mp3');
    audio.play();
}
function handleClick2(){
    var audio = new Audio('./sounds/snare.mp3');
    audio.play();
}
function handleClick3(){
    var audio = new Audio('./sounds/tom-1.mp3');
    audio.play();
}
function handleClick4(){
    var audio = new Audio('./sounds/tom-2.mp3');
    audio.play();
}
function handleClick5(){
    var audio = new Audio('./sounds/tom-3.mp3');
    audio.play();
}
function handleClick6(){
    var audio = new Audio('./sounds/tom-4.mp3');
    audio.play();
}

document.querySelectorAll("button")[0].addEventListener("click",handleClick0);
document.querySelectorAll("button")[1].addEventListener("click",handleClick1);
document.querySelectorAll("button")[2].addEventListener("click",handleClick2);
document.querySelectorAll("button")[3].addEventListener("click",handleClick3);
document.querySelectorAll("button")[4].addEventListener("click",handleClick4);
document.querySelectorAll("button")[5].addEventListener("click",handleClick5);
document.querySelectorAll("button")[6].addEventListener("click",handleClick6);

document.addEventListener('keydown', function(event) {
    if (event.key === 'w' || event.key === 'W') {
       handleClick0();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
       handleClick1();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
       handleClick2();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
       handleClick3();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'j' || event.key === 'J') {
       handleClick4();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'k' || event.key === 'K') {
       handleClick5();
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'l' || event.key === 'L') {
       handleClick6();
    }
  });

