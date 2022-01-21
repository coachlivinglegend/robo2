import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from 'redux-mock-store';
import { Router } from 'react-router-dom';

const middlewares = [];
const mockStore = configureStore(middlewares);
const robots = [
  {
    id: 1,
    name: 'John Doe',
    username: 'joneddidoe',
    email: 'sssskkkkkkkkkrrrrrrrrr@io',
  },
  {
    id: 2,
    name: 'John Doe',
    username: 'joneddidoe',
    email: 'sssskkkkkkkkkrrrrrrrrr@io',
  },
];

const initialState = {
  robots: { value: [], status: null },
  searchField: { value: '' },
};
test('expect to take a snapshot', () => {
  const store = mockStore(initialState);
  expect(
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  ).toMatchSnapshot();
});
