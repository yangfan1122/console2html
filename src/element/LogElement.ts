import Element from "./Element"

class LogElement extends Element {
  private backgroundColor: string = 'whitesmoke'
  private borderBottom: string = '1px solid #e5e5e5'

  constructor() {
    super()
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('borderBottom', this.borderBottom)
  }
}

export default LogElement