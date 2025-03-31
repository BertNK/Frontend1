import { useEffect } from "react";
import "../css/Global.css";
import "./Home.css";
import Header from "../components/header/header.jsx";
import ComicList from "../components/comiclist/comiclist.jsx";
import ComicGraph from "../components/comicgraph/comicgraph.jsx";

function Home() {
  useEffect(() => {
    document.title = "ComicView - Home";
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="block">
        <ComicList />
        {/* graph */}
        <ComicGraph/>
      </div>
    </div>
  );
}

export default Home;
