
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Images from "../components/Images";
import Layout from "../components/Layout";
import Marketing from "../components/Marketing";
import Ratings from "../components/Ratings";
import Shop from "../components/Shop";

function Home() {
    return (
        <Layout>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blanche | Super Soft, Stylish Bed Linen, Made With Love</title>
            </Helmet>
           <Hero/>
           <div className="heading">
               <p>Our premium products got the finest quality cotton that create an exquisite lightweight textile that's both soft and crisp - garanteed to give you a wonderful night's sleep.</p>
           </div>
           <Shop/>
            <div className="heading">
                <p style={{fontSize: 25}}>Best Sellers</p>
            </div>
            <Marketing/>
            <Ratings/>
            <Images/>
            <Footer/>
        </Layout>
    );
}

export default Home;
