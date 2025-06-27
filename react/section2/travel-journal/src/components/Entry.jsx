import marker from "/src/assets/marker.png";

export default function Entry({
  img,
  country,
  title,
  googleMapsLink,
  dates,
  text,
}) {
  return (
    <div className="entry">
      <div className="title-image">
        <img src={img.src} alt={img.alt} />
      </div>
      <div className="text-area">
        <div className="title">
          <img src={marker} alt="position marker" className="position-marker" />
          <span className="address">{country}</span>
          <a className="link" href={googleMapsLink}>
            View on Google Maps
          </a>
        </div>

        <h1>{title}</h1>
        <h5>{dates}</h5>
        <p className="description">{text}</p>
      </div>
    </div>
  );
}
