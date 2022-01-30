import "./Footer.css";

const Footer = () => {
  console.log("cargue de footer");
  return (
    <>
      <footer className="footer-info" tabIndex="0">
        <h2>Diseñado y creado por Alpacorp</h2>
        <h4>
          Todos los derechos reservados Upale Digital |{" "}
          {new Date().getFullYear()}
        </h4>
      </footer>
    </>
  );
};

export default Footer;
