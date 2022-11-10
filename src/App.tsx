import styled from 'styled-components';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
    return (
        <Wrapper>
            <Header />
            <main>
                <Home />
            </main>
        </Wrapper>
    );
}

export default App;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 56px 1fr;
    gap: 1.5rem;

    @media (min-width: 48rem) {
        grid-template-rows: 72px 1fr;
        gap: 2rem;
    }

    @media (min-width: 64rem) {
        grid-template-columns: 96px, 1fr;
        grid-template-rows: auto;
        gap: 32px;
    }
`;
