//página principal
//caminho da pasta scr, antes tinha banner/banner q era o arquivo, com o uso do Arrow Functions mudou, ver notas no index.js
import { useState, useEffect  } from 'react';
import Banner from './componentes/Banner';//como está na raiz e busca na pasta src..
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';

export default function App() {
  const [teams, setTeams] = useState([
    {nome: 'Front-End', color: '#57C278',},
    {nome: 'Data Sciense', color: '#82CFFA',},
    {nome: 'Devops', color: '#A6D157',},
    {nome: 'Software Engineer', color: '#E06B69',},
    {nome: 'UX e Design', color: '#DB6EBF',},
    {nome: 'Mobile', color: '#FFBA05',}
  ])
  
  const [colaboradores, setColaboradores] = useState([])
  
  // Função para definir colaboradores iniciais
  useEffect(() => {
    const definirColaboradoresIniciais = () => {    // Defina aqui os colaboradores iniciais para teste
    const colaboradoresIniciais = [
      {
        nome: 'JULIANA AMOASEI 1',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: teams[0].nome
      },
      {
        nome: 'DANIEL ARTINE 1',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: teams[0].nome
      },
      {
        nome: 'GUILHERME LIMA 1',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: teams[0].nome
      },
      {
        nome: 'PAULO SILVEIRA 1',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: teams[0].nome
      },
      {
        nome: 'JULIANA AMOASEI 2',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: teams[1].nome
      },
      {
        nome: 'DANIEL ARTINE 2',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: teams[1].nome
      },
      {
        nome: 'GUILHERME LIMA 2',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: teams[1].nome
      },
      {
        nome: 'PAULO SILVEIRA 2',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: teams[1].nome
      },
      {
        nome: 'JULIANA AMOASEI 3',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: teams[2].nome
      },
      {
        nome: 'DANIEL ARTINE 3',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: teams[2].nome
      },
      {
        nome: 'GUILHERME LIMA 3',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: teams[2].nome
      },
      {
        nome: 'PAULO SILVEIRA 3',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: teams[2].nome
      },
      {
        nome: 'JULIANA AMOASEI 4',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: teams[3].nome
      },
      {
        nome: 'DANIEL ARTINE 4',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: teams[3].nome
      },
      {
        nome: 'GUILHERME LIMA 4',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: teams[3].nome
      },
      {
        nome: 'PAULO SILVEIRA 4',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: teams[3].nome
      },
      {
        nome: 'JULIANA AMOASEI 5',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: teams[4].nome
      },
      {
        nome: 'DANIEL ARTINE 5',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: teams[4].nome
      },
      {
        nome: 'GUILHERME LIMA 5',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: teams[4].nome
      },
      {
        nome: 'PAULO SILVEIRA 5',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: teams[4].nome
      },
      {
        nome: 'JULIANA AMOASEI 6',
        cargo: 'Desenvolvedora de software e instrutora',
        imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
        time: teams[5].nome
      },
      {
        nome: 'DANIEL ARTINE 6',
        cargo: 'Engenheiro de Software na Stone Age',
        imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
        time: teams[5].nome
      },
      {
        nome: 'GUILHERME LIMA 6',
        cargo: 'Desenvolvedor Python e JavaScript na Alura',
        imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
        time: teams[5].nome
      },
      {
        nome: 'PAULO SILVEIRA 6',
        cargo: 'Hipster e CEO da Alura',
        imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
        time: teams[5].nome
      },
    ];
    setColaboradores(colaboradoresIniciais);
    };
  
    definirColaboradoresIniciais();
    }, [teams]);
  // useEffect com array de dependências vazio para garantir que seja executado apenas uma vez no início
 
  
  const novoColaboradorAdicionado = (colaborador) => {
    //console.log(colaborador)
    //debugger//para depurar no vscode x react
    setColaboradores([...colaboradores, colaborador])//operador spread (...) cria um novo array que contém todos os elementos do 
    //array colaboradores existente, além de adicionar um novo elemento colaborador ao final desse array.
  }//em resumo ele faz um adicionar ao que já existe


  function deleteCollaborator(colaboradorNome) {
    console.log('Deletando Colaborador:', colaboradorNome);
    setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== colaboradorNome));
    }

  function changeCollorTeam(collorTeam, nameTeam){
    setTeams(teams.map(team => {
      if(team.nome === nameTeam) {
        team.color = collorTeam
      }
      return team
    }))

  }

  //times é o nome dado da props, q será pego onde se passa por exemplo props.times
  return (
    <div className="App">
      <Banner />
      <Formulario teams={teams.map(time => time.nome)} colaboradorCadastrado={colaborador => novoColaboradorAdicionado(colaborador)} />
      {teams.map(time => 
        <Time
          changeCollor={changeCollorTeam}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.color}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}//seleciona pra qual time o colaborador é
          inDelete={deleteCollaborator}
        />
      )}
      <Rodape />
    </div>
  );
}