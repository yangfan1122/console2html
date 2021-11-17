class Element {
  public container: HTMLDivElement

  public constructor() {
    this.container = document.createElement('div') as HTMLDivElement
  }

  public defineStyle (key: string, value: string = ''): void {
    this.container.style[key] = value
  }

  public getStyle (key: string): string {
    return this.container.style[key]
  }

  public defineProperty (key: string, value: string): void {
    this.container[key] = value
  }

  public addChild (child: HTMLElement): void {
    this.container.appendChild(child)
  }

  public setValue (value: string): void {
    this.container.innerHTML = value
  }
}

export default Element