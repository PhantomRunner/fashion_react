import './sale.css'
import saleImage from './../../fashion-images/images/promo-img.jpg'

function Sale() {
    return (<section className="sale">
            <div className="sale_content">

                <div className="sale_image">
                    <img src={saleImage} alt="image "/>
                </div>

                <div className="sale_text">
                    <div className="sale_title">
                        <span className="highlight">
                            <span>PAYDAY</span>
                        </span>
                        SALE NOW
                    </div>

                    <div className="sale_body">Spend minimal $100 get 30% off
                        voucher code for your next purchase
                    </div>

                    <div className="sale_2nd_body">
                        <p className="date">1 June - 10 June 2021</p>
                        *Terms & Conditions apply
                    </div>

                    <div className="sale_button_wrapper">
                        <a href="#!" className="sale_button"> Shop Now </a>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Sale;