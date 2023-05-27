import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape__caixa'>
                <ul className='rodape__social'>
                    <li>
                        <a href="facebook.com" target="_blank"><img src="/imagens/fb.png" alt="Icone do Facebook" /></a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank"><img src="/imagens/tw.png" alt="Icone do Twitter" /></a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank"><img src="/imagens/ig.png" alt="Icone do Instagram" /></a>
                    </li>
                </ul>
                <img className='rodape__logo' src="/imagens/logo.png" alt="Logo do Organo" />
                <p className='rodape__creditos'>Desenvolvido por Alura.</p>
            </div>
        </footer>
    )
}

export default Rodape