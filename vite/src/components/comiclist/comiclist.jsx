import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "/src/css/Global.css";
import "./comiclist.css";

export default function ComicList() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
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
  // api fetch ^^
  // hier ook de comics zelf vv
  return (
    <div className="comiclistcontainer">
      <div className="comiclistheader">
        <a className="comiclisttitle">New Comics</a>
        <Link to="/comics" className="seeallbutton">See All</Link>
      </div>
      <div className="comicgridmainpage">
        {comics.map((comic) => (
          <div key={comic.id} className="comiccard">
            <Link to={`/comicinfo/${comic.id}`} state={{ comic }}>
              <img
                src={comic.image ? comic.image.medium_url : "https://via.placeholder.com/150"}
                alt={comic.name || "Comic Image"}
              />
            </Link>
            <p>{comic.volume.name || comic.name}</p>
            <p>{comic.cover_date || "None"}</p>
            <Link to={`/comicinfo/${comic.id}`} state={{ comic }} className="viewdetailslink">
              {comic.site_detail_url ? "View Details" : "No Details Available"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
