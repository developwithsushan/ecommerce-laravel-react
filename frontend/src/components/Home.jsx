import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import Layout from "./common/Layout.jsx";
import Hero from "./common/Hero.jsx";
import LatestProducts from "./common/LatestProducts.jsx";
import FeaturedProducts from "./common/FeaturedProducts.jsx";


const Home = () => {
    return (
        <>
            <Layout>
                <Hero/>
                <LatestProducts />
                <FeaturedProducts />
            </Layout>
        </>
    );
};

export default Home;
