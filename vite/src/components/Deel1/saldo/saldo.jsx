import '/src/css/Global.css';
import './saldo.css';
import BasicPie from './saldochart';

export default function Saldo() {
return(
    <div className="saldocontainer">
      <div className="saldoblock">
          <BasicPie/>
      </div>
    </div>
  );
}