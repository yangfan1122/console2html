import LogElement from "./elements/LogElement"
import WarnElement from "./elements/WarnElement"
import ErrorElement from "./elements/ErrorElement"
import Container from './elements/Container'
import Trigger from './elements/Trigger'
import Utils from './utils/Utils'
import { onContent, offContent, logId, triggerId } from './Global'

export class Console2html {
  private wResizeHandler: any
  private logContainer: Container
  private triggerContainer: Trigger

  public constructor () {
  }

  /**
   * Should be fired after window has loaded.
   */
  public init (): void {
    this.wResizeHandler = this.windowResize.bind(this)
    window.addEventListener('resize', this.wResizeHandler)

    this.consoleElement()
    this.conver()
  }

  private windowResize (event: Event): void {
    this.logContainer.defineStyle('width', window.innerWidth + 'px')
    this.triggerContainer.defineStyle('right', '5px')
  }

  private consoleElement (): void {
    const zIndex: number = Utils.zIndexMax() + 1

    this.logContainer = new Container(logId, zIndex.toString())
    const c2hc: HTMLElement = document.getElementById(logId)
    let c2hcContent: string = ''
    if (c2hc) {
      c2hcContent = c2hc.innerHTML
      document.body.removeChild(c2hc)
    }
    document.body.appendChild(this.logContainer.container)
    this.logContainer.setValue(c2hcContent)

    this.triggerContainer = new Trigger(triggerId, (zIndex + 1).toString())
    const c2ht = document.getElementById(triggerId)
    if (c2ht) {
      document.body.removeChild(c2ht)
    }
    document.body.appendChild(this.triggerContainer.container)
    this.triggerContainer.container.addEventListener('click', this.triggerClick.bind(this))
  }

  private triggerClick (event: MouseEvent): void {
    if (this.logContainer.getStyle('display') === 'none') {
      this.logContainer.defineStyle('display', 'block')
      this.triggerContainer.setValue(offContent)
    } else {
      this.logContainer.defineStyle('display', 'none')
      this.triggerContainer.setValue(onContent)
    }
  }

  private conver (): void {
    const temp: any = {}
    if (!console) {
      console = temp
    }

    console.log = this.l.bind(this)
    console.info = this.l.bind(this)
    console.warn = this.w.bind(this)
    console.error = this.e.bind(this)
    console.clear = this.c.bind(this)
  }

  private l (...args: any): void {
    const logElement: LogElement = new LogElement()
    this.logContainer.addChild(logElement.container)
    logElement.setValue(Utils.convertArgs(args).join(' '))
  }
  private w (...args: any): void {
    const warnELement: WarnElement = new WarnElement()
    this.logContainer.addChild(warnELement.container)
    warnELement.setValue(Utils.convertArgs(args).join(' '))
  }
  private e (...args: any): void {
    const errorElement: ErrorElement = new ErrorElement()
    this.logContainer.addChild(errorElement.container)
    errorElement.setValue(Utils.convertArgs(args).join(' '))
  }

  /**
   * clear
   * @private
   */
  private c (): void {
    this.logContainer.setValue('')
  }

}