import './index.scss';
import Nav from '../../components/Nav';
import { useState } from 'react';
import Rodape from '../../components/Rodape'

export default function Planos() {

  const [qtd_pag_simples, setQtd_pags] = useState(1);
  const [preco_pag_simples, setPreco_pag_simples] = useState(600.00)
  const [preco_pag_simples_plus, setPreco_pag_simples_plus] = useState(1200)
  const [qtd_pag_simples_plus, setQtd_pag_simples_plus] = useState(1)

  {/*funçoes da página web simples plus*/ }


  function Adicionou_plus() {
    if (qtd_pag_simples_plus < 20) {
      setQtd_pag_simples_plus(qtd_pag_simples_plus + 1)
      setPreco_pag_simples_plus(preco_pag_simples_plus + 350)
    }

  }

  function Subtraiu_plus() {
    if (qtd_pag_simples_plus > 1) {
      setQtd_pag_simples_plus(qtd_pag_simples_plus - 1)
      setPreco_pag_simples_plus(preco_pag_simples_plus - 350)
    }

  }




  function Incluir_banco_plus(e) {
    let novo_valor = e.target.checked
    if (novo_valor == true) {
      setPreco_pag_simples_plus(preco_pag_simples_plus + 3500)
    }
  }

  function Naoincluir_banco_plus(e) {
    let novo_valor = e.target.checked
    if (novo_valor == true) {
      setPreco_pag_simples_plus(preco_pag_simples_plus - 3500)
    }
  }




  function Incluir_plus(e) {
    let novo_valor = e.target.checked
    if (novo_valor == true) {
      setPreco_pag_simples_plus(preco_pag_simples_plus + 240)
    }
  }

  function Naoincluir_plus(e) {
    let novo_valor = e.target.checked
    if (novo_valor == true) {
      setPreco_pag_simples_plus(preco_pag_simples_plus - 240)
    }
  }

  {/*funçoes da página web simples*/ }




  function Incluir(e) {
    let incluiu_hospedagem = e.target.checked;
    if (incluiu_hospedagem == true) {
      setPreco_pag_simples(preco_pag_simples + 120)
    }
  }


  function NaoIncluir(e) {
    let nao_incluiu_hospedagem = e.target.checked;
    if (nao_incluiu_hospedagem == true) {
      setPreco_pag_simples(preco_pag_simples - 120)
    }
  }



  function Adicionou() {
    if (qtd_pag_simples < 4) {
      setQtd_pags(qtd_pag_simples + 1)

      setPreco_pag_simples(preco_pag_simples + 200)
    }

  }

  function Subtraiu() {
    if (qtd_pag_simples > 1) {
      setQtd_pags(qtd_pag_simples - 1)
      setPreco_pag_simples(preco_pag_simples - 200)
    }

  }



  return (

    /*CABEÇALHO*/
    <div className='Pagina-planos'>
      <Nav />
      <div className="sessaoInicial">
        <img src="/assets/images/Logo.png" alt="logo" />
        <h1>Planos e <br /> Serviços</h1>
        <p>Planos e serviços para desenvolvimento de páginas ou web sites</p>
      </div>



      <div className="divisao">
        <h1>PROCESSO DE<br />
          CONTRATAÇÃO DO PLANO</h1>
      </div>


      <div className="sessaoTexto superior-planos">
        <div className="conteudo planos">


          <div className='divisor'>
            <div className='paragrafo'>
              <img src="./assets/images/Logo.png" alt="" />
              <p className='start'>{'<div>'}</p>
              <h1>Passo 1<br />
                escolha do plano</h1>
              <p>Oferecemos planos de desenvolvimentos web para todas as necessidades, desde páginas webs simples, ou sites avançados.
                Primeiro deve escolher qual plano se encaixa melhor a sua necessidade, após escolher qual plano deseja, será possivel configurar o plano
                escolhendo: quantidade de páginas, incluir hospedagem e base de tratamento de dados e dentre outros para que o plano fique ainda mais flexível a sua necessiadade.
              </p>
              <p className='end'>{'</div>'}</p>
            </div>
            <img src="./assets/images/imagemPlanos.png" alt="" />
          </div>




        </div>

      </div>

      <div className="sessaoTexto superior-planos">
        <div className="conteudo planos">


          <div className='divisor'>
            <img src="./assets/images/imagemEQUIPE.png" alt="" />
            <div className='paragrafo'>
              <img src="./assets/images/Logo.png" alt="" />
              <p className='start'>{'.section{'}</p>
              <h1>Passo 2<br />contato com nossa equipe </h1>
              <p>Após escolher e configurar o plano, você poderá ver o valor estimado para a criação do seu web site, que pode variar de acordo com a configuração do seu plano, e da complexidade da página. Assim que configurar seu plano, nossa equipe entrará em contato via email ou whatsapp
                para atendelo e começar o processo de triagem do seu projeto, passando o preço final e o prazo de entrega para a sua página web ou web site.
              </p>
              <p className='end'>{'}'}</p>
            </div>

          </div>





        </div>

      </div>

      <div className="divisao">
        <h1>WEB SITE<br />
          SIMPLES</h1>
      </div>


      <div className="paginas">
        <div className="conteudo paginaweb">

          <div className='esquerda'>
            <p>Página de exemplo</p>
            <img src="./assets/images/EXEMPLO.jpg" alt="" />
          </div>
          <div className='direita'>




            <div className='bloco-superior'>
              <div className='txt-1'>
                <h1>Página web Front-end simples</h1>
                <p>Web site com Páginas Front-end de Landing page e página de apresentação de serviço ou produtos, recomendamos este plano para autônomos ou MEI que prestam serviços ou produtos ex: luthieria, serviços de faxina, serviços de creches ou cuidador de pessoas, oficinas, assistências técnicas etc.</p>
              </div>
              <div className='detalhes-planos'>
                <h2>Detalhes do plano</h2>
                <ul>
                  <li>Apenas Front-end</li>
                  <li>Manuntenções e alterações nas páginas (primeira alteração é inclusa no plano, as demais serão cobradas apartir de RS:120,00)</li>
                  <li>DNS, Domínio e Hospedagem já inclusos (renovação será cobrada 1 vez ao ano no valor de RS:120,00)</li>
                </ul>

              </div>
            </div>




            <div className='bloco-inferior'>

              <div className='titu-config-plano'>
                <h2>Configure o plano</h2>
              </div>

              <div className='sessaoConfig'>
                <div className='faixa-configuracao'>
                  <h3>Quantidade de páginas</h3>
                  <button onClick={Subtraiu}>-</button>

                  <h4>{qtd_pag_simples}</h4>

                  <button onClick={Adicionou}>+</button>

                  <p>Máximo do plano: 4 | valor médio de cada página: 200,00</p>





                </div>
                <div className='faixa-configuracao'><h3>Hospedagem</h3>
                  <input type="radio" name='incluir-hospedagem' onChange={Incluir} /><p>Sim</p>
                  <input type="radio" name='incluir-hospedagem' onChange={NaoIncluir} /><p>Não</p>
                  <p className='hospedagem-preco'>R$ 120,00 mensal</p>


                </div>


              </div>


              <div className='preco-plano'>
                <p>Preço final pode alterar de acordo com a configuração do plano, e complexidade das páginas </p>
                <h1>R${preco_pag_simples.toFixed(2).replace(".", ",")}</h1>
              </div>




            </div>
          </div>

        </div>

      </div>



      {/*PÁGINA WEB SIMPLE PLUS*/}






      <div className="divisao">
        <h1>WEB SITE<br />
  PLUS</h1>
      </div>
      {/*FAIXA AZUL QUE DIVIDE SESSOES*/}

      <div className="paginas">


        <div className="conteudo paginaweb">  {/*FUNDO DAS PAGS*/}

          <div className='esquerda'> {/*PARTE ESUQERDA DO PLANOS*/}
            <p>Página de exemplo</p>
            <img src="./assets/images/EXEMPLO.jpg" alt="" />
          </div>
          <div className='direita'> {/*PARTE DIREITA*/}

            <div className='bloco-superior'>
              <div className='txt-1'>
                <h1>Página web Front-end e Back-end simples</h1>
                <p>Web site com Páginas Front-end e Back-end para aplicações simples. Recomendamos este plano para MEI ou empreendedores que desejam um site para anunciar e vender produtos exemplo: floriculturas, alfaiataria / costureira, lojas de roupas etc.</p>
              </div>
              <div className='detalhes-planos'>
                <h2>Detalhes do plano</h2>
                <ul>
                  <li>Front-end e Back-end</li>
                  <li>Base de tratamento de dados e simples aplicações Back-end</li>
                  <li>Manuntenções e alterações nas páginas (primeira alteração é inclusa no plano, as demais serão cobradas apartir de RS:120,00)</li>
                  <li>DNS, Domínio e Hospedagem já inclusos (renovação será cobrada 1 vez ao ano no valor de RS:120,00)</li>
                </ul>

              </div>
            </div>

            <div className='bloco-inferior'>

              <div className='titu-config-plano'>
                <h2>Configure o plano</h2>
              </div>

              <div className='sessaoConfig'>
                <div className='faixa-configuracao'>
                  <h3>Quantidade de páginas</h3>
                  <button onClick={Subtraiu_plus}>-</button>

                  <h4>{qtd_pag_simples_plus}</h4>

                  <button onClick={Adicionou_plus}>+</button>

                  <p>Máximo do plano: 20 | valor médio de cada página: 350,00</p>

                </div>
                <div className='faixa-configuracao'><h3>Hospedagem</h3>
                  <input type="radio" name='incluir-hospedagem-plus' onChange={Incluir_plus} /><p>Sim</p>
                  <input type="radio" name='incluir-hospedagem-plus' onChange={Naoincluir_plus} /><p>Não</p>
                  <p className='hospedagem-preco'>R$ 240,00 mensal</p>


                </div>
                <div className='faixa-configuracao'><h3>Banco de dados</h3>
                  <input type="radio" name='incluir-bancoDeDados' onChange={Incluir_banco_plus} /><p>Sim</p>
                  <input type="radio" name='incluir-bancoDeDados' onChange={Naoincluir_banco_plus} /><p>Não</p>
                  <p className='hospedagem-preco'>R$ 3500,00</p>


                </div>


              </div>


              <div className='preco-plano'>
                <p>Preço final pode alterar de acordo com a configuração do plano, e complexidade das páginas </p>
                <h1>R${preco_pag_simples_plus.toFixed(2).replace(".", ",")}</h1>
              </div>




            </div>
          </div>

        </div>

      </div>

      <Rodape />

    </div>

  )
}
