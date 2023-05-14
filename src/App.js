import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

    const [colaboradores, setColaboradores] = useState([]) 

    function aoNovoColaboradorCadastrado(colaborador) {
        console.log(colaborador);
        setColaboradores([...colaboradores, colaborador])
    }

    return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorCadastrado={colaboradores => aoNovoColaboradorCadastrado(colaboradores)}/>
        </div>
  );
}

export default App;
