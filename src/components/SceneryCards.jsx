import Card from './Card'

const data = [
{   id: 1,  url: "/bicycle.jpg",       title: "Escape the heat at these top 7 beaches near Lisbon"   },
{   id: 2,  url: "/hat.jpg",   title: "15 of the best things to do in Amsterdam"   },
{   id: 3,  url: "/lake.jpg",      title: "Having long COVID means I`ve had to change how and where I travel"   }
]



export default function SceneryCards(){
    const cards = data.map(card => (
        <Card key={card.id} imageURL={card.url} title={card.title} />
    ))
    return (
        <div style={{display:"flex", flexDirection: "row"}}>
            {cards}
        </div>
    )
}