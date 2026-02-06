document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('loginForm');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const formMessage = document.getElementById('formMessage');
  const toggle = document.getElementById('togglePassword');

  toggle.addEventListener('click',()=>{
    const isPwd = password.type === 'password';
    password.type = isPwd ? 'text' : 'password';
    toggle.textContent = isPwd ? 'Hide' : 'Show';
  });

  function validateEmail(value){
    return /\S+@\S+\.\S+/.test(value);
  }

  form.addEventListener('submit',function(e){
    e.preventDefault();
    let ok = true;
    emailError.textContent = '';
    passwordError.textContent = '';
    formMessage.textContent = '';

    if(!email.value.trim()){
      emailError.textContent = 'Email is required.';
      ok = false;
    } else if(!validateEmail(email.value.trim())){
      emailError.textContent = 'Enter a valid email address.';
      ok = false;
    }

    if(!password.value){
      passwordError.textContent = 'Password is required.';
      ok = false;
    }

    if(!ok){
      return;
    }

    // Demo behavior: replace with real authentication call.
    formMessage.textContent = 'Logging in...';
    setTimeout(()=>{
      formMessage.textContent = 'Login successful (demo).';
      form.reset();
    },750);
  });
});
