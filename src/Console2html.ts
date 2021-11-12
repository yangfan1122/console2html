export class Console2html {
  private wLoadedHandler: any
  private wResizeHandler: any
  private container: HTMLDivElement
  private trigger: HTMLDivElement

  public constructor () {
    this.init()
  }

  private init (): void {
    this.wLoadedHandler = this.windowLoaded.bind(this)
    this.wResizeHandler = this.windowResize.bind(this)
    window.addEventListener('load', this.wLoadedHandler)
    window.addEventListener('resize', this.wResizeHandler)
  }

  private windowLoaded (event: Event): void {
    window.removeEventListener('load', this.wLoadedHandler)
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
    this.container.style.position = 'absolute'
    this.container.style.width = window.innerWidth + 'px'
    this.container.style.display = 'none'
    this.container.style.zIndex = zIndex.toString()
    document.body.appendChild(this.container)

    this.trigger = document.createElement('div')
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
    const arr: number[] = [...document.all].map(e => +window.getComputedStyle(e).zIndex || 0)
    return arr.length ? Math.max(...arr) : 0
  }
}