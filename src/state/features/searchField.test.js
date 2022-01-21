import reducer, { setSearchField } from './searchField';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    value: '',
  });
});

test('should handle the text field update', () => {
  const previousState = [];
  expect(reducer(previousState, setSearchField('Liane'))).toEqual({
    value: 'Liane',
  });
});

// test('should handle a todo being added to an existing list', () => {
//   const previousState = [
//     {
//       text: 'Run the tests',
//       completed: true,
//       id: 0,
//     },
//   ];
//   expect(reducer(previousState, todoAdded('Use Redux'))).toEqual([
//     {
//       text: 'Run the tests',
//       completed: true,
//       id: 0,
//     },
//     {
//       text: 'Use Redux',
//       completed: false,
//       id: 1,
//     },
//   ]);
// });
