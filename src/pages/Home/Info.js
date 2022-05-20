import React from 'react';
import Cardinfo from './Cardinfo';
import clock from '../../assets/icons/clock.svg'
import map from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import quote from '../../assets/icons/quote.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
            <Cardinfo cardTitle ="Opening Hours" bgClass="bg-gradient-to-r from-green-400 to-blue-500" img={clock}></Cardinfo>
            <Cardinfo cardTitle ="Our Location" bgClass="bg-accent" img={map}></Cardinfo>
            <Cardinfo cardTitle ="Contact Us Now" bgClass="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" img={phone}></Cardinfo>
           
        </div>
    );
};

export default Info;