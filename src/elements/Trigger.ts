import Element from './Element'
import {onContent} from '../Global'

export default class Trigger extends Element {
  private width: string = '20px'
  private position: string = 'fixed'
  private bottom: string = '5px'
  private right: string = '5px'
  private fontSize: string = '12px'
  private cursor: string = 'pointer'
  private backgroundColor: string = 'white'
  private border: string = '1px solid #ccc'
  private userSelect: string = 'none'
  private padding: string = '3px'
  private textAlign: string = 'center'
  private color: string = '#666'

  public constructor(id: string, zIndex: string) {
    super()

    this.defineProperty('id', id)
    this.defineStyle('width', this.width)
    this.defineStyle('position', this.position)
    this.defineStyle('bottom', this.bottom)
    this.defineStyle('right', this.right)
    this.defineStyle('fontSize', this.fontSize)
    this.defineStyle('cursor', this.cursor)
    this.defineStyle('backgroundColor', this.backgroundColor)
    this.defineStyle('border', this.border)
    this.defineStyle('userSelect', this.userSelect)
    this.defineStyle('padding', this.padding)
    this.defineStyle('textAlign', this.textAlign)
    this.defineStyle('color', this.color)
    this.defineStyle('zIndex', zIndex)
    this.setValue(onContent)
  }
}