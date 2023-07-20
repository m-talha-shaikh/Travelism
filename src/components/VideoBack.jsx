export default function VideoBack() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <video
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <h1 style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "50px", textAlign:"center" }}>
        Explore the Beauty of Nature <br></br> Explore Destinations
      </h1>
    </div>
  );
}
