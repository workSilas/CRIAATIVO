import './index.scss';

import { Link } from 'react-router-dom';
import Rodape from '../../components/Rodape';
import Nav from '../../components/Nav';

export default function Home() {
  return (
    <div className="Home">
      <Nav />
      <div className="SessaoInicial">
        <div className='square'>
          <img src="/assets/images/LogoEstendida.png" alt="criaativo" />
          <div className='text'>
            <h1>Um site ajudaria no <br />
              desenvolvimento do <br />
              seu negócio?</h1>
            <p>Somos especializados na criação de páginas <br />
              webs e sites, que podem impulsionar e trazer <br />
              mais visibilidade para o seu negócio.</p>
          </div>
          <Link to="/">SABER MAIS</Link>
        </div>
      </div>

      <div className="Sessao">
        <div className="sep">
          <img src="/assets/images/Logo.png" alt="logo" className='logo' />
          <p>{'<div>'}</p>
          <div className='text'>
            <h1>Nunca foi tão fácil criar!</h1>
            <ul>
              <li>Criamos o seu site perfeito, totalmente do <br />
                zero, ou reestruturamos um site ja existente!</li>
              <li>Profissonais qualificados prontos <br />
                para transformar o seu site em realidade.</li>
            </ul>
            <Link to="/Planos">VER PLANOS</Link>
          </div>
          <p className='end'>{'</div>'}</p>
        </div>
        <div className="sep">
          <img src="/assets/images/imagemSessao1.png" alt="imagem1" />
        </div>
      </div>

      <div className="divisao">
        <h1>MODERNIDADE <br />
          E TECNOLOGIA</h1>
      </div>

      <div className="Sessao" id='invert'>
        <div className="sep">
          <img src="/assets/images/Logo.png" alt="logo" className='logo' />
          <p>{'.section{'}</p>
          <div className='text'>
            <h1>As mais modernas<br />
              tecnologias de criação<br />
              web!</h1>
            <ul>
              <li>Usamos as ferramentas e tecnologias mais  <br />
                avançadas e modernas do mercado,<br />
                mantendo seu site sempre no padrão W3C.</li>
            </ul>
            <Link to="/Ferramentas">VER NOSSAS FERRAMENTAS</Link>
          </div>
          <p className='end'>{'}'}</p>
        </div>
        <div className="sep">
          <img src="/assets/images/imagemSessao2.png" alt="imagem2" />
        </div>
      </div>

      <div className="divisao">
        <h1>SEGURANÇA E <br />
          PROTEÇÃO</h1>
      </div>

      <div className="Sessao">
        <div className="sep">
          <img src="/assets/images/Logo.png" alt="logo" className='logo' />
          <p>{'.body{'}</p>
          <div className='text'>
            <h1>Proteção e criptografia de <br />
              dados!</h1>
            <ul>
              <li>Usamos criptografia de ponta para <br />
                proteger os dados do seu site e clientes!</li>
              <li>Tecnologia contra ataque e invasão de bots <br />
                ou hackers.</li>
            </ul>
            <Link to="/Ferramentas">VER NOSSAS FERRAMENTAS</Link>
          </div>
          <p className='end'>{'}'}</p>
        </div>
        <div className="sep">
          <img src="/assets/images/imagemSessao3.png" alt="imagem3" />
        </div>
      </div>

      <Rodape />
    </div>
  );
}
