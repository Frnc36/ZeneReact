import { ZENEK } from './adat'
import './App.css'
import Zenek from './component/Zenek'
function App() {


  return (
    <>
    
      <header>
        <h1>React</h1>
      </header>
      <article>
        <Zenek lista = {ZENEK}/>
      </article>
      <footer>Név</footer>
    </>
  )
}

export default App
