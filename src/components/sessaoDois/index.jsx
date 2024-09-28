import './index.scss';
import { Link } from 'react-router-dom';

export default function sessaoDois() {
  return (
    <div className="sessaoDois">
      <div className="sep">
        <img src="/assets/images/Logo.png" alt="logo" className='logo' />
        <p>{'.section{'}</p>
        <div className='text'>
          <h1>As mais modernas <br />
            tecnologias de criação <br />
             web!</h1>
          <ul>
            <li>Usamos as ferramentas e tecnologias mais  <br />
               avançadas e modernas do mercado, <br />
                mantendo seu site sempre no padrão W3C.</li>
          </ul>
          <Link to="/">VER NOSSAS FERRAMENTAS</Link>
        </div>
        <p className='end'>{'}'}</p>
      </div>
      <div className="sep">
        <img src="/assets/images/imagemSessao2.png" alt="imagem2" />
      </div>
    </div>
  );
}
