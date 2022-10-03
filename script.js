let result = document.getElementById('result');

const calc = document.getElementById('area');

calc.addEventListener('click', function(event) {

  const value = event.target.innerText;

  switch(value) {
    case 'C':
      result.innerHTML = '';
      break;

    case '=':
      result.innerText = eval(result.innerText);
      break;

    default:
      result.innerText += value;
  }

})

