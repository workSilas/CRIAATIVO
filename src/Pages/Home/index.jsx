import './index.scss';
import SessaoInicial from '../../components/sessaoInicial';
import SessaoUm from '../../components/sessaoUm';
import SessaoDois from '../../components/sessaoDois';
import SessaoTres from '../../components/sessaoTres';

export default function Home() {
  return (
    <div className="Home">
      <SessaoInicial />
      <SessaoUm />
      <div className="divisao">
        <h1>MODERNIDADE <br />
          E TECNOLOGIA </h1>
      </div>
      <SessaoDois />
      <div className="divisao">
        <h1>SEGURANÇA E <br />
          PROTEÇÃO</h1>
      </div>
      <SessaoTres />
    </div>
  );
}
