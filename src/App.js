import styles from './styles/App.module.css';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className={styles.Container}>
      <Home />
    </div>
  );
}

export default App;
