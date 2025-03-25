import { useEffect } from "react";
import "../css/Global.css";
import "./Comicinfo.css";
import Header from "../components/header/header.jsx";

function Comicinfo() {
  useEffect(() => {
    document.title = "ComicView - Info";
  }, []);

  return (
    <div className="container">
      <Header/>
      <div className="block">

      </div>
    </div>
  );
}

export default Comicinfo;