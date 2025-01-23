/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function Slides({data}) {
  return (
    <div className='flex w-full gap-6'>
        {data.map((data) => {
            return <SliderCard key={data.img} data={data}/>;
        })}
    </div>
  );
}
