import { useLocation } from "react-router-dom";
import "../css/Global.css";
import "./Comicinfo.css";
import Header from "../components/header/header.jsx";

function Comicinfo() {
  const location = useLocation();
  const comicData = location.state?.comic;

  if (!comicData) {
    return <div>Error: No comic data available.</div>;
  }

  const removeHtmlTags = (htmlString) => {
    if (!htmlString) return "No description available";
    const doc = new DOMParser().parseFromString(htmlString, 'text/html');
    return doc.body.textContent || "No description available";
  };

  return (
    <div className="comicinfocontainer">
      <Header />
      <div className="comicinfoblock">
        <h1 className="comicinfotitle">{comicData.name}</h1>
        <a className="comicinfotitle">{comicData.volume.name}</a>
        <img className="comicinfoimage"
          src={comicData.image ? comicData.image.medium_url : "https://via.placeholder.com/150"}
          alt={comicData.name || comicData.volume.name || "Comic Image"}
        />
        <a className="comicinfodescription">{removeHtmlTags(comicData.description)}</a>
        <a className="comicinfoissue">Issue Number: {comicData.issue_number || "N/A"}</a>
        <a className="comicinfoissue">Issue ID: {comicData.id || comicData.volume.id || "N/A"}</a>
        <a className="comicinfodate">Cover Date: {comicData.cover_date || "N/A"}</a>
      </div>
    </div>
  );
}

export default Comicinfo;
