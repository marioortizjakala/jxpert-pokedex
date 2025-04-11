import Header from '../header/Header';
import Footer from '../footer/Footer';

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
