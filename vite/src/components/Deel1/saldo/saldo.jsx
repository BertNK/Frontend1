import '/src/css/Global.css';
import './saldo.css';
import PieChart from './saldochart';

export default function Saldo() {
return(
    <div className="saldocontainer">
      <div className="saldoblock">
          <PieChart/>
      </div>
    </div>
  );
}