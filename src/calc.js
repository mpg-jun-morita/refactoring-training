import Number from "./js/Number";
import Operator from "./js/Operator";
import Result from "./js/Result";

const result = new Result(document.getElementById('result'));

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