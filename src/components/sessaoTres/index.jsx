import './index.scss';
import { Link } from 'react-router-dom';

export default function sessaoTres() {
  return (
    <div className="sessaoTres">
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
              ou hackers</li>
          </ul>
          <Link to="/">VER NOSSAS FERRAMENTAS</Link>
        </div>
        <p className='end'>{'}'}</p>
      </div>
      <div className="sep">
        <img src="/assets/images/imagemSessao3.png" alt="imagem3" />
      </div>
    </div>
  );
}
