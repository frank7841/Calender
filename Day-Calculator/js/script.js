function validate(){  
var dayDate=document.myform.dayDate.value;  
var monthDate=document.myform.monthDate.value;
var yearDate=document.myform.yearDate.value;
if (isNaN(dayDate,monthDate)){  
alert("You must eneter a number");
return false;  
}
else
return true
}