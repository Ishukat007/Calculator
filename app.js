let btn = document.querySelectorAll('button');
let inpEl = document.querySelector('input');

for (let button of btn) {
  button.addEventListener('click', function (e) {
    let btnText = e.target.innerText;
    if (btnText === 'AC') {
      inpEl.value = '';
    } else if (btnText === '=') {
      try {
        inpEl.value = eval(inpEl.value);
      } catch (err) {
        inpEl.value = 'invalid';
      }
    } else {
      inpEl.value += btnText;
    }
  });
}
