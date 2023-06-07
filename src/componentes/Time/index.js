import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar}) => {

    return ( 
        colaboradores.length > 0 && (
            <section className='time' style={{backgroundColor: time.corSecundaria}}>
                <h3 className='time__titulo'>{time.nome}</h3>
                <div className='time__sublinhado' style={{backgroundColor: time.corPrimaria}}></div>
                <div className='time__colaboradores'>
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                corDeFundo={time.corPrimaria}
                                aoDeletar={aoDeletar}
                            />
                        ) 
                    })}
                </div>
            </section>
        ) 
    )
}

export default Time