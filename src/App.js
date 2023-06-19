import { useState } from 'react';
import './Times.css'
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

    const [times, setTimes] = useState([
        {
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
            id: uuidv4(),
            favorito: false,
            nome: 'Lucas Oliveira',
            cargo: 'Desenvolvedor Front-End com habilidades em Angular e CSS',
            imagem: 'https://randomuser.me/api/portraits/men/7.jpg',
            time: 'Front-End'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Félix Silva',
            cargo: 'Desenvolvedor Front-End com experiência em React e Redux',
            imagem: 'https://randomuser.me/api/portraits/men/9.jpg',
            time: 'Front-End'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Laura Santos',
            cargo: 'Desenvolvedora Front-End com habilidades em Vue.js e CSS',
            imagem: 'https://randomuser.me/api/portraits/women/14.jpg',
            time: 'Front-End'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Daniel Castro',
            cargo: 'Desenvolvedor Front-End com conhecimentos em Angular e TypeScript',
            imagem: 'https://randomuser.me/api/portraits/men/15.jpg',
            time: 'Front-End'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Ana Silva',
            cargo: 'Designer de Interface com habilidades em Adobe XD e Figma',
            imagem: 'https://randomuser.me/api/portraits/women/2.jpg',
            time: 'UX e Design'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Pedro Santos',
            cargo: 'Engenheiro de DevOps especializado em AWS e Docker',
            imagem: 'https://randomuser.me/api/portraits/men/1.jpg',
            time: 'Devops'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Gustavo Rodrigues',
            cargo: 'Desenvolvedor Mobile com experiência em Kotlin e Swift',
            imagem: 'https://randomuser.me/api/portraits/men/5.jpg',
            time: 'Mobile'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Isabela Pereira',
            cargo: 'Cientista de Dados especializada em Machine Learning com Python e TensorFlow',
            imagem: 'https://randomuser.me/api/portraits/women/6.jpg',
            time: 'Data Science'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Letícia Santos',
            cargo: 'Engenheira de DevOps especializada em Azure e Kubernetes',
            imagem: 'https://randomuser.me/api/portraits/women/8.jpg',
            time: 'Devops'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Fernanda Almeida',
            cargo: 'Designer de Interface com habilidades em Sketch e Adobe Illustrator',
            imagem: 'https://randomuser.me/api/portraits/women/10.jpg',
            time: 'UX e Design'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Rafael Pereira',
            cargo: 'Engenheiro de DevOps especializado em AWS e Terraform',
            imagem: 'https://randomuser.me/api/portraits/men/11.jpg',
            time: 'Devops'
        },
        {
            id: uuidv4(),
            favorito: false,
            nome: 'Julia Santos',
            cargo: 'Cientista de Dados especializada em análise de dados com R e SQL',
            imagem: 'https://randomuser.me/api/portraits/women/16.jpg',
            time: 'Data Science'
        }
    ]

    const [colaboradores, setColaboradores] = useState(inicial)

    function aoNovoColaboradorCadastrado(colaborador) {
        setColaboradores([
            ...colaboradores,
            {
                id: uuidv4(),
                ...colaborador
            }
        ])
    }

    function deletarColaborador(id) {
        setColaboradores(
            colaboradores.filter(colaborador => {
                return colaborador.id !== id
            })
        )
    }

    function mudarCorDoTime(cor, id) {
        setTimes(
            times.map(time => {
                if (time.id === id) {
                    time.cor = cor
                }
                return time
            })
        )
    }

    function cadastrarTime(novoTime) {
        setTimes([
            ...times,
            {
                id: uuidv4(),
                ...novoTime
            }
        ])
    }

    function definirFavorito(id) {
        setColaboradores(
            colaboradores.map(colaborador => {
                if(colaborador.id === id) {
                    colaborador.favorito = !colaborador.favorito
                }
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
                        aoDeletar={deletarColaborador}
                        mudarCor={mudarCorDoTime}
                        aoFavoritar={definirFavorito}
                    />
                ))}
            </section>
            <Rodape />
        </div>
    );
}

export default App;
