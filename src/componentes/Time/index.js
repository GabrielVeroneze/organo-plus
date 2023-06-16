import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba'

const Time = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {

    const handleChange = (evento) => {
        mudarCor(evento.target.value, time.id)
    }

    return ( 
        colaboradores.length > 0 && (
            <section 
                className='time'
                style={{backgroundColor: hexToRgba(time.cor, '0.15')}}
            >
                <input 
                    className='time__cor' 
                    type='color'
                    value={time.cor}
                    onChange={handleChange}
                />
                <h3 className='time__titulo'>{time.nome}</h3>
                <div className='time__sublinhado' style={{backgroundColor: time.cor}}></div>
                <div className='time__colaboradores'>
                    {colaboradores.map(colaborador => {
                        return (
                            <Colaborador
                                key={colaborador.id}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />
                        ) 
                    })}
                </div>
            </section>
        ) 
    )
}

export default Time