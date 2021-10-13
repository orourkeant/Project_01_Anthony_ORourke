let validated = false;

window.onload = function formFunction() {
  //console.log('formFunction called!');
  document.getElementById("message").addEventListener('click', function(){clearTextArea()});
  document.getElementById("formbutton").addEventListener('click', function() {
    getInput();
  });
}

function clearTextArea(){
  document.getElementById("message").value = "";
}

function getInput(){
  // pull the values from the form and assign to variables
  let sname = document.getElementById('sname').value;
  let fname = document.getElementById('fname').value;
  let tnumber = document.getElementById('telephone').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  
  // trim white space and enforce lower case where necessary
  sname = sname.trim();
  fname = fname.trim();
  tnumber = tnumber.trim();
  email = email.toLowerCase().trim();
  message = message.trim();
 
  Validateform(sname, fname, tnumber, email, message);
}

function Validateform(sname, fname, tnumber, email, message){
  

  if(sname === '' || fname === '' || email === '' || message === ''){
    console.log('empty fields');
    validated = false;
  }else{
    validated = true;
    //open the popup window and send variables
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
      logFormVariables(sname, fname, tnumber, email, message)
      clearForm();
  }
}
function logFormVariables(sname, fname, tnumber, email, message){
  console.log(sname);
  console.log(fname);
  console.log(tnumber);
  console.log(email);
  console.log(message);
}
function clearForm(){
  document.getElementById('sname').value = "";
  document.getElementById('fname').value = "";
  document.getElementById('telephone').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
}