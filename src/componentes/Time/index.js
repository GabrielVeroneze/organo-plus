import Colaborador from '../Colaborador'
import './Time.css'
// Importa a biblioteca 'hex-to-rgba', ela fornece a função 'hexToRgba' que é utilizada para converter valores hexadecimais em valores rgba
import hexToRgba from 'hex-to-rgba'

const Time = ({time, colaboradores, aoDeletar, mudarCor}) => {

    const handleChange = (evento) => {
        // É uma função que foi passada como props para o componente 'Time', o 1º argumento é o valor da cor (evento.target.value) e o 2º argumento é o id do time (time.id)
        mudarCor(evento.target.value, time.id)
    }

    return ( 
        colaboradores.length > 0 && (
            <section 
                className='time'
                // A função 'hexToRgba' importada recebe dois argumentos, 1º o valor da cor em hexadecimal (time.cor) e o 2º valor da opacidade ('0.15')
                style={{backgroundColor: hexToRgba(time.cor, '0.15')}}
            >
                <input 
                    className='time__cor' 
                    type='color'
                    value={time.cor}
                    // Quando o usuário altera a cor selecionada, a função 'handleChange' é chamada para tratar essa mudança
                    onChange={handleChange}
                />
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
                                // A propriedade é usada para passar a referência da função 'aoDeletar' para cada instância do componente 'Colaborador'
                                aoDeletar={aoDeletar}
                                id={colaborador.id}
                            />
                        ) 
                    })}
                </div>
            </section>
        ) 
    )
}

export default Time