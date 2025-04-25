import styled from 'styled-components';
import Footer from '../organisms/footer/Footer';
import Header from '../organisms/header/Header';

const LayoutStyled = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: ${({ theme }) =>
    `${theme.spacing['4xl']} 1fr ${theme.spacing['4xl']}`};
  justify-content: baseline;
`;

const Layout = ({ children }) => {
  return (
    <LayoutStyled className="layout">
      <Header title={'Pokédex'} />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
