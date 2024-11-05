import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Nav() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const [nav, setNav] = useState(false)
  function click() {
    setNav(!nav)
  }

  return (
    <div className="Nav">

      <div className='sessaoNav'>
        <Link onClick={handleClick} to="/">HOME</Link>
        <div className='line'></div>
        <Link onClick={handleClick} to="/Planos">PLANOS</Link>
        <div className='line'></div>
        <Link onClick={handleClick} to="/Ferramentas">FERRAMENTAS</Link>
        <div className='line'></div>
        <Link onClick={handleClick} to="https://wa.me/5511977798407?text=Olá! Gostaria tirar um dúvida.">CONTATO</Link>
      </div>

      {nav === false &&
        <button onClick={click}><img src="/assets/images/mais.png" alt="menu" /></button>}

      {nav === true &&
        <div className='sessaoNavMob'>
          <button onClick={click}><img src="/assets/images/fechar.png" alt="fechar" /></button>
          <Link onClick={handleClick} to="/">HOME</Link>
          <div className='line'></div>
          <Link onClick={handleClick} to="/Planos">PLANOS</Link>
          <div className='line'></div>
          <Link onClick={handleClick} to="/Ferramentas">FERRAMENTAS</Link>
          <div className='line'></div>
          <Link to="https://wa.me/5511977798407?text=Olá! Gostaria tirar um dúvida.">CONTATO</Link>
        </div>
      }
    </div>
  );
}
