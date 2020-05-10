function validate(dayDate){  
var dayDate=document.myform.dayDate.value;  
var monthDate=document.myform.monthDate.value;
var yearDate=document.myform.yearDate.value;
if (isNaN(dayDate)){  
    alert("You must eneter a valid date");
    document.myform.dayDate.focus();
    return false;  
}
if (isNaN(monthDate)){
    alert("You must enter a valid month");
    document.myform.monthDate.focus();
    return false;
}
if (isNaN(yearDate)) {
    alert("Enter a valid year");
    document.myform.yearDate.focus();
    return false;
}
else if (dayDate<1){
    alert("Date cannot be less than 1");
    document.myform.dayDate.focus();
    return false
}
else if (dayDate>31){
    alert("Date cannot be greater than 31")
    document.myform.dayDate.focus();
    return false;
}
else if (monthDate<1){
    alert("Month cannot be less than 1");
    document.myform.monthDate.focus();
    return false;
}
else if (monthDate>12){
    alert("Month cannot be greater than 12");
    document.myform.monthDate.focus();
    return false;
}
else
    return true
}

function newFunction() {
  document.getElementById("dateForm").reset();
}
function calculateDay(){
    var date= parseInt(document.myform.dayDate.value);
    var month = parseInt(document.myform.monthDate.value);
    var yearDate = document.myform.yearDate.value;
    var centuary= parseInt(yearDate.substr(0,2));
    var year = parseInt(yearDate.substr(2,4));
    var gender= document.myform.mygender.value;
    alert(centuary);
    
    
}