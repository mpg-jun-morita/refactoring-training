import Number from "./js/Number";
import Operator from "./js/Operator";

Number.getNumbers().forEach(number => {
  const parentNode = document.getElementById(`number-${number}`)
  const nubmer = new Number(number, parentNode)
  nubmer.create();
  nubmer.on('clickNumber', (number) => {
    console.log(number)
  })
});

Operator.getOperators().forEach(operatorObj => {
  const parentNode = document.getElementById(`operator-${operatorObj.key}`)
  const operator = new Operator(operatorObj.key, operatorObj.value, parentNode);
  operator.create();
  operator.on('clickOperator', (operator) => {
    console.log(operator)
  })
});

const result = document.getElementById('js-calc-result')

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