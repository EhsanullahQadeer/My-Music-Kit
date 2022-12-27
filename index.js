var numberOfDrumButtons=document.querySelectorAll(".drum").length;
var tom=null;
for(var i=0;i<numberOfDrumButtons; i++ ){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHTML= this.innerHTML;
    makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress",function(event){

makeSound(event.key);
buttonAnimation(event.key);
});

function makeSound(key){
  if(tom)
  {
    tom.pause();
  }
  switch(key){
    case "a":
    tom = new Audio("sounds/tom-1.mp3");
    tom.play();

    break;
    case "b":
    tom = new Audio("sounds/tom-2.mp3");
    tom.play();
    break;
    case "c":
    tom = new Audio("sounds/tom-3.mp3");
    tom.play();
    break;
    case "d":
    tom = new Audio("sounds/tom-4.mp3");
    tom.play();
    break;
    case "e":
    tom = new Audio("sounds/snare.mp3");
    tom.play();
    break;
    case "f":
    tom = new Audio("sounds/crash.mp3");
    tom.play();
    break;
  }
}

function buttonAnimation(currentKey){
  var activeButton =document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");} , 150);
}
