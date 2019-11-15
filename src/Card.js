import React from 'react';

// const Card = ({id, name, email}) => { // destructuring in the arguments - pretty dank
const Card = (props) => {
  // const { id, name, email } = props; // can use but memory though
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${props.id}?size=200x200`} alt='robots' />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
