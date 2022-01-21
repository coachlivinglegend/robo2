import { shallow } from 'enzyme';
import CardList from './CardList';

test('expect to take a snapshot', () => {
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
  const wrapper = shallow(<CardList robots={robots} />);
  expect(wrapper).toMatchSnapshot();
});
