import React from 'react';

// const Card = ({id, name, email}) => { // destructuring in the arguments - pretty dank
const Card = (props) => {
  // const { id, name, email } = props; // can use but memory though
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}?size=200x200`} alt='robots' />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
