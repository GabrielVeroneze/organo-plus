import './Colaborador.css'
// Importa o ícone 'AiFillCloseCircle' do pacote de ícones 'react-icons'
import { AiFillCloseCircle } from 'react-icons/ai'

const Colaborador = ({nome, cargo, imagem, corDeFundo, aoDeletar, id}) => {
    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className='colaborador__deletar'
                // Atrubui a função 'aoDeletar' ao evento de clique do componente, portanto, quando o ícone for clicado, a função 'aoDeletar' será executada
                onClick={() => aoDeletar(id)}
            />
            <div className='colaborador__cabecalho' style={{backgroundColor: corDeFundo}}>
                <img className='colaborador__imagem' src={imagem} alt={nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{nome}</h4>
                <h5 className='colaborador__cargo'>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador