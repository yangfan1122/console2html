import logo from './logo.svg'
import './App.css'
import { Console2html } from 'console2html'
let c2h

function App() {
  c2h = new Console2html()
  c2h.init()

  console.log('test log')
  console.warn('test warn')
  console.error('test error')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
