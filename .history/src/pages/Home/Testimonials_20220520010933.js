import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            name:'Alfaj',
            review:'Number one in NewYork',
            img:people1
        },
        {
            _id:2,
            name:'Jack',
            review:'Number one in NewYork',
            img:people2
        },
        {
            _id:3,
            name:'Oggy',
            review:'Number one in NewYork',
            img:people3
        }
    ]
    return (
        <section className='my-28'>
          <div className='flex justify-between'>
              <div>
               <h4 className='text-xl font-bold text-pink-600'>Testimonials</h4>
               <h3 className='text-3xl text-white'>What Our Patients Says</h3>
              </div>
              <div>
                  <img className='w-24 lg:w-48' src={quote} alt="" />
              </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                  reviews.map(review => <Review
                  key={review._id}
                  review={review}
                  ></Review>)
              }
          </div>
        </section>
    );
};

export default Testimonials;