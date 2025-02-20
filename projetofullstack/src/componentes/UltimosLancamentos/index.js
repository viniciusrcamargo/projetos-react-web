import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components'
import { Titulo }  from '../titulo';
import CardRecomenda from '../cardRecomenda';
import livro2 from '../../imagens/livro2.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor="#EB9B00">ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
                { livros.map( livro => (
                    <img src={livro.src} alt={livro.alt}/>
                ) ) }
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo="Talvez você se interesse por..."
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação integrada com a plataforma Google."
                img={livro2}
                alt="Capa do livro Angular 11"
            />
        </UltimosLancamentosContainer>
    )
}


export default UltimosLancamentos;