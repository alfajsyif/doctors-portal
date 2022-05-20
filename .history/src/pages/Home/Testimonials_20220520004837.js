import React from 'react';
import quote from '../../assets/icons/quote.svg'
const Testimonials = () => {
    return (
        <section>
          <div className='flex justify-between'>
              <div>
               <h4 className='text-xl font-bold text-pink-600'>Testimonials</h4>
               <h3 className='text-3xl text-white'>What Our Patients Says</h3>
              </div>
              <div>
                  <img className='w-24 lg:w-48' src={quote} alt="" />
              </div>
          </div>
          <div></div>
        </section>
    );
};

export default Testimonials;