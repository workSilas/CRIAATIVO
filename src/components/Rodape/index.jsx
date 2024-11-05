import './index.scss';
import { Link } from 'react-router-dom';

export default function Rodape() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="Rodape">
      <img src="/assets/images/LogoEstendida.png" alt="criaativo" />
      <div className='line' />
      <div className="info">
        <div className="content">
          <h1>SUPORTE</h1>
          <Link target='_blank' to={`https://wa.me/5511977798407?text=Olá! Gostaria tirar um dúvida.`}>CONTATO</Link>
        </div>
        <div className="content">
          <h1>MAPA DO SITE</h1>
          <Link onClick={handleClick} to={'/'}>HOME</Link>
          <Link onClick={handleClick} to={'/Ferramentas'}>NOSSAS FERRAMENTAS</Link>
          <Link onClick={handleClick} to={'/Planos'}>NOSSOS PLANOS</Link>
        </div>
        <div className="content" id='redes'>
          <h1>SIGA-NOS!</h1>
          <div className="alinhar">
            <Link onClick={handleClick} to={'/'}><img src="/assets/images/facebook.png" alt="facebook" /></Link>
            <Link onClick={handleClick} to={'/'}><img src="/assets/images/instagram.png" alt="instagram" /></Link>
          </div>
        </div>
      </div>
      <p>COPYRIGHT CRIAATIVO 2024©</p>
    </div>
  );
}