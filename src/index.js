import getInput from "./input.js";

class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  go() {
    this.move += 1;
  }
}

export default function racingCarGame() {
  const inputBtn = document.getElementById('car-names-submit');
  inputBtn.addEventListener('click', getInput);
  // getInput의 return 값 저장 방법 고민하기
}

new racingCarGame();