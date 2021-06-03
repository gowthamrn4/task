import React, { useEffect} from 'react';
import './index.css';

function Card({id,name,email,phone,age,gender}) {
  return (
<div class="card">
  <div class="avatar">
    <img src={"https://source.unsplash.com/random/200x200?sig="+id}/>
  </div>
  <div class="title">
    <span>{name}</span>
  </div>
  <div class="description">
    {email}
  </div>
  <div class="description">
  {phone}
  </div>
  <div class="social">
    <ul>
      <li><i class="fab fa-facebook"></i></li>
      <li><i class="fab fa-twitter"></i></li>
      <li><i class="fab fa-github"></i></li>
      <li><i class="fas fa-link"></i></li>
    </ul>
  </div>
</div>
  );
}

export default Card;