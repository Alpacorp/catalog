import './Footer.css';

const Footer = () => {
  return (
    <>
      <footer className='footer-info'>
        <h2>Diseñado y creado por Alpacorp</h2>
        <h4>Todos los derechos reservados | {new Date().getFullYear()}</h4>
      </footer>
    </>
  )
};

export default Footer;