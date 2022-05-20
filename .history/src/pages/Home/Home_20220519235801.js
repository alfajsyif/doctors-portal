import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Ownpart from './Ownpart';
import Services from './Services';



const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Ownpart></Ownpart>
        </div>
    );
};

export default Home;