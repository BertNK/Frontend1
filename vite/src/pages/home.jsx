import '../css/Global.css'
import './Home.css'
import Header from '../components/header/header.jsx'
import Deel1 from '../components/Deel1/dashDeel1.jsx'
import Deel2 from '../components/Deel2/dashDeel2.jsx'

function Home() {
  return (
      <div className="container">
        <Header/>

        {/* dit is waar de grafieken allemaal in komen */}
        <div className="block">
          <Deel1/>
          <Deel2/>
        </div>
      </div>
   )
}

export default Home
