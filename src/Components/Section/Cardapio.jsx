import "./Cardapio.css";
import Dish3 from "../assets/dish3.png";
import Dish9 from "../assets/dish9.png"
import Dish6 from "../assets/dish6.png"
import Dish10 from "../assets/dish10.png"
import Dish1 from "../assets/dish-1.png"
import Dish5 from "../assets/dish5.png"

function Card() {
  return (
    <div>
      <section id="Cardapio">
        <h2 className="tituloSection">Cardápios</h2>
        <div className="boxcard">
          <div className="card">
            <div className="carImage">
              <img src={Dish3} alt="" />
            </div>
            <div className="cardDescription">
              <h3>Lorem</h3>
            </div>
            <div className="boxbtn">
              <button><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>

          <div className="card">
            <div className="carImage">
              <img src={Dish9} alt="" />
            </div>
            <div className="cardDescription">
              <h3>Lorem</h3>
            </div>
            <div className="boxbtn">
              <button><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>

          <div className="card">
            <div className="carImage">
              <img src={Dish6} alt="" />
            </div>
            <div className="cardDescription">
              <h3>Lorem</h3>
            </div>
            <div className="boxbtn">
              <button><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>

          <div className="card">
            <div className="carImage">
              <img src={Dish10} alt="" />
            </div>
            <div className="cardDescription">
              <h3>lorem</h3>
            </div>
            <div className="boxbtn">
              <button><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>

          <div className="card">
            <div className="carImage">
              <img src={Dish1} alt="" />
            </div>
            <div className="cardDescription">
              <h3>Lorem</h3>
            </div>
            <div className="boxbtn">
              <button><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>

          <div className="card">
            <div className="carImage">
              <img src={Dish5} alt="" />
            </div>
            <div className="cardDescription">
              <h3>Lorem</h3>
            </div>
            <div className="boxbtn">
              <button><i className="fa-solid fa-basket-shopping"></i></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Card;
