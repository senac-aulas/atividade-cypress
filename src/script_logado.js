(function () {
  var user = localStorage.getItem('user')

  if(!user) { return window.location.href = '/index.html' }


  document.querySelector('#message-logged').innerHTML = ' Você está logado!'
})();