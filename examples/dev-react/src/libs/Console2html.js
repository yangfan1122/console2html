export class Console2html {
    constructor() {
        console.log('Console2html');
        this.init();
    }
    init() {
        this.wLoadedHandler = this.windowLoaded;
        window.addEventListener('load', this.windowLoaded);
    }
    windowLoaded(event) {
        console.log(event);
        window.removeEventListener('load', this.wLoadedHandler);
    }
}
