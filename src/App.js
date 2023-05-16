import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

// O componente principal que importa e renderiza os outros componentes
function App() {

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
                // Passa uma função como propriedade para o componente 'Formulario', chamada 'aoColaboradorCadastrado', que é usada para atualizar o estado de colaboradores
                aoColaboradorCadastrado={colaboradores => aoNovoColaboradorCadastrado(colaboradores)}
            />
            <Time nome="Programação" />
            <Time nome="Front-End" />
            <Time nome="Data Science" />
        </div>
  );
}

export default App;
