import styles from './App.module.css';
import Router from './router/Router';

function App() {
  return (
    <div className={styles.Container}>
      <Router />
    </div>
  );
}

export default App;
