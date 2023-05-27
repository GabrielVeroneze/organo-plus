import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    return ( 
        // Verifica se o array de 'colaboradores' é maior que zero, ou seja, se há colaboradores para aquele time. Garantindo que o componente 'Time' seja renderizado apenas quando houver colaboradores associados a ele
        props.colaboradores.length > 0 && (
            // Define a cor de fundo da seção com base na propriedade 'corSecundaria' passada para o componente
            <section className='time' style={{backgroundColor: props.corSecundaria}}>
                <h3 className='time__titulo'>{props.nome}</h3>
                <div className='time__sublinhado' style={{backgroundColor: props.corPrimaria}}></div>
                <div className='time__colaboradores'>
                    {props.colaboradores.map(colaborador => (
                        //  Mapeia o array de colaboradores e renderiza um componente 'Colaborador' para cada item do array. Cada 'Colaborador' recebe as propriedades key, nome, cargo e imagem com base nos valores do objeto colaborador correspondente
                        <Colaborador
                            key={colaborador.nome}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            corDeFundo={props.corPrimaria}
                        />
                    ))}
                </div>
            </section>
        ) 
    )
}

export default Time