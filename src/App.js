import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

// O componente principal que importa e renderiza os outros componentes
function App() {

    const times = [
        {
            nome: 'Programação',
            corPrimaria: '#57C278',
            corSecundaria: '#D9F7E9'
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF'
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2'
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8'
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#DB6EBF',
            corSecundaria: '#FAE9F5'
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FFBA05',
            corSecundaria: '#FFF5D9'
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF'
        }
    ]

    const [colaboradores, setColaboradores] = useState([]) 

    // Recebe os dados do novo colaborador que foram inseridos no formulário.
    function aoNovoColaboradorCadastrado(colaborador) {
        console.log(colaborador);
        //  Cria um novo array a partir do array 'colaboradores' atual e adiciona o novo colaborador no final
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner />
            <Formulario 
                // Essa propriedade recebe um novo array contendo apenas os nomes dos times
                times={times.map(time => time.nome)}
                // Passa uma função como propriedade para o componente 'Formulario', chamada 'aoColaboradorCadastrado', que é usada para atualizar o estado de 'colaboradores'
                aoColaboradorCadastrado={colaboradores => aoNovoColaboradorCadastrado(colaboradores)}
            />
            {times.map(time => (
                // Para cada elemento do array é retornado um componente 'Time' com propriedades específicas (Cada componente 'Time' corresponderá a um elemento do array 'times')
                <Time 
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSecundaria={time.corSecundaria}
                    // Essa propriedade recebe um array filtrado de colaboradores específicos para aquele time. A função filter() é utilizada para retornar apenas os colaboradores cujo time corresponda ao 'time.nome' atual do loop
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                />
            ))}
            <Rodape />
        </div>
    );
}

export default App;
