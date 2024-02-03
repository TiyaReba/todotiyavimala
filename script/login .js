function validate(callback){
    //Call redirect only when validation is successful
    let username= document.getElementById("username");
    let password= document.getElementById("password");
    
    if(username.value.trim()=="admin" && password.value.trim()=="12345"){
        callback();
    }
    else{
        alert("Invalid credentials");
        return false;
    }
    }
    
    function redirect(){
        // redirect page to todolist.html
        window.location.href="../main.html";
    }
    
    var displaylist = ()=>{
        console.log("clicked")

    }