import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = ({ aoCadastrar, times, cadastrarTime }) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

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

    // A função 'aoSalvarTime' é chamada quando o formulário de criação de um novo time for enviado
    const aoSalvarTime = (evento) => {
        evento.preventDefault()

        // A função 'cadastrarTime' passada como props, é responsável por adicionar um novo time à lista de times existentes
        cadastrarTime({
            // Passa um objeto com as propriedades 'nome' e 'cor', essas propriedades são obtidas dos estados 'nomeTime' e 'corTime', respectivamente
            nome: nomeTime,
            cor: corTime
        })
        // Os estados 'nomeTime' e 'corTime' são resetados para seus valores iniciais, limpando os campos do formulário 
        setNomeTime('')
        setCorTime('')
    }

    return (
        <section className='formulario'>
            <form className='formulario__caixa' onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
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
                <CampoTexto
                    obrigatorio
                    label='Nome' 
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio
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