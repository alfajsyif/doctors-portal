import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import Makeappointment from './Makeappointment';
import Ownpart from './Ownpart';
import Services from './Services';
import Testimonials from './Testimonials';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Ownpart></Ownpart>
            <Makeappointment></Makeappointment>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;