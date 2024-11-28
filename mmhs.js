var pass = document.getElementById("p")

var img = document.getElementById("i")

img.onclick= function(){

var img_val= img.getAttribute("src")

var pass_type = pass.getAttribute("type")

if(img_val == "3.png"){

img.setAttribute("src", "2.png")

pass.setAttribute("type", "text")

}

else{

img.setAttribute("src", "3.png") 
pass.setAttribute("type","password")
}}