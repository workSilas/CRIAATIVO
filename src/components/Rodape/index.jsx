import './index.scss';
import { Link } from 'react-router-dom';

export default function Rodape() {
  return (
    <div className="Rodape">
      <img src="/assets/images/LogoEstendida.png" alt="criaativo" />
      <div className='line' />
      <div className="info">
        <div className="content">
          <h1>SOBRE NÓS</h1>
          <Link to={'/'}>QUEM SOMOS</Link>
          <Link to={'/'}>TERMOS LEGAIS</Link>
          <Link to={'/'}>PARCEIROS</Link>
        </div>
        <div className="content">
          <h1>SUPORTE</h1>
          <Link to={'/'}>ATENDIMENTO AO CLIENTE</Link>
          <Link to={'/'}>CONTA</Link>
          <Link to={'/'}>CONTATO</Link>
          <Link to={'/'}>FAQ</Link>
          <Link to={'/'}>EMAIL</Link>
        </div>
        <div className="content">
          <h1>MAPA DO SITE</h1>
          <Link to={'/'}>NOVO PROJETO</Link>
          <Link to={'/'}>NOSSAS FERRAMENTAS</Link>
          <Link to={'/'}>SOFTWARES</Link>
          <Link to={'/'}>TEMPLATES</Link>
        </div>
        <div className="content" id='redes'>
          <h1>SIGA-NOS !</h1>
          <img src="/assets/images/Redes.png" alt="Redes" />
        </div>
      </div>
      <p>COPYRIGHT CRIAATIVO 2024©</p>
    </div>
  );
}
