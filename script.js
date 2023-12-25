function check() {
    var checkBox = document.getElementById("checbox");
    var text1 = document.getElementsByClassName("text1");
    var text2 = document.getElementsByClassName("text2");
  
    for (var i = 0; i < text1.length; i++) {
      if (checkBox.checked == true) {
        text1[i].style.display = "block";
        text2[i].style.display = "none";
      } else if (checkBox.checked == false) {
        text1[i].style.display = "none";
        text2[i].style.display = "block";
      }
    }
  }
  check();


function updateCurrencySymbol() {
  const currencySelector = document.getElementById('currency');
  const selectedCurrency = currencySelector.value;

  document.querySelectorAll('.text1, .text2').forEach(element => {
    const currentAmount = element.textContent.trim().split(' ')[1];
    element.textContent = `${selectedCurrency} ${currentAmount}`;
  });
}
