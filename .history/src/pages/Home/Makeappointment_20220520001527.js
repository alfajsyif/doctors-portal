import React from 'react';
import doctor from '../../assets/images/doctor.png'
const Makeappointment = () => {
    return (
        <section className='flex'>
            <div>
                <img src={doctor} alt="" />
            </div>
            <div>
                <h3 className='text-xl text-indigo-600 text-bold'>Appointment</h3>
                <h2 className='text-3xl'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quisquam, reprehenderit deleniti eaque ipsum a ad! Odit veritatis beatae voluptatum porro officiis natus, animi earum? Sunt libero iste blanditiis, ab non repellendus reprehenderit consequuntur nulla ullam saepe ipsum cupiditate eveniet!</p>
            </div>
        </section>
    );
};

export default Makeappointment;