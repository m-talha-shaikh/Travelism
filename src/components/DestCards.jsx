


export default function DestCards({ imageURL, title }){

let imageStyle = {
  width: "30vw",
  height: "370px",
  borderRadius: "4%",
  objectFit: "none",
  objectPosition: "center center",
};



    return (
        <div>
            <img src={ imageURL } style={imageStyle} />
            <h3>{title}</h3>
        </div>
    )
}