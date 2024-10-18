import './index.scss';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="Nav">

      <div className='sessao'>
        <Link to="/">HOME</Link>
        <div className='line'></div>
        <Link to="/">SOBRE-NÓS</Link>
        <div className='line'></div>
        <Link to="/Ferramentas">FERRAMENTAS</Link>
        <div className='line'></div>
        <Link to="https://wa.me/5511977798407?text=Olá! Gostaria tirar um dúvida.">CONTATO</Link>
      </div>
    </div>
  );
}
