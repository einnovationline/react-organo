//página principal
//caminho da pasta scr, antes tinha banner/banner q era o arquivo, com o uso do Arrow Functions mudou, ver notas no index.js
import { useState } from 'react';
import Banner from './componentes/Banner';//como está na raiz e busca na pasta src..
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

export default function App() {
  const [colaboradores, setColaboradores] = useState([])
  const novoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)
    debugger//para depurar no vscode x react
    setColaboradores([...colaboradores, colaborador])//operador spread (...) cria um novo array que contém todos os elementos do array colaboradores existente, além de adicionar um novo elemento colaborador ao final desse array.
  }//em resumo ele faz um adicionar ao que já existe

  const times = [
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ]


  function deleteCollaborator() {
    console.log('Deletando Colaborador')
  }

  console.log("deleteCollaborator:", deleteCollaborator);

  //times é o nome dado da props, q será pego onde se passa por exemplo props.times
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)} />
      {times.map(time => 
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}//seleciona pra qual time o colaborador é
          inDelete={deleteCollaborator}
        />
      )}
      <Rodape />
    </div>
  );
}

//export default App;
