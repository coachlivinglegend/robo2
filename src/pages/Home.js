import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Home = ({ filteredRobots }) => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <div>
            <div className='tc'>
              <Header />
              <SearchBox />
              <Scroll>
                <CardList robots={filteredRobots} />
              </Scroll>
            </div>
          </div>
        }
      />
      <Route path=':id' element={<ACard />} />
    </Routes>
  );
};

export default Home;

const ACard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const robots = useSelector((state) => state.robots.value);
  const { name, email, id } = robots.filter(
    (robot) => robot.name === params.id
  )[0];

  return (
    <>
      <div>{params.id}</div>
      <Card name={name} email={email} id={id} />
      <div onClick={() => navigate(-1)}>Go back.</div>
    </>
  );
};
