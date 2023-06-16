import { useState } from 'react';
import './Times.css'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
// Importa a função 'v4' da biblioteca 'uuid' e atribui um nome local 'uuidv4' para ela, isso permite usar 'uuidv4' no código para gerar identificadores únicos
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [times, setTimes] = useState([
        {
            // Atribui um identificador único gerado pela função 'uuidv4()' na propriedade 'id' do objeto 
            id: uuidv4(),
            nome: 'Programação',
            cor: '#57C278',
        },
        {
            id: uuidv4(),
            nome: 'Front-End',
            cor: '#82CFFA',
        },
        {
            id: uuidv4(),
            nome: 'Data Science',
            cor: '#A6D157',
        },
        {
            id: uuidv4(),
            nome: 'Devops',
            cor: '#E06B69',
        },
        {
            id: uuidv4(),
            nome: 'UX e Design',
            cor: '#DB6EBF',
        },
        {
            id: uuidv4(),
            nome: 'Mobile',
            cor: '#FFBA05',
        },
        {
            id: uuidv4(),
            nome: 'Inovação e Gestão',
            cor: '#FF8A29',
        }
    ])

    const inicial = [
        {
            // Atribui um identificador único gerado pela função 'uuidv4()' na propriedade 'id' do objeto 
            id: uuidv4(),
            // Ao definir favorito: false, estamos indicando que o colaborador não é inicialmente considerado como favorito
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[0].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[1].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[2].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[3].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[4].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[5].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Juliana Amoasei',
            cargo: 'Desenvolvedora de software e instrutora',
            imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
            time: times[6].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Artine',
            cargo: 'Engenheiro de Software na Stone Age',
            imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
            time: times[6].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Guilherme Lima',
            cargo: 'Desenvolvedor Python e JavaScript na Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
            time: times[6].nome
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Paulo Silveira',
            cargo: 'Hipster e CEO da Alura',
            imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
            time: times[6].nome
        }
    ]

    const [colaboradores, setColaboradores] = useState(inicial) // usa um array vazio como valor inicial

    function aoNovoColaboradorCadastrado(colaborador) {
        setColaboradores([
            ...colaboradores,
            {
                id: uuidv4(),
                ...colaborador
            }
        ])
    }

    // Recebe como parâmetro o 'id' do colaborador que deve ser removido
    function deletarColaborador(id) {
        // Atualiza o estado da lista de 'colaboradores', removendo o colaborador com o 'id' correspondente
        setColaboradores(
            // Filtra a lista de 'colaboradores' e cria um novo array de colaboradores
            colaboradores.filter(colaborador => {
                // Mantém apenas os 'colaborador' que não possuem o 'id' igual ao 'id' do colaborador que deve ser removido
                return colaborador.id !== id
            })
        )
    }

    function mudarCorDoTime(cor, id) {
        // Atualiza o estado do componente com o novo array de times, incluindo a alteração da cor do time específico
        setTimes(
            // Percorre cada elemento do array 'times' e retorna um novo array com as alterações desejadas
            times.map(time => {
                // Verifica se o 'time.id' é igual ao parâmetro 'id' passado para a função 
                if (time.id === id) {
                    // Se for igual, atualiza a propriedade 'cor' desse time com o valor do parâmetro 'cor', caso contrário, retornamos o próprio objeto time sem modificação
                    time.cor = cor
                }
                return time
            })
        )
    }

    // Recebe como parâmetro um objeto contendo as informações do novo time a ser cadastrado
    function cadastrarTime(novoTime) {
        setTimes([
            // Utiliza o operador spread para copiar todos os objetos do array 'times' atual
            ...times,
            //  Adiciona um novo objeto de time
            {
                id: uuidv4(), // Adiciona a propriedade 'id' para garantir que o novo time tenha um identificador único
                ...novoTime   // Utiliza o operador spread para copiar todas as propriedades do objeto 'novoTime' para o novo objeto de time
            }
        ])
    }

    // Recebe como parâmetro um id, que é o 'id' do colaborador cujo status de favorito será alterado
    function definirFavorito(id) {
        setColaboradores(
            // Itera sobre o array de 'colaboradores' e retorna um novo array com as modificações aplicadas    
            colaboradores.map(colaborador => {
                // Para cada colaborador, é verificado se o seu 'id' é igual ao 'id' fornecido como argumento
                if(colaborador.id === id) {
                    // Se houver correspondência, altera o valor do atributo 'favorito' do colaborador, invertendo-o entre true e false
                    colaborador.favorito = !colaborador.favorito
                }
                // Retorna o array de colaboradores atualizado, com o status de favorito modificado para o colaborador específico
                return colaborador
            })
        )        
    }
    
    return (
        <div className="App">
            <Banner />
            <Formulario
                cadastrarTime={cadastrarTime}
                times={times.map(time => time.nome)}
                aoCadastrar={colaboradores => aoNovoColaboradorCadastrado(colaboradores)}
            />
            <section className='times'>
                <h2 className='times__titulo'>Minha Organização:</h2>
                <div className='times__sublinhado'></div>
                {times.map(time => (
                    <Time 
                        key={time.id}
                        time={time}
                        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                        // Passa a função 'deletarColaborador' como uma propriedade chamada 'aoDeletar' para o componente 'Time'
                        aoDeletar={deletarColaborador}
                        // Passa a função 'mudarCorDoTime' como uma propriedade chamada 'mudarCor' para o componente 'Time'
                        mudarCor={mudarCorDoTime}
                        // Passa a função 'definirFavorito' como uma propriedade chamada 'aoFavoritar' para o componente 'Time'
                        aoFavoritar={definirFavorito}
                    />
                ))}
            </section>
            <Rodape />
        </div>
    );
}

export default App;
