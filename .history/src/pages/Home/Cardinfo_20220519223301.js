import React from 'react';

const Cardinfo = ({img}) => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl bg-accent">
  <figure>
      <img src={img} alt="Album"/>

  </figure>
  <div class="card-body">
    <h2 class="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
    );
};

export default Cardinfo;