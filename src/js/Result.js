import EventEmmiteter from 'eventemitter3'

export default class Result extends EventEmmiteter {
  constructor(node) {
    super();
    this.resultNode = node
    this.currentValue = 0;
    this.resultNode.innerText = this.currentValue;
  }

  set (val) {
    const newVal = String(this.currentValue) + String(val);
    this.currentValue = parseInt(newVal, 10);
    this.resultNode.innerText = this.currentValue;
  }
}