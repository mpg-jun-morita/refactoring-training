import Number from "./js/Number";
import Operator from "./js/Operator";
import Result from "./js/Result";

const result = new Result(document.getElementById('result'));

Number.getNumbers().forEach(number => {
  const parentNode = document.getElementById(`number-${number}`)
  const nubmer = new Number(number, parentNode)
  nubmer.create();
  nubmer.on('clickNumber', (number) => {
    result.setVal(number);
  })
});

Operator.getOperators().forEach(operatorObj => {
  const parentNode = document.getElementById(`operator-${operatorObj.key}`)
  const operator = new Operator(operatorObj.key, operatorObj.value, parentNode);
  operator.create();
  operator.on('clickOperator', (operator) => {
    switch (operator) {
      case 'plus':
        result.setOperator("+");
        break;
      case 'minus':
        result.setOperator("-");
        break;
      case 'multi':
        result.setOperator("*");
        break;
      case 'div':
        result.setOperator("/");
        break;
      case 'clear':
        result.clear();
        break;
      case 'equal':
        result.calc();
        break;
      default:
        throw new Error('存在しないオペレータが選択されました。');
    }
  })
});

