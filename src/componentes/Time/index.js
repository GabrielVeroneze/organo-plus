import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    return ( 
        props.colaboradores.length > 0 && (
            <section className='time' style={{backgroundColor: props.corSecundaria}}>
                <h3 className='time__titulo'>{props.nome}</h3>
                <div className='time__sublinhado' style={{backgroundColor: props.corPrimaria}}></div>
                <div className='time__colaboradores'>
                    {props.colaboradores.map(colaborador => (
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