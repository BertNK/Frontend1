import '/src/css/Global.css';
import './dashDeel1.css';
import Saldo from './saldo/saldo.jsx';
import Coins from './coins/coins.jsx';

export default function Deel1() {
return(
    <div className="deel1Container">
      <Saldo/>
      <Coins/>
    </div>
  );
}