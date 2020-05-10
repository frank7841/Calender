/*function validate(dayDate){  
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
}*/

function newFunction() {
  document.getElementById("dateForm").reset();
}
function calculateDay(){
    var dayDate=document.myform.dayDate.value;  
    var monthDate=document.myform.monthDate.value;
    var yearDate=document.myform.yearDate.value;
    var date= parseInt(document.myform.dayDate.value);
    var month = parseInt(document.myform.monthDate.value);
    var yearDate = document.myform.yearDate.value;
    var centuary= parseInt(yearDate.substr(0,2));
    var year = parseInt(yearDate.substr(2,4));
    var gender= document.myform.mygender.value;
    var akanNames=["Kwasi", "Kwandwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var weekDay=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = Math.trunc((((centuary/4)-2*centuary-1)+((5*year/4))+((26*(month+1)/10))+date)%7);
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
    if (day==0 && gender==="male"){
        alert(" Your Akan Name is " + akanNames[0]);
    }
    else if (day==1 && gender==="male"){
        alert("Your Akan name is "+ akanNames[1]);
    }
    else if (day===2 && gender==="male"){
        alert("You Akan name is "+ akanNames[2]);
    }
    else if (day===3 && gender==="male"){
        alert("Your Akan name is "+ akanNames[3]);
    }
    else if (day===4&& gender==="male"){
        alert("You Akan name is "+ akanNames[4]);
    }
    else if (day===5 && gender==="male"){
        alert("Your Akan name is "+ akanNames[5]);
    }
    else if (day===6 && gender==="male"){
        alert("Your Akan name is "+akanNames[6]);
    }
    else if (day===0 && gender==="female"){
        alert("Your Akan name is "+ akanNames[7]);
    }
    else if (day===1 && gender==="female"){
        alert("Your Akan name is "+ akanNames[8]);
    }
    else if (day===2 && gender==="female"){
        alert("Your Akan name is "+ akanNames[9]);
    }
    else if (day===3 && gender==="female"){
        alert("Your Akan name is "+ akanNames[10]);
    }
    else if (day===4 && gender==="female"){
        alert("Your Akan naem is "+ akanNames[11]);
    }
    else if (day ===5 && gender==="female"){
        alert("Your Akan name is "+ akanNames[12]);
    }
    else if (day===6 && gender==="female"){
        alert("Your Akan name is "+ akanNames[13]);
    }
    else
    alert("Invalid date");   
}