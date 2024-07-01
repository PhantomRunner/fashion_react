import './new arrivals.css'
import Card from "../card/card";

import cat01Img from './../../fashion-images/categories/cat-01.jpg'
import cat02Img from './../../fashion-images/categories/cat-02.jpg'
import cat03Img from './../../fashion-images/categories/cat-03.jpg'

function NewArrivals() {
    return (
        <section className="arrivals">
            <div className="container">

                <div className="arrivals_header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>

                <div className="arrivals_cards">
                    <Card title="Hoodies & Sweetshirt" img={cat01Img}/>
                    <Card title="Coats & Parkas" img={cat02Img}/>
                    <Card title="Tees & T-Shirt" img={cat03Img}/>
                </div>

            </div>
        </section>)
}

export default NewArrivals;