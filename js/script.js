
function validate(){

    if(nameValidate()==true && emailValidate()==true && mobileValidate()==true && messageValidate()==true){
    
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbxo1GYFUCUXozYQctxpFO-yQj45wFM3sz0WXhVb97VF5q4js3WZNGW9biduwJ4zYgD2Fg/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                //window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Please enter the values")
    
            }
        })
    
      }
    }
    
    
    function nameValidate(){
      var varname = $('#name').val();
      var pattern = /[a-zA-Z\s]+/;
    
      if(varname==" "){
        $('#errormsg').html("Name is mandatory");
        return false;
      }else if(varname.match(pattern)){
        $('#errormsg').html("");
        return true;
      }else{
        $('#errormsg').html("Enter correct name");
        return false;
      }
    }
    
    function emailValidate(){
      var varEmail = $('#email').val();
      var emailPattern = /^[a-zA-Z0-9.!#$%&+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    
      if(varEmail==""){
        $('#errormsg1').html("Email is mandatory");
        return false;
      }else if(varEmail.match(emailPattern)){
        $('#errormsg1').html("");
        return true;
      }else{
        $('#errormsg1').html("Enter correct Email");
        return false;
      }
    
    }
    
    function mobileValidate(){
      var varMobile = $('#number').val();
      var mobilePattern = /^\d{10}$/;
    
      if(varMobile==""){
        $('#errormsg2').html("Contact number is mandatory");
        return false;
      }else if(varMobile.match(mobilePattern)){
        $('#errormsg2').html("");
        return true;
      }
      else if(varMobile.length<10 ||varMobile.length>=10){
        $('#errormsg2').html("Number should be 10 digits");
      }
      else{
        $('#errormsg2').html("Enter valid Contact number");
        return false;
      }
    }
    
    function messageValidate(){
      var varMessage = $('#msg').val();
    
      if(varMessage==""){
        $('#errormsg3').html("Enter something please");
        return false;
      }else {
        $('#errormsg3').html("");
        return true;
      }
    }
