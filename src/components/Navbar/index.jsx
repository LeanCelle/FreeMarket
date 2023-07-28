import { Link } from "react-router-dom"
function Navbar () {
    return (
        <>
        <Link to='/'><img className="logo" src="https://i.postimg.cc/PrLQ4GP3/Captura-de-pantalla-2023-07-27-011146-removebg-preview.png" alt="Logo" /></Link>
        <nav className="nav-navbar">
            <ul className="navbar">
                <Link to='/category/Vehiculos'><li className="navbar">Vehículos</li></Link>
                <Link to='/category/Inmuebles'><li className="navbar">Inmuebles</li></Link>
                <Link to='/category/Supermercado'><li className="navbar">Supermercado</li></Link>
                <Link to='/category/Tecnologia'><li className="navbar">Tecnología</li></Link>
                <Link to='/category/Deportes y Fitness'><li className="navbar">Deportes y Fitness</li></Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar