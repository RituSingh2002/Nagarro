$(document).ready(function(){
    var toggle=true;
    var validation=false;

    $('.clicks').on('click',function(){
        if(toggle){
        $('#box').addClass('show');
        toggle=false;
        }
        else{
             
            $('#box').removeClass('show');
            toggle=true;
        }
        $('.submission1').on('click',function(){
       $('#box').removeClass('show');
    })
    })
    // if(validation){
    // $('.submission').on('click',function(){
    //     $('#box').removeClass('show');
    // })
    

})
$('.submission').on('click',function(){
    username_validation();
        email_validation();
        if(error && email_error)
        $('#box').removeClass('show');
        console.log(error);
        console.log(email_error);
      
    
})
 
 
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    var error=true;
    var email_error=true;
 
    $('#username').keyup(function(){
        username_validation();
    });
    
    function username_validation(){
        var username_val=$('#username').val();
    if(username_val.length==''){
        $('#usernamevalidation').show();
        $('#usernamevalidation').html('Username cannot be empty');
        $('#usernamevalidation').css('color','red');
        error=false;
        return false;
    }
    else{
        $('#usernamevalidation').hide();
    }
    
    if(username_val.length<3 || username_val.length>10){
        $('#usernamevalidation').show();
        $('#usernamevalidation').html('Invalid Username');
        $('#usernamevalidation').css('color','red');
        error=false;
        return false;
    }
    else{
        $('#usernamevalidation').hide();
        error=true;
    }
    }
    
    $('#email').keyup(function(){
    email_validation();
    });
    
    var emailregex = new RegExp(/^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/);
    
    function email_validation(){
        var email= $('#email').val();
        if(email.length==""){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email cannot be empty');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
        else{
            $('#emailvalidation').hide();
        }
    
        if(emailregex.test(email)){
            $('#emailvalidation').hide();  
            email_error=true;   
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Enter a valid email id');
            $('#emailvalidation').css('color','red');
            email_error=false;
            return false;
        }
    }
    