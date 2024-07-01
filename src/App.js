import Header from "./components/header/header";
import Promo from "./components/promo/promo";
import Brands from "./components/brands/brand";
import NewArrivals from "./components/new arriavals/new arrivals";
import Sale from "./components/sale/sale";
import YoungFavourite from "./components/young's favourite/YoungFavourite";
import Voucher from "./components/voucher/Voucher";
import ContactUs from "./components/contact/Contact us";
import Footer from "./components/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Promo />
            <Brands />
            <NewArrivals />
            <Sale />
            <YoungFavourite />
            <Voucher />
            <ContactUs />
            <Footer/>
        </div>
    );
}

export default App;
