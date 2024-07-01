import './youngFavourite.css'
import Card from "../card/card";
import promo2 from "../../fashion-images/images/promo-01.jpg";
import promo3 from "../../fashion-images/images/promo-02.jpg";

function Favourite() {
    return (
        <section className="young_favourite">
            <div className="container">

                <div className="arrivals_header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>

                <div className="arrivals_cards">
                    <Card title="Hoodies & Sweetshirt" img={promo2}/>
                    <Card title="Coats & Parkas" img={promo3}/>
                </div>

            </div>
        </section>
    )
}

export default Favourite;