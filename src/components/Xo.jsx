import React from 'react';

export default function Xo({id}) {

    function handleClick(event) {
        console.log(event.target.innerHTML);
    }

  return (
    <div className='gridItem'>
      <h1 className='XO' id={id}></h1>
    </div>
  )
}
