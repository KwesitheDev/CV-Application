
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Header.css'; 

const Header = () => {
  return (
    <header className="header">
      <h1>CV Application</h1>
      <div className="header-icons">
        <a
          href="https://github.com/KwesitheDev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/godfred-kwesi-agyeman-b39009321/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://wa.me/+233502158535"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
