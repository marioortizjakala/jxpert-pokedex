import Footer from '../organisms/footer/Footer';
import Header from '../organisms/header/Header';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header title={'Pokédex'} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
