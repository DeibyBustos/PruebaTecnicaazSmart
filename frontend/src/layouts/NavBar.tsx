import '../styles/NavBar.css';


const NavBar = () => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li>
                        <a href="/">Dispositivos</a>
                    </li>
                    <li>
                        <a href="/device/create">Crear Dispositivo</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar
