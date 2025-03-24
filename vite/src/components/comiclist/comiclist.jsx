import { useState, useEffect } from "react";
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

  // Function to remove HTML tags from description
  const removeHtmlTags = (str) => {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return doc.body.textContent || "";
  };

  return (
    <div className="comiclistcontainer">
      <div className="comiclistheader">
        <h2>New Comics</h2>
        <button className="seeallbutton">See All</button>
      </div>
      <div className="comicgrid">
        {comics.map((comic) => (
          <div key={comic.id} className="comiccard">
            <img
              src={comic.image ? comic.image.medium_url : "https://via.placeholder.com/150"}            
              alt={comic.description || "Comic Image"}
            />
            <p>{comic.deck || "No title available"}</p>
            <p>{comic.cover_date}</p>
            <p>{removeHtmlTags(comic.description) || "No description available"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
