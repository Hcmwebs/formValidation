const form = document.getElementById('form');
const email = document.getElementById('email');




const setErrorFor = (input, errMessage) => {
  const formGroup = input.parentElement;
  const error = document.getElementById('error');
  formGroup.className = 'formGroup error';
  error.innerText = errMessage;
}
const setSuccessFor = (input) => {
  const formGroup = input.parentElement;
  formGroup.className = 'formGroup success'
  email.innerText = ''
}
const isEmail = (email) =>{
  return !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}
const checkInput = (e)=>{
  e.preventDefault();
  const emailValue = email.value.trim();
  if(!emailValue){
    setErrorFor(email,'Email is required');
  }else if(!isEmail(emailValue)){
    setErrorFor(email,'Oops! Email is not valid ')
  }else{
    setSuccessFor(email)
  }
}

form.addEventListener('submit',checkInput);