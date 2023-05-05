import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = () => {

    const itens = [
        {
            id: 1,
            time: "Doidos"
        },
        {
            id: 2,
            time: "Bipolares"
        }
    ]

    return (
        <section className='formulario'>
            <form className='formulario__caixa'>
                <h2 className='formulario__titulo'>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="Time" time={itens}/>
            </form>
        </section>
    )
}

export default Formulario