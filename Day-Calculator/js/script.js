function validate(dayDate){  
var dayDate=document.myform.dayDate.value;  
var monthDate=document.myform.monthDate.value;
var yearDate=document.myform.yearDate.value;
if (isNaN(dayDate,monthDate,yearDate)){  
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

else
return true
}