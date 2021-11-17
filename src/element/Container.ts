import Element from './Element'

export default class Container extends Element {
  private position: string = 'absolute'
  private width: string = window.innerWidth + 'px'
  private display: string = 'none'
  private top: string = '0'
  private padding: string = '0px'

  public constructor(id: string, zIndex: string) {
    super()
    this.defineProperty('id', id)
    this.defineStyle('position', this.position)
    this.defineStyle('width', this.width)
    this.defineStyle('display', this.display)
    this.defineStyle('top', this.top)
    this.defineStyle('zIndex', zIndex)
    this.defineStyle('padding', this.padding)
  }
}