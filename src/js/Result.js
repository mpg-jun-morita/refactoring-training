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
    if (this.formula) {
      this.formula += operator;
    } else {
      this.formula = String(this.currentValue) + operator;
    }
    this.currentValue = 0;
  }

  clear () {
    this.currentValue = 0;
    this.resultNode.innerText = this.currentValue;
    this.formula = '';
  }

  calc () {
    this.formula += String(this.currentValue);
    const resutl = eval(this.formula);
    this.resultNode.innerText = resutl;
    this.currentValue = 0;
    this.formula = String(resutl);
  }
}