const form= document.getElementById("form");
const gender=document.getElementById("Gender").value;
const date=document.getElementById("Date").value;
const month=document.getElementById("Month").value;
const year=document.getElementById("Year").value;


form.addEventListener('submit',(e) => {
    e.preventDefault();

})

console. log("gender")


var cc=year.charAt(0)+year.charAt(1)
var yy=year.charAt(2)+year.charAt(3)



var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7

var dayOfWeek= day.toFixed(0)

if (gender === "male" && day === "1") {
    var name="kwasi"
}else if (gender==="male" && day=== "2"){
    var name="Kwadwo"
}else if (gender==="male" && day=== "3"){
    var name="Kwabena"
}else if (gender==="male" && day=== "4"){
    var name="Kwaku"
}else if (gender==="male" && day=== "5"){
    var name="Yaw"
}else if (gender==="male" && day=== "6"){
    var name="Kofi"
}else if (gender==="male" && day=== "7"){
    var name="Kwame"
}


if (gender === "female" && day === "1") {
    var name="Akosua"
}else if (gender==="female" && day=== "2"){
    var name="Adwao"
}else if (gender==="female" && day=== "3"){
    var name="Abenaa"
}else if (gender==="female" && day=== "4"){
    var name="Akua"
}else if (gender==="female" && day=== "5"){
    var name="Yaa"
}else if (gender==="female" && day=== "6"){
    var name="Afua"
}else if (gender==="female" && day=== "7"){
    var name="Ama"
}

console .log("name")

document.getElementById("output").innerHTML="Your Akan name is"+"name"

