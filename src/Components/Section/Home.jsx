import "./Home.css";
import Dish from "../assets/dish-1.png";
function Home() {
  return (
    <div>
      <section id="Home">
        <div className="banner">
          <img src={Dish} alt="Image logo" />
        </div>
        <div className="boxdescriptionHome">
          <div className="descriptionHome">
            <h1 className="tituloHome"><span>Food</span> Descubra sabores incríveis em cada Mordida!</h1>
            <p className="paragradescription">
              Nesta página,você vai explorar o melhor da culinária feita com carinho, cor e sabor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
