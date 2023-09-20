var err;

function validate_fullname(){
     var fullname = document.getElementById("fullname").value;

    if(fullname.length < 1){
        err.innerHTML = "Full name must not be empty";
        return false;
    }

    return true;
}

function check_email(email){
    for(let i = 0; i < email.length; i++){
        if(email.charAt(i) == '@'){
            return true;
        }
    }
    
    return false;
}

function validate_email(){
    var email = document.getElementById("email").value;

    if(email.length < 1){
        err.innerHTML = "Email must not be empty";
        return false;
    }

    if(!email.endsWith(".com")){
        err.innerHTML = "Email must ends with .com";
        return false;
    }

    if(check_email(email) == false){
        return false;
    }

    return true;
}

function validate_gender(){
    var gender = document.getElementById("gender").value;

    if(gender != "male" && gender != "Male" && gender != "female" && gender != "Female"){
        err.innerHTML = "Gender must be between male or female [case insensitive]";
        return false;
    }

    return true;
}

function validate_address(){
    var address = document.getElementById("input_address").value;

    if(!address.includes("street")){
        err.innerHTML = 'address must include ""street"';
        return false;
    }

    return true;
}

function validate_checkbox(){
    var agree = document.getElementById("get-daily-letter").checked;
    
    if(!agree){
        err.innerHTML = "you must agree to get daily letter"
        return false;
    }

    return true;
}

function on_submit(){
    err = document.getElementById("error");
    if(validate_fullname() == false){
        return;
    }
    else if(validate_email() == false){
        return;
    }
    else if(validate_gender() == false){
        return;
    }
    else if(validate_address() == false){
        return;
    }
    else if(validate_checkbox() == false){
        return;
    }
    else{
        err.innerHTML = "";
    }
}