import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} KwesitheDev</p>
            </div>
        </footer>
    );
};

export default Footer;
