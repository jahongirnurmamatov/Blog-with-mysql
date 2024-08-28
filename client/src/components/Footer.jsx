import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="logo">
          <img src="/logo.png" alt="" />
          <span>logify</span>
        </div>
      <span>
        Made with love and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
