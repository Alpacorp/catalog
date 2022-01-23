import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className='footer-info'>
        <footer>
          <h2>Diseñado y creado por Alpacorp</h2>
          <h4>Todos los derechos reservados | {new Date().getFullYear()}</h4>
        </footer>
      </section>
    </>
  )
};

export default Footer;