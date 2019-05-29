export default class Result {
  constructor(node) {
    this.resultNode = node
    this.currentValue = 0;
    this.resultNode.innerText = this.currentValue;
    this.formula = '';
  }

  setVal (val) {
    const newVal = String(this.currentValue) + String(val);
    this.currentValue = parseInt(newVal, 10);
    this.resultNode.innerText = this.currentValue;
  }

  setOperator (operator) {
    this.operator = operator;
    this.formula = String(this.currentValue) + operator;
    this.currentValue = 0;
  }

  clear () {
    this.currentValue = 0;
    this.resultNode.innerText = this.currentValue;
    this.formula = '';
  }

  calc () {
    this.formula += String(this.currentValue)
    this.resultNode.innerText = eval(this.formula);
    this.currentValue = 0;
    this.formula = '';
  }
}