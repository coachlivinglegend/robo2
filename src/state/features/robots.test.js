import reducer, { fetchRobots } from './robots';

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

describe('robots reducers', () => {
  const initialState = {
    value: [],
    status: null,
  };
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle the robots fetching', () => {
    expect(reducer(initialState, fetchRobots.pending())).toEqual({
      value: [],
      status: 'loading',
    });
  });

  test('should handle the robots fetched', () => {
    expect(reducer(initialState, fetchRobots.fulfilled(robots))).toEqual({
      value: robots,
      status: 'success',
    });
  });

  test('should handle robots not fetched', () => {
    expect(reducer(initialState, fetchRobots.rejected())).toEqual({
      value: [],
      status: 'failed',
    });

  })
});

