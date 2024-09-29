import './index.scss';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav';

export default function SessaoInicial() {
  return (
    <div className="SessaoInicial">
      <Nav />
      <div className='square'>
        <img src="/assets/images/LogoEstendida.png" alt="criaativo" />
        <div className='text'>
          <h1>Um site ajudaria no <br />
            desenvolvimento            do <br />
            seu negócio?</h1>
          <p>Somos especializados na criação de páginas <br />
            webs e sites, que podem impulsionar e trazer <br />
            mais visibilidade para o seu negócio.</p>
        </div>
        <Link to="/">SABER MAIS</Link>
      </div>
    </div>
  );
}
