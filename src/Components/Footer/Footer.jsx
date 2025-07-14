import "./Footer.css";
function Footer() {
  return (
    <div>
      <footer id="Contacto">
        <div className="boxfooter">
          <div className="cardFooter">
            <h4>Food</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
              minima sapiente fuga. Animi sit, doloribus vel eos perferendis
              magnam quas omnis maiores exercitationem, porro nostrum illum
              harum accusantium ullam hic!
            </p>
            <div className="redes_Sociais">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a href="#">
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </div>
          </div>

          <div className="cardFooter">
            <h4>Fale Conosco</h4>
            <span>Telefone:</span>
            <p id="tel">+244945993547</p>
            <span>Email:</span>
            <p>gracimasakigraci@gmail.com</p>
          </div>

          <div className="cardFooter">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Cardápios</a>
              </li>
              <li>
                <a href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
