export default class Utils {
  static zIndexMax (): number {
    const allElements: HTMLCollection = document.getElementsByTagName("*")
    const zIndexs: number[] = []
    for (let i: number = 0; i < allElements.length; i++) {
      zIndexs.push(Number(window.getComputedStyle(allElements[i]).zIndex) || 0)
    }
    return zIndexs.length ? Math.max(...zIndexs) : 0
  }

  static convertArgs (args: any[]): string[] {
    const contentArr: string[] = []
    const length: number = args.length
    let i: number
    for (i = 0; i < length; i++) {
      if (typeof args[i] === 'object') {
        contentArr.push((JSON && JSON.stringify ? JSON.stringify(args[i]) : String(args[i])))
      } else {
        contentArr.push(args[i].toString())
      }
    }
    return contentArr
  }
}