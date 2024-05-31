import './footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="floating-card">
        <p>Copyright Sagnik Dey, {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;