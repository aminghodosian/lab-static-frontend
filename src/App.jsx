import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
    },
    contentArea: {
      flex: 1,
      padding: '20px',
      backgroundColor: '#f4f4f4'
    }
  };

  return (
    <div style={styles.appContainer}>
      <Header />
      <div style={styles.mainLayout}>
        <Sidebar />
        <main style={styles.contentArea}>
          <h2>Dashboard Overview</h2>
          <p>This is the main content area (placeholder).</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
