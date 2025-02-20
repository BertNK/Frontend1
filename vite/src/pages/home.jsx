import '../css/Global.css'
import '../css/Home.css'
import Header from '../components/header.jsx'
import Deel1 from '../components/dashDeel1.jsx'

function Home() {
  return (
      <div className="container">
        <Header/>

        {/* dit is waar de grafieken allemaal in komen */}
        <div className="block">
          <Deel1/>
        </div>
      </div>
   )
}

export default Home
