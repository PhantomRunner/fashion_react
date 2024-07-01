import './contact us.css'

function ContactUs() {
    return(
        <section className="contact_us">
            <div className="contact_text">
                <div className="contact_title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
                <div className="contact_body">Type your email down below and be young wild generation</div>
                {/*//todo finish form*/}
                <div className="contact_form">
                    <input type="text" id="email" placeholder="Add your email here"/>
                    <input type="submit" value="SEND"/>
                </div>
            </div>

        </section>
    )
}

export default ContactUs;