import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

// Um componente que representa o formulário para inserção de dados do novo colaborador
const Formulario = (props) => {


    // Quatro variáveis de estado criadas para cada input de 'nome', 'cargo', 'imagem' e 'time'
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    // Essa função será executada quando o usuário dar 'submit' no formulário, clicando no botão 'Criar Card'
    const aoSalvar = (evento) => {
        // Impede o comportamento padrão do evento 'submit', que é recarregar a página.
        evento.preventDefault()
        //  Função que é passada como propriedade para o componente Formulario, recebe como parâmetro um objeto com as informações do novo colaborador cadastrado
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        // Limpa o formulário após adicionarmos um colaborador        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form className='formulario__caixa' onSubmit={aoSalvar}>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    // O valor atual da variável de estado 'nome' é passado para o componente 'CampoTexto'
                    valor={nome}
                    // Passa uma função como propriedade para o componente 'CampoTexto', chamada 'aoAlterado', que é usada para atualizar o estado 'nome'
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    // O valor atual da variável de estado 'cargo' é passado para o componente 'CampoTexto'
                    valor={cargo}
                    // Passa uma função como propriedade para o componente 'CampoTexto', chamada 'aoAlterado', que é usada para atualizar o estado 'cargo'
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem' 
                    // O valor atual da variável de estado 'imagem' é passado para o componente 'CampoTexto'
                    valor={imagem}
                    // Passa uma função como propriedade para o componente 'CampoTexto', chamada 'aoAlterado', que é usada para atualizar o estado 'imagem'
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Time' 
                    itens={props.times}
                    // O valor atual da variável de estado 'time' é passado para o componente 'ListaSuspensa'
                    valor={time}
                    // Passa uma função como propriedade para o componente 'ListaSuspensa', chamada 'aoAlterado', que é usada para atualizar o estado 'time'
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario