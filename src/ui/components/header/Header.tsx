const Header = ({ title }) => (
  <header className="header">
    <img src="/images/pokeball.svg" alt="" className="header__logo" />
    <p className="header__title">{title}</p>
  </header>
);

export default Header;
