import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title">Card title!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quia odit soluta laboriosam saepe nobis.</p>
                div<div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt="" />
                    </div>
                    <div>
                        <h4 className='text-xl'> {review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;