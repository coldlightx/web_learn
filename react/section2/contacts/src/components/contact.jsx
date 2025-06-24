import "./contact.css";

export default function Contact({ img, name, phone, email }) {
  return (
    <div className="contact">
      <img src={img} alt={`Photo of ${name}`} className="photo" />
      <h2 className="info">{name}</h2>
      <p className="info">
        <img src="/images/phone-icon.png" alt="phone icon" />
        <span>{phone}</span>
      </p>
      <p className="info">
        <img src="/images/mail-icon.png" alt="mail icon" />
        <span>{email}</span>
      </p>
    </div>
  );
}
