import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import Layout from "./Layout.jsx";
import Hero from "./Hero.jsx";
import LatestProducts from "./LatestProducts.jsx";
import FeaturedProducts from "./FeaturedProducts.jsx";


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
