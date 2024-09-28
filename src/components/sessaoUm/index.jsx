import './index.scss';
import { Link } from 'react-router-dom';

export default function SessaoUm() {
  return (
    <div className="SessaoUm">
      <div className="sep">
        <img src="/assets/images/Logo.png" alt="logo" className='logo' />
        <p>{'<div>'}</p>
        <div className='text'>
          <h1>Nunca foi tão facil criar!</h1>
          <ul>
            <li>Criamos o seu site perfeito, totalmente do <br />
              zero,ou reestruturamos um site ja existente !</li>
            <li>Profíssonais qualificados prontos <br />
              para transformar o seu site em realidade</li>
          </ul>
          <Link to="/">CRIAR NOVO TEMPLATE</Link>
        </div>
        <p className='end'>{'</div>'}</p>
      </div>
      <div className="sep">
        <img src="/assets/images/imagemSessao1.png" alt="imagem1" />
      </div>
    </div>
  );
}
