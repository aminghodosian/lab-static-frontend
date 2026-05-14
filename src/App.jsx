import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.mainArea}>
        <Sidebar />
       <main style={styles.content}>
          <h2>Dashboard Overview</h2>
          <p>This is the main content area (placeholder).</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainArea: {
    display: 'flex',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: '1rem',
  }
};

export default App;
