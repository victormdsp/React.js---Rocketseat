import './App.css';
import Cabeca from './Models/Head/head'
import Corpo from './Models/Body/body'
import Rodape from './Models/Footer/footer'

function App() {
  return (
    <div className="App">
      <Cabeca className = 'head'></Cabeca>
      <Corpo className = 'corpo'></Corpo>
      <Rodape className = 'rodape'></Rodape>
    </div>
  );
}

export default App;
