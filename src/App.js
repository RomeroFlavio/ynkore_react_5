import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/NavBar.css'
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      </header>
      <ItemListContainer saludo='Coders trabajando: Proximamente mas contenido'/>
    </div>
  );
}

export default App;
