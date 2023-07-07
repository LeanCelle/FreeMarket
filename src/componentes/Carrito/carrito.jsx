

function Carrito () {

    return (
        <>
        
        <nav className="navbar bg-body-tertiary navCarrito">
          <div className="container-fluid div-carrito">
          <button className= "navbar-toggler button-carrito" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <img className="carrito" src="./carrito.png" alt="" />
              <span className="contadorCarrito">0</span>
              </button>
              <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Carrito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              
            </div>
            </div>
        </div>
      </nav>
        </>
    )
}

export default Carrito