function Productos (props) {
    return (
        <>
        <div className="productos" style={{background:props.bgColor, color: props.color, fontSize:props.fontSize, fontFamily:props.fontFamily}}>
            {props.text}
        </div>
        </>
    )
}

export default Productos