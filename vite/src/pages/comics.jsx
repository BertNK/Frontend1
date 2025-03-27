import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Global.css";
import "./Comics.css";
import Header from "../components/header/header.jsx";

function Comics() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    document.title = "ComicView - Comics";

    fetch('http://localhost:4000/api/comics')
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          const sortedComics = data.results.sort((a, b) => {
            const dateA = new Date(a.cover_date);
            const dateB = new Date(b.cover_date);
            return dateB - dateA;  
          });
          setComics(sortedComics);
        }
      })
      .catch((error) => console.error("Error fetching comics:", error));
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="comicsblock">
        <div className="comiclistheader">
          <a className="comiclisttitle">Comics</a>
          <button className="seeallbutton">See All</button>
        </div>
        <div className="comicgrid">
          {comics.map((comic) => (
            <div key={comic.id} className="comiccard">
              <img
                src={comic.image ? comic.image.medium_url : "https://via.placeholder.com/150"}
              />
              <p>{comic.name || comic.volume.name}</p>
              <p>{comic.cover_date || "No cover date available"}</p>
              <p>{comic.issue_number || "No issue number available"}</p>
              <Link to={`/comicinfo/${comic.id}`} state={{ comic }} className="viewdetailslink">
                {comic.site_detail_url ? "View Details" : "No Details Available"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comics;
