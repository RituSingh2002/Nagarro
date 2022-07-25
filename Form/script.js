let btn=document.getElementById('button');
btn.addEventListener('click',sendEmail)
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ritusingh29g@gmail.com",
        Password : "Ritu@2002",
        To : 'ritusingh29g@gmail.com',
        From :document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert("mail sent successfully")
    );
}
 