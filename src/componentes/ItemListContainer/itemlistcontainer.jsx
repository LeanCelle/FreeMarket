import ItemList from "./itemlist"

function ItemListContainer (props) {
    return (
        <>
        <div className="productos" style={{background:props.bgColor, color: props.color, fontSize:props.fontSize, fontFamily:props.fontFamily}}>
            {props.text}
            <ItemList/>
        </div>
        </>
    )
}

export default ItemListContainer