import { BsPlusSquare, BsSquare } from "react-icons/bs";
import './BotaoOcultar.css'


const BotaoOcultar = () => {
    return (
        <div className='botao-ocultar'>
            <div className='botao-ocultar__conteudo'>
                <BsPlusSquare className='botao-ocultar__icone botao-ocultar__icone--superior'/>
                <BsSquare className='botao-ocultar__icone botao-ocultar__icone--inferior'/>
            </div>
        </div>
    )
}

export default BotaoOcultar