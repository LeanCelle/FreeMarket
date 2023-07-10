import Search from '../Search/search';
import Carrito from '../Carrito/carrito';
import Productos from '../ItemListContainer/listcontainer';


function BodyContainer() {
    return (
        <>
        <div id="divbody">
        <Carrito/>
        <Search/>
        <Productos
        text="Productos"
        bgColor="grey"
        color="white"
        fontSize="2rem"
        fontFamily="Helvetica"
        />
        </div>
        </>
    )
}

export default BodyContainer;