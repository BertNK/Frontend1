import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../css/Global.css";
import "./Comicinfo.css";
import Header from "../components/header/header.jsx";

function Comicinfo() {
  const { id } = useParams();  // Get the comic ID from the URL
  const [comicData, setComicData] = useState(null);
  const [error, setError] = useState(null);  // State to handle error messages

  useEffect(() => {
    document.title = "ComicView - Info";

    // Fetch comic data based on the ID in the URL
    fetch(`http://localhost:4000/api/comics/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Comic not found");
        }
        return response.json();
      })
      .then((data) => {
        setComicData(data.results[0]);  // Assuming the API response contains a `results` array
      })
      .catch((error) => {
        setError(error.message);  // Set error message if the comic is not found
        console.error("Error fetching comic data:", error);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;  // Show error if comic is not found
  }

  if (!comicData) {
    return <div>Loading...</div>;  // Show loading message while waiting for data
  }

  return (
    <div className="container">
      <Header />
      <div className="block">
        <h1>{comicData.name}</h1>
        <img
          src={comicData.image ? comicData.image.medium_url : "https://via.placeholder.com/150"}
          alt={comicData.name || "Comic Image"}
        />
        <p>{comicData.description || "No description available"}</p>
        <p>Issue Number: {comicData.issue_number || "N/A"}</p>
        <p>Cover Date: {comicData.cover_date || "N/A"}</p>
        <p>Deck: {comicData.deck || "No description available"}</p>
        <p>Site Detail URL: <a href={comicData.site_detail_url} target="_blank" rel="noopener noreferrer">{comicData.site_detail_url || "No URL available"}</a></p>
      </div>
    </div>
  );
}

export default Comicinfo;
