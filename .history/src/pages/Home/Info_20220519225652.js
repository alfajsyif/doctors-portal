import React from 'react';
import Cardinfo from './Cardinfo';
import clock from '../../assets/icons/clock.svg'
import map from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import quote from '../../assets/icons/quote.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Cardinfo cardTitle ="Opaning Hours" img={clock}></Cardinfo>
            <Cardinfo cardTitle ="Opaning Hours" img={map}></Cardinfo>
            <Cardinfo cardTitle ="Opaning Hours" img={phone}></Cardinfo>
           
        </div>
    );
};

export default Info;