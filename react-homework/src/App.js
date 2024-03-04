import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Заголовок" />
      <Main products={products} />
      <Footer title="Футер" />
    </div>
  );
}

export default App;
