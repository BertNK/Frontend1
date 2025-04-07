import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "../css/Global.css";
import "./Comicinfo.css";
import Header from "../components/header/header.jsx";

function Comicinfo() {
  const location = useLocation();
  const navigate = useNavigate(); // hook voor navigation
  const comicData = location.state?.comic;
  const volumeRef = useRef(null);
  const [lineWidth, setLineWidth] = useState("50%");

  if (!comicData) {
    return <div>Error: No comic data available.</div>;
  }

  const removeHtmlTags = (htmlString) => {
    if (!htmlString) return "No description available";
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "No description available";
  };

  useEffect(() => {
    if (volumeRef.current) {
      setLineWidth(`${volumeRef.current.offsetWidth}px`);
    }
  }, [comicData.volume.name]);

  return (
    <div className="comicinfocontainer">
      <Header />
      <div className="comicinfoblock">
        {/* Left Section */}
        <div className="comicinfoleft">
          <button className="backButton" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1 className="comicinfotitle">
            {comicData.name}
            {/* Conditionally render the <hr> element if comicData.name exists */}
            {comicData.name && (
              <hr className="lijntje" style={{ width: lineWidth }} />
            )}
            <span className="volumeName" ref={volumeRef}>
              {comicData.volume.name}
            </span>
          </h1>
          <img
            className="comicinfoimage"
            src={comicData.image ? comicData.image.medium_url : "https://via.placeholder.com/150"}
            alt={comicData.name || comicData.volume.name || "Comic Image"}
          />
        </div>
        {/* Right Section */}
        <div className="comicinforight">
          <p className="comicinfodescription">{removeHtmlTags(comicData.description)}</p>
          <p className="comicinfoissue">Issue Number: {comicData.issue_number || "N/A"}</p>
          <p className="comicinfoissue">Issue ID: {comicData.id || comicData.volume.id || "N/A"}</p>
          <p className="comicinfodate">Cover Date: {comicData.cover_date || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}

export default Comicinfo;
