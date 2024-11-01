

import './index.scss';
import { Cabecalho } from '../../components/cabecalho';
import Rodape from '../../components/rodape';

export default function Home() {
  
  return (
    <div className='pag'>

    <Cabecalho/>

    <div className='info'>
      <div className='text'>
        <h1>Sejam Bem-Vindos a Front Company</h1>
        <text>A melhor empresa de desenvolvimento de sites para autônomos, onde podemos cubrir todas suas atividades através de um site</text>
      </div>

      <img src="/assets/images/primeiraimg.png" alt="" />
    </div>


    <div className='sobre'>
        <h1>Sobre Nós</h1>

        <p className='prin'>Nós da Front Company somos especializados no desenvolvimento de sites personalizados, oferencendo soluções sob medida que atendem ás necessidades específicas de autônomos.
        </p>

        <p className='prin2'>Nosso objetivo é criar plataformas atraentes e funcionais que reforcem  sua marca pessoal e atraiam novos clientes. Com atenção nos detalhes e um compromisso com a excelência.

        </p>

    </div>



    <div className='servico'>
      <h1>Nosso Serviços</h1>

      <div className='container'>

        <div class="card">
            <h3>Front-End Personalizado</h3>
            <p>Utilizando ReactJS, HTML e CSS, criamos sites responsivos que refletem sua identidade. Cada projeto é único e feito especialmente para você!</p>
        </div>

        <div class="card">
            <h3>Back-End Robusto</h3>
            <p>Desenvolvemos soluções back-end eficientes e seguras, garantindo que seu site funcione de maneira fluida e escalável.</p>
        </div>

        <div class="card">
            <h3>Hospedagem Confiável</h3>
            <p>Oferecemos serviços de hospedagem que garantem a disponibilidade e a segurança do seu site, com suporte técnico sempre à disposição.</p>
        </div>

        <div class="card">
            <h3>Manutenção Contínua</h3>
            <p>Nossa equipe fornece suporte técnico e manutenção regular, para que você possa se concentrar no que faz de melhor.</p>
        </div>

      </div>

    </div>

    <Rodape/>

    </div>
  );
}

 
