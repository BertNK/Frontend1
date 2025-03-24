import '../css/Global.css'
import './Home.css'
import Header from '../components/header/header.jsx'
import ComicList from '../components/comiclist/comiclist.jsx'

function Home() {
  return (
      <div className="container">
        <Header/>

        {/* dit is waar de grafieken allemaal in komen */}
        <div className="block">
          <ComicList/>
        </div>
      </div>
   )
}

export default Home
