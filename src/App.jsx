import './styles.css'
import CardHeader from './components/CardHeader'
import TitleStat from './components/TitleStat'
import PokeStat from './components/PokeStat'
import TypeTag from './components/TypeTag'
import CardDescription from './components/CardDescription'
import CardImage from './components/CardImage'
import PokeInfo from './components/PokeInfo'

function App() {

  return (
    <>
      <div className="card">
        <div className="header">
          <CardHeader/>
        </div>
        <CardImage/>
        <div className="poke-info">
          <div className="types-container">
            <TypeTag/>
          </div>
          <PokeInfo/>
          <CardDescription/>
          <div className="base-stats">
            <TitleStat/>
            <PokeStat/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
