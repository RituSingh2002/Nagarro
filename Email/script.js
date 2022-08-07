let btn=document.getElementById('button');
btn.addEventListener('click',sendEmail)
function sendEmail(){
    Email.send({
        
      SecureToken : '9b0fa1d9-e7e0-4aca-96ae-05c19a556ad6',
      To : 'ritusingh29g@gmail.com',
      From : "1900460100068ritusingh@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}
 