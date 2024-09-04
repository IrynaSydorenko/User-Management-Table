import UsersContainer from './components/UsersContainer/UsersContainer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <UsersContainer />
      <Footer />
    </div>
  );
}

export default App;
