import './index.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">
        <div className='sessao'>
          <Link to="/">SOBRE-NÓS</Link>
          <div className='line'></div>
          <Link to="/">FERRAMENTAS</Link>
          <div className='line'></div>
          <Link to="/">CRIAR</Link>
          <div className='line'></div>
          <Link to="/">CONTATO</Link>
          <div className='line'></div>
          <Link to="/">FAQ</Link>
          <div className='line'></div>
          <Link to="/">ENTRAR</Link>
        </div>
    </div>
  );
}
