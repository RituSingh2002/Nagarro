$document.ready(function()
    {
    
    $('#input').change(function(){
       var input =$(this).val();
    $('ul').append('<li>' + input + '<i class="fas fa-check fa-trash "> </li>');
    $(this).val('');
     });
       $('ul').on('click' , '.fa-trash',function()
                 {
         $(this).parent('li').fadeOut(200);
       });
    });
    $(document).on('keypress',function(e) {
        if(e.which == 13) {
            alert('User pressed Enter!');
        }
    });