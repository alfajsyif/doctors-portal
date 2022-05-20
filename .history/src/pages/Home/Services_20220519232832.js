import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            description:"We try to provide our best service",
            img:'fluoride'

        }
    ]
    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Services</h3>
            <h2 className='text-3xl font-semibol text-green-500'>Services We Provide</h2>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Services;