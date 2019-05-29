import Number from "./js/Number";

[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(number => {
  const parentNode = document.getElementById(`number-${number}`)
  const nubmer = new Number(number, parentNode)
  nubmer.create();
  nubmer.on('clickNumber', (number) => {
    console.log(number)
  })
});

const result = document.getElementById('js-calc-result')
const clear = document.getElementById('js-calc-clear')
const divided = document.getElementById('js-calc-divided')
const multiplied = document.getElementById('js-calc-multiplied')
const minus = document.getElementById('js-calc-minus')
const equal = document.getElementById('js-calc-equal')
const plus = document.getElementById('js-calc-plus')

var value = 0
var waiting = false
var isCalc = false
var type = ''
var tempValue = 0

function setResult(val) {
  if (!waiting) {
    value = parseFloat(value + val)
  } else {
    value = parseFloat(val)
  }
  result.innerHTML = String(parseFloat(value, 10))
  waiting = false
}
function setType(_type, value) {

  type = _type
  waiting = true
  if (isCalc) {
    tempValue = calc()
  } else {
    tempValue = value
  }
  console.log(_type, value);
  isCalc = true
}
function calc() {
  var resultValue = 0
  switch(type) {
    case 'plus':
      resultValue = tempValue + value
      break;
    case 'minus':
      resultValue = tempValue - value
      break;
    case 'multi':
      resultValue = tempValue * value
      break;
    case 'div':
      resultValue = tempValue / value
      break;
    default:
      resultValue = tempValue
      break;
  }
  result.innerHTML = String(resultValue)
  return resultValue
}

clear.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clear')
  value = 0
  type = ''
  waiting = false
  setResult(value)
})

divided.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('divided')
  setType('div', value)
})
multiplied.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('multiplied')
  setType('multi', value)
})
minus.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('minus')
  setType('minus', value)
})
plus.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('plus')
  setType('plus', value)
})

equal.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('equal')
  calc()
  isCalc = false
  waiting = true
})
