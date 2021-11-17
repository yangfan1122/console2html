import LogElement from "./element/LogElement"
import WarnElement from "./element/WarnElement"
import ErrorElement from "./element/ErrorElement"
import Container from './element/Container'

export class Console2html {
  private wResizeHandler: any
  private logContainer: Container
  private trigger: HTMLDivElement

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
    // this.container.style.width = window.innerWidth + 'px'
    this.logContainer.defineStyle('width', window.innerWidth + 'px')
    this.trigger.style.right = '5px'
  }

  private consoleElement (): void {
    const zIndex: number = this.zIndexMax() + 1
    const id: string = 'c2hc'

    // this.container = document.createElement('div')
    // this.container.id = 'c2hc'
    // this.container.style.position = 'absolute'
    // this.container.style.width = window.innerWidth + 'px'
    // this.container.style.display = 'none'
    // this.container.style.top = '0'
    // this.container.style.zIndex = zIndex.toString()
    this.logContainer = new Container(id, zIndex.toString())


    const c2hc: HTMLElement = document.getElementById('c2hc')
    let c2hcContent: string = ''
    if (c2hc) {
      c2hcContent = c2hc.innerHTML
      document.body.removeChild(c2hc)
    }
    document.body.appendChild(this.logContainer.container)
    // this.container.innerHTML += c2hcContent

    this.trigger = document.createElement('div')
    this.trigger.id = 'c2ht'
    this.trigger.style.width = '20px'
    this.trigger.style.position = 'fixed'
    this.trigger.style.bottom = '5px'
    this.trigger.style.right = '5px'
    this.trigger.style.fontSize = '12px'
    this.trigger.style.cursor = 'pointer'
    this.trigger.style.backgroundColor = 'white'
    this.trigger.style.border = '1px solid #ccc'
    this.trigger.style.userSelect = 'none'
    this.trigger.style.padding = '3px'
    this.trigger.style.textAlign = 'center'
    this.trigger.style.color = '#666'
    this.trigger.style.zIndex = (zIndex + 1).toString()
    this.trigger.innerHTML = 'on'
    const c2ht = document.getElementById('c2ht')
    if (c2ht) {
      document.body.removeChild(c2ht)
    }
    document.body.appendChild(this.trigger)
    this.trigger.addEventListener('click', this.triggerClick.bind(this))
  }

  private triggerClick (event: MouseEvent): void {
    if (this.logContainer.getStyle('display') === 'none') {
      this.logContainer.defineStyle('display', 'block')
      this.trigger.innerHTML = 'off'
    } else {
      this.logContainer.defineStyle('display', 'none')
      this.trigger.innerHTML = 'on'
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

  private zIndexMax (): number {
    const allElements: HTMLCollection = document.getElementsByTagName("*")
    const zIndexs: number[] = []
    for (let i: number = 0; i < allElements.length; i++) {
      zIndexs.push(Number(window.getComputedStyle(allElements[i]).zIndex) || 0)
    }
    return zIndexs.length ? Math.max(...zIndexs) : 0
  }
}