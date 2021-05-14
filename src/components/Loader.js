import React from 'react';
import Gif from '../Image/animation.gif'

function ShowDetail() {
  return (
    <div className="loader center">
      <img src={Gif} alt="" />
    </div>
  );
}

export default ShowDetail;