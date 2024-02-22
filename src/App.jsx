import './App.css'
import Mapa from "../src/components/LeafletMap";
import Menu from "../src/components/menu"
import Location from "../src/components/LocationComponent"
// import '../src/components/css/global.css'

function App() {

  return (
    <div id="contenedor-padre">
      <Menu />
      <Mapa />
      //<Location/>
    </div>
  )
}

export default App
