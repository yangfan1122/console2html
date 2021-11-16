export class Console2html {
  private wResizeHandler: any
  private container: HTMLDivElement
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
    this.container.style.width = window.innerWidth + 'px'
    this.trigger.style.right = '5px'
  }

  private consoleElement (): void {
    const zIndex: number = this.zIndexMax() + 1

    this.container = document.createElement('div')
    this.container.id = 'c2hc'
    this.container.style.position = 'absolute'
    this.container.style.width = window.innerWidth + 'px'
    this.container.style.display = 'none'
    this.container.style.top = '0'
    this.container.style.zIndex = zIndex.toString()
    const c2hc: HTMLElement = document.getElementById('c2hc')
    if (c2hc) {
      document.body.removeChild(c2hc)
    }
    document.body.appendChild(this.container)

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
    this.trigger.style.zIndex = (Number(this.container.style.zIndex) + 1).toString()
    this.trigger.innerHTML = 'on'
    const c2ht = document.getElementById('c2ht')
    if (c2ht) {
      document.body.removeChild(c2ht)
    }
    document.body.appendChild(this.trigger)
    this.trigger.addEventListener('click', this.triggerClick.bind(this))
  }

  private triggerClick (event: MouseEvent): void {
    if (this.container.style.display === 'none') {
      this.container.style.display = 'block'
      this.trigger.innerHTML = 'off'
    } else {
      this.container.style.display = 'none'
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
    if (typeof message === 'object') {
      this.container.innerHTML += '<div style="background-color: whitesmoke; padding: 5px;">' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '</div>'
    } else {
      this.container.innerHTML += '<div style="background-color: whitesmoke; padding: 5px;">' + message + '</div>'
    }
  }
  private w (message): void {
    if (typeof message === 'object') {
      this.container.innerHTML += '<div style="background-color: khaki; padding: 5px;">' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '</div>'
    } else {
      this.container.innerHTML += '<div style="background-color: khaki; padding: 5px;">' + message + '</div>'
    }
  }
  private e (message): void {
    if (typeof message === 'object') {
      this.container.innerHTML += '<div style="background-color: lightpink; padding: 5px;">' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '</div>'
    } else {
      this.container.innerHTML += '<div style="background-color: lightpink; padding: 5px;">' + message + '</div>'
    }
  }

  /**
   * clear
   * @private
   */
  private c (): void {
    this.container.innerHTML = ''
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