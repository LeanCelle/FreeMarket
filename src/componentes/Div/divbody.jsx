import Search from '../Search/search';
import Carrito from '../Carrito/carrito';
import Productos from '../ItemListContainer/listcontainer';


function DivBody () {
    return (
        <>
        <div id="divbody">
        <Carrito/>
        <Search/>
        <Productos/>
        </div>
        </>
    )
}

export default DivBody