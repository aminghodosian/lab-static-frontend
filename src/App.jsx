import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      margin: 0,
      fontFamily: 'Arial, sans-serif'
    },
    mainLayout: {
      display: 'flex',
      flex: 1
    }
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      <div style={styles.mainLayout}>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
