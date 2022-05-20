import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold text-white">Your New smile Starts Here</h1>
                    <p class="py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque eaque quam, qui iste aut sapiente repudiandae quidem id iusto cupiditate!</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;