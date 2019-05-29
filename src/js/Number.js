import EventEmmiteter from 'eventemitter3'

export default class Number extends EventEmmiteter {
  constructor(number, parentNode) {
    super();
    this.parentNode = parentNode
    this.number = number
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
