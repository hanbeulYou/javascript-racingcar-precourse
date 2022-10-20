export default function getInput() {
  event.preventDefault();
  const inputForm = document.getElementById('car-names-input');
  const inputCarNames = inputForm.value.split(',')
  if(!isValid(inputCarNames)) {
    alert('Invalid Input!');
    inputForm.value = '';
    return false;
  }
  return inputCarNames;
}

function isValid(carNames) {
  const validNames = carNames.filter(element => element.length <= 5);
  if(carNames.length === validNames.length) return true;
  return false;
}