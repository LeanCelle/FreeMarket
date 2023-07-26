import { Link } from "react-router-dom"
function Navbar () {
    return (
        <>
        <Link to='/'><img className="logo" src="https://i.postimg.cc/SKGW8SyV/freemarket-logo.png" alt="" /></Link>
        <nav className="nav-navbar">
            <ul className="navbar">
                <Link to='/vehiculos'><li className="navbar">Vehículos</li></Link>
                <Link to='/inmuebles'><li className="navbar">Inmuebles</li></Link>
                <Link to='/supermercado'><li className="navbar">Supermercado</li></Link>
                <Link to='/tecnologia'><li className="navbar">Tecnología</li></Link>
                <Link to= '/deportesyfitness'><li className="navbar">Deportes y Fitness</li></Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar