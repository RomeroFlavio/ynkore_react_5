import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/EstiloTarjeta.css';
import './css/NavBar.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import Tarjeta from './components/Tarjeta';


function App() {
    return (
    <div className="App">
        <header className="App-header">
            <NavBar/>
        </header>
        <main className="App-main d-flex flex-column flex-wrap">
            <ItemListContainer saludo='Coders trabajando: Proximamente mas contenido'/>

            <Tarjeta/>
        </main>
    </div>
);
}
export default App;
