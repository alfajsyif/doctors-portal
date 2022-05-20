import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Makeappointment from './Makeappointment';
import Ownpart from './Ownpart';
import Services from './Services';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Ownpart></Ownpart>
            <Makeappointment></Makeappointment>
        </div>
    );
};

export default Home;