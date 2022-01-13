import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRobots } from '../state/features/robots';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const App = () => {
  const searchFieldRedux = useSelector((state) => state.searchField.value);
  const robots = useSelector((state) => state.robots.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRobots());
  }, [dispatch]);

  const filteredRobots = robots.filter((rob) =>
    rob.name.toLocaleLowerCase().includes(searchFieldRedux)
  );

  if (robots.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <Routes>
      <Route path='/*' element={<Home filteredRobots={filteredRobots} />} />
      <Route path='/else' element={<h1>dunno</h1>} />
    </Routes>
  );
};

export default App;
