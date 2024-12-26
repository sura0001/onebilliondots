function sendMail(){

let namee = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let msg = document.getElementById("msg");

 
let link = 'mailto:billiondotscompany@gmail.com'+ '?subject=' + encodeURIComponent("Contact from Website") + '&body=' + encodeURIComponent("Name: " + namee.value + "\nEmail: " + email.value + "\nPhone: " + phone.value + "\n\n" + msg.value);

window.location.href = link;

  
}