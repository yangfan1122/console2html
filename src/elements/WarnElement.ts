import Element from "./Element"

class WarnElement extends Element {
  private backgroundColor: string = '#fff5c2'
  private borderBottom: string = '1px solid khaki'
  private padding: string = '5px'

  constructor() {
    super()
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('borderBottom', this.borderBottom)
    this.defineStyle('padding', this.padding)
  }
}

export default WarnElement