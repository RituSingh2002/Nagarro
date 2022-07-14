$(document).ready(function(){
    var toggle=true;
    $('.clicks').on('click',function(){
        if(toggle){
        $('#box').addClass('show');
        toggle=false;
        }
        else{
            $('#box').removeClass('show');
            toggle=true;
        }
    })
    $('.submission').on('click',function(){
        $('#box').removeClass('show');
    })
})
$(document).ready(function(){
    $('#usernamevalidation').hide();
    $('#emailvalidation').hide();
    var error=true;
    var email_error=true;
    
    $('#username').keyup(function(){
        username_validation();
    });
    function username_validation()
    {
        var username_val=$('#username').val();
        if(username_val.length=="")
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Required Field');
            $('#usernamevalidation').css('color','orange');
            error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }

        if(username_val.length<5 || username_val.length>=10)
        {
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username must be 5 letters or more');
            $('#usernamevalidation').css('color','red');
            error=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
    }
    $('#email').keyup(function(){
        email_validation();
    });
    function email_validation()
    {
        var email_val=$('#email').val();
        if(email_val.length==0)
        {
            $('#emailvalidation').show();
            $('#emailvalidation').html('Required');
            $('#emailvalidation').css('color','pink');
            error_email=false;
            return false;
        }
        else{
            $('#usernamevalidation').hide();

        }
        var emailregex = /^([\-\.0-9a-zA-Z]+)@([\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        if(emailregex.test(email_val))
        {
            $('#emailvalidation').hide();
        }
        else{
            $('#emailvalidation').show();
            $('#emailvalidation').html('Enter a valid email-id');
            $('#emailvalidation').css('color','black');
            error_email=false;
            return false;
        }
    }
    $('#button').click(function()
    {
        username_validation();
        emailvalidation();
        
        if(error==true && error_email==true)
        {
            return true;
        }
        else
        {
            return false;
        }
    });
})