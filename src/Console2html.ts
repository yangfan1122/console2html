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

  private l (message): void {
    const logElement: LogElement = new LogElement()
    this.logContainer.addChild(logElement.container)
    if (typeof message === 'object') {
      logElement.setValue((JSON && JSON.stringify ? JSON.stringify(message) : String(message)))
    } else {
      logElement.setValue(message)
    }
  }
  private w (message): void {
    const warnELement: WarnElement = new WarnElement()
    this.logContainer.addChild(warnELement.container)
    if (typeof message === 'object') {
      warnELement.setValue((JSON && JSON.stringify ? JSON.stringify(message) : String(message)))
    } else {
      warnELement.setValue(message)
    }
  }
  private e (message): void {
    const errorElement: ErrorElement = new ErrorElement()
    this.logContainer.addChild(errorElement.container)
    if (typeof message === 'object') {
      errorElement.setValue((JSON && JSON.stringify ? JSON.stringify(message) : String(message)))
    } else {
      errorElement.setValue(message)
    }
  }

  /**
   * clear
   * @private
   */
  private c (): void {
    this.logContainer.setValue('')
  }

}