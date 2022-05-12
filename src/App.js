import styles from './App.module.css';
import Datas from './store/Datas';
import Router from './router/Router';

function App() {
  return (
    <Datas>
      <div className={styles.Container}>
        <Router />
      </div>
    </Datas>
  );
}

export default App;
