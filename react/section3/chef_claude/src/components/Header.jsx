import header_img from "../assets/chef-claude-icon.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <img src={header_img} alt="chef claude logo" />
      <span>Chef Claude</span>
    </header>
  );
}
