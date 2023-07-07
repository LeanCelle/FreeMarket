function Button (props) {
    return (
        <>
        <button
        className="button"
        style={{background: props.bgcolor, color: props.color, width: props.width, padding: props.padding, margin: props.margin, fontSize: props.fontSize, fontFamily: props.fontFamily, border: props.border}}
        >
            {props.text}
        </button>
        </>
    )
}

export default Button