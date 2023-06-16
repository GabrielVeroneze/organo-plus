import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault()

        cadastrarTime({
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('')
        setCorTime('#000000')
    }

    return (
        <section className='formulario'>
            <form className='formulario__caixa' onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label='Imagem'
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Time' 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form className='formulario__caixa' onSubmit={aoSalvarTime}>
                <h2 className='formulario__titulo'>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label='Nome' 
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    type='color'
                    label='Cor'
                    placeholder='Digite a cor do time'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar novo Time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario