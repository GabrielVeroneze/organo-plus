import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {

    const [colaboradores, setColaboradores] = useState([]) 

    function teste(colaborador) {
        console.log(colaborador);
    }

    return (
        <div className="App">
            <Banner />
            <Formulario aoColaboradorCadastrado={colaboradores => teste(colaboradores)}/>
        </div>
  );
}

export default App;
