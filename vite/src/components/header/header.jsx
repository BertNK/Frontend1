import '/src/css/Global.css';
import './header.css';

import { Link } from "react-router-dom";

export default function Header() {
return(
  <header>
    <div className="buttoncontainer">
      <Link to="/" className='headerbutton'>Home</Link>
      <Link to="/comics" className='headerbutton'>Comics</Link>
    </div>
  </header>
  );
}