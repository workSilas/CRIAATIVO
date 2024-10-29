import './index.scss';
import Rodape from '../../components/Rodape';
import Nav from '../../components/Nav';

export default function Ferramentas() {
  return (
    <div className="Ferramentas">
      <Nav />

      <div className="sessaoInicial">
        <img src="/assets/images/Logo.png" alt="logo" />
        <h1>Nossas <br /> Ferramentas</h1>
        <p>Linguaguens e ferramentas que utilizamos no desenvolvimento de páginas webs</p>
      </div>

      <div className="sessaoTexto">
        <div className="conteudo">
          <h2>Linguagens e <br />
            softwares</h2>
          <p>Trabalhamos com linguagens e softwares mais modernos e utilizados no mercado quando assunto é desenvolvimento WEB, dentre elas, a blibioteca <b style={{ color: "#00A5B8" }}>React Js</b> é a principal ferramenta que usamos para criar e desenvolver páginas webs.</p>
          <img src="/assets/images/ferramentasInicial.png" alt="softwares" />
        </div>
      </div>

      <div className="sessaoTexto">
        <div className="conteudo">
          <h2>Front-end</h2>
          <p>Nossa equipe conta com especialistas em liguaguens de desenvolvimento Front-end, como <b style={{ color: "#FF0202" }}>HTML5</b>, <b style={{ color: "#0059FF" }}>CSS3</b> e <b style={{ color: "#FFA600" }}>JAVASCRIPT</b>. Desenvolvemos páginas com animações, integrações de videos, pop-ups e muito mais, para deixar a sua página mais “viva”, e com a sua cara!</p>
          <img src="/assets/images/ferramentasNote.png" alt="softwares" />
        </div>
      </div>

      <div className="sessaoTexto">
        <div className="conteudo">
          <h2>Back-end e API</h2>
          <p>Também cuidamos do Back-end do seu site, tanto na modelação de dados, usando a linguagem <b style={{ color: "#2F00FF" }}>SQL</b>, como na criação e desenvolvimento de aplicações web (<b style={{ color: "#02B507" }}>API</b>).
            Desenvolvemos <b style={{ color: "#02B507" }}>API</b> em <b style={{ color: "#0C5602" }}>NodeJs</b>, um dos softwares de melhor desempenho quando se trata de criação de <b style={{ color: "#02B507" }}>API</b> e aplicaçôes webs.</p>
          <img src="/assets/images/ferramentasApi.png" alt="softwares" />
          <p>Trabalhamos com banco de dados <b style={{ color: "#2F00FF" }}>MySQL</b>, que é um dos mais utilizados no mercado da tecnologia pelas grandes empresas,  criamos a estrutura e base de dados, e deixamos pronta para a sua página web.</p>
        </div>
      </div>

      <div className="sessaoTexto">
        <div className="conteudo">
          <h2>Projetos do <b style={{color: "#FC1114"}}>F</b><b style={{color: "#F5595B"}}>i</b><b style={{color: "#AE35F2"}}>g</b><b style={{color: "#37BE45"}}>m</b><b style={{color: "#07A1DE"}}>a</b></h2>
          <p>Transformamos o seu desing do Figma em uma página web, bastar nos compartilhar seu projeto Figma seguindo o seguinte passo:<br/>
            1: Com seu projeto Figma aberto, clique em <b style={{ color: "#fff", fontWeight: 12, backgroundColor: "#07A1DE", paddingLeft: 3, paddingRight: 3, borderRadius: 5 }}>Share</b> no canto superior direito.<br/>
            2: Mande um convite para o email criaativonovoprojeto@gmail.com.
            Pronto, agora o seu projeto no Figma está sendo compartilhado conosco! E assim que escolher qual plano de desenvolvimento deseja, o prazo de entrega será informado.</p>
          <img src="/assets/images/ferramentasFigma.png" alt="softwares" />
        </div>
      </div>

      <Rodape />
    </div>
  );
}