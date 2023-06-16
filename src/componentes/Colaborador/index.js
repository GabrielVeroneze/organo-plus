import './Colaborador.css'
// Importa os icones AiFillCloseCircle (círculo preenchido com X), AiFillHeart (coração preenchido) e AiOutlineHeart (coração vazio) do pacote de ícones 'react-icons'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    
    // Função que será executada quando o ícone de favorito for clicado
    const handleClick = () => {
        // Chama a função 'aoFavoritar' passada como props para o componente 'Colaborador', e passa o identificador do colaborador como argumento para essa função
        aoFavoritar(colaborador.id)
    }

    // Cria um objeto com as configurações comuns para os ícones de favorito, evitando a repetição de código e facilitando futuras modificações dessas props
    const propsFavorito = {
        // Essa propriedade define o tamanho do ícone de favorito, o valor atribuído é 25
        size: 25,
        // Essa propriedade adiciona o evento 'onClick' no ícone de favorito e atribui a função 'handleClick' como o manipulador do evento de clique
        onClick: handleClick
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle
                className='colaborador__deletar'
                // Atrubui a função 'aoDeletar' ao evento de clique do componente, então, quando o ícone for clicado, a função 'aoDeletar' será executada passando o id do colaborador como argumento
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='colaborador__cabecalho' style={{backgroundColor: corDeFundo}}>
                <img className='colaborador__imagem' src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className='colaborador__rodape'>
                <h4 className='colaborador__nome'>{colaborador.nome}</h4>
                <h5 className='colaborador__cargo'>{colaborador.cargo}</h5>
                <div className='colaborador__favoritar'>
                    {colaborador.favorito ? (
                        // Se 'colaborador.favorito' for avaliado como true, o ícone de coração preenchido será renderizado
                        <AiFillHeart 
                            // O operador spread faz com que todas as propriedades do objeto 'propsFavorito' sejam extraídas e passadas como props separadas para o elemento JSX 
                            {...propsFavorito}
                            color='#FF0000'
                        />
                    ) : (
                        // Se 'colaborador.favorito' for avaliado como false, o ícone de coração vazio será renderizado
                        <AiOutlineHeart {...propsFavorito} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Colaborador