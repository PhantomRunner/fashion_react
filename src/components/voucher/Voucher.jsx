import './voucher.css'
import appStore from './../../fashion-images/icons/app-store.png'
import androidStore from './../../fashion-images/icons/google-play.png'
import voucher from './../../fashion-images/images/vouchers-img.png'

function Voucher() {
    return (
        <section className="voucher">
            <div className="container" id="voucher_section">
                <div className="voucher_content">
                    <div className="text">
                        <div className="voucher_title">DOWNLOAD APP &<br/>
                            GET THE VOUCHER!
                        </div>

                        <div className="body">Get 30% off for first transaction using
                            Rondovision mobile app for now.
                        </div>

                        <div className="application_links">
                            <img src={appStore}/>
                            <img src={androidStore}/>
                        </div>
                    </div>

                    <div className="image">
                        <img src={voucher}/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Voucher;