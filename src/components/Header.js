import "../assets/scss/Header.scss";
import Logo from "../assets/images/youth_sport_logo.jpeg";
export default function Header() {
  return (
    <header className="header">
      <div className="header-1">
        <a href="/#">
          <img src={Logo} className="header-logo" alt="Logo" />
        </a>
      </div>
      <div className="header-2">
        <div>About</div>
        <div>Event</div>
        <div>Achievement</div>
        <div>Activity</div>
        <div>Blog</div>
        <div>Services</div>
      </div>
      <div className="header-3">
        <div>Contact</div>
      </div>
    </header>
  );
}
