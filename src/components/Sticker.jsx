import { useState } from 'react' 

export default function Sticker(){

    const [sticky, setSticky] = useState(true);

    const removeSticker = () => {
        setSticky(false);
    }

    const stickerStyle = {
        display: sticky ? "flex" : "none",
        backgroundColor: "black", 
        alignItems: "baseline",
        color: "lightgrey",
        fontSiSize: "10px",
        fontWeight: "100",
        fontFamily: "monospace",
        textAlign: "center",
        justifyContent: "center",
        fontStyle: "italic",
    }

    return (
        <div style={stickerStyle}>
            <h2>Can`t decide check our <b style={{textDecoration: "underline", color: "white"}}>Top Destinations</b></h2>
            <a onClick={removeSticker} style={{paddingLeft: "50px", fontSize: "150%", color : "white"}}>X</a>
        </div>
    )
}