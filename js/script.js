let Start = document.querySelector("#start");
Start.addEventListener("click" , pullColor);

let blue = document.querySelector("#Blue");
blue.addEventListener("click", Cblue);

let red = document.querySelector("#Red");
red.addEventListener("click", Cred);

let pink = document.querySelector("#Pink");
pink.addEventListener("click", Cpink);


let green = document.querySelector("#Green");
green.addEventListener("click", Cgreen);

let yellow = document.querySelector("#Yellow");
yellow.addEventListener("click", Cyellow);

let white = document.querySelector("#White");
white.addEventListener("click", cWhite);




function Cblue () {
    alert("you choose blue")
    
    
  };
  

function Cred() {
    alert("you choose RED")
  };
  
  function Cpink() {
    alert("you choose PINK")
  };


  

function Cgreen() {
    alert("you choose Green")
  };
  

function Cyellow() {
    alert("you choose Yellow")
  };
  

function cWhite() {
    alert("you choose White")
  };
  













function pullColor(){
    
    //let colorinput = document.querySelector("#color1").value;
   
    
    
    
    
    
    
    
    document.querySelector("#display").innerHTML = Math.ceil (Math.random()*1000);
}
