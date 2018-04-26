import React from 'react';
import { Carousel } from 'antd';


function onChange(a, b, c) {
  console.log(a, b, c);
}

const CarouselComp = (props) => {
  return (
    <Carousel afterChange={onChange}>
      <div>

        <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg" alt="" />

      </div>

      <div>
        <img src="https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg" alt="" />

      </div>
      <div>

        <img src="https://hips.hearstapps.com/del.h-cdn.co/assets/18/04/1517007351-delish-kids-rainbow-spaghetti-001.jpg" alt="" />

      </div>

      <div>
        <img src="https://static01.nyt.com/images/2015/07/27/dining/27SPAGHETTI/27SPAGHETTI-superJumbo.jpg" alt="" />

      </div>
    </Carousel>
  );
  // }
};

export default CarouselComp;
