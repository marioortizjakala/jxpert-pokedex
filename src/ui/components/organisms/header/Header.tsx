import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background0};
  box-shadow: ${({ theme }) => theme.shadows.m};
`;

const Header = ({ title }) => (
  <HeaderStyled className="header">
    <img src="/images/pokeball.svg" alt="" className="header__logo" />
    <p className="header__title">{title}</p>
  </HeaderStyled>
);

export default Header;
