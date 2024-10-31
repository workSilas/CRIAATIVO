import './index.scss';
import Nav from '../../components/Nav';

export default function Planos(){

    return(

        /*CABEÇALHO*/
        <div className='Pagina-planos'>
                    <Nav/>
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
          <h2>Passo 1<br />
            escolha do plano</h2>
                        
                    <div className='divisor'>
                           <div className='paragrafo'>
                                <p>Oferecemos planos de desenvolvimentos web para todas as necessidades, desde páginas webs simples, ou sites avançados.
                                Primeiro deve escolher qual plano se encaixa melhor a sua necessidade, após escolher qual plano deseja, será possivel configurar o plano
                                escolhendo: quantidade de páginas, incluir hospedagem e base de tratamento de dados e dentre outros para que o plano fique ainda mais flexível a sua necessiadade.
                                </p>
                            </div>     
                        <img src="./assets/images/imagemPlanos.png" alt="" />
                    </div> 

            


        </div>
        
      </div>
        
      <div className="sessaoTexto superior-planos">
        <div className="conteudo planos">
          <h2>Passo 2<br />
            contato com nossa equipe</h2>
                        
                    <div className='divisor'>
                            <img src="./assets/images/imagemEQUIPE.png" alt="" />
                           <div className='paragrafo'>
                                <p>Após escolher e configurar o plano, você poderá ver o valor estimado para a criação do seu web site, que pode variar de acordo com a configuração do seu plano, e da complexidade da página. Assim que configurar seu plano, nossa equipe entrará em contato via email ou whatsapp
                                    para atendelo e começar o processo de triagem do seu projeto, passando o preço final e o prazo de entrega para a sua página web ou web site.
                                </p>
                            </div>     
                        
                    </div> 

            


        </div>
        
      </div>
        
      <div className="divisao">
        <h1>WEB SITE<br />
          SIMPLES</h1>
      </div>
      
        
      <div className="sessaoTexto superior-planos">
                    <div className="conteudo planos">
        
                                <div className='divisor'>
                                    <div className='paragrafo'>
                                            <p>Oferecemos planos de desenvolvimentos web para todas as necessidades, desde páginas webs simples, ou sites avançados.
                                            Primeiro deve escolher qual plano se encaixa melhor a sua necessidade, após escolher qual plano deseja, será possivel configurar o plano
                                            escolhendo: quantidade de páginas, incluir hospedagem e base de tratamento de dados e dentre outros para que o plano fique ainda mais flexível a sua necessiadade.
                                            </p>
                                        </div>     
                                    <img src="./assets/images/imagemPlanos.png" alt="" />
                                </div> 

                    </div>
        
      </div>
        
        
        
        
        </div>

    )
}