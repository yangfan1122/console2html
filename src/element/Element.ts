class Element {
  public container: HTMLDivElement

  public constructor() {
    this.container = document.createElement('div') as HTMLDivElement
    this.container.style.padding = '5px'
  }

  public defineStyle (key: string, value: string = ''): void {
    this.container.style[key] = value
  }

  public setValue (value: string): void {
    this.container.innerHTML = value
  }
}

export default Element