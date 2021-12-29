import Element from "./Element"

class WarnElement extends Element {
  private backgroundColor: string = '#fff5c2'
  private borderBottom: string = '1px solid khaki'
  private padding: string = '5px'
  private wordWrap: string = 'break-word'
  private wordBreak: string = 'break-all'

  constructor() {
    super()
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('borderBottom', this.borderBottom)
    this.defineStyle('padding', this.padding)
    this.defineStyle('word-wrap', this.wordWrap)
    this.defineStyle('word-break', this.wordBreak)
  }
}

export default WarnElement