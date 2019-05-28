var value = 0
var waiting = false
var isCalc = false
var type = ''
var tempValue = 0

export function setResult(val) {
  if (!waiting) {
    value = parseFloat(value + val)
  } else {
    value = parseFloat(val)
  }
  waiting = false
  return String(parseFloat(value, 10))
}

export function setType(_type, value) {

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

export function calc() {
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

