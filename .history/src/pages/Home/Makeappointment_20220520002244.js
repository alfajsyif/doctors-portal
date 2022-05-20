import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
const Makeappointment = () => {
    return (
        <section style={{background:`url(${appointment})`}}
         className='flex justify-center items-center'>
            <div className='flex-1'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-indigo-600 text-bold'>Appointment</h3>
                <h2 className='text-3xl text-white text-bold'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quisquam, reprehenderit deleniti eaque ipsum a ad! Odit veritatis beatae voluptatum porro officiis natus, animi earum? Sunt libero iste blanditiis, ab non repellendus reprehenderit consequuntur nulla ullam saepe ipsum cupiditate eveniet!</p>
                <br />
                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
            </div>
        </section>
    );
};

export default Makeappointment;