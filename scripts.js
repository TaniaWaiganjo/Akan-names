function takevalue(){
    var gender=document.getElementById("Gender").value;
    var date=document.getElementById("Date").value;
    var month=document.getElementById("Month").value;
    var year=document.getElementById("Year").value;
}



var cc=year.charAt(0)+year.charAt(1)
var yy=year.charAt(2)+year.charAt(3)



var day= ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(month+1)/10)) + date ) % 7



if (gender == "male" && day == 1) {

} 





   










