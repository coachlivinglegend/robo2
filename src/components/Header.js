import React, { memo } from 'react';

const Header = () => {
  console.log('Header');
  return <h1 className='f1'>RoboFriends</h1>;
};

export default memo(Header);