function postSmoothie(){ 

var smoothie= document.getElementById("smoothie");
var ingredient1= document.getElementById("ingredient1");
var ingredient2= document.getElementById("ingredient2");
var ingredient3= document.getElementById("ingredient3");
var ingredient4= document.getElementById("ingredient4");
var ingredient5= document.getElementById("ingredient5");

var style= document.createElement("H1");
var print= document.createTextNode(smoothie.value);
style.appendChild(print);
document.body.appendChild(style);

var style1= document.createElement("p");
var print1= document.createTextNode(ingredient1.value);
style1.appendChild(print1);
document.body.appendChild(style1);

var style2= document.createElement("p");
var print2= document.createTextNode(ingredient2.value);
style2.appendChild(print2);
document.body.appendChild(style2);

var style3= document.createElement("p");
var print3= document.createTextNode(ingredient3.value);
style3.appendChild(print3);
document.body.appendChild(style3);

var style4= document.createElement("p");
var print4= document.createTextNode(ingredient4.value);
style4.appendChild(print4);
document.body.appendChild(style4);

var style5= document.createElement("p");
var print5= document.createTextNode(ingredient5.value);
style5.appendChild(print5);
document.body.appendChild(style5);

}
