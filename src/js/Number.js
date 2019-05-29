import EventEmmiteter from 'eventemitter3'

export default class Number extends EventEmmiteter {
  constructor(number, parentNode) {
    super();
    this.parentNode = parentNode
    this.number = number
  }

  static getNumbers () {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  create () {
    const numberButton = document.createElement('button')
    numberButton.innerText = this.number
    numberButton.addEventListener('click', (e)=> {
      e.preventDefault()
      this.emit('clickNumber', this.number)
    })
    this.parentNode.appendChild(numberButton)
  }
}
