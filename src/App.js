//página principal
//caminho da pasta scr, antes tinha banner/banner q era o arquivo, com o uso do Arrow Functions mudou, ver notas no index.js
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;
