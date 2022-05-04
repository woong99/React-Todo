import styles from './styles/App.module.css';
import './App.css';
import Home from './pages/Home';
import Datas from './store/Datas';

function App() {
  return (
    <Datas>
      <div className={styles.Container}>
        <Home />
      </div>
    </Datas>
  );
}

export default App;
