import './promo.css'
import promoImag from './../../fashion-images/images/header-img.jpg'

function Promo() {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo_content">
                    <div className="promo_text">

                        <div className="promo_title">
                            <span className="highlight">
                                <span>
                                    LET’S
                                </span>
                            </span>

                            EXPLORE

                            <span className="highlight highlight--yellow">
                                <span>
                                    UNIQUE
                                </span>
                            </span>

                            CLOTHES.

                        </div>

                        <div className="promo_slogan">
                            Live for Influential and Innovative fashion!
                        </div>

                        <div className="promo_button_wrapper">
                            <a href="#!" className="promo_button"> Shop Now </a>
                        </div>
                    </div>
                    <div className="promo_image">
                        <img src={promoImag} alt="promoImag"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promo;