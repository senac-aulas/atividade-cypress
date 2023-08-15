console.log('teste')

function checkUserLogged() {
  var user = localStorage.getItem('user')

  if(user) { return window.location.href = '/logado.html' }
}

function resetClass() {
  document.querySelector('#message-error-name').classList.remove('element-visible');
  document.querySelector('#message-error-email').classList.remove('element-visible');
  document.querySelector('#message-error-password').classList.remove('element-visible');
  document.querySelector('#message-error-confirm-password').classList.remove('element-visible');

  document.querySelector('#message-error-name').classList.add('element-unvisible');
  document.querySelector('#message-error-email').classList.add('element-unvisible');
  document.querySelector('#message-error-password').classList.add('element-unvisible');
  document.querySelector('#message-error-confirm-password').classList.add('element-unvisible');
}

function handleRegister(e) {
  const name = document.querySelector('input[name=user_name').value;
  const email = document.querySelector('input[name="user_email"]').value;
  const password = document.querySelector('input[name="user_password"]').value;
  const confirmPassword = document.querySelector('input[name="user_confirm_password"]').value;

  resetClass()
  
  if(name === '') {
    document.querySelector('#message-error-name').classList.remove('element-unvisible');
    document.querySelector('#message-error-name').classList.add('element-visible')

    return
  }

  if(email === '') {
    document.querySelector('#message-error-email').classList.remove('element-unvisible');
    document.querySelector('#message-error-email').classList.add('element-visible')

    return
  }

  if(password === '') {
    document.querySelector('#message-error-password').classList.remove('element-unvisible');
    document.querySelector('#message-error-password').classList.add('element-visible')

    return
  }

  if(confirmPassword === '') {
    document.querySelector('#message-error-confirm-password').classList.remove('element-unvisible');
    document.querySelector('#message-error-confirm-password').classList.add('element-visible')

    return
  }

  if(password !== confirmPassword) {
    alert('As senhas não são iguais')

    return
  }


  console.log('name', name)
  console.log('email', email)
  console.log('password', password)
  console.log('confirmPassword', confirmPassword)

  console.log('eeee', e)


  localStorage.setItem('user', JSON.stringify({
    name,
    email
  }))


  window.location.href = "/logado.html";
}


function handleLogin(e) {
  const email = document.querySelector('input[name="user_email"]').value;
  const password = document.querySelector('input[name="user_password"]').value;

  document.querySelector('#message-error-email').classList.remove('element-visible');
  document.querySelector('#message-error-password').classList.remove('element-visible');

  if(email === 'cypress@teste.com' && password === 'cypress') {
    localStorage.setItem('user', JSON.stringify({
      email
    }))

    window.location.href = "/logado.html";

    return
  }

  if(email === '') {
    document.querySelector('#message-error-email').classList.remove('element-unvisible');
    document.querySelector('#message-error-email').classList.add('element-visible')

    return
  }

  if(password === '') {
    document.querySelector('#message-error-password').classList.remove('element-unvisible');
    document.querySelector('#message-error-password').classList.add('element-visible')

    return
  }

  var user = localStorage.getItem('user')

  if(!user) { 
    alert('Você não está cadastrado')

    return
   }

   if(user.email !== email || user.password !== password) {
    alert('Email ou senha incorretos')

    return
   }

  localStorage.setItem('user', JSON.stringify({
    email
  }))


  window.location.href = "/logado.html";
}