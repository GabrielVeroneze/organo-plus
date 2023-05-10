import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('a')
    const [cargo, setCargo] = useState('b')
    const [imagem, setImagem] = useState('c')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('Form foi Submetido');
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
                    aoAlterado={(nome) => setNome(nome)}
                />
                <CampoTexto
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    aoAlterado={(cargo) => setCargo(cargo)}
                />
                <CampoTexto
                    label='Imagem'
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem}
                    aoAlterado={(imagem) => setImagem(imagem)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Time' 
                    itens={times}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario