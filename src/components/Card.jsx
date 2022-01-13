import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Card = ({ name, email, id }) => {
  const navigate = useNavigate();
  // const a = useNavigate();
  const location = useLocation();
  // const h = useNavigationType();
  // const k = useParams();
  // a: ƒ (to, options)
  // f: {pathname: '/', search: '', hash: '', state: null, key: 'default'}
  // h: "POP"
  // k: {*: ''}

  return (
    <div
      onClick={() => (location.pathname === '/' ? navigate(`/${name}`) : null)}
      className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'
    >
      <img alt='robots' src={`https://robohash.org/${id}test?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
