export default class Utils {
  static zIndexMax (): number {
    const allElements: HTMLCollection = document.getElementsByTagName("*")
    const zIndexs: number[] = []
    for (let i: number = 0; i < allElements.length; i++) {
      zIndexs.push(Number(window.getComputedStyle(allElements[i]).zIndex) || 0)
    }
    return zIndexs.length ? Math.max(...zIndexs) : 0
  }
}