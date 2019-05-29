import EventEmmiteter from 'eventemitter3'

export default class Operator extends EventEmmiteter {
  constructor(operator, sign, parentNode) {
    super();
    this.parentNode = parentNode
    this.sign = sign
    this.operator = operator
  }

  static getOperators () {
    return [
      { key: 'plus', value: "+"},
      { key: 'minus', value: "-" },
      { key: 'multi', value: '×' },
      { key: 'div', value: "%" },
      { key: 'equal', value: "=" },
      { key: 'clear', value: "C" }
    ];
  }

  create () {
    const operatorButton = document.createElement('button')
    operatorButton.innerText = this.sign
    operatorButton.addEventListener('click', (e)=> {
      e.preventDefault()
      this.emit('clickOperator', this.operator)
    })
    this.parentNode.appendChild(operatorButton)
  }
}
