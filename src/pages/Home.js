import React from 'react';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import { useSelector } from 'react-redux';
import Header from '../components/Header';

const Home = ({ filteredRobots }) => {
  console.log('Home');

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
  const robot = robots.filter((robot) => robot.name === params.id)[0];
  console.log({ robot });

  if (robot === undefined) {
    return <h1>Omo</h1>;
  }

  return (
    <>
      <div>{params.id}</div>
      <Card name={robot.name} email={robot.email} id={robot.id} />
      <div onClick={() => navigate(-1)}>Go back.</div>
    </>
  );
};
