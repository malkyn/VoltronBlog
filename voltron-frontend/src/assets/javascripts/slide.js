document.addEventListener('DOMContentLoaded', function() {
  var cont = 1;

  var radio = document.querySelector('.manual-btn');
  document.getElementById('radio1').checked = true;

  setInterval(function() {
    proximaTag();
  }, 4000);

  function proximaTag() {
    cont++;

    if (cont > 6) {
      cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
  }
});
