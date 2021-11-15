# Console2html

Console2html is a debug tool which is used in can-not-see-console environment.  

<img src="https://raw.githubusercontent.com/yangfan1122/console2html/master/docs/3.gif" alt="示例" width="358" height="637" />

## Install

```
npm install console2html
```

## Usage

#### [React](https://github.com/yangfan1122/console2html/tree/master/examples/dev-react)
App.js
```jsx harmony
import { Console2html } from 'console2html'
let c2h

function App() {
  
  c2h = new Console2html()
  c2h.init()

  console.log('test log')
  console.warn('test warn')
  console.error('test error')

  return (
    <div className="App"></div>
  )
}

export default App
```