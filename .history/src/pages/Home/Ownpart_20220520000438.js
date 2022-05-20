import React from 'react';
import img from '../../assets/images/treatment.png'
const Ownpart = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row">
    <img src={img} class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-white">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Ownpart;