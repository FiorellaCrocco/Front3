import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/shorts'>Shorts</Link>
                <Link to='/suscripciones'>Suscripciones</Link>
                <Link to='/explorar'>Explorar</Link>
            </nav>
        </header>
    )
}

export default Header;