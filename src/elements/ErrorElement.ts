import Element from "./Element"

class ErrorElement extends Element {
  private backgroundColor: string = '#ffd6d6'
  private borderBottom: string = '1px solid lightpink'
  private padding: string = '5px'

  constructor() {
    super()
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('borderBottom', this.borderBottom)
    this.defineStyle('padding', this.padding)
  }
}

export default ErrorElement