import { Link } from "react-router-dom";

function Menupg() {
    return (
        <div>
            <ul className='Menupg'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/sobre">Sobre nós</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/agenda">Agenda</Link></li>
            </ul>
        </div>
    )
}

export default Menupg