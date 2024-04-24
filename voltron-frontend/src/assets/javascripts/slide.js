document.addEventListener('DOMContentLoaded', function() {
  var cont = 0;

  var radio = document.querySelector('.manual-btn');
  document.getElementById('radio1').checked = true;

  setInterval(function() {
    proximaTag();
  }, 5000);

  function proximaTag() {
    cont++;

    if (cont > 6) {
      cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
  }
});
