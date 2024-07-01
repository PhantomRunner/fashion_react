import './brands.css'

import hm from './../../fashion-images/brands/HM.png'
import obey from './../../fashion-images/brands/Obey.png'
import amazon from './../../fashion-images/brands/Amazon.png'
import lacoste from './../../fashion-images/brands/Lacoste.png'
import levis from './../../fashion-images/brands/Levis.png'
import shopify from './../../fashion-images/brands/Shopify.png'



function Brands() {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brand_list">
                    <li><a href="#!"><img src={hm} alt=""></img></a></li>
                    <li><a href="#!"><img src={obey} alt=""></img></a></li>
                    <li><a href="#!"><img src={amazon} alt=""></img></a></li>
                    <li><a href="#!"><img src={lacoste} alt=""></img></a></li>
                    <li><a href="#!"><img src={levis} alt=""></img></a></li>
                    <li><a href="#!"><img src={shopify} alt=""></img></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Brands;