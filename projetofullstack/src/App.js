import Logo from './componentes/logo/index';
import IconesHeader from './componentes/icones';
import OpcoesHeader from './componentes/opcoesHeader';
import Pesquisa from './componentes/pesquisa';
import UltimosLancamentos from './componentes/UltimosLancamentos';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

const AppHeader = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <AppContainer>
    <AppHeader>
        <Logo />
        <OpcoesHeader/>
        <IconesHeader/>
      </AppHeader>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
