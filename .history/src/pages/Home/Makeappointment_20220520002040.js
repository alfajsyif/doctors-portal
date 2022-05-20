import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const Makeappointment = () => {
    return (
        <section style={{background:`url(${appointment})`}}
         className='flex'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-indigo-600 text-bold'>Appointment</h3>
                <h2 className='text-3xl text-white text-bold'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quisquam, reprehenderit deleniti eaque ipsum a ad! Odit veritatis beatae voluptatum porro officiis natus, animi earum? Sunt libero iste blanditiis, ab non repellendus reprehenderit consequuntur nulla ullam saepe ipsum cupiditate eveniet!</p>
            </div>
        </section>
    );
};

export default Makeappointment;