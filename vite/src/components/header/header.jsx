import '/src/css/Global.css';
import './header.css';

export default function Header() {
return(
  <header>
    <div className="buttoncontainer">
      <div className='headerbutton'><a>Home</a></div>
      <div className='headerbutton'><a>Comics</a></div>
    </div>
  </header>
  );
}