const submitBtn = document.querySelector('#submitBtn');
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  if(validateName() && validateEmail() && validatePassword ()){
    alert("Form Submitted Successfully");
  }

});

function validateName (){
  let name = document.querySelector('#name').value;
  // console.log(name);

  if (name.length == 0) {
    nameError.innerText = 'Name is required';
    return false;    
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerText = 'Write full name';
    return false;    
  }
  nameError.innerText = '';
  return true;
}

function validateEmail (){
  let email = document.querySelector('#email').value;
  // console.log(name);

  if (email.length == 0) {
    emailError.innerText = 'Email is required';
    return false;    
  }
  emailError.innerText = '';
  return true;
}

function validatePassword (){
  let password = document.querySelector('#password').value;
  // console.log(name);

  if (password.length == 0) {
    passwordError.innerText = 'Password is required';
    return false;    
  }
  passwordError.innerText = '';
  return true;
}