import Element from "./Element"

class LogElement extends Element {
  private backgroundColor: string = 'whitesmoke'
  private borderBottom: string = '1px solid #e5e5e5'
  private padding: string = '5px'

  constructor() {
    super()
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('borderBottom', this.borderBottom)
    this.defineStyle('padding', this.padding)
  }
}

export default LogElement