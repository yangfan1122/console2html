import Element from "./Element"

class ErrorElement extends Element {
  private backgroundColor: string = '#ffd6d6'
  private borderBottom: string = '1px solid lightpink'

  constructor() {
    super()
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('borderBottom', this.borderBottom)
  }
}

export default ErrorElement