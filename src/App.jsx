import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <p>Welcome to the Software Engineering Lab.</p>
        <p>This is the main content area developed in feature branches.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
