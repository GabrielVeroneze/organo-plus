import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {

    const handleChange = (evento) => {
        mudarCor(evento.target.value, time.nome)
    }

    return ( 
        colaboradores.length > 0 && (
            <section className='time' style={{backgroundColor: hexToRgba(time.cor, '0.15')}}>
                <input className='time__cor' type="color" value={time.cor} onChange={handleChange} />
                <h3 className='time__titulo'>{time.nome}</h3>
                <div className='time__sublinhado' style={{backgroundColor: time.cor}}></div>
                <div className='time__colaboradores'>
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                corDeFundo={time.cor}
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