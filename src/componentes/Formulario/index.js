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
                    // Passa como props o tipo do <input> para o componente 'Campo', criando um campo de entrada específico para seleção de cores
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