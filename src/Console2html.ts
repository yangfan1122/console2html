export class Console2html {
  private wLoadedHandler: any
  private container: HTMLDivElement

  public constructor () {
    this.init()
  }

  private init (): void {
    this.wLoadedHandler = this.windowLoaded.bind(this)
    window.addEventListener('load', this.wLoadedHandler)
  }

  private windowLoaded (event: Event): void {
    window.removeEventListener('load', this.wLoadedHandler)
    this.consoleElement()
    this.conver()
  }

  private consoleElement (): void {
    this.container = document.createElement('div')
    this.container.style.position = 'absolute'
    this.container.style.width = window.innerWidth + 'px'
    this.container.style.height = window.innerHeight + 'px'
    this.container.style.backgroundColor = '#eeeeee70'
    document.body.appendChild(this.container)
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
      this.container.innerHTML += '<div style="background-color: whitesmoke; padding: 5px 0 5px;">' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '</div>'
    } else {
      this.container.innerHTML += '<div style="background-color: whitesmoke; padding: 5px 0 5px;">' + message + '</div>'
    }
  }
  private w (message): void {
    if (typeof message === 'object') {
      this.container.innerHTML += '<div style="background-color: khaki; padding: 5px 0 5px;">' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '</div>'
    } else {
      this.container.innerHTML += '<div style="background-color: khaki; padding: 5px 0 5px;">' + message + '</div>'
    }
  }
  private e (message): void {
    if (typeof message === 'object') {
      this.container.innerHTML += '<div style="background-color: lightpink; padding: 5px 0 5px;">' + (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '</div>'
    } else {
      this.container.innerHTML += '<div style="background-color: lightpink; padding: 5px 0 5px;">' + message + '</div>'
    }
  }

  /**
   * clear
   * @private
   */
  private c (): void {
    this.container.innerHTML = ''
  }

}