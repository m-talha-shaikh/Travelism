import { useState } from 'react'
import DestCards from './DestCards'

const data = [
  {
    id: 1,
    url: "/dublin.jpg",
    title: "Dublin"
  },
  {
    id: 2,
    url: "/dunedin.jpeg",
    title: "Dunedin"
  },
  {
    id: 3,
    url: "/edinburgh.jpeg",
    title: "Edinburgh"
  }
];


export default function(){

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };


    let destinationStyle = {
        height: "100vh",
        margin: "0px",
    }

    let containerStyle = {
        display: "flex",
        flex: "1",
        justifyContent: "space-evenly",
    }

    const cards = data.map(card => (
        <DestCards key={card.id} imageURL={card.url} title={card.title} />
    ))

    return (
        <div style={destinationStyle}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", width: "95vw" }}>
            <h1 style={{ padding: "20px 50px" }}>Where to Next?</h1>
            <h3 style={{ borderRadius: "8px", border: "2px solid black", padding: "7px 10px" , 
            backgroundColor: isHover ? "#0057d9" : "white", color: isHover ? "white" : "black"}}
            onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave} >View All Destinations</h3>
        </div>

            <section style={containerStyle}>
                {cards}
            </section>
        </div>
    )
}