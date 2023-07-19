import { useState } from 'react'

export default function Card({ imageURL, title }){

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    let cardStyle={
        display: "flex",
        alignItems : "flex-end",
        backgroundImage:`url(${imageURL})`,
        filter: isHover ? "brightness(110%)" : "brightness(80%)",
        height:"100vh",
        maxWidth: "100%",
        flex: "1",
        color: "white",
        padding: "0 5%",
        fontSize: "20px",
        transition: "filter 1.5s",
        cursor: "grab",
        fontFamily: "monospace",
    }

    return (
        <div style={cardStyle} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
            <h2>{title}</h2>
        </div>
    )
}