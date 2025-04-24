import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.background9};
  color: ${({ theme }) => theme.colors.background0};
  text-align: center;
`;
const Footer = () => (
  <FooterStyled className="footer">
    <p>
      ©2024 Pokémon. ©1995 - 2024 Nintendo/Creatures Inc./GAME FREAK inc. TM,
      ®Nintendo.
    </p>
  </FooterStyled>
);

export default Footer;
