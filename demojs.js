function validateForm(){
//-------------------------------- First Name ----------------------------------------------------
    var fname= document.forms.myForm2.firstname.value;
    fname=fname.toLowerCase();
    
    
    if(fname.match(/^[a-z]{1}/g) == null ){
        alert("*First Name should start with character");
        return false;
    }
    else if(fname.match(/[^ a-z 0-9]/g) != null){
        alert("*First Name should not contain any special character");
        return false;
    }
//-------------------------------- Last Name ---------------------------------------------------
    var lname= document.forms.myForm2.lastname.value;
    lname=lname.toLowerCase();
    
    
    if(lname.match(/^[a-z]{1}/g) == null ){
        alert("*Last Name should start with character");
        return false;
    }

    else if(lname.match(/[^a-z 0-9]/g) != null){
        alert("*Last Name should not contain any special character");
        return false;
    }

//---------------------------------------email -------------------------------------
    var email = document.forms.myForm2.email.value.toLowerCase();
    
    if((email.length>25)){
        alert("*Enter a 25 character email Id");
        return false;
    }
    else if(email.match(/^[a-z]{1}/g) == null)
    {
        alert("*Email should start with character");
        return false; 
    }
    else if(email.match(/[^ _.@ a-z 0-9]/g) != null){
        alert("*Email should not contain special character");
        return false;
    }
//---------------------------------------mobile number -------------------------------------
    var mob = document.forms.myForm2.mob.value;

    if(isNaN(mob) || !(mob.length==10)){
        alert("*Please enter numeric value or 10 digits are mandetory for Mobile Number");
        return false;
    }

//---------------------------------------Gender -------------------------------------
    var gender = document.forms.myForm2.gender.value;

    if(gender == "select gender"){
        alert("*Please select Male or Female or Other");
        return false;
    }

//---------------------------------------Zipcode -------------------------------------
    var zipcode = document.forms.myForm2.zipcode.value;

    if(isNaN(zipcode) || !(zipcode.length==6)){
        alert("*Please enter numeric value or 6 digits are mandetory for zipcode");
        return false;
    }

//-------------------------------- password----------------------------------------------------
    var pass= document.forms.myForm2.pass.value;
    
    var reg=/[a-z]/g;
    var reg1=/[_.@/*&!#$%^()-+="\|' ]/g;
    var reg2=/[A-Z]/g;
    var reg3=/[0-9]/g;

    if (pass.length<6 && pass.length>12){
        alert("Password length should be in between 6-12");
        return false;
    }
    
    else if((pass.match(reg) == null) || (pass.match(reg1) == null) || (pass.match(reg2) == null) || (pass.match(reg3) == null ))
    {
        alert("*Password must contain atleast one character of A-Z, a-z, 0-9, _.@/*&!#$%^()-+=\"'\| ");
        return false;
    }
    

//---------------------------------------confirm password -------------------------------------
    var cpass= document.forms.myForm2.cpass.value;
    if(pass != cpass){
        alert("Password did not matched");
        return false;
    }

//---------------------------------------dob and age -------------------------------------
    
}

function calcAge(){
    
    var userinput = document.forms.myForm2.dob.value;
    var dob = new Date(userinput);
    if(userinput==null || userinput=='') {
        alert("*Choose a date please"); 
        return false; 
    } else {
        var month_diff = Date.now() - dob.getTime();
        var age_dt = new Date(month_diff); 
        var year = age_dt.getUTCFullYear();
        var age = Math.abs(year - 1970);
        document.forms["myForm2"]["age"].value = age;
    }
}




