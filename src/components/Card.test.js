import { shallow, render, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import Card from './Card';

test('expect to render Card Component', () => {
  expect.assertions(1);
  expect(
    shallow(
      <BrowserRouter>
        <Card />
      </BrowserRouter>
    ).length
  ).toEqual(1);
});

test('expect to take a snapshot', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  const wrapper = render(
    <BrowserRouter>
      <Card />
    </BrowserRouter>
  );
  expect(wrapper).toMatchSnapshot();
});
