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

  const removeHtmlTags = (str) => {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.body.textContent || "None";
  };

  const truncateDescription = (description) => {
    const cleanedDescription = removeHtmlTags(description || "None");
    return cleanedDescription.length > 30 ? cleanedDescription.slice(0, 30) + "..." : cleanedDescription;
  };

  return (
    <div className="comiclistcontainer">
      <div className="comiclistheader">
        <a className="comiclisttitle">New Comics</a>
        <Link to="/comics" className="seeallbutton">See All</Link>
      </div>
      <div className="comicgrid">
        {comics.map((comic) => (
          <div key={comic.id} className="comiccard">
            <img
              src={comic.image ? comic.image.medium_url : "https://via.placeholder.com/150"}
              alt={comic.name || "Comic Image"}
              onClick={() => window.location.href = `/comicinfo/${comic.id}`}
            />
            <p>{comic.deck || "None"}</p>
            <p>{comic.cover_date || "None"}</p>
            <p>{truncateDescription(comic.description)}</p>
            <p>{comic.issue_number || "None"}</p>
            <p>{comic.name || "None"}</p>
            <Link to={`/comicinfo/${comic.id}`} className="viewdetailslink">
              {comic.site_detail_url ? "View Details" : "No Details Available"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
